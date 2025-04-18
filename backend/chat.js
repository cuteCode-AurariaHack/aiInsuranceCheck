require("dotenv").config(); // Load env vars first
const openai = require("./openai");

const ASSISTANT_ID = process.env.Assis_ID;
const FILE_ID = "your-file-id";

async function chatWithAssistant(userMessage) {
  try {
    const thread = await openai.beta.threads.create();

    // Ensure thread.id is a string (force the string conversion)
    let threadId = thread.id;
    console.log("Raw thread ID:", threadId);

    if (typeof threadId !== 'string') {
      console.error("Error: thread.id is not a string, it is:", typeof threadId);
      threadId = String(threadId); // Force it to a string if it's not
    }
    
    console.log("Using threadId as string:", threadId); // Debugging output

    await openai.beta.threads.messages.create(
    {
      thread_id: threadId, // Directly using threadId here
      role: "user",
      content: userMessage,
    });
console.log("printed")
    const run = await openai.beta.threads.runs.create({
      thread_id: threadId,
      assistant_id: ASSISTANT_ID,
      file_ids: [FILE_ID],
    });

    let status = run.status;
    while (!["completed", "failed", "cancelled"].includes(status)) {
      await new Promise(res => setTimeout(res, 1000));
      const updated = await openai.beta.threads.runs.retrieve({
        thread_id: threadId,
        run_id: run.id,
      });
      status = updated.status;
    }

    if (status !== "completed") {
      console.error(`Run did not complete. Status: ${status}`);
      return;
    }

    const messages = await openai.beta.threads.messages.list({ thread_id: threadId });
    const assistantMessage = messages.data.find(msg => msg.role === "assistant");
    const response = assistantMessage?.content?.[0]?.text?.value || "No response.";
    console.log("Assistant response:", response);
  } catch (err) {
    console.error("Chat error:", err);
  }
}

module.exports = { chatWithAssistant };

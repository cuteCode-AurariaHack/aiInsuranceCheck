require("dotenv").config(); // Load env vars first
const openai = require("./openai");

const ASSISTANT_ID = "your-assistant-id";
const FILE_ID = "your-file-id";

async function chatWithAssistant(userMessage) {
  try {
    const thread = await openai.beta.threads.create();

    await openai.beta.threads.messages.create({
      thread_id: thread.id,
      role: "user",
      content: userMessage,
    });

    const run = await openai.beta.threads.runs.create({
      thread_id: thread.id,
      assistant_id: ASSISTANT_ID,
      file_ids: [FILE_ID],
    });

 
    let status = run.status;
    while (!["completed", "failed", "cancelled"].includes(status)) {
      await new Promise(res => setTimeout(res, 1000));
      const updated = await openai.beta.threads.runs.retrieve({
        thread_id: thread.id,
        run_id: run.id,
      });
      status = updated.status;
    }

    if (status !== "completed") {
      console.error(`Run did not complete. Status: ${status}`);
      return;
    }

   
    const messages = await openai.beta.threads.messages.list({ thread_id: thread.id });
    const assistantMessage = messages.data.find(msg => msg.role === "assistant");
    const response = assistantMessage?.content?.[0]?.text?.value || "No response.";
    console.log("Assistant response:", response);
  } catch (err) {
    console.error("Chat error:", err);
  }
}

module.exports={chatWithAssistant};

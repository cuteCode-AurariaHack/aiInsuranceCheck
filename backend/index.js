var express = require('express');
var cors = require('cors');
const { chatWithAssistant } = require("./chat");
require('dotenv').config(); // Load environment variables

var app = express();
app.use(cors());
app.use(express.json()); // This will parse JSON bodies
var router = express.Router();

/*app.post("/api/chat", async (req, res) => {
    const { message } = req.body;
  
    if (!message) return res.status(400).json({ error: "Message is required" });
  
    try {
      const response = await chatWithAssistant(message);
      res.json({ response });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Something went wrong" });
    }
  }); */

  // Temporary mock response for frontend testing
router.post("/api/chat", async (req, res) => {
    const { message } = req.body;
  
   
    await new Promise(res => setTimeout(res, 1000));
  
    return res.json({
      success: true,
      response: `Echo: ${message}`,
      thread_id: "mock_thread_id",
      run_id: "mock_run_id",
      assistant_id: "mock_assistant_id",
    });
  });
  

app.use('/', router);
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on port ${process.env.PORT || 8080}`);
});

module.exports = app; 
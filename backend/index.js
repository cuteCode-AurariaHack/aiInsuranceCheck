var express = require('express');
var cors = require('cors');
const { chatWithAssistant } = require("./chat");
require('dotenv').config(); // Load environment variables

var app = express();
app.use(cors());
app.use(express.json()); // This will parse JSON bodies
var router = express.Router();

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    // Mocked response instead of calling chatWithAssistant
    const mockResponse = `You said: "${message}". Here's a mock reply!`;

    console.log({ response: mockResponse });
    res.json({ response: mockResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

  

app.use('/', router);
app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on port ${process.env.PORT || 8080}`);
});

module.exports = app; 
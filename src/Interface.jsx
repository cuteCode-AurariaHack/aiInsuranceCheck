import React, { useState } from 'react'


const Interface = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return

    const userMessage = { sender: 'user', text: input }
    const botMessage = {
      sender: 'bot',
      text: generateBotReply(input),
    }

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage])
    setInput('')
  }

  const generateBotReply = (inputText) => {
    // For now, just returns a generic message — can customize this later
    return "I'm just a simple bot, but I'm here to help!"
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : ''}`}>
            <div
              className={`p-4 rounded-xl max-w-3xl w-fit ${
                msg.sender === 'user'
                  ? 'bg-gray-300 text-black'
                  : 'bg-blue-500 text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="w-full border-t border-gray-300 bg-white p-4">
        <div className="flex max-w-4xl mx-auto items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Interface

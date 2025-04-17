import React from 'react'

const Interface = () => {
  return (
    <div className="flex flex-col h-screen justify-between bg-gray-100 p-4">
  <div className="flex-1 overflow-auto">
    <div className="flex flex-col space-y-4">
      <div className="chat-message bot">
        <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
          Hello! How can I help you today?
        </div>
      </div>
      <div className="chat-message user">
        <div className="bg-gray-200 text-black p-3 rounded-lg max-w-xs self-end">
          I need some assistance.
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <input
      type="text"
      placeholder="Type a message"
      className="flex-1 p-3 rounded-lg border border-gray-300"
    />
    <button className="bg-blue-500 text-white p-3 rounded-lg">
      Send
    </button>
  </div>
</div>

  )
}

export default Interface
import React, { useState } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAiQuery, setIsAiQuery] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const toggleAiQuery = () => {
    setIsAiQuery(!isAiQuery);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Persistent symbol */}
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg cursor-pointer"
          aria-label="Open AI Chatbot"
        >
          {/* Placeholder for AI symbol */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l7-7 3 3-7 7-3-3zM8 12l-7 7 3 3 7-7-3-3zM8 7l7-7 3 3-7 7-3-3z"
            ></path>
          </svg>
        </button>
      )}

      {/* Chatbot window */}
      {isOpen && (
        <div className="w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-semibold">AI Assistant</h3>
            <button onClick={toggleChatbot} aria-label="Close AI Chatbot">
              &times;
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {/* Chat messages will go here */}
            <p>Chat content...</p>
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="aiQueryCheckbox"
                checked={isAiQuery}
                onChange={toggleAiQuery}
                className="mr-2"
              />
              <label htmlFor="aiQueryCheckbox" className="text-sm">AI Query</label>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;

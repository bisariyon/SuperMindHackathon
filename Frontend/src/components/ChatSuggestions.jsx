import React from 'react';

export const ChatSuggestions = ({ onSuggestionClick }) => {
  const suggestions = [
    "Tell me the best post type for high engagement",
    "What's should I post today?",
    "How can I increase my followers?",
    "Average likes on a reel",
    "Tell me a good caption"
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSuggestionClick(suggestion)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full 
                     text-sm transition-colors duration-200 border border-gray-300
                     hover:border-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-gray-400 focus:ring-opacity-50"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestions;
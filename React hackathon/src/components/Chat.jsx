import { useState, useEffect } from "react";
import axios from "axios";
import bgImg from "../assets/bgimg4.jpeg";
import { FaPaperPlane, FaUser, FaRobot } from "react-icons/fa";
import { ChatSuggestions } from "./ChatSuggestions";
import ChatSkeleton from "./ChatSkeleton";
import { formatBotResponse } from "../utils/textFormatter";

const Chat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("chatHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(history));
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    
    try {
      const res = await axios.post("http://localhost:3000/run-flow", { inputValue: input });
      let responseText = res.data.outputs[0]?.outputs[0]?.outputs?.message?.message?.text || "No response";

      responseText = formatBotResponse(responseText);

      const newEntry = { prompt: input, response: responseText };
      setHistory((prev) => [...prev, newEntry]);
      setResponse(responseText);
    } catch (error) {
      console.error("Error:", error);
      const errorEntry = { prompt: input, response: "Error connecting to Langflow." };
      setHistory((prev) => [...prev, errorEntry]);
      setResponse("Error connecting to Langflow.");
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem("chatHistory");
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar for Chat History */}
      <div className="w-1/4 bg-gray-800 text-gray-100 flex flex-col border-r border-gray-700">
        <div className="flex justify-between items-center px-4 py-4 bg-gray-800 border-b border-gray-700">
          <h2 className="text-xl font-bold text-gray-100">Chat History</h2>
          {history.length > 0 && (
            <button
              onClick={handleClearHistory}
              className="bg-red-600 hover:bg-red-700 text-gray-100 text-sm py-1 px-3 rounded transition-colors duration-200"
            >
              Clear History
            </button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto">
          {history.length > 0 ? (
            history.map((entry, index) => (
              <div
                key={index}
                className="p-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
              >
                <p className="text-sm font-medium text-gray-300">User: {entry.prompt}</p>
              </div>
            ))
          ) : (
            <p className="px-4 py-4 text-gray-500">No history yet...</p>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div
        className="w-3/4 flex flex-col bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Chat Messages */}
        <div className="p-6 overflow-y-auto" style={{ flexGrow: 1 }}>
          {history.map((entry, index) => (
            <div key={index} className="mb-6">
              {/* User Prompt */}
              <div className="flex justify-end">
                <div className="flex items-center space-x-2">
                  <FaUser className="text-indigo-400 text-3xl" />
                  <div className="bg-indigo-600 text-gray-100 rounded-lg p-3 max-w-xl shadow-lg">
                    <p>{entry.prompt}</p>
                  </div>
                </div>
              </div>
              
              {/* Bot Response */}
              <div className="flex justify-start mt-3">
                <div className="flex items-center space-x-2">
                  <FaRobot className="text-purple-400 text-3xl" />
                  <div className="bg-purple-600 text-gray-100 rounded-lg p-3 max-w-xl shadow-lg">
                    <p>{entry.response}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="mb-6">
              {/* User's message skeleton */}
              <div className="flex justify-end">
                <div className="flex items-center space-x-2">
                  <FaUser className="text-indigo-400 text-3xl" />
                  <div className="bg-indigo-600 text-gray-100 rounded-lg p-3 max-w-xl shadow-lg">
                    <p>{input}</p>
                  </div>
                </div>
              </div>
              
              {/* Bot's loading skeleton */}
              <ChatSkeleton />
            </div>
          )}
        </div>

        <div className="flex justify-center" style={{ width: "70%", margin: "0 auto" }}>
          <ChatSuggestions onSuggestionClick={handleSuggestionClick} />
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center p-4 bg-gray-800 shadow-lg rounded-lg mx-auto border border-gray-700"
          style={{
            width: "70%",
            marginBottom: "6rem",
          }}
        >
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     placeholder-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="ml-4 bg-purple-600 hover:bg-purple-700 text-gray-100 p-3 rounded-lg
                     transition-colors duration-200"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
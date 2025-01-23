import { useState } from "react";
import { io } from "socket.io-client";
import { FaPaperPlane } from "react-icons/fa";

const socket = io("http://localhost:8080");

const Typing: React.FC = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      userId: socket.id,
      content: message,
      sender: "self", //cambiar
      timestamp: new Date(),
    };

    socket.emit("message", newMessage);
    setMessage("");
    console.log(message);
  };
  return (
    <div className="flex items-center w-full gap-2 p-4">
      <input
        className="flex-1 rounded-full border border-gray-300 text-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe un mensaje...✍🏼"
        maxLength={500}
      />
      <button
        className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
        aria-label="Send message"
        onClick={sendMessage}
      >
        <FaPaperPlane className="w-5 h-5 mr-1" />
      </button>
      {/* cambiar a componente */}
    </div>
  );
};

export default Typing;

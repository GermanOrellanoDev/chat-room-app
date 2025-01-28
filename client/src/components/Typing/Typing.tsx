import { useState } from "react";
import { io } from "socket.io-client";
import { FaPaperPlane } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import Picker from "emoji-picker-react";
import "emoji-picker-react";

const socket = io("http://localhost:8080"); //modificar

const Typing: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState<boolean>(false);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      userId: socket.id,
      content: message,
      sender: socket.id, //cambiar
      timestamp: new Date(),
    };

    socket.emit("message", newMessage);
    setMessage("");
  };

  const handleEmojiSelect = (emoji: any) => {
    setMessage((prev) => prev + emoji.emoji);
  };

  return (
    <div className="relative flex items-center w-full gap-2 p-4">
      <input
        className="flex-1 rounded-full border border-purple-200 text-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe un mensaje...✍🏼"
        maxLength={500}
      />
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
        aria-label="Send message"
        onClick={sendMessage}
      >
        <FaPaperPlane className="w-5 h-5 mr-1" />
      </button>
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
        onClick={() => setShowEmoji(!showEmoji)}
      >
        {showEmoji ? (
          <IoMdCloseCircle className="w-5 h-5" />
        ) : (
          <MdEmojiEmotions className="w-5 h-5" />
        )}
      </button>
      {showEmoji && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
          <Picker height={300} onEmojiClick={handleEmojiSelect} />
        </div>
      )}
    </div>
  );
};

export default Typing;

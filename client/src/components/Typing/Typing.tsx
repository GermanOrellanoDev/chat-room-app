import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { FaPaperPlane } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import Picker from "emoji-picker-react";
import "emoji-picker-react";
import { useUser } from "../../contexts/UserContext";

const socket = io("https://chat-room-app-production.up.railway.app", {
  transports: ["websocket", "polling"],
});

const Typing: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const { userId } = useUser();

  const pickerRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!message.trim()) return;

    const nickname = sessionStorage.getItem("nickname") || "Anon";

    console.log(
      "Enviando mensaje con userId:",
      userId,
      "y nickname: ",
      nickname
    );

    const newMessage = {
      userId,
      nickname,
      content: message,
      timestamp: new Date().toString(),
    };

    socket.emit("message", newMessage);
    setMessage("");
  };

  const handleEmojiSelect = (emoji: any) => {
    setMessage((prev) => prev + emoji.emoji);
  };

  const toggleEmojiPicker = () => setShowEmoji((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShowEmoji(false);
      }
    };

    if (showEmoji) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmoji]);

  return (
    <div className="relative flex items-center w-full gap-1 p-2 md:gap-2 md:p-4">
      <input
        className="flex-1 rounded-full border border-purple-200 text-base sm:text-lg md:text-xl text-gray-500 px-2 py-1 md:px-4 md:py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Escribe un mensaje...✍🏼"
        maxLength={500}
      />
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
        aria-label="Send message"
        onClick={sendMessage}
      >
        <FaPaperPlane className="w-3 h-3 mr-0.5 md:w-5 md:h-5 md:mr-1" />
      </button>
      <button
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
        onClick={toggleEmojiPicker}
      >
        {showEmoji ? (
          <IoMdCloseCircle className="w-3 h-3 md:w-5 md:h-5" />
        ) : (
          <MdEmojiEmotions className="w-3 h-3 md:w-5 md:h-5" />
        )}
      </button>
      {showEmoji && (
        <div
          ref={pickerRef}
          className="absolute bottom-full left-1/2 md:right-3 transform -translate-x-1/2 md:-translate-x-2 mb-2 z-50"
        >
          <Picker
            className="h-80"
            height={300}
            width={"auto"}
            onEmojiClick={handleEmojiSelect}
          />
        </div>
      )}
    </div>
  );
};

export default Typing;

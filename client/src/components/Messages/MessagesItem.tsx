import { useState } from "react";

interface MessagesItemProps {
  userId: number;
  nickname: string;
  content: string;
  sender: number;
  timestamp: Date;
}

const MessagesItem: React.FC<MessagesItemProps> = ({
  userId,
  nickname,
  content,
  sender,
  timestamp,
}: MessagesItemProps) => {
  const [isSelf, setIsSelf] = useState<boolean>(false);

  if (userId === sender) {
    setIsSelf(true);
  }

  return (
    <div
      className={`flex ${
        isSelf ? "justify-end" : "justify-start"
      } mb-4 text-black`}
      role="listitem"
      aria-label="chat"
    >
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isSelf
            ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-br-none shadow-lg transform hover:scale-[1.02] transition-transform"
            : "bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-bl-none shadow-lg transform hover:scale-[1.02] transition-transform"
        }`}
      >
        <small className="font-bold text-base sm:text-lg md:text-xl underline text-white">
          {userId}
        </small>
        <p className="text-base sm:text-lg md:text-xl break-words">{content}</p>
        <small className="text-gray-300 text-xs sm:text-base md:text-lg">
          {new Date(timestamp).toLocaleTimeString()}
        </small>
      </div>
    </div>
  );
};

export default MessagesItem;

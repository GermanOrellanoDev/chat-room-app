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
  const isSelf = sender === userId;
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
        <small className="font-bold text-lg underline text-white">
          {nickname}
        </small>
        <p className="text-base break-words">{content}</p>
        <small className="text-gray-300 text-xs">
          {new Date(timestamp).toLocaleTimeString()}
        </small>
      </div>
    </div>
  );
};

export default MessagesItem;

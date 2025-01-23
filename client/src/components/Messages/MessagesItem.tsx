interface MessagesItemProps {
  userId: number;
  content: string;
  sender: string;
  timestamp: Date;
}

const MessagesItem: React.FC<MessagesItemProps> = ({
  userId,
  content,
  sender,
  timestamp,
}: MessagesItemProps) => {
  const isSelf = sender === "self";
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
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-300 text-gray-800 rounded-bl-none"
        }`}
      >
        <p>{content}</p>
        <small className="text-gray-300 text-xs">
          {new Date(timestamp).toLocaleTimeString()}
        </small>
      </div>
    </div>
  );
};

export default MessagesItem;

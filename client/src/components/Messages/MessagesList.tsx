import { Message } from "../models/Message.model";
import MessagesItem from "./MessagesItem";

interface MessagesListProps {
  messages: Message[];
}

const MessagesList: React.FC<MessagesListProps> = ({
  messages,
}: MessagesListProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4" role="list">
      {messages.map((msg, index) => (
        <MessagesItem
          key={index}
          userId={msg.userId}
          content={msg.content}
          sender={msg.sender}
          timestamp={msg.timestamp}
        />
      ))}
    </div>
  );
};

export default MessagesList;

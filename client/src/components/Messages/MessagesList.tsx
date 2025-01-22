import { Message } from "../models/Message.model";
import MessagesItem from "./MessagesItem";

interface MessagesListProps {
  messages: string[];
}

const MessagesList: React.FC<MessagesListProps> = ({ messages }) => {
  return (
    <>
      <h2>MessagesList</h2>
      <div>
        {messages.map((msg, index) => (
          <MessagesItem key={index} message={msg} />
        ))}
      </div>
    </>
  );
};

export default MessagesList;

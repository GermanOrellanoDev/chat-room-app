import { useEffect, useRef } from "react";
import { Message } from "../models/Message.model";
import MessagesItem from "./MessagesItem";

interface MessagesListProps {
  messages: Message[];
  nickname: string;
  id: number;
}

const MessagesList: React.FC<MessagesListProps> = ({
  messages,
  nickname,
  id,
}: MessagesListProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4" role="list">
      {messages.map((msg, index) => (
        <MessagesItem
          key={index}
          userId={id}
          nickname={nickname}
          content={msg.content}
          sender={msg.sender}
          timestamp={msg.timestamp}
        />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default MessagesList;

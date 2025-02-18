import { useEffect, useRef } from "react";
import { Message } from "../models/Message.model";
import MessagesItem from "./MessagesItem";

interface MessagesListProps {
  messages: Message[];
  nickname: string;
}

const MessagesList: React.FC<MessagesListProps> = ({
  messages,
  nickname,
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
          nickname={nickname}
          content={msg.content}
          timestamp={msg.timestamp}
          senderId={msg.userId}
          senderNickname={msg.nickname}
        />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default MessagesList;

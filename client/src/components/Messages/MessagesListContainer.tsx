import React, { useEffect, useState } from "react";
import { Message } from "../models/Message.model";
import MessagesList from "./MessagesList";
import { io } from "socket.io-client";
import Typing from "../Typing/Typing";

const socket = io("http://localhost:8080"); //cambiar a URL

interface MessagesListContainerProps {
  nickname: string;
}

const MessagesListContainer: React.FC<MessagesListContainerProps> = ({
  nickname,
}: MessagesListContainerProps) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 flex flex-col bg-white">
        <MessagesList messages={messages} nickname={nickname} />
        <Typing />
      </div>
    </>
  );
};

export default MessagesListContainer;

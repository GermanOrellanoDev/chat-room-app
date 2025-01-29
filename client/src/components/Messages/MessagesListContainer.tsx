import React, { useEffect, useState } from "react";
import { Message } from "../models/Message.model";
import MessagesList from "./MessagesList";
import { io } from "socket.io-client";
import Typing from "../Typing/Typing";

const socket = io("https://chat-room-app-production.up.railway.app");

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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-purple-50 to-pink-50">
        <MessagesList messages={messages} nickname={nickname} />
        <Typing />
      </div>
    </>
  );
};

export default MessagesListContainer;

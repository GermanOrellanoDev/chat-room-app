import React, { useEffect, useState } from "react";
import { Message } from "../models/Message.model";
import MessagesList from "./MessagesList";
import { io } from "socket.io-client";
import Typing from "../Typing/Typing";

const socket = io("https://chat-room-app-production.up.railway.app", {
  transports: ["websocket", "polling"],
});

interface MessagesListContainerProps {
  nickname: string;
}

const MessagesListContainer: React.FC<MessagesListContainerProps> = ({
  nickname,
}: MessagesListContainerProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    socket.on("message", (data, id) => {
      setMessages((prev) => [...prev, data]);
      setId(id);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-purple-50 to-pink-50">
        <MessagesList messages={messages} id={id} nickname={nickname} />
        <Typing />
      </div>
    </>
  );
};

export default MessagesListContainer;

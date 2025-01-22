import React, { useEffect, useState } from "react";
import { Message } from "../models/Message.model";
import MessagesList from "./MessagesList";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080"); //cambiar a URL

const MessagesListContainer: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

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
      <h2>MessagesListContainer</h2>;
      <MessagesList messages={messages} />
    </>
  );
};

export default MessagesListContainer;

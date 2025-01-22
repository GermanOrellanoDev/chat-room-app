import { useState } from "react";
import "./App.css";
import MessagesListContainer from "./components/Messages/MessagesListContainer";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

const App: React.FC = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    socket.emit("message", message);
    setMessage("");
    console.log(message);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <h1>Sala de mensajes</h1>
        <MessagesListContainer />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje"
        />
        <button onClick={sendMessage}>Enviar mensaje</button>
        {/* cambiar a componente */}
      </div>
    </>
  );
};

export default App;

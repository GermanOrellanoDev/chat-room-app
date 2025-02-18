import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "https://chat-room-silk.vercel.app",
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: "https://chat-room-silk.vercel.app",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server ok");
});

io.on("connection", (socket) => {
  io.emit("connection", socket.id);
  console.log(`Usuario conectado: ${socket.id}`);

  socket.on("message", (data) => {
    console.log(`Mensaje: ${data}`);
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log(`Usuario desconectado: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 8080;
httpServer.listen(PORT, () => {
  console.log(`Server ready on port: ${PORT}`);
});

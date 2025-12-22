import { prisma } from "db/client";
import { WebSocketServer } from "ws";

const server = new WebSocketServer({
  port: 8081,
});

server.on("connection", (socket: any) => {
  console.log("Client connected");

  socket.on("message", (message: any) => {
    console.log(`Received: ${message}`);
    prisma.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });
    socket.send(`Server: ${message}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8081");

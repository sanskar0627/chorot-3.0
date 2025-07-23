import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let allsockets: User[] = [];

wss.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (message) => {
    let parsedMessage;
    try {
      parsedMessage = JSON.parse(message.toString());
    } catch (err) {
      console.error("Invalid JSON:", message.toString());
      return;
    }

    if (parsedMessage.type === "join") {
      const existingUser = allsockets.find((u) => u.socket === socket);
      if (existingUser) {
        existingUser.room = parsedMessage.payload.roomId;
      } else {
        allsockets.push({
          socket,
          room: parsedMessage.payload.roomId,
        });
      }
      console.log("User joined room:", parsedMessage.payload.roomId);
    }

    if (parsedMessage.type === "chat") {
      const sender = allsockets.find((u) => u.socket === socket);
      if (!sender) return;

      const room = sender.room;
      for (const user of allsockets) {
        if (user.room === room) {
          user.socket.send(parsedMessage.payload.message);
        }
      }
    }
  });

  socket.on("close", () => {
    allsockets = allsockets.filter((u) => u.socket !== socket);
    console.log("Client disconnected");
  });
});

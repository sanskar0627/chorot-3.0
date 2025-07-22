import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });
interface User {
  socket: WebSocket;
  room: string;
}
let allsockets: User[] = [];
wss.on("connection", (socket) => {
  socket.on("message", (message) => {});
  socket.on("disconnect", () => {
    allsockets = allsockets.filter((s) => s !== socket);
  });
});

import express from "express";
import { WebSocket, WebSocketServer } from "ws";
import http from "http";


const app = express();
const port = 4040;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(` Backeend is Running  on ${port}`);
});
const wss = new WebSocketServer({ server });

const rooms: Record<string, Set<WebSocket>> = {};

function generateRoomCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code: string;
  do {
    code = Array.from(
      { length: 5 },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  } while (rooms[code]);
  return code;
}

interface BaseMessage {
  type: string;
  [key: string]: any;
}

wss.on("connection", (ws: WebSocket) => {
  (ws as any).room = null;
  ws.on("message", (raw: Buffer) => {
    const msg: BaseMessage = JSON.parse(raw.toString());
    if (msg.type === "create") {
      const code = generateRoomCode();
      rooms[code] = new Set();
      rooms[code].add(ws);
      (ws as any).room = code;
      ws.send(JSON.stringify({ type: "roomCreated", code }));
    } else if (msg.type === "join") {
      const code: string = msg.code;
      if (rooms[code]) {
        rooms[code].add(ws);
        (ws as any).room = code;
        ws.send(JSON.stringify({ type: "joined", code }));
      } else {
        ws.send(JSON.stringify({ type: "error", message: "Room not found" }));
      }
    } else if (msg.type === "chat") {
      const code: string | null = (ws as any).room;
      if (!code || !rooms[code]) {
        ws.send(
          JSON.stringify({ type: "error", message: "You are not in a room" })
        );
        return;
      }

      rooms[code].forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({ type: "chat", text: msg.text, room: code })
          );
        }
      });
    }
    ws.on("close", () => {
      const code: string | null = (ws as any).room;
      if (code && rooms[code]) {
        rooms[code].delete(ws);
        if (rooms[code].size === 0) {
          delete rooms[code]; // remove empty room
        }
      }
    });
  });
});

import express from 'express';
import { WebSocketServer ,WebSocket } from 'ws'

const app=express();
const port=app.listen(8080);
const wss = new WebSocketServer({ server: port });

wss.on('connection',function connection(ws){
    ws.on('error',console.error);
    ws.on('message',function message(data,isBinary){
        wss.clients.forEach(function each(client){
            if(client !== ws && client.readyState===WebSocket.OPEN){
                client.send(data,{binary:isBinary})
            }
        });
    });
    ws.send("Hello MEsssage from Server")
})

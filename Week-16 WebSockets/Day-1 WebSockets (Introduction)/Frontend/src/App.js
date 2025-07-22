"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function App() {
    const [socket, setSocket] = (0, react_1.useState)();
    const inputRef = (0, react_1.useRef)();
    function sendMessage() {
        if (!socket)
            return;
        const message = inputRef.current.value;
        //@ts-ignore
        socket.send(message);
    }
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);
        ws.onmessage = (ev) => {
            alert(`Received: ${ev.data}`);
        };
    }, []);
    return (<div>
    <input ref={inputRef} type="text" placeholder="Type a message..."/>
    <button onClick={sendMessage}>Send</button>
  </div>);
}
exports.default = App;

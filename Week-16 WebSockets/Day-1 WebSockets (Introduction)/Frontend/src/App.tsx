import { useEffect, useRef, useState } from "react";

function App() {
  // State to hold the WebSocket instance
  // Use 'WebSocket | null' to correctly type it as it might be null initially
  const [socket, setSocket] = useState<WebSocket | null>(null);

  // State to hold messages received from the server
  const [messages, setMessages] = useState<string[]>([]);

  // Ref for the input field
  const inputRef = useRef<HTMLInputElement>(null); // Specify the HTML element type

  // useEffect to establish WebSocket connection when the component mounts
  useEffect(() => {
    // Create a new WebSocket connection
    const ws = new WebSocket("ws://localhost:8080");

    // Set the WebSocket instance in state
    setSocket(ws);

    // Event listener for incoming messages from the server
    ws.onmessage = (event) => {
      // Add the new message to the messages state
      setMessages((prevMessages) => [...prevMessages, event.data.toString()]);
      // You might not want an alert for every message, but it's here if needed
      // alert(`Received: ${event.data}`);
    };

    // Event listener for when the connection opens
    ws.onopen = () => {
      console.log("WebSocket connection established!");
    };

    // Event listener for when the connection closes
    ws.onclose = () => {
      console.log("WebSocket connection closed.");
      setSocket(null); // Clear socket state on close
    };

    // Event listener for errors
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Cleanup function: close the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to send a message
  function sendMessage() {
    // Check if the socket exists and is open
    if (socket && socket.readyState === WebSocket.OPEN) {
      // Ensure inputRef.current exists before accessing its value
      if (inputRef.current) {
        const message = inputRef.current.value;
        socket.send(message);
        inputRef.current.value = ""; // Clear the input field after sending
      }
    } else {
      console.warn("WebSocket is not connected or ready.");
    }
  }

  return (
    <div>
      <h1>WebSocket Chat</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '150px', maxHeight: '300px', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg, index) => (
            <p key={index} style={{ margin: '5px 0' }}>{msg}</p>
          ))
        )}
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a message..."
        // Allow pressing Enter to send
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
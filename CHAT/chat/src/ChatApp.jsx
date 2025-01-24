import React, { useEffect, useState } from 'react';

const [sender, setSender] = useState("");
const [messages, setMessages] = useState([]);
const [input, setInput] = useState("");
const ws = new WebSocket("ws://localhost:8080/chat")

useEffect(() => {
  ws.onmessage = e => {
    const message = JSON.parse(e.data);
    setMessages(prev => [...prev, message])
  }
  return () => ws.close()
}, []);

const sendMessage = () => {
  if(input.trim()){
    const message = {sender, content : input, timestamp : new Date().getTime()}
    ws.send(JSON.stringify(message));
    setInput("");
  }
}

const handleSender = e => {
  setSender(e.target.value)
}

const ChatApp = () => {
  return (
    <div>
      
    </div>
  );
}

export default ChatApp;

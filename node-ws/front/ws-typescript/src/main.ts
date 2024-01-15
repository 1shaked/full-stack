import './style.css'

import { io } from "socket.io-client";

const socket = io('ws://localhost:8080');
const messagesDom = document.getElementById('messages')

socket.on('x',(messages: {rand: number, socketId: string}[]) => {
  console.log(messages)
  for (const message of messages) {
    const pre = document.createElement('pre');
    pre.textContent = JSON.stringify(message, null , 2);
    messagesDom?.appendChild(pre);
  }
})
console.log(socket);

// const app = document.getElementById('app');
// 

const send_message_btn = document.getElementById('send-message');

send_message_btn?.addEventListener('click', () => {
  socket.emit('x', {
    rand: Math.random().toFixed(3)
  })
})

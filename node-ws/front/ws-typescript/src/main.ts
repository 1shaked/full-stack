import './style.css'

import { io } from "socket.io-client";

const socket = io('ws://localhost:8080');


console.log(socket);

// const app = document.getElementById('app');
// 

const send_message_btn = document.getElementById('send-message');

send_message_btn?.addEventListener('click', () => {
  socket.emit('x', {
    rand: Math.random().toFixed(3)
  })
})

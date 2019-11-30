import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3333');

export function subscribe(event: string, callback: (data: any) => void) {
  socket.on(event, (data: any) => callback(data))
}


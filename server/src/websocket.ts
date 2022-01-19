import { io } from "./http";

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on('tradesUpdate', () => {
    socket.broadcast.emit('newTrade');
  });
});
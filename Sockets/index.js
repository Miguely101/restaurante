const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:4200" 
  }
});

io.on("connection", (socket) => {
  console.log("Connected");
  socket.emit("foi", "Connectado ao servidor");

  socket.on("test", (namespace) => {
    socket.emit("foi","test2");
  });
});

httpServer.listen(3122, () => {
  console.log("Socket.io server is listening on port 3122");
});

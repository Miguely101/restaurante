const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:4200" // Replace with your frontend URL
  }
});

io.on("connection", (socket) => {
  console.log("Connected");
  socket.emit("foi", "testado bro");
});

httpServer.listen(3122, () => {
  console.log("Socket.io server is listening on port 3122");
});

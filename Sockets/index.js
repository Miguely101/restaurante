const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:4200" 
  }
});

io.on("connection", (socket) => {
  console.log("Connected" + socket.id);
  socket.emit("foi", "Connectado ao servidor");

  socket.on("reserva-aceite", (namespace) => {
    console.log(namespace)
    io.emit("Lreserva-aceite","A sua reserva foi aceite" );
  });

  socket.on("reserva-cancelada", (namespace) => {
    socket.emit("reserva","A sua reserva foi cancelada");
  });

  socket.on("encomenda1", (namespace) => {
    socket.emit("foi","A sua encomenda está a caminho");
  });

  socket.on("encomenda2", (namespace) => {
    socket.emit("foi","A sua encomenda chegou");
  });

  socket.on("encomenda3", (namespace) => {
    socket.emit("foi","A sua encomenda foi cancelada");
  });
});

httpServer.listen(3122, () => {
  console.log("Socket.io server is listening on port 3122");
});

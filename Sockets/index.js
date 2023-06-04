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
    io.emit("Lreserva-cancelada","A sua reserva foi cancelada");
  });

  socket.on("encomenda", (namespace) => {
    console.log(namespace)
    if(namespace == "aceite"){
      io.emit("Lencomenda","A sua encomenda está a aceite");
    }
    if(namespace == "cancelar"){
      io.emit("Lencomenda","A sua encomenda está cancelada");
    }
    if(namespace == "entregue"){
      io.emit("Lencomenda","A sua encomenda está entregue");
    }
    if(namespace == "acaminho"){
      io.emit("Lencomenda","A sua encomenda está a caminho");
    }
    if(namespace == "preparar"){
      io.emit("Lencomenda","A sua encomenda está a preparar");
    }
  });
});

httpServer.listen(3122, () => {
  console.log("Socket.io server is listening on port 3122");
});

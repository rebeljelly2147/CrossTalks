import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  // Cross-Origin Resource Sharing (CORS) is a security concept that allows restricting the resources implemented in web browsers.
  cors: {
    origin: ["http://localhost:3000", "https://kalrav-the-chatapp.netlify.app"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}

//io.on is simply used to listen to the events. can be used both on client and server side
io.on("connection", (socket) => {
  console.log("User connected : ", socket.id);

  //this part of code is for telling that a user is online
  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen to the events. can be used both on client and server side
  socket.on("disconnect", () => {
    console.log("User disconnected : ", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };

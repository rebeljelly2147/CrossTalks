// Package imports
// const express = require('express'); we used import instead of require by using "type "
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//imported files 
import authRoutes from './routes/auth.routes.js'; 
import messageRoutes from './routes/message.routes.js'; 
import userRoutes from './routes/user.routes.js'; 

// Database connection
import connectToMongodb from './db/connectToMongodb.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // Middleware for parsing JSON data from request body
app.use(cookieParser()); // Middleware for parsing cookies

// For multiple routes we can use app.use() method and make a separate file for routes
app.use("/api/auth", authRoutes); // Middleware for authRoutes
app.use("/api/messages", messageRoutes); // Middleware for authRoutes
app.use("/api/user", userRoutes); // Middleware for authRoutes

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
    connectToMongodb();
});// Use back tick " ` "

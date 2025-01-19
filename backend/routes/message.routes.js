import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute,getMessages);  
router.post("/send/:id", protectRoute,sendMessage);  
// protectRoute is a middleware to protect the route so that we can use req.user._id in the controller

export default router;
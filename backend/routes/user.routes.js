import express from "express";
import protectRoute from "../middleware/protectRoute";
import { getUsersFromSidebar } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/",protectRoute ,getUsersFromSidebar);

export default router;



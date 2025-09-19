import express from "express";
import { createUser, getUsers } from "../controllers/user_controller.js";

const router = express.Router();

// Define routes here instead of in index.js
router.post("/", createUser);   // POST /users
router.get("/", getUsers);      // GET /users

export default router;

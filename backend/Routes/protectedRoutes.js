import pool from "../db.js";
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/profile", async (req, res) => {
    res.send("Running /api/profile successfully");
})

export default router;
import pool from "../db.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
    res.send("REGISTER route working");
})

router.post("/login", async (req, res) => {
    res.send("LOGIN route working");
})

export default router;
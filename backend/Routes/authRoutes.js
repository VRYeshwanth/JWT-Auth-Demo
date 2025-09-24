import pool from "../db.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
    const {email, password} = req.body;

    try {
        const hashedPwd = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));

        const response = await pool.query("INSERT INTO jwt_demo (email, password) VALUES ($1, $2) RETURNING *", [email, hashedPwd]);

        res.send(response.rows[0]);
    }
    catch(e) {
        res.send({Error: "Error registering"});
    }
})

router.post("/login", async (req, res) => {
    res.send("LOGIN route working");
})

export default router;
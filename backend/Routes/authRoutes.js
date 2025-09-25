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
    const {email, password} = req.body;

    try {
        const response = await pool.query("SELECT * FROM jwt_demo WHERE email = $1", [email])

        if(response.rows.length == 0)
            res.status(400).json({Error: "Invalid E-Mail Address !!"})

        const user = response.rows[0]

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch)
            res.status(400).json({Error: "Password not matching"});
        else {
            const payload = {
                id: user.id,
                email: user.email
            }

            const token = jwt.sign(payload , process.env.SECRET_KEY , {expiresIn: "1hr"});

            res.json({JWT_Token: token});
        }
    }
    catch(e) {
        res.status(500).json({Error: "Error logging in"})
    }
})

export default router;
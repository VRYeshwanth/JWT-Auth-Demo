import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get("/profile", async (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        res.status(403).json({Error: "Token not Present"})
    }

    await jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) {
            res.status(403).json({Error: "Invalid or Expired Token"})
        }
        
        res.status(201).json(
            {
                "login": true,
                data: decoded
            }
        )
    })
})

export default router;
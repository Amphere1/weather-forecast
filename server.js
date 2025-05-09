import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose, { Mongoose } from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req,res) => {
    res.status(200).json({messsage: 'server is running'});
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("connected to mongodb");
})
.catch(err => {
    console.error("mongodb connection error", err);
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
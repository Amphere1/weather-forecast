import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weather";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', weatherRoutes);

module.exports = app;
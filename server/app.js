import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weather.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(weatherRoutes);

export default app;
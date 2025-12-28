import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Routes are registered here
app.get("/", (req, res) => res.send("Welcome to SMS backend"));

export default app;

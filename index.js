import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { ConnectDb } from "./config/connectDb.js";
import ContactRouter from "./routes/contact.route.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/contact", ContactRouter);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Hello Talha");
});

// Connect to DB and start server
ConnectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port} successfully`);
    });
  })
  .catch(err => {
    console.error("Database connection failed:", err);
  });

import 'dotenv/config';
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import investorRoutes from "./routes/investorRoutes.js";
import talkToSalesRoutes from "./routes/talkToSalesRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// API endpoints
app.use("/api/users", userRoutes);
app.use("/api/investors", investorRoutes);
app.use("/api/talk-to-sales", talkToSalesRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

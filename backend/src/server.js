import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import investorRoutes from "./routes/investorRoutes.js";
import talkToSalesRoutes from "./routes/talkToSalesRoutes.js";

import productBookRoutes from "./routes/productBookRoutes.js";
const app = express();
const PORT = process.env.PORT || 5000;

/* ---------------- CORS (FIRST) ---------------- */
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://antiworld.netlify.app"
    ],
    credentials: true
}));

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());

/* ---------------- DB ---------------- */
connectDB();

/* ---------------- ROUTES ---------------- */
app.use("/api/users", userRoutes);
app.use("/api/investors", investorRoutes);
app.use("/api/talk-to-sales", talkToSalesRoutes);
app.use("/api/product", productBookRoutes);
/* ---------------- TEST ---------------- */
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

/* ---------------- START ---------------- */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

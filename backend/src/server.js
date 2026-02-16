import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import investorRoutes from "./routes/investorRoutes.js";
import talkToSalesRoutes from "./routes/talkToSalesRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

/* ---------------- CORS (MUST BE FIRST) ---------------- */
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://your-frontend-domain.netlify.app" // replace later
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Handle preflight explicitly (VERY IMPORTANT)
app.options("*", cors());

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());

/* ---------------- DB ---------------- */
connectDB();

/* ---------------- ROUTES ---------------- */
app.use("/api/users", userRoutes);
app.use("/api/investors", investorRoutes);
app.use("/api/talk-to-sales", talkToSalesRoutes);

/* ---------------- TEST ---------------- */
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

/* ---------------- START ---------------- */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

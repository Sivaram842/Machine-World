import express from "express";
import {
    createTalkToSales,
    getTalkToSales,
} from "../controllers/talkToSalesController.js";

const router = express.Router();

// Save a form submission
router.post("/", createTalkToSales);

// Admin can fetch all
router.get("/", getTalkToSales);

export default router;

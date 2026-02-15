import express from "express";
import { createInvestor, getInvestors } from "../controllers/investorController.js";

const router = express.Router();

// POST - Add investor inquiry
router.post("/", createInvestor);

// GET - All enquiries (admin)
router.get("/", getInvestors);

export default router;

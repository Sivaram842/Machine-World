import express from "express";
import { submitProductBook } from "../controllers/productBookController.js";

const router = express.Router();

router.post("/submit-product-book", submitProductBook);

export default router;
import express from "express";
import { registerUser, loginUser, verifyEmail, resendVerificationEmail } from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// ✅ Email verification route (UPDATED)
router.get("/verify-email/:token", verifyEmail);
router.post("/resend-verification", resendVerificationEmail);

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;

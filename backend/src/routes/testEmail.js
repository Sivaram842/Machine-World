import express from "express";
import { sendEmail } from "../utils/sendMail.js"; // adjust the path if needed

const router = express.Router();

router.get("/send", async (req, res) => {
  try {
    await sendEmail(
      "sivaram.p8421@gmail.com", // Replace with your Gmail
      "Testing Resend",
      "<h2>Hello from Doom Industries 🚀</h2><p>Your email setup is working!</p>"
    );

    res.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

export default router;
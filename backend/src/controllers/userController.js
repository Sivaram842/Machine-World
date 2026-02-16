import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import crypto from "crypto";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import { isValidPassword } from "../utils/validatePassword.js";
import { sendEmail } from "../utils/sendMail.js";

/* ============================
   REGISTER (SIGN-UP)
============================ */
export const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      country,
      email,
      password,
      dateOfBirth,
      updatesConsent,
      termsAccepted,
    } = req.body;

    if (!termsAccepted) {
      return res.status(400).json({ message: "You must accept terms" });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({ message: "Weak password" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const token = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    await User.create({
      firstName,
      lastName,
      country,
      email,
      password: hashedPassword,
      dateOfBirth,
      updatesConsent,
      termsAccepted,
      verified: false,
      emailVerificationToken: hashedToken,
      emailVerificationExpires: Date.now() + 1000 * 60 * 60 * 24,
    });

    // ✅ SEND RESPONSE FIRST (CRITICAL)
    res.status(201).json({
      success: true,
      message: "Signup successful. Please verify your email.",
    });

    // ✅ SEND EMAIL AFTER RESPONSE (NON-BLOCKING)
    const verifyUrl = `${process.env.FRONTEND_URL}/email-verify/${token}`;

    await sendEmail(
      email,
      "Verify Your Email",
      `<p>Click below to verify:</p><a href="${verifyUrl}">Verify Email</a>`
    );

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    if (!res.headersSent) {
      res.status(500).json({ message: "Registration failed" });
    }
  }
};



/* ============================
   LOGIN
============================ */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!user.verified) {
      return res.status(401).json({ message: "Please verify your email first." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    return res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("🔥 LOGIN ERROR:", error);
    return res.status(500).json({ message: "Login failed" });
  }
};

/* ============================
   VERIFY EMAIL
============================ */
export const verifyEmail = async (req, res) => {
  try {
    console.log("\n🔵 VERIFY EMAIL API HIT");

    const { token } = req.params;
    if (!token) {
      console.log("❌ Token missing");
      return res.status(400).json({ message: "Token missing" });
    }

    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await User.findOne({
      emailVerificationToken: hashedToken,
      emailVerificationExpires: { $gt: Date.now() },
    });

    if (!user) {
      console.log("❌ Invalid or expired token");
      return res
        .status(400)
        .json({ message: "Invalid or expired verification link" });
    }

    console.log("🟢 User found:", user.email);

    user.verified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;

    await user.save();

    console.log("✅ Email verified");

    return res.status(200).json({
      success: true,
      message: "Email verified successfully!",
    });
  } catch (error) {
    console.error("🔥 VERIFY EMAIL ERROR:", error);
    return res.status(500).json({ message: "Verification failed" });
  }
};

/* ============================
   RESEND VERIFICATION EMAIL
============================ */
export const resendVerificationEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.verified) {
      return res.status(400).json({ message: "Email already verified" });
    }

    const verificationToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex");

    user.emailVerificationToken = hashedToken;
    user.emailVerificationExpires = Date.now() + 1000 * 60 * 60 * 24;
    await user.save();

    const verifyUrl = `${process.env.FRONTEND_URL}/email-verify/${verificationToken}`;

    sendEmail(
      email,
      "Verify Your Account",
      `Click to verify your account: <a href="${verifyUrl}">Verify Email</a>`
    ).catch((err) => {
      console.error("⚠️ EMAIL FAILED (ignored):", err.message);
    });

    return res.json({ message: "Verification email resent" });
  } catch (error) {
    console.error("🔥 RESEND ERROR:", error);
    return res.status(500).json({ message: "Failed to resend email" });
  }
};

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
  const {
    firstName,
    lastName,
    country,
    email,
    password,
    updatesConsent,
    termsAccepted,
    dateOfBirth,
  } = req.body;

  try {
    if (!termsAccepted) {
      return res.status(400).json({ message: "You must accept terms to sign up" });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔐 Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex");

    const user = await User.create({
      firstName,
      lastName,
      country,
      email,
      password: hashedPassword,
      updatesConsent,
      termsAccepted,
      dateOfBirth,
      verified: false,
      emailVerificationToken: hashedToken,
      emailVerificationExpires: Date.now() + 1000 * 60 * 30* 24, 
    });

    // 📩 Send verification email
    const verifyUrl = `http://localhost:5173/email-verify/${verificationToken}`;

    await sendEmail(
      email,
      "Verify Your Account",
      `Click to verify your account: <a href="${verifyUrl}">Verify Email</a>`
    );

    res.status(201).json({
      message: "Signup successful! Please check your email to verify your account.",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
      },
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({ message: "Registration failed" });
  }
};

/* ============================
   LOGIN
============================ */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
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
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: "Login failed" });
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
      console.log("❌ No token in URL");
      return res.status(400).json({ message: "Token missing" });
    }

    // Hash incoming token
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    console.log("🟡 Hashed token:", hashedToken);

    // Find user by token
    const user = await User.findOne({
      emailVerificationToken: hashedToken,
      emailVerificationExpires: { $gt: Date.now() },
    });

    if (!user) {
      console.log("❌ Token invalid or expired");
      return res
        .status(400)
        .json({ message: "Invalid or expired verification link" });
    }

    console.log("🟢 User found:", user.email);
    console.log("🟠 Verified BEFORE:", user.verified);

    // Update user
    user.verified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;

    await user.save();

    console.log("✅ Verified AFTER:", user.verified);

    return res.status(200).json({
      success: true,
      message: "Email verified successfully!",
    });
  } catch (error) {
    console.error("🔥 VERIFY EMAIL ERROR:", error);
    return res.status(500).json({ message: "Verification failed" });
  }
};

export const resendVerificationEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

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

  const verifyUrl = `http://localhost:5173/email-verify/${verificationToken}`;

  await sendEmail(
    email,
    "Verify Your Account",
    `Click to verify your account: <a href="${verifyUrl}">Verify Email</a>`
  );

  res.json({ message: "Verification email resent" });
};

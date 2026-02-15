import crypto from "crypto";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { isValidPassword } from "../utils/validatePassword.js";
import { sendEmail } from "../utils/sendMail.js";

export const registerUser = async (req, res) => {
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

  try {
    // 1️⃣ Terms check
    if (!termsAccepted) {
      return res.status(400).json({ message: "You must accept terms" });
    }

    // 2️⃣ Password validation
    if (!isValidPassword(password)) {
      return res.status(400).json({
        message:
          "Password must contain uppercase, lowercase, number, special character and be 8+ chars",
      });
    }

    // 3️⃣ User exists check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 4️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5️⃣ Generate verification token
    const token = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    // 6️⃣ Create user
    const user = await User.create({
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
      emailVerificationExpires: Date.now() + 1000 * 60 * 60 * 24, // 24 hrs
    });

    // 7️⃣ Send verification email
    const verifyUrl = `http://localhost:5173/email-verify/${token}`;

    await sendEmail(
      email,
      "Verify your email",
      `<p>Click below to verify your email:</p>
       <a href="${verifyUrl}">Verify Email</a>`
    );

    res.status(201).json({
      message: "Registration successful. Please verify your email.",
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({ message: "Registration failed" });
  }
};

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    country: { type: String, required: true },

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    dateOfBirth: { type: Date },
    updatesConsent: { type: Boolean, default: false },
    termsAccepted: { type: Boolean, required: true },

    verified: {
      type: Boolean,
      default: false,
    },

    // 🔐 Email verification (NEW)
    emailVerificationToken: {
      type: String,
    },
    emailVerificationExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

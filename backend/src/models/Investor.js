import mongoose from "mongoose";

const investorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        contact: { type: String, required: true },
        email: { type: String, required: true },
        investment: { type: String, required: true },
        country: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        background: { type: String },
    },
    { timestamps: true }
);

const Investor = mongoose.model("Investor", investorSchema);
export default Investor;

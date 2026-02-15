import mongoose from "mongoose";

const talkToSalesSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phoneCode: { type: String, required: true },   // ADD THIS

        phone: { type: String, required: true },
        company: { type: String, required: true },
        country: { type: String, required: true },
        industry: { type: String, required: true },
        heardAbout: { type: String, required: true },
        message: { type: String },  // optional text
        consent: { type: Boolean, default: false },    // ADD THIS

    },
    { timestamps: true }
);

const TalkToSales = mongoose.model("TalkToSales", talkToSalesSchema);
export default TalkToSales;

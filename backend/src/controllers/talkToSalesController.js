import TalkToSales from "../models/TalkToSales.js";
import { sendEmail } from "../utils/sendMail.js"; // ✅ add this
export const createTalkToSales = async (req, res) => {
    try {
        console.log("📩 Received payload:", req.body);

        const created = await TalkToSales.create(req.body);

        // ✅ SEND RESPONSE FIRST
        res.status(201).json({
            message: "Your request has been submitted. Our team will connect soon!",
            data: created,
        });

        // ✅ Prepare Email Content
        const {
            firstName,
            lastName,
            email,
            phoneCode,
            phone,
            company,
            country,
            industry,
            heardAbout,
            message
        } = req.body;

        const emailContent = `
            <h2>New Talk To Sales Request</h2>

            <p><b>Name:</b> ${firstName} ${lastName}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phoneCode} ${phone}</p>
            <p><b>Company:</b> ${company}</p>
            <p><b>Country:</b> ${country}</p>
            <p><b>Industry:</b> ${industry}</p>
            <p><b>Heard About:</b> ${heardAbout}</p>

            <p><b>Message:</b></p>
            <p>${message || "No message provided"}</p>
        `;

        // ✅ Send email to owner
        sendEmail(
            process.env.ADMIN_EMAIL,  // owner's email
            "New Talk To Sales Request",
            emailContent
        )
            .then(() => console.log("📧 Sales request email sent"))
            .catch((err) => console.error("❌ Email send failed:", err));

    } catch (error) {
        console.error("🔥 BACKEND ERROR:", error.message);
        res.status(500).json({ message: "Failed to submit form" });
    }
};

export const getTalkToSales = async (req, res) => {
    try {
        const allEntries = await TalkToSales.find().sort({ createdAt: -1 });
        res.status(200).json(allEntries);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch records" });
    }
};

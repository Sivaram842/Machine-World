import TalkToSales from "../models/TalkToSales.js";

export const createTalkToSales = async (req, res) => {
    try {
        console.log("📩 Received payload:", req.body);   // 👈 check what frontend sends

        const created = await TalkToSales.create(req.body);
        res.status(201).json({
            message: "Your request has been submitted. Our team will connect soon!",
            data: created,
        });
    } catch (error) {
        console.error("🔥 BACKEND ERROR:", error.message);  // 👈 print exact error

        console.error("Error saving TalkToSales:", error);
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

import Investor from "../models/Investor.js";

export const createInvestor = async (req, res) => {
    try {
        const investor = await Investor.create(req.body);

        res.status(201).json({
            message: "Investor enquiry submitted successfully",
            investor,
        });
    } catch (error) {
        console.error("Error saving investor:", error);
        res.status(500).json({ message: "Failed to submit enquiry" });
    }
};

export const getInvestors = async (req, res) => {
    try {
        const allInvestors = await Investor.find().sort({ createdAt: -1 });
        res.status(200).json(allInvestors);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch investors" });
    }
};

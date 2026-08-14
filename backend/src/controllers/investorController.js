import Investor from "../models/Investor.js";
import { sendEmail } from "../utils/sendMail.js";

export const createInvestor = async (req, res) => {
    try {
        const investor = await Investor.create(req.body);

        // Send notification to HR
        try {
            await sendEmail(
                "hr@doomindustries.com",
                "New Investor Enquiry",
                `
                    <h2>New Investor Enquiry</h2>

                    <h3>Contact Information</h3>

                    <p><strong>Name:</strong> ${investor.name}</p>
                    <p><strong>Contact:</strong> ${investor.contact}</p>
                    <p><strong>Email:</strong> ${investor.email}</p>

                    <p>
                        <strong>Investment Value:</strong>
                        ${investor.investment || "Not provided"}
                    </p>

                    <h3>Location</h3>

                    <p><strong>Country:</strong> ${investor.country}</p>
                    <p><strong>State:</strong> ${investor.state}</p>
                    <p><strong>City:</strong> ${investor.city}</p>

                    <h3>Background</h3>

                    <p>
                        ${investor.background || "Not provided"}
                    </p>

                    <hr />

                    <p>
                        This enquiry was submitted through
                        the Doom Industries website.
                    </p>
                `
            );

            console.log("📧 Investor enquiry email sent to HR");

        } catch (emailError) {
            console.error(
                "⚠️ Investor saved, but HR email failed:",
                emailError
            );
        }

        res.status(201).json({
            message: "Investor enquiry submitted successfully",
            investor,
        });

    } catch (error) {
        console.error("Error saving investor:", error);

        res.status(500).json({
            message: "Failed to submit enquiry"
        });
    }
};


// KEEP THIS because investorRoutes.js uses it
export const getInvestors = async (req, res) => {
    try {
        const allInvestors = await Investor.find()
            .sort({ createdAt: -1 });

        res.status(200).json(allInvestors);

    } catch (error) {
        console.error("Error fetching investors:", error);

        res.status(500).json({
            message: "Failed to fetch investors"
        });
    }
};
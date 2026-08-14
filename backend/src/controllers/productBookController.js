import ProductBook from "../models/ProductBook.js";
import { sendEmail } from "../utils/sendMail.js";

export const submitProductBook = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            company,
            product,
            interest,
            description,
            country,
            heardFrom,
            contactConsent,
        } = req.body;

        // Required fields
        if (!firstName || !lastName || !email || !product || !country) {
            return res.status(400).json({
                message: "Please fill all required fields",
            });
        }

        // Save submission to MongoDB
        const newSubmission = new ProductBook({
            firstName,
            lastName,
            email,
            company,
            product,
            interest,
            description,
            country,
            heardFrom,
            contactConsent,
        });

        await newSubmission.save();

        // Send notification to HR
        try {
            await sendEmail(
                 process.env.ADMIN_EMAIL,  // owner's email
                "New Product Book Enquiry",
                `
                    <h2>New Product Book Enquiry</h2>

                    <h3>Contact Information</h3>

                    <p>
                        <strong>Name:</strong>
                        ${firstName} ${lastName}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${email}
                    </p>

                    <p>
                        <strong>Company:</strong>
                        ${company || "Not provided"}
                    </p>

                    <h3>Product Information</h3>

                    <p>
                        <strong>Product:</strong>
                        ${product}
                    </p>

                    <p>
                        <strong>Purpose / Interest:</strong>
                        ${interest || "Not provided"}
                    </p>

                    <p>
                        <strong>Project Description:</strong>
                        ${description || "Not provided"}
                    </p>

                    <h3>Additional Information</h3>

                    <p>
                        <strong>Country:</strong>
                        ${country}
                    </p>

                    <p>
                        <strong>How they heard about us:</strong>
                        ${heardFrom || "Not provided"}
                    </p>

                    <p>
                        <strong>Contact Consent:</strong>
                        ${contactConsent || "Not provided"}
                    </p>

                    <hr />

                    <p>
                        This enquiry was submitted through the
                        Doom Industries website.
                    </p>
                `
            );

            console.log(
                "📧 Product enquiry email sent to HR:",
                email
            );

        } catch (emailError) {
            // Don't fail the form submission if email fails
            console.error(
                "⚠️ Product submission saved, but HR email failed:",
                emailError
            );
        }

        return res.status(201).json({
            message: "Form submitted successfully",
        });

    } catch (error) {
        console.error("PRODUCT BOOK ERROR:", error);

        return res.status(500).json({
            message: "Failed to submit form",
        });
    }
};
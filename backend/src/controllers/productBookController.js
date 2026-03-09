import ProductBook from "../models/ProductBook.js";

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

        if (!firstName || !lastName || !email || !product || !country) {
            return res.status(400).json({
                message: "Please fill all required fields",
            });
        }

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

        res.status(201).json({
            message: "Form submitted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
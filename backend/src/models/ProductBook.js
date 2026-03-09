import mongoose from "mongoose";

const productBookSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        company: String,

        product: {
            type: String,
            required: true,
        },

        interest: String,

        description: String,

        country: {
            type: String,
            required: true,
        },

        heardFrom: String,

        contactConsent: String,
    },
    { timestamps: true }
);

const ProductBook = mongoose.model("ProductBook", productBookSchema);

export default ProductBook;
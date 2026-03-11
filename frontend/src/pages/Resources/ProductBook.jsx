import React, { useState } from "react";
import Footer from "../../components/NewFooter";
import Navbar from "../../components/NewNavbar";
import axios from "axios";
const ProductBook = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        interest: "",
        product: "",
        description: "",
        country: "",
        heardFrom: "",
        contactConsent: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/api/product/submit-product-book",
                formData
            );

            alert(res.data.message);

        } catch (error) {
            console.log(error);
            alert("Submission failed");
        }
    };

    return (
        <>
            <Navbar />

            <section className="bg-[#f4f4f4] min-h-screen py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-12">

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-14 text-center">
                        PRODUCT BOOK
                    </h1>

                    {/* FORM */}
                    <form className="space-y-10" onSubmit={handleSubmit}>

                        {/* First + Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="text-sm">First name*</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="text-sm">Last name*</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-black"
                                />
                            </div>
                        </div>

                        {/* Email + Company */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="text-sm">Email address*</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="text-sm">Company name</label>
                                <input
                                    type="text"
                                    name="company"
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-black"
                                />
                            </div>
                        </div>

                        {/* Product Selection */}
                        <div>
                            <label className="text-sm">Select Product*</label>
                            <select
                                name="product"
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-black"
                            >
                                <option value="">Select Product</option>
                                <option>DAS</option>
                                <option>Realm</option>
                                <option>Book</option>
                                <option>Cockpit</option>
                                <option>XR Training System</option>
                            </select>
                        </div>

                        {/* Interest */}
                        <div>
                            <label className="text-sm">Purpose / Interest*</label>
                            <select
                                name="interest"
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-black"
                            >
                                <option value="">Please Select</option>
                                <option>Training & Simulation</option>
                                <option>Research</option>
                                <option>Enterprise</option>
                                <option>Medical</option>
                                <option>Entertainment</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="text-sm">Project Description</label>
                            <textarea
                                name="description"
                                rows="4"
                                placeholder="Tell us about your project or requirement..."
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-black"
                            ></textarea>
                        </div>

                        {/* Country */}
                        <div>
                            <label className="text-sm">Country*</label>
                            <select
                                name="country"
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-black"
                            >
                                <option value="">Please Select</option>
                                <option>India</option>
                                <option>United States</option>
                                <option>Germany</option>
                                <option>Finland</option>
                            </select>
                        </div>

                        {/* How did you hear */}
                        <div>
                            <label className="text-sm">How did you hear about us?</label>
                            <input
                                type="text"
                                name="heardFrom"
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-black"
                            />
                        </div>

                        {/* Contact Consent */}
                        <div>
                            <p className="text-sm mb-4">
                                Can our team contact you regarding this product?
                            </p>

                            <div className="flex gap-8">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="contactConsent"
                                        value="yes"
                                        onChange={handleChange}
                                    />
                                    Yes
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="contactConsent"
                                        value="no"
                                        onChange={handleChange}
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="bg-black text-white px-10 py-4 uppercase text-sm tracking-wide flex items-center gap-4 hover:opacity-80 transition"
                        >
                            SUBMIT
                            <span>→</span>
                        </button>

                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ProductBook;
import React, { useState } from "react";
import productImage from "../../assets/DAS CORE0669.png";
import Footer from "../../components/Footer";
import NavbarStatic from "../../components/NavbarStatic";

const ProductBook = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        interest: "",
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

    return (
        <>
            <NavbarStatic />
            <section className="bg-[#f4f4f4] min-h-screen py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* ================= LEFT SIDE ================= */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                ANTIWORLD PRODUCT <br /> BOOK
                            </h1>

                            <p className="text-gray-600 mb-10 max-w-lg leading-relaxed">
                                Download the ANTIWORLD product book to get detailed Varjo headset tech
                                specs directly to your inbox.
                            </p>

                            <img
                                src={productImage}
                                alt="Product"
                                className="w-full max-w-[600px] object-cover"
                            />
                        </div>

                        {/* ================= RIGHT SIDE FORM ================= */}
                        <div>

                            <form className="space-y-10">

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

                                {/* Interest */}
                                <div>
                                    <label className="text-sm">I'm interested in ANTIWORLD for:*</label>
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
                                    </select>
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
                                        <option>United States</option>
                                        <option>Germany</option>
                                        <option>Finland</option>
                                        <option>India</option>
                                    </select>
                                </div>

                                {/* How did you hear */}
                                <div>
                                    <label className="text-sm">How did you hear about us?*</label>
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
                                        I would like to be contacted by ANTIWORLD sales team to discuss this material
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

                                {/* Legal Text */}
                                <div className="text-xs text-gray-500 leading-relaxed">
                                    <p className="mb-3">
                                        ANTIWORLD can deliver content to you via email and provide additional educational marketing and sales content.
                                        You can unsubscribe at any time.
                                    </p>

                                    <p>
                                        By submitting the form, you consent to our{" "}
                                        <span className="underline cursor-pointer">
                                            Varjo Terms of Use
                                        </span>{" "}
                                        and{" "}
                                        <span className="underline cursor-pointer">
                                            Privacy Policy
                                        </span>.
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="bg-black text-white px-10 py-4 uppercase text-sm tracking-wide flex items-center gap-4 hover:opacity-80 transition"
                                >
                                    SUBMIT
                                    <span>→</span>
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductBook;
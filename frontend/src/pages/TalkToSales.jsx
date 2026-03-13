import React, { useState } from "react";
import Navbar from "../components/NewNavbar";
import Footer from "../components/NewFooter";
import PageWrapper from "../components/PageWrapper";

export default function TalkToSales() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneCode: "India (+91)",
        phone: "",
        company: "",
        country: "",
        industry: "",
        heardAbout: "",
        message: "",
        consent: false,
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCheckbox = (e) => {
        setForm({ ...form, consent: e.target.checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/talk-to-sales`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Request failed");
            }

            alert(data.message || "Message sent successfully!");

        } catch (err) {
            console.error(err);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageWrapper>
            <div>

                <Navbar />
                <div className="h-24 md:h-40" />

                <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20 box-border gap-16">

                    {/* LEFT */}
                    <div className="flex-1 lg:pr-20">
                        <h1 className="text-3xl md:text-[36px] font-semibold mb-6 text-black">
                            Get in touch with our experts
                        </h1>

                        <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#434141] max-w-[520px]">
                            Complete the form and our product experts will help you figure out the
                            best way to use <strong>Anti World</strong> to unlock business benefits
                            and create next-generation immersive XR/VR experiences.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex-1">
                        <form onSubmit={handleSubmit} className="w-full">

                            {/* ROW 1 */}
                            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
                                <div className="flex flex-col flex-1">
                                    <label className="text-[15px] md:text-[16px] mb-1 text-[#201f1f]">
                                        First name*
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        required
                                        className="bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none focus:border-black"
                                    />
                                </div>

                                <div className="flex flex-col flex-1">
                                    <label className="text-[15px] md:text-[16px] mb-1 text-[#201f1f]">
                                        Last name*
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        required
                                        className="bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none focus:border-black"
                                    />
                                </div>
                            </div>

                            {/* ROW 2 */}
                            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
                                <div className="flex flex-col flex-1">
                                    <label className="text-[15px] md:text-[16px] mb-1 text-[#201f1f]">
                                        Business email address*
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none focus:border-black"
                                    />
                                </div>

                                <div className="flex flex-col flex-1">
                                    <label className="text-[15px] md:text-[16px] mb-1 text-[#201f1f]">
                                        Phone number*
                                    </label>

                                    <div className="flex gap-3">
                                        <select
                                            name="phoneCode"
                                            value={form.phoneCode}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none cursor-pointer focus:border-black w-[100px] sm:w-[120px]"
                                        >
                                            <option>India (+91)</option>
                                            <option>USA (+1)</option>
                                            <option>UK (+44)</option>
                                        </select>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                            className="flex-1 bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none focus:border-black"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ROW 3 */}
                            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
                                <div className="flex flex-col flex-1">
                                    <label className="text-[15px] md:text-[16px] mb-1 text-[#201f1f]">
                                        Company / Organization*
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={form.company}
                                        onChange={handleChange}
                                        required
                                        className="bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none focus:border-black"
                                    />
                                </div>

                                <div className="flex flex-col flex-1">
                                    <label className="text-[15px] md:text-[16px] mb-1 text-[#201f1f]">
                                        Country*
                                    </label>
                                    <select
                                        name="country"
                                        value={form.country}
                                        onChange={handleChange}
                                        required
                                        className="bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none cursor-pointer focus:border-black"
                                    >
                                        <option>Please Select</option>
                                        <option>India</option>
                                        <option>United States</option>
                                        <option>Germany</option>
                                    </select>
                                </div>
                            </div>

                            {/* ROW 4 */}
                            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
                                <div className="flex flex-col flex-1">
                                    <label className="text-[15px] md:text-[16px] mb-1 text-[#201f1f]">
                                        Industry*
                                    </label>
                                    <select
                                        name="industry"
                                        value={form.industry}
                                        onChange={handleChange}
                                        required
                                        className="bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none cursor-pointer focus:border-black"
                                    >
                                        <option value="">Please Select</option>
                                        <option value="Automotive">Automotive</option>
                                        <option value="Defense">Defense</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Education">Education</option>
                                        <option value="Enterprise XR">Enterprise XR</option>
                                    </select>
                                </div>

                                <div className="flex flex-col flex-1">
                                    <label className="text-[15px] md:text-[16px] mb-1 text-[#201f1f]">
                                        How did you hear about us?*
                                    </label>
                                    <select
                                        name="heardAbout"
                                        value={form.heardAbout}
                                        onChange={handleChange}
                                        required
                                        className="bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none cursor-pointer focus:border-black"
                                    >
                                        <option>Please Select</option>
                                        <option>Google</option>
                                        <option>LinkedIn</option>
                                        <option>Referral</option>
                                        <option>Event</option>
                                    </select>
                                </div>
                            </div>

                            {/* TEXTAREA */}
                            <div className="flex flex-col mb-8">
                                <label className="text-[15px] md:text-[16px] mb-1 text-[#201f1f]">
                                    Tell us about your needs for XR / VR
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none resize-none focus:border-black"
                                />
                            </div>

                            {/* CONSENT + SUBMIT unchanged */}
                            {/* (No logic touched) */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-4 bg-black text-white px-8 md:px-10 py-3 text-[15px] transition hover:bg-[#333] flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        SUBMIT <span>→</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        </PageWrapper>
    );
}
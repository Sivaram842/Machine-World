import React, { useState } from "react";
import NavbarStatic from "../components/NavbarStatic";
import Footer from "../components/Footer";

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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCheckbox = (e) => {
        setForm({ ...form, consent: e.target.checked });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/talk-to-sales", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            alert(data.message);
        } catch (err) {
            alert("Something went wrong!");
        }
    };

    return (
        <div>
            <NavbarStatic />
            <div className="h-40" />

            <div className="flex min-h-screen w-full bg-white px-[100px] py-20 box-border">
                {/* LEFT */}
                <div className="flex-1 pr-20">
                    <h1 className="text-[36px] font-semibold mb-6 text-black">
                        Get in touch with our experts
                    </h1>

                    <p className="text-[16px] leading-[1.7] text-[#434141] max-w-[520px]">
                        Complete the form and our product experts will help you figure out the
                        best way to use <strong>Anti World</strong> to unlock business benefits
                        and create next-generation immersive XR/VR experiences.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="flex-1">
                    <form onSubmit={handleSubmit} className="w-full">

                        {/* ROW 1 */}
                        <div className="flex gap-10 mb-10">
                            <div className="flex flex-col flex-1">
                                <label className="text-[16px] mb-1 text-[#201f1f]">
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
                                <label className="text-[16px] mb-1 text-[#201f1f]">
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
                        <div className="flex gap-10 mb-10">
                            <div className="flex flex-col flex-1">
                                <label className="text-[16px] mb-1 text-[#201f1f]">
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
                                <label className="text-[16px] mb-1 text-[#201f1f]">
                                    Phone number*
                                </label>

                                <div className="flex gap-3">
                                    <select
                                        name="phoneCode"
                                        value={form.phoneCode}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-[#cfcfcf] py-3 px-1 text-[15px] outline-none cursor-pointer focus:border-black w-[120px]"
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
                        <div className="flex gap-10 mb-10">
                            <div className="flex flex-col flex-1">
                                <label className="text-[16px] mb-1 text-[#201f1f]">
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
                                <label className="text-[16px] mb-1 text-[#201f1f]">
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
                        <div className="flex gap-10 mb-10">
                            <div className="flex flex-col flex-1">
                                <label className="text-[16px] mb-1 text-[#201f1f]">
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
                                <label className="text-[16px] mb-1 text-[#201f1f]">
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
                            <label className="text-[16px] mb-1 text-[#201f1f]">
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

                        {/* CONSENT */}
                        <div className="mt-8 mb-8">
                            <label className="flex items-start gap-3 cursor-pointer select-none relative">
                                {/* hidden real checkbox */}
                                <input
                                    type="checkbox"
                                    checked={form.consent}
                                    onChange={handleCheckbox}
                                    className="peer absolute left-0 top-0 opacity-0 w-4 h-4 cursor-pointer"
                                />


                                {/* visible custom box */}
                                <span className="relative w-4 h-4 mt-[4px] border border-black flex items-center justify-center pointer-events-none">
                                    <span className="absolute w-[6px] h-[10px] border-r-2 border-b-2 border-black rotate-45 opacity-0 peer-checked:opacity-100"></span>
                                </span>

                                {/* text */}
                                <span className="text-[16px] leading-[1.8] text-[#282727] max-w-[560px]">
                                    I wish to receive latest product information, exclusive offers,
                                    expert insights and more from <strong>Anti World</strong>.
                                    (You may unsubscribe at any time).
                                </span>
                            </label>

                            <p className="mt-4 text-[14px] text-[#666] max-w-[560px]">
                                By submitting this form, you consent to{" "}
                                <a href="/terms" className="underline text-black">
                                    Anti World Terms of Use
                                </a>{" "}
                                and{" "}
                                <a href="/privacy" className="underline text-black">
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </div>


                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="mt-4 bg-black text-white px-10 py-3 text-[15px] transition hover:bg-[#333] flex items-center gap-3"
                        >
                            SUBMIT <span>→</span>
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= SUPPORT HEADER ================= */

export default function ContactSupportPage() {
    const navigate = useNavigate();

    return (
        <div>
            <header className="w-full bg-[#f3f3f3] px-6 md:px-16 py-6 flex justify-between items-center">

                {/* Left */}
                <div className="flex items-center gap-8">
                    <h2 onClick={() => {

                        navigate("/");
                    }} className="text-2xl font-bold tracking-wide">VARJO</h2>

                    <a
                        href="#"
                        className="text-lg text-black hover:underline underline-offset-4 transition"
                    >
                        Varjo Support
                    </a>
                </div>

                {/* Right */}
                <a
                    href="/support"
                    className="text-lg text-black hover:underline underline-offset-4 transition"
                >
                    Contact Varjo Support
                </a>
            </header>
            <section
                className="relative w-full h-[50vh] min-h-[320px] flex items-center"
                style={{
                    backgroundImage:
                        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_zfaZCjD1CZ1AkDiateDbgSk8ouYewL5tg&s')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-16">

                    {/* Heading */}
                    <h1 className="text-white text-2xl md:text-4xl font-extrabold uppercase mb-6">
                        Help Center
                    </h1>

                    {/* Search Bar */}
                    <div className="w-full max-w-[700px]">
                        <div className="flex items-center bg-white px-4 py-3 rounded">

                            <input
                                type="text"
                                placeholder="Search for answers"
                                className="w-full outline-none text-sm md:text-base"
                            />

                            {/* Search Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>

                        </div>
                    </div>

                </div>
            </section>
            <section className="w-full bg-[#f3f3f3] min-h-screen py-20">

                {/* CENTERED CONTAINER */}
                <div className="max-w-[1100px] mx-auto px-6 md:px-0 flex flex-col md:flex-row gap-20">

                    {/* ================= LEFT SIDEBAR ================= */}
                    <div className="md:w-[260px] border-r border-gray-300 pr-8 text-sm">

                        <p className="text-gray-500 mb-6">Varjo Support &gt; Support</p>

                        <ul className="space-y-5 text-gray-700">
                            {[
                                "Get started with Varjo headsets",
                                "Get to know your headset",
                                "Get to know Varjo software",
                                "Ordering and deliveries",
                                "Headsets FAQ and troubleshooting",
                                "Security FAQ",
                                "Developer FAQ",
                                "Downloads",
                                "Release notes",
                                "Get started with VR/XR",
                                "Terminology",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center cursor-pointer hover:text-black transition"
                                >
                                    {item}
                                    <span>&gt;</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ================= RIGHT CONTACT FORM ================= */}
                    <div className="flex-1 max-w-[620px]">

                        <h2 className="text-2xl font-semibold mb-6">Contact us</h2>

                        <p className="text-sm text-gray-600 mb-6 leading-[1.6]">
                            Please note that XR-3, VR-3, Aero are coming to end of support in
                            January 2026. For extended compatibility or upgrade options,
                            please see more details at:
                            <br />
                            <a
                                href="#"
                                className="text-blue-600 underline hover:no-underline"
                            >
                                https://varjo.com/product-updates
                            </a>
                        </p>

                        {/* Form */}
                        <form className="space-y-6 text-sm">

                            {/* Select */}
                            <div>
                                <label className="block mb-2">What can we help you with?</label>
                                <select className="w-full border border-gray-400 px-3 py-2 bg-white">
                                    <option>Please Select</option>
                                    <option>Technical Support</option>
                                    <option>Sales</option>
                                    <option>Warranty</option>
                                </select>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block mb-2">Subject*</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-400 px-3 py-2 bg-white"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block mb-2">Description*</label>
                                <textarea
                                    rows="4"
                                    className="w-full border border-gray-400 px-3 py-2 bg-white"
                                />
                            </div>

                            {/* Attachment */}
                            <div>
                                <label className="block mb-2">Attachments</label>
                                <input type="file" className="w-full text-sm" />
                            </div>

                            {/* Name Row */}
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block mb-2">First name</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-400 px-3 py-2 bg-white"
                                    />
                                </div>

                                <div className="flex-1">
                                    <label className="block mb-2">Last name</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-400 px-3 py-2 bg-white"
                                    />
                                </div>
                            </div>

                            {/* Company */}
                            <div>
                                <label className="block mb-2">Company name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-400 px-3 py-2 bg-white"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-2">Email*</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-400 px-3 py-2 bg-white"
                                />
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start gap-2 text-xs text-gray-600">
                                <input type="checkbox" className="mt-1" />
                                <span>
                                    I would like to receive latest news and product updates from
                                    Varjo (You may unsubscribe at any time)
                                </span>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-gray-300 py-2 text-sm hover:bg-gray-400 transition"
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                </div>
            </section>
            <footer className="w-full bg-[#f3f3f3] px-6 md:px-16 pt-16 pb-12">

                {/* Top Divider Line */}
                <div className="border-t border-gray-300 mb-12"></div>

                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                    {/* Left Side */}
                    <div>
                        <h2 className="text-2xl font-bold tracking-widest mb-4">
                            VARJO
                        </h2>

                        <p className="text-sm text-gray-600">
                            Copyright © Varjo 2025. All rights reserved.
                        </p>
                    </div>

                    {/* Right Side */}
                    <a
                        href="/support"
                        className="text-base text-black hover:underline underline-offset-4 transition"
                    >
                        Contact Varjo Support
                    </a>

                </div>
            </footer>
        </div>
    );
};


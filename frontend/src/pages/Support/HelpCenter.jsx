import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function HelpCenter() {

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
            <section className="w-full bg-[#f3f3f3] py-24 border-t border-gray-200">

                <div className="max-w-[1100px] mx-auto px-6 md:px-0">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-[15px]">

                        <div>
                            <h3 className="text-[22px] font-medium mb-6">
                                Developer FAQ
                            </h3>

                            <div className="space-y-4">
                                <a className="block underline hover:no-underline">
                                    How to recenter or reset camera position and rotation in Unity?
                                </a>
                                <a className="block underline hover:no-underline">
                                    Where can I find Unity examples?
                                </a>
                                <a className="block underline hover:no-underline">
                                    How to see Unix Time of an eye tracking recording in Varjo Analytics Window?
                                </a>
                                <a className="block underline hover:no-underline">
                                    See more →
                                </a>
                            </div>
                        </div>

                        {/* Other columns remain same */}

                    </div>

                </div>

            </section>
            <section className="w-full bg-[#f3f3f3] py-24">

                {/* CENTERED CONTAINER WITH SIDE MARGINS */}
                <div className="max-w-[1150px] mx-auto px-6 md:px-0">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">

                        {/* COLUMN 1 */}
                        <div>
                            <h3 className="text-xl font-medium mb-6">
                                Get started with Varjo headsets
                            </h3>

                            <div className="space-y-4 text-[15px]">
                                <a className="block underline hover:no-underline">System requirements for XR-4 Series</a>
                                <a className="block underline hover:no-underline">Setting up XR-4 Series (2026)</a>
                                <a className="block underline hover:no-underline">Positional tracking technologies</a>
                                <a className="block underline hover:no-underline">Setting up a Varjo Account</a>
                                <a className="block underline hover:no-underline">Varjo Base Pro license for XR-4 Series</a>
                                <a className="block underline hover:no-underline">See more →</a>
                            </div>

                            <h3 className="text-xl font-medium mt-16 mb-6">
                                Ordering and deliveries
                            </h3>

                            <div className="space-y-4 text-[15px]">
                                <a className="block underline hover:no-underline">How can I place an order with Varjo?</a>
                                <a className="block underline hover:no-underline">Shipping and deliveries</a>
                                <a className="block underline hover:no-underline">Where can I find Varjo’s Terms and Conditions of Sale?</a>
                                <a className="block underline hover:no-underline">See more →</a>
                            </div>
                        </div>

                        {/* COLUMN 2 */}
                        <div>
                            <h3 className="text-xl font-medium mb-6">
                                Get to know your headset
                            </h3>

                            <div className="space-y-4 text-[15px]">
                                <a className="block underline hover:no-underline">Compatible accessories</a>
                                <a className="block underline hover:no-underline">Using Varjo Controllers</a>
                                <a className="block underline hover:no-underline">Fitting the headset – XR-4 Series</a>
                                <a className="block underline hover:no-underline">Adjusting the headset lenses</a>
                                <a className="block underline hover:no-underline">What is in the box - XR-4 Series (2026)</a>
                                <a className="block underline hover:no-underline">See more →</a>
                            </div>

                            <h3 className="text-xl font-medium mt-16 mb-6">
                                Headsets FAQ and troubleshooting
                            </h3>

                            <div className="space-y-4 text-[15px]">
                                <a className="block underline hover:no-underline">Can I use adapters for connecting Varjo headset to my computer?</a>
                                <a className="block underline hover:no-underline">Can I use my Varjo headset without an internet connection?</a>
                                <a className="block underline hover:no-underline">My headset does not work with SteamVR, OpenVR, or OpenXR applications</a>
                                <a className="block underline hover:no-underline">Can I use multiple monitors with my headset?</a>
                                <a className="block underline hover:no-underline">See more →</a>
                            </div>
                        </div>

                        {/* COLUMN 3 */}
                        <div>
                            <h3 className="text-xl font-medium mb-6">
                                Get to know Varjo software
                            </h3>

                            <div className="space-y-4 text-[15px]">
                                <a className="block underline hover:no-underline">Overview of Varjo Base</a>
                                <a className="block underline hover:no-underline">Using Virtual desktop</a>
                                <a className="block underline hover:no-underline">Chroma key</a>
                                <a className="block underline hover:no-underline">Using hand tracking</a>
                                <a className="block underline hover:no-underline">Using Applications panel</a>
                                <a className="block underline hover:no-underline">See more →</a>
                            </div>

                            <h3 className="text-xl font-medium mt-16 mb-6">
                                Security FAQ
                            </h3>

                            <div className="space-y-4 text-[15px]">
                                <a className="block underline hover:no-underline">What makes Varjo headsets secure?</a>
                                <a className="block underline hover:no-underline">What is different in the XR-4 Secure Edition?</a>
                                <a className="block underline hover:no-underline">What makes Varjo's software (Varjo Base) secure?</a>
                                <a className="block underline hover:no-underline">Does Varjo Base require network connectivity?</a>
                                <a className="block underline hover:no-underline">See more →</a>
                            </div>
                        </div>

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

import React, { useState } from "react";
import Footer from "../components/NewFooter";
import Navbar from "../components/NewNavbar";
import { useNavigate } from "react-router-dom";

export default function Accessories() {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const accessories = [
        {
            title: "HEADSET ADAPTER",
            desc: "Replacement adapter for XR-4 series headsets.",
            price: "$/€ 149.00 Excl. tax",
            img: "/accessories/headset-adapter.png"
        },
        {
            title: "3-PORT CHARGER",
            desc: "Replacement charger for XR-4 series headsets.",
            price: "$/€ 109.00 Excl. tax",
            img: "/accessories/charger.png"
        },
        {
            title: "5 M CABLE PAIR",
            desc: "Replacement cable pair for XR-4 series headsets.",
            price: "$/€ 299.00 Excl. tax",
            img: "/accessories/cable-5m.png"
        },
        {
            title: "15 M CABLE PAIR",
            desc: "Extend immersive area of your XR-4 series headset with this 15 m / 49.2 ft cable pair.",
            price: "$/€ 999.00 Excl. tax",
            img: "/accessories/cable-15m.png"
        },
        {
            title: "HAND TRACKING BUNDLE",
            desc: "Enable hand tracking for your XR-4 series headset with Ultraleap’s Leap Motion Controller 2, complete with a custom mounting kit.",
            price: "$/€ 749.00 Excl. tax",
            img: "/accessories/hand-tracking.png"
        },
        {
            title: "CONTROLLERS",
            desc: "Ergonomically designed controllers with haptic feedback. Compatible with XR-4 Series headsets.",
            price: "$/€ 299.00 / controller",
            img: "/accessories/controllers.png"
        },
        {
            title: "BASE STATION",
            desc: "SteamVR™ 2.0 base stations provide 360° tracking coverage. Manufactured by HTC.",
            price: "$/€ 269.00 Excl. tax",
            img: "/accessories/base-station.png"
        },
        {
            title: "FACE CUSHIONS",
            desc: "Easily replaceable cushions providing hygienic shared headset use.",
            price: "$/€ 299.00 Excl. tax",
            img: "/accessories/face-cushions.png"
        },
        {
            title: "EXTENDED FACE CUSHIONS",
            desc: "Enhanced stability, memory foam comfort, eyeglass-compatible design.",
            price: "$/€ 149.00 Excl. tax",
            img: "/accessories/extended-face-cushion.png"
        }
    ];

    return (
        <>
            <Navbar />

            <div className="w-full overflow-x-hidden font-['Helvetica_Neue',Arial,sans-serif] text-black bg-white">

                {/* HERO */}
                <section className="pt-28 sm:pt-36 lg:pt-[190px] pb-16 sm:pb-24 lg:pb-[150px] px-6 sm:px-10 lg:px-20 max-w-[900px]">
                    <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-[1.22] mb-[18px]">
                        Complete your experience <br />
                        with the best VR accessories <br />
                        and peripherals
                    </h1>

                    <p className="text-[14px] sm:text-[15px] text-[#555] leading-[1.6] mb-[28px]">
                        Need a new cable or a laptop adapter? Browse all accessories here.
                    </p>

                    <button
                        className={`px-6 sm:px-8 py-3 sm:py-[14px] text-[12px] sm:text-[13px] tracking-[2px] transition ${hover ? "bg-[#0066ff]" : "bg-black"
                            } text-white`}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        ORDER NOW →
                    </button>
                </section>

                {/* ACCESSORIES GRID */}
                <section className="pt-16 sm:pt-24 lg:pt-[190px] px-6 sm:px-10 lg:px-20 pb-16 sm:pb-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold mb-10 sm:mb-12">
                        Official AntiWorld Accessories
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {accessories.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#f1f1f1] p-6 sm:p-8 min-h-[420px] sm:min-h-[520px] flex flex-col justify-between"
                            >
                                <h3 className="text-[12px] sm:text-[13px] tracking-[2px] font-semibold mb-6">
                                    {item.title}
                                </h3>

                                <div className="h-[200px] sm:h-[260px] flex items-center justify-center mb-6 sm:mb-8">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>

                                <p className="text-[13px] sm:text-[14px] text-[#555] leading-[1.6] mb-6 max-w-[260px]">
                                    {item.desc}
                                </p>

                                <p className="text-[13px] sm:text-[14px] font-medium">
                                    {item.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* CTA SECTION */}
            <section className="w-full">
                <div
                    onClick={() => navigate("/talk-to-sales")}
                    className="
                        group
                        relative
                        w-full
                        h-[200px] sm:h-[220px] lg:h-[260px]
                        bg-black
                        transition-colors
                        duration-300
                        hover:bg-blue-900
                        flex
                        items-center
                        px-6 sm:px-10 lg:px-16
                        overflow-hidden
                        cursor-pointer
                    "
                >
                    <div>
                        <p className="text-xs sm:text-sm tracking-widest text-white/80 mb-3 sm:mb-4">
                            NEED ACCESSORIES?
                        </p>

                        <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-extrabold text-white leading-none">
                            ORDER NOW?
                        </h2>
                    </div>

                    <div
                        className="
                            absolute
                            right-6 sm:right-10 lg:right-16
                            opacity-0
                            translate-x-6
                            group-hover:opacity-100
                            group-hover:translate-x-0
                            transition-all
                            duration-300
                        "
                    >
                        <svg
                            width="100"
                            height="60"
                            viewBox="0 0 100 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="0" y1="20" x2="70" y2="20" stroke="white" strokeWidth="5" />
                            <polyline points="55,5 70,20 55,35" fill="none" stroke="white" strokeWidth="5" />
                        </svg>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
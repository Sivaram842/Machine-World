import React from "react";
import logo from "../assets/antiworld_white.png";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 sm:px-10 lg:px-20 py-10">

            {/* TOP SECTION */}
            <div className="flex flex-col lg:flex-row justify-between gap-12 mb-14">

                {/* LEFT LOGO */}
                <div className="flex flex-col gap-10 items-start">

                    <img
                        src={logo}
                        alt="Antiworld"
                        className="h-8 sm:h-10"
                    />

                    {/* LOGIN BUTTON */}
                    <button
                        onClick={() => window.open("/login", "_blank")}
                        className="border border-white px-3 py-1 flex items-center justify-between w-[150px] text-[5px] sm:text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <span>  Login</span>
                        <span className="text-lg">→</span>
                    </button>
                </div>

                {/* RIGHT LINKS */}
                <div className="flex flex-wrap gap-12 sm:gap-16">

                    {/* COMPANY */}
                    <div>
                        <p className="text-xs tracking-wider text-gray-400 mb-4">
                            COMPANY
                        </p>

                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">Mission</li>
                            <li className="hover:text-gray-300 cursor-pointer">Newsroom</li>
                            <li className="hover:text-gray-300 cursor-pointer">Leadership</li>
                            <li className="hover:text-gray-300 cursor-pointer">Gear Store</li>
                        </ul>
                    </div>

                    {/* WORK WITH US */}
                    <div>
                        <p className="text-xs tracking-wider text-gray-400 mb-4">
                            WORK WITH US
                        </p>

                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">Careers</li>
                            <li className="hover:text-gray-300 cursor-pointer">The Forge Program</li>
                            <li className="hover:text-gray-300 cursor-pointer">SkillBridge</li>
                            <li className="hover:text-gray-300 cursor-pointer">Open Roles</li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <p className="text-xs tracking-wider text-gray-400 mb-4">
                            SOCIAL
                        </p>

                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">X</li>
                            <li className="hover:text-gray-300 cursor-pointer">YouTube</li>
                            <li className="hover:text-gray-300 cursor-pointer">Instagram</li>
                            <li className="hover:text-gray-300 cursor-pointer">Facebook</li>
                            <li className="hover:text-gray-300 cursor-pointer">LinkedIn</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between gap-10">

                {/* LEFT */}
                <div>
                    <p className="text-xs mb-4">
                        COPYRIGHT © 2026 ANTIWORLD
                    </p>

                    <ul className="space-y-1 text-xs text-gray-400">
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Terms Of Use</li>
                        <li className="hover:text-white cursor-pointer">Modern Anti-Slavery Policy</li>
                        <li className="hover:text-white cursor-pointer">Investor Relations</li>
                    </ul>
                </div>

                {/* RIGHT CONTACT */}
                <div className="md:text-right">
                    <p className="text-xs text-gray-400 mb-3 tracking-wider">
                        CONTACT
                    </p>

                    <p className="text-sm break-all">
                        sreeralluri@gmail.com

                        sashank@antiworld.in
                    </p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
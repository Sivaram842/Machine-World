import { useState } from "react";
import { useNavigate } from "react-router-dom";

import xr4Img from "../assets/Range_No Shadow.webp";
import xr4SecureImg from "../assets/XR-4-gaia-from-the-front-1328x680.webp";
import accessoriesImg from "../assets/Accesories-1.webp";

export default function NavbarStatic() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activePreview, setActivePreview] = useState(null);
    const navigate = useNavigate();

    const isOpen = (name) => activeMenu === name;

    const previewImages = {
        xr4: xr4Img,
        xr4secure: xr4SecureImg,
        accessories: accessoriesImg,
    };

    return (
        <nav
            onMouseLeave={() => {
                setActiveMenu(null);
                setActivePreview(null);
            }}
            className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200"
        >
            {/* NAVBAR BAR */}
            <div className="flex items-center justify-between px-14 h-20 text-black">

                {/* LEFT */}
                <div className="flex items-center gap-14 text-[15px] font-medium">
                    {["products", "usecases", "company"].map((item) => (
                        <div
                            key={item}
                            onMouseEnter={() => setActiveMenu(item)}
                            className="cursor-pointer flex items-center gap-1 hover:text-black"
                        >
                            {item === "usecases"
                                ? "Use Cases"
                                : item.charAt(0).toUpperCase() + item.slice(1)}
                            {isOpen(item) && <span>▾</span>}
                        </div>
                    ))}
                </div>

                {/* LOGO */}
                <div
                    onClick={() => {
                        setActiveMenu(null);
                        navigate("/");
                    }}
                    className="mx-10 text-xl tracking-[0.28em] font-semibold cursor-pointer"
                >
                    ANTIWORLD
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-14 text-[15px] font-medium">
                    {["resources", "support"].map((item) => (
                        <div
                            key={item}
                            onMouseEnter={() => setActiveMenu(item)}
                            className="cursor-pointer flex items-center gap-1"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                            {isOpen(item) && <span>▾</span>}
                        </div>
                    ))}

                    <button
                        className="bg-black text-white px-6 py-2 text-sm hover:opacity-80"
                        onClick={() => {
                            setActiveMenu(null);
                            navigate("/talk-to-sales");
                        }}
                    >
                        TALK TO SALES →
                    </button>
                </div>
            </div>

            {/* PRODUCTS */}
            <DropdownWrapper visible={isOpen("products")}>
                <div className="grid grid-cols-[420px_1fr] gap-20">
                    <div className="space-y-14">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
                                Headsets
                            </p>

                            <ul className="space-y-4 text-[22px] font-light">
                                <li
                                    onClick={() => navigate("/product1")}
                                    onMouseEnter={() => setActivePreview("xr4")}
                                    className="cursor-pointer text-gray-700 hover:text-black"
                                >
                                    XR-4 Series
                                </li>

                                <li
                                    onClick={() => navigate("/product2")}
                                    onMouseEnter={() => setActivePreview("xr4secure")}
                                    className="cursor-pointer text-gray-700 hover:text-black"
                                >
                                    XR-4 Secure Edition
                                </li>

                                <li
                                    onClick={() => navigate("/accessories")}
                                    onMouseEnter={() => setActivePreview("accessories")}
                                    className="cursor-pointer text-gray-700 hover:text-black"
                                >
                                    Accessories
                                </li>

                                <li
                                    onClick={() => navigate("/demo")}
                                    className="cursor-pointer text-gray-700 hover:text-black"
                                >
                                    Book a Demo
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* IMAGE PREVIEW */}
                    <div className="relative h-[420px] flex items-center justify-center bg-white">
                        {activePreview && (
                            <img
                                src={previewImages[activePreview]}
                                alt="Preview"
                                className="max-h-full max-w-full object-contain"
                            />
                        )}
                    </div>
                </div>
            </DropdownWrapper>

            {/* USE CASES */}
            <DropdownWrapper visible={isOpen("usecases")}>
                <ul className="space-y-6 text-[26px] text-gray-700 font-light">
                    <li className="hover:text-black cursor-pointer">Air</li>
                    <li className="hover:text-black cursor-pointer">Land</li>
                    <li className="hover:text-black cursor-pointer">Sea</li>
                    <li className="hover:text-black cursor-pointer">Other</li>
                </ul>
            </DropdownWrapper>

            {/* COMPANY */}
            <DropdownWrapper visible={isOpen("company")}>
                <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                    <li className="hover:text-black cursor-pointer">About Us</li>
                    <li className="hover:text-black cursor-pointer">Newsroom</li>
                    <li className="hover:text-black cursor-pointer">Jobs</li>
                </ul>
            </DropdownWrapper>

            {/* RESOURCES */}
            <DropdownWrapper visible={isOpen("resources")}>
                <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                    <li className="hover:text-black cursor-pointer">Varjo Insider Blog</li>
                    <li className="hover:text-black cursor-pointer">Case Studies</li>
                    <li className="hover:text-black cursor-pointer">E-Books & Whitepapers</li>
                </ul>
            </DropdownWrapper>

            {/* SUPPORT */}
            <DropdownWrapper visible={isOpen("support")}>
                <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                    <li className="hover:text-black cursor-pointer">Help Center</li>
                    <li className="hover:text-black cursor-pointer">Contact Support</li>
                    <li className="hover:text-black cursor-pointer">Account Portal</li>
                </ul>
            </DropdownWrapper>
        </nav>
    );
}

/* Dropdown Wrapper */
function DropdownWrapper({ children, visible }) {
    return (
        <div
            className={`
                w-full bg-white border-t border-gray-200
                transition-all duration-200 overflow-hidden
                ${visible ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
            `}
        >
            <div className="px-12 py-14">{children}</div>
        </div>
    );
}

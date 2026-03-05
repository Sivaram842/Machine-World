import { useState } from "react";
import { useNavigate } from "react-router-dom";

import xr4Img from "../assets/DAS.jpeg";
import xr4SecureImg from "../assets/Realm.jpeg";
import accessoriesImg from "../assets/Book.jpeg";

export default function NavbarStatic() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activePreview, setActivePreview] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const navigate = useNavigate();
    const isOpen = (name) => activeMenu === name;

    const previewImages = {
        DAS: xr4Img,
        Realm: xr4SecureImg,
        Book: accessoriesImg,
    };

    return (
        <nav
            onMouseLeave={() => {
                setActiveMenu(null);
                setActivePreview(null);
            }}
            className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200"
        >
            {/* ================= TOP BAR ================= */}
            <div className="flex items-center justify-between px-6 lg:px-14 h-16 lg:h-20 text-black">

                {/* LEFT (Desktop Only) */}
                <div className="hidden lg:flex items-center gap-14 text-[15px] font-medium">
                    {["products", "usecases", "company"].map((item) => (
                        <div
                            key={item}
                            onMouseEnter={() => setActiveMenu(item)}
                            className="cursor-pointer flex items-center gap-1"
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
                    className="text-lg lg:text-xl tracking-[0.28em] font-semibold cursor-pointer"
                >
                    ANTIWORLD
                </div>

                {/* RIGHT */}
                <div className="flex items-center">

                    {/* Desktop Right */}
                    <div className="hidden lg:flex items-center gap-14 text-[15px] font-medium">
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
                            onClick={() => navigate("/talk-to-sales")}
                        >
                            TALK TO SALES →
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden text-2xl ml-4"
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* ================= DROPDOWNS ================= */}

            <div className={`${mobileOpen ? "block" : "hidden lg:block"}`}>

                {/* PRODUCTS */}
                <DropdownWrapper visible={mobileOpen || isOpen("products")}>
                    <div className="grid lg:grid-cols-[420px_1fr] gap-20">
                        <div className="space-y-10">
                            <p className="text-xs uppercase tracking-wide text-gray-500">
                                Headsets
                            </p>

                            <ul className="space-y-4 text-[22px] font-light">
                                <li
                                    onClick={() => navigate("/product1")}
                                    onMouseEnter={() => setActivePreview("DAS")}
                                    className="cursor-pointer text-gray-700 hover:text-black"
                                >
                                    DAS
                                </li>
                                <li
                                    onClick={() => navigate("/product2")}
                                    onMouseEnter={() => setActivePreview("Realm")}
                                    className="cursor-pointer text-gray-700 hover:text-black"
                                >
                                    Realm
                                </li>
                                <li
                                    onClick={() => navigate("/product3")}
                                    onMouseEnter={() => setActivePreview("Book")}
                                    className="cursor-pointer text-gray-700 hover:text-black"
                                >
                                    Book
                                </li>
                                <li onClick={() => { setActiveMenu(null); navigate("/accessories"); }}
                                    className="cursor-pointer text-gray-700 hover:text-black transition">
                                    accessories
                                </li>

                                <li onClick={() => { setActiveMenu(null); navigate("/demo"); }}
                                    className="cursor-pointer text-gray-700 hover:text-black transition">
                                    Book a Demo
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT PREVIEW */}
                        <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[420px] flex items-center justify-center bg-white">
                            {activePreview && (
                                <img
                                    src={previewImages[activePreview]}
                                    alt="Preview"
                                    className="max-h-full max-w-full object-contain transition-opacity duration-300"
                                />
                            )}
                        </div>
                    </div>
                </DropdownWrapper>

                {/* USE CASES */}
                <DropdownWrapper visible={mobileOpen || isOpen("usecases")}>
                    <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                        <li onClick={() => { setActiveMenu(null); navigate("/learning"); }}>Learning</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/industry"); }}>Industry</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/entertainment"); }}>Entertainment</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/medical"); }}>Medical</li>
                    </ul>
                </DropdownWrapper>

                {/* COMPANY */}
                <DropdownWrapper visible={mobileOpen || isOpen("company")}>
                    <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                        <li onClick={() => { setActiveMenu(null); navigate("/about-us"); }}>About Us</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/newsroom"); }}>Newsroom</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/jobs"); }}>Jobs</li>
                    </ul>
                </DropdownWrapper>

                {/* RESOURCES */}
                <DropdownWrapper visible={mobileOpen || isOpen("resources")}>
                    <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                        <li>AntiWorld Insider</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/case-studies"); }}>Case Studies</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/resources"); }}>E-Books and Whitepapers</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/product-book"); }}>Product Book</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/investors"); }}>Invest On US</li>
                    </ul>
                </DropdownWrapper>

                {/* SUPPORT */}
                <DropdownWrapper visible={mobileOpen || isOpen("support")}>
                    <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                        <li onClick={() => { setActiveMenu(null); navigate("/helpcenter"); }}>Help Center</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/contactus"); }}>Contact Support</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/accountportal"); }}>Account Portal</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/systemrequirements"); }}>System Requirements</li>
                    </ul>
                </DropdownWrapper>
            </div>
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
                ${visible ? "max-h-[800px] opacity-100 py-10" : "max-h-0 opacity-0 pointer-events-none"}
            `}
        >
            <div className="px-6 lg:px-12">{children}</div>
        </div>
    );
}
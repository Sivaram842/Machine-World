import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import xr4Img from "../assets/DAS.jpeg";
import xr4SecureImg from "../assets/Realm.jpeg";
import accessoriesImg from "../assets/Book.jpeg";

export default function NavbarStatic() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activePreview, setActivePreview] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const [defenceOpen, setDefenceOpen] = useState(false);
    const [privateOpen, setPrivateOpen] = useState(false);

    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const lastScrollY = useRef(0);
    const isOpen = (name) => activeMenu === name;

    const previewImages = {
        DAS: xr4Img,
        Realm: xr4SecureImg,
        Book: accessoriesImg,
    };

    useEffect(() => {
        const handleScroll = () => {
            if (mobileOpen) return;

            const currentScroll = window.scrollY;

            if (currentScroll === 0) {
                setAtTop(true);
                setShowNav(true);
            } else if (currentScroll > lastScrollY.current) {
                setShowNav(false);
                setAtTop(false);
            } else {
                setShowNav(true);
                setAtTop(false);
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mobileOpen]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        };
    }, [mobileOpen]);

    return (
        <nav
            onMouseLeave={() => {
                setActiveMenu(null);
                setActivePreview(null);
            }}
            className={`
fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200
transition-all duration-300 ease-in-out
${showNav ? "translate-y-0" : "-translate-y-full"}
`}
        >
            {/* ================= TOP BAR ================= */}
            <div className="flex items-center justify-between px-6 lg:px-14 h-16 lg:h-20 text-black">

                {/* LEFT */}
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

                {/* LOGO - ALWAYS VISIBLE */}
                <img
                    src={logo}
                    alt="Antiworld"
                    onClick={() => {
                        setActiveMenu(null);
                        navigate("/");
                    }}
                    className="h-7 sm:h-8 lg:h-9 cursor-pointer"
                />

                {/* RIGHT */}
                <div className="flex items-center">

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

                    {/* Mobile */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden text-2xl ml-4"
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* ================= DROPDOWNS ================= */}

            {/* PRODUCTS */}
            <DropdownWrapper visible={isOpen("products")}>
                <div className="grid lg:grid-cols-[420px_1fr] gap-10">

                    <div>

                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                            Simulators
                        </p>

                        <ul className="space-y-2 text-[22px] font-light text-gray-700">

                            {/* Defence */}
                            <li>
                                <div
                                    onClick={() => setDefenceOpen(!defenceOpen)}
                                    className="flex justify-between cursor-pointer hover:text-black"
                                >
                                    Defence Sector
                                    <span>{defenceOpen ? "−" : "+"}</span>
                                </div>

                                {defenceOpen && (
                                    <ul className="mt-2 space-y-2 pl-6 border-l border-gray-200">
                                        <li
                                            onClick={() => navigate("/aircrafts")}
                                            className="cursor-pointer hover:text-black"
                                        >
                                            Aircrafts
                                        </li>

                                        <li
                                            onClick={() => navigate("/ground-defence")}
                                            className="cursor-pointer hover:text-black"
                                        >
                                            Ground Vehicles
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Private */}
                            <li>
                                <div
                                    onClick={() => setPrivateOpen(!privateOpen)}
                                    className="flex justify-between cursor-pointer hover:text-black"
                                >
                                    Private
                                    <span>{privateOpen ? "−" : "+"}</span>
                                </div>

                                {privateOpen && (
                                    <ul className="mt-2 space-y-2 pl-6 border-l border-gray-200">
                                        <li
                                            onClick={() => navigate("/helicopter")}
                                            className="cursor-pointer hover:text-black"
                                        >
                                            Helicopters
                                        </li>

                                        <li
                                            onClick={() => navigate("/ground-private")}
                                            className="cursor-pointer hover:text-black"
                                        >
                                            Ground Vehicles
                                        </li>
                                    </ul>
                                )}
                            </li>

                        </ul>
                    </div>

                    <div className="space-y-5">

                        <p className="text-xs uppercase tracking-wide text-gray-500">
                            Headsets
                        </p>

                        <ul className="space-y-2 text-[22px] font-light">
                            <li onClick={() => navigate("/product1")}
                                onMouseEnter={() => setActivePreview("DAS")}
                                className="cursor-pointer text-gray-700 hover:text-black">
                                DAS
                            </li>

                            <li onClick={() => navigate("/product2")}
                                onMouseEnter={() => setActivePreview("Realm")}
                                className="cursor-pointer text-gray-700 hover:text-black">
                                Realm
                            </li>

                            <li onClick={() => navigate("/product3")}
                                onMouseEnter={() => setActivePreview("Book")}
                                className="cursor-pointer text-gray-700 hover:text-black">
                                Book
                            </li>

                            <li onClick={() => navigate("/accessories")}
                                className="cursor-pointer text-gray-700 hover:text-black">
                                accessories
                            </li>

                            <li onClick={() => navigate("/demo")}
                                className="cursor-pointer text-gray-700 hover:text-black">
                                Book a Demo
                            </li>
                        </ul>

                        {/* Operating System */}
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                                Operating System
                            </p>

                            <ul className="space-y-4 text-[22px] font-light text-gray-700">
                                <li onClick={() => navigate("/minimal-os")} className="hover:text-black cursor-pointer">
                                    Minimal OS
                                </li>

                                <li onClick={() => navigate("/spatial-os")} className="hover:text-black cursor-pointer">
                                    Spatial OS
                                </li>
                            </ul>
                        </div>

                        {/* Professional Services */}
                        {/* <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                                Professional Services
                            </p>

                            <ul className="space-y-4 text-[22px] font-light text-gray-700">
                                <li onClick={() => navigate("/alfa")} className="hover:text-black cursor-pointer">
                                    Antiworld Alfa
                                </li>
                            </ul>
                        </div> */}

                        {/* ================= SIMULATORS ================= */}


                    </div>

                    {/* RIGHT PREVIEW */}
                    <div className="relative w-full min-h-[220px] flex items-center justify-center bg-white">
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
            <DropdownWrapper visible={isOpen("usecases")}>
                <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                    <li onClick={() => navigate("/learning")} className="cursor-pointer hover:text-black">Learning</li>
                    <li onClick={() => navigate("/industry")} className="cursor-pointer hover:text-black">Industry</li>
                    <li onClick={() => navigate("/entertainment")} className="cursor-pointer hover:text-black">Entertainment</li>
                    <li onClick={() => navigate("/medical")} className="cursor-pointer hover:text-black">Medical</li>
                </ul>
            </DropdownWrapper>

            {/* COMPANY */}
            <DropdownWrapper visible={isOpen("company")}>
                <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                    <li onClick={() => navigate("/about-us")} className="cursor-pointer hover:text-black">About Us</li>
                    <li onClick={() => navigate("/newsroom")} className="cursor-pointer hover:text-black">Newsroom</li>
                    <li onClick={() => navigate("/jobs")} className="cursor-pointer hover:text-black">Jobs</li>
                </ul>
            </DropdownWrapper>

            {/* RESOURCES */}
            <DropdownWrapper visible={isOpen("resources")}>
                <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                    <li onClick={() => navigate("/insider")} className="cursor-pointer hover:text-black">AntiWorld Insider</li>
                    <li onClick={() => navigate("/case-studies")} className="cursor-pointer hover:text-black">Case Studies</li>
                    <li onClick={() => navigate("/resources")} className="cursor-pointer hover:text-black">E-Books and Whitepapers</li>
                    <li onClick={() => navigate("/product-book")} className="cursor-pointer hover:text-black">Product Book</li>
                    <li onClick={() => navigate("/investors")} className="cursor-pointer hover:text-black">Invest On US</li>
                </ul>
            </DropdownWrapper>

            {/* SUPPORT */}
            <DropdownWrapper visible={isOpen("support")}>
                <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                    <li onClick={() => navigate("/helpcenter")} className="cursor-pointer hover:text-black">Help Center</li>
                    <li onClick={() => navigate("/contactus")} className="cursor-pointer hover:text-black">Contact Support</li>
                    <li onClick={() => navigate("/accountportal")} className="cursor-pointer hover:text-black">Account Portal</li>
                    <li onClick={() => navigate("/systemrequirements")} className="cursor-pointer hover:text-black">System Requirements</li>
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
                transition-all duration-300 ease-in-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none hidden"}
            `}
        >
            {visible && (
                <div className="px-6 lg:px-12 py-10">
                    {children}
                </div>
            )}
        </div>
    );
}
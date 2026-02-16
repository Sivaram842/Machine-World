import { useEffect, useRef, useState } from "react";
import xr4Img from "../assets/Range_No Shadow.webp";
import xr4SecureImg from "../assets/XR-4-gaia-from-the-front-1328x680.webp";
import accessoriesImg from "../assets/Accesories-1.webp";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const leftNavItems = [
    {
        label: "Products",
        key: "products",
        path: "/products"
    },
    {
        label: "Use Cases",
        key: "usecases",
        path: "/use-cases"
    },
    {
        label: "Company",
        key: "company",
        path: "/company"
    }
];

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [showNav, setShowNav] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const navigate = useNavigate();
    const lastScrollY = useRef(0);

    const isOpen = (name) => activeMenu === name;
    const [activePreview, setActivePreview] = useState(null);

    const previewImages = {
        xr4: xr4Img,
        xr4secure: xr4SecureImg,
        accessories: accessoriesImg,
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // At top
            if (currentScroll === 0) {
                setAtTop(true);
                setShowNav(true);
            }
            // Scrolling down → hide
            else if (currentScroll > lastScrollY.current) {
                setShowNav(false);
                setAtTop(false);
            }
            // Scrolling up → show
            else {
                setShowNav(true);
                setAtTop(false);
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isWhite = !atTop && showNav;

    return (
        <nav
            onMouseLeave={() => setActiveMenu(null)}
            className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${isWhite ? "bg-white shadow-sm" : "bg-transparent"}
      `}
        >
            {/* NAVBAR CONTENT */}
            <div className="flex items-center justify-between px-14 h-20">

                {/* LEFT */}
                <div className="flex items-center gap-14 text-[15px] font-medium">
                    {leftNavItems.map((item) => (
                        <div
                            key={item.key}
                            onMouseEnter={() => setActiveMenu(item.key)}
                            onClick={() => navigate(item.path)}
                            className={`cursor-pointer flex items-center gap-1 transition-colors
        ${isWhite ? "text-black" : "text-white"}
      `}
                        >
                            {item.label}
                            {isOpen(item.key) && <span>▾</span>}
                        </div>
                    ))}
                </div>

                {/* LOGO */}
                <div onClick={() => {
                    setActiveMenu(null);   // close dropdown safely
                    navigate("/");
                }}
                    className={`mx-10 text-xl tracking-[0.28em] font-semibold transition-colors cursor-pointer
            ${isWhite ? "text-black" : "text-white"}
          `}
                >
                    ANTIWORLD
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-14 text-[15px] font-medium">
                    {["resources", "support"].map((item) => (
                        <div
                            key={item}
                            onMouseEnter={() => setActiveMenu(item)}
                            className={`cursor-pointer flex items-center gap-1 transition-colors
                ${isWhite ? "text-black" : "text-white"}
              `}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                            {isOpen(item) && <span>▾</span>}
                        </div>
                    ))}

                    <button
                        className="bg-black text-white px-6 py-2 text-sm hover:opacity-80"
                        onClick={() => {
                            setActiveMenu(null);   // close dropdown safely
                            navigate("/talk-to-sales");
                        }}
                    >
                        TALK TO SALES →
                    </button>

                </div>
            </div>

            {/* DROPDOWNS (unchanged, now working) */}
            <DropdownWrapper visible={isOpen("products")}>
                <div
                    className="grid grid-cols-[420px_1fr] gap-20 items-start"
                    onMouseLeave={() => setActivePreview(null)}
                >
                    {/* LEFT COLUMN */}
                    <div className="space-y-14">

                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
                                Devices
                            </p>

                            <ul className="space-y-4 text-[22px] font-light">
                                <li
                                    onClick={() => {
                                        setActiveMenu(null);   // close dropdown safely
                                        navigate("/product1");
                                    }}
                                    onMouseEnter={() => setActivePreview("xr4")}
                                    className="cursor-pointer text-gray-700 hover:text-black transition"
                                >
                                    Zero one
                                </li>

                                <li
                                    onClick={() => {
                                        setActiveMenu(null);   // close dropdown safely
                                        navigate("/product2");
                                    }}
                                    onMouseEnter={() => setActivePreview("xr4secure")}
                                    className="cursor-pointer text-gray-700 hover:text-black transition"
                                >
                                    Zero Two
                                </li>

                                <li
                                    onClick={() => {
                                        setActiveMenu(null);   // close dropdown safely
                                        navigate("/accessories");
                                    }}
                                    onMouseEnter={() => setActivePreview("accessories")}
                                    className="cursor-pointer text-gray-700 hover:text-black transition"
                                >
                                    Zero Three
                                </li>

                                <li onClick={() => {
                                    setActiveMenu(null);   // close dropdown safely
                                    navigate("/demo");
                                }} className="cursor-pointer text-gray-700 hover:text-black transition">
                                    Book a Demo
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
                                OPerating System
                            </p>
                            <ul className="space-y-4 text-[22px] font-light text-gray-700">
                                <li onClick={() => {
                                    setActiveMenu(null);   // close dropdown safely
                                    navigate("/minimal-os");
                                }} className="hover:text-black cursor-pointer">
                                    Minimal OS
                                </li>
                                <li onClick={() => {
                                    setActiveMenu(null);   // close dropdown safely
                                    navigate("/spatial-os");
                                }} className="hover:text-black cursor-pointer">
                                    Spatial OS
                                </li>
                            </ul>
                        </div>

                        {/* <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
                                Professional Services
                            </p>
                            <ul className="space-y-4 text-[22px] font-light text-gray-700">
                                <li className="hover:text-black cursor-pointer">
                                    Varjo Alpha
                                </li>
                            </ul>
                        </div> */}
                    </div>

                    {/* RIGHT PREVIEW (EMPTY UNTIL HOVER) */}
                    <div className="relative w-full h-[420px] flex items-center justify-center bg-white">
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




            <DropdownWrapper visible={isOpen("usecases")}>
                <ul className="space-y-6 text-[26px] text-gray-700 font-light">
                    <li className="hover:text-black transition-colors cursor-pointer">Learning</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Industry</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Entertainment</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Medical</li>
                </ul>
            </DropdownWrapper>


            <DropdownWrapper visible={isOpen("company")}>
                <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                    <li className="hover:text-black transition-colors cursor-pointer">About Us</li>
                    <li className="hover:text-black transition-colors cursor-pointer">Teams</li>
                    {/* <li className="hover:text-black transition-colors cursor-pointer">Jobs</li> */}
                </ul>
            </DropdownWrapper>


            <DropdownWrapper visible={isOpen("resources")}>
                <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                    <li className="hover:text-black transition-colors cursor-pointer">
                        AntiWorld Insider
                    </li>
                    <li className="hover:text-black transition-colors cursor-pointer">
                        Case Studies
                    </li>
                    <li className="hover:text-black transition-colors cursor-pointer">
                        E-Books and Whitepapers
                    </li>
                    <li onClick={() => {
                        setActiveMenu(null);   // close dropdown safely
                        navigate("/investors");
                    }} className="hover:text-black transition-colors cursor-pointer">
                        Invest On US
                    </li>
                </ul>
            </DropdownWrapper>


            <DropdownWrapper visible={isOpen("support")}>
                <ul className="space-y-6 text-[24px] text-gray-700 font-light">
                    <li className="hover:text-black transition-colors cursor-pointer">
                        Help Center
                    </li>
                    <li className="hover:text-black transition-colors cursor-pointer">
                        Contact Support
                    </li>
                    <li className="hover:text-black transition-colors cursor-pointer">
                        Account Portal
                    </li>
                </ul>
            </DropdownWrapper>

        </nav>
    );
}

/* Dropdown wrapper */
function DropdownWrapper({ children, visible }) {
    return (
        <div
            className={`
                w-full bg-white border-t border-gray-200
                transition-all duration-200 overflow-hidden
                ${visible ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
            `}
        >
            <div className="px-12 py-14">
                {children}
            </div>
        </div>
    );
}


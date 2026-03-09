import { useEffect, useRef, useState } from "react";
import xr4Img from "../assets/Book.jpeg";
import xr4SecureImg from "../assets/DAS.jpeg";
import accessoriesImg from "../assets/Realm.jpeg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const leftNavItems = [
    { label: "Products", key: "products", path: "/products" },
    { label: "Use Cases", key: "usecases", path: "/use-cases" },
    { label: "Company", key: "company", path: "/company" }
];

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [showNav, setShowNav] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const navigate = useNavigate();
    const lastScrollY = useRef(0);
    const [defenceOpen, setDefenceOpen] = useState(false);
    const [privateOpen, setPrivateOpen] = useState(false);
    const isOpen = (name) => activeMenu === name;
    const [activePreview, setActivePreview] = useState(null);

    const previewImages = {
        Book: xr4Img,
        DAS: xr4SecureImg,
        Realm: accessoriesImg,
    };
    const [mobileOpen, setMobileOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (mobileOpen) return; // prevent navbar hiding while mobile menu open

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
    const [mobileProducts, setMobileProducts] = useState(false);
    const [mobileUsecases, setMobileUsecases] = useState(false);
    const [mobileCompany, setMobileCompany] = useState(false);
    const [mobileResources, setMobileResources] = useState(false);
    const [mobileSupport, setMobileSupport] = useState(false);
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
            <div className="flex items-center justify-between px-4 sm:px-8 lg:px-14 h-16 sm:h-18 lg:h-20">

                {/* LEFT MENU - DESKTOP ONLY */}
                <div className="hidden lg:flex items-center gap-6 sm:gap-10 lg:gap-14 text-sm sm:text-[14px] lg:text-[15px] font-medium">
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

                {/* LOGO - ALWAYS VISIBLE */}
                <div
                    onClick={() => {
                        setActiveMenu(null);
                        navigate("/");
                    }}
                    className={`text-base sm:text-lg lg:text-xl tracking-[0.10em] font-semibold cursor-pointer transition-colors
            ${isWhite ? "text-black" : "text-white"}
        `}
                >
                    ANTIWORLD
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center">

                    {/* DESKTOP RIGHT MENU */}
                    <div className="hidden lg:flex items-center gap-6 sm:gap-10 lg:gap-14 text-sm sm:text-[14px] lg:text-[15px] font-medium">

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
                            className="bg-black text-white px-4 sm:px-5 lg:px-6 py-2 text-xs sm:text-sm hover:opacity-80"
                            onClick={() => navigate("/talk-to-sales")}
                        >
                            TALK TO SALES →
                        </button>
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`lg:hidden text-2xl ml-4
                ${isWhite ? "text-black" : "text-white"}
            `}
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </button>

                </div>
            </div>

            {/* DROPDOWNS */}
            {/* MOBILE MENU */}
            <div className={mobileOpen ? "fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-white overflow-y-auto lg:hidden px-6 py-6 space-y-6" : "hidden"}>
                {/* MOBILE ACCORDION MENU */}
                <div className="lg:hidden space-y-6">

                    {/* PRODUCTS */}
                    <div>
                        <button
                            onClick={() => setMobileProducts(!mobileProducts)}
                            className="w-full flex justify-between text-lg font-medium"
                        >
                            Products <span>{mobileProducts ? "−" : "+"}</span>
                        </button>

                        {mobileProducts && (
                            <div className="mt-4 space-y-3 text-gray-700">
                                <p onClick={() => navigate("/product1")} className="cursor-pointer">DAS</p>
                                <p onClick={() => navigate("/product2")} className="cursor-pointer">Realm</p>
                                <p onClick={() => navigate("/product3")} className="cursor-pointer">Book</p>
                                <p onClick={() => navigate("/accessories")} className="cursor-pointer">Accessories</p>
                                <p onClick={() => navigate("/demo")} className="cursor-pointer">Book a Demo</p>
                            </div>
                        )}
                    </div>

                    {/* USE CASES */}
                    <div>
                        <button
                            onClick={() => setMobileUsecases(!mobileUsecases)}
                            className="w-full flex justify-between text-lg font-medium"
                        >
                            Use Cases <span>{mobileUsecases ? "−" : "+"}</span>
                        </button>

                        {mobileUsecases && (
                            <div className="mt-4 space-y-3 text-gray-700">
                                <p onClick={() => navigate("/learning")} className="cursor-pointer">Learning</p>
                                <p onClick={() => navigate("/industry")} className="cursor-pointer">Industry</p>
                                <p onClick={() => navigate("/entertainment")} className="cursor-pointer">Entertainment</p>
                                <p onClick={() => navigate("/medical")} className="cursor-pointer">Medical</p>
                            </div>
                        )}
                    </div>

                    {/* COMPANY */}
                    <div>
                        <button
                            onClick={() => setMobileCompany(!mobileCompany)}
                            className="w-full flex justify-between text-lg font-medium"
                        >
                            Company <span>{mobileCompany ? "−" : "+"}</span>
                        </button>

                        {mobileCompany && (
                            <div className="mt-4 space-y-3 text-gray-700">
                                <p onClick={() => navigate("/about-us")} className="cursor-pointer">About Us</p>
                                <p onClick={() => navigate("/newsroom")} className="cursor-pointer">Newsroom</p>
                                <p onClick={() => navigate("/jobs")} className="cursor-pointer">Jobs</p>
                            </div>
                        )}
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <button
                            onClick={() => setMobileResources(!mobileResources)}
                            className="w-full flex justify-between text-lg font-medium"
                        >
                            Resources <span>{mobileResources ? "−" : "+"}</span>
                        </button>

                        {mobileResources && (
                            <div className="mt-4 space-y-3 text-gray-700">
                                <p onClick={() => navigate("/insider")} className="cursor-pointer">AntiWorld Insider</p>
                                <p onClick={() => navigate("/case-studies")} className="cursor-pointer">Case Studies</p>
                                <p onClick={() => navigate("/resources")} className="cursor-pointer">E-Books</p>
                                <p onClick={() => navigate("/product-book")} className="cursor-pointer">Product Book</p>
                                <p onClick={() => navigate("/investors")} className="cursor-pointer">Invest On Us</p>
                            </div>
                        )}
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <button
                            onClick={() => setMobileSupport(!mobileSupport)}
                            className="w-full flex justify-between text-lg font-medium"
                        >
                            Support <span>{mobileSupport ? "−" : "+"}</span>
                        </button>

                        {mobileSupport && (
                            <div className="mt-4 space-y-3 text-gray-700">
                                <p onClick={() => navigate("/helpcenter")} className="cursor-pointer">Help Center</p>
                                <p onClick={() => navigate("/contactus")} className="cursor-pointer">Contact Support</p>
                                <p onClick={() => navigate("/accountportal")} className="cursor-pointer">Account Portal</p>
                                <p onClick={() => navigate("/systemrequirements")} className="cursor-pointer">System Requirements</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <div className="hidden lg:block">
                <DropdownWrapper visible={mobileOpen || isOpen("products")}>
                    <div
                        className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-20 items-start"
                        onMouseLeave={() => setActivePreview(null)}
                    >
                        <div className="space-y-10 lg:space-y-6">

                            <div>

                                <p className="text-xs uppercase tracking-wide text-gray-500 mb-6">
                                    Simulators
                                </p>

                                <ul className="space-y-4 text-lg sm:text-xl lg:text-[22px] font-light text-gray-700">

                                    {/* Defence Dropdown */}
                                    <li>
                                        <div
                                            onClick={() => setDefenceOpen(!defenceOpen)}
                                            className="flex justify-between items-center cursor-pointer hover:text-black"
                                        >
                                            Defence Sector
                                            <span>{defenceOpen ? "−" : "+"}</span>
                                        </div>

                                        {defenceOpen && (
                                            <ul className="mt-3 space-y-3 pl-6 border-l border-gray-200">

                                                <li
                                                    onClick={() => { setActiveMenu(null); navigate("/aircrafts"); }}
                                                    className="hover:text-black cursor-pointer"
                                                >
                                                    Aircrafts
                                                </li>

                                                <li
                                                    onClick={() => { setActiveMenu(null); navigate("/ground-defence"); }}
                                                    className="hover:text-black cursor-pointer"
                                                >
                                                    Ground Vehicles
                                                </li>

                                            </ul>
                                        )}
                                    </li>


                                    {/* Private Dropdown */}
                                    <li>
                                        <div
                                            onClick={() => setPrivateOpen(!privateOpen)}
                                            className="flex justify-between items-center cursor-pointer hover:text-black"
                                        >
                                            Private
                                            <span>{privateOpen ? "−" : "+"}</span>
                                        </div>

                                        {privateOpen && (
                                            <ul className="mt-3 space-y-3 pl-6 border-l border-gray-200">

                                                <li
                                                    onClick={() => { setActiveMenu(null); navigate("/helicopter"); }}
                                                    className="hover:text-black cursor-pointer"
                                                >
                                                    Helicopters
                                                </li>

                                                <li
                                                    onClick={() => { setActiveMenu(null); navigate("/ground-private"); }}
                                                    className="hover:text-black cursor-pointer"
                                                >
                                                    Ground Vehicles
                                                </li>

                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
                                    Devices
                                </p>

                                <ul className="space-y-4 text-lg sm:text-xl lg:text-[22px] font-light">
                                    {/* unchanged list */}
                                    <li onClick={() => { setActiveMenu(null); navigate("/product1"); }}
                                        onMouseEnter={() => setActivePreview("DAS")}
                                        className="cursor-pointer text-gray-700 hover:text-black transition">
                                        DAS
                                    </li>

                                    <li onClick={() => { setActiveMenu(null); navigate("/product2"); }}
                                        onMouseEnter={() => setActivePreview("Realm")}
                                        className="cursor-pointer text-gray-700 hover:text-black transition">
                                        Realm
                                    </li>

                                    <li onClick={() => { setActiveMenu(null); navigate("/product3"); }}
                                        onMouseEnter={() => setActivePreview("Book")}
                                        className="cursor-pointer text-gray-700 hover:text-black transition">
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

                            <div>
                                <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
                                    Operating System
                                </p>
                                <ul className="space-y-4 text-lg sm:text-xl lg:text-[22px] font-light text-gray-700">
                                    <li onClick={() => { setActiveMenu(null); navigate("/minimal-os"); }}
                                        className=" hover:text-black cursor-pointer">
                                        Minimal OS
                                    </li>
                                    <li onClick={() => { setActiveMenu(null); navigate("/spatial-os"); }}
                                        className="hover:text-black cursor-pointer">
                                        Spatial OS
                                    </li>
                                </ul>
                            </div>

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

                {/* Other dropdowns with responsive text */}
                <DropdownWrapper visible={mobileOpen || isOpen("usecases")}>
                    <ul className="space-y-6 text-xl sm:text-2xl lg:text-[26px] text-gray-700 font-light">
                        <li onClick={() => { setActiveMenu(null); navigate("/learning"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Learning</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/industry"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Industry</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/entertainment"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Entertainment</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/medical"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Medical</li>
                    </ul>
                </DropdownWrapper>

                <DropdownWrapper visible={mobileOpen || isOpen("company")}>
                    <ul className="space-y-6 text-lg sm:text-xl lg:text-[24px] text-gray-700 font-light">
                        <li onClick={() => { setActiveMenu(null); navigate("/about-us"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">About Us</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/newsroom"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Newsroom</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/jobs"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Jobs</li>
                    </ul>
                </DropdownWrapper>

                <DropdownWrapper visible={mobileOpen || isOpen("resources")}>
                    <ul className="space-y-6 text-lg sm:text-xl lg:text-[24px] text-gray-700 font-light">
                        <li onClick={() => { setActiveMenu(null); navigate("/insider"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">AntiWorld Insider</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/case-studies"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Case Studies</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/resources"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">E-Books and Whitepapers</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/product-book"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Product Book</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/investors"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Invest On US</li>
                    </ul>
                </DropdownWrapper>

                <DropdownWrapper visible={mobileOpen || isOpen("support")}>
                    <ul className="space-y-6 text-lg sm:text-xl lg:text-[24px] text-gray-700 font-light">
                        <li onClick={() => { setActiveMenu(null); navigate("/helpcenter"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Help Center</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/contactus"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Contact Support</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/accountportal"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">Account Portal</li>
                        <li onClick={() => { setActiveMenu(null); navigate("/systemrequirements"); }}
                            className="cursor-pointer text-gray-700 hover:text-black transition">System Requirements</li>
                    </ul>
                </DropdownWrapper>
            </div>


        </nav>
    );
}

/* Dropdown wrapper */
function DropdownWrapper({ children, visible }) {
    return (
        <div
            className={`
                w-full bg-white border-t border-gray-200
                transition-all duration-300 ease-in-out
                ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
        >
            {visible && (
                <div className="px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14 max-h-[calc(100vh-80px)] overflow-y-auto">
                    {children}
                </div>
            )}
        </div>
    );
}
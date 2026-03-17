import React, { useState } from "react";
import logoWhite from "../assets/antiworld_white.png"
import logoBlack from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Typewriter from "../components/Typewriter";
const menuData = {
    Air: {
        description:
            "Technologies and systems related to aircraft and aerial operations. Includes simulators and solutions for defense and private aviation.",
        items: [
            {
                name: "Simulators",
                // path: "/air/simulators",
                submenu: [
                    {
                        name: "Defence",
                        path: "/air/simulators/defence",
                        children: [
                            { name: "Rafale", path: "/rafale" },
                            { name: "Su-30MKI", path: "/su-30mki" },
                            { name: "Tejas", path: "/tejas" },
                            { name: "MIG-29", path: "/mig-29" },
                            { name: "MIG-29K", path: "/mig-29k" }
                        ]
                    },
                    {
                        name: "Private",
                        // path: "/air/simulators/private",
                        children: [
                            { name: "Helicopter", }
                        ]
                    }
                ]
            },
            {
                name: "Counter UAVs",
                // path: "/air/counter-uavs",
                submenu: [
                    { name: "Recon System", },
                    { name: "Stealth Mode", }
                ]
            }
        ]
    },

    Land: {
        description:
            "Technologies and systems related to ground vehicles and land-based operations. Includes simulators and solutions for defense and civilian ground systems",
        items: [
            {
                name: "Simulators",
                // path: "/land/sentry-tower",
                submenu: [
                    { name: "Defense", },
                    { name: "Private", }
                ]
            },
            // {
            //     name: "Ground Vehicles",
            //     path: "/land/vehicles",
            //     submenu: [
            //         { name: "Autonomous Convoy", path: "/land/vehicles/convoy" },
            //         { name: "Military Transport", path: "/land/vehicles/transport" }
            //     ]
            // },
            // {
            //     name: "Mobile Radar",
            //     path: "/land/mobile-radar",
            //     submenu: [
            //         { name: "Threat Detection", path: "/land/radar/threat-detection" },
            //         { name: "Battlefield Monitoring", path: "/land/radar/monitoring" }
            //     ]
            // }
        ]
    },

    Software: {
        description:
            "Software provides the digital backbone for simulators and spatial computing systems. It enables realistic environments and advanced operational capabilities.",
        items: [
            {
                name: "Warfare Solutions",
                // path: "/software/interceptor",
                submenu: [
                    { name: "Comand & Control System", },
                    { name: "AI Algorithms", }
                ]
            },
            {
                name: "Product Software",
                // path: "/software/air-defense",
                submenu: [
                    { name: "DAS", path: "/product1" },
                    { name: "Realm", path: "/product2" },
                    { name: "Minimal OS", path: "/minimal-os" },
                    { name: "Spatial OS", path: "/spatial-os" }
                ]
            },
            // {
            //     name: "Recon Drones",
            //     path: "/software/recon-drones",
            //     submenu: [
            //         { name: "Long Range Surveillance", path: "/software/recon/long-range" },
            //         { name: "Night Vision Recon", path: "/software/recon/night-vision" }
            //     ]
            // }
        ]
    },

    "Use Cases": {
        description:
            "Use Cases show how our technology is applied in real-world scenarios. They highlight solutions across defense, enterprise, and entertainment.",
        items: [
            {
                name: "Defence",
                // path: "/usecases/defence",
                submenu: [
                    { name: "Ground Warfare", path: "/usecases/defence/ground" },
                    { name: "Aerial Warfare", path: "/usecases/defence/air" }
                ]
            },
            {
                name: "Enterprise",
                path: "/usecases/enterprise",
                submenu: [
                    // { name: "Threat Detection", path: "/space/defense/threat" },
                    // { name: "Orbital Security", path: "/space/defense/security" }
                ]
            },
            {
                name: "Entertainment",
                path: "/usecases/entertainment",
                submenu: [
                    // { name: "Space Communication", path: "/space/network/communication" },
                    // { name: "Mission Control", path: "/space/network/control" }
                ]
            }
        ]
    },

    "Company": {
        description:
            "Learn about our organization, mission, and opportunities to work with us.",
        items: [
            {
                name: "About Us",
                path: "/company/aboutus",
                submenu: []
            },
            {
                name: "Jobs",
                path: "/company/jobs",
                submenu: []
            },
            {
                name: "Invest on Us",
                path: "/company/investors",
                submenu: []
            }
        ]
    },

    "Resources": {
        description:
            "Explore insights, documentation, and real-world implementations of our technologies.",
        items: [
            {
                name: "Case Studies",
                path: "/resources/casestudies",
                submenu: []
            },
            {
                name: "Product Book",
                path: "/resources/productbook",
                submenu: []
            }
        ]
    },


    // "Arsenal-1": {
    //     description:
    //         "Hyperscale manufacturing platform designed to build autonomous systems faster.",
    //     items: [
    //         {
    //             name: "Manufacturing AI",
    //             path: "/arsenal/manufacturing-ai",
    //             submenu: [
    //                 { name: "Smart Factories", path: "/arsenal/factories" },
    //                 { name: "Automated Production", path: "/arsenal/production" }
    //             ]
    //         },
    //         {
    //             name: "Defense Automation",
    //             path: "/arsenal/defense-automation",
    //             submenu: [
    //                 { name: "Rapid Assembly", path: "/arsenal/assembly" },
    //                 { name: "Industrial Robotics", path: "/arsenal/robotics" }
    //             ]
    //         },
    //         {
    //             name: "Supply Chain AI",
    //             path: "/arsenal/supply-chain",
    //             submenu: [
    //                 { name: "Logistics Optimization", path: "/arsenal/logistics" },
    //                 { name: "Predictive Inventory", path: "/arsenal/inventory" }
    //             ]
    //         }
    //     ]
    // }
};

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const menuItems = Object.keys(menuData);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
    const [mobileActiveAccordion, setMobileActiveAccordion] = useState(null);
    const [mobileActiveChildAccordion, setMobileActiveChildAccordion] = useState(null);
    const [activeThirdMenu, setActiveThirdMenu] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const darkNavbarPages = [
        "/",
        "/home",
        "/talk-to-sales",
        "/whyxr",
        "/rafale",
        "/mig-29k",
        "/mig-29",
        "/tejas",
        "/su-30mki",
        "/su30-case-study-1",
        "/su30-case-study-2",
        "/su30-case-study-3",
        "/su30-case-study-4",
        "/su30-case-study-5",
        "/su30-case-study-6",
        "/su30-case-study-7",
        "/tejas-case-study-1",
        "/tejas-case-study-2",
        "/tejas-case-study-3",
        "/tejas-case-study-4",
        "/tejas-case-study-5",
        "/tejas-case-study-6",
        "/tejas-case-study-7",
        "/rafale-case-study-1",
        "/rafale-case-study-2",
        "/rafale-case-study-3",
        "/rafale-case-study-4",
        "/rafale-case-study-5",
        "/rafale-case-study-6",
        "/rafale-case-study-7",
        "/mig29-case-study-1",
        "/mig29-case-study-2",
        "/mig29-case-study-3",
        "/mig29-case-study-4",
        "/mig29-case-study-5",
        "/mig29-case-study-6",
        "/mig29-case-study-7",
        "/mig29k-case-study-1",
        "/mig29k-case-study-2",
        "/mig29k-case-study-3",
        "/mig29k-case-study-4",
        "/mig29k-case-study-5",
        "/mig29k-case-study-6",
        "/mig29k-case-study-7",

    ];

    const isDarkNavbar = darkNavbarPages.includes(location.pathname);
    return (
        <div className="relative">
            {activeMenu && (
                <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40 pointer-events-none"></div>
            )}
            <nav
                className={`w-full relative transition-all duration-300 z-50 ${isDarkNavbar
                    ? "bg-black text-white "
                    : activeMenu
                        ? "bg-gray-200 text-black backdrop-blur-md"
                        : "bg-white text-black "
                    }`}
                onMouseLeave={() => setActiveMenu(null)}
            >

                {/* NAVBAR */}
                <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
                    {/* LOGO */}
                    <img
                        src={isDarkNavbar ? logoWhite : logoBlack}
                        alt="Antiworld"
                        onClick={() => {
                            setActiveMenu(null);
                            navigate("/");
                        }}
                        className="h-6 sm:h-7 md:h-8 lg:h-9 cursor-pointer"
                    />

                    {/* CENTER MENU (DESKTOP) */}
                    <div className="hidden lg:flex gap-10">
                        {menuItems.map((menu) => (
                            <div
                                key={menu}
                                onMouseEnter={() => {
                                    setActiveMenu(menu);
                                    setActiveSubMenu(null);
                                    setActiveThirdMenu(null);
                                }}
                                className="cursor-pointer text-sm tracking-wide"
                            >
                                {menu}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        {/* RIGHT SIDE */}
                        <button
                            className="bg-black text-white px-3 sm:px-5 py-2 text-xs sm:text-sm whitespace-nowrap hover:opacity-80"
                            onClick={() => navigate("/talk-to-sales")}
                        >
                            TALK TO SALES →
                        </button>
                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="lg:hidden text-2xl"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* DROPDOWN */}
                {activeMenu && !mobileMenuOpen && (
                    <div
                        className={`absolute left-0 top-full w-full  z-50 ${isDarkNavbar
                            ? "bg-black border-neutral-800"
                            : "bg-gray-200 border-neutral-200"
                            }`}
                    >
                        <div className="max-w-[1400px] mx-auto  grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1.4fr] px-16 py-12 gap-10">
                            <div className="max-w-sm">
                                <p
                                    className={`text-sm leading-relaxed ${isDarkNavbar ? "text-gray-300" : "text-gray-600"
                                        }`}
                                >
                                    {activeMenu} Domain
                                </p>

                                <p
                                    className={`text-sm leading-relaxed ${isDarkNavbar ? "text-gray-300" : "text-gray-600"
                                        }`}
                                >
                                    {menuData[activeMenu].description}
                                </p>
                            </div>

                            {/* MIDDLE */}
                            <div className="flex flex-col gap-4">
                                {menuData[activeMenu].items.map((item, index) => (
                                    <span
                                        key={index}
                                        onMouseEnter={() => {
                                            setActiveSubMenu(item);
                                            setActiveThirdMenu(null);
                                        }}
                                        onClick={() => {
                                            if (item.path) {
                                                navigate(item.path);
                                                setActiveMenu(null);
                                            }
                                        }}
                                        className="text-lg cursor-pointer"
                                    >
                                        + <Typewriter text={item.name} />
                                    </span>
                                ))}
                            </div>

                            {/* RIGHT (future section) */}
                            {/* RIGHT SIDE (two columns inside) */}
                            <div className="flex gap-16">
                                {/* COLUMN 3 → Defence / Private */}
                                <div className="flex flex-col gap-3">
                                    {activeSubMenu?.submenu?.map((sub, i) => (
                                        <span
                                            key={i}
                                            onMouseEnter={() => {
                                                if (sub.children) {
                                                    setActiveThirdMenu(sub);
                                                } else {
                                                    setActiveThirdMenu(null);
                                                }
                                            }}
                                            onClick={() => {
                                                if (sub.path) {
                                                    navigate(sub.path);
                                                    setActiveMenu(null);
                                                }
                                            }}
                                            className={`text-md cursor-pointer ${isDarkNavbar
                                                ? "text-gray-300 hover:text-white"
                                                : "text-gray-600 hover:text-black"
                                                }`}
                                        >
                                            <Typewriter text={sub.name} />
                                        </span>
                                    ))}
                                </div>

                                {/* COLUMN 4 → Rafale / Tejas etc */}
                                <div className="flex flex-col gap-3">
                                    {activeThirdMenu?.children?.map((child, i) => (
                                        <span
                                            key={i}
                                            onClick={() => {
                                                if (child.path) {
                                                    navigate(child.path);
                                                    setActiveMenu(null);
                                                }
                                            }}
                                            className={`text-md cursor-pointer ${isDarkNavbar
                                                ? "text-gray-300 hover:text-white"
                                                : "text-gray-600 hover:text-black"
                                                }`}
                                        >
                                            <Typewriter text={child.name} />
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                )}
                {mobileMenuOpen && !mobileActiveMenu && (
                    <div className="fixed inset-0 bg-black text-white z-50 p-8">

                        <div className="flex justify-between mb-10">
                            <span className="text-xl">Search</span>

                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileActiveMenu(null);
                                    setMobileActiveAccordion(null);
                                }}
                                className="text-2xl"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 text-2xl">

                            {menuItems.map((menu) => (
                                <div
                                    key={menu}
                                    onClick={() => setMobileActiveMenu(menu)}
                                    className="cursor-pointer"
                                >
                                    {menu}
                                </div>
                            ))}

                        </div>

                        <div className="mt-16">

                            <p className="text-xs text-gray-400">CONTACT</p>
                            <p className="text-lg mt-2">sashank@antiworld.in</p>

                            <p className="text-xs text-gray-400 mt-10">MOBILE</p>

                            <div className="flex gap-6 mt-3 text-sm">
                                +91 8184809777
                            </div>

                        </div>

                    </div>
                )}
                {mobileActiveMenu && (
                    <div className="fixed inset-0 bg-black text-white z-50 p-8 overflow-y-auto">

                        <div className="flex justify-between mb-12">

                            <button
                                onClick={() => {
                                    setMobileActiveMenu(null);
                                    setMobileActiveAccordion(null);
                                }}
                                className="text-2xl"
                            >
                                ←
                            </button>

                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileActiveMenu(null);
                                }}
                                className="text-2xl"
                            >
                                ✕
                            </button>

                        </div>

                        <p className="text-xs text-gray-400 mb-6 uppercase">
                            {mobileActiveMenu}
                        </p>

                        <div className="flex flex-col gap-6">

                            {menuData[mobileActiveMenu].items.map((item, index) => {

                                const open = mobileActiveAccordion === index;

                                return (

                                    <div key={index}>

                                        <div
                                            className="flex justify-between items-center text-xl cursor-pointer"
                                            onClick={() => {

                                                if (item.submenu && item.submenu.length > 0) {
                                                    setMobileActiveAccordion(open ? null : index);
                                                    setMobileActiveChildAccordion(null);
                                                }

                                                else if (item.path) {
                                                    navigate(item.path);
                                                    setMobileMenuOpen(false);
                                                    setMobileActiveMenu(null);
                                                }

                                            }}
                                        >
                                            <span>{item.name}</span>
                                            <span>{open ? "−" : "+"}</span>

                                        </div>

                                        {open && (
                                            <div className="mt-4 ml-4 flex flex-col gap-3 text-gray-300">

                                                {item.submenu.map((sub, i) => {

                                                    const childOpen = mobileActiveChildAccordion === i;

                                                    return (
                                                        <div key={i}>

                                                            {/* SUBMENU LEVEL */}
                                                            <div className="flex justify-between items-center  hover:text-white">

                                                                {/* TEXT → NAVIGATE */}
                                                                <span
                                                                    className="cursor-pointer"
                                                                    onClick={() => {
                                                                        if (sub.path) {
                                                                            navigate(sub.path);
                                                                            setMobileMenuOpen(false);
                                                                            setMobileActiveMenu(null);
                                                                            setMobileActiveAccordion(null);
                                                                            setMobileActiveChildAccordion(null);
                                                                        }
                                                                    }}
                                                                >
                                                                    {sub.name}
                                                                </span>

                                                                {/* PLUS BUTTON → DROPDOWN */}
                                                                {sub.children && sub.children.length > 0 && (
                                                                    <span
                                                                        className="cursor-pointer px-3 flex-shrink-0"
                                                                        onClick={() =>
                                                                            setMobileActiveChildAccordion(childOpen ? null : i)
                                                                        }
                                                                    >
                                                                        {childOpen ? "−" : "+"}
                                                                    </span>
                                                                )}

                                                            </div>

                                                            {/* THIRD LEVEL (Rafale / Tejas / MIG) */}
                                                            {childOpen && sub.children && (
                                                                <div className="ml-4 mt-3 flex flex-col gap-2 text-gray-400 transition-all duration-300">

                                                                    {sub.children.map((child, j) => (
                                                                        <span
                                                                            key={j}
                                                                            className={`cursor-pointer ${child.path ? "hover:text-white" : "opacity-60 cursor-default"}`}
                                                                            onClick={() => {
                                                                                if (!child.path) return;   // 🚀 stop if no path

                                                                                navigate(child.path);
                                                                                setMobileMenuOpen(false);
                                                                                setMobileActiveMenu(null);
                                                                                setMobileActiveAccordion(null);
                                                                                setMobileActiveChildAccordion(null);
                                                                            }}
                                                                        >
                                                                            {child.name}
                                                                        </span>
                                                                    ))}

                                                                </div>
                                                            )}

                                                        </div>
                                                    )

                                                })}
                                            </div>
                                        )}

                                    </div>

                                )

                            })}

                        </div>

                        <p className="text-xs text-gray-400 mt-16 mb-4 uppercase">
                            {mobileActiveMenu} Domain
                        </p>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            {menuData[mobileActiveMenu].description}
                        </p>

                    </div>
                )}
            </nav>
        </div>

    );
};

export default Navbar;
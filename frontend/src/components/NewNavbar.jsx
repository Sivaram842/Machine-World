import React, { useState } from "react";
import logo from "../assets/antiworld_white.png"
import { useNavigate } from "react-router-dom";
const menuData = {
    Air: {
        description:
            "Technologies and systems related to aircraft and aerial operations. Includes simulators and solutions for defense and private aviation.",
        items: [
            {
                name: "Simulators",
                path: "/air/simulators",
                submenu: [
                    { name: "Defence", path: "/air/simulators/defence" },
                    { name: "Private", path: "/air/simulators/private" }
                ]
            },
            {
                name: "Counter UAVs",
                path: "/air/counter-uavs",
                submenu: [
                    { name: "Recon System", path: "/air/counter-uavs/recon" },
                    { name: "Stealth Mode", path: "/air/counter-uavs/stealth" }
                ]
            },
            // {
            //     name: "Dive Systems",
            //     path: "/air/dive-systems",
            //     submenu: [
            //         { name: "Underwater Robotics", path: "/air/dive/robotics" },
            //         { name: "Inspection Tools", path: "/air/dive/inspection" }
            //     ]
            // }
        ]
    },

    Land: {
        description:
            "Technologies and systems related to ground vehicles and land-based operations. Includes simulators and solutions for defense and civilian ground systems",
        items: [
            {
                name: "Simulators",
                path: "/land/sentry-tower",
                submenu: [
                    { name: "Defense", path: "/land/simulators/defence" },
                    { name: "Private", path: "/land/simulators/private" }
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
                path: "/software/interceptor",
                submenu: [
                    { name: "Comand & Control System", path: "/software/interceptor/drone" },
                    { name: "AI Algorithms", path: "/software/interceptor/deployment" }
                ]
            },
            {
                name: "Product Software",
                path: "/software/air-defense",
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
                path: "/usecases",
                submenu: [
                    { name: "Ground Warfare", path: "/usecases/ground" },
                    { name: "Aerial Warfare", path: "/usecases/air" }
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

    "Company and Resources": {
        description:
            "Company Resources provide information about our company, opportunities, and insights. Explore our story, careers, case studies, and investment opportunities.",
        items: [
            {
                name: "About Us ",
                path: "/campanyandresources/aboutus",
                submenu: [
                    // { name: "Autonomy Engine", path: "/lattice/os/autonomy" },
                    // { name: "Mission Control", path: "/lattice/os/control" }
                ]
            },
            {
                name: "Jobs",
                path: "/campanyandresources/jobs",
                submenu: [
                    // { name: "Battlefield AI", path: "/lattice/ai/battlefield" },
                    // { name: "Real-time Analysis", path: "/lattice/ai/realtime" }
                ]
            },
            {
                name: "Case Studies",
                path: "/campanyandresources/casestudies",
                submenu: [
                    // { name: "Multi-source Data", path: "/lattice/sensor/data" },
                    // { name: "Threat Analysis", path: "/lattice/sensor/threat" }
                ]
            },
            {
                name: "Product Book",
                path: "/campanyandresources/productbook",
                submenu: [
                    // { name: "Multi-source Data", path: "/lattice/sensor/data" },
                    // { name: "Threat Analysis", path: "/lattice/sensor/threat" }
                ]
            },
            {
                name: "Invest on Us",
                path: "/campanyandresources/investors",
                submenu: [
                    // { name: "Multi-source Data", path: "/lattice/sensor/data" },
                    // { name: "Threat Analysis", path: "/lattice/sensor/threat" }
                ]
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
    const navigate = useNavigate();
    return (
        <div>
            <nav
                className="bg-black text-white w-full relative"
                onMouseLeave={() => setActiveMenu(null)}
            >
                {/* NAVBAR */}
                <div className="flex justify-between items-center px-6 lg:px-10 py-5">
                    {/* LOGO */}
                    <img
                        src={logo}
                        alt="Antiworld"
                        onClick={() => {
                            setActiveMenu(null);
                            navigate("/");
                        }}
                        className="h-7 sm:h-8 lg:h-9 cursor-pointer"
                    />

                    {/* CENTER MENU (DESKTOP) */}
                    <div className="hidden lg:flex gap-10">
                        {menuItems.map((menu) => (
                            <div
                                key={menu}
                                onMouseEnter={() => {
                                    setActiveMenu(menu);
                                    setActiveSubMenu(null);
                                }}
                                className="cursor-pointer text-sm tracking-wide"
                            >
                                {menu}
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE */}
                    <button
                        className="bg-black text-white px-4 sm:px-5 lg:px-6 py-2 text-xs sm:text-sm hover:opacity-80"
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

                {/* DROPDOWN */}
                {activeMenu && !mobileMenuOpen && (
                    <div className="absolute left-0 top-full w-full bg-black border-t border-neutral-800 z-50">
                        <div className="grid grid-cols-3 px-16 py-12 gap-12">
                            {/* LEFT */}
                            <div className="max-w-sm">
                                <p className="text-xs text-gray-400 uppercase mb-4">
                                    {activeMenu} Domain
                                </p>

                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {menuData[activeMenu].description}
                                </p>
                            </div>

                            {/* MIDDLE */}
                            <div className="flex flex-col gap-4">
                                {menuData[activeMenu].items.map((item, index) => (
                                    <span
                                        key={index}
                                        onMouseEnter={() => setActiveSubMenu(item)}
                                        onClick={() => navigate(item.path)}
                                        className="text-lg hover:text-gray-300 cursor-pointer"
                                    >
                                        + {item.name}
                                    </span>
                                ))}
                            </div>

                            {/* RIGHT (future section) */}
                            <div>
                                <div className="flex flex-col gap-3">
                                    {activeSubMenu?.submenu?.map((sub, i) => (
                                        <span
                                            key={i}
                                            onClick={() => {
                                                navigate(sub.path);
                                                setMobileMenuOpen(false);
                                                setMobileActiveMenu(null);
                                                setMobileActiveAccordion(null);
                                            }}
                                            className="text-md text-gray-300 hover:text-white cursor-pointer"
                                        >
                                            {sub.name}
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
                            <p className="text-lg mt-2">contact@antiworld.in</p>

                            <p className="text-xs text-gray-400 mt-10">SOCIAL</p>

                            <div className="flex gap-6 mt-3 text-sm">
                                X YT IG FB LI
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
                                            onClick={() => setMobileActiveAccordion(open ? null : index)}
                                        >

                                            <span>{item.name}</span>
                                            <span>{open ? "−" : "+"}</span>

                                        </div>

                                        {open && (
                                            <div className="mt-4 ml-4 flex flex-col gap-3 text-gray-300">

                                                {item.submenu.map((sub, i) => (
                                                    <span
                                                        key={i}
                                                        onClick={() => {
                                                            navigate(sub.path);
                                                            setMobileMenuOpen(false);
                                                            setMobileActiveMenu(null);
                                                            setMobileActiveAccordion(null);
                                                        }}
                                                        className="cursor-pointer hover:text-white"
                                                    >
                                                        {sub.name}
                                                    </span>
                                                ))}

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
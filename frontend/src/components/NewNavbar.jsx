import React, { useState, useEffect } from "react";
import logoWhite from "../assets/antiworld_white.png";
import logoBlack from "../assets/logo.png";
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
              { name: "MIG-29K", path: "/mig-29k" },
            ],
          },
          {
            name: "Private",
            // path: "/air/simulators/private",
            children: [{ name: "Helicopter" }],
          },
        ],
      },
      {
        name: "Counter UAVs",
        // path: "/air/counter-uavs",
        submenu: [{ name: "Recon System" }, { name: "Stealth Mode" }],
      },
    ],
  },

  Land: {
    description:
      "Technologies and systems related to ground vehicles and land-based operations. Includes simulators and solutions for defense and civilian ground systems",
    items: [
      {
        name: "Simulators",
        // path: "/land/sentry-tower",
        submenu: [{ name: "Defense" }, { name: "Private" }],
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
    ],
  },

  Software: {
    description:
      "Software provides the digital backbone for simulators and spatial computing systems. It enables realistic environments and advanced operational capabilities.",
    items: [
      {
        name: "Warfare Solutions",
        // path: "/software/interceptor",
        submenu: [
          { name: "Comand & Control System" },
          { name: "AI Algorithms" },
        ],
      },
      {
        name: "Product Software",
        // path: "/software/air-defense",
        submenu: [
          { name: "DAS", path: "/product1" },
          { name: "Realm", path: "/product2" },
          { name: "Minimal OS", path: "/minimal-os" },
          { name: "Spatial OS", path: "/spatial-os" },
        ],
      },
      // {
      //     name: "Recon Drones",
      //     path: "/software/recon-drones",
      //     submenu: [
      //         { name: "Long Range Surveillance", path: "/software/recon/long-range" },
      //         { name: "Night Vision Recon", path: "/software/recon/night-vision" }
      //     ]
      // }
    ],
  },

  "Use Cases": {
    description:
      "Use Cases show how our technology is applied in real-world scenarios. They highlight solutions across defense, enterprise and entertainment.",
    items: [
      {
        name: "Defence",
        // path: "/usecases/defence",
        submenu: [
          { name: "Ground Warfare", path: "/usecases/defence/ground" },
          { name: "Aerial Warfare", path: "/usecases/defence/air" },
        ],
      },
      {
        name: "Enterprise",
        path: "/usecases/enterprise",
        submenu: [
          // { name: "Threat Detection", path: "/space/defense/threat" },
          // { name: "Orbital Security", path: "/space/defense/security" }
        ],
      },
      {
        name: "Entertainment",
        path: "/usecases/entertainment",
        submenu: [
          // { name: "Space Communication", path: "/space/network/communication" },
          // { name: "Mission Control", path: "/space/network/control" }
        ],
      },
    ],
  },

  Company: {
    description:
      "Learn about our organization, mission and opportunities to work with us.",
    items: [
      {
        name: "About Us",
        path: "/company/aboutus",
        submenu: [],
      },
      {
        name: "Jobs",
        path: "/company/jobs",
        submenu: [],
      },
      {
        name: "Invest on Us",
        path: "/company/investors",
        submenu: [],
      },
    ],
  },

  Resources: {
    description:
      "Explore insights, documentation and real-world implementations of our technologies.",
    items: [
      {
        name: "Case Studies",
        path: "/resources/casestudies",
        submenu: [],
      },
      {
        name: "Product Book",
        path: "/resources/productbook",
        submenu: [],
      },
    ],
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
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const menuItems = Object.keys(menuData);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeThirdMenu, setActiveThirdMenu] = useState(null);
  const [menuStack, setMenuStack] = useState([]);
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
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // 🧠 ignore tiny scrolls (THIS FIXES JERKINESS)
      if (scrollDifference < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling DOWN
        setShowNavbar(false);
      } else {
        // scrolling UP
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="relative">
      {activeMenu && !isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40 pointer-events-none"></div>
      )}
      <nav
        className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    ${
      isDarkNavbar
        ? "bg-black text-white"
        : activeMenu
          ? "bg-gray-200 text-black backdrop-blur-md"
          : "bg-white text-black"
    }
  `}
        onMouseLeave={() => setActiveMenu(null)}
      >
        {/* NAVBAR */}
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
          {/* LOGO */}
          <div
            onClick={() => {
              setActiveMenu(null);
              navigate("/");
            }}
            className="
    cursor-pointer
    select-none
    uppercase
    italic
    font-black
    leading-[0.8]
    tracking-[-0.07em]
    text-[14px]
    sm:text-[14px]
    lg:text-[16px]
"
            style={{
              fontFamily: "'Arial Black', Impact, sans-serif",
              transform: "skewX(-6deg)",
            }}
          >
            DOOM <br />
            INDUSTRIES
          </div>

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
              onClick={() => setIsOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* DROPDOWN */}
        {activeMenu && !isOpen && (
          <div
            className={`absolute left-0 top-full w-full  z-50 ${
              isDarkNavbar
                ? "bg-black border-neutral-800"
                : "bg-gray-200 border-neutral-200"
            }`}
          >
            <div className="max-w-[1400px] mx-auto  grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1.4fr] px-16 py-12 gap-10">
              <div className="max-w-sm">
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkNavbar ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {activeMenu} Domain
                </p>

                <p
                  className={`text-sm leading-relaxed ${
                    isDarkNavbar ? "text-gray-300" : "text-gray-600"
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
                    + {item.name}
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
                      className={`text-md cursor-pointer ${
                        isDarkNavbar
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {sub.name}
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
                      className={`text-md cursor-pointer ${
                        isDarkNavbar
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {child.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NEW MOBILE MENU (SLIDE TYPE) */}
        <div
          className={`fixed inset-0 bg-black text-white z-50 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="p-5 border-b border-gray-800 flex justify-between">
            {menuStack.length > 0 ? (
              <button
                onClick={() => setMenuStack((prev) => prev.slice(0, -1))}
                className="text-sm"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            <h2 className="text-lg font-medium">Menu</h2>

            <button
              onClick={() => {
                setIsOpen(false);
                setMenuStack([]);
              }}
            >
              ✕
            </button>
          </div>

          {/* CONTENT */}
          <div className="flex-1 overflow-y-auto bg-black">
            {/* LEVEL 1 */}
            {menuStack.length === 0 && (
              <div className="p-6 space-y-5">
                {Object.entries(menuData).map(([key, value]) => (
                  <div
                    key={key}
                    onClick={() =>
                      setMenuStack([{ type: "main", data: value, title: key }])
                    }
                    className="flex justify-between items-center text-xl cursor-pointer"
                  >
                    <span>{key}</span>
                    <span>→</span>
                  </div>
                ))}
              </div>
            )}

            {/* LEVEL 2 */}
            {menuStack.length === 1 && (
              <div className="p-6 space-y-4">
                {menuStack[0].data.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => {
                      if (item.submenu && item.submenu.length > 0) {
                        setMenuStack((prev) => [
                          ...prev,
                          { type: "submenu", data: item, title: item.name },
                        ]);
                      } else if (item.path) {
                        navigate(item.path);
                        setIsOpen(false);
                        setMenuStack([]);
                      }
                    }}
                  >
                    <span className="text-lg">{item.name}</span>
                    {item.submenu?.length > 0 && <span>→</span>}
                  </div>
                ))}
              </div>
            )}

            {/* LEVEL 3 */}
            {menuStack.length === 2 && (
              <div className="p-6 space-y-4">
                {menuStack[1].data.submenu.map((sub, i) => (
                  <div key={i} className="flex justify-between items-center">
                    {/* 🔥 LEFT SIDE → NAVIGATION */}
                    <span
                      className="text-md cursor-pointer"
                      onClick={() => {
                        if (sub.path) {
                          navigate(sub.path);
                          setIsOpen(false);
                          setMenuStack([]);
                        }
                      }}
                    >
                      {sub.name}
                    </span>

                    {/* 🔥 RIGHT SIDE → OPEN CHILDREN */}
                    {sub.children && sub.children.length > 0 && (
                      <span
                        className="cursor-pointer px-2"
                        onClick={(e) => {
                          e.stopPropagation(); // VERY IMPORTANT
                          setMenuStack((prev) => [
                            ...prev,
                            { type: "child", data: sub, title: sub.name },
                          ]);
                        }}
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* LEVEL 4 */}
            {menuStack.length === 3 && (
              <div className="p-6 space-y-3">
                {menuStack[2].data.children.map((child, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      if (!child.path) return;
                      navigate(child.path);
                      setIsOpen(false);
                      setMenuStack([]);
                    }}
                    className="cursor-pointer text-sm text-gray-300 hover:text-white"
                  >
                    {child.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/NewNavbar";
import Footer from "../../components/NewFooter";
import TalkToSalesCTA from "../../components/TalkToSalesCTA";

import img1 from "../../assets/srm1.jpg";
import img2 from "../../assets/srm2.jpeg";
import img3 from "../../assets/srm3.png";
import img4 from "../../assets/srm4.jpg";


import RafaleImg from "../../assets/Mig29Img.png";
import Mig29K1 from "../../assets/Mig29-1.jpg";
import Mig29K2 from "../../assets/Mig29-2.jpg";
import Mig29K3 from "../../assets/Mig29-3.jpg";
import Mig29K4 from "../../assets/Mig29-4.jpg";
import Mig29K5 from "../../assets/Mig29-5.jpg";
import Mig29K6 from "../../assets/Mig29-6.jpg";
import Mig29K7 from "../../assets/Mig29-7.avif";
import rafaleCockpit from "../../assets/mig29-cockpit.jpg";


const tabs = [
    {
        id: 1,
        label: "Building Blocks Curriculum",
        title: "BUILDING BLOCKS CURRICULUM",
        text: "A structured building-block curriculum spanning Tier 1 to Tier 3, delivering immersive high-fidelity simulations that enhance muscle memory and pilot readiness.",
        img: img1
    },
    {
        id: 2,
        label: "Basic to Advance Training",
        title: "Basic to Advance Training Simulation Solutions",
        text: "From basic to advanced training, our simulation solutions deliver immersive pilot training environments.High-fidelity systems replicate real aircraft cockpits for a truly authentic flight experience.",
        img: img2
    },
    {
        id: 3,
        label: "Combined Squadran Training",
        title: "Integrated Combined Squadron Training",
        text: "Combined training blends multiple aircraft types, scenarios, or crew roles into integrated sessions to build coordination and adaptability in realistic operations.",
        img: img3
    },
    {
        id: 4,
        label: "Indegeous Product Development",
        title: "Indigenous Engineering Excellence",
        text: "Atmanirbhar Bharat promotes indigenous development by strengthening domestic manufacturing, technology, and innovation to reduce dependence on foreign imports.",

        img: img4
    }
];




const MIG29 = () => {

    const navigate = useNavigate();
    const videoRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [active, setActive] = useState(0);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const pyramidContainer = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25
            }
        }
    };

    const pyramidItem = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
    const [open, setOpen] = useState(false);

    const gridRef = useRef(null);


    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToGrid = () => {
        gridRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const statVariant = {
        hidden: { opacity: 0, y: 80 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <div>
            <Navbar />
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full bg-black text-white min-h-[60vh] flex flex-col justify-between px-6 sm:px-10 lg:px-20 pt-20 pb-10"
            >

                {/* BIG TITLE */}
                <div>
                    <h1 className="text-[34px] sm:text-[48px] md:text-[72px] lg:text-[110px] font-semibold tracking-tight leading-[0.95]">
                        Mikoyan MiG-29
                    </h1>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-end">

                    {/* LEFT LABEL */}
                    <div className="text-[11px] sm:text-[12px] tracking-[0.25em] text-gray-400 uppercase space-y-3">
                        <div>HIGH FIDELITY SIMULATION</div>
                        <div>[ MR ]</div>
                    </div>

                    {/* PARAGRAPH */}
                    <div className="text-[13px] sm:text-[14px] leading-relaxed text-gray-300 max-w-[420px]">
                        The Mikoyan MiG-29 is a twin-engine supersonic fighter jet designed for
                        air superiority, known for its high maneuverability, powerful radar
                        systems, and advanced combat capabilities.
                    </div>

                    {/* SCROLL ARROW */}
                    <div
                        onClick={scrollToGrid}
                        className="flex md:justify-end text-3xl md:text-4xl cursor-pointer text-gray-300 hover:translate-y-1 transition"
                    >
                        ↓
                    </div>

                </div>

            </motion.section>



            <header className="relative w-full min-h-[75vh] sm:min-h-[100vh] lg:min-h-screen overflow-hidden">

                {/* Background image */}
                <img
                    src={RafaleImg}
                    alt="Rafale Fighter"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 flex items-end min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen">

                    <div className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-24">

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-8">


                        </div>

                    </div>
                </div>

            </header>
            {/* BLACK BLANK SECTION */}
            <section className="w-full bg-black h-[6vh] sm:h-[8vh]"></section>

            {/* ================= AEROSPACE MOSAIC GRID ================= */}

            <section
                ref={gridRef}
                className="w-full bg-black text-white py-20 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-20"
            >

                <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[220px] sm:auto-rows-[240px] lg:auto-rows-[260px] gap-6">

                    {/* HERO BLOCK */}
                    <div
                        onClick={() => navigate("/mig29-case-study-1")}
                        className="relative col-span-1 sm:col-span-2 lg:col-span-6 lg:row-span-2 rounded-xl overflow-hidden group cursor-pointer"
                        style={{
                            backgroundImage: `url(${Mig29K1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>

                        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-6 sm:left-8 lg:left-10 max-w-[420px]">

                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 group-hover:-translate-y-1 transition">
                                Development of the MiG-29 – Soviet Response to Western Fighters
                            </h3>

                            <p className="text-gray-300 text-sm hidden sm:block">
                                The Mikoyan MiG-29 was developed during the 1970s by the Mikoyan
                                Design Bureau in the Soviet Union.
                            </p>

                        </div>

                    </div>


                    {/* SMALL CARD */}
                    <div
                        onClick={() => navigate("/mig29-case-study-2")}
                        className="relative col-span-1 lg:col-span-3 rounded-xl overflow-hidden group cursor-pointer"
                        style={{
                            backgroundImage: `url(${Mig29K2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <h4 className="text-lg font-semibold">
                                MiG-29 in the Gulf War
                            </h4>
                        </div>

                    </div>


                    {/* SMALL CARD */}
                    <div
                        onClick={() => navigate("/mig29-case-study-3")}
                        className="relative col-span-1 lg:col-span-3 rounded-xl overflow-hidden group cursor-pointer"
                        style={{
                            backgroundImage: `url(${Mig29K3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <h4 className="text-lg font-semibold">
                                MiG-29 in the Indian Air Force
                            </h4>
                        </div>

                    </div>


                    {/* WIDE CARD */}
                    <div
                        onClick={() => navigate("/mig29-case-study-4")}
                        className="relative col-span-1 sm:col-span-2 lg:col-span-6 rounded-xl overflow-hidden group cursor-pointer"
                        style={{
                            backgroundImage: `url(${Mig29K4})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

                        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 max-w-[400px]">
                            <h3 className="text-lg sm:text-xl font-semibold">
                                MiG-29 Naval Operations
                            </h3>
                        </div>

                    </div>


                    {/* SMALL */}
                    <div
                        onClick={() => navigate("/mig29-case-study-5")}
                        className="relative col-span-1 lg:col-span-3 rounded-xl overflow-hidden group cursor-pointer"
                        style={{
                            backgroundImage: `url(${Mig29K5})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

                        <div className="absolute bottom-6 left-6">
                            <h4 className="text-lg font-semibold">
                                MiG-29 Dogfight Capability and Air Combat Maneuverability
                            </h4>
                        </div>

                    </div>


                    {/* MEDIUM */}
                    <div
                        onClick={() => navigate("/mig29-case-study-6")}
                        className="relative col-span-1 lg:col-span-3 rounded-xl overflow-hidden group cursor-pointer"
                        style={{
                            backgroundImage: `url(${Mig29K6})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

                        <div className="absolute bottom-6 left-6">
                            <h4 className="text-lg font-semibold">
                                Evolution of MiG-29 Upgrades → MiG-35 Development
                            </h4>
                        </div>

                    </div>


                    {/* WIDE CARD */}
                    <div
                        onClick={() => navigate("/mig29-case-study-7")}
                        className="relative col-span-1 sm:col-span-2 lg:col-span-6 rounded-xl overflow-hidden group cursor-pointer"
                        style={{
                            backgroundImage: `url(${Mig29K7})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >

                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

                        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 max-w-[400px]">
                            <h3 className="text-lg sm:text-xl font-semibold">
                                MiG-29 Crash Near Agra (2024)
                            </h3>
                        </div>

                    </div>

                </div>

            </section>




            <section className="w-full bg-black text-white py-16 sm:py-20 flex items-center px-6 sm:px-10 lg:px-20">

                <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

                    {/* LEFT SIDE */}
                    <div className="max-w-[620px]">

                        <h2
                            className="font-semibold leading-[0.95] tracking-tight
        text-[36px] sm:text-[48px] md:text-[64px] lg:text-[60px] mb-8"
                        >
                            MIG-29 <br />
                            Cockpit Architecture
                        </h2>

                        <p className="text-gray-400 text-[14px] sm:text-[16px] leading-relaxed max-w-[420px]">
                            The Mikoyan MiG-29 glass cockpit integrates digital multifunction
                            displays, a head-up display, and advanced avionics to present real-time
                            flight, radar, navigation, and weapon data, enabling faster pilot
                            decision-making and improved situational awareness during combat
                            missions.
                        </p>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">

                        <img
                            src={rafaleCockpit}
                            alt="MiG-29 Cockpit"
                            className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[500px] object-contain"
                        />

                    </div>

                </div>

            </section>

            <section className="w-full bg-black text-white py-16 sm:py-20 lg:py-24">

                <div className="max-w-[1500px] mx-auto px-6 lg:px-10">

                    {/* SECTION 1 */}
                    <p className="text-gray-400 tracking-widest text-xs sm:text-sm uppercase mb-10 sm:mb-14">
                        Airframe & Operational Expenditure Overview
                    </p>

                    <motion.div
                        variants={statVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-10"
                    >

                        <div>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                                $45–50M
                            </h2>
                            <p className="text-gray-400 mt-3">
                                Airframe
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                                $4–5K
                            </h2>
                            <p className="text-gray-400 mt-3">
                                Fuel per hour
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                                $2–3K
                            </h2>
                            <p className="text-gray-400 mt-3">
                                Maintenance per flight hour
                            </p>
                        </div>

                    </motion.div>

                    <div className="border-b border-gray-700 my-14"></div>


                    {/* SECTION 2 */}
                    <p className="text-gray-400 tracking-widest text-xs sm:text-sm uppercase mb-10 sm:mb-14">
                        Estimated Expenditure on OEM's
                    </p>

                    <motion.div
                        variants={statVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-10"
                    >

                        <div>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                                $6–12M
                            </h2>
                            <p className="text-gray-400 mt-3">
                                MiG-29 Simulator Infrastructure
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                                $4–6M
                            </h2>
                            <p className="text-gray-400 mt-3">
                                Full-Mission Cockpit Simulator
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                                $600M+
                            </h2>
                            <p className="text-gray-400 mt-3">
                                OEM Support & Engine Contracts
                            </p>
                        </div>

                    </motion.div>

                    <div className="border-b border-gray-700 my-14"></div>


                    {/* SECTION 3 */}
                    <p className="text-gray-400 tracking-widest text-xs sm:text-sm uppercase mb-10 sm:mb-14">
                        Operational Training Investment
                    </p>

                    <motion.div
                        variants={statVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-10"
                    >

                        <div>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                                900–1,000
                            </h2>
                            <p className="text-gray-400 mt-3">
                                Total Fighter Pilots (IAF)
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                                200,000+ hrs
                            </h2>
                            <p className="text-gray-400 mt-3">
                                Total Annual Flying Hours
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                                $1.1–1.5B
                            </h2>
                            <p className="text-gray-400 mt-3">
                                Estimated Annual Training Cost
                            </p>
                        </div>

                    </motion.div>

                </div>

            </section>
            {/* ================= ANDURIL STYLE HERO ================= */}
            <section className="relative py-20 sm:py-24 md:py-32 px-6 sm:px-10 lg:px-20 overflow-hidden bg-black">

                {/* Subtle radial glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.06),transparent_45%)]"></div>

                <div className="relative max-w-[1100px] mx-auto text-left lg:ml-20">

                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="
        font-extrabold uppercase
        text-[26px] sm:text-[34px] md:text-[46px] lg:text-[60px]
        leading-[1.08]
        tracking-tight
        text-white
      "
                    >

                        {[
                            "WE ARE PROVIDING",
                            "HIGH FIDELITY MIXED REALITY",
                            "COCKPIT SIMULATORS",
                            "REPLICATING ACTUAL COCKPIT",
                            "ENVIRONMENT FEEL AND TOUCH"
                        ].map((line, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                        transition: {
                                            delay: i * 0.2,
                                            duration: 0.8,
                                            ease: [0.22, 1, 0.36, 1]
                                        }
                                    }
                                }}
                                className={`block ${i === 1
                                    ? "bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                                    : i === 4
                                        ? "text-gray-500"
                                        : i === 3
                                            ? "text-gray-300"
                                            : ""
                                    }`}
                            >
                                {line}
                            </motion.span>
                        ))}

                    </motion.h2>

                </div>

            </section>
            <section className="w-full bg-black text-white py-20 sm:py-24 lg:py-32">

                <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">

                    {/* TITLE */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 sm:mb-16">
                        OUR ADVANCED COCKPIT SIMULATOR PROVIDES
                    </h2>

                    {/* TAB MENU */}
                    <div className="flex overflow-x-auto gap-6 sm:gap-10 text-gray-400 border-b border-gray-700 pb-4 sm:pb-6 mb-12 sm:mb-16">

                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`whitespace-nowrap transition ${active === index
                                        ? "text-white border-b border-white pb-2"
                                        : ""
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}

                    </div>

                    {/* CONTENT */}
                    <div className="bg-gray-100 text-black p-6 sm:p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">

                        {/* LEFT TEXT */}
                        <AnimatePresence mode="wait">

                            <motion.div
                                key={active}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >

                                <p className="text-sm tracking-wide text-gray-500 mb-4">
                                    0{tabs[active].id} / 04
                                </p>

                                <p className="text-xs tracking-widest mb-6">
                                    {tabs[active].title}
                                </p>

                                <p className="text-lg sm:text-xl md:text-2xl max-w-[520px] leading-relaxed">
                                    {tabs[active].text}
                                </p>

                                <div className="text-[60px] sm:text-[90px] lg:text-[120px] font-bold mt-10 lg:mt-16 opacity-80">
                                    {tabs[active].id}
                                </div>

                            </motion.div>

                        </AnimatePresence>

                        {/* IMAGE */}
                        <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[360px] overflow-hidden rounded-lg">

                            <AnimatePresence mode="wait">

                                <motion.img
                                    key={tabs[active].img}
                                    src={tabs[active].img}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover"
                                    initial={{ opacity: 0, x: 80 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -80 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                />

                            </AnimatePresence>

                        </div>

                    </div>

                </div>

            </section>




            <TalkToSalesCTA />
            <Footer />
        </div>
    )
}

export default MIG29
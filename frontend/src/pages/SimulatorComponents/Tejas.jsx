import { Link } from "react-router-dom";
import { useEffect } from "react";

import React, { useRef, useState } from "react";
import Navbar from '../../components/NewNavbar'
import Footer from '../../components/NewFooter'
import TejasMK2 from "../../assets/TejasMK2.webp";

import Tejas1 from "../../assets/Tejas1.jpg";
import Tejas2 from "../../assets/Tejas2.jpg";
import Tejas3 from "../../assets/Tejas3.jpg";
import Tejas4 from "../../assets/Tejas4.png";
import Tejas5 from "../../assets/Tejas5.jpg";
import Tejas6 from "../../assets/Tejas6.jpg";

import img from "../../assets/TEJAS cockpit.png";
import img1 from "../../assets/tejas back view.png";
import img2 from "../../assets/tejas left side view.png";
import img3 from "../../assets/TEJIUS COCKPIT.png";
import img4 from "../../assets/tejas with pilot.png";
import poster from "../../assets/TEJIUS COCKPIT.png";
import heroImg from "../../assets/officeDAS.png";
import PassthroughSection from '../../components/ProductSubPageComponents/PassthroughSection';
import TalkToSalesCTA from '../../components/TalkToSalesCTA';


const cards = [
    {

        title: "Development of India’s \n Indigenous Fighter – HAL Tejas",
        desc: "The HAL Tejas Light Combat Aircraft (LCA) program represents one of the most ambitious aerospace projects undertaken by India. Initiated in the 1980s, the program aimed to replace the aging MiG-21 fleet of the Indian Air Force with a modern indigenous fighter aircraft. ",
        image: Tejas1,
        span: "lg:row-span-2",
        link: "/tejas-case-study-1"
    },
    {

        title: "Tejas Operational Deployment in the Indian Air Force",
        desc: "Mixed reality headsets allow pilots to interact with real cockpit hardware while visualizing a dynamic virtual battlefield environmentTejas Operational Deployment in the Indian Air Force.",
        image: Tejas2,
        span: "lg:row-span-2",
        link: "/tejas-case-study-2"
    },
    {

        title: "Tejas in International \n Military Exercises",
        desc: "One major demonstration of Tejas capabilities occurred during Exercise Tarang Shakti, a large multinational air exercise hosted by India.ed panoramic glass cockpit displays replicate real aircraft avionics, radar data, and navigation systems.",
        image: Tejas3,
        link: "/tejas-case-study-3"
    },
    {

        title: "Integration of Indigenous Weapons and Radar Systems",
        desc: "Another major milestone in the Tejas program is the integration of indigenous weapons and radar systems, enhancing India's defence autonomy.",
        image: Tejas4,
        link: "/tejas-case-study-4"
    },
    {

        title: "Tejas Naval Variant – Aircraft Carrier Operations",
        desc: "The Naval version of HAL Tejas was developed to operate from aircraft carriers of the Indian Navy. Unlike conventional fighter aircraft that operate from long runways, carrier-based aircraft must handle short takeoffs, high landing stresses, and arrested landings.",
        image: Tejas5,
        link: "/tejas-case-study-5"
    },
    {

        title: "Tejas Mk1A – Modernization and Mass Production Program",
        desc: "After the initial operational deployment of the Tejas Mk1, the Indian Air Force required a more advanced version with improved avionics, radar, and maintainability. air-combat scenarios, mission rehearsals, emergency procedures, and tactical training environments.",
        image: Tejas6,
        link: "/tejas-case-study-6"
    }
];
const cockpitDetails = [
    {
        title: "Panoramic Glass Cockpit Display",
        desc: "The Tejas Mk-2 cockpit features a large panoramic display integrating flight, navigation, radar, and mission data into a single interface."
    },
    {
        title: "Hands-On-Throttle-And-Stick (HOTAS)",
        desc: "Critical combat functions including weapon selection, radar control, and sensor operation are accessible directly from the throttle and joystick."
    },
    {
        title: "Wide-Angle Head-Up Display",
        desc: "The HUD projects flight data and targeting cues directly into the pilot’s field of view for faster decision making."
    },
    {
        title: "Sensor Fusion Interface",
        desc: "Mission computers combine radar, navigation, and electronic warfare data into one tactical picture."
    },
    {
        title: "Helmet Mounted Display System",
        desc: "Pilots can lock targets simply by looking at them through helmet-mounted targeting systems."
    }
];
const Tejas = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
    const [activeCockpit, setActiveCockpit] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            <Navbar />
            <header className="relative w-full min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen overflow-hidden">

                {/* Background Image */}
                <img
                    src={TejasMK2}
                    alt="Tejas MK2 Fighter"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 flex items-end min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen">

                    <div className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-24">

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-8">

                            {/* LEFT */}
                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight lg:max-w-2xl">
                                TEJAS MK-2

                            </h1>

                            {/* RIGHT */}
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl text-left lg:text-right">
                                A next-generation mixed-reality training platform designed to replicate the
                                cockpit environment of the Tejas Mk-2 fighter aircraft.


                            </p>

                        </div>

                    </div>
                </div>

            </header>


            {/* ================= CASE STUDIES ================= */}

            <section className="bg-[#f2f2f2] px-6 sm:px-10 lg:px-20 py-16 sm:py-24 lg:py-[120px]">

                <div className="grid grid-cols-4 grid-rows-2 gap-6 max-w-[1400px] mx-auto">

                    {/* CARD 1 — TALL */}
                    <Link to={cards[0].link} className="row-span-2 group">
                        <div
                            className="relative h-full min-h-[540px] bg-cover bg-center p-8 text-white"
                            style={{ backgroundImage: `url(${cards[0].image})` }}
                        >

                            <div className="absolute inset-0 bg-[#0057ff]/0 group-hover:bg-[#0057ff]/70 transition duration-300" />

                            <div className="relative z-10">
                                <small className="text-[12px] tracking-widest">{cards[0].small}</small>
                                <h3 className="mt-3 text-[22px] leading-snug">{cards[0].title}</h3>
                                <p className="mt-4 text-[14px] text-gray-200">{cards[0].desc}</p>
                            </div>

                        </div>
                    </Link>


                    {/* CARD 2 — TALL */}
                    <Link to={cards[1].link} className="row-span-2 group">
                        <div
                            className="relative h-full min-h-[540px] bg-cover bg-center p-8 text-white"
                            style={{ backgroundImage: `url(${cards[1].image})` }}
                        >

                            <div className="absolute inset-0 bg-[#0057ff]/0 group-hover:bg-[#0057ff]/70 transition duration-300" />

                            <div className="relative z-10">
                                <small className="text-[12px] tracking-widest">{cards[1].small}</small>
                                <h3 className="mt-3 text-[22px] leading-snug">{cards[1].title}</h3>
                                <p className="mt-4 text-[14px] text-gray-200">{cards[1].desc}</p>
                            </div>

                        </div>
                    </Link>


                    {/* CARD 3 */}
                    <Link to={cards[2].link} className="group">
                        <div
                            className="relative aspect-square bg-cover bg-center p-6 text-white"
                            style={{ backgroundImage: `url(${cards[2].image})` }}
                        >

                            <div className="absolute inset-0 bg-[#0057ff]/0 group-hover:bg-[#0057ff]/70 transition duration-300" />

                            <div className="relative z-10">
                                <small className="text-[12px] tracking-widest">{cards[2].small}</small>
                                <h3 className="mt-3 text-[18px]">{cards[2].title}</h3>
                                <p className="mt-2 text-[13px] text-gray-200">{cards[2].desc}</p>
                            </div>

                        </div>
                    </Link>


                    {/* CARD 4 */}
                    <Link to={cards[3].link} className="group">
                        <div
                            className="relative aspect-square bg-cover bg-center p-6 text-white"
                            style={{ backgroundImage: `url(${cards[3].image})` }}
                        >

                            <div className="absolute inset-0 bg-[#0057ff]/0 group-hover:bg-[#0057ff]/70 transition duration-300" />

                            <div className="relative z-10">
                                <small className="text-[12px] tracking-widest">{cards[3].small}</small>
                                <h3 className="mt-3 text-[18px]">{cards[3].title}</h3>
                                <p className="mt-2 text-[13px] text-gray-200">{cards[3].desc}</p>
                            </div>

                        </div>
                    </Link>


                    {/* CARD 5 */}
                    <Link to={cards[4].link} className="group">
                        <div
                            className="relative aspect-square bg-cover bg-center p-6 text-white"
                            style={{ backgroundImage: `url(${cards[4].image})` }}
                        >

                            <div className="absolute inset-0 bg-[#0057ff]/0 group-hover:bg-[#0057ff]/70 transition duration-300" />

                            <div className="relative z-10">
                                <small className="text-[12px] tracking-widest">{cards[4].small}</small>
                                <h3 className="mt-3 text-[18px]">{cards[4].title}</h3>
                                <p className="mt-2 text-[13px] text-gray-200">{cards[4].desc}</p>
                            </div>

                        </div>
                    </Link>


                    {/* CARD 6 */}
                    <Link to={cards[5].link} className="group">
                        <div
                            className="relative aspect-square bg-cover bg-center p-6 text-white"
                            style={{ backgroundImage: `url(${cards[5].image})` }}
                        >

                            <div className="absolute inset-0 bg-[#0057ff]/0 group-hover:bg-[#0057ff]/70 transition duration-300" />

                            <div className="relative z-10">
                                <small className="text-[12px] tracking-widest">{cards[5].small}</small>
                                <h3 className="mt-3 text-[18px]">{cards[5].title}</h3>
                                <p className="mt-2 text-[13px] text-gray-200">{cards[5].desc}</p>
                            </div>

                        </div>
                    </Link>

                </div>
            </section>

            {/* ================= COCKPIT SYSTEMS ================= */}

            <section className="bg-white py-16 sm:py-24 lg:py-[140px]">

                <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row gap-16 px-6 lg:px-16 items-start">

                    {/* LEFT SIDE */}

                    <div className="lg:w-[42%] w-full -mt-16">

                        <small className="block text-[12px] tracking-widest uppercase text-black">
                            COCKPIT SYSTEMS
                        </small>

                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-[40px] font-light leading-tight">
                            Inside the Tejas Mk-2 Cockpit
                        </h2>

                        <p className="mt-6 text-[15px] leading-[1.7] text-gray-700">
                            The Tejas Mk-2 cockpit features a modern glass cockpit architecture
                            designed for advanced multirole combat missions. Integrated avionics,
                            digital displays, and mission computers allow pilots to monitor flight
                            data, manage sensors, and control weapons efficiently.
                        </p>

                        <ul className="mt-8 space-y-4">

                            {cockpitDetails.map((item, index) => (

                                <li
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setActiveCockpit(index)}
                                    onMouseLeave={() => setActiveCockpit(null)}
                                >

                                    <div className={`flex items-center gap-3 text-[16px] cursor-pointer transition-colors
${activeCockpit === index ? "text-black" : "text-gray-500 hover:text-black"}
`}>

                                        <span className="w-3 h-3 rounded-full bg-black"></span>

                                        {item.title}

                                    </div>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="lg:w-[58%] w-full">

                        <img
                            src={img1}
                            alt="Tejas Mk2 cockpit simulator"
                            className="w-full h-[520px] object-cover"
                        />

                    </div>

                </div>

            </section>
            {/* ================= COST AND TRAINING ================= */}

            <section className="w-full bg-white py-16 px-6 lg:px-20">

                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT SIDE */}

                    <div className="flex flex-col justify-between h-full">

                        <h2 className="text-[28px] md:text-[34px] font-extrabold uppercase leading-tight mb-10">
                            The Cost and Complexity of Fighter Pilot Training
                        </h2>

                        <div className="space-y-6 text-[15px] tracking-wide">

                            {[
                                {
                                    title: "AIRCRAFT PROCUREMENT COST",
                                    desc: "Tejas Mk-2 is estimated to cost $55–80 million per aircraft, including advanced avionics, radar, engine, and weapons integration.."
                                },
                                {
                                    title: "MAINTENANCE AND LIFECYCLE COST",
                                    desc: "FFighter aircraft require continuous inspections, servicing, and engine overhauls, making maintenance a major long-term operational expense.ighter aircraft require constant maintenance, inspections, and upgrades throughout their operational lifespan."
                                },
                                {
                                    title: "FUEL AND OPERATIONAL COST",
                                    desc: "TTejas Mk-2 operational cost is estimated at around $25,000 per flight hour, covering fuel, logistics, and aircraft operations.aining sorties consume large amounts of fuel and increase wear on aircraft systems."
                                },
                                {
                                    title: "PILOT TRAINING HOURS",
                                    desc: "Fighter pilots typically require 150–220 flight hours annually to maintain combat readiness and operational proficiency.ighter pilots must complete hundreds of flight hours every year to maintain operational readiness."
                                },
                                {
                                    title: "TRAINING RESOURCE DEMAND",
                                    desc: "Real aircraft training consumes fuel, increases maintenance workload, and reduces aircraft availability for operational missions.aditional training consumes aircraft lifespan, increases maintenance workload, and reduces fleet availability."
                                },
                                {
                                    title: "SOLUTION: MR COCKPIT SIMULATORS",
                                    desc: "Mixed-reality cockpit simulators can shift 50–70% of training to simulation, reducing cost while enabling safe mission rehearsal and emergency training.Mixed-reality cockpit simulators shift training to simulation environments, reducing costs while maintaining realistic mission training."
                                }
                            ].map((item, index) => (

                                <div key={index}>

                                    <div
                                        onClick={() => toggleItem(index)}
                                        className="flex items-start gap-3 cursor-pointer select-none"
                                    >

                                        <span
                                            className={`text-orange-500 mt-1 text-[18px] transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""
                                                }`}
                                        >
                                            ▶
                                        </span>

                                        <p className="font-mono leading-relaxed">
                                            {item.title}
                                        </p>

                                    </div>

                                    {openIndex === index && (

                                        <p className="ml-6 mt-2 text-gray-600 text-[14px] leading-relaxed max-w-[420px] transition-all duration-300">
                                            {item.desc}
                                        </p>

                                    )}

                                </div>

                            ))}

                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-10">

                            <img
                                src={img3}
                                className="w-full h-[180px] object-cover"
                                alt="cockpit controls"
                            />

                            <img
                                src={img4}
                                className="w-full h-[180px] object-cover"
                                alt="pilot simulator training"
                            />

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="w-full">

                        <img
                            src={img2}
                            alt="MR cockpit simulator"
                            className="w-full h-full object-cover"
                        />

                    </div>

                </div>

            </section>

            {/* ================= IMMERSIVE COMBAT SIMULATION ================= */}

            <section className="bg-white py-16 sm:py-24 lg:py-[160px] px-4 sm:px-6">
                <div className="mx-auto max-w-[900px] text-center">

                    {/* VIDEO CONTAINER */}
                    <div className="relative mx-auto mb-10 sm:mb-14 lg:mb-16 w-full max-w-[640px]">

                        {/* VIDEO */}
                        <video
                            ref={videoRef}
                            src={"/training.mp4"}
                            poster={poster}
                            controls
                            playsInline
                            preload="metadata"
                            onPause={() => setIsPlaying(false)}
                            onPlay={() => setIsPlaying(true)}
                            className="block h-[220px] sm:h-[320px] md:h-[420px] w-full bg-black object-cover"
                        />

                        {/* CUSTOM PLAY BUTTON */}
                        {!isPlaying && (
                            <button
                                onClick={handlePlay}
                                className="absolute left-1/2 top-1/2 flex
                    h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20
                    -translate-x-1/2 -translate-y-1/2
                    items-center justify-center
                    rounded-full bg-black/50
                    transition hover:bg-black/70"
                            >
                                <span className="ml-1 h-0 w-0
                    border-b-[8px] border-t-[8px] border-l-[14px]
                    sm:border-b-[10px] sm:border-t-[10px] sm:border-l-[18px]
                    lg:border-b-[12px] lg:border-t-[12px] lg:border-l-[22px]
                    border-b-transparent border-t-transparent border-l-white" />
                            </button>
                        )}

                    </div>

                    {/* TEXT */}
                    <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light leading-tight">
                        Immersive
                        <br />
                        Combat
                        Simulation
                    </h2>

                    <p className="mx-auto mt-6 sm:mt-8 max-w-[560px]
        text-sm sm:text-[15px]
        leading-relaxed sm:leading-[1.75]
        text-gray-600">
                        The simulator recreates complex mission environments including air-to-air
                        combat, beyond-visual-range engagements, and ground attack operations.
                        Pilots interact with real cockpit controls while the mixed reality system
                        renders a fully simulated battlefield around them in real time.
                    </p>

                    <button className="mt-10 sm:mt-12 lg:mt-14
        inline-flex items-center justify-center gap-4
        bg-black
        px-6 sm:px-8 lg:px-10
        py-3 sm:py-3.5 lg:py-4
        text-xs sm:text-[13px]
        tracking-widest text-white
        transition hover:bg-gray-900
        w-full sm:w-auto">
                        VIEW TRAINING SYSTEM →
                        <span className="text-base sm:text-lg">→</span>
                    </button>

                </div>
            </section>

            {/* FULL VIDEO */}
            <section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={"/Su30MKI.mp4"} type="video/mp4" />
                </video>
            </section>
            { /* ================= muscle memory  ================= */}
            <section className="bg-white py-16 sm:py-24 lg:py-[140px]">
                <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 lg:gap-[100px] px-6 sm:px-10 lg:px-16">

                    <div className="w-full lg:w-[58%]">
                        <img
                            src={img}
                            alt="Immersion display"
                            className="h-[300px] sm:h-[420px] lg:h-[520px] w-full object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-[42%]">
                        <small className="block text-[12px] tracking-widest text-black">
                            FEATURES
                        </small>

                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            MUSCLE MEMORY
                            <br />
                            DEVELOPMENT
                        </h2>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            Muscle memory development refers to the process of training pilots to perform cockpit actions instinctively through repeated simulation practice. In advanced fighters like the HAL Tejas Mk2, pilots must manage complex avionics, weapon systems, and flight controls within seconds. High-fidelity cockpit simulators allow trainees to repeatedly practice these procedures, helping them build automatic responses and operational familiarity before flying the actual aircraft.
                        </p>


                    </div>
                </div>
            </section>

            { /* ================= building blocks ================= */}

            <section
                className="relative w-full min-h-screen flex items-center text-white"
                style={{
                    backgroundImage: "url('/images/learn7.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                    backgroundRepeat: "no-repeat",
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* LEFT CONTENT */}
                <div className="relative ml-[4vw] max-w-[560px] px-6 lg:px-0">

                    <p className="uppercase text-[12px] tracking-[0.18em] font-light mb-6 text-white/80">
                        THE ANTIWORLD ADVANTAGE
                    </p>

                    <h2 className="uppercase text-[28px] md:text-[36px] font-extrabold leading-[1.1] mb-8">
                        BUILDING-BLOCK
                        <br />
                        TRAINING CURRICULUM
                    </h2>

                    <div className="text-[15px] md:text-[16px] leading-[1.75] text-white/80 mb-10 max-w-[520px]">

                        <p className="mb-6">
                            A structured building-block training curriculum guides pilots from cockpit
                            familiarization to advanced mission execution, ensuring progressive skill
                            development and operational readiness.
                        </p>

                        <ul className="space-y-2 list-disc pl-5">

                            <li>Basic to Advanced Pilot Training</li>

                            <li>Stage 1 — Cockpit Familiarization & Aircraft Systems</li>

                            <li>Stage 2 — Flight Operations & Navigation Training</li>

                            <li>Stage 3 — Tactical Combat Training</li>

                            <li>Stage 4 — Advanced Mission & Combat Scenarios</li>

                        </ul>

                    </div>


                </div>

            </section>




            <section className="w-full bg-white py-16 sm:py-24 lg:py-36">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-28 items-start">

                    {/* LEFT SIDE — CUSTOMER LIST */}
                    <div>
                        <p className="text-xs tracking-widest text-gray-500 mb-6 sm:mb-8 lg:mb-10 uppercase">
                            From our customers
                        </p>

                        <ul className="space-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] font-light">
                            {[
                                "Air-to-Air Combat Training",
                                "Air-to-Ground Strike Simulation",
                                "Advanced Mission Rehearsal",
                                "Emergency Procedure Training",
                                "Avionics & Systems Testing"
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="text-gray-400 hover:text-black transition-colors duration-300 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14">

                        {/* VIDEO */}
                        <div className="relative w-full aspect-[16/9] min-h-[220px] sm:min-h-[320px] lg:min-h-[520px] overflow-hidden bg-black">
                            <video
                                src={"/Tejas.mp4"}
                                controls
                                preload="metadata"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* QUOTE TEXT */}
                        <div className="max-w-3xl">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] leading-[1.25] font-light italic text-black mb-4">
                                “The realism of the cockpit interface and mixed-reality battlefield
                                environment provides pilots with an unprecedented level of immersion
                                during mission rehearsal.”
                            </p>

                            {/* <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-600 mb-6">
                                            BARTEK PANASEWICZ — VP TRAINING SYSTEMS, LAND
                                        </p> */}

                            <button className="inline-flex items-center justify-center gap-1 
                                                       bg-black text-white 
                                                       px-6 sm:px-8 
                                                       py-3 sm:py-4 
                                                       text-xs sm:text-sm 
                                                       tracking-wide 
                                                       hover:opacity-90 transition 
                                                       w-full sm:w-auto">
                                READ TRAINING CASE STUDY →
                            </button>
                        </div>

                    </div>
                </div>
            </section>


            {/* FULL VIDEO */}
            <section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={"/DAS2.mp4"} type="video/mp4" />
                </video>
            </section>


            { /* =================dog fight  ================= */}
            <section className="w-full bg-[#f3f3f3] py-[160px]">
                <div className="flex flex-col md:flex-row w-full max-w-[1650px] mx-auto px-6 md:px-[6vw] gap-12">

                    {/* ================= LEFT SECTION ================= */}
                    <div className="w-full md:w-[55%]">

                        {/* 16:9 Responsive Video */}
                        <div className="relative w-full aspect-video">
                            <iframe
                                src="/training1.mp4"
                                title="Military Helicopter Cockpit Training"
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>

                    {/* ================= RIGHT SECTION ================= */}
                    <div className="w-full md:w-[45%] flex items-center">

                        <div className="max-w-[580px]">

                            {/* Eyebrow */}
                            <p className="uppercase text-[11px] tracking-[0.22em] text-black/70 mb-[22px]">

                            </p>

                            {/* Heading */}
                            <h2 className="uppercase text-[28px] md:text-[46px] font-extrabold leading-[1.1] mb-[26px]">
                                DOG-FIGHT
                                SIMULATIONS
                            </h2>

                            {/* Paragraph */}
                            <p className="text-[17px] leading-[1.7] text-black/70 mb-[40px]">
                                Dogfight operations involve close-range air-to-air combat, where fighter pilots rely on high-speed maneuvering and situational awareness to gain a tactical advantage over an opponent.
                                Pilots must manage high-G maneuvers, weapon targeting, and rapid decision-making while maintaining control of the aircraft in dynamic combat conditions.
                            </p>

                            {/* Button */}
                            <button className="bg-black text-white px-[34px] py-[16px] uppercase text-[12px] tracking-[0.14em] hover:bg-black/80 transition">
                                READ MORE →
                            </button>

                        </div>

                    </div>

                </div>
            </section>








            <section className="bg-[#efefed] px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light tracking-tight text-black">
                        Next-Generation
                        Pilot Training Platform
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 sm:mt-6 max-w-[520px] text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        The Tejas Mk-2 High-Fidelity Cockpit Simulator transforms traditional
                        training by combining realistic cockpit hardware with immersive mixed
                        reality visualization.
                    </p>

                    {/* Variants */}
                    <div className="mt-2 sm:mt-3 lg:mt-4 space-y-2 sm:space-y-3 lg:space-y-4 text-sm sm:text-[15px] leading-relaxed text-gray-700">


                        <p>
                            The simulator adapts to different training requirements including
                            <br />
                            combat scenarios, emergency procedures, and operational rehearsals.
                        </p>



                    </div>

                    {/* Button */}
                    <button className="mt-12 sm:mt-20 lg:mt-28 
                                               inline-flex items-center justify-center gap-3 
                                               bg-black 
                                               px-6 sm:px-8 lg:px-10 
                                               py-3 sm:py-3.5 lg:py-4 
                                               text-xs sm:text-[13px] 
                                               tracking-widest text-white 
                                               hover:bg-gray-900 transition 
                                               w-full sm:w-auto">
                        DOWNLOAD SIMULATOR BROCHURE →.
                        <span className="text-base sm:text-lg">→</span>
                    </button>

                </div>
            </section>



            <TalkToSalesCTA />
            <Footer />
        </div>
    )
}

export default Tejas
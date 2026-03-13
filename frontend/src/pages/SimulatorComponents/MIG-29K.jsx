import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../../components/NewNavbar'
import Footer from '../../components/NewFooter'

import Mig29Khero from "../../assets/Mig29Khero.jpg";
import Mig29K1 from "../../assets/Mig29K-1.jpg";
import Mig29K2 from "../../assets/Mig29K-2.jpg";
import Mig29K3 from "../../assets/Mig29K-3.jpg";
import Mig29K4 from "../../assets/Mig29K-4.jpg";
import Mig29K5 from "../../assets/Mig29K-5.jpg";
import Mig29K6 from "../../assets/Mig29K-6.jpg";

import img from "../../assets/MIG -29K  WITH PILOT.png";
import img1 from "../../assets/MIG-29K BACK VIEW.png";
import img2 from "../../assets/MIG-29K BACK ANGLE.png";
import img3 from "../../assets/MIG-29K LEFT VIEW.png";
import img4 from "../../assets/MIG-29K.png";
import poster from "../../assets/MIG-29K.png";
import heroImg from "../../assets/officeDAS.png";
import TalkToSalesCTA from "../../components/TalkToSalesCTA";
import PassthroughSection from "../../components/ProductSubPageComponents/PassthroughSection";

const cards = [
    {

        title: "Development of MiG-29K for Aircraft Carrier Operations",
        image: Mig29K1,
        span: "lg:row-span-2",
        link: "/mig29k-case-study-1"
    },
    {

        title: "MiG-29K Operations in the Indian Navy",
        image: Mig29K2,
        span: "lg:row-span-2",
        link: "/mig29k-case-study-2"
    },
    {

        title: "MiG-29K Ski-Jump Takeoff Operations",
        image: Mig29K3,
        link: "/mig29k-case-study-3"

    },
    {

        title: "MiG-29K Arrested Landing System",
        image: Mig29K4,
        link: "/mig29k-case-study-4"
    },
    {

        title: "MiG-29K Multirole Naval Strike Capability",
        image: Mig29K5,
        link: "/mig29k-case-study-5"
    },
    {

        title: "MiG-29K Cockpit and Avionics Systems",
        image: Mig29K6,
        link: "/mig29k-case-study-6"
    }
];
const cockpitDetails = [
    {
        title: "Digital Glass Cockpit Displays",
        desc: "The MiG-29K cockpit features multiple multifunction displays providing flight data, radar information, navigation maps, and weapon system status."
    },
    {
        title: "Hands-On-Throttle-And-Stick (HOTAS)",
        desc: "Essential combat functions such as radar control, weapon selection, and sensor management are accessible directly from the throttle and control stick."
    },
    {
        title: "Wide-Angle Head-Up Display",
        desc: "The HUD projects flight information, targeting cues, and navigation data directly into the pilot’s field of view."
    },
    {
        title: "Integrated Mission Computer",
        desc: "Advanced mission computers combine radar, navigation, and electronic warfare data into a single tactical interface."
    },
    {
        title: "Helmet-Mounted Targeting System",
        desc: "Pilots can designate and track targets simply by looking at them through the helmet-mounted display system."
    }
];
const MIG29K = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [activeCockpit, setActiveCockpit] = useState(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
    return (
        <div>
            <Navbar />
            <header className="relative w-full min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen overflow-hidden">

                {/* Background image */}
                <img
                    src={Mig29Khero}
                    alt="Mig-29K Fighter"
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
                                MiG-29K
                            </h1>

                            {/* RIGHT */}
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl text-left lg:text-right">
                                Experience the next generation of fighter aircraft training with the
                                MiG-29K High-Fidelity Glass Cockpit Simulator. Designed to replicate the
                                exact environment of a naval multirole fighter, the simulator combines
                                a fully functional cockpit, advanced avionics simulation, and immersive
                                mixed reality visualization.
                            </p>

                        </div>

                    </div>
                </div>

            </header>



            {/* SUPPORT GRID */}
            <section className="bg-[#f2f2f2] px-6 sm:px-10 lg:px-20 py-16 sm:py-24 lg:py-[120px]">

                <div className="grid grid-cols-4 grid-rows-2 gap-6 max-w-[1400px] mx-auto">

                    {cards.map((card, index) => {

                        const isTall = index === 0 || index === 1;

                        return (

                            <Link
                                to={card.link}
                                key={index}
                                className={`${isTall ? "row-span-2" : ""}`}
                            >

                                <div
                                    className={`group relative cursor-pointer bg-cover bg-center text-white transition-colors
${isTall ? "h-full min-h-[540px] p-8" : "aspect-square p-6"}`}
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >

                                    <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

                                    <small className="relative z-10 text-[12px] tracking-widest">
                                        {card.small}
                                    </small>

                                    <h3 className={`relative z-10 leading-snug ${isTall ? "mt-3 text-[22px]" : "my-4 text-[20px]"}`}>
                                        {card.title}
                                    </h3>

                                    <p className={`relative z-10 text-gray-200 ${isTall ? "mt-4 text-[14px]" : "text-[13px]"}`}>
                                        {card.desc}
                                    </p>

                                </div>

                            </Link>

                        )

                    })}

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
                            Inside the MiG-29K Cockpit
                        </h2>

                        <p className="mt-6 text-[15px] leading-[1.7] text-gray-700">
                            The MiG-29K features a modern digital glass cockpit designed for
                            multirole naval combat missions. Multiple multifunction displays,
                            a wide head-up display, and integrated mission computers allow
                            pilots to monitor flight data, radar systems, navigation, and
                            weapon status through a unified interface, improving situational
                            awareness and reducing pilot workload during complex operations.
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
                            alt="MiG-29K cockpit simulator"
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
                                    desc: "The Mikoyan MiG-29K costs roughly $45–50 million per aircraft, including naval airframe modifications, RD-33MK engines, avionics, and weapon integration systems."
                                },
                                {
                                    title: "MAINTENANCE AND LIFECYCLE COST",
                                    desc: "Over its service life, maintenance, engine overhaul, and avionics upgrades typically cost 2–3× the aircraft’s original price, making lifecycle expenses exceed $100 million per jet."
                                },
                                {
                                    title: "FUEL AND OPERATIONAL COST",
                                    desc: "Operating a MiG-29K costs roughly $6,000–$7,000 per flight hour, covering jet fuel, engine wear, spare parts, and ground crew support."
                                },
                                {
                                    title: "PILOT TRAINING HOURS",
                                    desc: "Naval fighter pilots must fly 150–200 hours annually to maintain proficiency in carrier landings, combat maneuvering, radar operations, and tactical missions."
                                },
                                {
                                    title: "TRAINING RESOURCE DEMAND",
                                    desc: "High-fidelity cockpit simulators can shift 50–70% of pilot training to simulation, dramatically reducing aircraft operating costs while enabling safe, repeatable mission practice."
                                },
                                {
                                    title: "SOLUTION: MR COCKPIT SIMULATORS",
                                    desc: "High-fidelity MR cockpit simulators can shift 50–70% of training to simulation, significantly reducing cost while enabling safe, repeatable mission rehearsal."
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
                        The MiG-29K cockpit simulator recreates complex mission environments such as air-to-air combat, beyond-visual-range engagements, and precision strike operations. Pilots interact with realistic cockpit controls while the mixed-reality simulation system generates a dynamic battlefield environment in real time, allowing them to practice tactical decision-making, sensor management, and combat maneuvering in a safe training environment.
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
                            Muscle memory development trains MiG-29K pilots to perform cockpit actions instinctively through repeated simulator practice. In carrier-based fighters, pilots must manage radar systems, navigation displays, weapon controls, and flight maneuvers within seconds. High-fidelity cockpit simulators allow trainees to repeatedly practice these procedures, building automatic responses and operational familiarity before flying the actual aircraft. </p>


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

            <section className="w-full bg-white py-16 sm:py-24 lg:py-36">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-28 items-start">

                    {/* LEFT SIDE — CUSTOMER LIST */}
                    <div>
                        <p className="text-xs tracking-widest text-gray-500 mb-6 sm:mb-8 lg:mb-10 uppercase">
                            From our customers
                        </p>

                        <ul className="space-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] font-light">
                            {[
                                "Air-to-air combat mission training",
                                "Carrier landing simulation",
                                "Radar and target tracking exercises",
                                "Weapon system engagement scenarios",
                                "Emergency flight procedure training"
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
                                src={"/mig-29k.mp4"}
                                controls
                                preload="metadata"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* QUOTE TEXT */}
                        <div className="max-w-3xl">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] leading-[1.25] font-light italic text-black mb-4">
                                “The cockpit simulator provides an incredibly realistic training
                                environment. Every control, display, and system behaves exactly
                                like the real aircraft cockpit.”
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
                                VIEW TRAINING CASE STUDY →
                            </button>
                        </div>

                    </div>
                </div>
            </section>


            <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
                <img
                    src={img2}
                    alt="XR Headsets"
                    className="block w-full h-full object-cover"
                />
            </section>
            <section className="bg-[#efefed] px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light tracking-tight text-black">
                        The Future of<br />
                        Fighter Pilot<br />
                        Training
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 sm:mt-6 max-w-[520px] text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        Traditional training methods are limited in their ability to
                        replicate real combat environments. High-fidelity simulators
                        provide a safer and more cost-effective way to train pilots
                        for complex missions.
                    </p>

                    {/* Variants */}
                    <div className="mt-10 sm:mt-14 lg:mt-20 space-y-8 sm:space-y-12 lg:space-y-16 text-sm sm:text-[15px] leading-relaxed text-gray-700">

                        <p>
                            Traditional training methods are limited in their ability to
                            replicate real combat environments. High-fidelity simulators
                            provide a safer and more cost-effective way to train pilots
                            for complex missions.
                        </p>

                        <p>
                            The MiG-29K cockpit simulator combines physical cockpit<br />
                            hardware with advanced visualization systems to create<br />
                            an immersive training environment..
                        </p>

                        <p>
                            Simulation technology allows pilots to practice combat
                            scenarios, system failures, and emergency procedures
                            without risking aircraft or personnel.</p>

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
                        DOWNLOAD SIMULATOR BROCHURE →
                        <span className="text-base sm:text-lg">→</span>
                    </button>

                </div>
            </section>



            <TalkToSalesCTA />
            <Footer />
        </div>
    )
}

export default MIG29K
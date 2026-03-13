import React, { useRef, useState } from "react";
import { useEffect } from "react";

import Navbar from '../../components/NewNavbar'
import Footer from '../../components/NewFooter'
import { Link } from "react-router-dom";

import img from "../../assets/su-30.png";
import img1 from "../../assets/su-30 back view image.png";
import img2 from "../../assets/su-30 left side view.png";
import img3 from "../../assets/su-30 interior.png";


import BrahmosIntegration from "../../assets/BrahmosIntegration.png";
import SuperSukoi from "../../assets/SuperSukoi.png";
import Excercises from "../../assets/Excercises.jpg";
import PilotTraining from "../../assets/PilotTraining.jpg";
import EngineReplacement from "../../assets/EngineReplacement.jpg";
import RadarAvionics from "../../assets/RadarAvionics.jpg";

import poster from "../../assets/su-30 interior.png";
import heroSu30 from "../../assets/Su-30MKI.jpeg";
import PassthroughSection from "../../components/ProductSubPageComponents/PassthroughSection";
import TalkToSalesCTA from "../../components/TalkToSalesCTA";
const cards = [
    {
        small: "SU-30MKIT",
        title: "BrahMos Integration with Su-30MKI",
        desc: "The integration of the BrahMos supersonic cruise missile with the Su-30MKI represents one of the most advanced air-launched strike capabilities developed in India. ",
        image: BrahmosIntegration,
        span: "lg:row-span-2",
        link: "/su30-case-study-1"
    },
    {
        small: "VISUALIZATION",
        title: "“Super Sukhoi” Modernization Program",
        desc: "To maintain the Su-30MKI’s dominance in air combat, India initiated the Super Sukhoi upgrade program, a large-scale modernization effort designed to upgrade more than 250 aircraft.",
        image: SuperSukoi,
        span: "lg:row-span-2",
        link: "/su30-case-study-2"
    },
    {
        small: "AVIONICS",
        title: "Su-30MKI International Air Combat Exercises",
        desc: "The Su-30MKI frequently participates in international air combat exercises, helping pilots train against different aircraft and tactics.",
        image: Excercises,
        link: "/su30-case-study-3"
    },
    {
        small: "TRAINING",
        title: "Su-30MKI Pilot Training & Simulator Safety Programs",
        desc: "Modern fighter aircraft such as the Sukhoi Su 30MKI require extremely advanced pilot training programs due to their complex avionics, high-speed flight characteristics, and multi-role combat capabilities.",
        image: PilotTraining,
        link: "/su30-case-study-4",
    },
    {
        small: "PHYSICS",
        title: "Engine Replacement & Fleet Sustainment Program",
        desc: "The Su-30MKI fleet relies heavily on high-performance turbofan engines to deliver extreme maneuverability, thrust-vectoring capability, and long-range combat missions.",
        image: EngineReplacement,
        link: "/su30-case-study-5",
    },
    {
        small: "ANALYSIS",
        title: "Radar & Avionics Limitations → “Virupaksha AESA Radar Upgrade”",
        desc: "CAlthough the Su-30MKI is a highly capable multirole fighter, its original N011M Bars radar was designed more than 20 years ago.",
        image: RadarAvionics,
        link: "/su30-case-study-6",
    }
];
const caseStudies = [
    {
        title: "Expensive Fighter Training Hours",
        desc: "Training pilots using real Su-30MKI aircraft is extremely costly due to fuel consumption, engine wear, and maintenance cycles. The aircraft costs roughly $10,000 per flight hour, making large-scale pilot training financially demanding for air forces. High-fidelity cockpit simulators significantly reduce these costs by shifting a large portion of training missions into virtual environments."
    },
    {
        title: "Low Fleet Availability and Serviceability",
        desc: "Operational readiness of the Su-30MKI fleet has been affected by maintenance complexity and spare-parts supply delays. At one stage, the serviceability rate was only about 48%, meaning more than half the aircraft were unavailable due to repairs or maintenance. Simulation-based training reduces operational strain on the fleet and improves aircraft availability for real missions."
    },
    {
        title: "High Aircraft Procurement and Production Cost",
        desc: "The Su-30MKI program represents a major investment in fighter capability. Aircraft assembled by Hindustan Aeronautics Limited cost around $62 million per aircraft, compared with roughly $40 million for Russian variants, due to avionics integration and production complexity. Large procurement orders for hundreds of aircraft represent billions of dollars in defence spending."
    },
    {
        title: "Massive Fleet Maintenance and Overhaul Requirements",
        desc: "The Indian Air Force operates about 272 Su-30MKI fighters, creating significant lifecycle maintenance costs. Each aircraft requires a major overhaul roughly every 1,500 flight hours, and over its lifetime of about 6,000 hours, each jet undergoes three major overhauls. Across the entire fleet, this results in more than 800 overhaul operations, representing a major long-term maintenance investment."
    },
    {
        title: "Fuel Consumption and Operational Expenditure",
        desc: "Heavy multirole fighters like the Su-30MKI consume large quantities of aviation fuel during training and operational missions. Continuous pilot training using real aircraft results in significant fuel expenditure across the entire fleet. Advanced cockpit simulators allow air forces to reduce the number of training sorties while maintaining pilot readiness, saving millions in fuel costs annually."
    },
    {
        title: "Increasing Defence Spending on Aircraft Upgrades and Engines",
        desc: "Maintaining and upgrading the Su-30MKI fleet requires continuous investment in new systems and engine replacements. Recent modernization programs involve large government contracts worth billions of dollars to upgrade avionics, radar, and propulsion systems. These modernization costs highlight the importance of simulation platforms that extend aircraft service life by reducing unnecessary operational usage."
    }
];
const cockpitDetails = [
    {
        title: "Glass Cockpit Avionics",
        desc: "The cockpit features seven multifunction liquid crystal displays (MFDs) that present flight data, radar information, navigation maps, engine status, and weapon controls. These digital displays replace traditional analog gauges and allow pilots to switch between different mission modes quickly."
    },

    {
        title: "Head-Up Display (HUD)",
        desc: "A wide-angle HUD projects critical flight and targeting information directly in the pilot’s forward field of view. This enables pilots to monitor speed, altitude, targeting cues, and missile engagement parameters without looking down at the instrument panels."
    },

    {
        title: "HOTAS Control System",
        desc: "The cockpit uses a Hands-On-Throttle-And-Stick (HOTAS) control concept. Important functions such as radar control, weapon selection, target lock, and communication systems are integrated into the joystick and throttle, allowing pilots to manage combat tasks without removing their hands from the flight controls."
    },

    {
        title: "Radar and Combat Systems Interface",
        desc: "Cockpit displays integrate with the aircraft’s N011M Bars Radar, enabling long-range target detection and multi-target engagement. Radar data, electronic warfare alerts, and missile tracking information are presented on the multifunction displays for rapid decision-making during combat."
    },

    {
        title: "Crew Safety and Ergonomics",
        desc: "Both seats use the Zvezda K-36DM ejection seat, capable of zero-altitude ejection. The cockpit layout is designed for high-G maneuvering, ensuring that pilots can access critical controls even during extreme flight conditions."
    },
];
const trainingEconomics = [
    {
        title: "Airframe Procurement Cost",
        points: [
            "India operates about 272 Su-30MKI fighters, making it the backbone of the Indian Air Force. The aircraft are license-produced by Hindustan Aeronautics Limited.",
            "Approximate cost per aircraft: ~$62 million when produced in India.",
            "Early procurement deals later increased to ~$100 million per aircraft in later batches due to avionics integration and upgrades.",
            "Estimated fleet investment:272 aircraft × $62M ≈ $16–17 billion total airframe investment"
        ]
    },

    {
        title: "Maintenance and Lifecycle Cost",
        points: [
            "Fighter aircraft require continuous inspections, repairs, and overhauls.",
            "Each Su-30MKI requires a major overhaul every ~1,500 flight hours or ~14 years.",
            "Total service life is about 6,000 flight hours, meaning three major overhauls per aircraft.",
            "With 272 aircraft, this results in:816 total overhaul operations across the fleet over its lifetime.",
            "Example government data:About ₹834 crore (~$100 million) was spent in one year on Sukhoi maintenance alone"
        ]
    },

    {
        title: "Fuel and Operational Cost",
        points: [
            "Fuel is a major cost factor during training and missions.",
            "Estimated operating cost of the Su-30MKI: ~$10,000 per flight hour.",
            "This includes:aviation fuel,engine wear,routine maintenance,spare parts",
            "If a single aircraft flies 240 hours per year (typical operational estimate):240 × $10,000 ≈ $2.4 million per aircraft per year For a 272-aircraft fleet:  $650 million per year in operational flying costs"
        ]
    },

    {
        title: "Pilot Flying Hours Requirement",
        points: [
            "Fighter pilots must maintain minimum flight hours to remain combat-ready.",
            "Typical estimates:150–240 flight hours per pilot per year At $10,000 per hour: 200 hours × $10,000 ≈ $2 million per pilot annually in flight cost",
        ]
    },

    {
        title: "Training Hours and Operational Burden",
        points: [
            "Training missions include radar operation, missile practice, navigation and emergency procedures.",
            "Training includes:basic aircraft handling,combat tactics,radar operation,missile engagement practice,emergency procedures",
            "Most of these missions historically required real aircraft flights, which consume:fuel,aircraft lifespan,maintenance resources",
            "Because of these factors, large fleets experience low serviceability rates. In one period the Su-30MKI fleet had only about 48% availability, meaning many aircraft were undergoing repair or maintenance.",
        ]
    },

    {
        title: "Solution: MR High-Fidelity Cockpit Simulator Solution",
        points: [
            "A Mixed Reality cockpit simulator can significantly reduce operational costs while maintaining realistic training.",
            "Key benefits : Reduced training flight hours,Up to 50–70% of training missions can be shifted to simulators.,Lower fuel consumption,Reduces hundreds of millions of dollars in annual fuel costs.,Improved fleet availability,Aircraft remain available for real missions rather than training.,Safe emergency training,Pilots can practice engine failure, combat damage, and system failures without risk.,Faster pilot skill development,Unlimited mission repetition without aircraft wear."
        ]
    }
];

const simulatorFeatures = [
    {
        title: "SU-30MKI High-Fidelity Cockpit Simulator",
        points: [
            "Our Sukhoi Su-30MKI High-Fidelity Cockpit Simulator replicates the real fighter cockpit with accurate controls, avionics, and immersive mission environments.",
            "It enables realistic pilot training, mission rehearsal, and combat scenario simulation while reducing operational aircraft usage and training costs."
        ]
    },

    {
        title: "Building-Block Training Curriculum",
        points: [
            "A structured building-block training curriculum guides pilots from cockpit familiarization to advanced mission execution, ensuring progressive skill development and operational readiness"
        ],
        subpoints: [
            "Basic to Advanced Pilot Training",
            "Stage 1 — Cockpit Familiarization & Aircraft Systems",
            "Stage 2 — Flight Operations & Navigation Training",
            "Stage 3 — Tactical Combat Training",
            "Stage 4 — Advanced Mission & Combat Scenarios"
        ]
    },

    {
        title: "Muscle Memory Development",
        points: [
            "The simulator reproduces the exact cockpit layout and control interfaces, enabling repeated interaction with switches and flight controls to build strong pilot muscle memory and faster response times."
        ]
    },

    {
        title: "Dogfight and Combat Operation Scenarios",
        points: [
            "Pilots can practice air-to-air dogfights, beyond-visual-range engagements, and complex combat operations in dynamic simulated battle environments."
        ]
    },

    {
        title: "Custom Training Scenarios",
        points: [
            "Instructors can generate custom mission scenarios, including emergency procedures, multi-aircraft missions, and specialized operational training exercises."
        ]
    },

    {
        title: "Multi-Tier Training Capability",
        points: [
            "The system supports Tier-1, Tier-2, and Tier-3 training levels, enabling basic pilot instruction, advanced tactical training, and high-level mission rehearsal."
        ]
    },

    {
        title: "Real Jet Cockpit Experience",
        points: [
            "A full-scale cockpit replica with authentic avionics panels and controls provides pilots with a realistic jet cockpit experience identical to real aircraft operations."
        ]
    }

];
const Su30MKI = () => {

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

    const [activeCase, setActiveCase] = useState(null);
    const [activeCockpit, setActiveCockpit] = useState(null);
    const [activeTraining, setActiveTraining] = useState(null);
    const [activeFeature, setActiveFeature] = useState(null);
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
                    src={heroSu30}
                    alt="Su-30MKI Fighter"
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
                                SU-30MKI
                            </h1>

                            {/* RIGHT */}
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl text-left lg:text-right">
                                A next-generation mixed reality training system engineered to replicate
                                the complete cockpit environment of the Sukhoi Su-30MKI multirole fighter.
                            </p>

                        </div>

                    </div>
                </div>

            </header>

            {/* ================= CASE STUDIES GRID ================= */}

            <section className="bg-[#f2f2f2] px-6 sm:px-10 lg:px-20 py-16 sm:py-24 lg:py-[120px]">

                <div className="grid grid-cols-4 grid-rows-2 gap-6 max-w-[1400px] mx-auto">

                    {/* CARD 1 — TALL */}
                    <Link to={cards[0].link} className="row-span-2 group">
                        <div
                            className="relative h-full min-h-[540px] bg-cover bg-center p-8 text-white"
                            style={{ backgroundImage: `url(${cards[0].image})` }}
                        >

                            {/* HOVER OVERLAY */}
                            <div className="absolute inset-0 bg-[#0057ff]/0 group-hover:bg-[#0057ff]/70 transition duration-300" />

                            <div className="relative z-10">
                                <small className="text-[12px] tracking-widest">{cards[0].small}</small>
                                <h3 className="mt-3 text-[22px] leading-snug">{cards[0].title}</h3>
                                <p className="mt-4 text-[14px] text-gray-200">{cards[0].desc}</p>
                            </div>

                        </div>
                    </Link>


                    {/* CARD 2 */}
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

            <section className="bg-white py-16 sm:py-24 lg:py-[140px]">

                <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row gap-16 px-6 lg:px-16 items-start">

                    {/* LEFT SIDE */}
                    <div className="lg:w-[42%] w-full -mt-16">

                        <small className="block text-[12px] tracking-widest uppercase text-black">
                            COCKPIT SYSTEMS
                        </small>

                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-[40px] font-light leading-tight">
                            Inside the Su-30MKI Cockpit
                        </h2>

                        <p className="mt-6 text-[15px] leading-[1.7] text-gray-700">
                            The Su-30MKI features a modern glass cockpit designed for complex
                            multirole combat operations. Advanced avionics systems, digital
                            displays, and integrated combat interfaces allow pilots and weapon
                            systems officers to monitor flight data, manage sensors, and control
                            weapons in high-intensity mission environments.
                        </p>


                        {/* BULLET LIST */}
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

                    {/* RIGHT SIDE IMAGE */}
                    <div className="lg:w-[58%] w-full">
                        <img
                            src={img1}
                            alt="Su-30MKI cockpit simulator"
                            className="w-full h-[520px] object-cover"
                        />
                    </div>
                </div>
            </section>

            { /* ================= cost and efficiency  ================= */}
            <section className="w-full bg-white py-16 px-6 lg:px-20">

                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-between h-full">

                        {/* Heading */}
                        <h2 className="text-[28px] md:text-[34px] font-extrabold uppercase leading-tight mb-10">
                            The Cost and Complexity of Fighter Pilot Training
                        </h2>


                        {/* DROPDOWN LIST */}
                        <div className="space-y-6 text-[15px] tracking-wide">

                            {[
                                {
                                    title: "AIRFRAME PROCUREMENT COST",
                                    desc: "India operates 272 Su-30MKI fighters costing about $62–100M each, forming the backbone of the air force."
                                },
                                {
                                    title: "MAINTENANCE AND LIFECYCLE COST",
                                    desc: "Each aircraft requires major overhaul every ~1,500 flight hours, with about 3 overhauls during its lifetime. Across the fleet this results in 800+ overhaul cycles, costing hundreds of millions annually."
                                },
                                {
                                    title: "FUEL AND OPERATIONAL COST",
                                    desc: "Training sortiesThe Su-30MKI costs roughly $10,000 per flight hour including fuel and maintenance.For the fleet, yearly flying operations can exceed $600 million."
                                },
                                {
                                    title: "PILOT FLYING HOURS REQUIREMENT",
                                    desc: "The Su-30MKI costs roughly $10,000 per flight hour including fuel and maintenance.For the fleet, yearly flying operations can exceed $600 million.Fighter pilots must complete hundreds of flight hours each year to maintain combat readiness and operational proficiency."
                                },
                                {
                                    title: "TRAINING HOURS AND OPERATIONAL BURDEN",
                                    desc: "TradReal aircraft training consumes fuel, aircraft lifespan, and maintenance resources.Heavy training demand has historically reduced fleet availability to around 48%.itional training missions consume aircraft lifespan, increase maintenance workload, and reduce fleet availability."
                                },
                                {
                                    title: "SOLUTION: MR HIGH-FIDELITY COCKPIT SIMULATOR",
                                    desc: "MR cockpit simulators can shift 50–70% of training to simulation, reducing fuel and maintenance costs.                     They also improve fleet availability and enable safe mission and emergency training.Mixed-reality cockpit simulators allow pilots to train safely while reducing fuel costs, aircraft wear, and operational risk."
                                }
                            ].map((item, index) => (
                                <div key={index}>

                                    {/* CLICKABLE TITLE */}
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

                                    {/* DROPDOWN TEXT */}
                                    {openIndex === index && (

                                        <p className="ml-6 mt-2 text-gray-600 text-[14px] leading-relaxed max-w-[420px] transition-all duration-300">
                                            {item.desc}
                                        </p>

                                    )}

                                </div>
                            ))}

                        </div>

                        {/* Bottom Images */}
                        <div className="grid grid-cols-2 gap-4 mt-10">

                            <img
                                src="/images/cockpit-detail.jpg"
                                className="w-full h-[180px] object-cover"
                                alt="cockpit controls"
                            />

                            <img
                                src="/images/pilot-sim.jpg"
                                className="w-full h-[180px] object-cover"
                                alt="pilot simulator training"
                            />

                        </div>

                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="w-full">

                        <img
                            src="/images/cockpit-simulator.png"
                            alt="MR cockpit simulator"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

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
                            Muscle memory development refers to the process by which pilots train their hands and body to perform cockpit actions automatically through repeated practice. In high-performance fighter aircraft like the Su-30MKI, pilots must react to complex situations within seconds, so many actions must become instinctive rather than consciously planned.
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

            { /* ================= our customers  ================= */}
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
                                "Beyond Visual Range Missile Engagement",
                                "Ground Attack Mission Simulation",
                                "Emergency Flight Procedure Training",
                                "Formation Flying and Navigation",

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
                                src={"/Su30MKI.mp4"}
                                controls
                                preload="metadata"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* QUOTE TEXT */}
                        <div className="max-w-3xl">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] leading-[1.25] font-light italic text-black mb-4">
                                “High-fidelity cockpit simulation dramatically improves pilot
                                situational awareness and tactical decision-making during
                                complex mission scenarios.”
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

            { /* ================= future     ================= */}
            <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
                <img
                    src={img1}
                    alt="XR Headsets"
                    className="block w-full h-full object-cover"
                />
            </section>
            <section className="bg-[#efefed] px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light tracking-tight text-black">
                        The Future of
                        Military Flight
                        Simulation
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 sm:mt-6 max-w-[520px] text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        High-fidelity cockpit simulators represent the next evolution in pilot
                        training systems. By combining real aircraft cockpit hardware with
                        advanced mixed-reality visualization, these simulators create immersive
                        training environments capable of replicating real combat operations.
                    </p>


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
export default Su30MKI

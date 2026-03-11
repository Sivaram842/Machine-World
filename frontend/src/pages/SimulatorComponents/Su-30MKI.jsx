import React, { useRef, useState } from "react";
import Navbar from '../../components/NewNavbar'
import Footer from '../../components/NewFooter'


import img from "../../assets/su-30.png";
import img1 from "../../assets/su-30 back view image.png";
import img2 from "../../assets/su-30 left side view.png";
import img3 from "../../assets/su-30 interior.png";

import poster from "../../assets/su-30 interior.png";
import heroImg from "../../assets/officeDAS.png";
import PassthroughSection from "../../components/ProductSubPageComponents/PassthroughSection";
import TalkToSalesCTA from "../../components/TalkToSalesCTA";
const cards = [
    {
        small: "COCKPIT",
        title: "FULL SCALE\nREPLICA",
        desc: "A complete physical replica of the Su-30MKI cockpit with authentic control panels, switches, and instrumentation positioned according to the real aircraft layout.",
        image: img,
        span: "lg:row-span-2"
    },
    {
        small: "VISUALIZATION",
        title: "MIXED REALITY\nENVIRONMENT",
        desc: "Advanced MR headset visualization renders a realistic battlefield environment including terrain, enemy aircraft, and mission targets.",
        image: img1,
        span: "lg:row-span-2"
    },
    {
        small: "AVIONICS",
        title: "MULTI FUNCTION\nDISPLAYS",
        desc: "Simulated aircraft avionics including radar displays, navigation systems, weapon control panels, and engine monitoring instruments.",
        image: img2
    },
    {
        small: "PHYSICS",
        title: "REAL FLIGHT\nDYNAMICS",
        desc: "Advanced aerodynamic modeling reproduces the flight behavior and performance characteristics of the Su-30MKI fighter aircraft.",
        image: img3
    },
    {
        small: "TRAINING",
        title: "MISSION\nSIMULATION",
        desc: "Supports multiple training modes including dogfighting, ground strike missions, navigation exercises, and emergency procedures.",
        image: img
    },
    {
        small: "ANALYSIS",
        title: "MISSION\nREPLAY",
        desc: "Complete mission recording and playback tools allow instructors and trainees to analyze performance and improve tactical decisions.",
        image: img1
    }
];
const Su30MKI = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
    return (
        <div>
            <Navbar />
            <header className="relative w-full min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen overflow-hidden">

                {/* Background video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={"/homeVideo.mp4"}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 flex items-end min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen">

                    <div className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-24">

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-8">

                            {/* LEFT */}
                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight lg:max-w-2xl">
                                SU-30MKI   COCKPIT  SIMULATOR
                            </h1>

                            {/* RIGHT */}
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl text-left lg:text-right">
                                A next-generation mixed reality training system engineered to replicate
                                the complete cockpit environment of the Sukhoi Su-30MKI multirole fighter.

                                Combining a full-scale cockpit replica, real aircraft avionics panels,
                                and immersive mixed-reality visualization, the simulator enables pilots,
                                engineers, and researchers to train inside a realistic digital battlefield
                                environment with unmatched accuracy and immersion.
                            </p>

                        </div>

                    </div>
                </div>

            </header>
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
                            AUTHENTIC COCKPIT REPLICATION
                        </small>

                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            360 degrees of immersion.
                        </h2>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            The high-fidelity Su-30MKI cockpit simulator is designed to reproduce the
                            exact operational environment of the aircraft used by frontline fighter
                            pilots. Every switch, display, and control surface is positioned according
                            to the real aircraft cockpit layout.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            By combining physical cockpit instrumentation with advanced mixed reality
                            visualization, the simulator allows pilots to experience flight operations,
                            combat scenarios, and mission planning in a highly immersive training
                            environment without the risks or costs of real flight operations.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 sm:py-24 lg:py-[140px]">
                <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 sm:gap-16 lg:gap-[100px] px-4 sm:px-8 lg:px-16">

                    {/* LEFT TEXT */}
                    <div className="w-full lg:w-[42%]">
                        <small className="block text-[10px] sm:text-[12px] tracking-widest text-black">
                            AUTHENTIC COCKPIT INTERACTION
                        </small>

                        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            Real cockpit controls. <br />
                            Immersive mission environments.
                        </h2>

                        <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                            The Su-30MKI high-fidelity cockpit simulator combines a full-scale
                            physical cockpit replica with advanced mixed reality visualization
                            to recreate the operational environment of a frontline fighter jet.
                        </p>

                        <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                            Pilots interact naturally with real switches, throttle controls,
                            multifunction displays, and flight instrumentation while the
                            simulator generates a fully dynamic battlefield environment
                            around them.
                        </p>

                        <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                            This hybrid simulation approach delivers unmatched training
                            realism, enabling pilots to rehearse complex combat missions,
                            navigation procedures, and emergency scenarios with the same
                            cockpit workflows used in real aircraft operations.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-[58%]">
                        <img
                            src={img1}
                            alt="Su-30MKI cockpit simulator"
                            className="h-[260px] sm:h-[380px] lg:h-[520px] w-full object-cover"
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

            <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
                <div className="w-full px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">

                    {/* LEFT CONTENT */}
                    <div className="max-w-[620px]">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-tight font-light text-gray-900 mb-4 sm:mb-6">
                            Next-Generation<br />
                            Fighter Pilot<br />
                            Training Platform

                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                            Traditional flight simulators rely on large projection domes and expensive
                            visual systems. The Su-30MKI mixed-reality cockpit simulator introduces a
                            new generation of training technology where pilots operate inside a real
                            cockpit replica while experiencing a digitally generated combat environment.

                            Advanced physics simulation, real-time avionics modeling, and immersive
                            visualization enable accurate mission rehearsal and tactical training.
                            Pilots can analyze scenarios, practice emergency procedures, and refine
                            combat strategies in a safe and controlled environment.
                        </p>

                        <button className="inline-flex items-center gap-3 sm:gap-4 bg-black text-white 
                                    px-6 sm:px-8 lg:px-10 
                                    py-3 sm:py-4 
                                    text-sm sm:text-base font-medium 
                                    hover:opacity-80 transition">
                            WHY MIXED REALITY TRAINING →
                            <span className="text-base sm:text-lg">→</span>
                        </button>
                    </div>

                    {/* RIGHT VIDEO */}
                    <div className="w-full">
                        <video
                            src={"/Su-30MKI.mp4"}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-[280px] sm:h-[380px] lg:h-[520px] object-cover"
                        />
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

                    {/* Variants */}
                    <div className="mt-10 sm:mt-14 lg:mt-20 space-y-8 sm:space-y-12 lg:space-y-16 text-sm sm:text-[15px] leading-relaxed text-gray-700">

                        <p>
                            Train pilots in realistic combat scenarios without the risks associated
                            with live flight operations.
                        </p>

                        <p>
                            Train pilots in realistic combat scenarios without the risks associated
                            with live flight operations.
                        </p>

                        <p>
                            Adapt the simulator platform for research, pilot training,
                            and advanced aerospace development programs.
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
                        DOWNLOAD SIMULATOR BROCHURE →
                        <span className="text-base sm:text-lg">→</span>
                    </button>

                </div>
            </section>

            {/* SUPPORT GRID */}
            <section className="bg-[#f2f2f2] px-6 sm:px-10 lg:px-20 py-16 sm:py-24 lg:py-[120px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`group relative min-h-[260px] sm:min-h-[325px] cursor-pointer bg-cover bg-center p-6 sm:p-8 text-white transition-colors ${card.span || ""}`}
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

                            <small className="relative z-10 text-[12px] tracking-widest">
                                {card.small}
                            </small>

                            <h3 className="relative z-10 my-4 text-[20px] sm:text-[22px] leading-snug whitespace-pre-line">
                                {card.title}
                            </h3>

                            <p className="relative z-10 text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                                {card.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            <TalkToSalesCTA />

            <Footer />
        </div>
    )
}

export default Su30MKI
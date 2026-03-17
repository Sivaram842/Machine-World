
import Navbar from '../../../components/NewNavbar'
import Footer from '../../../components/NewFooter'
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/Tejas.webp";
import img2 from "../../../assets/mig29.jpeg";
import img3 from "../../../assets/mig29k.jpeg";
import img4 from "../../../assets/Su-30MKI.png";
import img1 from "../../../assets/rafale.jpeg";
import img5 from "../../../assets/defencehome.png";

const blocksData = [
    {
        title: "Tejas",
        description: "Advanced radar systems ensuring control of airspace.",
        image: img,
        route: "/tejas",
    },
    {
        title: "Rafale",
        description: "Integrated sensor networks and defense systems.",
        image: img1,
        route: "/rafale",
    },
    {
        title: "MIG-29",
        description: "Next generation missile defense technologies.",
        image: img2,
        route: "/mig-29",
    },
    {
        title: "MIG-29K",
        description: "Real-time battlefield data systems.",
        image: img3,
        route: "/mig-29k",
    },
    {
        title: "Su-30MKI",
        description: "Advanced electronic protection systems.",
        image: img4,
        route: "/su-30mki",
    },

];
const Aircraft = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();
    const gridRef = useRef(null);
    const toggleBlock = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const scrollToGrid = () => {
        gridRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (

        <div className="bg-black text-white selection:bg-white selection:text-black">
            <Navbar />
            <section className="w-full bg-white text-black min-h-[60vh] flex items-end px-6 sm:px-10 lg:px-16 py-10">

                <div className="w-full max-w-[1500px] mx-auto">

                    {/* TITLE AREA */}
                    <div className="mb-10 sm:mb-12">

                        <p className="text-[11px] sm:text-xs tracking-[0.25em] text-gray-600 mb-4">
                            DEFENCE SYSTEMS
                        </p>

                        <h1 className="text-[34px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-semibold tracking-tight leading-[1.05]">
                            Simulation & Training Platforms
                        </h1>

                    </div>

                    {/* BOTTOM GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 items-start">

                        {/* LEFT LABEL */}
                        <div className="text-[11px] sm:text-xs tracking-wider text-gray-600">
                            ADVANCED TRAINING
                        </div>

                        {/* DESCRIPTION */}
                        <div className="text-[13px] sm:text-sm text-gray-700 leading-relaxed max-w-[320px]">
                            Antiworld develops next-generation defence simulation systems,
                            including cockpit simulators, immersive XR environments, and
                            mission rehearsal platforms designed to train pilots and defence
                            personnel for modern combat scenarios.
                        </div>

                        {/* LINKS */}
                        <div className="flex flex-wrap gap-4 sm:gap-6 text-[12px] sm:text-xs tracking-wide">

                            <a className="hover:underline cursor-pointer">Cockpit Simulators</a>
                            <a className="hover:underline cursor-pointer">XR Training</a>
                            <a className="hover:underline cursor-pointer">Mission Simulation</a>
                            <a className="hover:underline cursor-pointer">Combat Rehearsal</a>

                        </div>

                        {/* SCROLL ARROW */}
                        <div
                            onClick={scrollToGrid}
                            className="flex lg:justify-end items-end text-3xl sm:text-4xl cursor-pointer hover:translate-y-1 transition"
                        >
                            ↓
                        </div>

                    </div>

                </div>

            </section>

            <section className="px-4 pt-4">
                <div className="relative h-[90vh] w-full overflow-hidden rounded-lg">

                    {/* Background Image */}
                    <img
                        src={img5}
                        alt="defence aircrafts"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Text */}
                    <div className="relative z-10 flex items-end h-full p-12 text-white">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-semibold">
                                Defense Systems
                            </h1>
                            <p className="text-lg opacity-80 mt-2">
                                Autonomous systems for modern battlefields
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className="px-4 mt-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-4xl font-semibold mb-6">
                            Advancing Defence Through Simulation
                        </h2>

                        <p className="text-white/70 leading-relaxed">
                            Antiworld develops advanced defence technologies including cockpit
                            simulators, immersive XR training platforms, and mission simulation
                            environments. These systems allow defence forces to train pilots,
                            rehearse combat missions, and simulate complex operations safely
                            without the risks or costs of real deployments.
                        </p>
                    </div>

                    <img
                        src="/images/simulator.jpg"
                        className="rounded-lg object-cover w-full h-[400px]"
                    />

                </div>
            </section>
            {/* <section className="px-4 mt-20">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-4xl font-semibold mb-10">
                        Cockpit Simulator Systems
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        {blocksData.map((block, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(block.route)}
                                className="cursor-pointer group relative overflow-hidden rounded-lg"
                            >
                                <img
                                    src={block.image}
                                    className="w-full h-[280px] object-cover group-hover:scale-105 transition"
                                />

                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-xl font-semibold">{block.title}</h3>
                                    <p className="text-sm opacity-80">{block.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section> */}
            <section className="px-4 mt-20">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-4xl font-semibold mb-10">
                        Defence Training Use Cases
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        <div>
                            <h3 className="text-xl font-semibold mb-3">Pilot Training</h3>
                            <p className="text-white/70">
                                High fidelity cockpit simulators allow pilots to practice
                                flight operations and emergency procedures safely.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3">Combat Simulation</h3>
                            <p className="text-white/70">
                                Simulated combat environments allow mission rehearsal and
                                tactical decision making before real operations.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3">Mission Coordination</h3>
                            <p className="text-white/70">
                                Multiple pilots and command teams can train together
                                inside immersive simulation environments.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            {/* <section className="px-4 mt-20">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-4xl font-semibold mb-10">
                        Technology Powering Our Systems
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">

                        <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                            XR Simulation
                        </div>

                        <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                            Spatial Computing
                        </div>

                        <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                            AI / ML Systems
                        </div>

                        <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                            Embedded Hardware
                        </div>

                    </div>
                </div>
            </section> */}

            <section ref={gridRef} className="px-4 sm:px-6 lg:px-10 mt-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[280px] gap-4">

                    {/* Block A */}
                    <div
                        onClick={() => navigate(blocksData[0].route)}
                        className="relative group overflow-hidden rounded-xl cursor-pointer"
                    >
                        <img
                            src={blocksData[0].image}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                            <h3 className="text-lg sm:text-xl font-semibold">
                                {blocksData[0].title}
                            </h3>
                            <p className="text-xs sm:text-sm opacity-80">
                                {blocksData[0].description}
                            </p>
                        </div>
                    </div>

                    {/* Block B (Tall Center on Desktop) */}
                    <div
                        onClick={() => navigate(blocksData[1].route)}
                        className="relative group overflow-hidden rounded-xl cursor-pointer lg:row-span-2"
                    >
                        <img
                            src={blocksData[1].image}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                            <h3 className="text-lg sm:text-xl font-semibold">
                                {blocksData[1].title}
                            </h3>
                            <p className="text-xs sm:text-sm opacity-80">
                                {blocksData[1].description}
                            </p>
                        </div>
                    </div>

                    {/* Block C */}
                    <div
                        onClick={() => navigate(blocksData[2].route)}
                        className="relative group overflow-hidden rounded-xl cursor-pointer"
                    >
                        <img
                            src={blocksData[2].image}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                            <h3 className="text-lg sm:text-xl font-semibold">
                                {blocksData[2].title}
                            </h3>
                            <p className="text-xs sm:text-sm opacity-80">
                                {blocksData[2].description}
                            </p>
                        </div>
                    </div>

                    {/* Block D */}
                    <div
                        onClick={() => navigate(blocksData[3].route)}
                        className="relative group overflow-hidden rounded-xl cursor-pointer"
                    >
                        <img
                            src={blocksData[3].image}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                            <h3 className="text-lg sm:text-xl font-semibold">
                                {blocksData[3].title}
                            </h3>
                            <p className="text-xs sm:text-sm opacity-80">
                                {blocksData[3].description}
                            </p>
                        </div>
                    </div>

                    {/* Block E */}
                    <div
                        onClick={() => navigate(blocksData[4].route)}
                        className="relative group overflow-hidden rounded-xl cursor-pointer"
                    >
                        <img
                            src={blocksData[4].image}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                            <h3 className="text-lg sm:text-xl font-semibold">
                                {blocksData[4].title}
                            </h3>
                            <p className="text-xs sm:text-sm opacity-80">
                                {blocksData[4].description}
                            </p>
                        </div>
                    </div>

                </div>

            </section>
            {/* <section className="px-4 mt-10">
                <div className="bg-white/5 border border-white/10 rounded-lg p-10">

                    <h2 className="text-4xl text-white mb-6">Arsenal-1</h2>

                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="/images/arsenal.jpg"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                    <p className="text-white opacity-80 mt-6">
                        A new standard in defense manufacturing.
                    </p>

                </div>
            </section> */}
            <section className="px-4 mt-20 mb-20">
                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-4xl font-semibold mb-6">
                        Building the Future of Defence Training
                    </h2>

                    <p className="text-white/70 max-w-2xl mx-auto">
                        Antiworld is developing next generation defence simulation
                        technologies that combine immersive XR systems, advanced
                        cockpit simulators, and mission planning environments to
                        transform how defence forces train and prepare.
                    </p>

                </div>
            </section>
            <Footer />

        </div>
    )
}

export default Aircraft
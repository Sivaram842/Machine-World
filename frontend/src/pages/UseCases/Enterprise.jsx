import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "../../components/NewNavbar";
import Footer from "../../components/NewFooter";

import miningImg from "../../assets/mining.jpg";
import constructionImg from "../../assets/construction.jpeg";
import defenseImg from "../../assets/defence.jpeg";
import educationImg from "../../assets/MinimalOS3.png";
import trainingImg from "../../assets/training.jpg";

import TalkToSalesCTA from "../../components/TalkToSalesCTA";

export default function Enterprise() {

    const gridRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToGrid = () => {
        gridRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-black text-white">

            <Navbar />

            {/* ================= HERO ================= */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="min-h-[50vh] flex flex-col justify-between px-6 lg:px-20 pt-24 lg:pt-28 pb-10 bg-white text-black"
            >

                {/* HEADING */}
                <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-semibold leading-[0.95]">
                    Enterprise
                </h1>

                <div className="relative">

                    <div className="grid grid-cols-1 md:grid-cols-12 items-end mt-10 gap-y-6">

                        {/* LABEL */}
                        <div className="md:col-span-3 text-xs tracking-[0.25em] text-gray-600 uppercase">
                            HIGH FIDELITY SIMULATION
                        </div>

                        {/* PARAGRAPH */}
                        <div className="md:col-span-5">
                            <p className="text-sm text-gray-700 max-w-[420px] leading-relaxed">
                                2 variants of the Rafale include the Rafale B twin-seat fighter used
                                for training and operational missions, and the Rafale C single-seat
                                aircraft designed for frontline multirole combat.
                            </p>
                        </div>

                        {/* SPACING (desktop only) */}
                        <div className="hidden md:block md:col-span-2"></div>

                        {/* ARROW */}
                        <div
                            onClick={scrollToGrid}
                            className="md:col-span-2 flex md:justify-end text-3xl md:text-4xl cursor-pointer text-gray-700 hover:translate-y-1 transition"
                        >
                            ↓
                        </div>

                    </div>

                </div>

            </motion.section>

            {/* ================= ENTERPRISE SECTIONS ================= */}

            {/* ===== MINING ===== */}
            <section className="bg-black text-white px-6 lg:px-20 py-20">

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    <div className="text-xs tracking-[0.25em] text-gray-400 uppercase space-y-4">
                        <div>MINING INDUSTRY</div>
                        <div>[ USE CASE ]</div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Mining</h2>
                        <p className="text-gray-300 max-w-[520px]">
                            High-fidelity simulation for safe and efficient training of heavy equipment and autonomous mining operations.
                        </p>
                        <button className="mt-6 px-5 py-2 bg-white text-black text-sm">Discover</button>
                    </div>

                </div>

                <div className="mt-12 w-full h-[50vh] md:h-[90vh]">
                    <img src={miningImg} className="w-full h-full object-cover" />
                </div>

            </section>


            {/* ===== CONSTRUCTION ===== */}
            <section className="bg-black text-white px-6 lg:px-20 py-20">

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    <div className="text-xs tracking-[0.25em] text-gray-400 uppercase space-y-4">
                        <div>CONSTRUCTION INDUSTRY</div>
                        <div>[ USE CASE ]</div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Construction</h2>
                        <p className="text-gray-300 max-w-[520px]">
                            Simulation-driven training for machinery operation, site safety, and large-scale infrastructure execution.
                        </p>
                        <button className="mt-6 px-5 py-2 bg-white text-black text-sm">Discover</button>
                    </div>

                </div>

                <div className="mt-12 w-full h-[50vh] md:h-[90vh]">
                    <img src={constructionImg} className="w-full h-full object-cover" />
                </div>

            </section>


            {/* ===== DEFENSE ===== */}
            <section className="bg-black text-white px-6 lg:px-20 py-20">

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    <div className="text-xs tracking-[0.25em] text-gray-400 uppercase space-y-4">
                        <div>DEFENSE OEMs</div>
                        <div>[ USE CASE ]</div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Defense</h2>
                        <p className="text-gray-300 max-w-[520px]">
                            Advanced simulation systems enabling mission readiness, pilot training, and defense system validation.
                        </p>
                        <button className="mt-6 px-5 py-2 bg-white text-black text-sm">Discover</button>
                    </div>

                </div>

                <div className="mt-12 w-full h-[50vh] md:h-[90vh]">
                    <img src={defenseImg} className="w-full h-full object-cover" />
                </div>

            </section>


            {/* ===== INSTITUTIONS ===== */}
            <section className="bg-black text-white px-6 lg:px-20 py-20">

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    <div className="text-xs tracking-[0.25em] text-gray-400 uppercase space-y-4">
                        <div>INSTITUTIONS & COLLEGES</div>
                        <div>[ USE CASE ]</div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Institutions</h2>
                        <p className="text-gray-300 max-w-[520px]">
                            Experiential learning platforms bridging academic knowledge with real-world simulation environments.
                        </p>
                        <button className="mt-6 px-5 py-2 bg-white text-black text-sm">Discover</button>
                    </div>

                </div>

                <div className="mt-12 w-full h-[50vh] md:h-[90vh]">
                    <img src={educationImg} className="w-full h-full object-cover" />
                </div>

            </section>


            {/* ===== TRAINING ===== */}
            <section className="bg-black text-white px-6 lg:px-20 py-20">

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    <div className="text-xs tracking-[0.25em] text-gray-400 uppercase space-y-4">
                        <div>TRAINING CENTERS</div>
                        <div>[ USE CASE ]</div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Training</h2>
                        <p className="text-gray-300 max-w-[520px]">
                            Scalable simulation ecosystems delivering immersive, repeatable, and performance-driven training.
                        </p>
                        <button className="mt-6 px-5 py-2 bg-white text-black text-sm">Discover</button>
                    </div>

                </div>

                <div className="mt-12 w-full h-[50vh] md:h-[90vh]">
                    <img src={trainingImg} className="w-full h-full object-cover" />
                </div>

            </section>
            <TalkToSalesCTA />
            <Footer />

        </div>
    );
}
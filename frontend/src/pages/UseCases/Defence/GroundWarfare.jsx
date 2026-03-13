import React, { useRef, useState } from "react";

import Footer from "../../../components/NewFooter";

import learn from "../../../assets/immersive-education.jpg";
import learn1 from "../../../assets/skilldevelopment.jpg";
import learn2 from "../../../assets/labs.jpg";
import learn3 from "../../../assets/education.jpg";
import learn4 from "../../../assets/collab.jpg";
import learn5 from "../../../assets/mission.webp";
import learn6 from "../../../assets/XR_Lab.avif";
import learn7 from "../../../assets/training.jpeg";
import Navbar from "../../../components/NewNavbar";

const cards = [
    {
        tag: "TACTICAL COMBAT TRAINING",
        title: "Battlefield simulation environments",
        desc: "Antiworld immersive simulation systems allow soldiers to train in realistic battlefield environments including urban combat, mission planning, and coordinated ground operations.",
        img: learn
    },
    {
        tag: "MISSION REHEARSAL",
        title: "Operational planning simulations",
        desc: "Defense teams can simulate ground missions before deployment, allowing commanders and soldiers to plan strategies and analyze battlefield scenarios.",
        img: learn1
    },
    {
        tag: "AUTONOMOUS GROUND SYSTEMS",
        title: "Robotics and tactical automation",
        desc: "Antiworld develops intelligent robotic systems designed for reconnaissance, surveillance, and hazardous operations in complex combat environments.",
        img: learn3
    },
    {
        tag: "BATTLEFIELD SYSTEM TRAINING",
        title: "Equipment and vehicle simulation",
        desc: "XR environments enable soldiers to train with military equipment, tactical vehicles, and operational systems through immersive digital simulations.",
        img: learn2
    },
    {
        tag: "TEAM COORDINATION",
        title: "Multi-unit mission training",
        desc: "Ground forces can train collaboratively in shared simulation environments to improve communication, coordination, and tactical response during missions.",
        img: learn4
    },
    {
        tag: "COUNTER-DRONE DEFENSE",
        title: "Threat detection training",
        desc: "Simulation systems allow defense personnel to train for detecting, tracking, and responding to hostile drones in ground warfare environments.",
        img: learn5
    }
];

const GroundWarfare = () => {
    const scrollRef = useRef(null);
    const dragRef = useRef({
        isDown: false,
        startX: 0,
        scrollLeftStart: 0
    });

    const handleMouseDown = (e) => {
        if (!scrollRef.current) return;

        dragRef.current.isDown = true;
        dragRef.current.startX = e.pageX - scrollRef.current.offsetLeft;
        dragRef.current.scrollLeftStart = scrollRef.current.scrollLeft;
    };

    const handleMouseUp = () => {
        dragRef.current.isDown = false;
    };

    const handleMouseLeave = () => {
        dragRef.current.isDown = false;
    };

    const handleMouseMove = (e) => {
        if (!scrollRef.current || !dragRef.current.isDown) return;

        e.preventDefault();

        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - dragRef.current.startX) * 1.2;

        scrollRef.current.scrollLeft =
            dragRef.current.scrollLeftStart - walk;
    };
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handlePlay = async () => {
        if (!videoRef.current) return;
        await videoRef.current.play();
        setPlaying(true);
    };


    return (
        <div className="bg-[#f3f3f3]">
            <Navbar />

            {/* HERO */}
            <section className="relative h-screen w-full overflow-hidden text-white bg-black">
                <img
                    src="https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt=""
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative h-full flex items-end pb-[14vh] px-6 md:px-[6vw]">
                    <div className="grid md:grid-cols-12 w-full">

                        {/* LEFT */}
                        <div className="md:col-span-6">
                            <h1 className="font-extrabold uppercase leading-[0.9] tracking-tight text-[11vw] md:text-[4.5vw]">
                                IMMERSIVE <br /> LEARNING <br /> PLATFORMS
                            </h1>
                        </div>

                        {/* RIGHT */}
                        <div className="md:col-span-4 md:col-start-9 flex items-end">
                            <p className="text-[16px] md:text-[17px] leading-[1.7] max-w-[420px] text-white/90">
                                Antiworld develops advanced ground warfare technologies including immersive combat training
                                platforms, mission simulation environments, and intelligent defense systems. These solutions
                                allow defense forces to train soldiers, rehearse operations, and prepare for complex battlefield
                                situations using realistic simulation technologies.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* XR EDUCATION */}
            <section className="py-28 px-[6vw]">
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <img src={learn6} className="w-full object-cover rounded-lg" />

                    <div>
                        <p className="uppercase text-[12px] tracking-[0.2em] text-black/60 mb-4">
                            NEXT-GENERATION EDUCATION
                        </p>

                        <h2 className="text-[36px] md:text-[44px] font-extrabold leading-[1.05] mb-6">
                            ADVANCED SYSTEMS FOR
                            MODERN GROUND WARFARE
                        </h2>

                        <ul className="space-y-3 text-[16px] text-black/70 leading-[1.7]">
                            <li>• Train soldiers through immersive battlefield simulations</li>
                            <li>• Practice urban combat and tactical ground operations</li>
                            <li>• Simulate mission planning and strategic decision making</li>
                            <li>• Train for counter-drone and surveillance defense</li>
                            <li>• Reduce the cost of large-scale physical military exercises</li>
                            <li>• Enable safe training for complex combat environments</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* HORIZONTAL CARDS */}
            <section className="py-24 overflow-hidden">
                <div className="px-[6vw] mb-12">
                    <h2 className="text-[40px] font-extrabold leading-[1.05] uppercase">
                        GROUND WARFARE
                        TECHNOLOGY USE CASES
                    </h2>
                </div>

                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className="flex gap-10 px-[6vw] overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: "none" }}
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="min-w-[420px] max-w-[420px] flex flex-col group flex-shrink-0"
                        >
                            <div className="h-[220px]">
                                <p className="text-[12px] uppercase tracking-[0.18em] text-gray-500 mb-3">
                                    {card.tag}
                                </p>

                                <h3 className="text-[22px] font-semibold mb-4">
                                    {card.title}
                                </h3>

                                <p className="text-gray-600 leading-[1.7] text-[15px]">
                                    {card.desc}
                                </p>
                            </div>

                            <img
                                src={card.img}
                                draggable="false"
                                className="mt-6 h-[420px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* XR ADOPTION */}
            <section className="py-32 text-center px-[6vw]">
                <h2 className="uppercase text-[36px] md:text-[48px] font-light leading-[1.4]">
                    DEFENSE FORCES ARE
                    ADOPTING INTELLIGENT
                    GROUND WARFARE SYSTEMS
                </h2>

                <p className="mt-10 max-w-[520px] mx-auto text-[18px] text-black/60 leading-[1.7]">
                    Antiworld technologies allow defense organizations to simulate battlefield
                    operations, train soldiers, and develop tactical strategies through immersive
                    training environments and intelligent defense systems designed for modern ground warfare.
                </p>
            </section>

            {/* VIDEO SECTION */}
            <section className="py-28 px-[6vw]">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <video
                        ref={videoRef}
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        className="w-full rounded-lg"
                        controls={playing}
                    />

                    <div>
                        <p className="text-[28px] italic font-light leading-[1.4] mb-6">
                            “Immersive battlefield simulations allow soldiers and commanders to train for
                            complex ground operations, improve coordination, and prepare for real combat
                            situations before deployment.”
                        </p>

                        <p className="uppercase text-[12px] tracking-[0.18em] text-black/60">
                            ANTIWORLD DEFENSE SIMULATION SYSTEMS
                        </p>

                        <button
                            onClick={handlePlay}
                            className="mt-8 bg-black text-white px-8 py-4 uppercase text-[12px] tracking-[0.12em] hover:bg-black/80"
                        >
                            Play Video →
                        </button>
                    </div>
                </div>
            </section>

            {/* ADVANTAGE */}
            <section
                className="relative py-40 text-white"
                style={{
                    backgroundImage: `url(${learn7})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative max-w-[600px] ml-[6vw]">
                    <p className="uppercase text-[12px] tracking-[0.18em] mb-5">
                        THE ANTIWORLD ADVANTAGE
                    </p>

                    <h2 className="text-[44px] font-extrabold leading-[1.1] mb-6">
                        BUILDING THE FUTURE OF
                        GROUND WARFARE SYSTEMS
                    </h2>

                    <p className="text-[17px] leading-[1.7] text-white/80 mb-8">
                        Antiworld develops advanced ground warfare technologies including immersive
                        combat training platforms, tactical mission simulators, and intelligent robotic
                        systems. These technologies allow defense organizations to train soldiers,
                        simulate battlefield operations, and improve mission readiness through
                        realistic simulation environments.
                    </p>

                    <button className="bg-white text-black px-8 py-4 uppercase text-[12px] tracking-[0.12em] hover:bg-white/80">
                        Explore Technologies →
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default GroundWarfare
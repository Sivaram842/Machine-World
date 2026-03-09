import React, { useRef, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


const cards = [
    {
        tag: "XR PILOT TRAINING",
        title: "Jet cockpit simulation",
        desc: "Antiworld cockpit simulators replicate modern jet aircraft environments, allowing pilots to train on navigation, systems management, and flight procedures in fully immersive virtual cockpits.",
        img: "https://images.unsplash.com/photo-1542365887-9e1f3d1d6d2d"
    },
    {
        tag: "HELICOPTER OPERATIONS",
        title: "Rotorcraft mission training",
        desc: "Helicopter crews can rehearse rescue missions, tactical transport operations, and complex flight maneuvers using realistic XR training environments powered by the REALM simulation platform.",
        img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321"
    },
    {
        tag: "EMERGENCY RESPONSE",
        title: "Critical situation training",
        desc: "Simulate emergency procedures including engine failures, instrument malfunction, and extreme weather scenarios without risk to personnel or equipment.",
        img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63"
    },
    {
        tag: "TACTICAL OPERATIONS",
        title: "Weapons and targeting training",
        desc: "Mixed reality allows pilots and operators to train together in coordinated tactical missions including targeting, surveillance, and combat scenarios.",
        img: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51"
    },
    {
        tag: "CREW COORDINATION",
        title: "Multi-crew mission training",
        desc: "Pilots, co-pilots, mission operators and ground teams can train together in shared virtual environments using the REALM collaboration platform.",
        img: "https://images.unsplash.com/photo-1558980664-10c236debd83"
    },
    {
        tag: "FULL MISSION SIMULATION",
        title: "Complete mission rehearsal",
        desc: "Antiworld training systems allow full mission rehearsal including navigation, threat environments, and operational decision making in high-fidelity simulation environments.",
        img: "https://images.unsplash.com/photo-1504718855392-c0f33b372e72"
    }
];


const customers = [
    "AECHELON",
    "TRU SIMULATION",
    "FINNISH AIR FORCE",
    "LUFTHANSA AVIATION TRAINING",
    "SLOVENIAN ARMED FORCES",
    "DASSAULT AVIATION",
];


export default function Industry() {

    const scrollRef = useRef(null);

    const handleMouseLeave = () => {
        if (!scrollRef.current) return;
        scrollRef.current.isDown = false;
    };

    const handleMouseUp = () => {
        if (!scrollRef.current) return;
        scrollRef.current.isDown = false;
    };

    const handleMouseDown = (e) => {
        if (!scrollRef.current) return;

        const slider = scrollRef.current;
        slider.isDown = true;
        slider.startX = e.pageX - slider.offsetLeft;
        slider.scrollLeftStart = slider.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!scrollRef.current) return;
        const slider = scrollRef.current;
        if (!slider.isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - slider.startX) * 1.2;
        slider.scrollLeft = slider.scrollLeftStart - walk;
    };

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePlay = () => {
        if (!videoRef.current) return;

        videoRef.current.play();
        setPlaying(true);
    };

    return (
        <div>
            <Navbar />
            <section className="relative h-screen w-full overflow-hidden bg-black text-white">

                {/* Exact structural match using figure */}
                <figure className="absolute inset-0 h-full w-full">
                    <img
                        src="https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=1920&height=1080&name=1920x1080%20(5)-min.png"
                        srcSet={`
            https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=3840&name=1920x1080%20(5)-min.png 3840w,
            https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=2560&name=1920x1080%20(5)-min.png 2560w,
            https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=1920&name=1920x1080%20(5)-min.png 1920w,
            https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=1280&name=1920x1080%20(5)-min.png 1280w,
            https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=800&name=1920x1080%20(5)-min.png 800w
          `}
                        sizes="100vw"
                        width="1920"
                        height="1080"
                        alt="A person sitting in a flight simulator, wearing a VR headset"
                        loading="eager"
                        className="w-full h-full object-cover"
                    />
                </figure>

                {/* Content */}
                <div className="relative h-full w-full">

                    <div className="absolute bottom-[15vh] left-0 w-full px-6 md:px-[5.5vw]">

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                            {/* LEFT HEADING */}
                            <div className="md:col-span-6">
                                <h1
                                    className="
          font-extrabold
          uppercase
          leading-[0.9]
          tracking-[-0.015em]
          text-[12vw] md:text-[4vw]
          scale-x-105 md:scale-x-110
          scale-y-95 md:scale-y-90
        "
                                >
                                    NEXT-GEN<br />
                                    IMMERSIVE
                                    TRAINING
                                </h1>
                            </div>

                            {/* RIGHT PARAGRAPH */}
                            <div className="md:col-span-6">
                                <p
                                    className="
          mt-6 md:mt-[3.5vh]
          text-[15px] md:text-[16px]
          leading-[1.6]
          max-w-full md:max-w-[430px]
        "
                                >
                                    Antiworld’s immersive simulation systems combine XR technology,
                                    realistic cockpit hardware, and spatial computing platforms to
                                    create highly accurate training environments. From pilot training
                                    to ground vehicle operations, teams can practice complex missions
                                    in safe, repeatable simulations while dramatically reducing the
                                    cost of traditional training.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            <section className="w-full bg-[#f3f3f3] pt-[110px] pb-[95px]">

                <div className="max-w-[1380px] mx-auto px-[6vw]">

                    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-[5.5vw] items-start">

                        {/* LEFT IMAGE (54%) */}
                        <div>
                            <img
                                src="https://varjo.com/hs-fs/hubfs/Gaia%20images/1250X800%20(3).png?width=1875&height=1200&name=1250X800%20(3).png"
                                alt="Pilot training simulator"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-start text-left">

                            {/* Eyebrow */}
                            <p className="uppercase text-[13px] tracking-[0.2em] font-medium mb-5 text-left">
                                TRAINING POWERED BY XR
                            </p>

                            {/* Heading */}
                            <h2 className="
  text-[26px] md:text-[36px]
  font-extrabold
  leading-[1]
  tracking-[-0.02em]
  mb-6
  origin-left
  scale-x-105 md:scale-x-110
  scale-y-95 md:scale-y-90
">
                                REALISTIC TRAINING<br />
                                WITHOUT REAL-WORLD RISK
                            </h2>

                            {/* Bullet List */}
                            <ul className="list-disc list-outside pl-4 space-y-3 text-[14px] md:text-[15px] leading-[1.65] text-[#1a1a1a]">
                                <li>
                                    Reduce training costs dramatically using immersive cockpit simulators and XR environments instead of expensive live training missions
                                </li>

                                <li>
                                    Accelerate learning with realistic spatial simulations that allow pilots and operators to practice repeatedly

                                </li>

                                <li>
                                    Improve engagement and skill retention through immersive, interactive training experiences
                                </li>

                                <li>
                                    Integrate physical cockpit hardware with virtual environments using DAS spatial computing technology
                                </li>

                                <li>
                                    Enable portable training systems that allow organizations to train personnel anywhere
                                </li>

                                <li>
                                    Safely simulate dangerous scenarios such as system failures, combat missions, and emergency situations
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>
            <section className="bg-[#f3f3f3] py-20 overflow-hidden">

                {/* Heading */}
                <div className="px-16 mb-12">
                    <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] uppercase">
                        TRAINING EVERY PHASE
                        <br />
                        OF FLIGHT
                    </h2>
                </div>

                {/* Horizontal Drag Scroll Area */}
                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className="flex gap-6 md:gap-10 px-6 md:px-16 overflow-x-auto md:overflow-hidden cursor-grab active:cursor-grabbing"
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="min-w-[85vw] md:min-w-[420px] max-w-[85vw] md:max-w-[420px] flex-shrink-0 flex flex-col"
                        >
                            {/* Text Block - fixed height for perfect alignment */}
                            <div className="h-[260px] flex flex-col">
                                <p className="uppercase text-[12px] tracking-[0.18em] mb-4 text-gray-500">
                                    {card.tag}
                                </p>

                                <h3 className="text-[22px] font-light mb-6 leading-snug">
                                    {card.title}
                                </h3>

                                <p className="text-[15px] text-gray-600 leading-[1.7]">
                                    {card.desc}
                                </p>
                            </div>

                            {/* Image Block - equal height */}
                            <div className="mt-5">
                                <img
                                    src={card.img}
                                    alt=""
                                    draggable="false"
                                    className="w-full h-[320px] md:h-[520px] object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center">
                <div className="w-full max-w-[1100px] mx-auto px-[6vw] text-center">

                    <h2 className="uppercase font-light text-[24px] md:text-[40px] leading-[1.4] tracking-[0.03em] text-[#111111]">
                        DEFENSE AND ENTERPRISE
                        <br />
                        ORGANIZATIONS ARE ADOPTING
                        <br />
                        ANTI WORLD TRAINING SYSTEMS
                    </h2>

                    <p className="mt-8 md:mt-12 text-[16px] md:text-[19px] leading-[1.7] text-[#555555] max-w-[520px] mx-auto">
                        Organizations across defense, aviation, and enterprise sectors are
                        using Antiworld simulation technologies to modernize training.
                        By combining immersive XR software, spatial computing platforms,
                        and realistic cockpit hardware, teams can prepare for complex
                        operations more efficiently than ever before.
                    </p>

                </div>
            </section>
            <section className="w-full bg-[#f3f3f3] min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT SECTION */}
                    <div className="pt-[60px] pl-[3vw]">

                        <p className="uppercase text-[10px] tracking-[0.18em] text-black/60 mb-[25px]">
                            OUR CUSTOMERS
                        </p>

                        <div className="space-y-4">
                            {customers.map((name, index) => (
                                <p
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`text-[26px] md:text-[40px] font-light tracking-[0.005em] cursor-pointer transition-colors duration-300 ${activeIndex === index ? "text-black" : "text-black/30"
                                        }`}
                                >
                                    {name}
                                </p>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT SECTION */}
                    <div className="pt-[60px] pr-[5vw]">

                        {/* VIDEO PLAYER */}
                        <div className="relative mb-[30px]">
                            <video
                                ref={videoRef}
                                className="w-full object-cover"
                                src="https://www.w3schools.com/html/mov_bbb.mp4"
                                controls={playing}
                            />

                            {!playing && (
                                <div
                                    onClick={handlePlay}
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                >
                                    <div className="w-[70px] h-[70px] bg-white/90 rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-[18px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-[4px]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* QUOTE */}
                        <p className="text-[20px] md:text-[27px] leading-[1.4] italic font-light text-black mb-[18px]">
                            “Antiworld’s immersive training systems allow our teams to rehearse
                            complex missions repeatedly while maintaining extremely high levels
                            of realism. It has transformed how we prepare operators for real
                            world scenarios.”
                        </p>

                        {/* AUTHOR */}
                        <p className="uppercase text-[9px] tracking-[0.18em] text-black/60 mb-[24px]">
                            TRAINING DIRECTOR – DEFENSE SIMULATION PROGRAM
                        </p>

                        {/* BUTTON */}
                        <button className="bg-black text-white px-[30px] py-[14px] uppercase text-[11px] tracking-[0.12em] hover:bg-black/80 transition">
                            READ CASE STUDY →
                        </button>

                    </div>

                </div>
            </section>
            <section className="w-full bg-[#f3f3f3] py-[160px]">
                <div className="flex flex-col md:flex-row w-full max-w-[1650px] mx-auto px-6 md:px-[6vw] gap-12">

                    {/* ================= LEFT SECTION ================= */}
                    <div className="w-full md:w-[55%]">

                        {/* 16:9 Responsive Video */}
                        <div className="relative w-full aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/9No-FiEInLA"
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
                                SEAMLESS SYNTHETIC HELICOPTER TRAINING
                            </p>

                            {/* Heading */}
                            <h2 className="uppercase text-[28px] md:text-[46px] font-extrabold leading-[1.1] mb-[26px]">
                                ADVANCED HELICOPTER
                                TRAINING SIMULATION
                            </h2>

                            {/* Paragraph */}
                            <p className="text-[17px] leading-[1.7] text-black/70 mb-[40px]">
                                Antiworld develops immersive helicopter training environments that
                                combine realistic cockpit hardware with XR simulation software.
                                Pilots can interact with physical controls while operating inside
                                a high-fidelity digital environment powered by the DAS spatial
                                computer and REALM simulation platform.

                                These systems enable mission rehearsal, emergency procedure
                                training, and tactical flight exercises without the operational
                                costs of real aircraft deployment.
                            </p>

                            {/* Button */}
                            <button className="bg-black text-white px-[34px] py-[16px] uppercase text-[12px] tracking-[0.14em] hover:bg-black/80 transition">
                                READ MORE →
                            </button>

                        </div>

                    </div>

                </div>
            </section>
            <section
                className="relative w-full min-h-screen flex items-center text-white"
                style={{
                    backgroundImage:
                        "url('https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(6)-min.png?width=1920&height=1080&name=1920x1080%20(6)-min.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Optional overlay (remove if you don't want it) */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* LEFT CONTENT — pushed near edge */}
                <div className="relative ml-[4vw] max-w-[560px]">

                    {/* Preheader */}
                    <p className="uppercase text-[12px] tracking-[0.18em] font-light mb-6 text-white/80">
                        THE ANTIWORLD TRAINING ADVANTAGE
                    </p>

                    {/* Heading */}
                    <h2 className="uppercase text-[28px] md:text-[36px] font-extrabold leading-[1.1] mb-8">
                        SETTING THE
                        <br />
                        STANDARD FOR
                        <br />
                        MIXED REALITY
                        <br />
                        TRAINING.
                    </h2>

                    {/* Paragraph */}
                    <p className="text-[15px] md:text-[16px] leading-[1.75] text-white/80 mb-10 max-w-[520px]">
                        Antiworld simulation technologies combine immersive XR environments,
                        high-performance spatial computing, and realistic hardware
                        integration to deliver next-generation training systems.

                        The DAS Spatial Computer powers complex virtual environments while
                        the REALM platform enables collaborative training simulations
                        between multiple users. Together they create highly realistic
                        training experiences that prepare personnel for real world
                        operations.
                    </p>

                    {/* Button */}
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 uppercase text-[13px] tracking-[0.12em] font-medium text-white hover:opacity-70 transition"
                    >
                        Explore Products
                        <span className="text-lg">→</span>
                    </a>

                </div>
            </section>
            <section className="w-full bg-[#f3f3f3] py-[170px]">

                <div className="max-w-[1650px] mx-auto px-[6vw]">

                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-[7vw]">

                        {/* ================= LEFT TEXT ================= */}
                        <div className="w-full md:w-[40%]">
                            {/* Eyebrow */}
                            <p className="uppercase text-[11px] tracking-[0.22em] text-black/60 mb-[22px]">
                                CLARITY AND COMFORT
                            </p>

                            {/* Heading */}
                            <h2 className="uppercase text-[44px] font-extrabold leading-[1.08] mb-[26px]">
                                DESIGNED FOR TRUE-TO-
                                <br />
                                LIFE IMMERSION.
                            </h2>

                            {/* Paragraph */}
                            <p className="text-[16px] leading-[1.7] text-black/70 max-w-[460px]">
                                Antiworld simulation systems are designed to deliver highly
                                realistic training experiences. High-resolution displays,
                                advanced tracking systems, and immersive spatial environments
                                allow trainees to interact naturally with cockpit controls,
                                instruments, and mission systems.

                                This combination of physical hardware and digital environments
                                creates training scenarios that closely mirror real operational
                                conditions.
                            </p>

                        </div>


                        {/* ================= RIGHT VIDEO ================= */}
                        <div className="w-full md:w-[55%]">

                            <video
                                className="w-full h-[300px] md:h-[500px] object-cover"
                                src="https://www.w3schools.com/html/mov_bbb.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />

                        </div>

                    </div>

                </div>

            </section>
            <section className="bg-[#f3f3f3] py-28">
                <div className="max-w-[1700px] mx-auto px-[6vw]">

                    {/* Top Row */}
                    <div className="flex justify-between items-center mb-16">
                        <p className="uppercase text-[12px] tracking-[0.18em]">
                            BROWSE LATEST RELATED ARTICLES
                        </p>

                        <a
                            href="#"
                            className="uppercase text-[12px] tracking-[0.18em] hover:opacity-70 transition"
                        >
                            VIEW ALL ARTICLES →
                        </a>
                    </div>

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 items-start">

                        {/* SMALL SQUARE */}
                        <div className="relative aspect-square overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1581090700227-1e8c29e7f52c"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <h3 className="uppercase text-[20px] font-bold leading-[1.25] mb-4">
                                    HOW XR COCKPIT SIMULATORS ARE TRANSFORMING PILOT TRAINING
                                </h3>

                                <p className="text-[15px] leading-[1.6] text-white/90">
                                    Discover how Antiworld cockpit simulators combine physical controls and immersive XR environments to create highly realistic pilot training systems.
                                </p>
                            </div>
                        </div>

                        {/* VERTICAL RECTANGLE 1 */}
                        <div className="relative h-[350px] md:h-[500px] overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1508610048659-a06b669e3321"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-12 left-10 right-10 text-white">
                                <h3 className="uppercase text-[22px] font-bold leading-[1.2] mb-6">
                                    BUILDING NEXT-GEN DEFENSE TRAINING WITH IMMERSIVE SIMULATION
                                </h3>

                                <p className="text-[16px] leading-[1.6] text-white/90">
                                    Antiworld simulation platforms enable defense organizations to train personnel in complex mission scenarios using immersive XR environments and realistic cockpit systems.
                                </p>
                            </div>
                        </div>

                        {/* VERTICAL RECTANGLE 2 */}
                        <div className="relative h-[500px] overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-12 left-10 right-10 text-white">
                                <p className="uppercase text-[11px] tracking-[0.15em] mb-5 text-white/80">
                                    TECH INSIGHTS
                                </p>

                                <h3 className="uppercase text-[22px] font-bold leading-[1.2] mb-6">
                                    THE ROLE OF SPATIAL COMPUTING IN FUTURE TRAINING SYSTEMS
                                </h3>

                                <p className="text-[16px] leading-[1.6] text-white/90">
                                    Learn how the DAS Spatial Computer and REALM platform enable immersive multi-user training environments for aviation, defense, and enterprise industries.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </div>

    )
}
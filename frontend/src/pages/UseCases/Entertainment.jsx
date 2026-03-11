import React, { useRef, useState } from "react";
import Footer from "../../components/NewFooter";
import Navbar from "../../components/NewNavbar";
import entertainment from "../../assets/entertainmentheadset.jpeg"
import entertainment1 from "../../assets/igaming.jpg"
import entertainment2 from "../../assets/esports.avif"
import entertainment3 from "../../assets/themepark.jpg"
import entertainment4 from "../../assets/cinema.jpg"
import entertainment5 from "../../assets/ienter.webp"
import entertainment6 from "../../assets/simustream.jpg"
import entertainment7 from "../../assets/imm3d.jpg"

const cards = [
    {
        tag: "IMMERSIVE GAMING",
        title: "Next-generation XR gaming",
        desc: "Antiworld’s XR technologies enable players to step inside immersive game worlds where physical movement, spatial interaction, and realistic environments create entirely new forms of entertainment.",
        img: entertainment1
    },
    {
        tag: "THEME PARK SIMULATION",
        title: "Interactive attraction experiences",
        desc: "XR simulators powered by the DAS spatial computer allow theme parks and entertainment venues to create thrilling ride simulations and interactive storytelling environments.",
        img: entertainment3
    },
    {
        tag: "IMMERSIVE STORYTELLING",
        title: "Cinematic XR environments",
        desc: "REALM enables creators to build immersive narrative experiences where audiences become part of the story through interactive spatial environments.",
        img: entertainment4
    },
    {
        tag: "ESPORTS & ARENA EXPERIENCES",
        title: "Large-scale XR multiplayer worlds",
        desc: "Entertainment arenas can host large-scale XR experiences where players interact together inside shared digital worlds powered by the REALM platform.",
        img: entertainment2
    },
    {
        tag: "INTERACTIVE ENTERTAINMENT",
        title: "Live XR events and concerts",
        desc: "Antiworld XR platforms enable virtual concerts, immersive performances, and interactive live entertainment experiences for global audiences.",
        img: entertainment5
    },
    {
        tag: "SIMULATION ENTERTAINMENT",
        title: "Realistic simulation experiences",
        desc: "Entertainment simulators such as racing, aviation, and adventure simulations allow users to experience high-fidelity environments designed for thrill and engagement.",
        img: entertainment6
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


export default function Entertainment() {

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

                {/* Background video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={"/spatialherovideo.mp4"}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />


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
                                    THE FUTURE OF<br />
                                    IMMERSIVE
                                    ENTERTAINMENT


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
                                    Antiworld technologies enable a new generation of immersive
                                    entertainment experiences. By combining spatial computing,
                                    XR environments, and interactive simulations, creators can
                                    build digital worlds where audiences can explore, play,
                                    and interact in ways never before possible.
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
                                src={entertainment}
                                alt="Pilot training simulator"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-start text-left">

                            {/* Eyebrow */}
                            <p className="uppercase text-[13px] tracking-[0.2em] font-medium mb-5 text-left">
                                IMMERSIVE ENTERTAINMENT PLATFORMS
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
                                EXPERIENCE ENTERTAINMENT<br />
                                IN A NEW DIMENSION

                            </h2>

                            {/* Bullet List */}
                            <ul className="list-disc list-outside pl-4 space-y-3 text-[14px] md:text-[15px] leading-[1.65] text-[#1a1a1a]">
                                <li>
                                    Create immersive gaming environments powered by spatial computing technology
                                </li>

                                <li>
                                    Enable interactive XR experiences for theme parks, arcades, and entertainment venues
                                </li>

                                <li>
                                    Deliver cinematic storytelling experiences where audiences become part of the narrative
                                </li>

                                <li>
                                    Support large-scale multiplayer environments using the REALM immersive platform

                                </li>

                                <li>
                                    Build high-fidelity simulators for racing, aviation, and adventure entertainment
                                </li>

                                <li>
                                    Transform digital entertainment with interactive spatial environments
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
                        ENTERTAINMENT CREATORS
                        <br />
                        ARE BUILDING THE NEXT
                        <br />
                        GENERATION OF XR EXPERIENCES
                    </h2>

                    <p className="mt-8 md:mt-12 text-[16px] md:text-[19px] leading-[1.7] text-[#555555] max-w-[520px] mx-auto">
                        Game developers, creative studios, and entertainment companies
                        are exploring immersive spatial technologies to create interactive
                        experiences that blur the boundary between digital and physical worlds.
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
                            “Antiworld’s immersive XR environments allow audiences to step
                            inside digital worlds and interact with entertainment experiences
                            in ways that were previously impossible.”
                        </p>

                        {/* AUTHOR */}
                        <p className="uppercase text-[9px] tracking-[0.18em] text-black/60 mb-[24px]">
                            CREATIVE DIRECTOR – IMMERSIVE ENTERTAINMENT STUDIO
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
                                src="/xrimmersive3d.mp4"
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
                                IMMERSIVE XR
                                ENTERTAINMENT EXPERIENCES
                            </h2>

                            {/* Paragraph */}
                            <p className="text-[17px] leading-[1.7] text-black/70 mb-[40px]">
                                Antiworld immersive platforms enable entertainment creators to
                                design fully interactive digital environments. Whether it is
                                simulation-based attractions, multiplayer XR games, or immersive
                                storytelling experiences, users can explore dynamic worlds that
                                blend physical interaction with digital content.

                                Powered by the DAS spatial computer and REALM platform, these
                                experiences bring new possibilities to gaming, entertainment
                                venues, and interactive media.
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
                        `url(${entertainment7})`,
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
                        THE ANTIWORLD  ADVANTAGE
                    </p>

                    {/* Heading */}
                    <h2 className="uppercase text-[28px] md:text-[36px] font-extrabold leading-[1.1] mb-8">
                        SETTING THE
                        <br />
                        STANDARD FOR
                        <br />
                        IMMERSIVE
                        <br />
                        ENTERTAINMENT
                    </h2>

                    {/* Paragraph */}
                    <p className="text-[15px] md:text-[16px] leading-[1.75] text-white/80 mb-10 max-w-[520px]">
                        Antiworld technologies combine spatial computing, immersive
                        XR environments, and interactive simulation systems to enable
                        new forms of entertainment experiences.


                        From XR gaming worlds to simulation-based attractions,
                        the platform enables creators to design highly interactive
                        digital environments for audiences worldwide.
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
                                Antiworld immersive systems deliver high-fidelity visual
                                environments and natural interaction systems designed for
                                long-duration entertainment experiences.

                                Advanced rendering, spatial interaction, and realistic
                                simulation environments allow audiences to fully immerse
                                themselves in digital worlds.
                            </p>

                        </div>


                        {/* ================= RIGHT VIDEO ================= */}
                        <div className="w-full md:w-[55%]">

                            <video
                                className="w-full h-[300px] md:h-[500px] object-cover"
                                src="/headsetsubvideo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />

                        </div>

                    </div>

                </div>

            </section>
            {/* <section className="bg-[#f3f3f3] py-28">
                <div className="max-w-[1700px] mx-auto px-[6vw]">

                    <div className="flex justify-between items-center mb-16">
                        <p className="uppercase text-[12px] tracking-[0.18em]">
                            INSIGHTS FROM THE ANTIWORLD IMMERSIVE ENTERTAINMENT ECOSYSTEM
                        </p>

                        <a
                            href="#"
                            className="uppercase text-[12px] tracking-[0.18em] hover:opacity-70 transition"
                        >
                            VIEW ALL ARTICLES →
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 items-start">

                        <div className="relative aspect-square overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1581090700227-1e8c29e7f52c"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <h3 className="uppercase text-[20px] font-bold leading-[1.25] mb-4">
                                    BUILDING NEXT-GENERATION XR ENTERTAINMENT EXPERIENCES
                                </h3>

                                <p className="text-[15px] leading-[1.6] text-white/90">
                                    Discover how Antiworld technologies enable immersive digital worlds
                                    where audiences can explore interactive environments, simulations,
                                    and XR-powered entertainment experiences.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[350px] md:h-[500px] overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1508610048659-a06b669e3321"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-12 left-10 right-10 text-white">
                                <h3 className="uppercase text-[22px] font-bold leading-[1.2] mb-6">
                                    THE ROLE OF SPATIAL COMPUTING IN FUTURE ENTERTAINMENT
                                </h3>

                                <p className="text-[16px] leading-[1.6] text-white/90">
                                    The DAS Spatial Computer enables developers and creators to build
                                    large-scale immersive entertainment platforms where users interact
                                    with content naturally in three-dimensional digital environments.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[500px] overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-12 left-10 right-10 text-white">
                                <p className="uppercase text-[11px] tracking-[0.15em] mb-5 text-white/80">
                                    ANTI WORLD TECHNOLOGY
                                </p>

                                <h3 className="uppercase text-[22px] font-bold leading-[1.2] mb-6">
                                    REALM PLATFORM: POWERING SHARED XR ENTERTAINMENT WORLDS
                                </h3>

                                <p className="text-[16px] leading-[1.6] text-white/90">
                                    REALM enables shared immersive environments where users can
                                    play, explore, and interact together inside large-scale
                                    XR entertainment experiences.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section> */}
            <Footer />
        </div>

    )
}
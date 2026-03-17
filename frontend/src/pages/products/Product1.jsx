import React from 'react'
import { useRef, useState } from "react";
import Navbar from '../../components/NewNavbar'
import Footer from '../../components/NewFooter'
import TalkToSalesCTA from '../../components/TalkToSalesCTA'
import img from "../../assets/DAS1.jpeg";
import img1 from "../../assets/das2.jpeg"
import v1Image from "../../assets/V1Tv19.4.png";
import v1Image1 from "../../assets/V1Tv19.3.png";
import v1Image2 from "../../assets/V1Tv19.2.png";
import v1Image3 from "../../assets/V1Tv19.1.png";
import v1Image4 from "../../assets/das.png";
import v1Image5 from "../../assets/DAS.jpeg";
import poster from "../../assets/officeDAS.png";
import heroImg from "../../assets/officeDAS.png";
import { useNavigate } from 'react-router-dom';


const cards = [
    {
        small: "DAS-OPTIMIZED",
        title: "COMPUTING",
        desc: "The DAS spatial computer is designed to seamlessly connect with modern devices, enabling professionals to transform any environment into an immersive multi-screen workspace powered by advanced spatial computing technology.",
        image: v1Image,
        span: "lg:row-span-2"
    },
    {
        small: "IMMERSIVE",
        title: "WORKSPACE\nEXPERIENCE",
        desc: "Experience an unlimited 3D workspace with DAS. Multiple virtual displays, intuitive interactions, and immersive visualization allow users to work, create, and collaborate in ways impossible on traditional laptops.",
        image: v1Image1,
        span: "lg:row-span-2"
    },
    {
        small: "DISPLAY",
        title: "ULTRA\nCLARITY",
        desc: "Experience ultra-high resolution visuals designed for professional spatial computing workflows.",
        image: v1Image2
    },
    {
        small: "PERFORMANCE",
        title: "POWERFUL\nPROCESSING",
        desc: "Built with advanced XR processors to deliver smooth and responsive performance.",
        image: v1Image3
    },
    {
        small: "INTERACTION",
        title: "NATURAL\nCONTROL",
        desc: "Control your workspace with gestures, voice, and eye tracking for seamless interaction.",
        image: v1Image4
    },
    {
        small: "WORKSPACE",
        title: "IMMERSIVE\nPRODUCTIVITY",
        desc: "Create an unlimited 3D workspace with multiple floating applications around you.",
        image: v1Image5
    }
];
const Product1 = () => {


    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const gridRef = useRef(null);
    const workspaceRef = useRef(null);
    const displayRef = useRef(null);
    const dofRef = useRef(null);
    const interactionRef = useRef(null);
    const navigate = useNavigate();
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToGrid = () => {
        gridRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handlePlay = () => {
        if (!videoRef.current) return;
        videoRef.current.play();
        setIsPlaying(true);
    };
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <section className="w-full bg-white text-black min-h-[60vh] flex items-end px-4 lg:px-16 py-8">

                <div className="w-full">

                    {/* TITLE AREA */}
                    <div className="mb-10">
                        <p className="text-xs tracking-[0.25em] text-gray-600 mb-4">
                            SPATIAL COMPUTING
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight">
                            DAS Spatial Computer
                        </h1>
                    </div>

                    {/* BOTTOM GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

                        <div className="text-xs tracking-wider text-gray-600">
                            IMMERSIVE WORKSPACE
                        </div>

                        <div className="text-sm text-gray-700 leading-relaxed max-w-[320px]">
                            DAS is Antiworld’s professional spatial computer designed to
                            transform traditional computing into an immersive 3D workspace.
                            With advanced XR displays, natural interaction, and spatial
                            computing capabilities, professionals can manage complex
                            workflows in a fully interactive environment.
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs tracking-wide">

                            <a
                                onClick={() => scrollToSection(workspaceRef)}
                                className="hover:underline cursor-pointer"
                            >
                                Spatial Workspace
                            </a>

                            <a
                                onClick={() => scrollToSection(displayRef)}
                                className="hover:underline cursor-pointer"
                            >
                                XR Displays
                            </a>

                            <a
                                onClick={() => scrollToSection(dofRef)}
                                className="hover:underline cursor-pointer"
                            >
                                6-DOF Tracking
                            </a>

                            <a
                                onClick={() => scrollToSection(interactionRef)}
                                className="hover:underline cursor-pointer"
                            >
                                Natural Interaction
                            </a>

                        </div>

                        <div
                            onClick={() => scrollToSection(workspaceRef)}
                            className="flex md:justify-end items-center text-3xl cursor-pointer hover:translate-y-1 transition"
                        >
                            ↓
                        </div>

                    </div>

                </div>

            </section>
            {/* HERO */}

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


            <section className="w-full bg-white py-16 sm:py-24 lg:py-36">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-28 items-start">

                    {/* LEFT SIDE — CUSTOMER LIST */}
                    <div>
                        <p className="text-xs tracking-widest text-gray-500 mb-6 sm:mb-8 lg:mb-10 uppercase">
                            From our customers
                        </p>

                        <ul className="space-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] font-light">
                            {[
                                "Multi-window coding environments",
                                "Immersive 3D design workspaces",
                                "Real-time simulation environments",
                                "Remote collaboration spaces",
                                "AI-assisted productivity workflows",

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
                                src={"/homeVideo.mp4"}
                                controls
                                preload="metadata"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* QUOTE TEXT */}
                        <div className="max-w-3xl">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] leading-[1.25] font-light italic text-black mb-4">
                                “The spatial multi-window workspace completely changes how we code and manage complex projects.”
                            </p>

                            {/* <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-600 mb-6">
                                BARTEK PANASEWICZ — VP TRAINING SYSTEMS, LAND
                            </p> */}

                            <button onClick={() => navigate("/resources/casestudies")} className="inline-flex items-center justify-center gap-1
                            bg-black text-white
                            px-6 sm:px-8
                            py-3 sm:py-4
                            text-xs sm:text-sm
                            tracking-wide
                            hover:opacity-90 transition 
                                           w-full sm:w-auto cursor-pointer">
                                READ CASE STUDY →
                            </button>
                        </div>

                    </div>
                </div>
            </section >
            <section ref={dofRef} className="bg-white py-16 sm:py-24 lg:py-[140px]">
                <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 lg:gap-[100px] px-6 sm:px-10 lg:px-16">

                    {/* IMAGE */}
                    <div className="w-full lg:w-[58%]">
                        <img
                            src={v1Image4}
                            alt="Comfort and fit"
                            className="h-[300px] sm:h-[420px] lg:h-[520px] w-full object-cover"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="w-full lg:w-[42%]">

                        <small className="block text-[12px] tracking-widest text-black">
                            COMFORT & FIT
                        </small>

                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            Designed for long immersive sessions.
                        </h2>

                        {/* POINTS */}
                        <div className="mt-8 space-y-4 text-[15px] text-gray-700">

                            <p> Adjustable IPD for precise alignment with every user’s vision.</p>

                            <p> Ultra-lightweight design with Soft stapless cushion .</p>



                            <p> Balanced ergonomic design for stability during movement.</p>

                        </div>

                    </div>

                </div>
            </section>
            <section className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={"/DASVideo.mp4"} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 h-full flex items-end">
                    <div className="w-full px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-7xl">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                                {/* DAS */}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={workspaceRef} className="bg-white py-16 sm:py-24 lg:py-[140px]">
                <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 lg:gap-[100px] px-6 sm:px-10 lg:px-16">

                    {/* IMAGE */}
                    <div className="w-full lg:w-[58%]">
                        <img
                            src={img}
                            alt="Spatial computing display"
                            className="h-[300px] sm:h-[420px] lg:h-[520px] w-full object-cover"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="w-full lg:w-[42%]">

                        <small className="block text-[12px] tracking-widest text-black">
                            SEE EVERY MISSION DETAIL
                        </small>

                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            360° immersion in a spatial workspace.
                        </h2>

                        {/* POINTS */}
                        <div className="mt-8 space-y-4 text-[15px] text-gray-700">

                            <p> 4K-per-eye mini-LED displays with advanced local dimming.</p>

                            <p>  100–110° field of view for natural immersive vision.</p>

                            {/* <p> 28 million pixels delivering extreme clarity and depth.</p> */}

                            <p> An immersive workspace with multiple floating windows.</p>

                        </div>

                    </div>

                </div>
            </section>

            <section className="bg-[#efefed] px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light tracking-tight text-black">
                        The Future of Work Starts Here
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 sm:mt-6 max-w-[520px] text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        DAS isn’t about improving existing computers. We redefine human–computer interaction through spatial computing.
                    </p>

                    {/* Variants */}
                    {/* <div className="mt-10 sm:mt-14 lg:mt-20 space-y-8 sm:space-y-12 lg:space-y-16 text-sm sm:text-[15px] leading-relaxed text-gray-700">

                        <p>
                            Organize multiple applications around you, interact naturally with your
                            tools,<br /> and work with greater clarity and efficiency than ever before.
                        </p>

                        <p>
                            Whether you're coding, designing, researching, or collaborating,
                            <br />
                            the platform adapts to the way professionals think and work.
                        </p>

                        <p>
                            Learn more about the technology, architecture, <br /> and capabilities in the full product overview.
                        </p>

                    </div> */}

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
                        DOWNLOAD PRODUCT BOOK
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
        </div >
    )
}

export default Product1
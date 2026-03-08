import React, { useRef, useState } from "react";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import img from "../../assets/DAS1.jpeg";
import v1Image from "../../assets/V1Tv19.4.png";
import v1Image1 from "../../assets/V1Tv19.3.png";
import v1Image2 from "../../assets/V1Tv19.2.png";
import v1Image3 from "../../assets/V1Tv19.1.png";
import v1Image4 from "../../assets/DAS CORE0669.png";
import v1Image5 from "../../assets/DAS.jpeg";
import poster from "../../assets/officeDAS.png";
import heroImg from "../../assets/officeDAS.png";
import PassthroughSection from "../../components/ProductSubPageComponents/PassthroughSection";
import TalkToSalesCTA from "../../components/TalkToSalesCTA";

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
const Rafale = () => {

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
                                NEXT-GEN SPATIAL COMPUTING
                            </h1>

                            {/* RIGHT */}
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl text-left lg:text-right">
                                By fusing immersive digital and real environments,
                                our spatial computers and modular XR glasses + pods enable creators,
                                students, and pioneers to invent, collaborate, and build in limitless
                                3D space—without barriers, screens, or boundaries. Experience the freedom
                                to create, learn, and connect anywhere—powered by AI, and always evolving.
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
                            SEE EVERY MISSION DETAIL
                        </small>

                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            360 degrees of immersion.
                        </h2>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            Pilot-grade 4K-per-eye mini-LED displays with local dimming deliver
                            the clarity, contrast, and depth perception required for authentic
                            mission rehearsal.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            A 120° × 105° field of view achieves full binocular vision, while
                            28 million pixels of visual precision recreate environments with
                            unprecedented realism, allowing trainees to perceive detail
                            exactly as they would in the real world.
                        </p>
                    </div>
                </div>
            </section>

            <PassthroughSection />
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
                        Unlimited Spatial
                        <br />
                        Workspace.
                    </h2>

                    <p className="mx-auto mt-6 sm:mt-8 max-w-[560px] 
                                                      text-sm sm:text-[15px] 
                                                      leading-relaxed sm:leading-[1.75] 
                                                      text-gray-600">
                        Break free from the limitations of traditional laptops and flat screens.
                        This professional spatial computer transforms your workflow into an immersive
                        3D environment where multiple applications exist around you.
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
                        VIEW Antiworld-READY SOFTWARE
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
                    <source src={"/DAS2.mp4"} type="video/mp4" />
                </video>
            </section>

            <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
                <div className="w-full px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">

                    {/* LEFT CONTENT */}
                    <div className="max-w-[620px]">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-tight font-light text-gray-900 mb-4 sm:mb-6">
                            Spatial Computing: The Future of Work <br />

                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                            Work is no longer limited to flat screens and crowded desktops.
                            Spatial computing unlocks a new way to create, collaborate, and
                            build in immersive digital environments.With an unlimited 3D workspace, professionals
                            can organize multiple applications around them—coding, designing, testing, and communicating simultaneously.
                            Complex workflows become clearer, faster, and more intuitive when information exists naturally in space.
                        </p>

                        <button className="inline-flex items-center gap-3 sm:gap-4 bg-black text-white 
                                    px-6 sm:px-8 lg:px-10 
                                    py-3 sm:py-4 
                                    text-sm sm:text-base font-medium 
                                    hover:opacity-80 transition">
                            WHY XR?
                            <span className="text-base sm:text-lg">→</span>
                        </button>
                    </div>

                    {/* RIGHT VIDEO */}
                    <div className="w-full">
                        <video
                            src={"/training.mp4"}
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
                                src={"/driving-simulator-monitor-center.mp4"}
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

                            <button className="inline-flex items-center justify-center gap-1 
                                                       bg-black text-white 
                                                       px-6 sm:px-8 
                                                       py-3 sm:py-4 
                                                       text-xs sm:text-sm 
                                                       tracking-wide 
                                                       hover:opacity-90 transition 
                                                       w-full sm:w-auto">
                                READ CASE STUDY →
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
                <img
                    src={heroImg}
                    alt="XR Headsets"
                    className="block w-full h-full object-cover"
                />
            </section>
            <section className="bg-[#efefed] px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light tracking-tight text-black">
                        The Future of Work Starts Here
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 sm:mt-6 max-w-[520px] text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        Traditional computers limit how much you can see and interact with at once. This spatial computer removes those limits,
                        transforming your environment into a fully immersive digital workspace.
                    </p>

                    {/* Variants */}
                    <div className="mt-10 sm:mt-14 lg:mt-20 space-y-8 sm:space-y-12 lg:space-y-16 text-sm sm:text-[15px] leading-relaxed text-gray-700">

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
        </div>
    )
}

export default Rafale
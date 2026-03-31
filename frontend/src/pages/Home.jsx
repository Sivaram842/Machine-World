import React from 'react'
import Navbar from '../components/NewNavbar'
import Footer from '../components/NewFooter'
import { motion } from "framer-motion"
import Realm1 from "../assets/Realm1.jpeg";
import DAS1 from "../assets/DAS1.jpeg";
import Book from "../assets/Book.jpeg";
import mrtrain from "../assets/mrtrain.jpeg";
import Su30MKI from "../assets/Su-30MKI.png";
import SuperSukoi from "../assets/SuperSukoi.png";
import simulation from "../assets/simulation.jpeg";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Training from "../assets/state-of-xr-report-hero.webp";
import { useNavigate } from "react-router-dom";
import SimulatorSolutions from "../assets/SimulatorSolutions.jpeg";
import AdvancedGroundWarfare from "../assets/AdvancedGroundWarfare.png";
import GroundVehicleSimulator from "../assets/GroundVehicleSimulator.jpg";
import CockpitSimulators from "../assets/CockpitSimulators.png";
import DASCOREO669 from "../assets/das.png";
import Article1 from "../assets/Article1.png";
import Article2 from "../assets/Article2.jpeg";
import Article3 from "../assets/Article3.avif";

gsap.registerPlugin(ScrollTrigger);
const sectionVariant = {
    hidden: {
        y: 80
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};
const lines = [
    "REDEFINING",
    "INDIA'S AERIAL",
    "AND GROUND WARFARE",
    "THROUGH ADVANCED ",
    "DEFENCE SOLUTIONS"

];
const slides = [
    {
        title: "AERIAL WARFARE SOLUTIONS",
        description:
            "Advanced simulation and training platforms designed for modern defense forces. Our systems replicate real-world aerial environments, enabling pilots, operators, and defense teams to train, test, and rehearse mission-critical scenarios with high-fidelity digital simulations.",
        video: "/DefenseWarfare.mp4",
    },
    {
        title: "GROUND WARFARE EQUIPMENT",
        description:
            "Advanced ground warfare equipment designed for modern combat operations. Our systems integrate vehicle platforms, surveillance technologies, and simulation environments to support mission planning, operator training, and real-time battlefield coordination.",
        video: "/GroundWarfare.mp4",
    },
    {
        title: "REVOLUTIONIZING GROUND WARFARE",
        description:
            "Next-generation technologies designed to enhance ground combat training and operational readiness. From vehicle simulators to immersive battlefield environments, our platforms enable defense forces to prepare for complex ground warfare scenarios using advanced spatial computing and simulation systems.",
        video: "/VehicleSimulator.mp4",
    },
];
const PageWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: "100vh" }}
        >
            {children}
        </motion.div>
    );
};
export default function Home() {
    const navigate = useNavigate();

    return (
        <PageWrapper>

            <Navbar />

            <motion.div variants={sectionVariant} initial={false} whileInView="visible">
                <Header />
            </motion.div>

            <motion.div variants={sectionVariant} initial={false} whileInView="visible">
                <ImageGridSection />
            </motion.div>



            {/* <motion.div variants={sectionVariant} initial={false} whileInView="visible">
        <PurposeSection />
      </motion.div> */}

            <motion.div variants={sectionVariant} initial={false} whileInView="visible">
                <ScrollRevealText />
            </motion.div>

            <motion.div variants={sectionVariant} initial={false} whileInView="visible">
                <MetaSlider />
            </motion.div>

            <motion.div variants={sectionVariant} initial={false} whileInView="visible">
                <TrainingSection />
            </motion.div>

            {/* <motion.div variants={sectionVariant} initial={false} whileInView="visible">
        <CustomerQuoteSection />
      </motion.div>  */}

            <motion.div variants={sectionVariant} initial={false} whileInView="visible">
                <LatestNewsSection />
            </motion.div>

            <motion.div variants={sectionVariant} initial={false} whileInView="visible">
                <TalkToSalesCTA />
            </motion.div>

            <Footer />

        </PageWrapper>
    );
}

{/*Header*/ }
function Header() {
    const navigate = useNavigate();

    const textRef = useRef(null)

    useEffect(() => {

        // const text = textRef.current.querySelector("text")
        // const length = text.getComputedTextLength()

        // gsap.set(text, {
        //     strokeDasharray: length,
        //     strokeDashoffset: length
        // })

        // const tl = gsap.timeline()

        // ✍️ Handwriting draw
        // tl.to(text, {
        //     strokeDashoffset: 0,
        //     duration: 2.5,
        //     ease: "power2.out"
        // })

        // Fill
        // tl.to(text, {
        //     fill: "white",
        //     duration: 1
        // }, "-=1")

        // stay
        // tl.to({}, { duration: 2 })

        // fade out
        // tl.to(textRef.current, {
        //     opacity: 0,
        //     duration: 1.5
        // })

    }, [])
    return (
        <header className="relative w-full h-screen overflow-hidden">

            {/* VIDEO */}
            <video onClick={() => navigate("/rafale")}
                className="absolute inset-0 w-full h-full object-cover"
                src="/herovedio.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            {/* OVERLAY */}
            {/* <div className="relative z-10 h-full flex items-center justify-center">

                <svg
                    ref={textRef}
                    viewBox="0 0 900 200"
                    className="w-[80%] max-w-[700px]"
                >
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-none stroke-white"
                        style={{
                            fontSize: "120px",
                            fontFamily: "'Allura', cursive", // 🔥 FIXED FONT
                            strokeWidth: 1.5
                        }}
                    >
                        Antiworld
                    </text>
                </svg>

            </div> */}

        </header>
    )
}

function ImageGridSection() {
    const navigate = useNavigate();
    return (
        <section className="w-full bg-black px-6 lg:px-12 py-12">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Card 1 */}
                <div className="relative overflow-hidden group aspect-[4/3]">
                    <img
                        src={SimulatorSolutions}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                        Simulation Solutions
                    </h3>
                </div>

                {/* Card 2 */}
                <div className="relative overflow-hidden group aspect-[4/3]">
                    <img
                        src={AdvancedGroundWarfare}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                        Advanced Ground Warfare Equipment
                    </h3>
                </div>

                {/* Card 3 */}
                <div className="relative overflow-hidden group aspect-[4/3]">
                    <img
                        src={GroundVehicleSimulator}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                        Ground Vehicle Simulators
                    </h3>
                </div>

                {/* Card 4 */}
                <div onClick={() => navigate("/product1")} className="relative overflow-hidden group aspect-[4/3]">
                    <img
                        src={DASCOREO669}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                        Spatial Computers
                    </h3>
                </div>

                {/* Wide Card */}
                <div onClick={() => navigate("/su-30mki")} className="relative overflow-hidden group md:col-span-2 h-full">
                    <img
                        src={CockpitSimulators}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 text-white text-xl font-semibold">
                        Cockpit Simulators
                    </h3>
                </div>

            </div>

        </section>
    );
}





//     function PurposeSection() {
//     return (
//         <section className="w-full bg-gray-300 
//         min-h-screen flex items-center
//         pt-20 sm:pt-24 lg:pt-28 pb-24 sm:pb-28 lg:pb-36">

//             <div className="w-full px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto flex justify-end">

//                 <div className="max-w-2xl">

//                     {/* Small label */}
//                     <p className="text-xs tracking-[0.25em] text-gray-500 uppercase mb-6">
//                         Our XR Offering
//                     </p>

//                     {/* Main heading */}
//                     <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[46px] 
//                     leading-tight font-light text-gray-900 mb-6 tracking-tight">
//                         Purpose-built for training <br />
//                         and simulation.
//                     </h2>

//                     {/* Description */}
//                     <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
//                         Our XR platforms combine advanced software, precision engineering
//                         and immersive simulation technology to power next-generation
//                         training environments for defense, engineering and mission-critical operations.
//                     </p>

//                 </div>

//             </div>
//         </section>
//     );
// }


function ScrollRevealText() {
    const lineRefs = useRef([]);
    const [activeLines, setActiveLines] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const midpoint = window.innerHeight / 2;
            const updated = {};

            lineRefs.current.forEach((el, index) => {
                if (!el) return;

                const rect = el.getBoundingClientRect();

                if (rect.top < midpoint) {
                    updated[index] = true;
                } else {
                    updated[index] = false;
                }
            });

            setActiveLines(updated);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="w-full bg-black min-h-screen flex items-center justify-center">

            <div className="max-w-5xl text-center px-4 sm:px-6 lg:px-8">

                {/* TEXT BLOCK */}
                <div className="space-y-1 sm:space-y-2">
                    {lines.map((text, i) => (
                        <div
                            key={i}
                            ref={(el) => (lineRefs.current[i] = el)}
                            className={`
        transition-colors duration-500 ease-out
        text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px]
        leading-[1.1]
        font-semibold
        uppercase
        tracking-tight
        ${activeLines[i] ? "text-white" : "text-neutral-800"}
      `}
                        >
                            {text}
                        </div>
                    ))}
                </div>

                {/* Description */}
                <p className="mt-8 text-neutral-400 max-w-xl mx-auto text-[15px] sm:text-[16px] leading-relaxed tracking-[0.02em]">
                    Our platforms bring together simulation, training and mission planning
                    to support modern defense operations. Teams can train, test and prepare
                    in realistic environments across aerial and ground warfare.
                </p>

            </div>
        </section>
    );
}

function MetaSlider() {
    const wrapperRef = useRef(null);
    const videosRef = useRef([]);
    const textsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(videosRef.current, { opacity: 0 });
            gsap.set(textsRef.current, { opacity: 0, y: 40 });

            gsap.set(videosRef.current[0], { opacity: 1 });
            gsap.set(textsRef.current[0], { opacity: 1, y: 0, pointerEvents: "auto" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top top",
                    end: `+=${slides.length * 140}%`,
                    pin: true,
                    scrub: 1.4,
                    pinSpacing: true,
                },
            });

            slides.forEach((_, i) => {
                if (i === 0) return;

                tl.to({}, { duration: 0.6 });

                tl.to(
                    videosRef.current[i - 1],
                    { opacity: 0, duration: 0.8, ease: "power2.out" }
                );

                tl.to(
                    videosRef.current[i],
                    { opacity: 1, duration: 0.8, ease: "power2.out" },
                    "<"
                );

                tl.to(
                    textsRef.current[i - 1],
                    { opacity: 0, y: -40, pointerEvents: "none", duration: 0.6, ease: "power2.out" },
                    "<+0.1"
                );

                tl.fromTo(
                    textsRef.current[i],
                    { opacity: 0, y: 40, pointerEvents: "none" },
                    { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.6, ease: "power2.out" },
                    "<+0.2"
                );
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={wrapperRef}
            className="relative w-full min-h-[75vh] sm:min-h-[90vh] lg:h-screen overflow-hidden bg-neutral-900 text-white"
        >

            {/* VIDEO LAYER */}
            <div className="absolute inset-0">

                {slides.map((slide, i) => (
                    <video
                        key={i}
                        ref={(el) => (videosRef.current[i] = el)}
                        src={slide.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ))}

                {/* light overlay for readability */}
                <div className="absolute inset-0 bg-black/50"></div>

            </div>


            {/* TEXT LAYER */}
            <div className="relative z-10 h-full flex items-center px-6 sm:px-12 lg:px-24">

                {slides.map((slide, i) => (
                    <div
                        key={i}
                        ref={(el) => (textsRef.current[i] = el)}
                        className="absolute max-w-[92%] sm:max-w-[640px] pointer-events-none"
                    >

                        <h1 className="text-[28px] sm:text-[38px] md:text-[46px] lg:text-[56px] font-semibold uppercase tracking-tight leading-[1.05] mb-5">
                            {slide.title}
                        </h1>

                        <p className="text-[15px] sm:text-[16px] text-neutral-300 leading-relaxed mb-8 tracking-[0.02em]">
                            {slide.description}
                        </p>

                        <button className="px-7 py-3 border border-white text-white text-xs tracking-[0.15em] uppercase transition hover:bg-white hover:text-black cursor-pointer">
                            Explore
                        </button>

                    </div>
                ))}

            </div>

        </section>
    );
}

// function CustomerQuoteSection() {

//     const sectionRef = useRef(null);
//     const [animate, setAnimate] = useState(false);
//     const [activeIndex, setActiveIndex] = useState(0);

//     const showcase = [
//         {
//             name: "DEFENSE FORCES",
//             type: "video",
//             media: "https://www.w3schools.com/html/mov_bbb.mp4",
//             text: "Advanced cockpit simulators and mission training systems enabling defense forces to prepare for complex operational environments.",
//         },
//         {
//             name: "AEROSPACE ORGANIZATIONS",
//             type: "image",
//             media: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2",
//             text: "High-fidelity simulation environments designed for aerospace organizations to test aircraft systems and train pilots in realistic conditions.",
//         },
//         {
//             name: "FLIGHT TRAINING CENTERS",
//             type: "video",
//             media: "https://www.w3schools.com/html/movie.mp4",
//             text: "Immersive cockpit training environments helping flight academies deliver safe and highly realistic pilot training programs.",
//         },
//         {
//             name: "SIMULATION LABORATORIES",
//             type: "image",
//             media: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
//             text: "Spatial computing simulation labs designed for engineering teams building next-generation aerospace and defense technologies.",
//         },
//         {
//             name: "RESEARCH INSTITUTIONS",
//             type: "image",
//             media: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
//             text: "Advanced XR environments supporting research institutions exploring immersive simulation and mission analytics.",
//         },
//         {
//             name: "ENGINEERING TEAMS",
//             type: "image",
//             media: "https://images.unsplash.com/photo-1581091870622-1e7b9d84c1b2",
//             text: "Collaborative spatial computing platforms empowering engineering teams to design, test, and visualize complex systems.",
//         },
//     ];

//     useEffect(() => {

//         const observer = new IntersectionObserver(
//             ([entry]) => {

//                 if (entry.isIntersecting) {

//                     requestAnimationFrame(() => {
//                         setAnimate(true);
//                     });

//                     observer.disconnect();
//                 }

//             },
//             { threshold: 0.25 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);

//         return () => observer.disconnect();

//     }, []);

//     return (
//         <section
//             ref={sectionRef}
//             className="w-full bg-white py-16 sm:py-24 lg:py-36"
//         >

//             <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-28 items-start">

//                 {/* LEFT SIDE */}
//                 <div>

//                     <p className="text-xs tracking-widest text-gray-500 mb-6 sm:mb-8 lg:mb-10 uppercase">
//                         Built for mission-critical teams
//                     </p>

//                     <ul className="space-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] font-light">

//                         {showcase.map((item, i) => (
//                             <li
//                                 key={i}
//                                 onClick={() => setActiveIndex(i)}
//                                 className={`cursor-pointer transition-all duration-300
//                                 ${activeIndex === i
//                                         ? "text-gray-900 tracking-wider"
//                                         : "text-gray-500 hover:text-gray-900"}
//                                 `}
//                             >
//                                 {item.name}
//                             </li>
//                         ))}

//                     </ul>

//                 </div>


//                 {/* RIGHT SIDE */}
//                 <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14">

//                     {/* MEDIA */}
//                     <div
//                         className={`relative w-full aspect-[16/9] min-h-[220px] sm:min-h-[320px] lg:min-h-[520px]
//                         overflow-hidden border border-gray-200
//                         transform-gpu transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)]
//                         ${animate
//                                 ? "opacity-100 translate-y-0 scale-100"
//                                 : "opacity-0 translate-y-[140px] scale-[0.96]"
//                             }`}
//                     >

//                         {showcase[activeIndex].type === "video" ? (
//                             <video
//                                 src={showcase[activeIndex].media}
//                                 autoPlay
//                                 muted
//                                 loop
//                                 playsInline
//                                 className="w-full h-full object-cover"
//                             />
//                         ) : (
//                             <img
//                                 src={showcase[activeIndex].media}
//                                 className="w-full h-full object-cover"
//                                 alt=""
//                             />
//                         )}

//                     </div>


//                     {/* TEXT */}
//                     <div className="max-w-3xl">

//                         <p className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-[1.3] font-light italic text-gray-900 mb-4">
//                             “{showcase[activeIndex].text}”
//                         </p>

//                         <button className="inline-flex items-center justify-center gap-1
//                         border border-gray-900 text-gray-900
//                         px-6 sm:px-8 py-3 sm:py-4
//                         text-xs sm:text-sm tracking-wide
//                         hover:bg-gray-900 hover:text-white transition-all duration-300
//                         hover:scale-[1.04]
//                         w-full sm:w-auto">

//                             EXPLORE SOLUTION →

//                         </button>

//                     </div>

//                 </div>

//             </div>

//         </section>
//     );
// }

function TrainingSection() {
    const navigate = useNavigate();


    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();

    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-black py-20 sm:py-24 lg:py-32"
        >

            <div className="w-full px-6 sm:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {/* LEFT CONTENT */}
                <div className="max-w-[640px]">

                    <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white leading-tight tracking-tight mb-4">
                        NEXT-GENERATION <br />
                        TRAINING, WITHOUT THE <br />
                        TRADEOFFS
                    </h2>



                    <p className="text-neutral-400 text-base leading-relaxed max-w-lg mb-6">
                        The demand for training continues to grow every day across air and land. Traditional simulation methods, such as room-scale domes, cannot keep pace with today's rising requirements.
                    </p>

                    <p className="text-neutral-400 text-base leading-relaxed max-w-lg mb-6">
                        Mixed reality technology can bridge that gap, with training solutions that are more portable and more immersive than ever before.
                    </p>

                    <button onClick={() => navigate("/whyxr")} className="group inline-flex items-center gap-4
          border border-gray-500 text-white
          px-8 py-4 
          text-sm font-medium
          hover:bg-black hover:text-white
          transition-all duration-300 cursor-pointer">

                        WHY XR?

                        <span className="group-hover:translate-x-1 transition">
                            →
                        </span>

                    </button>

                </div>


                {/* RIGHT VIDEO */}
                <div
                    className={`w-full transform transition-all duration-[1000ms] ease-out
  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[220px]"}`}
                >

                    <video
                        src="/training1.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[320px] sm:h-[420px] lg:h-[540px] 
    object-cover rounded-xl border border-gray-800"
                    />

                    {/* Caption */}
                    <p className="mt-6 text-center text-neutral-300 text-[16px] sm:text-[18px] lg:text-[20px] italic tracking-[0.02em] max-w-3xl mx-auto leading-relaxed">
                        High-fidelity simulation environments designed for aerospace organizations
                        to test aircraft systems and train pilots in realistic conditions.
                    </p>

                </div>
            </div>

        </section>
    );
}

function LatestNewsSection() {

    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => setAnimate(true));
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();

    }, []);

    return (

        <section
            ref={sectionRef}
            className="w-full bg-black px-6 sm:px-10 lg:px-16 py-20"
        >

            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-14">

                <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-500">
                    Defense Technology Insights
                </p>

                {/* <button
          onClick={() => navigate("/articles")}
          className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 hover:text-white transition flex items-center gap-2"
        >
          All Articles →
        </button> */}

            </div>


            {/* GRID */}
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr]">


                {/* MAIN ARTICLE */}
                <div
                    onClick={() => window.open("https://www.defence-industries.com/articles/advanced-ai-powered-military-simulation", "_blank")}
                    className={`cursor-pointer relative min-h-[420px] lg:h-[520px] overflow-hidden group border border-neutral-800
  transition-all duration-700 hover:scale-[1.02]
  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[120px]"}`}
                >

                    {/* ✅ IMAGE */}
                    <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
                        style={{ backgroundImage: `url(${Article1})` }}
                    />

                    {/* ✅ OVERLAY */}
                    <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500" />

                    {/* ✅ CONTENT */}
                    <div className="relative z-10 p-10 h-full flex flex-col justify-between">

                        <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400">
                            Simulation & Defense
                        </p>

                        <div>
                            <h3 className="text-white font-semibold mb-4">
                                AI Simulation Is Changing Military Training
                            </h3>

                            <p className="text-neutral-300 text-[14px] leading-relaxed">
                                Advanced simulation systems are helping forces train in realistic
                                environments while improving readiness and reducing risk.
                            </p>
                        </div>

                    </div>
                </div>


                {/* ARTICLE 2 */}
                <div
                    onClick={() => window.open("https://sdi.ai/blog/military-training-simulation-software-ai/", "_blank")}
                    className={`cursor-pointer relative overflow-hidden group border border-neutral-800 p-10 flex flex-col justify-between
  transition-all duration-700 hover:-translate-y-2
  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[120px]"}`}
                >

                    {/* IMAGE */}
                    <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
                        style={{ backgroundImage: `url(${Article2})` }}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500" />

                    {/* CONTENT */}
                    <div className="relative z-10 h-full flex flex-col justify-between">

                        <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400">
                            Defense Technology
                        </p>

                        <div>
                            <h3 className="text-white font-semibold mb-4">
                                How Simulation Powers Modern Defense Systems
                            </h3>

                            <p className="text-neutral-300 text-[14px] leading-relaxed">
                                VR and AI-based platforms allow teams to simulate operations,
                                test systems and improve decision making in real time.
                            </p>
                        </div>

                    </div>
                </div>


                {/* ARTICLE 3 */}
                <div
                    onClick={() => window.open("https://simpleflying.com/airline-pilot-training-cost/", "_blank")}
                    className={`cursor-pointer relative overflow-hidden group border border-neutral-800 p-10 flex flex-col justify-between
  transition-all duration-700 hover:-translate-y-2
  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[120px]"}`}
                >

                    {/* IMAGE */}
                    <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
                        style={{ backgroundImage: `url(${Article3})` }}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500" />

                    {/* CONTENT */}
                    <div className="relative z-10 h-full flex flex-col justify-between">

                        <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400">
                            Aviation Training
                        </p>

                        <div>
                            <h3 className="text-white font-semibold mb-4">
                                Why Simulators Are Key for Pilot Training
                            </h3>

                            <p className="text-neutral-300 text-[14px] leading-relaxed">
                                Flight simulators reduce training costs while allowing pilots
                                to practice complex scenarios safely.
                            </p>
                        </div>

                    </div>
                </div>


            </div>

        </section>
    );
}

function TalkToSalesCTA() {

    const navigate = useNavigate();

    return (
        <section className="w-full">
            <div
                onClick={() => navigate("/talk-to-sales")}
                className="
                    group
                    relative
                    w-full
                    h-[180px] sm:h-[220px] lg:h-[260px]
                    bg-black
                    hover:bg-gradient-to-r hover:from-blue-800 hover:to-indigo-900
                    transition-all
                    duration-500
                    flex
                    items-center
                    px-4 sm:px-8 lg:px-16
                    overflow-hidden
                    cursor-pointer
                "
            >

                {/* glow overlay */}
                <div className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]
                    transition-opacity duration-500
                "/>

                {/* LEFT TEXT */}
                <div className="relative z-10">
                    <p className="text-xs sm:text-sm tracking-widest text-white/80 mb-3 sm:mb-4">
                        READY TO REDEFINE REALITY?
                    </p>

                    <h2 className="
                        text-3xl sm:text-4xl md:text-5xl lg:text-[56px]
                        font-extrabold text-white leading-none
                        transition-transform duration-300
                        group-hover:scale-105
                    ">
                        TALK TO SALES
                    </h2>
                </div>

                {/* ARROW */}
                <div
                    className="
                        absolute
                        right-4 sm:right-8 lg:right-16
                        opacity-0
                        translate-x-10
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                        duration-500
                    "
                >
                    <svg
                        className="w-[60px] sm:w-[80px] lg:w-[100px]"
                        viewBox="0 0 100 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="0"
                            y1="20"
                            x2="70"
                            y2="20"
                            stroke="white"
                            strokeWidth="5"
                        />
                        <polyline
                            points="55,5 70,20 55,35"
                            fill="none"
                            stroke="white"
                            strokeWidth="5"
                        />
                    </svg>
                </div>

            </div>
        </section>
    );
}


import React from 'react'
import HeroVideo from '../../components/ProductSubPageComponents/HeroVideo'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import TalkToSalesCTA from '../../components/TalkToSalesCTA'
import CustomerQuoteSection from '../../components/CustomerStories'
import VariantsSection from '../../components/ProductSubPageComponents/VariantsSection'
import TrainingPackageSection from '../../components/ProductSubPageComponents/TrainingPackageSection'
import SupportGridSection from '../../components/ProductSubPageComponents/SupportGridSection'
import PassthroughSection from '../../components/ProductSubPageComponents/PassthroughSection'
import ImmersionSection from '../../components/ProductSubPageComponents/ImmersionSection'
import DeploymentSection from '../../components/ProductSubPageComponents/DeploymentSection'
import FullScreenXRImage from '../../components/ProductSubPageComponents/FullScreenXRImage'
import FullScreenImage from '../../components/ProductSubPageComponents/FullScreenImage'
import fullImg from "../../assets/casualDAS.png";

import img from "../../assets/Realm2.jpeg";
import img1 from "../../assets/Realm3.jpeg";
import Boximg from "../../assets/RealmBox.jpeg";
import { useRef, useState } from "react";
import poster from "../../assets/homeRealm.png";
const Product2 = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (!videoRef.current) return;
        videoRef.current.play();
        setIsPlaying(true);
    };
    return (

        <div className="w-full overflow-x-hidden">
            <Navbar />

            {/* HERO */}
            <section className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={"/RealmHero.mp4"} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 h-full flex items-end">
                    <div className="w-full px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-7xl">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                                {/* REALM */}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1 */}
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
                            {/* SEE EVERY MISSION DETAIL */}
                        </small>

                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            REALM
                        </h2>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            Realm is Antiworld's most powerful portable spatial computer—a lightweight
                            XR glasses system paired with a pocket-sized compute pod. Bring desktop-class creativity,
                            simulation design, and immersive training anywhere without heavy gear.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            <b> Who It's For ?</b><br />
                            Perfect for creators, designers, defense operators, entertainers, and engineers
                            who demand professional performance on their terms—just unlimited possibilities in your pocket.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="bg-white py-16 sm:py-24 lg:py-[140px]">
                <div className="mx-auto flex flex-col-reverse lg:flex-row max-w-[1400px] items-start gap-10 lg:gap-[100px] px-6 sm:px-10 lg:px-16">

                    <div className="w-full lg:w-[42%]">
                        <small className="block text-[12px] tracking-widest text-black">
                            {/* TRAIN WITH PHYSICAL ELEMENTS */}
                        </small>

                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            Why It Elevates Your Workflow ?
                        </h2>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            Portable power meets pro-grade performance—XR glasses +
                            pocket compute pod in one sleek carry case. Deploy anywhere, dominate simulations.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            <b> Pocket Precision:</b> Ultra-high-res XR glasses and compact compute pod deliver
                            crisp 90Hz visuals + precise tracking for cockpit sims, drone command, or 3D modeling—all backpack-portable.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            <b>Seamless Integration:</b> Native support for top sim platforms
                            and live analytics—no cables or desktops needed.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            <b>Instant Deployment:</b> 3-minute field setup for training drills, remote reviews, or creative sessions.
                        </p>
                    </div>

                    <div className="w-full lg:w-[58%]">
                        <img
                            src={Boximg}
                            alt="Passthrough optics"
                            className="h-[300px] sm:h-[420px] lg:h-[520px] w-full object-cover"
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
                        Spatial Software.
                        <br />
                        Limitless Possibilities.
                    </h2>

                    <p className="mx-auto mt-6 sm:mt-8 max-w-[560px] 
                                         text-sm sm:text-[15px] 
                                         leading-relaxed sm:leading-[1.75] 
                                         text-gray-600">
                        The system is powered by a custom spatial computing platform designed
                        to bring desktop-level productivity into an immersive environment.
                        Applications, tools, and content appear around you as floating windows
                        in a fully interactive 3D workspace.
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
            <section className="w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
                <img
                    src={fullImg}
                    alt="Fullscreen"
                    className="block w-full h-full object-cover"
                />
            </section>
            <section className="bg-white px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
                <div className="mx-auto max-w-[450px] text-center">

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-[36px] font-light leading-snug text-black">
                        A Complete System for
                        <br />
                        Portable Spatial Computing.
                    </h2>

                    {/* Paragraph 1 */}
                    <p className="mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        Designed for everyday use, the XR glasses combine lightweight comfort with powerful
                        spatial computing capabilities. The compact pocket-sized compute pod delivers
                        desktop-class performance while keeping the system portable and easy to carry anywhere.
                    </p>

                    {/* Paragraph 2 */}
                    <p className="mt-6 sm:mt-8 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        With vibrant 4K visuals, a wide field of view, and ultra-responsive performance,
                        the system creates an immersive workspace that moves with you—from home to office to travel.
                    </p>

                    {/* Button */}
                    <button className="mt-10 sm:mt-14 lg:mt-20 
                                   inline-flex items-center justify-center gap-4 
                                   bg-black 
                                   px-6 sm:px-8 lg:px-10 
                                   py-3 sm:py-3.5 lg:py-4 
                                   text-xs sm:text-[13px] 
                                   tracking-widest text-white 
                                   hover:bg-gray-900 transition 
                                   w-full sm:w-auto">
                        LEARN MORE ABOUT SPATIAL COMPUTING
                        <span className="text-base sm:text-lg">→</span>
                    </button>

                </div>
            </section>
            <section className="w-full bg-white py-16 sm:py-24 lg:py-36">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-28 items-start">

                    {/* LEFT SIDE — CUSTOMER LIST */}
                    <div>
                        <p className="text-xs tracking-widest text-gray-500 mb-6 sm:mb-8 lg:mb-10 uppercase">
                            Designed for Creators and Innovators
                        </p>

                        <ul className="space-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] font-light">
                            {[
                                "Developers & Engineers",
                                "3D Designers & Creators",
                                "Content Creators",
                                "Remote Professionals",
                                "Researchers & Innovators",
                                "Tech Enthusiasts",
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
                                “Working with multiple floating development windows in spatial space
                                has completely changed how I manage complex projects.”
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
                                READ MORE →
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
                <img
                    src={poster}
                    alt="XR Headsets"
                    className="block w-full h-full object-cover"
                />
            </section>
            <section className="bg-[#efefed] px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light tracking-tight text-black">
                        Modes of Your Spatial Computer
                    </h2>

                    {/* Subtitle
                    <p className="mx-auto mt-4 sm:mt-6 max-w-[520px] text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        The Varjo XR-4 Series includes three models, each tailored
                        for specific operational requirements:
                    </p> */}

                    {/* Variants */}
                    <div className="mt-10 sm:mt-14 lg:mt-20 space-y-8 sm:space-y-12 lg:space-y-16 text-sm sm:text-[15px] leading-relaxed text-gray-700">

                        <p>
                            <strong className="font-semibold text-black">
                                Experiences for Every Workflow
                            </strong>{" "}
                            — Our spatial computer adapts to how you work, create,     <br />
                            and explore. With XR glasses and a pocket-sized compute pod,    <br />
                            the system supports multiple usage modes designed for    <br />
                            productivity, creativity, and entertainment.


                        </p>

                        <p>
                            <strong className="font-semibold text-black">
                                Portable Display Mode
                            </strong>{" "}
                            — Use the glasses as a lightweight high-resolution<br />
                            personal display for work, streaming, and everyday computing.


                        </p>

                        <p>
                            <strong className="font-semibold text-black">
                                Spatial Workspace Mode
                            </strong>{" "}
                            — Unlock a full immersive computing environment<br />
                            with multiple floating windows for coding, designing,<br />
                            researching, and multitasking.

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
                        Learn more
                        <span className="text-base sm:text-lg">→</span>
                    </button>

                </div>
            </section>
            <section className="bg-[#f2f2f2] px-4 sm:px-8 lg:px-20 py-16 sm:py-24 lg:py-[120px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* BLOCK 1 – IMAGE (row-span-2 on desktop only) */}
                    <div
                        className="group relative lg:row-span-2 min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-cover bg-center p-6 sm:p-8 text-white transition-colors"
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

                        <small className="relative z-10 text-[10px] sm:text-[12px] tracking-widest">
                            SPATIAL COMPUTING
                        </small>
                        <h3 className="relative z-10 my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            LIMITLESS WORKSPACE
                            <br />

                        </h3>
                        <p className="relative z-10 text-xs sm:text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                            Turn any environment into a powerful spatial workspace.
                            Open multiple floating screens, organize your tools in 3D,
                            and work without the limits of traditional monitors.
                        </p>
                    </div>

                    {/* BLOCK 2 */}
                    <div
                        className="group relative lg:row-span-2 min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-cover bg-center p-6 sm:p-8 text-white"
                        style={{ backgroundImage: `url(${img1})` }}
                    >
                        <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

                        <small className="relative z-10 text-[10px] sm:text-[12px] tracking-widest">
                            POCKET COMPUTE POD
                        </small>
                        <h3 className="relative z-10 my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            {/* VARJO-READY */}
                            <br />
                            POWER ANYWHERE
                        </h3>
                        <p className="relative z-10 text-xs sm:text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                            The compact compute pod delivers
                            desktop-class performance in your pocket.
                            Experience powerful processing, multitasking, and graphics wherever you go.
                        </p>
                    </div>

                    {/* BLOCK 3 */}
                    <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[10px] sm:text-[12px] tracking-widest">
                            XR GLASSES
                        </small>
                        <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            IMMERSIVE VISUALS
                        </h3>
                        <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
                            Lightweight XR glasses provide vibrant 4K visuals, a wide field of view,
                            and smooth 90Hz performance for an immersive and comfortable experience.
                        </p>
                    </div>

                    {/* BLOCK 4 */}
                    <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[10px] sm:text-[12px] tracking-widest">
                            NATURAL CONTROLS
                        </small>
                        <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            INTUITIVE INTERACTION
                        </h3>
                        <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
                            Navigate your spatial workspace using hand gestures, voice commands,
                            and a wireless touchpad—no keyboard or mouse required.
                        </p>
                    </div>

                    {/* BLOCK 5 */}
                    <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[10px] sm:text-[12px] tracking-widest">
                            PORTABLE DESIGN
                        </small>
                        <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            WORK FROM ANYWHERE
                        </h3>
                        <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
                            Designed for mobility, the system is lightweight and comfortable for long sessions,
                            with 6–8 hours of battery life for uninterrupted productivity.
                        </p>
                    </div>

                    {/* BLOCK 6 */}
                    <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[10px] sm:text-[12px] tracking-widest">
                            PRODUCT DETAILS
                        </small>
                        <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            TECHNICAL SPECIFICATIONS
                        </h3>
                        <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
                            Explore the full capabilities of the system, including performance details,
                            connectivity, and hardware specifications.
                        </p>
                    </div>

                </div>
            </section>
            <TalkToSalesCTA />
            <Footer />
        </div>
    )
}

export default Product2
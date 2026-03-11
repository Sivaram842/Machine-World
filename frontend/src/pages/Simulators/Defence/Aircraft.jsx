import React from 'react'
import Navbar from '../../../components/NewNavbar'
import Header from '../../../components/Header'
import Footer from '../../../components/NewFooter'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const blocksData = [
    {
        title: "Tejas",
        description: "Advanced radar systems ensuring control of airspace.",
        image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321",
        route: "/tejas",
    },
    {
        title: "Rafale",
        description: "Integrated sensor networks and defense systems.",
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63",
        route: "/rafale",
    },
    {
        title: "MIG-29",
        description: "Next generation missile defense technologies.",
        image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51",
        route: "/mig-29",
    },
    {
        title: "MIG-29K",
        description: "Real-time battlefield data systems.",
        image: "https://images.unsplash.com/photo-1504718855392-c0f33b372e72",
        route: "/mig-29k",
    },
    {
        title: "Su-30MKI",
        description: "Advanced electronic protection systems.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        route: "/su-30mki",
    },

];
const Aircraft = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();
    const toggleBlock = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (

        <div>
            <Navbar />
            <Header />
            <div className="bg-white text-black">

                {/* ================= SECTION 1 - HERO ================= */}
                <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
                    <img
                        src="/images/varjo-base-hero.jpg"
                        alt="Varjo Base"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
                        <div className="max-w-[900px]">
                            <h1 className="text-white uppercase font-extrabold 
                       text-[22px] sm:text-[28px] md:text-[40px] lg:text-[52px]
                       leading-[1.15] md:leading-[1.1] tracking-tight">
                                Varjo Base: <br />
                                Take Your<br />
                                Headset <br />
                                Experience to <br />
                                New Heights.
                            </h1>

                            <p className="mt-8 text-white/80 
                                  text-[15px] sm:text-[17px] md:text-[18px] 
                                  leading-[26px] md:leading-[30px]">
                                Varjo Base, the companion software for Varjo <br />
                                headsets, gives you everything you need to <br />
                                leverage the full capabilities of true-to-life <br />
                                virtual and mixed reality. Now available in <br />
                                both Free and Pro tiers.
                            </p>
                        </div>
                    </div>
                </section>


                {/* ================= SECTION 2 ================= */}
                <section className="py-20 md:py-28 px-6 md:px-16">
                    <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">

                        <div>
                            <h2 className="uppercase font-extrabold 
                       text-[22px] sm:text-[26px] md:text-[34px] 
                       leading-[1.2] tracking-tight">
                                The Command Center For <br />
                                Your XR Experience.
                            </h2>

                            <p className="mt-6 text-gray-700 text-[16px] leading-[28px]">

                                Varjo Base is the essential link between your hardware and your workflow. <br />
                                Whether you’re deploying a single headset or managing an entire XR lab, Varjo <br />
                                Base is designed to put you in control to get the most out of the headset.
                            </p>

                            <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">
                                <li>• Easily control headset capabilities such as eye tracking, foveated rendering and visual quality.</li>
                                <li>• Make adjustments to the mixed reality experience, altering how virtual and real worlds blend   together.</li>
                                <li>• Manage supporting tools such as tracking devices and controllers.</li>
                                <li>• Manage supporting tools such as tracking devices and controllers.</li>
                                <li>• Record and share what the user is seeing with others.</li>
                            </ul>
                        </div>

                        <div>
                            <img
                                src="/images/varjo-base-engine.jpg"
                                alt="Engine"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>
                </section>


                {/* ================= SECTION 3 ================= */}
                <section className="py-20 md:py-28 px-6 text-center">
                    <div className="max-w-[700px] mx-auto">

                        <h2 className="uppercase font-extrabold 
                       text-[22px] sm:text-[26px] md:text-[34px] 
                       leading-[1.2] tracking-tight">
                            Enterprise-<br />
                            Grade Security,<br />
                            By Design.
                        </h2>

                        <p className="mt-6 text-gray-700 leading-[28px]">
                            Security isn’t an afterthought in Varjo Base—it’s built into <br />
                            the core. From fully local log file storage to optional <br />
                            software updates, every detail puts you in control.
                        </p>

                        <p className="mt-6 text-gray-700 leading-[28px]">
                            Updates are digitally signed for authenticity, and no data is <br />
                            ever sent automatically. Developed under a secure <br />
                            Software Development Lifecycle (SDLC), Varjo Base <br />
                            incorporates mandatory code reviews, static code <br />
                            analysis, and continuous vulnerability scanning. Varjo <br />
                            Base ensures your XR experience stays secure and under<br />
                            your control, giving you peace of mind in sensitive <br />
                            environments and everyday use.
                        </p>

                        <button className="mt-10 bg-black text-white px-10 py-4 
                                     uppercase tracking-wider text-sm
                                     transition-all duration-300
                                     hover:bg-[#1117C7]">
                            Download Varjo Base →
                        </button>

                    </div>
                </section>


                {/* ================= SECTION 4 - GREY BG FEATURES ================= */}
                <section className="py-24 px-6 bg-[#f3f3f3]">
                    <div className="max-w-[1400px] mx-auto">

                        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                            <img src="/images/base-pro.jpg" alt="" className="w-full" />

                            <div>
                                <h2 className="uppercase font-extrabold 
                       text-[22px] sm:text-[26px] md:text-[34px] 
                       leading-[1.2] tracking-tight">
                                    Varjo Base Pro: Unlock the full<br />
                                    potential of your XR-4 Series<br />

                                    headset.
                                </h2>

                                <p className="mt-6 text-gray-700 leading-[28px]">
                                    Varjo Base is free-of-charge, but for the most advanced features you will need <br />
                                    Varjo Base Pro. Gain access to advanced features, deeper customization, and <br />
                                    enhanced data insights to elevate your workflows and deliver next-level<br />
                                    performance.
                                </p>

                                <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">
                                    <li>• Advanced VR and MR features, such as chroma key, advanced masking tools, and programmatic control over camera settings.</li>
                                    <li>• Eye tracking for research and analytics, offering deeper insights with features like gaze data API and the eye camera data stream</li>
                                    <li>• Custom tracking solutions, including third-party tracking plugin support and motion platform compatibility.</li>
                                    <li>• Future software innovations, with access to a roadmap of new capabilities and ongoing enhancements to tracking, passthrough, and AI-assisted features.</li>
                                </ul>

                                <p className="mt-6 text-gray-700 leading-[28px]">
                                    Pricing starts at 2,500€/$ per year, or 5,000€/$ perpetual for Varjo XR-4 and <br />
                                    Varjo XR-4 Focal Edition. Varjo Base Pro license is included in Varjo XR-4 Secure <br />
                                    Edition devices.
                                </p>

                                <div className="mt-8 flex gap-6 flex-wrap">
                                    <button className="bg-black text-white px-8 py-4 
                                           uppercase text-sm transition-all 
                                           hover:bg-[#1117C7]">
                                        VARJO BASE PRO FEATURES →
                                    </button>

                                    <button className="bg-black text-white px-8 py-4 
                                           uppercase text-sm transition-all 
                                           hover:bg-[#1117C7]">
                                        UPGRADE TO PRO →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>







                {/* ================= SECTION 5 ================= */}
                <section className="py-24 px-6 text-center">
                    <div className="max-w-[700px] mx-auto">

                        <h2 className="uppercase font-extrabold 
                       text-[22px] sm:text-[26px] md:text-[34px] 
                       leading-[1.2] tracking-tight">
                            Consistent <br />
                            Updates.<br />
                            Constant<br />
                            Innovation.
                        </h2>

                        <p className="mt-6 text-gray-700 leading-[28px]">
                            Varjo Base is continuously updated to deliver the best<br />
                            possible XR experience—enhancing performance, <br />
                            stability, and usability with every release. New versions<br />
                            drop roughly every two months, introducing powerful new <br />
                            features while refining existing ones based on real user <br />
                            feedback. The core platform is designed to grow with you,<br />
                            ensuring your setup stays optimized over time.
                        </p>

                        <button className="mt-10 bg-black text-white px-10 py-4 
                                     uppercase text-sm transition-all 
                                     hover:bg-[#1117C7]">
                            READ LATEST RELEASE NOTES →
                        </button>

                    </div>
                </section>


                {/* ================= SECTION 6 - LATEST ARTICLES ================= */}
                {/* ================= LATEST NEWS AND INSIGHTS ================= */}
                <section className="bg-[#f3f3f3] py-20 md:py-40">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">

                        {/* HEADER ROW */}
                        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] 
                            mb-12 md:mb-24 items-center gap-6">

                            <h2 className="uppercase tracking-[3px] text-xs font-medium">
                                Latest News and Insights
                            </h2>

                            <span className="uppercase tracking-[3px] text-xs 
                               transition-colors duration-300 
                               hover:text-[#1117C7] cursor-pointer">
                                All Articles →
                            </span>

                            <div></div>
                        </div>

                        {/* NEWS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 
                            lg:grid-cols-[1.6fr_1fr_1fr] 
                            gap-8 md:gap-12 lg:gap-16">

                            {/* LARGE FEATURED CARD */}
                            <div className="group bg-[#e6e6e6] 
                              p-8 sm:p-12 lg:p-20 
                              min-h-[320px] sm:min-h-[420px] lg:h-[520px] 
                              flex flex-col justify-between 
                              transition-all duration-300 
                              hover:bg-[#1117C7] cursor-pointer">

                                <p className="text-sm text-gray-700 
                              group-hover:text-white 
                              transition-colors duration-300">
                                    February 26, 2026
                                </p>

                                <div>
                                    <h3 className="uppercase font-extrabold 
                                 text-[16px] sm:text-[18px] md:text-[20px] 
                                 leading-6 md:leading-7 
                                 text-black 
                                 group-hover:text-white 
                                 transition-colors duration-300">
                                        Varjo Launches Ready-To-Deploy XR Systems For Secure And Air-Gapped Environments
                                    </h3>

                                    <p className="mt-4 sm:mt-6 text-gray-700 
                                text-[13px] sm:text-[14px] 
                                leading-5 md:leading-6 
                                group-hover:text-white 
                                transition-colors duration-300">
                                        The bundle offering combines XR-4 Series headsets,
                                        certified workstations, and software into a single,
                                        deployable XR system suitable for air-gapped environments.
                                    </p>
                                </div>
                            </div>


                            {/* CARD 2 */}
                            <div className="group bg-[#e6e6e6] 
                              p-8 sm:p-10 lg:p-16 
                              min-h-[320px] sm:min-h-[420px] lg:h-[520px] 
                              flex flex-col justify-between 
                              transition-all duration-300 
                              hover:bg-[#1117C7] cursor-pointer">

                                <p className="text-sm text-gray-700 
                              group-hover:text-white 
                              transition-colors duration-300">
                                    January 21, 2026
                                </p>

                                <h3 className="uppercase font-extrabold 
                               text-[15px] sm:text-[17px] md:text-[18px] 
                               leading-6 md:leading-7 
                               text-black 
                               group-hover:text-white 
                               transition-colors duration-300">
                                    Varjo Achieves ISO/IEC 27001:2022 Certification
                                </h3>
                            </div>


                            {/* CARD 3 */}
                            <div className="group bg-[#e6e6e6] 
                              p-8 sm:p-10 lg:p-16 
                              min-h-[320px] sm:min-h-[420px] lg:h-[520px] 
                              flex flex-col justify-between 
                              transition-all duration-300 
                              hover:bg-[#1117C7] cursor-pointer">

                                <p className="text-sm text-gray-700 
                              group-hover:text-white 
                              transition-colors duration-300">
                                    December 3, 2025
                                </p>

                                <h3 className="uppercase font-extrabold 
                               text-[15px] sm:text-[17px] md:text-[18px] 
                               leading-6 md:leading-7 
                               text-black 
                               group-hover:text-white 
                               transition-colors duration-300">
                                    Varjo Releases State Of XR In Simulation Training Report
                                </h3>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
            <section className="w-full bg-black py-20">
                <div className="max-w-[1600px] mx-auto px-10">

                    {/* Parent hover group */}
                    <div className="flex w-full overflow-hidden group">

                        {blocksData.map((block, index) => (
                            <div
                                key={index}
                                className="
                relative
                flex-[1]
                hover:flex-[3]
                transition-all duration-700 ease-in-out
                h-[420px]
                cursor-pointer
                "
                                style={{
                                    backgroundImage: `url(${block.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60"></div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-end p-6 text-white">

                                    <h3 className="text-lg font-semibold mb-3 transition-all duration-300 hover:scale-105">
                                        {block.title}
                                    </h3>

                                    {/* Hidden until hover */}
                                    <div className="opacity-0 hover:opacity-100 transition duration-500">

                                        <p className="text-sm mb-4 leading-relaxed">
                                            {block.description}
                                        </p>

                                        <button
                                            onClick={() => navigate(block.route)}
                                            className="
    border border-white
    px-4 py-2
    text-xs
    hover:bg-white
    hover:text-black
    transition
  "
                                        >
                                            Discover more →
                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Aircraft
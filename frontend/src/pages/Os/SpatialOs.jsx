import React from 'react'
import Navbar from '../../components/NewNavbar'
import Header from '../../components/Header'
import Footer from '../../components/NewFooter'
import spos from "../../assets/spatialOS.jpeg"
import spos1 from "../../assets/spatialOS1.webp"
const SpatialOs = () => {
    return (
        <div>
            <Navbar />
            <header className="relative w-full min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen overflow-hidden">

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
                <div className="relative z-10 flex items-end min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen">

                    <div className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-24">

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-8">

                            <div className="max-w-2xl">
                                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                                    Spatial OS
                                </h1>

                                <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                    The Future Of Immersive  Defence & Enterprise Systems
                                </p>
                            </div>

                            {/* RIGHT */}
                            <div className="max-w-xl">
                                <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed text-left">
                                    Antiworld Spatial OS powers next-generation simulation,
                                    training, and immersive computing environments. Designed
                                    for defence, enterprise, and education sectors, it enables
                                    realistic cockpit simulations, XR training systems, and
                                    spatial computing platforms that bring digital environments
                                    into the real world with precision and performance.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </header>
            <div className="bg-white text-black">

                {/* ================= SECTION 1 - HERO ================= */}
                <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
                    <img
                        src={spos}
                        alt="Varjo Base"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
                        <div className="max-w-[900px]">
                            <h1 className="text-white uppercase font-extrabold 
               text-[22px] sm:text-[28px] md:text-[40px] lg:text-[52px]
               leading-[1.15] md:leading-[1.1] tracking-tight">

                                The Core Platform <br />
                                For Antiworld XR Systems
                            </h1>

                            <p className="mt-6 text-gray-100 text-[16px] leading-[28px]">

                                Antiworld Spatial OS acts as the central operating system
                                connecting XR hardware, simulation software, and training
                                environments into a single unified platform. Built for
                                defence and enterprise applications, the system enables
                                immersive spatial computing experiences that replicate
                                real-world environments with high accuracy.
                            </p>

                            <ul className="mt-6 space-y-3 text-gray-100 text-[15px]">
                                <li>• Power high-fidelity cockpit simulators for defence pilot training.</li>
                                <li>• Manage XR headsets, spatial sensors, and simulation environments.</li>
                                <li>• Integrate real-world data and digital simulations in mixed reality.</li>
                                <li>• Enable advanced visualization for training and mission rehearsal.</li>
                                <li>• Record and analyze simulation sessions for performance evaluation.</li>
                            </ul>
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
                                Secure By Design <br />
                                For Defence And <br />
                                Critical Systems
                            </h2>

                            <p className="mt-6 text-gray-700 text-[16px] leading-[28px]">

                                Antiworld Spatial OS is built with security as a core
                                principle. Defence and enterprise environments require
                                strict control over data, infrastructure, and network
                                access. Our systems are designed to operate in isolated
                                and secure environments where reliability and trust are
                                critical.
                            </p>
                            <p className="mt-6 text-gray-700 leading-[28px]">

                                From secure local data handling to controlled software
                                updates and strict development practices, every component
                                of Antiworld Spatial OS is designed to ensure that
                                simulation environments, training systems, and defence
                                applications remain protected and dependable.
                            </p>

                            <button className="mt-10 bg-black text-white px-10 py-4 
uppercase tracking-wider text-sm
transition-all duration-300
hover:bg-[#1117C7]">
                                Learn More About Antiworld →
                            </button>
                        </div>

                        <div>
                            <img
                                src={spos1}
                                alt="Engine"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>
                </section>

                {/* 
               
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
                </section> */}


                <section className="py-24 px-6 bg-[#f3f3f3]">
                    <div className="max-w-[1400px] mx-auto">

                        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

                            {/* LEFT VIDEO */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full object-cover"
                            >
                                <source src="/spatialVideo.mp4" type="video/mp4" />
                            </video>

                            {/* RIGHT CONTENT */}
                            <div>
                                <h2
                                    className="uppercase font-extrabold 
          text-[22px] sm:text-[26px] md:text-[34px] 
          leading-[1.2] tracking-tight"
                                >
                                    Unlock The Full Power <br />
                                    Of Spatial Computing <br />
                                    With Antiworld
                                </h2>

                                <p className="mt-6 text-gray-700 leading-[28px]">
                                    Antiworld Spatial OS is designed to support advanced
                                    immersive technologies including Virtual Reality,
                                    Augmented Reality, and Mixed Reality. The platform
                                    enables developers, engineers, and defence organizations
                                    to create realistic training environments and powerful
                                    simulation systems.
                                </p>

                                <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">
                                    <li>• Advanced cockpit simulators for pilot training and mission rehearsal.</li>
                                    <li>• XR training environments for defence, industrial, and education sectors.</li>
                                    <li>• Integration with Unity and Unreal for simulation development.</li>
                                    <li>• Spatial computing tools for visualization, analytics, and research.</li>
                                    <li>• Future-ready architecture supporting AI-driven simulations.</li>
                                </ul>

                                <p className="mt-6 text-gray-700 leading-[28px]">
                                    Antiworld continues to develop next-generation immersive
                                    technologies that reduce training costs, improve safety,
                                    and create new possibilities for learning and innovation.
                                </p>

                                <div className="mt-8 flex gap-6 flex-wrap">
                                    <button
                                        className="bg-black text-white px-8 py-4 
            uppercase text-sm transition-all 
            hover:bg-[#1117C7]"
                                    >
                                        Spatial OS FEATURES →
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
                            Continuous <br />
                            Innovation.<br />
                            Real-World <br />
                            Impact.
                        </h2>

                        <p className="mt-6 text-gray-700 leading-[28px]">
                            Antiworld constantly improves its spatial computing
                            platform to deliver cutting-edge capabilities for
                            defence, enterprise, and research applications. Our
                            multidisciplinary teams across hardware, software,
                            design, and XR development collaborate to push the
                            boundaries of immersive technology.
                        </p>

                        <button className="mt-10 bg-black text-white px-10 py-4 
uppercase text-sm transition-all 
hover:bg-[#1117C7]">
                            Explore Our Technologies →
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
                            {/* 
                            <h2 className="uppercase tracking-[3px] text-xs font-medium">
                                Latest News and Insights
                            </h2> */}

                            {/* <span className="uppercase tracking-[3px] text-xs 
                       transition-colors duration-300 
                       hover:text-[#1117C7] cursor-pointer">
                                All Articles →
                            </span> */}

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

                                {/* <p className="text-sm text-gray-700 
                      group-hover:text-white 
                      transition-colors duration-300">
                                    February 26, 2026
                                </p> */}

                                <div>
                                    <h3 className="uppercase font-extrabold 
                         text-[16px] sm:text-[18px] md:text-[20px] 
                         leading-6 md:leading-7 
                         text-black 
                         group-hover:text-white 
                         transition-colors duration-300">
                                        Antiworld Develops Advanced XR Cockpit Simulator For Defence Training
                                    </h3>

                                    <p className="mt-4 sm:mt-6 text-gray-700 
                        text-[13px] sm:text-[14px] 
                        leading-5 md:leading-6 
                        group-hover:text-white 
                        transition-colors duration-300">
                                        Antiworld introduces a next-generation immersive cockpit simulator
                                        designed to reduce pilot training costs while maintaining high realism.
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

                                {/* <p className="text-sm text-gray-700 
                      group-hover:text-white 
                      transition-colors duration-300">
                                    January 21, 2026
                                </p> */}

                                <h3 className="uppercase font-extrabold 
                       text-[15px] sm:text-[17px] md:text-[18px] 
                       leading-6 md:leading-7 
                       text-black 
                       group-hover:text-white 
                       transition-colors duration-300">
                                    Antiworld Expands XR Development For Enterprise And Education
                                </h3>
                            </div>


                            {/* CARD 3 */}
                            <div className="group bg-[#e6e6e6] 
                      p-8 sm:p-10 lg:p-16 
                      min-h-[320px] sm:min-h-[420px] lg:h-[520px] 
                      flex flex-col justify-between 
                      transition-all duration-300 
                      hover:bg-[#1117C7] cursor-pointer">
                                {/* 
                                <p className="text-sm text-gray-700 
                      group-hover:text-white 
                      transition-colors duration-300">
                                    December 3, 2025
                                </p> */}

                                <h3 className="uppercase font-extrabold 
                       text-[15px] sm:text-[17px] md:text-[18px] 
                       leading-6 md:leading-7 
                       text-black 
                       group-hover:text-white 
                       transition-colors duration-300">
                                    The Future Of Spatial Computing In Defence And Simulation
                                </h3>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default SpatialOs
import { useState } from "react";
import Navbar from "../../components/NewNavbar";
import TalkToSalesCTA from "../../components/TalkToSalesCTA";
import Footer from "../../components/NewFooter";
import img from "../../assets/work.jpeg"
import img1 from "../../assets/mrtrain.jpeg";
import img2 from "../../assets/simulation.jpeg";

export default function AboutUs() {
    const [region, setRegion] = useState("asia");

    return (
        <div>
            <Navbar />
            <div className="font-varjo text-black overflow-x-hidden">

                <section className="relative h-[70vh] md:h-[85vh] lg:h-screen w-full overflow-hidden bg-black">
                    <img
                        src={img}
                        alt="Hero"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </section>

                {/* TRANSFORMING */}
                <section className="bg-[#D3D3D3] py-20 md:py-32 text-center">
                    <div className="max-w-[980px] mx-auto px-6">
                        <h1 className="text-[26px] sm:text-[34px] md:text-[46px] lg:text-[58px] leading-[1.05] font-extrabold uppercase tracking-[-0.5px]">
                            BUILDING <br />
                            ADVANCED <br />
                            DEFENCE <br />
                            SIMULATION <br />
                            AND XR <br />
                            TECHNOLOGIES
                        </h1>

                        <p className="mt-8 text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[32px] text-gray-600 max-w-[720px] mx-auto">
                            At Antiworld we develop advanced simulation systems, <br />
                            immersive XR technologies, and defence applications <br />
                            that help industries train smarter, reduce costs, and <br />
                            improve operational readiness.
                        </p>
                    </div>
                </section>

                {/* WHO WE ARE */}
                <section className="bg-[#f3f3f3] py-20 md:py-32">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div>
                            <p className="uppercase tracking-[3px] text-xs mb-6">WHO WE ARE</p>

                            <h2 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] leading-[1.1] font-extrabold uppercase">
                                A TECHNOLOGY COMPANY <br />
                                BUILDING DEFENCE <br />
                                SIMULATION SYSTEMS
                            </h2>

                            <div className="mt-8 space-y-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] text-gray-600 max-w-[520px]">
                                <p>
                                    Antiworld is a technology company based in Hyderabad, India,
                                    focused on building advanced defence and enterprise solutions.
                                    Our work combines software, hardware, and immersive technologies
                                    to create powerful training and simulation systems.
                                </p>

                                <p>
                                    Our team develops applications such as cockpit simulators,
                                    counter-drone systems, and XR-based training environments
                                    for defence, education, and enterprise sectors.
                                </p>

                                <p>
                                    With a multidisciplinary team of designers, developers,
                                    XR engineers, and hardware specialists, we focus on building
                                    innovative systems that improve training efficiency,
                                    reduce costs, and enable safe experimentation.
                                </p>
                            </div>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="inline-block mt-10 bg-black text-white px-8 py-3 uppercase tracking-[2px] text-sm transition-all duration-300 hover:bg-blue-600"
                            >
                                FOLLOW US ON LINKEDIN →
                            </a>
                        </div>

                        <div>
                            <img src={img1} className="w-full object-cover" />
                        </div>
                    </div>
                </section>

                {/* LOCATIONS */}
                <section className="bg-[#D3D3D3] py-20 md:py-40">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-16">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-light tracking-[6px] mb-12">
                            LOCATION
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-gray-700">
                            <div>
                                <h3 className="font-medium mb-4">India</h3>
                                <p>
                                    Puppalaguda <br />
                                    Hyderabad, Telangana
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium mb-4">Engineering Lab</h3>
                                <p>
                                    Antiworld Development Lab <br />
                                    Simulation & XR Technologies
                                </p>
                            </div>

                            <div>
                                <h3 className="font-medium mb-4">Operations</h3>
                                <p>
                                    Research & Development <br />
                                    Defence Technology Systems
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GLOBAL COVERAGE */}
                <section className="bg-[#dcdcdc] py-24 md:py-48">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-16">

                        <p className="uppercase tracking-[3px] text-xs mb-12">
                            TECHNOLOGY COVERAGE
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_2fr] gap-16 lg:gap-32">

                            <div className="space-y-6 text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2] font-light">

                                <h2
                                    onClick={() => setRegion("asia")}
                                    className={`cursor-pointer transition-colors duration-300 ${region === "asia"
                                        ? "text-black"
                                        : "text-gray-400 hover:text-black"
                                        }`}
                                >
                                    DEFENCE TECHNOLOGY
                                </h2>

                                <h2
                                    onClick={() => setRegion("europe")}
                                    className={`cursor-pointer transition-colors duration-300 ${region === "europe"
                                        ? "text-black"
                                        : "text-gray-400 hover:text-black"
                                        }`}
                                >
                                    XR & SIMULATION
                                </h2>

                                <h2
                                    onClick={() => setRegion("na")}
                                    className={`cursor-pointer transition-colors duration-300 ${region === "na"
                                        ? "text-black"
                                        : "text-gray-400 hover:text-black"
                                        }`}
                                >
                                    ENTERPRISE SOLUTIONS
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-600">

                                {region === "asia" && (
                                    <>
                                        <p>Counter Drone Systems</p>
                                        <p>Defence Monitoring Systems</p>
                                        <p>Simulation Control Systems</p>
                                        <p>Advanced Training Platforms</p>
                                    </>
                                )}

                                {region === "europe" && (
                                    <>
                                        <p>VR Training Environments</p>
                                        <p>Mixed Reality Applications</p>
                                        <p>Augmented Reality Systems</p>
                                        <p>Immersive Simulation Platforms</p>
                                    </>
                                )}

                                {region === "na" && (
                                    <>
                                        <p>Industrial Training Solutions</p>
                                        <p>Educational Simulation Systems</p>
                                        <p>Interactive Technology Platforms</p>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </section>

                {/* PRACTICE MADE PERFECT */}
                <section className="bg-black text-white py-24 md:py-40">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-black uppercase">
                                Simulation makes training smarter
                            </h2>

                            <p className="mt-8 text-gray-400 text-[15px] md:text-[17px] leading-[26px] md:leading-[30px] max-w-[560px]">
                                Real-world training environments are expensive,
                                complex, and sometimes risky. Simulation technology
                                allows teams to practice critical skills safely
                                while reducing operational costs.
                            </p>

                            <p className="mt-8 text-gray-400 text-[15px] md:text-[17px] leading-[26px] md:leading-[30px] max-w-[560px]">
                                At Antiworld we develop advanced cockpit simulators,
                                XR training platforms, and defence technologies that
                                enable organizations to train effectively in realistic
                                digital environments.
                            </p>

                        </div>

                        <img src={img2} className="w-full object-cover" />

                    </div>
                </section>

                {/* PRESS KIT */}
                <section className="bg-[#f5f5f5] py-24 md:py-40 text-center px-6">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-black uppercase">
                        Antiworld Media Kit
                    </h2>

                    <p className="mt-6 text-gray-600 max-w-[700px] mx-auto">
                        Explore Antiworld technologies, simulation platforms,
                        and immersive systems through our media resources,
                        images, and company updates.
                    </p>

                    <button className="mt-10 bg-black text-white px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-blue-600">
                        Antiworld Media →
                    </button>
                </section>

            </div>
            <TalkToSalesCTA />
            <Footer />
        </div>
    );
}
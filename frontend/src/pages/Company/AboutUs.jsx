import { useState } from "react";
import NavbarStatic from "../../components/NavbarStatic";
import TalkToSalesCTA from "../../components/TalkToSalesCTA";
import Footer from "../../components/Footer";

export default function AboutUs() {
    const [region, setRegion] = useState("asia");

    return (
        <div>
            <NavbarStatic />
            <div className="font-varjo text-black overflow-x-hidden">

                {/* ================= HERO VIDEO ================= */}
                <section className="relative h-[70vh] md:h-[85vh] lg:h-screen w-full overflow-hidden bg-black">
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                        <source src="/videos/hero.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/60"></div>
                </section>

                {/* ================= TRANSFORMING ================= */}
                <section className="bg-[#D3D3D3] py-20 md:py-32 text-center">
                    <div className="max-w-[980px] mx-auto px-6">
                        <h1 className="text-[26px] sm:text-[34px] md:text-[46px] lg:text-[58px] leading-[1.05] font-extrabold uppercase tracking-[-0.5px]">
                            TRANSFORMING <br />
                            HOW INDUSTRIES <br />
                            WORK WITH <br />
                            TRUE-TO-LIFE <br />
                            VIRTUAL AND <br />
                            MIXED REALITY
                        </h1>

                        <p className="mt-8 text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[32px] text-gray-600 max-w-[720px] mx-auto">
                            By truly blending digital and physical worlds into one,<br />
                            Varjo is transforming simulation across industries — <br />
                            saving money, time, resources and even lives along the <br />
                            way.
                        </p>
                    </div>
                </section>

                {/* ================= WHO WE ARE ================= */}
                <section className="bg-[#f3f3f3] py-20 md:py-32">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div>
                            <p className="uppercase tracking-[3px] text-xs mb-6">WHO WE ARE</p>

                            <h2 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] leading-[1.1] font-extrabold uppercase">
                                A WORLD LEADER IN<br />
                                MILITARY-GRADE VR AND XR
                            </h2>

                            <div className="mt-8 space-y-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[26px] md:leading-[28px] text-gray-600 max-w-[520px]">
                                <p>
                                    Varjo was founded in 2016 by experienced product leaders and innovators with a background in developing high-end technology and innovations at Nokia, Microsoft, and NVIDIA. Varjo founders had a vision of seamlessly merging the virtual and real worlds with human-eye resolution virtual and mixed reality.
                                </p>
                                <p>
                                    Today, Varjo is a supergroup made up of 200+ professionals with the passion, skills and vision to do things most people think are impossible. We focus on delivering the world’s most advanced VR/XR technology to demanding industries such as aerospace, defense, maritime, engineering, research, and more.
                                </p>
                            </div>

                            <a href="https://linkedin.com" target="_blank"
                                className="inline-block mt-10 bg-black text-white px-8 py-3 uppercase tracking-[2px] text-sm transition-all duration-300 hover:bg-blue-600">
                                FOLLOW US ON LINKEDIN →
                            </a>
                        </div>

                        <div>
                            <img src="/images/who.jpg" className="w-full object-cover" />
                        </div>
                    </div>
                </section>

                {/* ================= LOCATIONS ================= */}
                <section className="bg-[#D3D3D3] py-20 md:py-40">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-16">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-light tracking-[6px] mb-12">
                            LOCATIONS
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-gray-700">
                            <div>
                                <h3 className="font-medium mb-4">Finland</h3>
                                <p>Vuorikatu 20<br />00100 Helsinki</p>
                            </div>
                            <div>
                                <h3 className="font-medium mb-4">USA</h3>
                                <p>901 N Glebe Rd.<br />Ste. 500 Arlington, VA<br />22203</p>
                            </div>
                            <div>
                                <h3 className="font-medium mb-4">Germany</h3>
                                <p>Beta-Strasse 10A<br />85774 Unterföhring<br />Munich</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= VARJO COVERAGE ================= */}
                <section className="bg-[#dcdcdc] py-24 md:py-48">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-16">

                        {/* TOP LABEL */}
                        <p className="uppercase tracking-[3px] text-xs mb-12">
                            VARJO COVERAGE
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_2fr] gap-16 lg:gap-32">

                            {/* LEFT SIDE */}
                            <div className="space-y-6 text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2] font-light">
                                <h2
                                    onClick={() => setRegion("asia")}
                                    className={`cursor-pointer transition-colors duration-300 ${region === "asia"
                                        ? "text-black"
                                        : "text-gray-400 hover:text-black"
                                        }`}
                                >
                                    ASIA-PACIFIC
                                </h2>

                                <h2
                                    onClick={() => setRegion("europe")}
                                    className={`cursor-pointer transition-colors duration-300 ${region === "europe"
                                        ? "text-black"
                                        : "text-gray-400 hover:text-black"
                                        }`}
                                >
                                    EUROPE
                                </h2>

                                <h2
                                    onClick={() => setRegion("na")}
                                    className={`cursor-pointer transition-colors duration-300 ${region === "na"
                                        ? "text-black"
                                        : "text-gray-400 hover:text-black"
                                        }`}
                                >
                                    NORTH AMERICA
                                </h2>
                            </div>

                            {/* RIGHT SIDE */}
                            <div
                                className={`${region === "asia"
                                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                                    : region === "europe"
                                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                                        : "flex flex-col space-y-6"
                                    } text-[16px] md:text-[18px] text-gray-600`}
                            >

                                {/* ASIA */}
                                {region === "asia" && (
                                    <>
                                        <p>Australia</p>
                                        <p>Hong Kong</p>
                                        <p>Japan</p>
                                        <p>New Zealand</p>
                                        <p>Singapore</p>
                                        <p>South Korea</p>
                                        <p>United Arab Emirates</p>
                                        <p>India</p>
                                    </>
                                )}

                                {/* EUROPE */}
                                {region === "europe" && (
                                    <>
                                        <p>Austria</p>
                                        <p>Belgium</p>
                                        <p>Bulgaria</p>
                                        <p>Croatia</p>
                                        <p>Cyprus</p>
                                        <p>Czech Republic</p>
                                        <p>Denmark</p>
                                        <p>Estonia</p>
                                        <p>Finland</p>
                                        <p>France</p>
                                        <p>Germany</p>
                                        <p>Greece</p>
                                        <p>Hungary</p>
                                        <p>Iceland</p>
                                        <p>Ireland</p>
                                        <p>Italy</p>
                                        <p>Latvia</p>
                                        <p>Lithuania</p>
                                        <p>Luxembourg</p>
                                        <p>Malta</p>
                                        <p>Netherlands</p>
                                        <p>Norway</p>
                                        <p>Poland</p>
                                        <p>Portugal</p>
                                        <p>Romania</p>
                                        <p>Slovakia</p>
                                        <p>Slovenia</p>
                                        <p>Spain</p>
                                        <p>Sweden</p>
                                        <p>Switzerland</p>
                                        <p>United Kingdom</p>
                                        <p>Türkiye</p>
                                    </>
                                )}

                                {/* NORTH AMERICA */}
                                {region === "na" && (
                                    <>
                                        <p>United States</p>
                                        <p>Canada</p>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= PRACTICE MADE PERFECT ================= */}
                <section className="bg-black text-white py-24 md:py-40">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-black uppercase">
                                Practice made perfect
                            </h2>

                            <p className="mt-8 text-gray-400 text-[15px] md:text-[17px] leading-[26px] md:leading-[30px] max-w-[560px]">
                                The world needs new and transformational ways to meet new and old challenges. And just as our engineering minds looked at the headsets that came before us and said: “We know there’s a better way”, our whole team looked at industries and workflows where we knew our technology, software integration and end-to-end customer support would be a game-changer, solving problems that in some cases weren’t considered solvable. By blending digital and physical worlds seamlessly, we are helping pioneering people, teams and nations to transform how industries work.
                            </p>

                            <p className="mt-8 text-gray-400 text-[15px] md:text-[17px] leading-[26px] md:leading-[30px] max-w-[560px]">
                                The use cases may be different, but the core need for all users is ultimately the same: to practice their craft, prepare for threats, push boundaries, make mistakes and make history in an environment that’s safe.
                            </p>

                            <a href="#"
                                className="inline-block mt-12 uppercase tracking-[2px] text-sm text-white hover:text-blue-500 transition-colors">
                                READ CUSTOMER STORIES →
                            </a>
                        </div>

                        <img src="/practice.jpg" className="w-full object-cover" />

                    </div>
                </section>

                {/* ================= PRESS KIT ================= */}
                <section className="bg-[#f5f5f5] py-24 md:py-40 text-center px-6">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-black uppercase">
                        Varjo Press Kit
                    </h2>

                    <p className="mt-6 text-gray-600 max-w-[700px] mx-auto">
                        See why Varjo is making headlines, get high resolution <br />
                        images taken through the Varjo headset, read our press <br />
                        releases, request an interview and more. It’s all here.
                    </p>

                    <button className="mt-10 bg-black text-white px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-blue-600">
                        Varjo for Media →
                    </button>
                </section>

                {/* ================= LATEST NEWS AND INSIGHTS ================= */}
                <section className="bg-[#f3f3f3] py-24 md:py-56">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">

                        {/* HEADER ROW */}
                        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] mb-16 md:mb-28 items-center gap-6">

                            <h2 className="uppercase tracking-[3px] text-xs font-medium">
                                LATEST NEWS AND INSIGHTS
                            </h2>

                            <a
                                href="https://varjo.com/news"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="uppercase tracking-[3px] text-xs transition-colors duration-300 hover:text-blue-600"
                            >
                                ALL ARTICLES →
                            </a>

                            <div></div>
                        </div>

                        {/* NEWS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-8 md:gap-12 lg:gap-16">

                            {/* LARGE FEATURED CARD */}
                            <a
                                href="https://varjo.com/news/varjo-launches-ready-to-deploy-xr-systems-for-secure-and-air-gapped-environments"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-[#e6e6e6] p-8 sm:p-12 lg:p-20 min-h-[320px] sm:min-h-[420px] lg:h-[520px] flex flex-col justify-between transition-all duration-300 hover:bg-blue-800"
                            >
                                <p className="text-sm text-gray-700 group-hover:text-white transition-colors duration-300">
                                    February 26, 2026
                                </p>

                                <div>
                                    <h3 className="uppercase font-extrabold text-[18px] sm:text-[20px] md:text-[22px] leading-6 md:leading-8 text-black group-hover:text-white transition-colors duration-300">
                                        VARJO LAUNCHES READY-TO-DEPLOY XR SYSTEMS FOR SECURE AND AIR-GAPPED ENVIRONMENTS
                                    </h3>

                                    <p className="mt-4 sm:mt-6 text-gray-700 text-[14px] sm:text-[15px] leading-5 md:leading-6 group-hover:text-white transition-colors duration-300">
                                        The bundle offering combines XR-4 Series headsets, certified workstations, and software into a single, deployable XR system suitable for air-gapped environments.
                                    </p>
                                </div>
                            </a>

                            {/* CARD 2 */}
                            <a
                                href="https://varjo.com/news/varjo-achieves-isoiec-270012022-certification"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-[#e6e6e6] p-8 sm:p-10 lg:p-16 min-h-[320px] sm:min-h-[420px] lg:h-[520px] flex flex-col justify-between transition-all duration-300 hover:bg-blue-800"
                            >
                                <p className="text-sm text-gray-700 group-hover:text-white transition-colors duration-300">
                                    January 21, 2026
                                </p>

                                <h3 className="uppercase font-extrabold text-[16px] sm:text-[18px] md:text-[20px] leading-6 md:leading-7 text-black group-hover:text-white transition-colors duration-300">
                                    VARJO ACHIEVES ISO/IEC 27001:2022 CERTIFICATION
                                </h3>
                            </a>

                            {/* CARD 3 */}
                            <a
                                href="https://varjo.com/news/varjo-releases-state-of-xr-in-simulation-training-report-adoption-moves-beyond-experimentation-as-forces-prioritize-realistic-multi-user-training"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-[#e6e6e6] p-8 sm:p-10 lg:p-16 min-h-[320px] sm:min-h-[420px] lg:h-[520px] flex flex-col justify-between transition-all duration-300 hover:bg-blue-800"
                            >
                                <p className="text-sm text-gray-700 group-hover:text-white transition-colors duration-300">
                                    December 3, 2025
                                </p>

                                <h3 className="uppercase font-extrabold text-[16px] sm:text-[18px] md:text-[20px] leading-6 md:leading-7 text-black group-hover:text-white transition-colors duration-300">
                                    VARJO RELEASES STATE OF XR IN SIMULATION TRAINING REPORT
                                </h3>
                            </a>

                        </div>
                    </div>
                </section>

            </div>
            <TalkToSalesCTA />
            <Footer />
        </div>
    );
}
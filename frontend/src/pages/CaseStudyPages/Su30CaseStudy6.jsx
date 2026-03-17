import RadarAvionics1 from "../../assets/RadarAvionics1.jpg";
import RadarAvionics from "../../assets/RadarAvionics.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
const Su30CaseStudy6 = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-black text-white">

                {/* ================= HERO ================= */}
                <section className="py-20 md:py-32 text-center px-6">
                    <p className="uppercase text-xs md:text-sm tracking-[3px] text-gray-400">
                        Defense Case Study
                    </p>

                    <h1 className="mt-6 md:mt-8 
                         text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] 
                         font-extrabold uppercase 
                         leading-[1.2] md:leading-[1.15] 
                         max-w-[760px] mx-auto">
                        Su-30MKI Radar <br />
                        Modernization & <br />
                        Virupaksha AESA <br />
                        Upgrade Program
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-300 max-w-[620px] mx-auto">
                        To maintain combat superiority in modern air warfare, India is upgrading the Su-30MKI fleet with the Virupaksha AESA radar, replacing the older Bars radar system with advanced sensor technology.
                    </p>
                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">
                        <img
                            src={RadarAvionics1}
                            alt="Su-30MKI radar system"
                            className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                        />
                    </div>
                </section>


                {/* ================= OVERVIEW ================= */}
                <section className="py-16 md:py-24 px-6">
                    <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-300">

                        <p>
                            Although the <strong className="text-white">Su-30MKI</strong> remains one of the most capable multirole fighter aircraft in service, its original radar system was designed more than two decades ago.
                        </p>

                        <p>
                            Modern aerial warfare increasingly involves stealth aircraft, electronic warfare systems, long-range missiles, and network-centric combat operations.
                        </p>

                        <p>
                            These developments revealed limitations in the aircraft’s older radar system, leading India to launch a major modernization program to integrate the
                            <strong className="text-white"> Virupaksha AESA radar</strong> as part of the Super Sukhoi upgrade initiative.
                        </p>

                    </div>
                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">
                        <img
                            src={RadarAvionics}
                            alt="fighter radar system"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                        />
                    </div>
                </section>


                {/* ================= RADAR LIMITATIONS ================= */}
                <section className="py-16 md:py-24 px-6">
                    <div className="max-w-[760px] mx-auto space-y-6 text-gray-300">

                        <h3 className="font-bold text-xl text-white">
                            Limitations of the Older Radar System
                        </h3>

                        <p>
                            The original Su-30MKI radar, the <strong className="text-white">N011M Bars PESA radar</strong>, was considered highly advanced when introduced but now faces challenges against modern combat systems.
                        </p>

                        <p>
                            The radar is capable of:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Tracking approximately 15 airborne targets</li>
                            <li>Engaging about 4 targets simultaneously</li>
                            <li>Detecting large targets at ranges up to roughly 350 km</li>
                        </ul>

                        <p>
                            However, modern fighters equipped with stealth technology, electronic jamming systems, and long-range sensor networks can reduce the effectiveness of traditional radar systems.
                        </p>

                    </div>
                </section>


                {/* ================= VIRUPAKSHA RADAR ================= */}
                <section className="py-16 px-6">
                    <div className="max-w-[760px] mx-auto space-y-6 text-gray-300">

                        <h3 className="font-bold text-xl text-white">
                            The Virupaksha AESA Radar Upgrade
                        </h3>

                        <p>
                            To overcome these limitations, India is developing the <strong className="text-white">Virupaksha Active Electronically Scanned Array (AESA) radar</strong> for the Su-30MKI.
                        </p>

                        <p>
                            The radar is being developed by the <strong className="text-white">Electronics and Radar Development Establishment (LRDE)</strong> under DRDO, with support from Indian defense companies.
                        </p>

                        <ul className="list-disc pl-6 space-y-3">

                            <li>Significantly improved target detection capability</li>

                            <li>Simultaneous tracking of multiple targets</li>

                            <li>Improved resistance to electronic warfare and jamming</li>

                            <li>Rapid electronic beam steering</li>

                            <li>Enhanced battlefield awareness and situational awareness</li>

                        </ul>

                        <p>
                            With this upgrade, the Su-30MKI will evolve into a <strong className="text-white">“Super Sukhoi” 4.5+ generation fighter</strong>.
                        </p>

                    </div>
                </section>


                {/* ================= MODERNIZATION PLAN ================= */}
                <section className="py-16 px-6">
                    <div className="max-w-[760px] mx-auto space-y-6 text-gray-300">

                        <h3 className="font-bold text-xl text-white">
                            Large-Scale Modernization Plan
                        </h3>

                        <p>
                            The radar upgrade forms part of a broader modernization program designed to extend the operational capability of the Su-30MKI fleet.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Upgrade of 84 aircraft during the first phase</li>

                            <li>Long-term plan to modernize more than 200 Su-30MKI aircraft</li>

                            <li>Integration of new electronic warfare systems</li>

                            <li>Improved infrared search and track sensors</li>

                            <li>Modernized digital cockpit displays</li>

                        </ul>

                    </div>
                </section>


                {/* ================= STRATEGIC IMPORTANCE ================= */}
                <section className="py-16 px-6">
                    <div className="max-w-[760px] mx-auto space-y-6 text-gray-300">

                        <h3 className="font-bold text-xl text-white">
                            Strategic Importance
                        </h3>

                        <p>
                            The radar upgrade is essential for maintaining air superiority against advanced fighter aircraft and modern air defense systems.
                        </p>

                        <p>
                            With the Virupaksha AESA radar, the Su-30MKI will be able to:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Detect stealth targets at longer ranges</li>

                            <li>Guide long-range air-to-air missiles more effectively</li>

                            <li>Operate in network-centric combat environments</li>

                        </ul>

                    </div>
                </section>


                {/* ================= LESSONS ================= */}
                <section className="py-16 px-6">
                    <div className="max-w-[760px] mx-auto space-y-6 text-gray-300">

                        <h3 className="font-bold text-xl text-white">
                            Lessons from the Radar Modernization Program
                        </h3>

                        <ul className="list-disc pl-6 space-y-3">

                            <li>Avionics upgrades are essential for extending aircraft service life</li>

                            <li>Electronic warfare capability is increasingly critical in modern air combat</li>

                            <li>Software-defined sensors provide flexibility for future upgrades</li>

                        </ul>

                    </div>
                </section>


                {/* ================= RELATED CASE STUDIES ================= */}
                <section className="py-20 md:py-32 px-6 md:px-16">

                    <h2 className="uppercase tracking-[3px] text-xs md:text-sm mb-12 text-gray-400">
                        More Defense Case Studies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

                        <div className="group bg-[#111] p-16 min-h-[380px] hover:bg-blue-800 transition">
                            <p className="text-sm group-hover:text-white text-gray-400">Case Study</p>
                            <h3 className="uppercase font-extrabold text-[20px] group-hover:text-white">
                                SUPER SUKHOI MODERNIZATION
                            </h3>
                        </div>

                        <div className="group bg-[#111] p-16 min-h-[380px] hover:bg-blue-800 transition">
                            <p className="text-sm group-hover:text-white text-gray-400">Case Study</p>
                            <h3 className="uppercase font-extrabold text-[20px] group-hover:text-white">
                                ENGINE REPLACEMENT PROGRAM
                            </h3>
                        </div>

                        <div className="group bg-[#111] p-16 min-h-[380px] hover:bg-blue-800 transition">
                            <p className="text-sm group-hover:text-white text-gray-400">Case Study</p>
                            <h3 className="uppercase font-extrabold text-[20px] group-hover:text-white">
                                PILOT TRAINING & SIMULATOR SAFETY
                            </h3>
                        </div>

                    </div>

                </section>

            </div>
            <Footer />

        </div>
    )
}

export default Su30CaseStudy6
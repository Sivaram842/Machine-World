import SuperSukhoi1 from "../../assets/SuperSukhoi1.jpg";
import SuperSukhoi2 from "../../assets/SuperSukhoi2.jpg";
import SuperSukoi from "../../assets/SuperSukoi.png";
const Su30CaseStudy2 = () => {
    return (
        <div className="bg-[#f3f3f3] text-black">

            {/* ================= HERO ================= */}
            <section className="py-20 md:py-32 text-center px-6">
                <p className="uppercase text-xs md:text-sm tracking-[3px] text-gray-600">
                    Defense Case Study
                </p>

                <h1 className="mt-6 md:mt-8 
                   text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] 
                   font-extrabold uppercase 
                   leading-[1.2] md:leading-[1.15] 
                   max-w-[760px] mx-auto">
                    Super Sukhoi <br />
                    Modernization <br />
                    Program for <br />
                    Upgrading the <br />
                    Su-30MKI Fleet
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    India’s Super Sukhoi program is a large-scale modernization initiative designed to upgrade more than 250 Su-30MKI fighter aircraft with next-generation radar, avionics, electronic warfare systems, and advanced weapon capabilities.
                </p>
            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">
                    <img
                        src={SuperSukhoi1}
                        alt="Super Sukhoi modernization program"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />
                </div>
            </section>


            {/* ================= FIRST CONTENT BLOCK ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The <strong>Super Sukhoi modernization program</strong> was initiated to ensure that the Su-30MKI continues to remain one of the most capable fighter aircraft in the Indian Air Force inventory.
                    </p>

                    <p>
                        With more than <strong>250 aircraft in service</strong>, the Su-30MKI forms the backbone of India's air superiority and long-range strike capability. The modernization effort focuses on improving radar performance, avionics systems, electronic warfare capability, and weapon integration.
                    </p>

                    <p>
                        The goal of the program is to significantly enhance combat effectiveness while extending the aircraft’s operational life well into the <strong>2040s</strong>.
                    </p>

                </div>
            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">
                    <img
                        src={SuperSukhoi2}
                        alt="Su-30MKI AESA radar upgrade"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />
                </div>
            </section>


            {/* ================= BULLET SECTION ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The Super Sukhoi upgrade introduces several critical technological improvements across radar, avionics, electronic warfare systems, and cockpit architecture:
                    </p>

                    <ul className="space-y-2 md:space-y-3 list-disc pl-6">
                        <li>Integration of the Virupaksha AESA radar with detection ranges exceeding 400 km</li>
                        <li>Capability to track and engage multiple airborne targets simultaneously</li>
                        <li>Advanced electronic warfare systems including radar jamming and missile warning systems</li>
                        <li>Improved countermeasure deployment for enhanced survivability</li>
                        <li>Upgraded digital cockpit with large multifunction displays</li>
                        <li>Integration of long-range air-to-air missiles and precision-guided weapons</li>
                    </ul>

                </div>
            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[900px] mx-auto">
                    <img
                        src={SuperSukoi}
                        alt="Modernized Su-30MKI cockpit"
                        className="w-full object-contain"
                    />
                </div>
            </section>


            {/* ================= FINAL CONTENT ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        One of the most visible improvements is the modernization of the aircraft’s cockpit, providing pilots with enhanced situational awareness through large multifunction displays and advanced digital flight management systems.
                    </p>

                    <p>
                        The upgraded Su-30MKI will also support <strong>network-centric warfare operations</strong>, enabling real-time information sharing with other aircraft, command centers, and ground-based radar systems.
                    </p>

                    <p>
                        These improvements ensure that the Su-30MKI remains competitive against modern threats including stealth aircraft, advanced electronic warfare platforms, and long-range missile systems.
                    </p>

                    <ul className="space-y-2 font-medium">
                        <li>Operational life extended until the 2040s</li>
                        <li>Significant improvement in air combat capability</li>
                        <li>Enhanced survivability in modern electronic warfare environments</li>
                    </ul>

                </div>
            </section>


            {/* ================= SEE LATEST UPDATES ================= */}
            <section className="py-20 md:py-32 px-6 md:px-16">
                <h2 className="uppercase tracking-[3px] text-xs md:text-sm mb-10 md:mb-12">
                    More Defense Case Studies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

                    {/* LARGE CARD */}
                    <div className="group bg-[#e6e6e6] p-8 md:p-20 min-h-[380px] md:h-[520px] flex flex-col justify-between transition-all duration-300 hover:bg-blue-800">
                        <p className="text-sm text-gray-700 group-hover:text-white">
                            Case Study
                        </p>

                        <div>
                            <h3 className="uppercase font-extrabold text-[18px] md:text-[22px] leading-7 md:leading-8 group-hover:text-white">
                                BRAHMOS INTEGRATION WITH SU-30MKI
                            </h3>

                            <p className="mt-4 md:mt-6 text-[14px] md:text-[15px] group-hover:text-white">
                                Transforming the Su-30MKI into a long-range supersonic strike platform.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="group bg-[#e6e6e6] p-8 md:p-16 min-h-[380px] md:h-[520px] flex flex-col justify-between transition-all duration-300 hover:bg-blue-800">
                        <p className="text-sm text-gray-700 group-hover:text-white">
                            Case Study
                        </p>
                        <h3 className="uppercase font-extrabold text-[18px] md:text-[20px] leading-7 group-hover:text-white">
                            SUPER SUKHOI MODERNIZATION PROGRAM
                        </h3>
                    </div>

                    {/* CARD 3 */}
                    <div className="group bg-[#e6e6e6] p-8 md:p-16 min-h-[380px] md:h-[520px] flex flex-col justify-between transition-all duration-300 hover:bg-blue-800">
                        <p className="text-sm text-gray-700 group-hover:text-white">
                            Case Study
                        </p>
                        <h3 className="uppercase font-extrabold text-[18px] md:text-[20px] leading-7 group-hover:text-white">
                            ASTRA MISSILE INTEGRATION WITH TEJAS
                        </h3>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Su30CaseStudy2
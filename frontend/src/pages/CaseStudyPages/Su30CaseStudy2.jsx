import SuperSukhoi1 from "../../assets/SuperSukhoi1.jpg";
import SuperSukhoi2 from "../../assets/SuperSukhoi2.jpg";
import SuperSukoi from "../../assets/SuperSukoi.png";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
const Su30CaseStudy2 = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-black text-white">

                {/* ================= HERO ================= */}
                <section className="py-20 md:py-32 text-center px-6">

                    <p className="uppercase text-xs md:text-sm tracking-[3px] text-gray-500">
                        Defense Case Study
                    </p>

                    <h1 className="mt-6 md:mt-8 
                          text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] 
                          font-extrabold uppercase 
                          leading-[1.15] 
                          max-w-[820px] mx-auto">

                        Super Sukhoi <br />
                        Modernization Program
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        A large-scale upgrade transforming the Su-30MKI fleet with next-generation
                        radar, avionics, and electronic warfare capabilities.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={SuperSukhoi1}
                            alt="Super Sukhoi"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= CONTENT ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                       text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">Super Sukhoi program</strong> ensures
                            the <strong className="text-white">Su-30MKI</strong> remains a dominant
                            fighter platform in the Indian Air Force.
                        </p>

                        <p>
                            With over <strong className="text-white">250 aircraft</strong>,
                            it forms the backbone of India’s air power.
                        </p>

                        <p>
                            The upgrade focuses on radar, avionics, weapons, and survivability,
                            extending service life into the <strong className="text-white">2040s</strong>.
                        </p>

                    </div>

                </section>


                {/* ================= IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={SuperSukhoi2}
                            alt="AESA upgrade"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg"
                        />

                    </div>

                </section>


                {/* ================= TECH ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                       text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Key Upgrades
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Virupaksha AESA radar (400+ km detection)</li>
                            <li>Multi-target tracking capability</li>
                            <li>Advanced electronic warfare systems</li>
                            <li>Improved countermeasures</li>
                            <li>Glass cockpit with large MFDs</li>
                            <li>Integration of modern long-range missiles</li>
                        </ul>

                    </div>

                </section>


                {/* ================= IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={SuperSukoi}
                            alt="Cockpit upgrade"
                            className="w-full object-contain rounded-2xl shadow-lg"
                        />

                    </div>

                </section>


                {/* ================= FINAL ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                       text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Strategic Impact
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Operational life extended to 2040s</li>
                            <li>Improved combat effectiveness</li>
                            <li>Enhanced survivability</li>
                            <li>Network-centric warfare capability</li>
                        </ul>

                        <p>
                            This upgrade ensures the Su-30MKI remains competitive against
                            modern threats including stealth fighters and advanced EW systems.
                        </p>

                    </div>

                </section>


                {/* ================= CARDS ================= */}
                <section className="py-20 md:py-32 px-6 md:px-16">

                    <h2 className="uppercase tracking-[3px] text-xs md:text-sm mb-12 text-gray-500">
                        More Case Studies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="group bg-[#111] p-10 h-[420px] flex flex-col justify-between hover:bg-blue-900 transition duration-300 rounded-2xl">
                            <p className="text-sm text-gray-400 group-hover:text-white">
                                Case Study
                            </p>
                            <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                BrahMos Integration
                            </h3>
                        </div>

                        <div className="group bg-[#111] p-10 h-[420px] flex items-center hover:bg-blue-900 transition duration-300 rounded-2xl">
                            <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                Super Sukhoi Program
                            </h3>
                        </div>

                        <div className="group bg-[#111] p-10 h-[420px] flex items-center hover:bg-blue-900 transition duration-300 rounded-2xl">
                            <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                Astra + Tejas Integration
                            </h3>
                        </div>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    )
}

export default Su30CaseStudy2
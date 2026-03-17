import Brahmos1 from "../../assets/Brahmos1.jpg";
import Brahmos2 from "../../assets/Brahmos2.jpg";
import BrahmosIntegration from "../../assets/BrahmosIntegration.png";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
const Su30CaseStudy1 = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-black text-white">

                {/* ================= HERO ================= */}
                <section className="py-20 md:py-32 text-center px-6">

                    <p className="uppercase text-xs md:text-sm tracking-[3px] text-gray-500">
                        Case Study
                    </p>

                    <h1 className="mt-6 md:mt-8 
                           text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] 
                           font-extrabold uppercase 
                           leading-[1.15] 
                           max-w-[820px] mx-auto">

                        BrahMos Missile <br />
                        Integration with <br />
                        Su-30MKI Fighter
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        One of the most powerful air-launched strike capabilities, enabling
                        supersonic precision attacks against high-value targets.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Brahmos1}
                            alt="Su-30MKI BrahMos"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= CONTENT ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                       text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">BrahMos supersonic cruise missile</strong> integration
                            with the <strong className="text-white">Su-30MKI</strong> marked a major leap in India's
                            air power, converting the aircraft into a long-range precision strike platform.
                        </p>

                        <p>
                            The program was executed by <strong className="text-white">DRDO</strong>,
                            <strong className="text-white"> HAL</strong>,
                            <strong className="text-white"> BrahMos Aerospace</strong>, and the
                            <strong className="text-white"> Indian Air Force</strong>.
                        </p>

                        <p>
                            Engineers redesigned the missile for air launch and ensured safe
                            release at high speed without compromising aircraft stability.
                        </p>

                    </div>

                </section>


                {/* ================= IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Brahmos2}
                            alt="BrahMos testing"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-contain rounded-2xl shadow-lg"
                        />

                    </div>
                </section>


                {/* ================= TECH SECTION ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                       text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Engineering Challenges
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Structural reinforcement for 2.5-ton payload</li>
                            <li>Heavy-duty weapon mounting system</li>
                            <li>Flight control software redesign</li>
                            <li>Mission computer integration</li>
                            <li>Aerodynamic stability testing</li>
                            <li>100+ aircraft modifications</li>
                        </ul>

                    </div>

                </section>


                {/* ================= IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={BrahmosIntegration}
                            alt="BrahMos integration"
                            className="w-full object-contain rounded-2xl shadow-lg"
                        />

                    </div>

                </section>


                {/* ================= PERFORMANCE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                       text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Strike Capability
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Supersonic speed ~ Mach 3</li>
                            <li>Stand-off range: 300–500 km</li>
                            <li>Precision strike on land & naval targets</li>
                        </ul>

                        <p>
                            This combination significantly enhances India’s strategic
                            deterrence and maritime strike capability.
                        </p>

                    </div>

                </section>


                {/* ================= CARDS ================= */}
                <section className="py-20 md:py-32 px-6 md:px-16">

                    <h2 className="uppercase tracking-[3px] text-xs md:text-sm mb-12 text-gray-500">
                        More Case Studies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* CARD */}
                        <div className="group bg-[#111] p-10 h-[420px] flex flex-col justify-between hover:bg-blue-900 transition duration-300 rounded-2xl">

                            <p className="text-sm text-gray-400 group-hover:text-white">
                                Case Study
                            </p>

                            <div>
                                <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                    BrahMos Integration with Su-30MKI
                                </h3>

                                <p className="mt-4 text-sm text-gray-400 group-hover:text-white">
                                    Supersonic strike transformation.
                                </p>
                            </div>

                        </div>

                        {/* CARD */}
                        <div className="group bg-[#111] p-10 h-[420px] flex items-center hover:bg-blue-900 transition duration-300 rounded-2xl">
                            <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                Astra Missile with Tejas
                            </h3>
                        </div>

                        {/* CARD */}
                        <div className="group bg-[#111] p-10 h-[420px] flex items-center hover:bg-blue-900 transition duration-300 rounded-2xl">
                            <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                Rafale Meteor Warfare
                            </h3>
                        </div>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    )
}

export default Su30CaseStudy1
import Rafale2 from "../../assets/Rafale2.jpg";
import Rafale21 from "../../assets/Rafale2-1.jpg";
import Rafale22 from "../../assets/Rafale2-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function RafaleCaseStudy2() {
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
               text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] 
               font-extrabold uppercase 
               leading-[1.15] 
               max-w-[780px] mx-auto">

                        Rafale in Combat <br />
                        Operations – Libya <br />
                        and Middle East
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        Rafale proved its real combat capability during the 2011 Libya conflict,
                        executing air superiority, strike, and reconnaissance missions.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale2}
                            alt="Rafale combat mission"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">Dassault Rafale</strong> saw
                            its first major combat deployment during the
                            <strong className="text-white"> 2011 Libya conflict</strong>.
                        </p>

                        <p>
                            Rafale aircraft were among the first deployed by the
                            French Air and Space Force in the international intervention.
                        </p>

                        <p>
                            These operations validated Rafale’s performance in real combat
                            environments including hostile air defenses and complex strike missions.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale21}
                            alt="Rafale combat operations"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= MISSIONS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Mission Roles
                        </h2>

                        <ul className="space-y-2 list-disc pl-6">
                            <li>Air superiority patrols</li>
                            <li>Precision strike missions</li>
                            <li>ISR (Intelligence, Surveillance, Reconnaissance)</li>
                            <li>Suppression of enemy air defenses</li>
                        </ul>

                        <p>
                            Rafale’s <strong className="text-white">omnirole capability</strong>
                            allowed pilots to switch missions within a single sortie.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale22}
                            alt="Rafale weapons and sensors"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= ADVANTAGES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Key Operational Advantages
                        </h2>

                        <ul className="space-y-2 list-disc pl-6">
                            <li>Advanced sensor fusion</li>
                            <li>SPECTRA electronic warfare system</li>
                            <li>Missile warning and countermeasures</li>
                            <li>High-precision strike capability</li>
                        </ul>

                    </div>

                </section>


                {/* ================= RESULTS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Results
                        </h2>

                        <ul className="space-y-2 list-disc pl-6">
                            <li>High reliability in combat conditions</li>
                            <li>Strong survivability through EW systems</li>
                            <li>Multi-mission capability in single sortie</li>
                            <li>Boosted global reputation and exports</li>
                        </ul>

                        <p>
                            The Libya campaign firmly established Rafale as a proven
                            combat-capable multirole fighter.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
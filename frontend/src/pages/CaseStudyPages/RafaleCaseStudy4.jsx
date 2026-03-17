import Rafale4 from "../../assets/Rafale4.jpg";
import Rafale41 from "../../assets/Rafale4-1.jpg";
import Rafale42 from "../../assets/Rafale4-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function RafaleCaseStudy4() {
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

                        Rafale Carrier <br />
                        Operations – <br />
                        French Navy
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        Rafale M operates from aircraft carriers, delivering powerful
                        naval air capability for the French Navy.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale4}
                            alt="Rafale M carrier operations"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The naval variant of the
                            <strong className="text-white"> Dassault Rafale</strong>,
                            known as <strong className="text-white">Rafale M</strong>,
                            operates from the aircraft carrier
                            <strong className="text-white"> Charles de Gaulle</strong>.
                        </p>

                        <p>
                            It serves as the primary carrier-based fighter of the French Navy.
                        </p>

                        <p>
                            Carrier operations require specialized engineering due to short
                            runways and moving decks.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale41}
                            alt="Rafale M catapult launch"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= DESIGN ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Naval Design Modifications
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Strengthened landing gear</li>
                            <li>Reinforced airframe</li>
                            <li>Enhanced durability for deck operations</li>
                        </ul>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale42}
                            alt="Rafale M arrested landing"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= SYSTEMS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8 
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Carrier Operation Systems
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">
                            Arrestor Hook System
                        </h3>

                        <p>
                            Enables rapid deceleration by catching arrestor cables on landing.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">
                            Catapult Launch System
                        </h3>

                        <p>
                            Uses carrier catapult systems to achieve takeoff speed within short distances.
                        </p>

                    </div>

                </section>


                {/* ================= PERFORMANCE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Performance
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Maritime strike capability</li>
                            <li>Fleet air defense</li>
                            <li>Reconnaissance missions</li>
                        </ul>

                        <p>
                            Rafale M carries advanced air-to-air and anti-ship weapons.
                        </p>

                    </div>

                </section>


                {/* ================= STRATEGIC ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Strategic Significance
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Protection of naval fleets</li>
                            <li>Support for global missions</li>
                            <li>Power projection capability</li>
                        </ul>

                        <p>
                            Rafale M enables France to project air power far beyond its borders.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
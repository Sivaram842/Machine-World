import Mig29K1 from "../../assets/Mig29K-1.jpg";
import Mig29K11 from "../../assets/Mig29K-1-1.jpg";
import Mig29K12 from "../../assets/Mig29K-1-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29KCaseStudy1() {
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

                        Development of MiG-29K <br />
                        for Aircraft Carrier <br />
                        Operations
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        The MiG-29K is a naval variant designed for carrier operations,
                        enabling high-performance fighter deployment at sea.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K1}
                            alt="MiG-29K carrier fighter aircraft"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>

                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">MiG-29K</strong> is the naval variant of the MiG-29
                            developed by the <strong className="text-white">Mikoyan Design Bureau</strong>.
                        </p>

                        <p>
                            It is engineered for aircraft carrier operations, handling
                            challenges such as short takeoff distances, moving decks,
                            and harsh maritime environments.
                        </p>

                        <p>
                            The aircraft entered service with the
                            <strong className="text-white"> Indian Navy</strong> and
                            <strong className="text-white"> Russian Navy</strong>.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K11}
                            alt="MiG-29K carrier landing"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>

                {/* ================= ENGINEERING ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Key Engineering Modifications
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">
                            Reinforced Landing Gear
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Strengthened landing gear for carrier impact</li>
                            <li>Reinforced fuselage structure</li>
                            <li>Shock absorption systems</li>
                        </ul>


                        <h3 className="font-semibold text-[18px] text-white">
                            Arrestor Hook System
                        </h3>

                        <p>
                            A tail hook engages arrestor cables, enabling rapid deceleration
                            on short carrier decks.
                        </p>


                        <h3 className="font-semibold text-[18px] text-white">
                            Folding Wings
                        </h3>

                        <p>
                            Folding wings reduce storage footprint on crowded carrier decks.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K12}
                            alt="MiG-29K cockpit avionics"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= CORROSION ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Corrosion Protection
                        </h2>

                        <p>
                            Maritime environments expose aircraft to saltwater corrosion,
                            requiring specialized protection systems.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Corrosion-resistant materials</li>
                            <li>Protective surface coatings</li>
                        </ul>

                    </div>

                </section>


                {/* ================= PERFORMANCE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Performance Characteristics
                        </h2>

                        <p>
                            Powered by <strong className="text-white">RD-33MK engines</strong>,
                            the MiG-29K delivers strong performance in naval operations.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Maximum speed ~ Mach 2</li>
                            <li>High climb performance</li>
                            <li>Strong thrust for short takeoff</li>
                        </ul>

                        <p>
                            Enhanced avionics and radar improve combat effectiveness.
                        </p>

                    </div>

                </section>


                {/* ================= STRATEGIC ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Strategic Importance
                        </h2>

                        <p>
                            The MiG-29K enables naval air power projection far from mainland bases.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Extended air defense coverage</li>
                            <li>Fleet protection</li>
                            <li>Maritime strike capability</li>
                        </ul>

                        <p>
                            This capability significantly enhances naval operational reach.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
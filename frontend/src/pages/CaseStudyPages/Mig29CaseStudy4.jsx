import Mig294 from "../../assets/Mig29-4.jpg";
import Mig2941 from "../../assets/Mig29-4-1.jpg";
import Mig2942 from "../../assets/Mig29-4-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29CaseStudy4() {
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

                        MiG-29 Naval Operations <br />
                        Carrier-Based Fighter <br />
                        MiG-29K
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        The MiG-29K is the naval variant of the MiG-29 designed for
                        aircraft carrier operations and serves as the primary
                        carrier-based fighter aircraft of the Indian Navy.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[1100px] mx-auto">

                        <img
                            src={Mig294}
                            alt="MiG-29K carrier fighter"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">MiG-29K</strong> is the naval version of the
                            MiG-29 fighter aircraft designed specifically for
                            aircraft carrier operations.
                        </p>

                        <p>
                            The aircraft operates with the
                            <strong className="text-white"> Indian Navy</strong> from carriers such as:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>INS Vikramaditya</li>
                            <li>INS Vikrant</li>
                        </ul>

                        <p>
                            Carrier-based aircraft operate under extreme conditions,
                            including short takeoff distances and constantly moving decks.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[1100px] mx-auto">

                        <img
                            src={Mig2941}
                            alt="MiG-29K carrier launch"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= DESIGN MODIFICATIONS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Design Modifications for Naval Use
                        </h2>

                        <p>
                            Carrier operations require major structural modifications compared with land-based fighters.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">Strengthened Structure</h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Reinforced landing gear for heavy carrier landings</li>
                            <li>Corrosion-resistant materials for maritime environments</li>
                        </ul>

                        <h3 className="font-semibold text-[18px] text-white">Arrestor Hook</h3>

                        <p>
                            A tail hook engages arrestor cables on the deck, allowing rapid deceleration
                            within extremely short landing distances.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">Folding Wings</h3>

                        <p>
                            Folding wings optimize storage efficiency on crowded aircraft carrier decks.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[900px] mx-auto">

                        <img
                            src={Mig2942}
                            alt="MiG-29K cockpit and avionics"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= OPERATIONAL ROLES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Roles
                        </h2>

                        <p>
                            The MiG-29K performs critical naval combat missions:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Fleet air defense</li>
                            <li>Maritime strike operations</li>
                            <li>Anti-ship missile attacks</li>
                            <li>Reconnaissance missions</li>

                        </ul>

                        <p>
                            It carries a wide range of weapons including anti-ship missiles,
                            guided bombs, and advanced air-to-air systems.
                        </p>

                    </div>

                </section>


                {/* ================= STRATEGIC IMPORTANCE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Strategic Importance
                        </h2>

                        <p>
                            Carrier-based MiG-29K fighters enable India to project air power far beyond its mainland.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Protection of naval fleets</li>
                            <li>Extended air defense coverage</li>
                            <li>Power projection across the Indian Ocean region</li>

                        </ul>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
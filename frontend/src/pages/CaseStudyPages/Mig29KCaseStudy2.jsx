import Mig29K2 from "../../assets/Mig29K-2.jpg";
import Mig29K21 from "../../assets/Mig29K-2-1.jpg";
import Mig29K22 from "../../assets/Mig29K-2-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29KCaseStudy2() {
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

                        MiG-29K Operations <br />
                        in the Indian Navy
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        The MiG-29K serves as the primary carrier-based fighter of the
                        Indian Navy, providing air superiority, strike capability,
                        and fleet defense.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K2}
                            alt="MiG-29K Indian Navy fighter"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">MiG-29K</strong> forms the backbone of
                            carrier-based aviation in the
                            <strong className="text-white"> Indian Navy</strong>.
                        </p>

                        <p>
                            These aircraft operate from carriers such as:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>INS Vikramaditya</li>
                            <li>INS Vikrant</li>
                        </ul>

                        <p>
                            They provide air superiority and strike capability across the
                            Indian Ocean region.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K21}
                            alt="MiG-29K carrier operations"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= ROLES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Roles
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">Fleet Air Defense</h3>
                        <p>
                            Intercepts incoming threats to protect carrier strike groups.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">Maritime Strike</h3>
                        <p>
                            Launches anti-ship missiles against hostile naval targets.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">Air Superiority</h3>
                        <p>
                            Engages enemy aircraft to control airspace over naval forces.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">Reconnaissance</h3>
                        <p>
                            Conducts surveillance and intelligence gathering missions.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K22}
                            alt="MiG-29K weapons and avionics"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= WEAPONS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Weapons Capability
                        </h2>

                        <p>
                            The MiG-29K supports a wide range of weapon systems:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Air-to-air missiles</li>
                            <li>Anti-ship missiles</li>
                            <li>Precision-guided bombs</li>
                            <li>Unguided rockets</li>
                        </ul>

                    </div>

                </section>


                {/* ================= ADVANTAGES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Carrier Operation Advantages
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>High thrust for ski-jump takeoff</li>
                            <li>Reinforced landing gear</li>
                            <li>Folding wings for deck storage</li>
                            <li>Modern multirole avionics</li>
                        </ul>

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
                            The MiG-29K is central to India's maritime defense strategy.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Carrier protection</li>
                            <li>Extended naval air reach</li>
                            <li>Rapid maritime response</li>
                        </ul>

                        <p>
                            It enables power projection across the Indian Ocean region.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
import Mig295 from "../../assets/Mig29-5.jpg";
import Mig2951 from "../../assets/Mig29-5-1.jpg";
import Mig2952 from "../../assets/Mig29-5-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29CaseStudy5() {
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

                        MiG-29 Dogfight Capability <br />
                        and Air Combat <br />
                        Maneuverability
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        The MiG-29 is widely recognized for its exceptional agility in
                        close-range air combat, enabled by aerodynamic design and powerful engines.
                    </p>

                </section>


                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig295}
                            alt="MiG-29K carrier fighter"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            One of the most defining characteristics of the
                            <strong className="text-white"> Mikoyan MiG-29</strong> is its
                            exceptional maneuverability in close-range dogfights.
                        </p>

                        <p>
                            Soviet design philosophy emphasized
                            <strong className="text-white"> within-visual-range combat</strong>,
                            where agility, rapid targeting, and pilot reaction time determine success.
                        </p>

                        <p>
                            The MiG-29 was engineered with aerodynamic precision and
                            powerful propulsion to execute aggressive combat maneuvers.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig2951}
                            alt="MiG-29K carrier launch"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>

                {/* ================= MANEUVERABILITY FEATURES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Key Maneuverability Features
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">
                            High Thrust-to-Weight Ratio
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Rapid acceleration</li>
                            <li>Fast climb rates</li>
                            <li>Superior turning performance</li>
                        </ul>

                        <p>
                            Enabled by twin <strong className="text-white">RD-33 turbofan engines</strong>.
                        </p>


                        <h3 className="font-semibold text-[18px] text-white">
                            Leading-Edge Root Extensions (LERX)
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Improved lift at high angles of attack</li>
                            <li>Better low-speed control</li>
                            <li>Enhanced turning capability</li>
                        </ul>


                        <h3 className="font-semibold text-[18px] text-white">
                            High Angle-of-Attack Capability
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Tight turning maneuvers</li>
                            <li>Rapid nose-pointing</li>
                            <li>Extreme pitch control</li>
                        </ul>

                    </div>

                </section>


                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig2952}
                            alt="MiG-29K cockpit and avionics"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>

                {/* ================= COBRA MANEUVER ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Cobra-Style Maneuvers
                        </h2>

                        <p>
                            While famously associated with the Su-27, the MiG-29 can perform cobra-style maneuvers.
                        </p>

                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Sudden nose-up pitch to extreme angle</li>
                            <li>Rapid loss of airspeed</li>
                            <li>Quick recovery to normal flight</li>
                        </ol>

                        <p>
                            This demonstrates exceptional aerodynamic control and pilot authority.
                        </p>

                    </div>

                </section>


                {/* ================= TACTICAL PURPOSE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Tactical Purpose
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Force enemy overshoot</li>
                            <li>Rapid repositioning for attack</li>
                            <li>Demonstrate control limits</li>
                        </ul>

                    </div>

                </section>


                {/* ================= OPERATIONAL ADVANTAGES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Advantages
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Close-range air combat superiority</li>
                            <li>Effective interception capability</li>
                            <li>Strong defensive performance</li>
                        </ul>

                        <p>
                            The MiG-29 earned respect globally for its agility and combat performance
                            during international air combat exercises.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
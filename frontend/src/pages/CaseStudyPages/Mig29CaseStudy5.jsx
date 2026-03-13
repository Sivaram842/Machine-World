import Mig295 from "../../assets/Mig29-5.jpg";
import Mig2951 from "../../assets/Mig29-5-1.jpg";
import Mig2952 from "../../assets/Mig29-5-2.jpg";

export default function Mig29CaseStudy5() {
    return (
        <div className="bg-[#f3f3f3] text-black">

            {/* ================= HERO ================= */}
            <section className="py-20 md:py-32 text-center px-6">

                <p className="uppercase text-xs md:text-sm tracking-[3px] text-gray-600">
                    Case Study
                </p>

                <h1 className="mt-6 md:mt-8 
        text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] 
        font-extrabold uppercase 
        leading-[1.2] md:leading-[1.15] 
        max-w-[760px] mx-auto">

                    MiG-29 Dogfight Capability <br />
                    and Air Combat <br />
                    Maneuverability
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The MiG-29 is widely recognized for its exceptional agility in
                    close-range air combat. Its aerodynamic design and powerful engines
                    allow pilots to perform extreme maneuvers during dogfights.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig295}
                        alt="MiG-29 aerial maneuver"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        One of the most famous characteristics of the
                        <strong> Mikoyan MiG-29</strong> is its outstanding maneuverability
                        in close-range dogfights.
                    </p>

                    <p>
                        During the Cold War, Soviet aircraft designers emphasized
                        <strong> within-visual-range combat</strong>, where agility,
                        rapid missile targeting, and fast pilot reactions could determine
                        the outcome of aerial battles.
                    </p>

                    <p>
                        The MiG-29 was engineered with aerodynamic features and powerful
                        engines that allow the aircraft to perform aggressive combat
                        maneuvers during air engagements.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig2951}
                        alt="MiG-29 high angle of attack maneuver"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= MANEUVERABILITY FEATURES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Key Maneuverability Features
                    </h2>

                    <h3 className="font-bold text-[18px]">
                        High Thrust-to-Weight Ratio
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Rapid acceleration</li>
                        <li>Fast climb rates</li>
                        <li>Superior turning performance</li>

                    </ul>

                    <p>
                        These characteristics are achieved through the aircraft’s
                        twin RD-33 turbofan engines.
                    </p>


                    <h3 className="font-bold text-[18px]">
                        Leading-Edge Root Extensions (LERX)
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Improved lift at high angles of attack</li>
                        <li>Better control at low speeds</li>
                        <li>Enhanced turning capability</li>

                    </ul>


                    <h3 className="font-bold text-[18px]">
                        High Angle-of-Attack Capability
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Tight turning maneuvers</li>
                        <li>Rapid nose-pointing toward enemy aircraft</li>
                        <li>Extreme pitch control</li>

                    </ul>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Mig2952}
                        alt="MiG-29 cobra maneuver demonstration"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= COBRA MANEUVER ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Cobra-Style Maneuvers
                    </h2>

                    <p>
                        Although primarily associated with the Sukhoi Su-27, MiG-29
                        aircraft are capable of performing cobra-style maneuvers.
                    </p>

                    <ol className="list-decimal pl-6 space-y-2">

                        <li>The aircraft suddenly raises its nose to a steep angle.</li>
                        <li>Airspeed drops dramatically.</li>
                        <li>The aircraft quickly returns to normal flight.</li>

                    </ol>

                    <p>
                        This maneuver demonstrates the aircraft’s extreme aerodynamic
                        control capability.
                    </p>

                </div>

            </section>


            {/* ================= TACTICAL PURPOSE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Tactical Purpose
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Force enemy aircraft to overshoot</li>
                        <li>Reposition quickly for missile launch</li>
                        <li>Demonstrate aerodynamic control limits</li>

                    </ul>

                </div>

            </section>


            {/* ================= OPERATIONAL ADVANTAGES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Operational Advantages
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Close-range air combat superiority</li>
                        <li>Effective interception capability</li>
                        <li>Strong defensive air superiority performance</li>

                    </ul>

                    <p>
                        Due to its agility and dogfighting capability, the MiG-29 earned
                        respect from many Western pilots who encountered it during
                        international training exercises.
                    </p>

                </div>

            </section>

        </div>
    );
}
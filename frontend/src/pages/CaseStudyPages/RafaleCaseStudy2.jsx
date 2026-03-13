import Rafale2 from "../../assets/Rafale2.jpg";
import Rafale21 from "../../assets/Rafale2-1.jpg";
import Rafale22 from "../../assets/Rafale2-2.jpg";

export default function RafaleCaseStudy2() {
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

                    Rafale in Combat <br />
                    Operations – Libya <br />
                    and Middle East
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The Rafale fighter demonstrated its real combat capabilities during
                    the 2011 Libya conflict, where French aircraft performed air patrol,
                    precision strike, and reconnaissance missions in a high-intensity
                    operational environment.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Rafale2}
                        alt="Rafale combat mission"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= FIRST CONTENT BLOCK ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        One of the most important demonstrations of the
                        <strong> Dassault Rafale fighter aircraft</strong> occurred during
                        the <strong>2011 Libya conflict</strong>, part of the Libyan Civil War.
                        Rafale aircraft from the French Air and Space Force were among the
                        first fighters deployed in the international military intervention.
                    </p>

                    <p>
                        These operations marked Rafale’s first large-scale combat deployment,
                        allowing the aircraft to prove its performance in real operational
                        conditions including hostile air defenses and complex strike missions.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Rafale21}
                        alt="Rafale combat operations"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= MISSION ROLES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        During the Libya campaign, Rafale aircraft conducted a wide range
                        of combat missions:
                    </p>

                    <ul className="space-y-2 md:space-y-3 list-disc pl-6">

                        <li>Air superiority patrols to secure airspace</li>

                        <li>Precision ground strike missions</li>

                        <li>Intelligence, surveillance, and reconnaissance missions</li>

                        <li>Suppression of enemy air defense systems</li>

                    </ul>

                    <p>
                        Because Rafale is designed as an <strong>omnirole fighter</strong>,
                        pilots were able to switch between mission types during a single sortie.
                    </p>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Rafale22}
                        alt="Rafale weapons and sensors"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= KEY OPERATIONAL ADVANTAGES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Several technological advantages played a critical role in Rafale’s
                        success during combat operations.
                    </p>

                    <ul className="space-y-2 font-medium list-disc pl-6">

                        <li>Advanced sensor fusion providing a unified tactical battlefield view</li>

                        <li>SPECTRA electronic warfare system detecting and jamming enemy radar</li>

                        <li>Missile warning systems and countermeasure deployment</li>

                        <li>High-precision strike capability using guided bombs and missiles</li>

                    </ul>

                </div>

            </section>


            {/* ================= RESULTS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The Libya campaign demonstrated the operational effectiveness of
                        the Rafale fighter aircraft in real combat conditions.
                    </p>

                    <ul className="space-y-2 font-medium list-disc pl-6">

                        <li>High reliability of avionics and weapon systems</li>

                        <li>Strong survivability due to electronic warfare protection</li>

                        <li>Ability to perform multiple mission types in a single flight</li>

                        <li>Increased global confidence in Rafale’s combat capability</li>

                    </ul>

                    <p>
                        These successful operations strengthened Rafale’s international
                        reputation and contributed to increased export demand.
                    </p>

                </div>

            </section>

        </div>
    );
}
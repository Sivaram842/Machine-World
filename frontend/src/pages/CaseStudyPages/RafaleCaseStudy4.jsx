import Rafale4 from "../../assets/Rafale4.jpg";
import Rafale41 from "../../assets/Rafale4-1.jpg";
import Rafale42 from "../../assets/Rafale4-2.jpg";

export default function RafaleCaseStudy4() {
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

                    Rafale Carrier <br />
                    Operations – <br />
                    French Navy
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The naval variant of the Rafale fighter, known as Rafale M, operates
                    from the French aircraft carrier Charles de Gaulle and serves as the
                    primary carrier-based fighter of the French Navy.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Rafale4}
                        alt="Rafale M operating from aircraft carrier"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The naval version of the <strong>Dassault Rafale</strong>,
                        called <strong>Rafale M</strong>, operates from the French
                        aircraft carrier <strong>Charles de Gaulle</strong>.
                        It currently serves as the primary fighter aircraft of the
                        French Navy.
                    </p>

                    <p>
                        Carrier-based aircraft must operate under extremely demanding
                        conditions due to short runways and constantly moving ship decks,
                        requiring specialized engineering modifications.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Rafale41}
                        alt="Rafale M carrier launch"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= DESIGN MODIFICATIONS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The Rafale M includes several structural and operational
                        modifications compared with the standard air force variant.
                    </p>

                    <ul className="space-y-2 list-disc pl-6">

                        <li>Strengthened landing gear for carrier landings</li>

                        <li>Reinforced airframe to withstand heavy deck impacts</li>

                        <li>Improved structural durability for repeated naval operations</li>

                    </ul>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Rafale42}
                        alt="Rafale M carrier landing"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= NAVAL OPERATION SYSTEMS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h3 className="font-bold text-[18px]">Arrestor Hook System</h3>

                    <p>
                        Rafale M is equipped with a tail hook that catches arrestor
                        cables on the carrier deck, allowing the aircraft to stop within
                        a very short landing distance.
                    </p>

                    <h3 className="font-bold text-[18px]">Catapult Launch Capability</h3>

                    <p>
                        The aircraft uses steam catapult systems installed on the aircraft
                        carrier to rapidly accelerate and achieve takeoff speed within
                        limited deck space.
                    </p>

                </div>

            </section>


            {/* ================= OPERATIONAL PERFORMANCE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Rafale M has demonstrated strong reliability and effectiveness
                        in carrier-based operations across multiple deployments.
                    </p>

                    <ul className="space-y-2 list-disc pl-6">

                        <li>Maritime strike missions</li>

                        <li>Air defense protection for naval fleets</li>

                        <li>Reconnaissance operations</li>

                    </ul>

                    <p>
                        The aircraft can deploy a variety of weapons including
                        anti-ship missiles and advanced air-to-air missiles.
                    </p>

                </div>

            </section>


            {/* ================= STRATEGIC SIGNIFICANCE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Strategic Significance
                    </h2>

                    <p>
                        Carrier-based Rafale aircraft provide France with a powerful
                        naval aviation capability, enabling the country to project
                        military power far beyond its homeland.
                    </p>

                    <ul className="space-y-2 list-disc pl-6">

                        <li>Protection of naval fleets</li>

                        <li>Support for international military missions</li>

                        <li>Maintenance of global strategic influence</li>

                    </ul>

                </div>

            </section>

        </div>
    );
}
import Mig29K1 from "../../assets/Mig29K-1.jpg";
import Mig29K11 from "../../assets/Mig29K-1-1.jpg";
import Mig29K12 from "../../assets/Mig29K-1-2.jpg";

export default function Mig29KCaseStudy1() {
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

                    Development of MiG-29K <br />
                    for Aircraft Carrier <br />
                    Operations
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The MiG-29K is the naval variant of the MiG-29 designed specifically
                    for aircraft carrier operations, enabling naval aviation forces to
                    operate high-performance fighter aircraft at sea.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig29K1}
                        alt="MiG-29K carrier fighter aircraft"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The <strong>MiG-29K</strong> is the naval variant of the MiG-29
                        fighter developed by the <strong>Mikoyan Design Bureau</strong>.
                        It was specifically designed to operate from aircraft carriers,
                        meeting the demanding requirements of naval aviation.
                    </p>

                    <p>
                        Unlike land-based fighters, carrier aircraft must operate under
                        extremely challenging conditions such as short takeoff distances,
                        moving carrier decks, and harsh maritime environments.
                    </p>

                    <p>
                        The aircraft eventually entered operational service with navies
                        including the <strong>Indian Navy</strong> and the
                        <strong> Russian Navy</strong>.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig29K11}
                        alt="MiG-29K carrier landing"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= ENGINEERING MODIFICATIONS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Key Engineering Modifications
                    </h2>

                    <h3 className="font-bold text-[18px]">
                        Reinforced Landing Gear
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Strengthened landing gear for carrier landings</li>
                        <li>Reinforced fuselage structure</li>
                        <li>Shock-absorbing systems for deck impact</li>
                    </ul>


                    <h3 className="font-bold text-[18px]">
                        Arrestor Hook System
                    </h3>

                    <p>
                        The aircraft uses a tail arrestor hook that catches arresting
                        cables on the carrier deck, allowing the aircraft to stop
                        within a very short landing distance.
                    </p>


                    <h3 className="font-bold text-[18px]">
                        Folding Wings
                    </h3>

                    <p>
                        To allow efficient storage on crowded carrier decks and
                        hangars, the MiG-29K includes folding wings that reduce the
                        aircraft’s storage footprint.
                    </p>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Mig29K12}
                        alt="MiG-29K cockpit avionics"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= CORROSION PROTECTION ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Corrosion Protection
                    </h2>

                    <p>
                        Operating in maritime environments exposes aircraft to saltwater
                        corrosion. The MiG-29K uses specialized materials and protective
                        coatings to prevent structural degradation.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Corrosion-resistant structural materials</li>
                        <li>Specialized protective surface coatings</li>
                    </ul>

                </div>

            </section>


            {/* ================= PERFORMANCE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Performance Characteristics
                    </h2>

                    <p>
                        The MiG-29K is powered by <strong>RD-33MK turbofan engines</strong>
                        which provide strong performance during carrier operations.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Maximum speed around Mach 2</li>
                        <li>Excellent climb performance</li>
                        <li>Strong thrust for short takeoff runs</li>
                    </ul>

                    <p>
                        The aircraft also includes improved avionics and radar systems
                        compared with earlier MiG-29 variants.
                    </p>

                </div>

            </section>


            {/* ================= STRATEGIC IMPORTANCE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Strategic Importance
                    </h2>

                    <p>
                        Carrier-based fighters such as the MiG-29K enable naval forces
                        to project air power far from their home territory.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Extend air defense coverage far from mainland bases</li>
                        <li>Protect naval fleets and carrier strike groups</li>
                        <li>Conduct maritime strike missions</li>
                    </ul>

                    <p>
                        This capability significantly enhances a nation’s ability to
                        project military power at sea.
                    </p>

                </div>

            </section>

        </div>
    );
}
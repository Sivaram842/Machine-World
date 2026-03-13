import Mig294 from "../../assets/Mig29-4.jpg";
import Mig2941 from "../../assets/Mig29-4-1.jpg";
import Mig2942 from "../../assets/Mig29-4-2.jpg";

export default function Mig29CaseStudy4() {
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

                    MiG-29 Naval Operations <br />
                    Carrier-Based Fighter <br />
                    MiG-29K
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The MiG-29K is the naval variant of the MiG-29 designed for
                    aircraft carrier operations. It serves as the primary
                    carrier-based fighter aircraft of the Indian Navy.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig294}
                        alt="MiG-29K carrier fighter"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The <strong>MiG-29K</strong> is the naval version of the
                        MiG-29 fighter aircraft designed specifically for
                        aircraft carrier operations.
                    </p>

                    <p>
                        The aircraft operates with the
                        <strong> Indian Navy</strong> from aircraft carriers such as:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>INS Vikramaditya</li>
                        <li>INS Vikrant</li>
                    </ul>

                    <p>
                        Carrier-based fighter aircraft must operate under extremely
                        demanding conditions due to short runways and constantly
                        moving ship decks.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig2941}
                        alt="MiG-29K carrier launch"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= DESIGN MODIFICATIONS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Design Modifications for Naval Use
                    </h2>

                    <p>
                        Carrier operations require significant structural
                        modifications compared with land-based fighters.
                    </p>

                    <h3 className="font-bold text-[18px]">Strengthened Structure</h3>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Reinforced landing gear for heavy carrier landings</li>
                        <li>Corrosion-resistant materials for maritime environments</li>
                    </ul>

                    <h3 className="font-bold text-[18px]">Arrestor Hook</h3>

                    <p>
                        The MiG-29K uses a tail hook that catches arrestor cables
                        on the carrier deck, allowing the aircraft to stop within
                        a very short landing distance.
                    </p>

                    <h3 className="font-bold text-[18px]">Folding Wings</h3>

                    <p>
                        Folding wings allow the aircraft to be stored efficiently
                        on crowded aircraft carrier decks.
                    </p>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Mig2942}
                        alt="MiG-29K cockpit and avionics"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= OPERATIONAL ROLES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Operational Roles
                    </h2>

                    <p>
                        The MiG-29K performs several important naval missions:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Fleet air defense missions</li>
                        <li>Maritime strike operations</li>
                        <li>Anti-ship missile attacks</li>
                        <li>Reconnaissance missions</li>

                    </ul>

                    <p>
                        The aircraft can carry a wide variety of weapons including
                        anti-ship missiles, guided bombs, and advanced air-to-air missiles.
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
                        Carrier-based MiG-29K fighters enable India to project
                        air power far from its mainland.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Protection of naval fleets</li>
                        <li>Extended air defense coverage</li>
                        <li>Power projection across the Indian Ocean region</li>

                    </ul>

                </div>

            </section>

        </div>
    );
}

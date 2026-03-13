import Mig29K3 from "../../assets/Mig29K-3.jpg";
import Mig29K31 from "../../assets/Mig29K-3-1.jpg";
import Mig29K32 from "../../assets/Mig29K-3-2.jpg";

export default function Mig29KCaseStudy3() {
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

                    MiG-29K Ski-Jump <br />
                    Takeoff Operations
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The MiG-29K operates from aircraft carriers using a STOBAR launch
                    system, where a ski-jump ramp helps the aircraft gain altitude
                    quickly during short takeoff runs.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig29K3}
                        alt="MiG-29K ski jump launch"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Many aircraft carriers, including those operated by the
                        <strong> Indian Navy</strong>, use a
                        <strong> STOBAR (Short Take-Off But Arrested Recovery)</strong>
                        launch system instead of catapult launch systems.
                    </p>

                    <p>
                        In this system, fighters such as the
                        <strong> MiG-29K</strong> take off using a
                        <strong> ski-jump ramp</strong> located at the front of the
                        aircraft carrier deck.
                    </p>

                    <p>
                        The ramp helps the aircraft gain altitude quickly even with
                        the limited runway length available on aircraft carriers.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig29K31}
                        alt="MiG-29K carrier takeoff"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= HOW SKI JUMP WORKS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        How Ski-Jump Takeoff Works
                    </h2>

                    <ol className="list-decimal pl-6 space-y-2">

                        <li>The aircraft accelerates along the carrier runway using full afterburner.</li>

                        <li>The aircraft climbs the ski-jump ramp at the end of the deck.</li>

                        <li>The ramp redirects the aircraft’s momentum upward.</li>

                        <li>The aircraft gains altitude while continuing to accelerate.</li>

                    </ol>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Mig29K32}
                        alt="MiG-29K cockpit during launch"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= ENGINEERING FACTORS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Engineering Factors Enabling Ski-Jump Launch
                    </h2>

                    <h3 className="font-bold text-[18px]">
                        Powerful Engines
                    </h3>

                    <p>
                        The MiG-29K uses <strong>RD-33MK turbofan engines</strong>,
                        producing strong thrust required for short takeoff runs.
                    </p>

                    <h3 className="font-bold text-[18px]">
                        High Lift Aerodynamics
                    </h3>

                    <p>
                        The aircraft’s wing design generates additional lift during
                        takeoff, helping the fighter climb safely after leaving the ramp.
                    </p>

                    <h3 className="font-bold text-[18px]">
                        Flight Control Systems
                    </h3>

                    <p>
                        Modern digital flight control systems assist pilots during the
                        critical launch phase and help maintain stable flight.
                    </p>

                </div>

            </section>


            {/* ================= ADVANTAGES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Advantages
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Allows aircraft carriers to operate without expensive catapult systems</li>

                        <li>Reduces mechanical complexity of carrier launch systems</li>

                        <li>Enables multirole fighters to launch from smaller carriers</li>

                    </ul>

                </div>

            </section>

        </div>
    );
}
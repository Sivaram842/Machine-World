import Mig291 from "../../assets/Mig29-1.jpg";
import Mig2911 from "../../assets/Mig29-1-1.jpg";
import Mig2912 from "../../assets/Mig29-1-2.jpg";

export default function Mig29CaseStudy1() {
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

                    Development of the <br />
                    MiG-29 – Soviet Response <br />
                    to Western Fighters
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The MiG-29 fighter aircraft was developed by the Soviet Union as a
                    highly maneuverable air superiority fighter designed to counter
                    advanced Western aircraft such as the F-15 Eagle and F-16 Fighting Falcon.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig291}
                        alt="MiG-29 Fighter Aircraft"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= FIRST CONTENT BLOCK ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The <strong>Mikoyan MiG-29</strong> was developed during the
                        <strong> 1970s</strong> by the Mikoyan Design Bureau in the
                        Soviet Union. The aircraft was designed as a response to
                        advanced American fighter aircraft including the
                        <strong> F-15 Eagle</strong> and
                        <strong> F-16 Fighting Falcon</strong>.
                    </p>

                    <p>
                        The Soviet military required a highly maneuverable air superiority
                        fighter capable of engaging Western aircraft in close-range
                        dogfights. The MiG-29 performed its
                        <strong> first flight in 1977</strong> and entered operational
                        service with the Soviet Air Force in
                        <strong> 1983</strong>.
                    </p>

                    <p>
                        The aircraft quickly became one of the most recognizable fighters
                        of the Cold War era and remains widely used by many air forces
                        around the world.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig2911}
                        alt="MiG-29 development and flight testing"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= DESIGN PHILOSOPHY ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The MiG-29 was designed with a strong focus on air combat
                        maneuverability and high-performance dogfighting capability.
                    </p>

                    <ul className="space-y-2 md:space-y-3 list-disc pl-6">

                        <li>High maneuverability for close-range aerial combat</li>

                        <li>Powerful twin-engine configuration for increased thrust</li>

                        <li>Short takeoff capability for operations from smaller airfields</li>

                        <li>Strong dogfighting capability against enemy aircraft</li>

                    </ul>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Mig2912}
                        alt="MiG-29 cockpit and avionics"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= ENGINEERING FEATURES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The MiG-29 incorporates several aerodynamic and engineering
                        features that enhance its performance during air combat.
                    </p>

                    <ul className="space-y-2 font-medium list-disc pl-6">

                        <li>Blended wing-body design improving aerodynamic efficiency</li>

                        <li>Leading-edge root extensions (LERX) for enhanced maneuverability</li>

                        <li>Twin vertical stabilizers providing stability at high angles of attack</li>

                        <li>High thrust-to-weight ratio enabling extreme maneuvers</li>

                    </ul>

                </div>

            </section>


            {/* ================= ENGINE PERFORMANCE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The aircraft is powered by two <strong>RD-33 turbofan engines</strong>
                        which provide strong performance characteristics.
                    </p>

                    <ul className="space-y-2 font-medium list-disc pl-6">

                        <li>High thrust-to-weight ratio</li>

                        <li>Maximum speed of approximately Mach 2.25</li>

                        <li>Rapid climb capability for interception missions</li>

                    </ul>

                </div>

            </section>


            {/* ================= AVIONICS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Avionics Systems
                    </h2>

                    <ul className="space-y-2 list-disc pl-6">

                        <li>N019 radar system for target detection</li>

                        <li>Helmet-mounted targeting system for rapid missile lock</li>

                        <li>Infrared Search and Track (IRST) sensor for passive detection</li>

                    </ul>

                    <p>
                        These systems allowed MiG-29 pilots to quickly identify and
                        engage enemy aircraft during close-range dogfights.
                    </p>

                </div>

            </section>


            {/* ================= IMPACT ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Impact
                    </h2>

                    <p>
                        The MiG-29 became one of the most widely exported fighter
                        aircraft in the world, serving in more than
                        <strong> 30 countries</strong>.
                    </p>

                    <p>
                        Its agility, powerful engines, and advanced targeting systems
                        made it a key symbol of Soviet aerospace engineering during
                        the Cold War.
                    </p>

                </div>

            </section>

        </div>
    );
}
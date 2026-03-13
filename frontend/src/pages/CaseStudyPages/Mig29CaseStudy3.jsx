import Mig293 from "../../assets/Mig29-3.jpg";
import Mig2931 from "../../assets/Mig29-3-1.jpg";
import Mig2932 from "../../assets/Mig29-3-2.jpg";

export default function Mig29CaseStudy3() {
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

                    MiG-29 in the <br />
                    Indian Air Force
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The MiG-29 has served as a key air superiority fighter in the
                    Indian Air Force since the 1980s, playing a vital role in
                    protecting Indian airspace and maintaining regional air power balance.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig293}
                        alt="Indian Air Force MiG-29"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        India inducted the <strong>Mikoyan MiG-29</strong> into the
                        <strong> Indian Air Force</strong> during the
                        <strong> 1980s</strong>. The aircraft was introduced primarily
                        to counter potential threats from neighboring countries and
                        maintain strong air superiority capability.
                    </p>

                    <p>
                        At the time of induction, the MiG-29 became one of the most
                        advanced and capable fighter aircraft in India’s inventory,
                        significantly strengthening the country's air defense capability.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig2931}
                        alt="MiG-29 Indian Air Force operations"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= OPERATIONAL ROLE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Within the Indian Air Force, the MiG-29 performs several
                        important operational roles:
                    </p>

                    <ul className="space-y-2 md:space-y-3 list-disc pl-6">

                        <li>Air superiority missions</li>

                        <li>Interception of hostile aircraft</li>

                        <li>Escort missions for other aircraft</li>

                        <li>Defensive counter-air operations</li>

                    </ul>

                    <p>
                        The aircraft is widely recognized for its strong dogfighting
                        capability, high agility, and powerful twin-engine performance.
                    </p>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Mig2932}
                        alt="MiG-29 cockpit upgrade"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= MIG-29UPG UPGRADE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        MiG-29UPG Upgrade Program
                    </h2>

                    <p>
                        To extend the operational life and improve combat capability,
                        India initiated the <strong>MiG-29UPG modernization program</strong>.
                    </p>

                    <ul className="space-y-2 font-medium list-disc pl-6">

                        <li>Zhuk-ME radar system</li>

                        <li>Modern glass cockpit displays</li>

                        <li>Air-to-air refueling capability</li>

                        <li>Improved electronic warfare systems</li>

                        <li>Compatibility with modern air-to-air missiles</li>

                    </ul>

                    <p>
                        These upgrades significantly enhanced the aircraft’s operational
                        performance and extended its service life within the Indian Air Force.
                    </p>

                </div>

            </section>


            {/* ================= STRATEGIC IMPORTANCE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Strategic Importance
                    </h2>

                    <p>
                        The MiG-29 continues to play a vital role in India’s
                        integrated air defense network.
                    </p>

                    <ul className="space-y-2 list-disc pl-6">

                        <li>Protection of critical airspace</li>

                        <li>Support for frontline fighter squadrons</li>

                        <li>Quick reaction interception capability</li>

                    </ul>

                </div>

            </section>

        </div>
    );
}
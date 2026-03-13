import Mig29K6 from "../../assets/Mig29K-6.jpg";
import Mig29K61 from "../../assets/Mig29K-6-1.jpg";
import Mig29K62 from "../../assets/Mig29K-6-2.jpg";

export default function Mig29KCaseStudy6() {
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

                    MiG-29K Cockpit <br />
                    and Avionics Systems
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The MiG-29K features a modern glass cockpit and advanced avionics
                    systems that significantly improve pilot situational awareness and
                    combat effectiveness during naval operations.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig29K6}
                        alt="MiG-29K cockpit"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Modern naval fighter aircraft rely heavily on advanced avionics
                        systems to manage complex combat environments.
                    </p>

                    <p>
                        The <strong>MiG-29K</strong> incorporates a modern
                        <strong> glass cockpit</strong>, replacing traditional analog
                        instruments with digital displays and integrated avionics.
                    </p>

                    <p>
                        These systems help pilots process large amounts of battlefield
                        information quickly while maintaining full control of the aircraft.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig29K61}
                        alt="MiG-29K avionics displays"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= COCKPIT FEATURES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Key Cockpit Features
                    </h2>

                    <h3 className="font-bold text-[18px]">
                        Multifunction Displays
                    </h3>

                    <p>
                        The cockpit contains several digital multifunction displays
                        (MFDs) that present critical flight and combat information.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Radar information</li>
                        <li>Navigation data</li>
                        <li>Weapon status</li>
                        <li>Flight parameters</li>
                    </ul>


                    <h3 className="font-bold text-[18px]">
                        Helmet-Mounted Targeting System
                    </h3>

                    <p>
                        Pilots can target enemy aircraft simply by looking at the
                        target through a helmet-mounted sight, enabling faster
                        missile engagement during dogfights.
                    </p>

                    <h3 className="font-bold text-[18px]">
                        Digital Flight Control Assistance
                    </h3>

                    <p>
                        The MiG-29K incorporates digital control assistance systems
                        that improve flight stability and handling during demanding
                        carrier operations.
                    </p>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Mig29K62}
                        alt="MiG-29K radar and sensors"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= RADAR AND SENSOR INTEGRATION ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Radar and Sensor Integration
                    </h2>

                    <p>
                        The MiG-29K’s radar and sensors provide advanced target
                        detection and tracking capability.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Long-range target detection</li>
                        <li>Tracking of multiple airborne targets</li>
                        <li>Guidance for air-to-air missile systems</li>
                    </ul>

                </div>

            </section>


            {/* ================= OPERATIONAL ADVANTAGES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Operational Advantages
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Reduced pilot workload</li>
                        <li>Improved targeting accuracy</li>
                        <li>Faster decision-making during combat</li>
                    </ul>

                    <p>
                        These avionics capabilities make the MiG-29K a highly capable
                        carrier-based fighter aircraft for modern naval operations.
                    </p>

                </div>

            </section>

        </div>
    );
}
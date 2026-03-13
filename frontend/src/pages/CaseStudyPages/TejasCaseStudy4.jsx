import Tejas4 from "../../assets/Tejas4.png";
import Tejas41 from "../../assets/Tejas4-1.jpg";
import Tejas42 from "../../assets/Tejas4-2.png";

export default function TejasCaseStudy4() {
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

                    Integration of Indigenous <br />
                    Weapons and Radar Systems

                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The HAL Tejas fighter aircraft has achieved major technological
                    milestones through the integration of indigenous weapons and radar
                    systems, strengthening India's defence autonomy and aerospace
                    capability.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Tejas4}
                        alt="Tejas indigenous weapons integration"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= INDIGENOUS WEAPON INTEGRATION ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Another major milestone in the Tejas fighter aircraft program is the
                        integration of indigenous weapons and radar technologies developed
                        by Indian defence organizations.
                    </p>

                    <p>
                        These systems significantly improve the aircraft’s combat
                        capabilities while reducing reliance on foreign military technology.
                    </p>

                    <p>
                        Key indigenous systems tested on the Tejas platform include:
                    </p>

                    <ul className="space-y-2 md:space-y-3 list-disc pl-6">

                        <li>Astra Beyond Visual Range (BVR) missile</li>

                        <li>Uttam AESA Radar</li>

                        <li>Indigenous Electronic Warfare suite</li>

                    </ul>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Tejas41}
                        alt="Astra missile integration with Tejas"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= ASTRA MISSILE TRIALS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The Astra missile represents India's first indigenously developed
                        Beyond Visual Range (BVR) air-to-air missile designed for modern
                        fighter aircraft.
                    </p>

                    <p>
                        The missile was successfully tested from the Tejas aircraft during
                        several flight trials conducted by DRDO and the Indian Air Force.
                    </p>

                    <p>
                        One notable test involved:
                    </p>

                    <ul className="space-y-2 list-disc pl-6">

                        <li>Astra Mk-1 launched from Tejas at approximately 20,000 ft altitude</li>

                        <li>The missile successfully intercepted a flying target</li>

                        <li>Engagement range exceeded 100 km</li>

                    </ul>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Tejas42}
                        alt="Uttam AESA radar testing"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= UTTAM AESA RADAR ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The <strong>Uttam Active Electronically Scanned Array (AESA) radar</strong>
                        represents a major advancement in India's indigenous radar
                        technology.
                    </p>

                    <p>
                        This radar system provides advanced detection, tracking, and combat
                        engagement capabilities for modern fighter aircraft.
                    </p>

                    <p>Key features include:</p>

                    <ul className="space-y-2 font-medium list-disc pl-6">

                        <li>Simultaneous air-to-air and air-to-ground modes</li>

                        <li>Long-range target tracking</li>

                        <li>Multiple target engagement capability</li>

                        <li>Electronic warfare compatibility</li>

                    </ul>

                    <p>
                        Flight testing of the radar on Tejas involved hundreds of hours of
                        evaluation to validate its operational performance and reliability.
                    </p>

                </div>

            </section>


            {/* ================= IMPACT ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Impact
                    </h2>

                    <ul className="space-y-2 list-disc pl-6">

                        <li>Development of a strong indigenous weapon ecosystem</li>

                        <li>Reduced dependence on foreign radar and missile systems</li>

                        <li>Improved combat capability of Tejas fighter variants</li>

                    </ul>

                </div>

            </section>

        </div>
    );
}
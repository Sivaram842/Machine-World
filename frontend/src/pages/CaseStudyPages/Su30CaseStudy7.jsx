import Rafale6 from "../../assets/su-30-7.jpg";
import Rafale61 from "../../assets/su-30-7-1.jpg";
import Rafale62 from "../../assets/su-30-7-2.jpg";

import Footer from "../../components/NewFooter";
import Navbar from "../../components/NewNavbar";

export default function Su30CaseStudy7() {
    return (
        <div>
            <Navbar />
            <div className="bg-black text-white">

                {/* ================= HERO ================= */}
                <section className="py-20 md:py-32 text-center px-6">

                    <p className="uppercase text-xs md:text-sm tracking-[3px] text-gray-500">
                        Case Study
                    </p>

                    <h1 className="mt-6 md:mt-8 
        text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] 
        font-extrabold uppercase 
        leading-[1.15] 
        max-w-[780px] mx-auto">

                        Integration of Indigenous Weapons <br />
                        in Su-30MKI
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        The Su-30MKI showcases India’s ability to integrate indigenous weapons systems,
                        transforming it into a powerful multirole platform under the Atmanirbhar Bharat initiative.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale6}
                            alt="Su-30MKI weapons integration"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">Su-30MKI</strong>,
                            developed by Russia and customized by India,
                            is the backbone of the Indian Air Force.
                        </p>

                        <p>
                            It has been upgraded with indigenous weapons to reduce
                            dependency on foreign systems and enhance combat capability.
                        </p>

                        <p>
                            Integration efforts are driven by
                            <strong className="text-white"> DRDO and HAL</strong>,
                            focusing on self-reliance in defense technology.
                        </p>

                        <p>
                            The aircraft now supports a wide range of Indian-developed
                            missiles and precision weapons.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale61}
                            alt="Su-30MKI BrahMos integration"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= WEAPONS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Indigenous Weapons Integrated
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>BrahMos supersonic cruise missile</li>
                            <li>Astra beyond visual range (BVR) missile</li>
                            <li>Rudram anti-radiation missile</li>
                            <li>Smart Anti-Airfield Weapon (SAAW)</li>
                        </ul>

                        <p>
                            These weapons provide long-range strike, air superiority,
                            and suppression of enemy defenses.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale62}
                            alt="Su-30MKI cockpit avionics"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= FACTORS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Integration Challenges & Solutions
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">
                            Structural Modifications
                        </h3>

                        <p>
                            Airframe strengthening was required to carry heavy weapons like BrahMos.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">
                            Avionics Integration
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Mission computer upgrades</li>
                            <li>Weapon control software integration</li>
                            <li>Sensor compatibility enhancements</li>
                        </ul>

                        <h3 className="font-semibold text-[18px] text-white">
                            System Interoperability
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Russian platform + Indian weapons</li>
                            <li>Seamless communication between systems</li>
                        </ul>

                    </div>

                </section>


                {/* ================= IMPACT ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Strategic Impact
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enhanced long-range strike capability</li>
                            <li>Reduced dependency on foreign weapons</li>
                            <li>Boosted indigenous defense ecosystem</li>
                        </ul>

                        <p>
                            The Su-30MKI now stands as a powerful example of India’s
                            transition toward self-reliant military capability.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>

    );
}
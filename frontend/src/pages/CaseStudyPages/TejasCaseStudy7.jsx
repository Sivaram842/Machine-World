import Tejas7 from "../../assets/Tejas7.jpg";
import Tejas71 from "../../assets/Tejas7-1.jpeg";
import Tejas72 from "../../assets/Tejas7-2.avif";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function TejasCaseStudy7() {
    return (
        <div>

            <Navbar />
            <div className="bg-black text-white">

                {/* ================= HERO ================= */}
                <section className="py-20 md:py-32 text-center px-6">

                    <p className="uppercase text-xs md:text-sm tracking-[3px] text-white">
                        Case Study
                    </p>

                    <h1 className="mt-6 md:mt-8 
                text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] 
                font-extrabold uppercase 
                leading-[1.2] md:leading-[1.15] 
                max-w-[760px] mx-auto">

                        Astra Missile Integration <br />
                        with HAL Tejas Fighter

                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-white max-w-[620px] mx-auto">
                        The successful test firing of the Astra beyond-visual-range missile from
                        the HAL Tejas fighter marked a major milestone in India’s indigenous
                        fighter and missile integration program.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Tejas7}
                            alt="Tejas Astra missile test"
                            className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <p>
                            In March 2025, India achieved a major milestone in indigenous
                            air combat capability when the Astra Beyond Visual Range
                            Air-to-Air Missile was successfully launched from the HAL Tejas fighter aircraft.
                        </p>

                        <p>
                            The test was conducted off the coast of Odisha by India’s
                            defence research and aerospace agencies, demonstrating
                            successful integration between the indigenous fighter aircraft
                            and long-range missile systems.
                        </p>

                        <p>
                            The missile accurately struck an aerial target at a distance
                            of over 100 kilometers, confirming the reliability of the
                            aircraft’s radar tracking and weapon guidance systems.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Tejas71}
                            alt="Astra missile integration with Tejas"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                        />

                    </div>
                </section>


                {/* ================= TECHNOLOGICAL SIGNIFICANCE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Key Technological Achievements
                        </h2>

                        <p>
                            The Astra missile integration demonstrated the capability
                            of the Tejas fighter platform to operate advanced beyond-visual-range weapons.
                        </p>

                        <p className="font-semibold">Beyond Visual Range Combat Capability</p>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Engagement of enemy aircraft beyond visual range</li>

                            <li>Improved radar tracking and targeting accuracy</li>

                            <li>Advanced missile guidance integration</li>

                            <li>Enhanced long-range combat capability</li>

                        </ul>

                        <p className="font-semibold">Integrated Avionics and Radar Systems</p>

                        <p>
                            The test validated the aircraft’s radar and avionics architecture,
                            ensuring seamless communication between onboard systems
                            and missile guidance mechanisms.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Tejas72}
                            alt="Tejas missile test program"
                            className="w-full object-cover"
                        />

                    </div>

                </section>


                {/* ================= STRATEGIC IMPACT ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Strategic Importance
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Strengthens India’s indigenous air combat capability</li>

                            <li>Reduces dependence on imported missile systems</li>

                            <li>Enhances Tejas combat readiness for modern air warfare</li>

                            <li>Validates integration of advanced indigenous weapon systems</li>

                        </ul>

                    </div>

                </section>


                {/* ================= FUTURE DEVELOPMENT ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Future Integration Programs
                        </h2>

                        <p>
                            The Astra missile integration on Tejas represents an
                            important step in India's long-term plan to equip its
                            indigenous fighters with advanced domestically developed weapons.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Astra Mk2 extended-range missile integration</li>

                            <li>Advanced air-to-air and air-to-ground weapon systems</li>

                            <li>Enhanced network-centric combat capabilities</li>

                        </ul>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
import Mig29K6 from "../../assets/Mig29K-6.jpg";
import Mig29K61 from "../../assets/Mig29K-6-1.jpg";
import Mig29K62 from "../../assets/Mig29K-6-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29KCaseStudy6() {
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

                        MiG-29K Cockpit <br />
                        and Avionics Systems
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        The MiG-29K features a modern glass cockpit and advanced avionics
                        that enhance situational awareness and combat performance.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K6}
                            alt="MiG-29K cockpit"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            Modern naval fighters rely heavily on advanced avionics to
                            manage complex combat environments.
                        </p>

                        <p>
                            The <strong className="text-white">MiG-29K</strong> features a
                            <strong className="text-white"> glass cockpit</strong>, replacing
                            traditional analog instruments with digital systems.
                        </p>

                        <p>
                            These systems allow pilots to process large amounts of
                            battlefield information quickly and efficiently.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K61}
                            alt="MiG-29K avionics displays"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= FEATURES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Key Cockpit Features
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">
                            Multifunction Displays (MFDs)
                        </h3>

                        <p>
                            Digital displays provide critical flight and combat data.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Radar data</li>
                            <li>Navigation information</li>
                            <li>Weapon status</li>
                            <li>Flight parameters</li>
                        </ul>


                        <h3 className="font-semibold text-[18px] text-white">
                            Helmet-Mounted Targeting
                        </h3>

                        <p>
                            Enables pilots to lock targets by simply looking at them,
                            improving reaction time in combat.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">
                            Digital Flight Control Systems
                        </h3>

                        <p>
                            Assist in stability and handling during demanding carrier operations.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K62}
                            alt="MiG-29K radar and sensors"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= RADAR ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Radar and Sensor Integration
                        </h2>

                        <p>
                            Advanced radar and sensor systems enhance detection and tracking.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Long-range target detection</li>
                            <li>Multi-target tracking</li>
                            <li>Missile guidance support</li>
                        </ul>

                    </div>

                </section>


                {/* ================= ADVANTAGES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Advantages
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Reduced pilot workload</li>
                            <li>Improved targeting accuracy</li>
                            <li>Faster decision-making</li>
                        </ul>

                        <p>
                            These systems significantly enhance combat effectiveness
                            in modern naval operations.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
import Mig296 from "../../assets/Mig29-6.jpg";
import Mig2961 from "../../assets/Mig29-6-1.jpg";
import Mig2962 from "../../assets/Mig29-6-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29CaseStudy6() {
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

                        Evolution of MiG-29 <br />
                        Upgrades → <br />
                        MiG-35 Development
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        Continuous upgrades to the MiG-29 platform led to the development of
                        the MiG-35, transforming it into a modern multirole combat aircraft.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig296}
                            alt="MiG-29 evolution upgrades"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            Over time, the <strong className="text-white">Mikoyan MiG-29</strong>
                            required modernization to remain competitive against newer fighters.
                        </p>

                        <p>
                            Advancements in avionics, radar, and electronic warfare led to
                            multiple upgraded variants, eventually resulting in the
                            <strong className="text-white"> MiG-35 multirole fighter</strong>.
                        </p>

                        <p>
                            These upgrades transformed the aircraft from a pure air-superiority
                            platform into a versatile multirole combat system.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig2961}
                            alt="MiG-29 upgrade variants"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= MAJOR VARIANTS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Major Upgrade Variants
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">MiG-29M</h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Digital flight control systems</li>
                            <li>Increased fuel capacity</li>
                            <li>Improved aerodynamics</li>
                            <li>Enhanced multirole capability</li>
                        </ul>

                        <h3 className="font-semibold text-[18px] text-white">MiG-29K</h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Carrier-capable reinforced landing gear</li>
                            <li>Folding wings</li>
                            <li>Corrosion resistance</li>
                            <li>Naval avionics systems</li>
                        </ul>

                        <h3 className="font-semibold text-[18px] text-white">MiG-29UPG</h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modern radar systems</li>
                            <li>Glass cockpit</li>
                            <li>Air-to-air refueling</li>
                            <li>Advanced missile compatibility</li>
                        </ul>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig2962}
                            alt="MiG-35 advanced fighter"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= MIG-35 ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Development of MiG-35
                        </h2>

                        <p>
                            The <strong className="text-white">MiG-35</strong> represents the most advanced evolution of the platform.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>AESA radar system</li>
                            <li>Advanced electronic warfare suite</li>
                            <li>Sensor fusion capability</li>
                            <li>Enhanced weapon systems</li>
                        </ul>

                        <p>
                            These features allow it to compete with modern 4.5-generation fighters.
                        </p>

                    </div>

                </section>


                {/* ================= STRATEGIC ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Strategic Significance
                        </h2>

                        <p>
                            The MiG-29 to MiG-35 evolution demonstrates how modernization keeps platforms relevant.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Extends aircraft service life</li>
                            <li>Enhances combat effectiveness</li>
                            <li>Reduces need for new platform development</li>
                        </ul>

                        <p>
                            This upgrade path enables air forces to modernize while retaining operational familiarity.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>

    );
}
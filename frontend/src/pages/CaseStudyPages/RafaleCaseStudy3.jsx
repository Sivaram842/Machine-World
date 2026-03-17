import Rafale3 from "../../assets/Rafale3.jpg";
import Rafale31 from "../../assets/Rafale3-1.jpg";
import Rafale32 from "../../assets/Rafale3-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function RafaleCaseStudy3() {
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

                        India’s Rafale <br />
                        Acquisition Program
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        India strengthened its air power with Rafale, enhancing air superiority,
                        deep strike capability, and strategic deterrence.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale3}
                            alt="Indian Air Force Rafale"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            In <strong className="text-white">2016</strong>, India signed a deal
                            with France to acquire
                            <strong className="text-white"> 36 Rafale fighters</strong>.
                        </p>

                        <p>
                            The aircraft were deployed at key bases:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Ambala Air Force Station</li>
                            <li>Hasimara Air Force Station</li>
                        </ul>

                        <p>
                            These locations strengthen air defense across northern and eastern sectors.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale31}
                            alt="Rafale India-specific upgrades"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= INDIA FEATURES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8 
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            India-Specific Enhancements
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Meteor beyond-visual-range missile</li>
                            <li>SCALP long-range cruise missile</li>
                            <li>HAMMER precision-guided bombs</li>
                        </ul>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale32}
                            alt="Rafale avionics and sensors"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= SENSORS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Advanced Sensors
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>AESA radar</li>
                            <li>Infrared Search and Track (IRST)</li>
                            <li>Electronic warfare systems</li>
                        </ul>

                    </div>

                </section>


                {/* ================= STRATEGIC ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Strategic Importance
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Long-range strike capability</li>
                            <li>Superior air combat performance</li>
                            <li>Enhanced deterrence capability</li>
                        </ul>

                        <p>
                            Rafale complements India’s fleet including
                            <strong className="text-white"> Su-30MKI</strong>,
                            <strong className="text-white"> Mirage-2000</strong>,
                            and <strong className="text-white"> MiG-29</strong>.
                        </p>

                    </div>

                </section>


                {/* ================= ROLE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Role
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Air superiority missions</li>
                            <li>Deep strike operations</li>
                            <li>Nuclear deterrence</li>
                            <li>Reconnaissance missions</li>
                        </ul>

                        <p>
                            Rafale is one of the most advanced fighters currently operating
                            in the region.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />

        </div>
    );
}
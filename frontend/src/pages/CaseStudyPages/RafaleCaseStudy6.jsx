import Rafale6 from "../../assets/Rafale6.jpg";
import Rafale61 from "../../assets/Rafale6-1.jpg";
import Rafale62 from "../../assets/Rafale6-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function RafaleCaseStudy6() {
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

                        Rafale Export Success <br />
                        and Global Defence <br />
                        Market
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        Rafale has become one of the most successful fighter exports,
                        recognized globally for its multirole capability and combat performance.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale6}
                            alt="Rafale export success"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">Dassault Rafale</strong>,
                            developed by <strong className="text-white">Dassault Aviation</strong>,
                            is one of the most successful fighter exports globally.
                        </p>

                        <p>
                            Its success is driven by multirole capability, advanced avionics,
                            and proven combat performance.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale61}
                            alt="Rafale global operators"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= CUSTOMERS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Major Export Customers
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Egypt – First export customer (2015)</li>
                            <li>Qatar – Air force modernization</li>
                            <li>Greece – Enhanced regional air defense</li>
                            <li>India – Strengthened air combat capability</li>
                        </ul>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale62}
                            alt="Rafale avionics"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= FACTORS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Factors Behind Success
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">
                            Proven Combat Performance
                        </h3>

                        <p>
                            Validated through real-world combat operations.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">
                            Advanced Technology
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>AESA radar</li>
                            <li>Electronic warfare systems</li>
                            <li>Sensor fusion</li>
                        </ul>

                        <h3 className="font-semibold text-[18px] text-white">
                            Multirole Capability
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Air superiority</li>
                            <li>Ground attack</li>
                            <li>Reconnaissance</li>
                            <li>Maritime strike</li>
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
                            <li>Boosted French defense industry revenue</li>
                            <li>Strengthened global defense partnerships</li>
                            <li>Expanded aerospace influence worldwide</li>
                        </ul>

                        <p>
                            Rafale has become a key symbol of modern multirole fighter success.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
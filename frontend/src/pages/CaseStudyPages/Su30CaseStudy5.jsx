import EngineReplacement from "../../assets/EngineReplacement.jpg";
import EngineReplacement1 from "../../assets/EngineReplacement1.jpg";

const Su30CaseStudy5 = () => {
    return (
        <div className="bg-[#f3f3f3] text-black">

            {/* ================= HERO ================= */}
            <section className="py-20 md:py-32 text-center px-6">
                <p className="uppercase text-xs md:text-sm tracking-[3px] text-gray-600">
                    Defense Case Study
                </p>

                <h1 className="mt-6 md:mt-8 
                   text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] 
                   font-extrabold uppercase 
                   leading-[1.2] md:leading-[1.15] 
                   max-w-[760px] mx-auto">
                    Su-30MKI Engine <br />
                    Replacement & <br />
                    Fleet Sustainment <br />
                    Program
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    To ensure long-term reliability and operational readiness, the Indian Air Force launched a major engine replacement program for the Su-30MKI fleet using locally manufactured AL-31FP turbofan engines.
                </p>
            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">
                    <img
                        src={EngineReplacement}
                        alt="Su-30MKI engine maintenance"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />
                </div>
            </section>


            {/* ================= OVERVIEW ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The <strong>Su-30MKI fighter aircraft</strong> depends on powerful turbofan engines to achieve its extreme maneuverability, thrust-vectoring capability, and long-range mission performance.
                    </p>

                    <p>
                        Over years of intensive operational use, aircraft engines experience significant wear and require periodic overhaul or replacement to maintain reliability and safety.
                    </p>

                    <p>
                        To sustain the operational readiness of the fleet, the Indian government approved the procurement of
                        <strong> 240 AL-31FP engines</strong>, manufactured in India by <strong>Hindustan Aeronautics Limited (HAL)</strong> under license.
                    </p>

                </div>
            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">
                    <img
                        src={EngineReplacement1}
                        alt="AL-31FP turbofan engine"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />
                </div>
            </section>


            {/* ================= ENGINE WEAR ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-gray-800">

                    <h3 className="font-bold text-xl">
                        Engine Wear and Reliability Challenges
                    </h3>

                    <p>
                        The Su-30MKI is powered by twin <strong>AL-31FP afterburning turbofan engines</strong> with thrust-vectoring capability, enabling exceptional maneuverability during air combat.
                    </p>

                    <p>
                        However, high-performance flight conditions create extreme mechanical and thermal stress on engine components.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Turbine blade fatigue due to high temperatures</li>
                        <li>Engine overheating and gradual performance degradation</li>
                        <li>Fuel system wear from long operational hours</li>
                        <li>Maintenance challenges in thrust-vectoring actuators</li>
                    </ul>

                    <p>
                        Without timely overhaul or replacement, these issues could lead to reduced thrust performance, increased maintenance downtime, and potential safety risks.
                    </p>

                </div>
            </section>


            {/* ================= ENGINE PROGRAM ================= */}
            <section className="py-16 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-gray-800">

                    <h3 className="font-bold text-xl">
                        Engine Replacement Program
                    </h3>

                    <p>
                        To support the long-term sustainability of the Su-30MKI fleet, India approved the procurement of
                        <strong> 240 replacement AL-31FP engines</strong>.
                    </p>

                    <ul className="list-disc pl-6 space-y-3">

                        <li>Engines manufactured under license by HAL in India</li>

                        <li>Production scheduled over approximately 8 years</li>

                        <li>Estimated production rate of about 30 engines per year</li>

                        <li>Each aircraft typically uses multiple engines over its lifetime</li>

                    </ul>

                    <p>
                        This initiative ensures long-term availability of replacement engines while strengthening India's domestic aerospace manufacturing capabilities.
                    </p>

                </div>
            </section>


            {/* ================= STRATEGIC IMPORTANCE ================= */}
            <section className="py-16 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-gray-800">

                    <h3 className="font-bold text-xl">
                        Strategic Importance
                    </h3>

                    <p>
                        With nearly <strong>260 Su-30MKI aircraft</strong> in service, the platform forms the backbone of the Indian Air Force’s air combat capability.
                    </p>

                    <p>
                        Maintaining engine reliability is critical for several mission types:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Long-range air patrol missions</li>
                        <li>Air superiority operations</li>
                        <li>Maritime strike missions</li>
                        <li>Large-scale combat exercises</li>
                    </ul>

                    <p>
                        Without sustained engine support and replacement programs, fleet availability and operational readiness could decline significantly.
                    </p>

                </div>
            </section>


            {/* ================= LESSONS ================= */}
            <section className="py-16 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-gray-800">

                    <h3 className="font-bold text-xl">
                        Lessons for Fleet Sustainment
                    </h3>

                    <ul className="list-disc pl-6 space-y-3">

                        <li>Long-term lifecycle planning is essential for modern fighter aircraft</li>

                        <li>Domestic manufacturing reduces dependence on foreign suppliers</li>

                        <li>Predictive maintenance improves reliability and availability</li>

                        <li>Engine health monitoring helps detect issues before failures occur</li>

                    </ul>

                    <p>
                        These improvements play a crucial role in ensuring mission readiness and reducing operational risks across the fleet.
                    </p>

                </div>
            </section>


            {/* ================= RELATED CASE STUDIES ================= */}
            <section className="py-20 md:py-32 px-6 md:px-16">

                <h2 className="uppercase tracking-[3px] text-xs md:text-sm mb-12">
                    More Defense Case Studies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

                    <div className="group bg-[#e6e6e6] p-16 min-h-[380px] hover:bg-blue-800">
                        <p className="text-sm group-hover:text-white">Case Study</p>
                        <h3 className="uppercase font-extrabold text-[20px] group-hover:text-white">
                            BRAHMOS INTEGRATION WITH SU-30MKI
                        </h3>
                    </div>

                    <div className="group bg-[#e6e6e6] p-16 min-h-[380px] hover:bg-blue-800">
                        <p className="text-sm group-hover:text-white">Case Study</p>
                        <h3 className="uppercase font-extrabold text-[20px] group-hover:text-white">
                            SUPER SUKHOI MODERNIZATION
                        </h3>
                    </div>

                    <div className="group bg-[#e6e6e6] p-16 min-h-[380px] hover:bg-blue-800">
                        <p className="text-sm group-hover:text-white">Case Study</p>
                        <h3 className="uppercase font-extrabold text-[20px] group-hover:text-white">
                            PILOT TRAINING & SIMULATOR SAFETY
                        </h3>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default Su30CaseStudy5
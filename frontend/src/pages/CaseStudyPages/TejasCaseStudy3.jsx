import Tejas3 from "../../assets/Tejas3.jpg";
import Tejas31 from "../../assets/Tejas3-1.jpg";
import Tejas32 from "../../assets/Tejas3-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function TejasCaseStudy3() {
    return (
        <div>
            <Navbar />

            <div className="bg-black text-white">

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

                        Tejas in International <br />
                        Military Exercises

                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                        The HAL Tejas fighter aircraft has demonstrated its operational
                        capability and performance during multinational military exercises,
                        showcasing India's indigenous aerospace technology on the global stage.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Tejas3}
                            alt="Tejas in international military exercise"
                            className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                        />

                    </div>
                </section>


                {/* ================= EXERCISE TARANG SHAKTI ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
               text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <p>
                            One major demonstration of the Tejas fighter’s capabilities
                            occurred during <strong>Exercise Tarang Shakti</strong>, a large
                            multinational air exercise hosted by India.
                        </p>

                        <p>
                            The exercise involved aircraft from several countries, including
                            advanced fighter jets such as the
                            <strong> Eurofighter Typhoon</strong> and
                            <strong> F-16</strong>.
                        </p>

                        <p>
                            The participation of Tejas alongside these advanced aircraft
                            demonstrated India's ability to field a competitive indigenous
                            fighter platform within complex multinational air combat scenarios.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Tejas31}
                            alt="Tejas fighter exercise operations"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                        />

                    </div>
                </section>


                {/* ================= ROLE IN EXERCISE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
               text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <p>
                            During the exercise, the Tejas aircraft performed multiple
                            operational roles in simulated combat environments.
                        </p>

                        <ul className="space-y-2 md:space-y-3 list-disc pl-6">

                            <li>Tejas jets escorted foreign aircraft entering Indian airspace</li>

                            <li>The aircraft participated as both Red Force (enemy) and Blue Force units</li>

                            <li>Pilots from foreign air forces flew the Tejas fighter during demonstrations</li>

                        </ul>

                        <p>
                            Several foreign air force chiefs, including those from
                            <strong> France</strong> and <strong>Germany</strong>,
                            even piloted the Tejas aircraft during the exercise,
                            highlighting growing international confidence in the platform.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Tejas32}
                            alt="Tejas fighter maneuverability"
                            className="w-full object-cover"
                        />

                    </div>

                </section>


                {/* ================= PERFORMANCE OBSERVATIONS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
               text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <p>
                            The exercise demonstrated several important strengths of the
                            Tejas fighter aircraft.
                        </p>

                        <ul className="space-y-2 font-medium list-disc pl-6">

                            <li>Effective interception capability</li>

                            <li>Good maneuverability against larger fighters</li>

                            <li>Reliable avionics and mission systems</li>

                            <li>Positive feedback from international pilots</li>

                        </ul>

                    </div>

                </section>


                {/* ================= STRATEGIC OUTCOMES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Strategic Outcomes
                        </h2>

                        <ul className="space-y-2 list-disc pl-6">

                            <li>Increased global visibility of the Tejas fighter program</li>

                            <li>Demonstrated India's indigenous aerospace capability</li>

                            <li>Supported potential export opportunities for the aircraft</li>

                        </ul>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
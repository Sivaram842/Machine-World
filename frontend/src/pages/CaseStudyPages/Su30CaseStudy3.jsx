import Excercises1 from "../../assets/Excercises1.jpg";
import Excercises2 from "../../assets/Excercises2.png";
import Excercises from "../../assets/Excercises.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
const Su30CaseStudy3 = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-black text-white">

                {/* ================= HERO ================= */}
                <section className="py-20 md:py-32 text-center px-6">

                    <p className="uppercase text-xs md:text-sm tracking-[3px] text-gray-500">
                        Defense Case Study
                    </p>

                    <h1 className="mt-6 md:mt-8 
                          text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] 
                          font-extrabold uppercase 
                          leading-[1.15] 
                          max-w-[820px] mx-auto">

                        Su-30MKI <br />
                        Air Combat Exercises
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        International training that sharpens combat capability,
                        tactics, and pilot performance in real-world scenarios.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Excercises1}
                            alt="Su-30MKI exercises"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= CONTENT ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                       text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">Su-30MKI</strong> participates in
                            major international exercises with allied air forces, exposing
                            pilots to diverse combat scenarios and tactics.
                        </p>

                        <p>
                            These exercises simulate real-world combat conditions and allow
                            testing of aircraft performance and operational coordination.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Red Flag – USA</li>
                            <li>Garuda – France</li>
                            <li>Indradhanush – UK</li>
                            <li>Cope India – India–US</li>
                        </ul>

                    </div>

                </section>


                {/* ================= IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Excercises2}
                            alt="combat training"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg"
                        />

                    </div>

                </section>


                {/* ================= TRAINING ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                       text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Combat Training Scenarios
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>BVR missile engagements</li>
                            <li>Close-range dogfighting</li>
                            <li>Electronic warfare scenarios</li>
                            <li>Air defense missions</li>
                            <li>Ground strike operations</li>
                        </ul>

                        <p>
                            These simulations prepare pilots for highly dynamic combat environments.
                        </p>

                    </div>

                </section>


                {/* ================= IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Excercises}
                            alt="dogfight"
                            className="w-full object-contain rounded-2xl shadow-lg"
                        />

                    </div>

                </section>


                {/* ================= FINAL ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                       text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Impact
                        </h2>

                        <p>
                            The Su-30MKI has trained against advanced fighters including
                            F-15, F-16, Rafale, and Eurofighter Typhoon.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Improved pilot skill and reaction time</li>
                            <li>Better tactical decision-making</li>
                            <li>Enhanced coordination with allied forces</li>
                        </ul>

                        <p>
                            Many of these scenarios are first tested in simulators before real flights.
                        </p>

                    </div>

                </section>


                {/* ================= CARDS ================= */}
                <section className="py-20 md:py-32 px-6 md:px-16">

                    <h2 className="uppercase tracking-[3px] text-xs md:text-sm mb-12 text-gray-500">
                        More Case Studies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="group bg-[#111] p-10 h-[420px] flex flex-col justify-between hover:bg-blue-900 transition duration-300 rounded-2xl">
                            <p className="text-sm text-gray-400 group-hover:text-white">
                                Case Study
                            </p>
                            <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                BrahMos Integration
                            </h3>
                        </div>

                        <div className="group bg-[#111] p-10 h-[420px] flex items-center hover:bg-blue-900 transition duration-300 rounded-2xl">
                            <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                Super Sukhoi Upgrade
                            </h3>
                        </div>

                        <div className="group bg-[#111] p-10 h-[420px] flex items-center hover:bg-blue-900 transition duration-300 rounded-2xl">
                            <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                Air Combat Exercises
                            </h3>
                        </div>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    )
}

export default Su30CaseStudy3
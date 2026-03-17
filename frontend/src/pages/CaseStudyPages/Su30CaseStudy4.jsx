
import PilotTraining1 from "../../assets/PilotTraining1.jpg";
import PilotTraining2 from "../../assets/PilotTraining2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
const Su30CaseStudy4 = () => {
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

                        Su-30MKI Pilot Training <br />
                        & Simulator Safety
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        Advanced training systems and simulators ensure pilot readiness,
                        safety, and mission success in high-risk combat environments.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={PilotTraining1}
                            alt="Pilot training"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= OVERVIEW ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">Su-30MKI</strong> requires highly
                            specialized training due to its advanced avionics and extreme performance.
                        </p>

                        <p>
                            Pilots rely heavily on <strong className="text-white">high-fidelity simulators</strong>
                            to practice emergency scenarios, combat missions, and system failures safely.
                        </p>

                    </div>

                </section>


                {/* ================= IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={PilotTraining2}
                            alt="Training mission"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg"
                        />

                    </div>

                </section>


                {/* ================= INCIDENT ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8 text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            2026 Assam Incident
                        </h2>

                        <p>
                            A Su-30MKI crashed during a training sortie in Assam, highlighting
                            the risks involved even in routine missions.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Loss of radar contact shortly after takeoff</li>
                            <li>Crash in mountainous terrain</li>
                            <li>Both pilots lost</li>
                        </ul>

                    </div>

                </section>


                {/* ================= CAUSES ================= */}
                <section className="py-16 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8 text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Possible Causes
                        </h2>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>Technical system failure</li>
                            <li>Complex weather and terrain</li>
                            <li>High operational workload</li>
                        </ul>

                    </div>

                </section>


                {/* ================= TRAINING PIPELINE ================= */}
                <section className="py-16 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8 text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Pilot Training Pipeline
                        </h2>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>Initial training (NDA/CDS/AFCAT)</li>
                            <li>Basic flight training</li>
                            <li>Advanced jet training</li>
                            <li>Fighter conversion training</li>
                        </ul>

                    </div>

                </section>


                {/* ================= SIMULATOR ================= */}
                <section className="py-16 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8 text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Simulator Capabilities
                        </h2>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>Full cockpit replication</li>
                            <li>Motion simulation</li>
                            <li>Combat environment visualization</li>
                        </ul>

                    </div>

                </section>


                {/* ================= LESSONS ================= */}
                <section className="py-16 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8 text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Key Lessons
                        </h2>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>Simulation must replicate extreme scenarios</li>
                            <li>Situational awareness is critical</li>
                            <li>Health monitoring improves safety</li>
                            <li>Mission rehearsal reduces risk</li>
                        </ul>

                    </div>

                </section>


                {/* ================= CARDS ================= */}
                <section className="py-20 md:py-32 px-6 md:px-16">

                    <h2 className="uppercase tracking-[3px] text-xs md:text-sm mb-12 text-gray-500">
                        More Case Studies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="group bg-[#111] p-10 h-[420px] hover:bg-blue-900 transition duration-300 rounded-2xl">
                            <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                BrahMos Integration
                            </h3>
                        </div>

                        <div className="group bg-[#111] p-10 h-[420px] hover:bg-blue-900 transition duration-300 rounded-2xl">
                            <h3 className="uppercase font-bold text-[18px] group-hover:text-white">
                                Super Sukhoi Upgrade
                            </h3>
                        </div>

                        <div className="group bg-[#111] p-10 h-[420px] hover:bg-blue-900 transition duration-300 rounded-2xl">
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

export default Su30CaseStudy4
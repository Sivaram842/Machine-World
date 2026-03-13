
import PilotTraining1 from "../../assets/PilotTraining1.jpg";
import PilotTraining2 from "../../assets/PilotTraining2.jpg";
const Su30CaseStudy4 = () => {
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
                    Su-30MKI Pilot <br />
                    Training & <br />
                    Simulator Safety <br />
                    Programs
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    Modern fighter aircraft such as the Su-30MKI require advanced pilot training programs and high-fidelity simulators to ensure operational readiness, safety, and mission effectiveness.
                </p>
            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">
                    <img
                        src={PilotTraining1}
                        alt="Su-30MKI pilot training"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />
                </div>
            </section>


            {/* ================= OVERVIEW ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Modern fighter aircraft like the <strong>Sukhoi Su-30MKI</strong> feature highly advanced avionics, extreme flight performance, and complex combat systems.
                        Because of this complexity, pilot training programs rely heavily on **high-fidelity cockpit simulators** before pilots perform real flight missions.
                    </p>

                    <p>
                        Simulation systems allow pilots to train for dangerous scenarios such as emergency failures, air combat engagements, and complex tactical missions without risking aircraft or lives.
                    </p>

                </div>
            </section>


            {/* ================= INCIDENT ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">
                    <img
                        src={PilotTraining2}
                        alt="Su-30MKI training mission"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />
                </div>
            </section>


            {/* ================= ACCIDENT CASE ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h3 className="font-bold text-xl">2026 Assam Su-30MKI Crash</h3>

                    <p>
                        On <strong>5 March 2026</strong>, a Su-30MKI fighter aircraft crashed during a routine training mission in the Karbi Anglong region of Assam, approximately 60 km from Jorhat Air Force Station.
                    </p>

                    <p>
                        The aircraft lost radar contact shortly after takeoff. Search teams later discovered the wreckage in a remote mountainous area.
                    </p>

                    <p>
                        Both pilots onboard were killed in the accident:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Squadron Leader Anuj Vashishth</li>
                        <li>Flight Lieutenant Purvesh Duragkar</li>
                    </ul>

                    <p>
                        The aircraft was performing a training sortie, demonstrating that even routine missions carry operational risks.
                    </p>

                </div>
            </section>


            {/* ================= CAUSES ================= */}
            <section className="py-16 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-gray-800">

                    <h3 className="font-bold text-xl">Possible Causes Investigated</h3>

                    <ul className="list-disc pl-6 space-y-3">

                        <li>
                            <strong>Technical System Failure</strong> — Modern fighters contain thousands of components including engines, hydraulics, and avionics systems which may malfunction.
                        </li>

                        <li>
                            <strong>Environmental Conditions</strong> — The mountainous terrain of Northeast India presents complex weather patterns and low-visibility conditions.
                        </li>

                        <li>
                            <strong>Operational Complexity</strong> — The Su-30MKI operates at speeds approaching Mach 2 with extreme maneuver loads and complex sensor systems.
                        </li>

                    </ul>

                </div>
            </section>


            {/* ================= TRAINING PIPELINE ================= */}
            <section className="py-16 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-gray-800">

                    <h3 className="font-bold text-xl">Fighter Pilot Training Pipeline</h3>

                    <p>
                        The Indian Air Force follows a structured multi-phase training program for fighter pilots.
                    </p>

                    <ul className="list-disc pl-6 space-y-3">

                        <li>
                            <strong>Selection & Initial Training</strong> — Candidates enter through NDA, CDS, or AFCAT and train at the Air Force Academy in Dundigal.
                        </li>

                        <li>
                            <strong>Basic Flight Training</strong> — Pilots learn aircraft handling, navigation, and instrument flying.
                        </li>

                        <li>
                            <strong>Advanced Jet Training</strong> — Pilots practice high-speed flight, formation flying, and tactical maneuvers.
                        </li>

                        <li>
                            <strong>Fighter Conversion</strong> — Operational conversion training on aircraft such as the Su-30MKI including radar and combat systems training.
                        </li>

                    </ul>

                </div>
            </section>


            {/* ================= SIMULATOR ROLE ================= */}
            <section className="py-16 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-gray-800">

                    <h3 className="font-bold text-xl">Role of Su-30MKI Simulators</h3>

                    <ul className="list-disc pl-6 space-y-3">

                        <li>
                            <strong>Full Cockpit Replica</strong> — Accurate replication of cockpit switches, multifunction displays, and HUD systems.
                        </li>

                        <li>
                            <strong>Motion Platform</strong> — Simulates acceleration forces, turbulence, and combat maneuvers.
                        </li>

                        <li>
                            <strong>Visual Combat Environment</strong> — Dome display systems simulate enemy aircraft, missile launches, radar tracking, and battlefield terrain.
                        </li>

                    </ul>

                </div>
            </section>


            {/* ================= LESSONS ================= */}
            <section className="py-16 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 text-gray-800">

                    <h3 className="font-bold text-xl">Key Lessons for Fighter Training</h3>

                    <ul className="list-disc pl-6 space-y-3">

                        <li>Simulation training must replicate extreme operational conditions.</li>

                        <li>Pilot situational awareness training is critical for complex missions.</li>

                        <li>Real-time aircraft health monitoring improves safety.</li>

                        <li>Mission rehearsal through simulators reduces operational risk.</li>

                    </ul>

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
                            INTERNATIONAL AIR COMBAT EXERCISES
                        </h3>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default Su30CaseStudy4
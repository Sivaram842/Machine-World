import Excercises1 from "../../assets/Excercises1.jpg";
import Excercises2 from "../../assets/Excercises2.png";
import Excercises from "../../assets/Excercises.jpg";
const Su30CaseStudy3 = () => {
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
                    Su-30MKI <br />
                    International <br />
                    Air Combat <br />
                    Exercises and <br />
                    Operational <br />
                    Training
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The Su-30MKI regularly participates in major international air combat exercises, enabling Indian Air Force pilots to train against advanced fighter aircraft and complex combat scenarios.
                </p>
            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">
                    <img
                        src={Excercises1}
                        alt="Su-30MKI international air exercise"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />
                </div>
            </section>


            {/* ================= FIRST CONTENT BLOCK ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The <strong>Su-30MKI</strong> plays a central role in international air combat exercises conducted with allied air forces around the world. These exercises allow pilots to train against different aircraft platforms, tactical doctrines, and operational environments.
                    </p>

                    <p>
                        Such exercises simulate real-world combat conditions and provide valuable opportunities for pilots to test aircraft performance, tactics, and coordination with other air forces.
                    </p>

                    <p>
                        Major international exercises involving the Su-30MKI include:
                    </p>

                    <ul className="space-y-2 list-disc pl-6">
                        <li>Red Flag – United States</li>
                        <li>Garuda – France</li>
                        <li>Indradhanush – United Kingdom</li>
                        <li>Cope India – Joint India-US air exercises</li>
                    </ul>

                </div>
            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">
                    <img
                        src={Excercises2}
                        alt="Su-30MKI air combat training"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />
                </div>
            </section>


            {/* ================= BULLET SECTION ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        During these exercises, pilots participate in a wide range of simulated combat scenarios designed to replicate complex battlefield conditions:
                    </p>

                    <ul className="space-y-2 md:space-y-3 list-disc pl-6">
                        <li>Beyond Visual Range (BVR) missile combat</li>
                        <li>Close-range dogfighting maneuvers</li>
                        <li>Electronic warfare and radar jamming scenarios</li>
                        <li>Air defense and interception missions</li>
                        <li>Ground strike and precision attack operations</li>
                    </ul>

                    <p>
                        These training scenarios allow pilots to gain experience in highly dynamic and unpredictable combat environments.
                    </p>

                </div>
            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[900px] mx-auto">
                    <img
                        src={Excercises}
                        alt="Su-30MKI dogfight training"
                        className="w-full object-contain"
                    />
                </div>
            </section>


            {/* ================= FINAL CONTENT ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        In several international exercises, the Su-30MKI has demonstrated exceptional maneuverability, powerful radar systems, and strong multi-role combat performance.
                    </p>

                    <p>
                        The aircraft has trained against some of the most advanced fighters in the world, including:
                    </p>

                    <ul className="space-y-2 list-disc pl-6">
                        <li>F-15 Eagle</li>
                        <li>F-16 Fighting Falcon</li>
                        <li>Rafale</li>
                        <li>Eurofighter Typhoon</li>
                    </ul>

                    <p>
                        These exercises significantly improve pilot skills, tactical decision-making, and coordination with allied forces. Many of the complex combat scenarios practiced during these events are first developed and tested in high-fidelity flight simulators before real flight missions.
                    </p>

                </div>
            </section>


            {/* ================= SEE LATEST UPDATES ================= */}
            <section className="py-20 md:py-32 px-6 md:px-16">
                <h2 className="uppercase tracking-[3px] text-xs md:text-sm mb-10 md:mb-12">
                    More Defense Case Studies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

                    {/* CARD 1 */}
                    <div className="group bg-[#e6e6e6] p-8 md:p-20 min-h-[380px] md:h-[520px] flex flex-col justify-between transition-all duration-300 hover:bg-blue-800">
                        <p className="text-sm text-gray-700 group-hover:text-white">
                            Case Study
                        </p>

                        <div>
                            <h3 className="uppercase font-extrabold text-[18px] md:text-[22px] leading-7 md:leading-8 group-hover:text-white">
                                BRAHMOS INTEGRATION WITH SU-30MKI
                            </h3>

                            <p className="mt-4 md:mt-6 text-[14px] md:text-[15px] group-hover:text-white">
                                Transforming the Su-30MKI into a long-range supersonic strike platform.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="group bg-[#e6e6e6] p-8 md:p-16 min-h-[380px] md:h-[520px] flex flex-col justify-between transition-all duration-300 hover:bg-blue-800">
                        <p className="text-sm text-gray-700 group-hover:text-white">
                            Case Study
                        </p>
                        <h3 className="uppercase font-extrabold text-[18px] md:text-[20px] leading-7 group-hover:text-white">
                            SUPER SUKHOI MODERNIZATION PROGRAM
                        </h3>
                    </div>

                    {/* CARD 3 */}
                    <div className="group bg-[#e6e6e6] p-8 md:p-16 min-h-[380px] md:h-[520px] flex flex-col justify-between transition-all duration-300 hover:bg-blue-800">
                        <p className="text-sm text-gray-700 group-hover:text-white">
                            Case Study
                        </p>
                        <h3 className="uppercase font-extrabold text-[18px] md:text-[20px] leading-7 group-hover:text-white">
                            SU-30MKI INTERNATIONAL AIR COMBAT EXERCISES
                        </h3>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Su30CaseStudy3
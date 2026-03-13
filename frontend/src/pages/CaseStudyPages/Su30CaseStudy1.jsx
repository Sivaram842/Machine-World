import Brahmos1 from "../../assets/Brahmos1.jpg";
import Brahmos2 from "../../assets/Brahmos2.jpg";
import BrahmosIntegration from "../../assets/BrahmosIntegration.png";
const Su30CaseStudy1 = () => {
    return (
        <div className="bg-[#f3f3f3] text-black">

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
                    BrahMos Missile <br />
                    Integration with <br />
                    Su-30MKI Fighter <br />
                    Aircraft for <br />
                    Long-Range <br />
                    Precision Strike
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The integration of the BrahMos supersonic cruise missile with the Su-30MKI created one of the most powerful air-launched strike capabilities in Asia, enabling India to conduct high-speed precision attacks against strategic targets.
                </p>
            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">
                    <img
                        src={Brahmos1}
                        alt="Su-30MKI carrying BrahMos missile"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />
                </div>
            </section>


            {/* ================= FIRST CONTENT BLOCK ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The integration of the <strong>BrahMos supersonic cruise missile</strong> with the
                        <strong> Su-30MKI multirole fighter aircraft</strong> represents a major milestone in India’s
                        indigenous defense capability. This program transformed the Su-30MKI into a long-range
                        precision strike platform capable of engaging strategic targets deep inside hostile territory.
                    </p>

                    <p>
                        The project was executed through close collaboration between the
                        <strong> Defence Research and Development Organisation (DRDO)</strong>,
                        <strong> Hindustan Aeronautics Limited (HAL)</strong>,
                        <strong> BrahMos Aerospace</strong>, and the
                        <strong> Indian Air Force</strong>.
                        Each organization contributed expertise in missile technology, avionics integration,
                        aircraft structural engineering, and operational testing.
                    </p>

                    <p>
                        The air-launched BrahMos variant required significant redesign compared to its naval
                        and ground-based versions. Engineers had to ensure safe carriage, release, and
                        high-speed launch while maintaining aircraft stability and mission effectiveness.
                    </p>

                </div>
            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">
                    <img
                        src={Brahmos2}
                        alt="BrahMos missile integration testing"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-contain"
                    />
                </div>
            </section>


            {/* ================= BULLET SECTION ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Integrating a missile weighing nearly <strong>2.5 tons</strong> posed major
                        engineering challenges and required extensive aircraft modifications.
                        Key technical developments included:
                    </p>

                    <ul className="space-y-2 md:space-y-3 list-disc pl-6">
                        <li>Structural reinforcement of the Su-30MKI airframe</li>
                        <li>Development of a modified heavy-duty weapon mounting system</li>
                        <li>Flight control software updates to maintain aerodynamic stability</li>
                        <li>Mission computer integration for missile targeting and launch</li>
                        <li>Extensive aerodynamic modelling and flight testing</li>
                        <li>Over 100 structural and avionics modifications to the aircraft</li>
                    </ul>

                </div>
            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[900px] mx-auto">
                    <img
                        src={BrahmosIntegration}
                        alt="BrahMos air launched missile system"
                        className="w-full object-contain"
                    />
                </div>
            </section>


            {/* ================= FINAL CONTENT ================= */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        After successful integration, the Su-30MKI gained the ability to launch the
                        BrahMos missile at supersonic speeds approaching <strong>Mach 3</strong>,
                        delivering precision strikes against both maritime and land-based targets.
                    </p>

                    <p>
                        The missile’s stand-off range of <strong>300–500 km</strong> enables the aircraft
                        to destroy enemy ships, critical infrastructure, or strategic installations
                        without entering hostile air-defense zones.
                    </p>

                    <p>
                        The Su-30MKI-BrahMos combination significantly enhances India’s
                        strategic deterrence capability and maritime strike power across the
                        Indian Ocean Region.
                    </p>

                    <ul className="space-y-2 font-medium">
                        <li>Supersonic strike capability up to Mach 3</li>
                        <li>Stand-off attack range of 300–500 km</li>
                        <li>Ability to target naval vessels and ground infrastructure</li>
                    </ul>

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
                            ASTRA BVR MISSILE INTEGRATION WITH TEJAS
                        </h3>
                    </div>

                    {/* CARD 3 */}
                    <div className="group bg-[#e6e6e6] p-8 md:p-16 min-h-[380px] md:h-[520px] flex flex-col justify-between transition-all duration-300 hover:bg-blue-800">
                        <p className="text-sm text-gray-700 group-hover:text-white">
                            Case Study
                        </p>
                        <h3 className="uppercase font-extrabold text-[18px] md:text-[20px] leading-7 group-hover:text-white">
                            RAFALE METEOR MISSILE NETWORK WARFARE
                        </h3>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Su30CaseStudy1
import Tejas5 from "../../assets/Tejas5.jpg";
import Tejas51 from "../../assets/Tejas5-1.jpg";
import Tejas52 from "../../assets/Tejas5-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function TejasCaseStudy5() {
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

                        Tejas Naval Variant – <br />
                        Aircraft Carrier Operations

                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                        The naval variant of the HAL Tejas fighter aircraft was developed to
                        operate from Indian aircraft carriers, requiring major engineering
                        modifications to handle short takeoffs, arrested landings, and
                        high-stress carrier operations.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Tejas5}
                            alt="Tejas naval fighter prototype"
                            className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
               text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <p>
                            The naval version of HAL Tejas was designed to operate from
                            aircraft carriers of the Indian Navy. Unlike conventional fighter
                            aircraft that operate from long runways, carrier-based aircraft
                            must manage short takeoffs, steep approaches, and high landing
                            stresses.
                        </p>

                        <p>
                            India required a naval fighter capable of operating from aircraft
                            carriers such as <strong>INS Vikramaditya</strong> and
                            <strong> INS Vikrant</strong>.
                        </p>

                        <p>
                            To simulate carrier operations on land, a
                            <strong> Shore-Based Test Facility (SBTF)</strong> was constructed
                            at <strong>INS Hansa in Goa</strong>.
                        </p>

                        <p>
                            The naval Tejas program began in the early 2000s with two main
                            prototypes:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>NP-1 (Naval Prototype 1) – initial flight testing</li>

                            <li>NP-2 (Naval Prototype 2) – carrier landing trials</li>

                        </ul>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Tejas51}
                            alt="Tejas naval ski jump test"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                        />

                    </div>
                </section>


                {/* ================= ENGINEERING CHALLENGES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
               text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <p>
                            Carrier operations required significant structural and aerodynamic
                            changes compared with the Indian Air Force version of the aircraft.
                        </p>

                        <p className="font-semibold">Key design changes included:</p>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Strengthened landing gear for heavy carrier landings</li>

                            <li>Arrestor hook system for stopping on short carrier decks</li>

                            <li>Leading-edge vortex controllers for improved low-speed control</li>

                            <li>Reinforced airframe structure for landing stress</li>

                            <li>Modified flight control laws for safe carrier approaches</li>

                        </ul>

                        <p className="font-semibold">Operational requirements included:</p>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Short takeoff using ski-jump ramps</li>

                            <li>Controlled descent at steep approach angles</li>

                            <li>Arrested landings using carrier cables</li>

                            <li>Precise low-speed handling</li>

                        </ul>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Tejas52}
                            alt="Tejas arrested landing test"
                            className="w-full object-cover"
                        />

                    </div>

                </section>


                {/* ================= MILESTONE TESTS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
               text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Major Milestone Tests
                        </h2>

                        <p className="font-semibold">2012–2014: Initial Naval Prototype Flights</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>NP-1 conducted its first flight in 2012</li>
                            <li>Focused on aerodynamic testing and carrier approach simulations</li>
                        </ul>

                        <p className="font-semibold">2020: First Ski-Jump Takeoff</p>

                        <p>
                            The naval Tejas successfully performed a ski-jump takeoff from the
                            test facility in Goa, demonstrating carrier launch capability
                            without catapult assistance.
                        </p>

                        <p className="font-semibold">2020: Successful Arrested Landing</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Hooked the arrestor cable</li>
                            <li>Stopped the aircraft within 100 meters</li>
                            <li>Validated landing gear and hook system</li>
                        </ul>

                    </div>

                </section>


                {/* ================= STRATEGIC OUTCOMES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Strategic Outcomes
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Development of carrier aviation expertise in India</li>

                            <li>Experience in naval aircraft design</li>

                            <li>Testing infrastructure for future carrier fighters</li>

                        </ul>

                    </div>

                </section>


                {/* ================= LESSONS LEARNED ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Lessons Learned
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">

                            <li>Carrier aircraft require higher thrust-to-weight ratios</li>

                            <li>Twin-engine designs improve safety over sea</li>

                            <li>Indigenous carrier aviation capability is critical for naval power</li>

                        </ul>

                        <p>
                            The technologies developed through the naval Tejas program will
                            influence future naval fighter programs and unmanned carrier
                            aircraft development.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />

        </div>
    );
}
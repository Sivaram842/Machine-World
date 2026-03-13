import Mig29K4 from "../../assets/Mig29K-4.jpg";
import Mig29K41 from "../../assets/Mig29K-4-1.jpg";
import Mig29K42 from "../../assets/Mig29K-4-2.jpg";

export default function Mig29KCaseStudy4() {
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

                    MiG-29K Arrested <br />
                    Landing System
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    Carrier landings are among the most demanding aviation operations.
                    The MiG-29K uses an arrestor hook system that allows the aircraft to
                    stop safely on the extremely short runway of an aircraft carrier.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig29K4}
                        alt="MiG-29K carrier landing"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Landing on an aircraft carrier is one of the most challenging
                        operations for fighter pilots because carrier runways are much
                        shorter than conventional airbase runways.
                    </p>

                    <p>
                        To safely stop the aircraft, the <strong>MiG-29K</strong> uses an
                        advanced <strong>arrestor hook landing system</strong> that rapidly
                        decelerates the aircraft after touchdown.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig29K41}
                        alt="MiG-29K arrestor hook landing"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= LANDING PROCESS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        How Arrested Landing Works
                    </h2>

                    <ol className="list-decimal pl-6 space-y-2">

                        <li>The pilot approaches the carrier at a controlled descent angle.</li>

                        <li>The aircraft touches down on the carrier deck.</li>

                        <li>
                            A tail hook attached to the aircraft catches one of several
                            arrestor cables stretched across the deck.
                        </li>

                        <li>
                            The arrestor cable rapidly slows the aircraft to a complete stop.
                        </li>

                    </ol>

                    <p>
                        This entire process typically stops the aircraft within
                        <strong> 90–120 meters</strong>.
                    </p>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Mig29K42}
                        alt="MiG-29K landing gear and hook system"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= ENGINEERING SYSTEMS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Key Engineering Systems
                    </h2>

                    <h3 className="font-bold text-[18px]">Tail Hook Mechanism</h3>

                    <p>
                        The arrestor hook must withstand extremely high deceleration
                        forces when the aircraft catches the arresting cable.
                    </p>

                    <h3 className="font-bold text-[18px]">Reinforced Landing Gear</h3>

                    <p>
                        Carrier landings generate large vertical forces, requiring the
                        MiG-29K to use specially reinforced landing gear.
                    </p>

                    <h3 className="font-bold text-[18px]">Optical Landing System</h3>

                    <p>
                        Pilots rely on optical guidance systems installed on the carrier
                        to maintain the correct landing angle during approach.
                    </p>

                </div>

            </section>


            {/* ================= OPERATIONAL IMPORTANCE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Operational Importance
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Allows fighter aircraft to operate from short carrier decks</li>

                        <li>Enables rapid recovery of aircraft after missions</li>

                        <li>Supports continuous naval air operations</li>

                    </ul>

                </div>

            </section>

        </div>
    );
}
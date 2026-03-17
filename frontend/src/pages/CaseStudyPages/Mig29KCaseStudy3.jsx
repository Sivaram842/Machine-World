import Mig29K3 from "../../assets/Mig29K-3.jpg";
import Mig29K31 from "../../assets/Mig29K-3-1.jpg";
import Mig29K32 from "../../assets/Mig29K-3-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29KCaseStudy3() {
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

                        MiG-29K Ski-Jump <br />
                        Takeoff Operations
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        The MiG-29K uses a STOBAR system where a ski-jump ramp enables
                        rapid altitude gain during short carrier takeoff runs.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K3}
                            alt="MiG-29K ski jump launch"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>

                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            Many carriers, including those of the
                            <strong className="text-white"> Indian Navy</strong>, use
                            <strong className="text-white"> STOBAR</strong> launch systems.
                        </p>

                        <p>
                            In this system, the <strong className="text-white">MiG-29K</strong>
                            takes off using a <strong className="text-white">ski-jump ramp</strong>
                            at the front of the deck.
                        </p>

                        <p>
                            The ramp helps compensate for short runway length by converting
                            forward motion into upward lift.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K31}
                            alt="MiG-29K carrier takeoff"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= PROCESS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            How Ski-Jump Takeoff Works
                        </h2>

                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Full afterburner acceleration along the deck</li>
                            <li>Climb along the ski-jump ramp</li>
                            <li>Upward redirection of velocity</li>
                            <li>Transition into climb and continued acceleration</li>
                        </ol>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K32}
                            alt="MiG-29K cockpit during launch"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>

                {/* ================= ENGINEERING ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Engineering Factors
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">
                            Powerful Engines
                        </h3>

                        <p>
                            <strong className="text-white">RD-33MK engines</strong> provide
                            the thrust required for short takeoff.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">
                            High Lift Aerodynamics
                        </h3>

                        <p>
                            Wing design generates lift at low speeds during ramp exit.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">
                            Flight Control Systems
                        </h3>

                        <p>
                            Digital controls stabilize the aircraft during launch transition.
                        </p>

                    </div>

                </section>


                {/* ================= ADVANTAGES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Advantages
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>No need for complex catapult systems</li>
                            <li>Reduced carrier mechanical complexity</li>
                            <li>Supports operations from smaller carriers</li>
                        </ul>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
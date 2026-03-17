import Mig29K4 from "../../assets/Mig29K-4.jpg";
import Mig29K41 from "../../assets/Mig29K-4-1.jpg";
import Mig29K42 from "../../assets/Mig29K-4-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29KCaseStudy4() {
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

                        MiG-29K Arrested <br />
                        Landing System
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        Carrier landings demand precision and control. The MiG-29K uses an
                        arrestor hook system to safely stop on extremely short carrier decks.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K4}
                            alt="MiG-29K carrier landing"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            Carrier landings are among the most challenging operations in aviation
                            due to extremely short runways and moving decks.
                        </p>

                        <p>
                            The <strong className="text-white">MiG-29K</strong> uses an
                            <strong className="text-white"> arrestor hook system</strong> to
                            rapidly decelerate after touchdown.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K41}
                            alt="MiG-29K arrestor hook landing"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= PROCESS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            How Arrested Landing Works
                        </h2>

                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Controlled descent approach</li>
                            <li>Touchdown on carrier deck</li>
                            <li>Tail hook engages arrestor cable</li>
                            <li>Rapid deceleration to full stop</li>
                        </ol>

                        <p>
                            The aircraft typically stops within
                            <strong className="text-white"> 90–120 meters</strong>.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K42}
                            alt="MiG-29K landing gear and hook system"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= ENGINEERING ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Key Engineering Systems
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">
                            Tail Hook Mechanism
                        </h3>

                        <p>
                            Designed to withstand extreme deceleration forces during cable engagement.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">
                            Reinforced Landing Gear
                        </h3>

                        <p>
                            Absorbs high vertical impact forces during carrier landing.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">
                            Optical Landing System
                        </h3>

                        <p>
                            Provides visual guidance to maintain correct approach angle.
                        </p>

                    </div>

                </section>


                {/* ================= IMPORTANCE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Importance
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enables operation from short carrier decks</li>
                            <li>Supports rapid aircraft recovery</li>
                            <li>Maintains continuous naval air operations</li>
                        </ul>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
import Mig29K7 from "../../assets/mig29k-7.jpg";
import Mig29K71 from "../../assets/mig29k-7-1.jpg";
import Mig29K72 from "../../assets/mig29k-7-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29KCaseStudy7() {
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

                        MiG-29 Crash Near Agra <br />
                        Emergency Pilot Response
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        A MiG-29 incident near Agra highlights the importance of
                        emergency procedures, pilot training, and simulator preparation.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K7}
                            alt="MiG-29 crash incident"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            In November 2024, an <strong className="text-white">Indian Air Force MiG-29</strong>
                            crashed near Agra during a training mission due to a technical malfunction.
                        </p>

                        <p>
                            The pilot detected abnormal flight behavior and initiated emergency procedures.
                        </p>

                        <p>
                            The aircraft was directed away from populated areas before the pilot ejected safely.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K71}
                            alt="MiG-29 emergency training"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= ANALYSIS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Incident Analysis
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">
                            Technical Malfunction
                        </h3>

                        <p>
                            A system failure affected stability and flight control performance.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">
                            Pilot Decision Making
                        </h3>

                        <p>
                            The pilot followed emergency protocols and avoided populated areas.
                        </p>

                        <h3 className="font-semibold text-[18px] text-white">
                            Safe Ejection
                        </h3>

                        <p>
                            Successful ejection ensured pilot survival before aircraft impact.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K72}
                            alt="MiG-29 training simulation"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= LESSONS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Training Lessons
                        </h2>

                        <p>
                            This incident emphasizes the importance of simulator-based training.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Engine and system failure training</li>
                            <li>Decision-making under stress</li>
                            <li>Emergency ejection procedures</li>
                        </ul>

                        <p>
                            Simulators allow safe practice of high-risk scenarios.
                        </p>

                    </div>

                </section>


                {/* ================= INSIGHT ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Insight
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Critical role of pilot training</li>
                            <li>Need for realistic simulation</li>
                            <li>Importance of rapid decision-making</li>
                        </ul>

                        <p>
                            Effective training and procedures are essential for survival in
                            real-world system failures.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
import Mig297 from "../../assets/Mig29-7.avif";
import Mig2971 from "../../assets/mig-29-7-1.jpg";
import Mig2972 from "../../assets/mig29-7-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29CaseStudy7() {
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

                        2022 Goa Sea Crash <br />
                        MiG-29K Training Incident
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        A MiG-29K of the Indian Navy crashed into the Arabian Sea near Goa
                        during a training sortie, highlighting the importance of emergency
                        procedures and pilot training.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig297}
                            alt="MiG-29K crash case study"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= INCIDENT BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            In October 2022, a <strong className="text-white">MiG-29K</strong> operated by the
                            Indian Navy experienced a technical malfunction during a training sortie.
                        </p>

                        <p>
                            While flying over the <strong className="text-white">Arabian Sea near Goa</strong>,
                            the pilot detected abnormal behavior indicating a possible system or engine failure.
                        </p>

                        <p>
                            Unable to safely recover the aircraft, the pilot executed emergency procedures
                            and ejected before the aircraft crashed into the sea.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig2971}
                            alt="MiG-29K training mission"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>

                {/* ================= INCIDENT DETAILS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Incident Details
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Aircraft: MiG-29K naval fighter</li>
                            <li>Location: Arabian Sea near Goa</li>
                            <li>Mission: Routine training sortie</li>
                            <li>Cause: Technical malfunction</li>
                            <li>Pilot: Ejected safely</li>
                        </ul>

                        <p>
                            Naval search-and-rescue teams quickly located and recovered the pilot safely.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig2972}
                            alt="MiG-29K naval fighter"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>

                {/* ================= INVESTIGATION ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Investigation and Analysis
                        </h2>

                        <p>
                            The Indian Navy initiated a Board of Inquiry to determine the cause.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Flight data analysis</li>
                            <li>Engine and avionics inspection</li>
                            <li>Maintenance record review</li>
                            <li>Environmental condition assessment</li>
                        </ul>

                    </div>

                </section>


                {/* ================= LESSONS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
                text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Lessons
                        </h2>

                        <p>
                            This incident highlights the importance of advanced simulation-based training.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Engine failure scenario training</li>
                            <li>Emergency ejection procedures</li>
                            <li>Pilot decision-making under stress</li>
                            <li>Risk reduction in real missions</li>
                        </ul>

                        <p>
                            High-fidelity simulators allow pilots to safely rehearse critical emergency situations.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
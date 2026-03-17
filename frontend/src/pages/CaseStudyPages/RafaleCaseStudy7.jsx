import Rafale6 from "../../assets/Rafale7.webp";
import Rafale61 from "../../assets/Rafale7-1.avif";
import Rafale62 from "../../assets/Rafale7-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"


export default function RafaleCaseStudy7() {
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

                        Rafale Deployment at <br />
                        Hasimara Air Base
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        The Indian Air Force deployed Rafale jets at Hasimara Air Force Station,
                        strengthening air dominance in the eastern sector and enabling rapid response
                        near sensitive borders.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale6}
                            alt="Rafale Hasimara deployment"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            The <strong className="text-white">Indian Air Force</strong> strategically deployed
                            Rafale fighter jets at <strong className="text-white">Hasimara Air Force Station</strong>
                            in West Bengal.
                        </p>

                        <p>
                            This deployment formed the <strong className="text-white">No. 101 Squadron (“Falcons”)</strong>
                            under the Eastern Air Command and became operational in July 2021.
                        </p>

                        <p>
                            Hasimara is located near the Indo-Bhutan border and close to the
                            <strong className="text-white"> Chumbi Valley tri-junction</strong>,
                            making it a highly strategic air base.
                        </p>

                        <p>
                            The positioning enables effective monitoring and rapid response to
                            emerging threats in the eastern sector.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale61}
                            alt="Rafale eastern sector deployment"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= CAPABILITIES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Operational Capabilities
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Long-range precision strike capability</li>
                            <li>Air superiority and interception roles</li>
                            <li>Rapid deployment in high-threat environments</li>
                            <li>Enhanced combat readiness in eastern theatre</li>
                        </ul>

                        <p>
                            Rafale’s advanced systems significantly improve India’s
                            operational effectiveness in sensitive border regions.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale62}
                            alt="Rafale training and infrastructure"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= INFRASTRUCTURE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Base Infrastructure & Readiness
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modern training and simulator facilities</li>
                            <li>Reduced dependence on live sorties</li>
                            <li>High pilot readiness and mission efficiency</li>
                        </ul>

                        <p>
                            The base supports continuous operations while maintaining
                            efficiency and safety in training.
                        </p>

                    </div>

                </section>


                {/* ================= IMPACT ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Key Learning
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Strategic deployment ensures rapid response near sensitive borders</li>
                            <li>Continuous operational readiness enhances deterrence capability</li>
                            <li>Integrated air defense improves coordination with radar and missile systems</li>
                        </ul>

                        <p>
                            The Hasimara deployment highlights India’s evolving
                            strategic air power and regional dominance.
                        </p>

                    </div>

                </section>
            </div>
            <Footer />
        </div>
    );
}
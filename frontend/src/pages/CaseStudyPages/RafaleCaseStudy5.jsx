import Rafale5 from "../../assets/Rafale5.jpg";
import Rafale51 from "../../assets/Rafale5-1.jpg";
import Rafale52 from "../../assets/Rafale5-2.gif";

export default function RafaleCaseStudy5() {
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

                    Rafale Sensor Fusion <br />
                    and Network-Centric <br />
                    Warfare
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    Modern fighter aircraft rely on integrated sensor systems to
                    create a complete battlefield picture. Rafale was designed with
                    advanced sensor fusion architecture to support network-centric
                    warfare operations.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Rafale5}
                        alt="Rafale advanced sensor systems"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Modern air combat increasingly depends on
                        <strong> information dominance</strong>. Instead of relying on a
                        single radar system, modern fighter aircraft combine data from
                        multiple sensors to create a comprehensive understanding of the
                        battlefield.
                    </p>

                    <p>
                        The <strong>Dassault Rafale</strong> was among the first fighters
                        designed with advanced <strong>sensor fusion architecture</strong>.
                        This allows pilots to receive integrated data from radar,
                        infrared sensors, electronic warfare systems, and external
                        command networks.
                    </p>

                    <p>
                        Such capabilities enable Rafale to operate effectively in
                        <strong> network-centric warfare environments</strong> where
                        multiple aircraft and command systems share real-time
                        operational information.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Rafale51}
                        alt="Rafale radar and sensors"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= KEY SENSOR SYSTEMS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h3 className="font-bold text-[18px]">RBE2 AESA Radar</h3>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Long-range air target detection</li>
                        <li>Multiple target tracking</li>
                        <li>Ground mapping capability</li>
                        <li>High resistance to electronic jamming</li>
                    </ul>

                    <p>
                        AESA radars use hundreds of small transmit-receive modules,
                        enabling faster scanning speeds and improved reliability
                        compared with traditional radar systems.
                    </p>

                    <h3 className="font-bold text-[18px]">Infrared Search and Track (IRST)</h3>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Passive detection of enemy aircraft</li>
                        <li>Tracking of stealth targets</li>
                        <li>Reduced detection risk because no radar emission</li>
                    </ul>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Rafale52}
                        alt="Rafale electronic warfare systems"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= ELECTRONIC WARFARE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h3 className="font-bold text-[18px]">
                        SPECTRA Electronic Warfare Suite
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Radar warning detection</li>

                        <li>Missile approach warning</li>

                        <li>Electronic jamming and countermeasures</li>

                        <li>Threat location and identification</li>

                    </ul>

                </div>

            </section>


            {/* ================= SENSOR FUSION ARCHITECTURE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Sensor Fusion Architecture
                    </h2>

                    <p>
                        Instead of displaying separate information from each sensor,
                        Rafale integrates data through a central sensor fusion computer.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Processes radar, infrared, and electronic warfare data</li>

                        <li>Removes redundant or conflicting information</li>

                        <li>Creates a single tactical battlefield display</li>

                    </ul>

                </div>

            </section>


            {/* ================= BENEFITS AND ADVANTAGES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Operational Advantages
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Faster decision making for pilots</li>

                        <li>Reduced workload during combat missions</li>

                        <li>Improved situational awareness</li>

                        <li>Simultaneous engagement of multiple targets</li>

                        <li>Better coordination with other aircraft and command systems</li>

                    </ul>

                    <p>
                        These capabilities significantly increase Rafale’s effectiveness
                        in modern network-centric air combat environments.
                    </p>

                </div>

            </section>

        </div>
    );
}
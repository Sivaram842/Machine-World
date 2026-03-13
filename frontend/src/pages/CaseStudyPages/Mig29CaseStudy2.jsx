import Mig292 from "../../assets/Mig29-2.jpg";
import Mig2921 from "../../assets/Mig29-2-1.jpg";
import Mig2922 from "../../assets/Mig29-2-2.jpg";

export default function Mig29CaseStudy2() {
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

                    MiG-29 in the <br />
                    Gulf War <br />
                    Combat Operations
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The MiG-29 fighter aircraft saw combat during the Gulf War,
                    where Iraqi Air Force pilots attempted to defend their airspace
                    against coalition aircraft equipped with advanced avionics
                    and superior air combat capabilities.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig292}
                        alt="MiG-29 Gulf War operations"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The <strong>Mikoyan MiG-29</strong> participated in combat
                        during the <strong>1991 Gulf War</strong>, when Iraqi forces
                        deployed the aircraft against coalition air forces led by
                        the United States.
                    </p>

                    <p>
                        Iraq had acquired MiG-29 fighters in the
                        <strong> late 1980s</strong> as part of an effort to modernize
                        its air force and strengthen its air defense capability.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig2921}
                        alt="MiG-29 aerial combat training"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= COMBAT ROLES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        During the Gulf War, Iraqi MiG-29 aircraft attempted to
                        perform several important combat missions:
                    </p>

                    <ul className="space-y-2 md:space-y-3 list-disc pl-6">

                        <li>Air defense missions to protect Iraqi airspace</li>

                        <li>Interception of coalition aircraft</li>

                        <li>Escort missions for Iraqi bomber aircraft</li>

                    </ul>

                    <p>
                        However, Iraqi pilots faced highly capable coalition fighters
                        such as the <strong>F-15 Eagle</strong> and
                        <strong> F-16 Fighting Falcon</strong>.
                    </p>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Mig2922}
                        alt="MiG-29 cockpit and avionics"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= OPERATIONAL CHALLENGES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Despite its advanced aerodynamic design, the MiG-29 faced
                        several operational challenges during the conflict.
                    </p>

                    <ul className="space-y-2 font-medium list-disc pl-6">

                        <li>Limited pilot training and combat experience</li>

                        <li>Radar systems less capable than Western aircraft</li>

                        <li>Lack of integrated air defense coordination</li>

                        <li>Coalition air superiority and technological advantage</li>

                    </ul>

                </div>

            </section>


            {/* ================= LESSONS LEARNED ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Lessons Learned
                    </h2>

                    <ul className="space-y-2 list-disc pl-6">

                        <li>Advanced avionics and sensor technology are critical in modern air combat</li>

                        <li>Pilot training significantly affects combat effectiveness</li>

                        <li>Networked air defense systems provide strong tactical advantages</li>

                    </ul>

                    <p>
                        These lessons influenced later modernization programs and
                        upgrades for MiG-29 aircraft used by many countries.
                    </p>

                </div>

            </section>

        </div>
    );
}
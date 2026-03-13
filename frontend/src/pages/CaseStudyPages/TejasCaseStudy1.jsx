import Tejas1 from "../../assets/Tejas1.jpg";
import Tejas12 from "../../assets/Tejas1-2.png";
import Tejas13 from "../../assets/Tejas1-3.jpg";

export default function TejasCaseStudy1() {
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

                    Development of India’s <br />
                    Indigenous Fighter -  <br />
                    HAL Tejas
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The HAL Tejas Light Combat Aircraft program represents one of India's
                    most ambitious aerospace projects, aiming to replace the aging MiG-21
                    fleet with a modern indigenous multirole fighter aircraft.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}

            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Tejas1}
                        alt="HAL Tejas Fighter Aircraft"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= FIRST CONTENT BLOCK ================= */}

            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The <strong>HAL Tejas Light Combat Aircraft (LCA)</strong> program
                        represents one of the most ambitious aerospace initiatives undertaken
                        by India. Initiated in the <strong>1980s</strong>, the project aimed to
                        replace the aging MiG-21 fleet of the Indian Air Force with a modern
                        indigenous fighter aircraft.
                    </p>

                    <p>
                        The aircraft was designed by the
                        <strong> Aeronautical Development Agency (ADA)</strong> and
                        manufactured by <strong>Hindustan Aeronautics Limited (HAL)</strong>,
                        involving collaboration with multiple DRDO laboratories and
                        Indian private suppliers.
                    </p>

                    <p>
                        After decades of development, testing, and refinement, the
                        <strong> Tejas fighter aircraft officially entered operational service
                            with the Indian Air Force in 2015</strong>, marking India’s entry into
                        the small group of countries capable of designing and producing
                        advanced fighter aircraft.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}

            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Tejas12}
                        alt="Tejas development and testing"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= KEY CHALLENGES ================= */}

            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        During development, the Tejas program faced several major
                        technological challenges that required significant engineering
                        breakthroughs:
                    </p>

                    <ul className="space-y-2 md:space-y-3 list-disc pl-6">

                        <li>Designing a quadruplex digital fly-by-wire flight control system</li>

                        <li>Development of composite airframe structures</li>

                        <li>Integration of modern avionics and radar systems</li>

                        <li>Managing international technology restrictions after nuclear tests</li>

                        <li>Engine development challenges and reliance on GE F404 engines</li>

                    </ul>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}

            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Tejas13}
                        alt="HAL Tejas cockpit and avionics"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= ENGINEERING INNOVATIONS ================= */}

            <section className="pt-12 pb-6 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8 
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        The Tejas program introduced several advanced aerospace technologies
                        into India’s defense ecosystem:
                    </p>

                    <ul className="space-y-2 font-medium list-disc pl-6">

                        <li>Composite airframe structure (over 45%) reducing weight and radar signature</li>

                        <li>Modern glass cockpit with multifunction displays</li>

                        <li>Digital fly-by-wire flight control system</li>

                        <li>Multi-role capability for air-to-air and air-to-ground missions</li>

                        <li>
                            Ability to carry BVR and WVR missiles, bombs, and precision weapons
                            across 9 hardpoints
                        </li>

                    </ul>

                    <p>
                        These innovations significantly strengthened India's indigenous
                        aerospace engineering capability and laid the foundation for
                        future fighter programs.
                    </p>

                </div>

            </section>


            {/* ================= OUTCOMES ================= */}

            <section className="py-10 md:py-14 px-6">

                <div className="max-w-[760px] mx-auto space-y-4 md:space-y-5 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase mt-6 mb-2">
                        Outcomes and Impact
                    </h2>

                    <p>
                        The Tejas program produced major strategic and technological benefits
                        for India’s defence ecosystem.
                    </p>

                    <ul className="space-y-2 font-medium list-disc pl-6">

                        <li>Creation of a domestic fighter aircraft industry</li>

                        <li>Development of advanced avionics, radar, and flight control systems</li>

                        <li>Reduced dependence on foreign fighter imports</li>

                        <li>Strengthened India’s Atmanirbhar (self-reliance) defence strategy</li>

                    </ul>

                    <p>
                        The program also provided valuable lessons for future projects such as
                        the <strong>Tejas Mk2</strong> and the
                        <strong> Advanced Medium Combat Aircraft (AMCA)</strong>.
                    </p>

                </div>

            </section>


            {/* ================= LESSONS LEARNED ================= */}

            <section className="py-10 md:py-14 px-6">

                <div className="max-w-[760px] mx-auto space-y-4 md:space-y-5 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase mt-6 mb-2">
                        Lessons Learned
                    </h2>

                    <ul className="space-y-2 list-disc pl-6">

                        <li>Indigenous aerospace programs require long development timelines</li>

                        <li>Collaboration between government labs, industry, and military is essential</li>

                        <li>
                            Strong domestic supply chains are critical for future programs like
                            Tejas Mk2 and AMCA
                        </li>

                    </ul>

                </div>

            </section>


        </div>
    );
}
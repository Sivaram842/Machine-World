import Rafale1 from "../../assets/Rafale1.jpg";
import Rafale11 from "../../assets/Rafale1-1.jpg";
import Rafale12 from "../../assets/Rafale1-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function RafaleCaseStudy1() {
    return (
        <div>
            <Navbar />
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

                        Development of Rafale <br />
                        as a Multirole Fighter
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                        The Dassault Rafale is a 4.5-generation multirole fighter developed
                        by France to perform air superiority, ground attack, reconnaissance,
                        and nuclear deterrence missions.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale1}
                            alt="Dassault Rafale fighter aircraft"
                            className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
                   text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <p>
                            The <strong>Dassault Rafale</strong> is a 4.5-generation multirole
                            fighter developed by the French aerospace company
                            <strong> Dassault Aviation</strong>.
                        </p>

                        <p>
                            The aircraft was designed to replace several older aircraft used
                            by the French armed forces while performing a wide range of
                            missions including air superiority, ground attack, reconnaissance,
                            and nuclear deterrence.
                        </p>

                        <p>
                            Development began during the <strong>1980s</strong> when France
                            decided to pursue an indigenous fighter aircraft rather than
                            join the multinational Eurofighter program.
                        </p>

                        <p>
                            Rafale performed its <strong>first flight in 1986</strong> and
                            later entered operational service with both the
                            <strong> French Air and Space Force</strong> and the
                            <strong> French Navy</strong>.
                        </p>

                        <p>
                            Unlike many fighters designed for specific roles, Rafale was
                            designed as an <strong>“omnirole” aircraft</strong>, meaning it
                            can perform multiple combat missions during a single flight.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale11}
                            alt="Rafale fighter aerodynamic design"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                        />

                    </div>
                </section>


                {/* ================= ENGINEERING FEATURES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
                   text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Key Engineering Features
                        </h2>

                        <h3 className="font-bold text-[18px]">
                            Aerodynamic Design
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Delta wing with canards improving maneuverability</li>
                            <li>Fly-by-wire flight control system</li>
                            <li>High thrust-to-weight ratio for superior performance</li>
                        </ul>

                        <p>
                            These aerodynamic characteristics provide excellent agility and
                            stability during both air-to-air combat and strike missions.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Rafale12}
                            alt="Rafale cockpit avionics"
                            className="w-full object-cover"
                        />

                    </div>

                </section>


                {/* ================= AVIONICS AND SENSORS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6
                   text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Avionics and Sensors
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>RBE2 AESA radar for long-range target detection</li>
                            <li>SPECTRA electronic warfare system</li>
                            <li>Infrared Search and Track (IRST) system</li>
                        </ul>

                        <p>
                            These integrated systems allow Rafale to detect and engage
                            enemy aircraft while minimizing its own exposure to threats.
                        </p>

                    </div>

                </section>


                {/* ================= WEAPONS CAPABILITY ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6
                   text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Weapons Capability
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Meteor beyond-visual-range missile</li>
                            <li>MICA air-to-air missile</li>
                            <li>SCALP cruise missile</li>
                            <li>Laser-guided bombs</li>
                            <li>Anti-ship missiles</li>
                        </ul>

                        <p>
                            Rafale has <strong>14 hardpoints</strong>, allowing it to carry
                            a heavy and diverse weapons payload for different mission types.
                        </p>

                    </div>

                </section>


                {/* ================= PROGRAM IMPACT ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[760px] mx-auto space-y-6
                   text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                        <h2 className="text-[24px] font-bold uppercase">
                            Impact of the Rafale Program
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Maintained France’s independent fighter aircraft development capability</li>
                            <li>Replaced multiple aircraft types with a single multirole platform</li>
                            <li>Strengthened the European aerospace industry</li>
                        </ul>

                        <p>
                            Today, the Rafale is considered one of the most capable multirole
                            fighter aircraft operating in modern air forces.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
import Mig293 from "../../assets/Mig29-3.jpg";
import Mig2931 from "../../assets/Mig29-3-1.jpg";
import Mig2932 from "../../assets/Mig29-3-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29CaseStudy3() {
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

                        MiG-29 in the <br />
                        Indian Air Force
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        The MiG-29 has served as a key air superiority fighter in the
                        Indian Air Force since the 1980s, playing a vital role in
                        protecting Indian airspace and maintaining regional air power balance.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig293}
                            alt="Indian Air Force MiG-29"
                            loading="lazy"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>

                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
                            text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            India inducted the <strong className="text-white">Mikoyan MiG-29</strong> into the
                            <strong className="text-white"> Indian Air Force</strong> during the
                            <strong className="text-white"> 1980s</strong>. The aircraft was introduced primarily
                            to counter potential threats and maintain strong air superiority capability.
                        </p>

                        <p>
                            At the time of induction, the MiG-29 became one of the most
                            advanced fighter aircraft in India’s inventory, significantly
                            strengthening national air defense capability.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig2931}
                            alt="MiG-29 Indian Air Force operations"
                            loading="lazy"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>

                {/* ================= OPERATIONAL ROLE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
                            text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            Within the Indian Air Force, the MiG-29 performs critical operational roles:
                        </p>

                        <ul className="space-y-3 list-disc pl-6">

                            <li>Air superiority missions</li>
                            <li>Interception of hostile aircraft</li>
                            <li>Escort missions for allied aircraft</li>
                            <li>Defensive counter-air operations</li>

                        </ul>

                        <p>
                            The aircraft is widely recognized for its agility,
                            high thrust-to-weight ratio, and exceptional dogfighting capability.
                        </p>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig2932}
                            alt="MiG-29 cockpit upgrade"
                            loading="lazy"
                            className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= MIG-29UPG ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8 
                            text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            MiG-29UPG Upgrade Program
                        </h2>

                        <p>
                            To extend operational life and enhance combat capability,
                            India launched the <strong className="text-white">MiG-29UPG modernization program</strong>.
                        </p>

                        <ul className="space-y-3 list-disc pl-6 font-medium">

                            <li>Zhuk-ME radar system</li>
                            <li>Modern glass cockpit</li>
                            <li>Air-to-air refueling capability</li>
                            <li>Advanced electronic warfare systems</li>
                            <li>Modern missile integration</li>

                        </ul>

                    </div>

                </section>


                {/* ================= STRATEGIC IMPORTANCE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Strategic Importance
                        </h2>

                        <p>
                            The MiG-29 remains a critical asset in India’s integrated air defense network.
                        </p>

                        <ul className="space-y-3 list-disc pl-6">

                            <li>Protection of critical airspace</li>
                            <li>Support for frontline squadrons</li>
                            <li>Rapid interception capability</li>

                        </ul>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
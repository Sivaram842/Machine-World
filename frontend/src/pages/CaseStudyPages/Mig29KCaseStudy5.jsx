import Mig29K5 from "../../assets/Mig29K-5.jpg";
import Mig29K51 from "../../assets/Mig29K-5-1.jpg";
import Mig29K52 from "../../assets/Mig29K-5-2.jpg";
import Navbar from "../../../src/components/NewNavbar"
import Footer from "../../../src/components/NewFooter"
export default function Mig29KCaseStudy5() {
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

                        MiG-29K Multirole <br />
                        Naval Strike Capability
                    </h1>

                    <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[30px] text-gray-400 max-w-[640px] mx-auto">
                        The MiG-29K evolved into a multirole naval strike fighter capable
                        of both air combat and maritime attack missions.
                    </p>

                </section>


                {/* ================= HERO IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K5}
                            alt="MiG-29K naval strike fighter"
                            className="w-full h-[300px] sm:h-[420px] md:h-[600px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= BACKGROUND ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6 md:space-y-8
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <p>
                            Originally an air-superiority fighter, the
                            <strong className="text-white"> MiG-29K</strong> evolved into a
                            <strong className="text-white"> multirole naval strike platform</strong>.
                        </p>

                        <p>
                            This transformation allows it to perform both air combat and
                            maritime strike missions, increasing operational versatility.
                        </p>

                    </div>

                </section>


                {/* ================= SECOND IMAGE ================= */}
                <section className="px-4 md:px-6">
                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K51}
                            alt="MiG-29K weapons payload"
                            className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>
                </section>


                {/* ================= WEAPONS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-8
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Key Weapons
                        </h2>

                        <h3 className="font-semibold text-[18px] text-white">
                            Air-to-Air Missiles
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>R-73 short-range missile</li>
                            <li>R-77 beyond-visual-range missile</li>
                        </ul>

                        <h3 className="font-semibold text-[18px] text-white">
                            Anti-Ship Missiles
                        </h3>

                        <p>
                            Capable of engaging naval targets at long range.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Kh-31 anti-ship missile</li>
                            <li>Kh-35 anti-ship missile</li>
                        </ul>

                    </div>

                </section>


                {/* ================= THIRD IMAGE ================= */}
                <section className="px-4 md:px-6">

                    <div className="max-w-[780px] mx-auto">

                        <img
                            src={Mig29K52}
                            alt="MiG-29K multirole weapons systems"
                            className="w-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-500"
                        />

                    </div>

                </section>


                {/* ================= STRIKE ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Precision Strike Capability
                        </h2>

                        <p>
                            The aircraft supports a wide range of strike weapons for diverse missions.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Guided bombs</li>
                            <li>Unguided rockets</li>
                            <li>Air-to-surface missiles</li>
                        </ul>

                    </div>

                </section>


                {/* ================= ROLES ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Mission Roles
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Maritime strike operations</li>
                            <li>Air superiority over fleets</li>
                            <li>Interception missions</li>
                            <li>Close air support</li>
                        </ul>

                    </div>

                </section>


                {/* ================= BENEFITS ================= */}
                <section className="py-16 md:py-24 px-6">

                    <div className="max-w-[780px] mx-auto space-y-6
               text-[16px] md:text-[18px] leading-[30px] text-gray-300">

                        <h2 className="text-[26px] font-bold uppercase text-white">
                            Strategic Benefits
                        </h2>

                        <p>
                            Multirole capability reduces the need for multiple aircraft types.
                        </p>

                        <p>
                            This improves flexibility and enhances the effectiveness of
                            carrier-based air operations.
                        </p>

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    );
}
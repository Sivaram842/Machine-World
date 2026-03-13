import Mig29K5 from "../../assets/Mig29K-5.jpg";
import Mig29K51 from "../../assets/Mig29K-5-1.jpg";
import Mig29K52 from "../../assets/Mig29K-5-2.jpg";

export default function Mig29KCaseStudy5() {
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

                    MiG-29K Multirole <br />
                    Naval Strike Capability
                </h1>

                <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-700 max-w-[620px] mx-auto">
                    The MiG-29K evolved from a pure air-superiority fighter into a
                    versatile multirole naval strike aircraft capable of performing
                    both air combat and maritime attack missions.
                </p>

            </section>


            {/* ================= HERO IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig29K5}
                        alt="MiG-29K naval strike fighter"
                        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                    />

                </div>
            </section>


            {/* ================= BACKGROUND ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6 md:space-y-8
        text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-gray-800">

                    <p>
                        Although originally designed as an air-superiority fighter,
                        the <strong>MiG-29K</strong> evolved into a powerful
                        <strong> multirole naval strike aircraft</strong>.
                    </p>

                    <p>
                        This evolution allows the aircraft to perform both
                        air-to-air combat missions and maritime strike missions,
                        making it highly versatile for carrier-based naval operations.
                    </p>

                </div>

            </section>


            {/* ================= SECOND IMAGE ================= */}
            <section className="px-4 md:px-6">
                <div className="max-w-[1100px] mx-auto">

                    <img
                        src={Mig29K51}
                        alt="MiG-29K weapons payload"
                        className="w-full h-[260px] sm:h-[360px] md:h-[520px] object-cover"
                    />

                </div>
            </section>


            {/* ================= KEY WEAPONS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-8
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Key Weapons
                    </h2>

                    <h3 className="font-bold text-[18px]">
                        Air-to-Air Missiles
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>R-73 short-range missile</li>
                        <li>R-77 beyond-visual-range missile</li>
                    </ul>

                    <h3 className="font-bold text-[18px]">
                        Anti-Ship Missiles
                    </h3>

                    <p>
                        The aircraft can launch long-range anti-ship missiles to
                        attack enemy naval vessels.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Kh-31 anti-ship missile</li>
                        <li>Kh-35 anti-ship missile</li>
                    </ul>

                </div>

            </section>


            {/* ================= THIRD IMAGE ================= */}
            <section className="px-4 md:px-6">

                <div className="max-w-[900px] mx-auto">

                    <img
                        src={Mig29K52}
                        alt="MiG-29K multirole weapons systems"
                        className="w-full object-cover"
                    />

                </div>

            </section>


            {/* ================= PRECISION STRIKE ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Precision Strike Weapons
                    </h2>

                    <p>
                        In addition to anti-ship missiles, the MiG-29K can carry
                        a variety of precision and conventional strike weapons.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Guided bombs</li>
                        <li>Unguided rockets</li>
                        <li>Air-to-surface missiles</li>
                    </ul>

                </div>

            </section>


            {/* ================= MISSION ROLES ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Mission Roles
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Maritime strike operations</li>
                        <li>Air superiority over naval fleets</li>
                        <li>Interception of hostile aircraft</li>
                        <li>Close air support for naval operations</li>
                    </ul>

                </div>

            </section>


            {/* ================= STRATEGIC BENEFITS ================= */}
            <section className="py-16 md:py-24 px-6">

                <div className="max-w-[760px] mx-auto space-y-6
        text-[16px] md:text-[18px] leading-[30px] text-gray-800">

                    <h2 className="text-[24px] font-bold uppercase">
                        Strategic Benefits
                    </h2>

                    <p>
                        Multirole capability allows naval forces to deploy fewer
                        aircraft types while still covering multiple mission
                        requirements.
                    </p>

                    <p>
                        This versatility increases operational flexibility and
                        enhances the combat effectiveness of carrier-based air wings.
                    </p>

                </div>

            </section>

        </div>
    );
}
import { useState } from "react";
import NavbarStatic from "../../components/NavbarStatic";
import Footer from "../../components/Footer";
import img from "../../assets/military.jpeg"
import img1 from "../../assets/mrheadset.png"
import img2 from "../../assets/hardware.png"
import img3 from "../../assets/vrheadset.jpeg"
import img4 from "../../assets/XR_Lab.avif"
export default function Jobs() {
    const [active, setActive] = useState("best");

    const rightContent = {
        best: "Work alongside skilled engineers, designers, and developers building advanced defence and enterprise technologies. Our small but focused team collaborates closely to build powerful real-world systems.",
        tech: "Build cutting-edge technologies across VR, AR, MR, and XR. At Antiworld, you won’t just use advanced tools — you’ll help create the next generation of simulation and immersive technology.",
        freedom: "We maintain a flexible and low-hierarchy work culture where ideas matter more than titles. Team members are trusted to take ownership and drive innovation.",
        salary: "We value the skills, dedication, and creativity our team brings. As our company grows, we ensure competitive compensation and opportunities to grow with us.",
        global: "Our technologies are designed for global industries including defence, enterprise training, and immersive simulation systems.",
        more: "Work on meaningful projects, collaborate with a passionate team, explore new technologies, and help shape the future of simulation and immersive computing."
    };

    return (
        <div>
            <NavbarStatic />
            <div className="font-sans text-black overflow-x-hidden">

                {/* HERO */}
                <section className="relative h-[70vh] md:h-[85vh] lg:h-screen flex items-center justify-center text-white">
                    <img
                        src={img}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative z-10 text-center px-6 max-w-[900px]">
                        <h1 className="text-[34px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-extrabold uppercase leading-[1.05]">
                            JOIN ANTIWORLD
                        </h1>

                        <p className="mt-6 text-[15px] sm:text-[17px] md:text-[20px] leading-[28px] md:leading-[34px] max-w-[800px] mx-auto">
                            If you want to build the future of defence technology, immersive computing,
                            and advanced simulation systems, Antiworld is the place to do it.
                        </p>

                        <p className="mt-6 text-[15px] sm:text-[17px] md:text-[20px] leading-[28px] md:leading-[34px] max-w-[800px] mx-auto">
                            We develop cockpit simulators, XR technologies, training systems, and
                            defence solutions that help industries innovate, train smarter, and operate safely.
                        </p>
                    </div>
                </section>

                {/* ABOUT COMPANY */}
                <section className="bg-[#f3f3f3] py-16 md:py-24 lg:py-32">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-6 md:px-16 items-center">
                        <img src={img3} className="w-full object-cover" />

                        <div>
                            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold uppercase leading-[1.1]">
                                Building the future of simulation & immersive technology.
                            </h2>

                            <div className="mt-8 space-y-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[26px] md:leading-[30px] text-gray-700">
                                <p>
                                    Antiworld is a technology company based in Hyderabad, India,
                                    focused on building advanced defence and enterprise solutions.
                                    Our work spans simulation systems, XR technologies, and
                                    immersive training platforms.
                                </p>

                                <p>
                                    Our team develops applications such as cockpit simulators,
                                    counter-drone systems, and immersive training environments
                                    designed for defence, education, and enterprise sectors.
                                </p>

                                <p>
                                    With a multidisciplinary team of designers, software developers,
                                    hardware engineers, and XR specialists, we build innovative
                                    solutions that combine software, hardware, and immersive
                                    technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPECT */}
                <section className="py-20 md:py-32 lg:py-48">
                    <div className="max-w-[900px] mx-auto text-center px-6">
                        <h2 className="text-[30px] sm:text-[42px] md:text-[56px] font-extrabold uppercase leading-[1.1]">
                            WHAT TO EXPECT
                        </h2>

                        <p className="mt-12 text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] md:leading-[38px] text-gray-700">
                            Our team consists of engineers, designers, and innovators working
                            together to solve complex technological challenges. With a small
                            but highly focused team, every member plays an important role in
                            shaping the technology we build.
                        </p>
                    </div>
                </section>

                {/* HOVER SECTION */}
                <section className="py-20 md:py-32 lg:py-40">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 px-6 md:px-16">

                        <div className="space-y-6 text-[28px] sm:text-[36px] md:text-[52px] uppercase font-light leading-[1.15]">
                            {[
                                ["best", "Work with a skilled team"],
                                ["tech", "Cutting-edge technology"],
                                ["freedom", "Freedom & flexibility"],
                                ["salary", "Competitive compensation"],
                                ["global", "Technology with global impact"],
                                ["more", "And much more"]
                            ].map(([key, label]) => (
                                <h3
                                    key={key}
                                    onMouseEnter={() => setActive(key)}
                                    className={`cursor-pointer transition-colors duration-300 ${active === key ? "text-black" : "text-gray-300 hover:text-blue-600"
                                        }`}
                                >
                                    {label}
                                </h3>
                            ))}
                        </div>

                        <div className="pt-6">
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] md:leading-[36px] text-gray-800 max-w-[600px]">
                                {rightContent[active]}
                            </p>
                        </div>
                    </div>
                </section>

                {/* TEAM SECTION */}
                <section className="py-20 md:py-32 lg:py-40">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

                        <div className="flex flex-col gap-10">
                            <div className="relative overflow-hidden h-auto md:h-[520px]">
                                <img src={img1} className="w-full h-full object-cover" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="uppercase font-bold text-[20px]">Software Engineering Team</h3>
                                    <p className="italic mt-4 max-w-[350px]">
                                        “We are building simulation technologies that redefine training and defence systems.”
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#f3f3f3] p-6 md:p-12 h-auto md:h-[520px] flex flex-col justify-between">
                                <h3 className="uppercase font-bold text-[22px]">Design & XR Team</h3>
                                <p className="italic text-[18px]">
                                    “Immersive technologies like VR and MR are transforming the way people learn and train.”
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10">
                            <div className="relative overflow-hidden h-auto md:h-[400px]">
                                <img src={img2} className="w-full h-full object-cover" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="uppercase font-bold text-[22px]">Hardware Engineering Team</h3>
                                    <p className="italic mt-4 max-w-[350px]">
                                        “Combining hardware and software is what enables real-world defence solutions.”
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#f3f3f3] p-6 md:p-12 h-auto md:h-[400px] flex flex-col justify-between">
                                <h3 className="uppercase font-bold text-[22px]">Simulation Development Team</h3>
                                <p className="italic text-[18px]">
                                    “Simulation systems allow industries to train efficiently while reducing real-world costs.”
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WORK CULTURE */}
                <section className="py-20 md:py-32 lg:py-40">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 px-6 md:px-16 items-center">

                        <div>
                            <h2 className="text-[30px] sm:text-[42px] md:text-[56px] font-extrabold uppercase leading-[1.1]">
                                HOW WE WORK
                            </h2>

                            <p className="mt-10 text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[34px] text-gray-700">
                                At Antiworld, we believe innovation comes from collaboration.
                                Our team works across multiple disciplines including software,
                                hardware, XR development, and design to build powerful technologies.
                            </p>

                            <ul className="mt-10 space-y-4 text-[15px] sm:text-[17px] md:text-[18px] text-gray-700">
                                <li>• Build technology that solves real-world problems.</li>
                                <li>• Experiment with emerging technologies.</li>
                                <li>• Work collaboratively across teams.</li>
                                <li>• Take ownership of your work.</li>
                                <li>• Learn continuously.</li>
                                <li>• Maintain a flexible and creative work environment.</li>
                            </ul>

                            <p className="mt-10 text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[34px] text-gray-700">
                                Our goal is to push the boundaries of simulation and immersive technologies
                                while building meaningful solutions for defence and enterprise sectors.
                            </p>
                        </div>

                        <img src={img4} className="w-full object-cover" />
                    </div>
                </section>

                {/* JOBS */}
                <section className="py-20 md:py-32">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-16">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold uppercase mb-16">
                            Browse open jobs
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                            {[
                                {
                                    title: "XR / VR Developer",
                                    dept: "Department: Immersive Technologies",
                                    loc: "Location: Hyderabad, India"
                                },
                                {
                                    title: "Web Developer",
                                    dept: "Department: Software Development",
                                    loc: "Location: Hyderabad, India"
                                },
                                {
                                    title: "Hardware Engineer",
                                    dept: "Department: Hardware Systems",
                                    loc: "Location: Hyderabad, India"
                                }
                            ].map((job, i) => (
                                <div
                                    key={i}
                                    className="group border border-gray-200 
                     p-6 md:p-10 
                     cursor-pointer 
                     transition-all duration-300 
                     hover:bg-[#1117C7] 
                     hover:border-[#1117C7]"
                                >
                                    <h3 className="uppercase font-bold text-[18px] md:text-[22px] 
                         transition-colors duration-300 
                         group-hover:text-white">
                                        {job.title}
                                    </h3>

                                    <p className="mt-4 text-gray-600 transition-colors duration-300 group-hover:text-white">
                                        {job.dept}
                                    </p>

                                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
                                        {job.loc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    );
}
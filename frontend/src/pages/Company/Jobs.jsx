import { useState } from "react";
import NavbarStatic from "../../components/NavbarStatic";
import Footer from "../../components/Footer";

export default function Jobs() {
    const [active, setActive] = useState("best");

    const rightContent = {
        best: "You’ll work with the world’s best developers, engineers and professionals. We also partner with world-class brands to develop our technology. You’ll work with them, too.",
        tech: "Work on building a tech stack that doesn’t even exist. Here you’re not only working with game-changing tech tools, you’re creating them.",
        freedom: "A low-hierarchy culture with minimal bureaucracy and maximum opportunity for you to take charge of your work. Extremely flexible working conditions with remote work opportunities supported.",
        salary: "You can’t put a price tag on passion, but we’ll show you how much we value your skills and dedication to your craft.",
        global: "Collaboration with fellow teammates representing 20+ nationalities from all around the world.",
        more: "Friendly colleagues. Flexible vacation time. Healthy and non-healthy snacks. Dedicated learning days. No costume parties. And so much more."
    };

    return (
        <div>
            <NavbarStatic />
            <div className="font-sans text-black overflow-x-hidden">

                {/* ================= HERO ================= */}
                <section className="relative h-[70vh] md:h-[85vh] lg:h-screen flex items-center justify-center text-white">
                    <img
                        src="/images/jobs-hero.jpg"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative z-10 text-center px-6 max-w-[900px]">
                        <h1 className="text-[34px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-extrabold uppercase leading-[1.05]">
                            JOIN VARJO
                        </h1>

                        <p className="mt-6 text-[15px] sm:text-[17px] md:text-[20px] leading-[28px] md:leading-[34px] max-w-[800px] mx-auto">
                            If you want to change VR, computing and the world, you’ve come to the right place.
                            If you want a job where you just show up and do the same boring stuff every day,
                            move along.
                        </p>

                        <p className="mt-6 text-[15px] sm:text-[17px] md:text-[20px] leading-[28px] md:leading-[34px] max-w-[800px] mx-auto">
                            See all open jobs in VR at Varjo below. If you’re passionate about tech and
                            love to push limits, we can’t wait to hear from you.
                        </p>
                    </div>
                </section>

                {/* ================= CALLING NEW COLLEAGUES ================= */}
                <section className="bg-[#f3f3f3] py-16 md:py-24 lg:py-32">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-6 md:px-16 items-center">
                        <img src="/images/jobs-section1.jpg" className="w-full object-cover" />

                        <div>
                            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold uppercase leading-[1.1]">
                                Calling new colleagues from all backgrounds.
                            </h2>

                            <div className="mt-8 space-y-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[26px] md:leading-[30px] text-gray-700">
                                <p>Varjo is best known for delivering virtual and mixed reality that are indistinguishable from the real world. Founded in 2016, Varjo now does business in over 40 countries worldwide with 200+ employees in Helsinki, Washington D.C. and Munich, Germany.</p>
                                <p>Our in-house R&D team produces the world’s most advanced virtual and mixed reality hardware, software, and services.</p>
                                <p>As we are developing the next computing paradigm, we need a versatile team to help ensure that the new realities are designed for everyone.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= HERE'S WHAT TO EXPECT ================= */}
                <section className="py-20 md:py-32 lg:py-48">
                    <div className="max-w-[900px] mx-auto text-center px-6">
                        <h2 className="text-[30px] sm:text-[42px] md:text-[56px] font-extrabold uppercase leading-[1.1]">
                            HERE'S WHAT TO EXPECT:
                        </h2>

                        <p className="mt-12 text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] md:leading-[38px] text-gray-700">
                            Our multicultural team consists of talents from all around the world,
                            and our daily working language is English. We believe in the power of
                            diversity – where different experiences, backgrounds, and ideas drive
                            innovation and results.
                        </p>
                    </div>
                </section>

                {/* ================= HOVER SECTION ================= */}
                <section className="py-20 md:py-32 lg:py-40">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 px-6 md:px-16">

                        <div className="space-y-6 text-[28px] sm:text-[36px] md:text-[52px] uppercase font-light leading-[1.15]">
                            {[
                                ["best", "Work with the best"],
                                ["tech", "The highest tech"],
                                ["freedom", "Lots of freedom & flexibility"],
                                ["salary", "Competitive salary & benefits"],
                                ["global", "Global footprint"],
                                ["more", "And so much more"]
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

                {/* ================= EMPLOYEE SECTION ================= */}
                <section className="py-20 md:py-32 lg:py-40">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

                        <div className="flex flex-col gap-10">
                            <div className="relative overflow-hidden h-auto md:h-[520px]">
                                <img src="/images/team1.jpg" className="w-full h-full object-cover" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="uppercase font-bold text-[20px]">Head of Engineering</h3>
                                    <p className="italic mt-4 max-w-[350px]">“In the future, VR/XR technology is going to be the default.”</p>
                                </div>
                            </div>

                            <div className="bg-[#f3f3f3] p-6 md:p-12 h-auto md:h-[520px] flex flex-col justify-between">
                                <h3 className="uppercase font-bold text-[22px]">Lead Service Designer</h3>
                                <p className="italic text-[18px]">“At Varjo, everyone appreciates the company they're working in.”</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10">
                            <div className="relative overflow-hidden h-auto md:h-[400px]">
                                <img src="/images/team2.jpg" className="w-full h-full object-cover" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="uppercase font-bold text-[22px]">Technical Director</h3>
                                    <p className="italic mt-4 max-w-[350px]">“No one has solved the problems we're solving.”</p>
                                </div>
                            </div>

                            <div className="bg-[#f3f3f3] p-6 md:p-12 h-auto md:h-[400px] flex flex-col justify-between">
                                <h3 className="uppercase font-bold text-[22px]">Principal Computer Vision Engineer</h3>
                                <p className="italic text-[18px]">“I’ve seen virtual and mixed reality evolve every decade.”</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= HOW WE LIKE TO WORK ================= */}
                <section className="py-20 md:py-32 lg:py-40">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 px-6 md:px-16 items-center">

                        <div>
                            <h2 className="text-[30px] sm:text-[42px] md:text-[56px] font-extrabold uppercase leading-[1.1]">
                                HOW WE LIKE TO WORK
                            </h2>

                            <p className="mt-10 text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[34px] text-gray-700">
                                Varjo has been lucky to have attracted a supergroup of intelligent professionals from many different backgrounds to our team...
                            </p>

                            <ul className="mt-10 space-y-4 text-[15px] sm:text-[17px] md:text-[18px] text-gray-700">
                                <li>• Be kind.</li>
                                <li>• Aim for the virtually impossible.</li>
                                <li>• Just do it – with style.</li>
                                <li>• Have each other’s back.</li>
                                <li>• Keep it real.</li>
                                <li>• If we are not having fun, we’re doing it wrong.</li>
                            </ul>

                            <p className="mt-10 text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[34px] text-gray-700">
                                Want to learn more about what it’s like to work at Varjo? Download our Culture Handbook.
                            </p>
                        </div>

                        <img src="/images/jobs-section2.jpg" className="w-full object-cover" />
                    </div>
                </section>

                {/* ================= BROWSE OPEN JOBS ================= */}
                <section className="py-20 md:py-32">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-16">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold uppercase mb-16">
                            Browse open jobs
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                            {[
                                {
                                    title: "Open Application",
                                    dept: "Department: Other",
                                    loc: "Location: Finland,Uusimaa,Helsinki"
                                },
                                {
                                    title: "Senior Embedded Software Engineer,Android Platform",
                                    dept: "Department: Engineering",
                                    loc: "Location: Finland,Uusimaa,Helsinki"
                                },
                                {
                                    title: "Staff Mixed Reality Engineer",
                                    dept: "Department: Engineering",
                                    loc: "Location: Finland,Uusimaa,Helsinki"
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
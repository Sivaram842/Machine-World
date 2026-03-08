import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import minimalimg from '../../assets/MinimalOs.png'
import minimalimg1 from '../../assets/MinimalOs1.png'
import minimalimg2 from '../../assets/MinimalOs2.png'
import minimalimg3 from '../../assets/MinimalOs3.png'
import minimalimg4 from '../../assets/MinimalOs4.png'
import minimalimg5 from '../../assets/MinimalOs5.png'
import minimalimg6 from '../../assets/MinimalOs6.png'

const MinimalOs = () => {
    return (
        <div>
            <Navbar />
            <header className="relative w-full min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen overflow-hidden">

                {/* Background video */}
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={minimalimg}
                    alt="Background"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 flex items-end min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen">

                    <div className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-24">

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-12">

                            {/* LEFT */}
                            <div className="max-w-2xl">
                                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                                    MINIMAL OS
                                </h1>

                                <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                    A Focused Learning Environment for the Next Generation of Students
                                </p>
                            </div>

                            {/* RIGHT */}
                            <div className="max-w-xl">
                                <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed text-left">
                                    Minimal OS is a purpose-built learning system designed to eliminate
                                    digital distractions and restore focus to education. Built for schools,
                                    colleges, and institutions, the platform provides students with
                                    everything they need to study, practice, and progress — all within a
                                    secure, distraction-free environment.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </header>
            <div className="bg-white text-black">

                {/* ================= SECTION 1 - HERO ================= */}
                <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
                    <img
                        src={minimalimg1}
                        alt="Varjo Base"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
                        <div className="max-w-[900px]">
                            <h1 className="text-white uppercase font-extrabold 
               text-[22px] sm:text-[28px] md:text-[40px] lg:text-[52px]
               leading-[1.15] md:leading-[1.1] tracking-tight">
                                The Central Hub <br />
                                for Student Learning<br />
                                {/* Headset <br />
                                Experience to <br />
                                New Heights. */}
                            </h1>

                            <p className="mt-8 text-white/80 
                          text-[15px] sm:text-[17px] md:text-[18px] 
                          leading-[26px] md:leading-[30px]">
                                Minimal OS acts as the academic command center for students.<br />
                                Every course, resource, and academic activity is organized<br />
                                into a single focused environment designed to support structured learning.<br />
                                Students can explore their curriculum, read digital textbooks,<br />
                                complete assignments, track progress, and review course materials<br />
                                — all within one distraction-free system.<br />

                            </p>
                        </div>
                    </div>
                </section>


                {/* ================= SECTION 2 ================= */}
                <section className="py-20 md:py-28 px-6 md:px-16">
                    <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">

                        <div>
                            <h2 className="uppercase font-extrabold 
               text-[22px] sm:text-[26px] md:text-[34px] 
               leading-[1.2] tracking-tight">
                                Distraction-Free Learning <br />
                                <p className="mt-4 text-gray text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                    Built for Focus. Designed for Education.
                                </p>
                            </h2>

                            <p className="mt-6 text-gray-700 text-[16px] leading-[28px]">


                                Minimal OS removes the biggest obstacle in modern education: digital distraction. <br />
                                Students no longer need to navigate between social media, messaging apps, <br />
                                and entertainment platforms while trying to study. Instead, Minimal OS creates a <br />
                                controlled academic environment where every tool serves a single purpose — learning.
                            </p>
                            <p className="mt-6 text-gray-700 text-[16px] leading-[28px]">
                                With no internet connectivity and only essential
                                academic tools installed, students remain focused on their
                                coursework, assignments, and academic growth.
                            </p>
                            <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">
                                <li>• No social media platforms</li>
                                <li>• No games or entertainment applications</li>
                                <li>• No unnecessary notifications</li>
                                <li>• Only study tools approved by the institution</li>
                                <li>• A clean and minimal interface optimized for learning</li>
                            </ul>
                        </div>

                        <div>
                            <img
                                src={minimalimg2}
                                alt="Engine"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>
                </section>


                {/* ================= SECTION 3 ================= */}
                <section className="py-20 md:py-28 px-6 text-center">
                    <div className="max-w-[700px] mx-auto">

                        <h2 className="uppercase font-extrabold 
               text-[22px] sm:text-[26px] md:text-[34px] 
               leading-[1.2] tracking-tight">
                            Academic Tools  <br />
                            &<br />
                            Learning Features
                        </h2>
                        <p className="mt-4 text-gray text-sm sm:text-base md:text-lg font-light leading-relaxed">
                            Everything a Student Needs — In One Device
                        </p>

                        <p className="mt-6 text-gray-700 leading-[28px]">
                            Minimal OS transforms a simple device into a complete <br />
                            academic companion.From textbooks to assignments,<br />
                            students have instant access to every resource required<br />
                            throughout their academic journey.<br />

                        </p>

                        <div className="mt-6 text-gray-700 leading-[28px]">

                            <p className="font-semibold mb-3">Feature List</p>

                            <p className="mb-3">
                                • <span className="font-medium">Digital Curriculum Access</span><br />
                                Students can view their entire course structure, subjects, and academic roadmap.
                            </p>

                            <p className="mb-3">
                                • <span className="font-medium">Integrated Digital Library</span><br />
                                All textbooks and required reading materials are available directly on the device.
                            </p>

                            <p className="mb-3">
                                • <span className="font-medium">Assignment & Project Workspace</span><br />
                                Students can work on assignments, submit projects, and track deadlines.
                            </p>

                            <p className="mb-3">
                                • <span className="font-medium">Course Progress Dashboard</span><br />
                                Track completed modules, upcoming lessons, and academic performance.
                            </p>

                            <p className="mb-3">
                                • <span className="font-medium">Institution Updates & Academic Requirements</span><br />
                                Students receive essential academic instructions and course updates from their institution.
                            </p>

                            <p>
                                • <span className="font-medium">Note-Taking & Study Tools</span><br />
                                Use the stylus to annotate textbooks, write notes, and organize study material.
                            </p>

                        </div>

                        <button className="mt-10 bg-black text-white px-10 py-4 
                             uppercase tracking-wider text-sm
                             transition-all duration-300
                             hover:bg-[#1117C7]">
                            Explore More →
                        </button>

                    </div>
                </section>


                {/* ================= SECTION 4 - GREY BG FEATURES ================= */}
                <section className="py-24 px-6 bg-[#f3f3f3]">
                    <div className="max-w-[1400px] mx-auto">

                        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                            <img src={minimalimg3} alt="" className="w-full" />

                            <div>
                                <h2 className="font-extrabold text-[22px] sm:text-[26px] md:text-[34px] leading-[1.15] tracking-tight">

                                    <span className="block text-xs sm:text-sm uppercase text-gray-400 font-medium tracking-wider mb-1">
                                        Built for Institutions
                                    </span>

                                    A Smarter Academic Infrastructure for Institutions

                                </h2>

                                <p className="mt-6 text-gray-700 leading-[28px]">
                                    Minimal OS is not only designed for students — it also provides<br />
                                    institutions with a structured way to distribute curriculum, <br />
                                    manage academic resources, and standardize learning tools across departments.
                                </p>
                                <p className="mt-6 text-gray-700 leading-[28px]">
                                    By providing a dedicated learning device, institutions can<br />
                                    ensure every student has equal access to course materials and <br />
                                    academic resources.
                                </p>
                                <h2 className="font-bold text-[11px] sm:text-[13px] md:text-[17px] leading-[1.15] tracking-loose">
                                    Benefits for Institutions
                                </h2>
                                <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">
                                    <li>• Standardized academic resources for every student</li>
                                    <li>• Secure distribution of curriculum and textbooks</li>
                                    <li>• Simplified management of assignments and coursework</li>
                                    <li>• Reduced dependency on internet connectivity</li>
                                    <li>• Improved student engagement and focus</li>
                                    <li>• Consistent learning experience across departments</li>
                                </ul>

                                {/* <p className="mt-6 text-gray-700 leading-[28px]">
                                    Pricing starts at 2,500€/$ per year, or 5,000€/$ perpetual for Varjo XR-4 and <br />
                                    Varjo XR-4 Focal Edition. Varjo Base Pro license is included in Varjo XR-4 Secure <br />
                                    Edition devices.
                                </p> */}

                                <div className="mt-8 flex gap-6 flex-wrap">
                                    <button className="bg-black text-white px-8 py-4 
                                   uppercase text-sm transition-all 
                                   hover:bg-[#1117C7]">
                                        SEE ALL FEATURES →
                                    </button>

                                    {/* <button className="bg-black text-white px-8 py-4 
                                   uppercase text-sm transition-all 
                                   hover:bg-[#1117C7]">
                                        UPGRADE TO PRO →
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>







                {/* ================= SECTION 5 ================= */}
                <section className="py-24 px-6 text-center">
                    <div className="max-w-[700px] mx-auto">

                        <h2 className="uppercase font-extrabold 
               text-[22px] sm:text-[26px] md:text-[34px] 
               leading-[1.2] tracking-tight">
                            Future of Focused Education :<br />
                            Redefining the Way Students Learn
                        </h2>

                        <p className="mt-6 text-gray-700 leading-[28px]">
                            Minimal OS represents a shift toward focused, intentional<br />
                            learning. By removing distractions and placing academic<br />
                            tools at the center of the student experience, it empowers <br />
                            learners to study with clarity, discipline, and purpose.<br />

                        </p>
                        <p className="mt-6 text-gray-700 leading-[28px]">
                            As education continues to evolve, Minimal OS provides a <br />
                            foundation for institutions that value focus, structure, and <br />
                            meaningful academic progress.
                        </p>
                        <p className="mt-6 text-gray-700 leading-[28px]">
                            A new generation of students deserves a better<br />
                            learning environment — one designed entirely for education.
                        </p>

                        <button className="mt-10 bg-black text-white px-10 py-4 
                             uppercase text-sm transition-all 
                             hover:bg-[#1117C7]">
                            READ LATEST RELEASE NOTES →
                        </button>

                    </div>
                </section>


                {/* ================= SECTION 6 - LATEST ARTICLES ================= */}
                {/* ================= LATEST NEWS AND INSIGHTS ================= */}
                <section className="bg-[#f3f3f3] py-20 md:py-40">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">

                        {/* HEADER ROW */}
                        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] 
                    mb-12 md:mb-24 items-center gap-6">

                            <h2 className="uppercase tracking-[3px] text-xs font-medium">
                                Why Minimal OS Matters

                            </h2>

                            <span className="uppercase tracking-[3px] text-xs 
                       transition-colors duration-300 
                       hover:text-[#1117C7] cursor-pointer">
                                Explore the Learning Experience →
                            </span>

                            <div></div>
                        </div>

                        {/* NEWS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 
                    lg:grid-cols-[1.6fr_1fr_1fr] 
                    gap-8 md:gap-12 lg:gap-16">

                            {/* LARGE FEATURED CARD */}
                            <div className="group relative bg-[#e6e6e6]
                      p-8 sm:p-12 lg:p-20 
                      min-h-[320px] sm:min-h-[420px] lg:h-[520px] 
                      flex flex-col justify-between 
                      transition-all duration-300 
                      hover:bg-[#1117C7] cursor-pointer bg-cover bg-center"  style={{ backgroundImage: `url(${minimalimg4})` }}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-[#1117C7]/90 transition-all duration-300"></div>

                                <div className="relative z-10">
                                    <p className="text-sm text-gray-700 
                      group-hover:text-white 
                      transition-colors duration-300">
                                        Focused Learning
                                    </p>

                                    <div>
                                        <h3 className="uppercase font-extrabold 
                         text-[16px] sm:text-[18px] md:text-[20px] 
                         leading-6 md:leading-7 
                         text-black 
                         group-hover:text-white 
                         transition-colors duration-300">
                                            A Distraction-Free Digital Learning Environment
                                        </h3>

                                        <p className="mt-4 sm:mt-6 text-gray-700 
                        text-[13px] sm:text-[14px] 
                        leading-5 md:leading-6 
                        group-hover:text-white 
                        transition-colors duration-300">
                                            Minimal OS removes the noise of modern devices and restores focus to education.
                                            With no social media, games, or unnecessary applications, students interact only
                                            with the tools that support their academic journey.

                                            The result is a clean, distraction-free environment designed entirely for learning,
                                            reading, writing, and progressing through coursework.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* CARD 2 */}
                            <div
                                className="group relative bg-[#e6e6e6] 
  p-8 sm:p-10 lg:p-16 
  min-h-[320px] sm:min-h-[420px] lg:h-[520px] 
  flex flex-col justify-between 
  transition-all duration-300 
  hover:bg-[#1117C7] cursor-pointer 
  bg-cover bg-center"
                                style={{ backgroundImage: `url(${minimalimg5})` }}
                            >

                                {/* overlay for readability */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-[#1117C7]/90 transition-all duration-300"></div>

                                <div className="relative z-10">

                                    <p className="text-sm text-gray-700 
    group-hover:text-white 
    transition-colors duration-300">
                                        Structured Education
                                    </p>

                                    <h3 className="uppercase font-extrabold 
    text-[15px] sm:text-[17px] md:text-[18px] 
    leading-6 md:leading-7 
    text-black 
    group-hover:text-white 
    transition-colors duration-300">
                                        Every Course and Curriculum in One Place
                                    </h3>

                                    <p className="mt-4 sm:mt-6 text-gray-700 
    text-[13px] sm:text-[14px] 
    leading-5 md:leading-6 
    group-hover:text-white 
    transition-colors duration-300">
                                        Each device comes preloaded with the complete curriculum for the student's branch.
                                        Subjects, modules, textbooks, and assignments are organized into a structured
                                        learning path that guides students through their academic journey.
                                    </p>

                                </div>

                            </div>

                            {/* CARD 3 */}
                            <div className="group relative bg-[#e6e6e6]
                      p-8 sm:p-10 lg:p-16 
                      min-h-[320px] sm:min-h-[420px] lg:h-[520px] 
                      flex flex-col justify-between 
                      transition-all duration-300 
                      hover:bg-[#1117C7] cursor-pointer bg-cover bg-center
                      " style={{ backgroundImage: `url(${minimalimg6})` }}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-[#1117C7]/90 transition-all duration-300"></div>

                                <div className="relative z-10">
                                    <p className="text-sm text-gray-700 
                      group-hover:text-white 
                      transition-colors duration-300">
                                        Academic Progress
                                    </p>

                                    <h3 className="uppercase font-extrabold 
                       text-[15px] sm:text-[17px] md:text-[18px] 
                       leading-6 md:leading-7 
                       text-black 
                       group-hover:text-white 
                       transition-colors duration-300">
                                        Track Learning Progress and Academic Performance
                                    </h3>
                                    <p className="mt-4 sm:mt-6 text-gray-700 
                        text-[13px] sm:text-[14px] 
                        leading-5 md:leading-6 
                        group-hover:text-white 
                        transition-colors duration-300">
                                        Students can track completed lessons, upcoming assignments, and overall
                                        course progress directly from the device, helping them stay organized
                                        and focused on their goals.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default MinimalOs
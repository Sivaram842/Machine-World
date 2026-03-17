import React from 'react'
import { useRef, useState } from "react";
import Navbar from '../../components/NewNavbar'
import Header from '../../components/Header'
import Footer from '../../components/NewFooter'
import minimalimg from '../../assets/MinimalOs.png'
import minimalimg1 from '../../assets/mos.png'
import minimalimg2 from '../../assets/MinimalOs2.png'
import minimalimg3 from '../../assets/MinimalOs3.png'
import minimalimg4 from '../../assets/MinimalOs4.png'
import minimalimg5 from '../../assets/MinimalOs5.png'
import minimalimg6 from '../../assets/MinimalOs6.png'

const MinimalOs = () => {
    const curriculumRef = useRef(null);
    const toolsRef = useRef(null);
    const distractionRef = useRef(null);
    const progressRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    const gridRef = useRef(null);
    const scrollToGrid = () => {
        gridRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (

        <div>
            <Navbar />
            <section className="w-full bg-white text-black min-h-[60vh] flex items-end px-4 lg:px-16 py-8">

                <div className="w-full">

                    {/* TITLE AREA */}
                    <div className="mb-10">
                        <p className="text-xs tracking-[0.25em] text-gray-600 mb-4">
                            EDUCATION TECHNOLOGY
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight">
                            Minimal OS Learning System
                        </h1>
                    </div>

                    {/* BOTTOM GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

                        {/* Label */}
                        <div className="text-xs tracking-wider text-gray-600">
                            FOCUSED EDUCATION
                        </div>

                        {/* Description */}
                        <div className="text-sm text-gray-700 leading-relaxed max-w-[320px]">
                            Minimal OS is a purpose-built learning platform that removes digital
                            distractions and creates a focused academic environment. Designed for schools
                            and institutions, it gives students a structured workspace to study, access
                            course materials, complete assignments, and track academic progress.
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4 text-xs tracking-wide">

                            <a
                                onClick={() => scrollToSection(curriculumRef)}
                                className="hover:underline cursor-pointer"
                            >
                                Digital Curriculum
                            </a>

                            <a
                                onClick={() => scrollToSection(toolsRef)}
                                className="hover:underline cursor-pointer"
                            >
                                Academic Tools
                            </a>

                            <a
                                onClick={() => scrollToSection(distractionRef)}
                                className="hover:underline cursor-pointer"
                            >
                                Distraction-Free Learning
                            </a>

                            <a
                                onClick={() => scrollToSection(progressRef)}
                                className="hover:underline cursor-pointer"
                            >
                                Student Progress
                            </a>

                        </div>

                        {/* Arrow */}
                        <div
                            onClick={scrollToGrid}
                            className="flex md:justify-end items-center text-3xl cursor-pointer hover:translate-y-1 transition"
                        >
                            ↓
                        </div>

                    </div>

                </div>

            </section>
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
                                {/* <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed text-left">
                                    Minimal OS is a purpose-built learning system designed to eliminate
                                    digital distractions and restore focus to education. Built for schools,
                                    colleges, and institutions, the platform provides students with
                                    everything they need to study, practice, and progress — all within a
                                    secure, distraction-free environment.
                                </p> */}
                            </div>

                        </div>

                    </div>
                </div>

            </header>
            <section ref={curriculumRef} className="py-20 md:py-28 px-6 md:px-16 bg-white">
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <img
                            src={minimalimg1}
                            alt="Digital Curriculum"
                            className="w-full object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="uppercase font-extrabold 
      text-[22px] sm:text-[26px] md:text-[34px] 
      leading-[1.2] tracking-tight">
                            Digital Curriculum
                            <p className="mt-4 text-gray text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                Structured Learning Materials for Every Student
                            </p>
                        </h2>

                        <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">

                            <li> Complete academic curriculum organized into structured learning paths</li>

                            <li> Digital textbooks, lectures, and course modules in one place</li>

                            {/* <li> Secure institution-approved learning resources for all students</li> */}

                            <li> Equal access to academic materials without internet dependency</li>

                            {/* <li> Offline access to essential study content anytime</li> */}

                        </ul>

                    </div>

                </div>
            </section>
            <div className="bg-white text-black">

                {/* ================= SECTION 1 - HERO =================
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
                                New Heights. 
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
                    </div >
                </section > */}


                {/* ================= SECTION 2 ================= */}
                <section ref={distractionRef} className="py-20 md:py-28 px-6 md:px-16">
                    <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">

                        <div>
                            <h2 className="uppercase font-extrabold 
      text-[22px] sm:text-[26px] md:text-[34px] 
      leading-[1.2] tracking-tight">
                                Distraction-Free Learning
                                <p className="mt-4 text-gray text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                    Built for Focus. Designed for Education.
                                </p>
                            </h2>

                            <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">

                                <li> Distraction-free academic environment designed purely for learning.</li>

                                <li> Blocks social media, games, entertainment apps, and unnecessary notifications.</li>

                                <li> Only institution-approved study tools available with a clean minimal interface.</li>

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
                <section ref={toolsRef} className="py-24 px-6 md:px-12 lg:px-20 bg-white">

                    <div className="max-w-[1200px] mx-auto">

                        {/* Header */}
                        <div className="text-center max-w-[750px] mx-auto">

                            <h2 className="uppercase font-extrabold 
      text-[26px] sm:text-[30px] md:text-[40px]
      tracking-tight leading-[1.2]">
                                Academic Tools & Learning Features
                            </h2>

                            <p className="mt-4 text-gray-600 text-[16px] md:text-[18px] leading-[28px]">
                                A focused digital environment designed for studying, assignments, and academic progress.
                            </p>

                        </div>

                        {/* React State */}
                        {(() => {
                            const [showAll, setShowAll] = useState(false);

                            const features = [

                                {
                                    title: "Digital Curriculum",
                                    desc: "Access the complete course structure and subjects in one place."
                                },

                                {
                                    title: "Digital Library",
                                    desc: "All textbooks and required academic reading materials available offline."
                                },

                                {
                                    title: "Assignment Workspace",
                                    desc: "Work on assignments, submit projects, and manage deadlines easily."
                                },

                                {
                                    title: "Progress Dashboard",
                                    desc: "Track learning progress, completed modules, and upcoming lessons."
                                },

                                {
                                    title: "Institution Updates",
                                    desc: "Receive academic announcements, instructions, and curriculum updates."
                                },

                                {
                                    title: "Note-Taking Tools",
                                    desc: "Annotate textbooks and organize study notes with stylus support."
                                },

                                {
                                    title: "Exam Preparation Mode",
                                    desc: "Practice tests and revision tools to prepare for assessments."
                                },

                                {
                                    title: "Study Planner",
                                    desc: "Plan daily study schedules and track learning goals."
                                }

                            ];

                            const visibleFeatures = showAll ? features : features.slice(0, 3);

                            return (
                                <>
                                    {/* Feature Grid */}
                                    <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                                        {visibleFeatures.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="group p-8 border border-gray-200 rounded-xl hover:border-black transition duration-300"
                                            >

                                                <h3 className="font-semibold text-[18px] mb-3">
                                                    {feature.title}
                                                </h3>

                                                <p className="text-gray-600 text-[15px] leading-[26px]">
                                                    {feature.desc}
                                                </p>

                                            </div>
                                        ))}

                                    </div>

                                    {/* Button */}
                                    <div className="mt-16 text-center">

                                        <button
                                            onClick={() => setShowAll(!showAll)}
                                            className="bg-black text-white px-10 py-4
              uppercase tracking-wider text-sm
              transition-all duration-300
              hover:bg-[#1117C7]"
                                        >

                                            {showAll ? "Show Less" : "Show More"} →

                                        </button>

                                    </div>
                                </>
                            );
                        })()}

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

                                <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">

                                    <li>• Structured platform to securely distribute curriculum and academic resources.</li>

                                    <li>• Dedicated learning device ensuring equal access to course materials for all students.</li>

                                    <li>• Simplified management of textbooks, assignments, and coursework.</li>

                                    <li>• Offline academic access that improves focus and consistency across departments.</li>

                                </ul>

                                <div className="mt-8 flex gap-6 flex-wrap">
                                    {/* <button className="bg-black text-white px-8 py-4 
            uppercase text-sm transition-all 
            hover:bg-[#1117C7]">
                                        SEE ALL FEATURES →
                                    </button> */}
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                {/* ================= SECTION - STUDENT PROGRESS ================= */}
                <section ref={progressRef} className="py-20 md:py-28 px-6 md:px-16 bg-[#f8f8f8]">
                    <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">

                        <div>
                            <h2 className="uppercase font-extrabold 
      text-[22px] sm:text-[26px] md:text-[34px] 
      leading-[1.2] tracking-tight">
                                Student Progress
                                <p className="mt-4 text-gray text-sm sm:text-base md:text-lg font-light leading-relaxed">
                                    Track learning and academic performance.
                                </p>
                            </h2>

                            <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">

                                <li>• Track completed lessons and course progress.</li>

                                <li>• Monitor assignments, deadlines, and upcoming tasks.</li>

                                <li>• View academic performance across subjects.</li>

                                <li>• Stay organized with clear learning milestones.</li>

                            </ul>
                        </div>

                        <div>
                            <img
                                src={minimalimg6}
                                alt="Student Progress"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>
                </section>





                {/* ================= SECTION 5 ================= */}
                <section className="py-24 px-6 text-center">
                    <div className="max-w-[700px] mx-auto">

                        <h2 className="uppercase font-extrabold 
      text-[22px] sm:text-[26px] md:text-[34px] 
      leading-[1.2] tracking-tight">
                            The Future of Focused Education
                        </h2>

                        <p className="mt-6 text-gray-700 leading-[28px]">
                            Minimal OS creates a distraction-free learning environment where academic tools stay at the center of the student experience.
                            Built for institutions that value focus, structure, and meaningful academic progress.
                        </p>

                        <button className="mt-10 bg-black text-white px-10 py-4 
      uppercase text-sm tracking-wider transition-all duration-300
      hover:bg-[#1117C7] hover:scale-[1.03]">
                            Talk to Our Team →
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

                            {/* <span className="uppercase tracking-[3px] text-xs 
                       transition-colors duration-300 
                       hover:text-[#1117C7] cursor-pointer">
                                Explore the Learning Experience →
                            </span> */}

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
            </div >
            <Footer />
        </div >
    )
}

export default MinimalOs
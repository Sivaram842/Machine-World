import React from 'react'
import HeroVideo from '../../components/ProductSubPageComponents/HeroVideo'
import Navbar from '../../components/NewNavbar'
import Footer from '../../components/NewFooter'
import TalkToSalesCTA from '../../components/TalkToSalesCTA'
import CustomerQuoteSection from '../../components/CustomerStories'
import VariantsSection from '../../components/ProductSubPageComponents/VariantsSection'
import TrainingPackageSection from '../../components/ProductSubPageComponents/TrainingPackageSection'
import SupportGridSection from '../../components/ProductSubPageComponents/SupportGridSection'
import PassthroughSection from '../../components/ProductSubPageComponents/PassthroughSection'
import ImmersionSection from '../../components/ProductSubPageComponents/ImmersionSection'
import DeploymentSection from '../../components/ProductSubPageComponents/DeploymentSection'
import FullScreenXRImage from '../../components/ProductSubPageComponents/FullScreenXRImage'
import FullScreenImage from '../../components/ProductSubPageComponents/FullScreenImage'
import img from "../../assets/Book1.jpeg";
import img1 from "../../assets/Book2.jpeg";
import img0 from "../../assets/Book.jpeg";
import { useRef, useState } from "react";
import poster from "../../assets/state-of-xr-report-hero.webp";
import heroImg from "../../assets/RoomBook.png";

const Product2 = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (!videoRef.current) return;
        videoRef.current.play();
        setIsPlaying(true);
    };
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />

            {/* HERO */}
            <section className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={"/BookHero.mp4"} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 h-full flex items-end">
                    <div className="w-full px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-7xl">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                                {/* BOOK */}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT SECTION */}
            <section className="bg-white py-16 sm:py-24 lg:py-[140px]">
                <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 lg:gap-[100px] px-6 sm:px-10 lg:px-16">

                    {/* IMAGE */}
                    <div className="w-full lg:w-[58%]">
                        <img
                            src={img}
                            alt="Immersion display"
                            className="h-[300px] sm:h-[420px] lg:h-[520px] w-full object-cover"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="w-full lg:w-[42%]">
                        <small className="block text-[12px] tracking-widest text-black">
                            SEE EVERY DETAIL
                        </small>

                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            Focused Learning, Reimagined
                        </h2>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            The anti-distraction learning device replaces notebooks,
                            textbooks, and tablets with a single tool designed purely for deep learning.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            With a large 10.3–13.3" E-ink display, the device provides
                            a paper-like reading and writing experience that feels natural on the eyes.
                        </p>
                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            No notifications. No apps competing for attention. Just a calm
                            digital workspace built to help students and researchers focus on what truly matters—learning.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 sm:py-24 lg:py-[140px]">
                <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 sm:gap-16 lg:gap-[100px] px-4 sm:px-8 lg:px-16">

                    {/* LEFT TEXT */}
                    <div className="w-full lg:w-[42%]">
                        <small className="block text-[10px] sm:text-[12px] tracking-widest text-black">
                            WRITE NATURALLY
                        </small>

                        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            A Real Paper-Like Writing Experience
                        </h2>

                        <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                            The device is built for natural handwriting and annotation using a Wacom stylus,
                            delivering precise and responsive input that feels like writing on real paper.
                        </p>

                        <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                            Take notes, highlight textbooks, annotate research papers, and organize ideas effortlessly.
                        </p>

                        <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                            With latency optimized for handwriting, every stroke feels smooth and
                            accurate—making digital note-taking as intuitive as traditional pen and paper.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-[58%]">
                        <img
                            src={img1}
                            alt="Passthrough optics"
                            className="h-[260px] sm:h-[380px] lg:h-[520px] w-full object-cover"
                        />
                    </div>

                </div>
            </section>
            <section className="bg-white py-16 sm:py-24 lg:py-[160px] px-4 sm:px-6">
                <div className="mx-auto max-w-[900px] text-center">

                    {/* VIDEO CONTAINER */}
                    <div className="relative mx-auto mb-10 sm:mb-14 lg:mb-16 w-full max-w-[640px]">

                        {/* VIDEO */}
                        <video
                            ref={videoRef}
                            src={"/training.mp4"}
                            poster={poster}
                            controls
                            playsInline
                            preload="metadata"
                            onPause={() => setIsPlaying(false)}
                            onPlay={() => setIsPlaying(true)}
                            className="block h-[220px] sm:h-[320px] md:h-[420px] w-full bg-black object-cover"
                        />

                        {/* CUSTOM PLAY BUTTON */}
                        {!isPlaying && (
                            <button
                                onClick={handlePlay}
                                className="absolute left-1/2 top-1/2 flex 
                                                   h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20
                                                   -translate-x-1/2 -translate-y-1/2 
                                                   items-center justify-center 
                                                   rounded-full bg-black/50 
                                                   transition hover:bg-black/70"
                            >
                                <span className="ml-1 h-0 w-0 
                                                         border-b-[8px] border-t-[8px] border-l-[14px]
                                                         sm:border-b-[10px] sm:border-t-[10px] sm:border-l-[18px]
                                                         lg:border-b-[12px] lg:border-t-[12px] lg:border-l-[22px]
                                                         border-b-transparent border-t-transparent border-l-white" />
                            </button>
                        )}
                    </div>

                    {/* TEXT */}
                    <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light leading-tight">
                        BUILT FOR
                        <br />
                        DEEP WORK
                    </h2>

                    <div className="mx-auto mt-6 sm:mt-8 max-w-[560px] text-sm sm:text-[15px] leading-relaxed sm:leading-[1.75] text-gray-600 text-left">

                        <p className="font-medium text-base sm:text-[16px] text-gray-800 mb-2">
                            A Minimal Operating System
                        </p>

                        <p className="mb-4">
                            Powered by a lightweight Linux-based operating system, the device includes only the essential tools needed for learning and productivity.
                        </p>

                        <p className="mb-2 font-medium">
                            Core features include:
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                            <li>Note-taking and organization</li>
                            <li>Digital textbooks and reading tools</li>
                            <li>Document annotation</li>
                            <li>Cloud backup and synchronization</li>
                        </ul>

                        <p className="mt-4">
                            Without social media, games, or distracting apps, the system creates an environment designed entirely for deep focus and structured learning.
                        </p>

                    </div>

                    <button className="mt-10 sm:mt-12 lg:mt-14 
                                               inline-flex items-center justify-center gap-4 
                                               bg-black 
                                               px-6 sm:px-8 lg:px-10 
                                               py-3 sm:py-3.5 lg:py-4 
                                               text-xs sm:text-[13px] 
                                               tracking-widest text-white 
                                               transition hover:bg-gray-900 
                                               w-full sm:w-auto">
                        LEARN MORE ABOUT THIS
                        <span className="text-base sm:text-lg">→</span>
                    </button>
                </div>
            </section>

            {/* FULL VIDEO SECTION
            <section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={"/DAS2.mp4"} type="video/mp4" />
                </video>
            </section> */}

            <section className="bg-white px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
                <div className="mx-auto max-w-[450px] text-center">

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-[36px] font-light leading-snug text-black">
                        BUILT FOR
                        <br />
                        LONG STUDY SESSIONS
                    </h2>
                    <h2 className="text-2xl sm:text-2xl md:text-[20px] font-light leading-snug text-black">
                        Comfortable and Efficient
                    </h2>

                    {/* Paragraph 1 */}
                    <p className="mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        The E-ink display consumes extremely low power, allowing the device
                        to run for 2–3 weeks on a single charge.
                    </p>

                    {/* Paragraph 2 */}
                    <p className="mt-6 sm:mt-8 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        Its lightweight design makes it easy to carry between classrooms,
                        libraries, and study sessions without adding unnecessary weight.
                    </p>

                    <p className="mt-6 sm:mt-8 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        The glare-free display also reduces eye strain, making it ideal for long reading and writing sessions.
                    </p>

                    {/* Button */}
                    <button className="mt-10 sm:mt-14 lg:mt-20 
                                   inline-flex items-center justify-center gap-4 
                                   bg-black 
                                   px-6 sm:px-8 lg:px-10 
                                   py-3 sm:py-3.5 lg:py-4 
                                   text-xs sm:text-[13px] 
                                   tracking-widest text-white 
                                   hover:bg-gray-900 transition 
                                   w-full sm:w-auto">
                        LEARN MORE ABOUT WORKING OF OUR PRODUCT
                        <span className="text-base sm:text-lg">→</span>
                    </button>

                </div>
            </section>
            <section className="w-full bg-white py-16 sm:py-24 lg:py-36">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-28 items-start">

                    {/* LEFT SIDE — CUSTOMER LIST */}
                    <div>
                        <p className="text-xs tracking-widest text-gray-500 mb-6 sm:mb-8 lg:mb-10 uppercase">
                            Testimonials from Users
                        </p>

                        <ul className="space-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] font-light">
                            {[
                                "STUDENTS",
                                "EDUCATORS",
                                "RESEARCHERS",
                                "WRITERS",
                                "THINKERS",

                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="text-gray-400 hover:text-black transition-colors duration-300 cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14">

                        {/* VIDEO */}
                        <div className="relative w-full aspect-[16/9] min-h-[220px] sm:min-h-[320px] lg:min-h-[520px] overflow-hidden bg-black">
                            <video
                                src={"/driving-simulator-monitor-center.mp4"}
                                controls
                                preload="metadata"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* QUOTE TEXT */}
                        <div className="max-w-3xl">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] leading-[1.25] font-light italic text-black mb-4">
                                This device helped me stay focused during long study sessions.
                                Without notifications or distractions, I can finally concentrate on learning.
                            </p>

                            {/* <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-600 mb-6">
                            BARTEK PANASEWICZ — VP TRAINING SYSTEMS, LAND
                        </p> */}

                            <button className="inline-flex items-center justify-center gap-1 
                                           bg-black text-white 
                                           px-6 sm:px-8 
                                           py-3 sm:py-4 
                                           text-xs sm:text-sm 
                                           tracking-wide 
                                           hover:opacity-90 transition 
                                           w-full sm:w-auto">
                                READ STORY →
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
                <img
                    src={heroImg}
                    alt="XR Headsets"
                    className="block w-full h-full object-cover"
                />
            </section>
            <section className="bg-[#efefed] px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light tracking-tight text-black">
                        DESIGNED FOR STUDENTS AND EDUCATORS
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-4 sm:mt-6 max-w-[520px] text-sm sm:text-[15px] leading-relaxed text-gray-600">
                        A Tool for Serious Learning
                    </p>

                    {/* Variants */}
                    <div className="mx-auto mt-6 sm:mt-8 max-w-[560px] text-sm sm:text-[15px] leading-relaxed sm:leading-[1.75] text-gray-600 text-left">

                        <p className="font-medium text-base sm:text-[16px] text-gray-800 mb-2">
                            A Tool for Serious Learning
                        </p>

                        <p className="mb-4">
                            This device is created for people who value focus and organization in their work.
                        </p>

                        <p className="mb-2 font-medium">
                            Perfect for:
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                            <li>Students managing multiple subjects</li>
                            <li>Educators preparing and reviewing material</li>
                            <li>Researchers organizing notes and references</li>
                            <li>Writers and thinkers working on long-form ideas</li>
                        </ul>

                        <p className="mt-4">
                            By removing digital distractions, it helps users build better concentration habits and more structured learning workflows.
                        </p>

                    </div>

                    <div className="mx-auto mt-6 sm:mt-8 max-w-[560px] text-sm sm:text-[15px] leading-relaxed sm:leading-[1.75] text-gray-600 text-center">

                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                            COMPLETE PRODUCT OVERVIEW
                        </p>

                        <p className="font-medium text-base sm:text-[16px] text-gray-800 mb-4">
                            Everything You Need to Know
                        </p>

                        <p>
                            Discover the full capabilities of the anti-distraction learning device—from display
                            technology and stylus support to battery performance and system features.
                        </p>

                        <p className="mt-4">
                            Explore how it transforms study, note-taking, and digital reading into a focused
                            and distraction-free experience.
                        </p>

                    </div>

                    {/* Button */}
                    <button className="mt-12 sm:mt-20 lg:mt-28 
                                   inline-flex items-center justify-center gap-3 
                                   bg-black 
                                   px-6 sm:px-8 lg:px-10 
                                   py-3 sm:py-3.5 lg:py-4 
                                   text-xs sm:text-[13px] 
                                   tracking-widest text-white 
                                   hover:bg-gray-900 transition 
                                   w-full sm:w-auto">
                        DOWNLOAD PRODUCT BOOK
                        <span className="text-base sm:text-lg">→</span>
                    </button>

                </div>
            </section>
            <section className="bg-[#f2f2f2] px-4 sm:px-8 lg:px-20 py-16 sm:py-24 lg:py-[120px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* BLOCK 1 */}
                    <div
                        className="group relative lg:row-span-2 min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-cover bg-center p-6 sm:p-8 text-white transition-colors"
                        style={{ backgroundImage: `url(${img1})` }}
                    >
                        <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

                        <small className="relative z-10 text-[10px] sm:text-[12px] tracking-widest">
                            E-INK DISPLAY
                        </small>
                        <h3 className="relative z-10 my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            PAPER-LIKE
                            <br />
                            READING EXPERIENCE
                        </h3>
                        <p className="relative z-10 text-xs sm:text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                            A large 10.3–13.3" E-ink display delivers a natural reading
                            experience that feels like real paper while reducing eye strain
                            during long study sessions.
                        </p>
                    </div>

                    {/* BLOCK 2 */}
                    <div
                        className="group relative lg:row-span-2 min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-cover bg-center p-6 sm:p-8 text-white"
                        style={{ backgroundImage: `url(${img0})` }}
                    >
                        <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

                        <small className="relative z-10 text-[10px] sm:text-[12px] tracking-widest">
                            WACOM STYLUS
                        </small>
                        <h3 className="relative z-10 my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            NATURAL
                            <br />
                            DIGITAL WRITING
                        </h3>
                        <p className="relative z-10 text-xs sm:text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                            Write, highlight, and annotate naturally with a precision Wacom
                            stylus designed to replicate the feel of pen on paper.
                        </p>
                    </div>

                    {/* BLOCK 3 */}
                    <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[10px] sm:text-[12px] tracking-widest">
                            MINIMAL OS
                        </small>
                        <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            BUILT FOR
                            <br />
                            DEEP FOCUS
                        </h3>
                        <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
                            A lightweight Linux-based system with only essential tools—
                            note-taking, reading, annotation, and organization.
                            No social media, games, or distractions.
                        </p>
                    </div>

                    {/* BLOCK 4 */}
                    <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[10px] sm:text-[12px] tracking-widest">
                            ORGANIZATION
                        </small>
                        <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            ALL YOUR NOTES
                            <br />
                            IN ONE PLACE
                        </h3>
                        <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
                            Organize notebooks, textbooks, and research documents digitally,
                            making it easy to manage study material and ideas in one device.
                        </p>
                    </div>

                    {/* BLOCK 5 */}
                    <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[10px] sm:text-[12px] tracking-widest">
                            LONG BATTERY
                        </small>
                        <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            WEEKS OF
                            <br />
                            STUDY TIME
                        </h3>
                        <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
                            The power-efficient E-ink display allows the device to run for
                            2–3 weeks on a single charge, perfect for long academic sessions.
                        </p>
                    </div>

                    {/* BLOCK 6 */}
                    <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[10px] sm:text-[12px] tracking-widest">
                            PRODUCT BOOK
                        </small>
                        <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
                            TECH SPECS
                        </h3>
                        <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
                            Discover the full specifications, features, and capabilities of
                            the anti-distraction learning device.
                        </p>
                    </div>

                </div>
            </section>
            <TalkToSalesCTA />
            <Footer />
        </div>
    )
}

export default Product2
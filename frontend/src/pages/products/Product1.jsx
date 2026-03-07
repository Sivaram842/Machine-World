import React from 'react'
import HeroVideo from '../../components/ProductSubPageComponents/HeroVideo'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
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

import img from "../../assets/DAS1.jpeg";
import v1Image from "../../assets/V1Tv19.4.png";
import v1Image1 from "../../assets/V1Tv19.3.png";

const Product1 = () => {
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
                    <source src={"/DASVideo.mp4"} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 h-full flex items-end">
                    <div className="w-full px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-7xl">
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                                {/* DAS */}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMMERSION SECTION */}
            <section className="bg-white py-16 sm:py-24 lg:py-[140px]">
                <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 lg:gap-[100px] px-6 sm:px-10 lg:px-16">

                    <div className="w-full lg:w-[58%]">
                        <img
                            src={img}
                            alt="Immersion display"
                            className="h-[300px] sm:h-[420px] lg:h-[520px] w-full object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-[42%]">
                        <small className="block text-[12px] tracking-widest text-black">
                            SEE EVERY MISSION DETAIL
                        </small>

                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            360 degrees of immersion.
                        </h2>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            Pilot-grade 4K-per-eye mini-LED displays with local dimming deliver
                            the clarity, contrast, and depth perception required for authentic
                            mission rehearsal.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            A 120° × 105° field of view achieves full binocular vision, while
                            28 million pixels of visual precision recreate environments with
                            unprecedented realism, allowing trainees to perceive detail
                            exactly as they would in the real world.
                        </p>
                    </div>
                </div>
            </section>

            <PassthroughSection />
            <DeploymentSection />

            {/* FULL VIDEO */}
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
            </section>

            <TrainingPackageSection />
            <CustomerQuoteSection />
            <FullScreenXRImage />
            <VariantsSection />

            {/* SUPPORT GRID */}
            <section className="bg-[#f2f2f2] px-6 sm:px-10 lg:px-20 py-16 sm:py-24 lg:py-[120px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div
                        className="group relative lg:row-span-2 min-h-[260px] sm:min-h-[325px] cursor-pointer bg-cover bg-center p-6 sm:p-8 text-white transition-colors"
                        style={{ backgroundImage: `url(${v1Image})` }}
                    >
                        <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />
                        <small className="relative z-10 text-[12px] tracking-widest">
                            STEAM VR
                        </small>
                        <h3 className="relative z-10 my-4 text-[20px] sm:text-[22px] leading-snug">
                            TRACKING
                            <br />
                            NEEDS COVERED
                        </h3>
                        <p className="relative z-10 text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                            SteamVR™ tracking and inside-out tracking are included in every
                            XR-4 Series headset.
                        </p>
                    </div>

                    <div
                        className="group relative lg:row-span-2 min-h-[260px] sm:min-h-[325px] cursor-pointer bg-cover bg-center p-6 sm:p-8 text-white"
                        style={{ backgroundImage: `url(${v1Image1})` }}
                    >
                        <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />
                        <small className="relative z-10 text-[12px] tracking-widest">
                            VENDORS
                        </small>
                        <h3 className="relative z-10 my-4 text-[20px] sm:text-[22px] leading-snug">
                            VARJO-READY
                            <br />
                            COMPUTERS
                        </h3>
                        <p className="relative z-10 text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                            The XR-4 Series caters for professional software running on Windows,
                            tapping into the power of NVIDIA graphics cards.
                        </p>
                    </div>

                    {[3, 4, 5, 6].map((_, i) => (
                        <div key={i} className="min-h-[260px] sm:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
                            {/* Content unchanged */}
                        </div>
                    ))}

                </div>
            </section>

            <TalkToSalesCTA />
            <Footer />
        </div>
    )
}

export default Product1
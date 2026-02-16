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

import hero from "../../assets/DASVideo.mp4";
import fullVideo from "../../assets/DAS2.mp4";
import img from "../../assets/DAS1.jpeg";
import v1Image from "../../assets/V1Tv19.4.png";
import v1Image1 from "../../assets/V1Tv19.3.png";

const Product1 = () => {
    return (
        <div>
            <Navbar />
            <section className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={hero} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-end">
                    <div className="w-full px-12 pb-24">

                        {/* GRID WRAPPER – this controls alignment */}
                        <div className="grid grid-cols-2 gap-16 max-w-7xl">

                            {/* LEFT COLUMN */}
                            <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                                {/* DAS */}
                            </h1>



                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-[140px]">
                <div className="mx-auto flex max-w-[1400px] items-start gap-[100px] px-16">
                    {/* LEFT IMAGE */}
                    <div className="w-[58%]">
                        <img
                            src={img}
                            alt="Immersion display"
                            className="h-[520px] w-full object-cover"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="w-[42%]">
                        <small className="block text-[12px] tracking-widest text-black">
                            SEE EVERY MISSION DETAIL
                        </small>

                        <h2 className="mt-6 text-[40px] font-light leading-tight text-black">
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
            </section>            <PassthroughSection />
            <DeploymentSection />
            <section className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={fullVideo} type="video/mp4" />
                </video>
            </section>
            <TrainingPackageSection />
            <CustomerQuoteSection />
            <FullScreenXRImage />
            <VariantsSection />
            <section className="bg-[#f2f2f2] px-20 py-[120px]">
                <div className="grid grid-cols-4 gap-6">
                    {/* BLOCK 1 – IMAGE (row-span-2) */}
                    <div
                        className="group relative row-span-2 min-h-[325px] cursor-pointer bg-cover bg-center p-8 text-white transition-colors"
                        style={{ backgroundImage: `url(${v1Image})` }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

                        <small className="relative z-10 text-[12px] tracking-widest">
                            STEAM VR
                        </small>
                        <h3 className="relative z-10 my-4 text-[22px] leading-snug">
                            TRACKING
                            <br />
                            NEEDS COVERED
                        </h3>
                        <p className="relative z-10 text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                            SteamVR™ tracking and inside-out tracking are included in every
                            XR-4 Series headset.
                        </p>
                    </div>

                    {/* BLOCK 2 */}
                    <div
                        className="group relative row-span-2 min-h-[325px] cursor-pointer bg-cover bg-center p-8 text-white"
                        style={{ backgroundImage: `url(${v1Image1})` }}
                    >
                        <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

                        <small className="relative z-10 text-[12px] tracking-widest">
                            VENDORS
                        </small>
                        <h3 className="relative z-10 my-4 text-[22px] leading-snug">
                            VARJO-READY
                            <br />
                            COMPUTERS
                        </h3>
                        <p className="relative z-10 text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                            The XR-4 Series caters for professional software running on Windows,
                            tapping into the power of NVIDIA graphics cards.
                        </p>
                    </div>

                    {/* BLOCK 3 – IMAGE (row-span-2) */}


                    <div className="min-h-[325px] cursor-pointer bg-white p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[12px] tracking-widest">VARJO ALPHA</small>
                        <h3 className="my-4 text-[22px] leading-snug">
                            GET END-TO-END SUPPORT
                        </h3>
                        <p className="text-[14px] leading-relaxed text-[#444] hover:text-white">
                            Need assistance with planning or implementing an XR based solution?
                            Our in-house experts are available.
                        </p>
                    </div>
                    {/* BLOCK 4 */}
                    <div className="min-h-[325px] cursor-pointer bg-white p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[12px] tracking-widest">ACCESSORIES</small>
                        <h3 className="my-4 text-[22px] leading-snug">
                            COMPLETE THE EXPERIENCE
                        </h3>
                        <p className="text-[14px] leading-relaxed text-[#444] hover:text-white">
                            Extended cables, additional controllers and more to support your
                            immersive workflow.
                        </p>
                    </div>

                    {/* BLOCK 5 */}
                    <div className="min-h-[325px] cursor-pointer bg-white p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[12px] tracking-widest">SYSTEM</small>
                        <h3 className="my-4 text-[22px] leading-snug">
                            SYSTEM REQUIREMENTS
                        </h3>
                        <p className="text-[14px] leading-relaxed text-[#444] hover:text-white">
                            Find minimum OS, connectivity, GPU and CPU requirements for XR-4.
                        </p>
                    </div>

                    {/* BLOCK 6 */}
                    <div className="min-h-[325px] cursor-pointer bg-white p-8 transition hover:bg-[#0057ff] hover:text-white">
                        <small className="text-[12px] tracking-widest">PRODUCT BOOK</small>
                        <h3 className="my-4 text-[22px] leading-snug">TECH SPECS</h3>
                        <p className="text-[14px] leading-relaxed text-[#444] hover:text-white">
                            Download the official technical specifications of the XR-4 Series.
                        </p>
                    </div>
                </div>
            </section>
            <TalkToSalesCTA />
            <Footer />
        </div>
    )
}

export default Product1
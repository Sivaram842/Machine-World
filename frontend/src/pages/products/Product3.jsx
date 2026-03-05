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
import hero from "../../assets/BookHero.mp4";
import img from "../../assets/Book1.jpeg";
import fullVideo from "../../assets/DAS2.mp4";

const Product2 = () => {
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
                    <source src={hero} type="video/mp4" />
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
                            SEE EVERY MISSION DETAIL
                        </small>

                        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
                            The anti-distraction learning device.
                        </h2>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            Replaces physical notebooks, textbooks, and
                            tablets with one device designed for pure
                            learning. No distractions. No noise. Just
                            focus
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

            {/* FULL VIDEO SECTION */}
            <section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-screen overflow-hidden">
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
            <SupportGridSection />
            <TalkToSalesCTA />
            <Footer />
        </div>
    )
}

export default Product2
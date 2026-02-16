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
import fullVideo from "../../assets/DAS2.mp4";
import img from "../../assets/Realm1.jpeg";
import hero123 from "../../assets/RealmHero.mp4";
import Boximg from "../../assets/RealmBox.jpeg";

const Product2 = () => {
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
                    <source src={hero123} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-end">
                    <div className="w-full px-12 pb-24">

                        {/* GRID WRAPPER – this controls alignment */}
                        <div className="grid grid-cols-2 gap-16 max-w-7xl">

                            {/* LEFT COLUMN */}
                            <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                                {/* REALM */}
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
                            {/* SEE EVERY MISSION DETAIL */}
                        </small>

                        <h2 className="mt-6 text-[40px] font-light leading-tight text-black">
                            REALM
                        </h2>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            Realm is Antiworld's most powerful portable spatial computer—a lightweight
                            XR glasses system paired with a pocket-sized compute pod. Bring desktop-class creativity,
                            simulation design, and immersive training anywhere without heavy gear.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            <b> Who It's For ?</b><br />
                            Perfect for creators, designers, defense operators, entertainers, and engineers
                            who demand professional performance on their terms—just unlimited possibilities in your pocket.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white py-[140px]">
                <div className="mx-auto flex max-w-[1400px] items-start gap-[100px] px-16">
                    {/* LEFT TEXT */}
                    <div className="w-[42%]">
                        <small className="block text-[12px] tracking-widest text-black">
                            {/* TRAIN WITH PHYSICAL ELEMENTS */}
                        </small>

                        <h2 className="mt-6 text-[40px] font-light leading-tight text-black">
                            Why It Elevates Your Workflow ?
                        </h2>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            Portable power meets pro-grade performance—XR glasses +
                            pocket compute pod in one sleek carry case. Deploy anywhere, dominate simulations.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            <b> Pocket Precision:</b> Ultra-high-res XR glasses and compact compute pod deliver
                            crisp 90Hz visuals + precise tracking for cockpit sims, drone command, or 3D modeling—all backpack-portable.
                        </p>

                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            <b>Seamless Integration:</b> Native support for top sim platforms
                            and live analytics—no cables or desktops needed.
                        </p>
                        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                            <b>Instant Deployment:</b> 3-minute field setup for training drills, remote reviews, or creative sessions.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-[58%]">
                        <img
                            src={Boximg}
                            alt="Passthrough optics"
                            className="h-[520px] w-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <DeploymentSection />
            <FullScreenImage />
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
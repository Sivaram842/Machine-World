import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import TalkToSalesCTA from '../components/TalkToSalesCTA'
import Footer from '../components/Footer'


const blocksData = [
    {
        title: "Air Superiority",
        description: "Advanced radar systems ensuring control of airspace.",
        image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321",
    },
    {
        title: "Integrated Air Defence",
        description: "Integrated sensor networks and defense systems.",
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63",
    },
    {
        title: "Missile Systems",
        description: "Next generation missile defense technologies.",
        image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51",
    },
    {
        title: "Battlefield Awareness",
        description: "Real-time battlefield data systems.",
        image: "https://images.unsplash.com/photo-1504718855392-c0f33b372e72",
    },
    {
        title: "Electronic Warfare",
        description: "Advanced electronic protection systems.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
        title: "Command & Control",
        description: "Networked command systems for rapid response.",
        image: "https://images.unsplash.com/photo-1517976487492-5750f3195933",
    },
    {
        title: "Radar Systems",
        description: "High precision radar technology.",
        image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321",
    },
];


const AntiworldBase = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleBlock = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <Navbar />
            <Header />
            <section className="w-full bg-black py-20">

                {/* OUTER MARGIN */}
                <div className="max-w-[1600px] mx-auto px-10">

                    <div className="flex w-full overflow-hidden">

                        {blocksData.map((block, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`
                  group relative
                  transition-all duration-700 ease-in-out
                  ${isActive ? "flex-[3]" : "flex-[1]"}
                  h-[420px]
                  cursor-pointer
                `}
                                    style={{
                                        backgroundImage: `url(${block.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/60"></div>

                                    {/* CONTENT */}
                                    <div className="relative h-full flex flex-col justify-end p-6 text-white">

                                        {/* TITLE HOVER HIGHLIGHT */}
                                        <h3
                                            className="
                    text-lg font-semibold mb-3
                    transition-all duration-300
                    group-hover:text-white
                    group-hover:scale-[1.05]
                    "
                                        >
                                            {block.title}
                                        </h3>

                                        {isActive && (
                                            <>
                                                <p className="text-sm mb-4 leading-relaxed">
                                                    {block.description}
                                                </p>

                                                <button className="
                        border border-white
                        px-4 py-2
                        text-xs
                        hover:bg-white
                        hover:text-black
                        transition
                    ">
                                                    Discover more →
                                                </button>
                                            </>
                                        )}

                                    </div>

                                    {/* ICON */}
                                    <button
                                        onClick={() => toggleBlock(index)}
                                        className="absolute top-4 right-4 w-8 h-8 border border-white rounded-full flex items-center justify-center text-white"
                                    >
                                        {isActive ? "−" : "+"}
                                    </button>

                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
            <TalkToSalesCTA />
            <Footer />
        </div>
    )
}

export default AntiworldBase
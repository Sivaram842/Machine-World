import { useRef, useEffect, useState } from "react";

export default function TrainingDomains() {
    const scrollRef = useRef(null);
    const cardRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const domains = [
        {
            heading: "FUTURE LEARNING REIMAGINED",
            title: "LEARNING",
            subtitle:
                "Immersive classrooms, personalized AI study, seamless digital and handwritten learning—education without limits. ",
            image: "https://images.unsplash.com/photo-1508615070457-7baeba4003e4",
        },
        {
            heading: "WORK AND DESIGN, CONNECTED",
            title: "INDUSTRY",
            subtitle:
                "Collaborative 3D prototyping. AR-Guided workflows, and instant digital reporting-- smarter work, faster results",
            image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
        },
        {
            heading: "IMMERSIVE CREATIVITY UNLEASHED",
            title: "ENTERTAINMENT",
            subtitle:
                "Real-time 3D creation, interactive storytelling, and shared mixed reality events- creativity unleashed.",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        },
        {
            heading: "HEALTHCARE, REDEFINED",
            title: "MEDICAL",
            subtitle:
                "Spatial Anatomy, AR-assisted procedures, secure digital records- medical learning and care, redefined. ",
            image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
        },
    ];

    const total = domains.length;

    const scrollToIndex = (index) => {
        const cardWidth = cardRef.current.offsetWidth + 32; // updated gap for responsiveness
        scrollRef.current.scrollTo({
            left: cardWidth * index,
            behavior: "smooth",
        });
    };

    const handleNext = () => {
        const next = (currentIndex + 1) % total;
        setCurrentIndex(next);
        scrollToIndex(next);
    };

    const handlePrev = () => {
        const prev = (currentIndex - 1 + total) % total;
        setCurrentIndex(prev);
        scrollToIndex(prev);
    };

    useEffect(() => {
        scrollToIndex(currentIndex);
    }, [currentIndex]);

    return (
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden relative">
            {/* Section Title */}
            <div className="px-4 sm:px-8 lg:px-16 mb-10 sm:mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 leading-snug">
                    Boundless creation, learning, and<br className="hidden sm:block" /> teamwork in every domain
                </h2>

                {/* ARROWS */}
                <div className="flex gap-3 sm:gap-4">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-400 flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                        ←
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-400 flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* SLIDER */}
            <div
                ref={scrollRef}
                className="flex gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-8 lg:px-16 overflow-hidden scroll-smooth"
            >
                {domains.map((item, i) => (
                    <div
                        key={i}
                        ref={i === 0 ? cardRef : null}
                        className="w-[80vw] sm:w-[55vw] lg:w-[32vw] min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] max-w-[420px] flex-shrink-0"
                    >
                        {/* Text */}
                        <div className="uppercase text-xs sm:text-sm tracking-widest text-gray-500 mb-2 sm:mb-3">
                            {item.heading}
                        </div>

                        <div className="h-[140px] sm:h-[160px] lg:h-[170px]">
                            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-light mb-2 sm:mb-3">
                                {item.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {item.subtitle}
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                                <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm hover:opacity-80 transition">
                                    READ MORE →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
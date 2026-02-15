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

    // 🔁 scroll to active slide
    const scrollToIndex = (index) => {
        const cardWidth = cardRef.current.offsetWidth + 64; // gap-16 = 64px
        scrollRef.current.scrollTo({
            left: cardWidth * index,
            behavior: "smooth",
        });
    };

    // ➡️ NEXT
    const handleNext = () => {
        const next = (currentIndex + 1) % total;
        setCurrentIndex(next);
        scrollToIndex(next);
    };

    // ⬅️ PREVIOUS
    const handlePrev = () => {
        const prev = (currentIndex - 1 + total) % total;
        setCurrentIndex(prev);
        scrollToIndex(prev);
    };

    // keep position synced if resized
    useEffect(() => {
        scrollToIndex(currentIndex);
    }, [currentIndex]);

    return (
        <section className="w-full bg-white py-24 overflow-hidden relative">
            {/* Section Title */}
            <div className="px-16 mb-16 flex items-center justify-between">
                <h2 className="text-3xl font-light text-gray-900">
                    Boundless creation, learning, and<br /> teamwork in every domain
                </h2>

                {/* ARROWS */}
                <div className="flex gap-4">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 border border-gray-400 flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                        ←
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 border border-gray-400 flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* SLIDER */}
            <div
                ref={scrollRef}
                className="flex gap-16 px-16 overflow-hidden scroll-smooth"
            >
                {domains.map((item, i) => (
                    <div
                        key={i}
                        ref={i === 0 ? cardRef : null}
                        className="w-[32vw] min-w-[340px] max-w-[420px] flex-shrink-0"
                    >
                        {/* Text */}
                        <div className="uppercase text-sm tracking-widest text-gray-500 mb-3">
                            {item.heading}
                        </div>
                        <div className="h-[170px]">
                            <h3 className="text-[28px] font-light mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.subtitle}
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative w-full h-[520px] overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            <div className="absolute bottom-4 left-4">
                                <button className="bg-black text-white px-6 py-3 text-sm hover:opacity-80 transition">
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

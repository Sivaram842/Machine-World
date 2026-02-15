const sections = [
    {
        title: "Powering the world’s most realistic training applications.",
        subtitle:
            "By integrating with the world's leading 3D software, image generators and simulation platforms, Varjo ensures every mission-critical training environment feels real.",
        image: "https://images.unsplash.com/photo-1508615070457-7baeba4003e4",
        index: "01",
    },
    {
        title: "High-fidelity simulation environments.",
        subtitle:
            "Train in ultra-realistic scenarios with industry-grade rendering pipelines and accurate physics.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        index: "02",
    },
    {
        title: "Built for professional workflows.",
        subtitle:
            "Seamlessly integrate with enterprise software and simulation engines.",
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
        index: "03",
    },
    {
        title: "Advanced visualization technology.",
        subtitle:
            "See more, understand more, and act faster using XR precision visuals.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        index: "04",
    },
    {
        title: "Reliable performance at scale.",
        subtitle:
            "Designed for continuous operation in mission-critical environments.",
        image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
        index: "05",
    },
    {
        title: "Training without compromise.",
        subtitle:
            "Unmatched realism, performance, and flexibility — built for the future.",
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
        index: "06",
    },
];

export default function ScrollableShowcase() {
    return (
        <section className="relative w-full">
            {/* total scroll height */}
            <div className="relative h-[600vh] flex">

                {/* LEFT FIXED PANEL */}
                <div className="sticky top-0 h-screen w-1/2 bg-[#f2f2f2] flex items-center">
                    <div className="px-16 max-w-xl">
                        <p className="text-xs tracking-widest text-gray-500 uppercase mb-6">
                            Our XR Offering
                        </p>

                        <h2 className="text-[42px] leading-tight font-light text-black mb-6">
                            Engineered for unlimited creation, learning, and collaboration.
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            At Varjo, you don’t just get breakthrough mixed reality hardware.
                            You gain access to a complete ecosystem of software, tools, and
                            integrations designed for professional training and simulation.
                        </p>
                    </div>
                </div>

                {/* RIGHT SCROLLING SIDE */}
                <div className="w-1/2">
                    {sections.map((item, i) => (
                        <div
                            key={i}
                            className="relative h-screen"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/30" />

                            {/* CONTENT BLOCK */}
                            <div className="relative z-10 h-full flex items-center">
                                <div className="px-16 max-w-xl text-white">
                                    <p className="text-xs tracking-widest uppercase mb-4 opacity-80">
                                        Compatible software
                                    </p>

                                    <h3 className="text-4xl font-light leading-tight mb-6">
                                        {item.title}
                                    </h3>

                                    <p className="text-base leading-relaxed opacity-90 mb-10">
                                        {item.subtitle}
                                    </p>

                                    <button className="border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition">
                                        Explore →
                                    </button>
                                </div>
                            </div>

                            {/* ✅ TRUE BOTTOM-RIGHT INDEX */}
                            <div className="absolute bottom-10 right-10 z-20 text-sm tracking-wide text-white/70">
                                {item.index} / 06
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

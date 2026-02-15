import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

// ✅ RESTORED SECTIONS DATA
const sections = [
    {
        // heading: "",
        // title: "Powering the world’s most realistic training applications.",
        // subtitle:
        //     "By integrating with the world's leading 3D software, image generators and simulation platforms.",
        // image: "https://images.unsplash.com/photo-1508615070457-7baeba4003e4",
        // index: "01",
        // button: ""
    },
    {
        heading: "Zero One",
        title: "High-fidelity simulation environments.",
        subtitle:
            "Train in ultra-realistic scenarios with industry-grade rendering pipelines.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        index: "02",
        button: "Explore"
    },
    {
        heading: "Zero Two",
        title: "Built for professional workflows.",
        subtitle:
            "Seamlessly integrate with enterprise simulation engines.",
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
        index: "03",
        button: "Explore"
    },
    {
        heading: "Zero Three",
        title: "Advanced visualization technology.",
        subtitle:
            "See more, understand more, and act faster using XR precision visuals.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        index: "04",
        button: "Explore"
    },
    {
        heading: "Comparable Software",
        title: "Reliable performance at scale.",
        subtitle:
            "Designed for continuous operation in mission-critical environments.",
        image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
        index: "05",
        button: "Explore"
    },
    {
        heading: "Comparable Software",
        title: "Training without compromise.",
        subtitle:
            "Unmatched realism, performance, and flexibility.",
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
        index: "06",
        button: "Explore"
    },
];

export default function ScrollableShowcaseFlip() {
    const wrapperRef = useRef(null);
    const panelsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panels = panelsRef.current;

            gsap.set(panels, { xPercent: 100 });
            gsap.set(panels[0], { xPercent: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top top",
                    end: `+=${panels.length * 100}%`,
                    pin: true,
                    scrub: 1,
                    pinSpacing: true,
                    anticipatePin: 0.5
                },
            });

            panels.forEach((panel, i) => {
                if (i === 0) return;
                tl.to(panel, { xPercent: 0, duration: 1 }, ">");
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);


    return (
        <section ref={wrapperRef} className="relative w-full h-screen overflow-hidden">
            <div className="flex h-screen">

                {/* LEFT FIXED PANEL */}
                <div className="w-1/2 bg-[#f2f2f2] flex items-center">
                    <div className="px-16 max-w-xl">
                        <p className="text-xs tracking-widest text-gray-500 uppercase mb-6">
                            Our XR Offering
                        </p>

                        <h2 className="text-[42px] leading-tight font-light text-black mb-6">
                            Engineered for unlimited creation, learning, and collaboration.
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            At AntiWorld, you don’t just get breakthrough spatial computers
                            or XR glasses. You unlock the most advanced spatial software,
                            modular hardware, and seamless AI-powered experiences—engineered for
                            creators, students, and innovators everywhere. Rely on our open platform,
                            world-class integration, and expert support to design, build, and collaborate
                            in ways never before possible. Step into a new era of limitless creation, learning,
                            and real-world impact with AntiWorld
                        </p>
                    </div>
                </div>

                {/* RIGHT FLIP STACK */}
                <div className="relative w-1/2 overflow-hidden bg-black">
                    {sections.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => (panelsRef.current[i] = el)}
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-black/30" />

                            <div className="relative z-10 h-full flex items-center">
                                <div className="px-16 max-w-xl text-white">
                                    <p className="text-xs tracking-widest uppercase mb-4 opacity-80">
                                        {item.heading}
                                    </p>

                                    <h3 className="text-4xl font-light leading-tight mb-6">
                                        {item.title}
                                    </h3>

                                    <p className="text-base leading-relaxed opacity-90 mb-10">
                                        {item.subtitle}
                                    </p>

                                    <button className="border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition">
                                        {item.button}
                                    </button>
                                </div>
                            </div>

                            <div className="absolute bottom-10 right-10 text-sm text-white/70">
                                {item.index} / 06
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

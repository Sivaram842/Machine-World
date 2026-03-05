import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        title: "ZERO ONE",
        description:
            "Redefining personal computing for the spatial age. A fusion of raw performance and intelligent immersion—built to replace every screen you’ve ever known. ",
        video: "/salaar.mp4",
    },
    {
        title: "ZERO TWO",
        description:
            "All the power of spatial computing—reimagined for your pocket. Lightweight, intelligent, and always aware of the world around you",
        video: "/og.mp4",
    },
    {
        title: "ZERO THREE",
        description:
            "Where creativity meets intelligence. Write, draw, and think naturally—powered by AI precision and seamless digital integration.",
        video: "/hit3.mp4",
    },
];

export default function MetaSlider() {
    const wrapperRef = useRef(null);
    const videosRef = useRef([]);
    const textsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(videosRef.current, { opacity: 0 });
            gsap.set(textsRef.current, { opacity: 0, y: 40 });

            gsap.set(videosRef.current[0], { opacity: 1 });
            gsap.set(textsRef.current[0], { opacity: 1, y: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top top",
                    end: `+=${slides.length * 140}%`,
                    pin: true,
                    scrub: 1.4,
                    pinSpacing: true,
                },
            });

            slides.forEach((_, i) => {
                if (i === 0) return;

                tl.to({}, { duration: 0.6 });

                tl.to(
                    videosRef.current[i - 1],
                    { opacity: 0, duration: 0.8, ease: "power2.out" }
                );
                tl.to(
                    videosRef.current[i],
                    { opacity: 1, duration: 0.8, ease: "power2.out" },
                    "<"
                );

                tl.to(
                    textsRef.current[i - 1],
                    { opacity: 0, y: -40, duration: 0.6, ease: "power2.out" },
                    "<+0.1"
                );

                tl.fromTo(
                    textsRef.current[i],
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                    "<+0.2"
                );
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={wrapperRef}
            className="relative w-full min-h-[75vh] sm:min-h-[90vh] lg:h-screen overflow-hidden bg-black text-white"
        >
            {/* VIDEO LAYER */}
            <div className="absolute inset-0">
                {slides.map((slide, i) => (
                    <video
                        key={i}
                        ref={(el) => (videosRef.current[i] = el)}
                        src={slide.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ))}
            </div>

            {/* TEXT LAYER */}
            <div className="relative z-10 h-full flex items-center px-6 sm:px-12 lg:px-24">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        ref={(el) => (textsRef.current[i] = el)}
                        className="absolute max-w-[90%] sm:max-w-xl"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                            {slide.title}
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                            {slide.description}
                        </p>

                        <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black text-xs sm:text-sm tracking-wide hover:opacity-80 transition w-full sm:w-auto">
                            EXPLORE
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
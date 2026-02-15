import { useEffect, useRef, useState } from "react";

const lines = [
    "EDUCATORS, ENGINEERS, ARTISTS, AND",
    "PRACTITIONERS CHOOSE THE ZERO",
    "TRILOGY TO TRANSFORM LEARNING,",
    "WORK, CREATION, AND CARE—ACROSS",
    "CLASSROOMS, STUDIOS, INDUSTRIES,",
    "AND MEDICINE."
];

export default function ScrollRevealText() {
    const lineRefs = useRef([]);
    const [activeLines, setActiveLines] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const midpoint = window.innerHeight / 2;

            const updated = {};

            lineRefs.current.forEach((el, index) => {
                if (!el) return;

                const rect = el.getBoundingClientRect();

                // line becomes black once it crosses middle
                if (rect.top < midpoint) {
                    updated[index] = true;
                } else {
                    updated[index] = false;
                }
            });

            setActiveLines(updated);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="w-full bg-white py-40 flex justify-center">
            <div className="max-w-5xl text-center px-6">

                {/* TEXT BLOCK */}
                <div className="space-y-1">
                    {lines.map((text, i) => (
                        <div
                            key={i}
                            ref={(el) => (lineRefs.current[i] = el)}
                            className={`
                transition-colors duration-500 ease-out
                text-[42px] leading-tight font-light tracking-wide
                ${activeLines[i] ? "text-black" : "text-gray-500"}
              `}
                        >
                            {text}
                        </div>
                    ))}
                </div>

                {/* Description */}
                <p className="mt-10 text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
                    See how our unified spatial ecosystem brings immersive classrooms,
                    precision engineering, creative freedom, and intelligent healthcare
                    to life—empowering users everywhere to shape the future, one experience at a time
                </p>
            </div>
        </section>
    );
}

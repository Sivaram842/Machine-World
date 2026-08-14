import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    heading: "Zero One",
    title: "High-fidelity simulation environments.",
    subtitle:
      "Train in ultra-realistic scenarios with industry-grade rendering pipelines.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    index: "01",
    button: "Explore",
  },
  {
    heading: "Zero Two",
    title: "Built for professional workflows.",
    subtitle: "Seamlessly integrate with enterprise simulation engines.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    index: "02",
    button: "Explore",
  },
  {
    heading: "Zero Three",
    title: "Advanced visualization technology.",
    subtitle:
      "See more, understand more, and act faster using XR precision visuals.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    index: "03",
    button: "Explore",
  },
  {
    heading: "Comparable Software",
    title: "Reliable performance at scale.",
    subtitle:
      "Designed for continuous operation in mission-critical environments.",
    image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    index: "04",
    button: "Explore",
  },
  {
    heading: "Comparable Software",
    title: "Training without compromise.",
    subtitle: "Unmatched realism, performance, and flexibility.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    index: "05",
    button: "Explore",
  },
];

export default function ScrollableShowcaseFlip() {
  const wrapperRef = useRef(null);
  const panelsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;

      if (!panels.length) return;

      gsap.set(panels, {
        xPercent: 100,
        rotateY: 30,
        transformPerspective: 1200,
      });

      gsap.set(panels[0], {
        xPercent: 0,
        rotateY: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${panels.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;

        const bg = panel.querySelector(".panel-bg");
        const text = panel.querySelector(".panel-text");

        if (!bg || !text) return;

        tl.to(
          panel,
          {
            xPercent: 0,
            rotateY: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          ">",
        )

          .from(
            text,
            {
              y: 80,
              opacity: 0,
              duration: 0.8,
            },
            "<0.2",
          )

          .to(
            bg,
            {
              scale: 1.15,
              duration: 1.5,
              ease: "none",
            },
            "<",
          );
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 bg-[#f2f2f2] flex items-center py-16 lg:py-0">
          <div className="px-4 sm:px-8 lg:px-16 max-w-xl">
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-6">
              Our XR Offering
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[42px] leading-tight font-light text-black mb-6">
              Engineered for unlimited creation, learning, and collaboration.
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              At Doom Industries, you don’t just get breakthrough spatial
              computers or XR glasses. You unlock advanced spatial software,
              modular hardware, and seamless AI-powered experiences. Our
              platform empowers creators, students, and innovators to design,
              build, and collaborate in entirely new ways.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL STACK */}
        <div className="relative w-full lg:w-1/2 overflow-hidden bg-black min-h-[80vh] lg:min-h-screen">
          {sections.map((item, i) => (
            <div
              key={i}
              ref={(el) => (panelsRef.current[i] = el)}
              className="absolute inset-0"
            >
              {/* Background */}
              <div
                className="panel-bg absolute inset-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className="absolute inset-0 bg-black/30" />

              {/* Text */}
              <div className="panel-text relative z-10 h-full flex items-center">
                <div className="px-6 md:px-16 max-w-xl text-white">
                  <p className="text-xs tracking-widest uppercase mb-4 opacity-80">
                    {item.heading}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6">
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

              {/* Index */}
              <div className="absolute bottom-10 right-10 text-sm text-white/70">
                {item.index} / 05
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

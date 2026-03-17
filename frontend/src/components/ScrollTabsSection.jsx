import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../assets/DAS.jpeg"
import img1 from "../assets/Book.jpeg"
import img2 from "../assets/Realm.jpeg"
gsap.registerPlugin(ScrollTrigger);

const ScrollTabsSection = () => {
    const introRef = useRef(null);
    const textRef = useRef(null);
    const tabsRef = useRef(null);
    useEffect(() => {
        ScrollTrigger.create({
            trigger: introRef.current,
            start: "top top",
            end: "bottom top",
            pin: textRef.current,
            pinSpacing: false,
        });

        const handleScroll = () => {
            if (!tabsRef.current) return;

            const sectionTop = tabsRef.current.offsetTop;
            const scrollPosition = window.scrollY - sectionTop;

            const windowHeight = window.innerHeight;

            const sections = document.querySelectorAll(".tab-text");
            const images = document.querySelectorAll(".tab-image");

            const lastIndex = sections.length - 1;

            sections.forEach((section, index) => {
                if (
                    scrollPosition >= index * windowHeight &&
                    scrollPosition < (index + 1) * windowHeight
                ) {
                    section.classList.add("opacity-100");
                    images[index].classList.add("opacity-100", "translate-y-0");
                } else {
                    section.classList.remove("opacity-100");
                    images[index].classList.remove("opacity-100", "translate-y-0");
                }
            });

            if (scrollPosition > lastIndex * windowHeight) {
                sections[lastIndex].classList.add("opacity-100");
                images[lastIndex].classList.add("opacity-100", "translate-y-0");
            } else {
                sections[lastIndex].classList.remove("opacity-100");
                images[lastIndex].classList.remove("opacity-100", "translate-y-0");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* INTRO */}
            <div
                ref={introRef}
                className="relative h-[90vh] bg-gray-100 flex items-center justify-center"
            >
                <div
                    ref={textRef}
                    className="text-center max-w-xl absolute top-[50px]"
                >
                    <h2 className="text-4xl font-medium mb-6">
                        <span className="text-green-400">149€/month</span> & not a single worry
                    </h2>

                    <p className="text-gray-500 text-lg">
                        We take care of registration, insurance, and maintenance to ensure
                        you have a hassle-free ride!
                    </p>
                </div>
            </div>

            {/* TABS SECTION */}
            <section
                ref={tabsRef}
                className="relative bg-gray-900 rounded-[2rem] z-10"
            >
                <div className="py-28">
                    <div className="h-[550vh]">
                        <div className="sticky top-[5vh] h-screen">
                            <div className="max-w-7xl mx-auto grid md:grid-cols-[0.4fr_1fr] gap-6 px-6 h-[90vh]">

                                {/* LEFT TEXT */}
                                <div className="bg-gray-700 rounded-xl p-6 flex flex-col justify-between">

                                    <div className="relative h-full">

                                        <div className="tab-text absolute inset-0 flex flex-col justify-around opacity-100 transition-opacity duration-500">
                                            <h2 className="text-3xl text-white">
                                                Reinventing micro-mobility with
                                                <span className="text-green-400"> Award winning</span> design
                                            </h2>
                                            <div className="h-[1px] bg-gray-500"></div>
                                            <p className="text-gray-400">
                                                Our mission is to close the gap between a scooter and a bike.
                                            </p>
                                        </div>

                                        <div className="tab-text absolute inset-0 flex flex-col justify-around opacity-0 transition-opacity duration-500">
                                            <h2 className="text-3xl text-white">
                                                Best in class energy management for
                                                <span className="text-green-400"> optimal autonomy</span>
                                            </h2>
                                            <div className="h-[1px] bg-gray-500"></div>
                                            <p className="text-gray-400">
                                                3 riding modes offering up to 80km range.
                                            </p>
                                        </div>

                                        <div className="tab-text absolute inset-0 flex flex-col justify-around opacity-0 transition-opacity duration-500">
                                            <h2 className="text-3xl text-white">
                                                Durable and effortless
                                                <span className="text-green-400"> all the way</span>
                                            </h2>
                                            <div className="h-[1px] bg-gray-500"></div>
                                            <p className="text-gray-400">
                                                Crafted for simplicity and efficiency.
                                            </p>
                                        </div>

                                    </div>

                                    <button className="border border-green-400 text-white px-6 py-2 rounded-lg hover:bg-green-400 hover:text-black transition">
                                        Order Today →
                                    </button>

                                </div>

                                {/* RIGHT IMAGES */}
                                <div className="relative overflow-hidden rounded-xl">

                                    <img
                                        src={img}
                                        className="tab-image absolute inset-0 w-full h-full object-cover opacity-100 translate-y-0 transition-all duration-500"
                                    />

                                    <img
                                        src={img1}
                                        className="tab-image absolute inset-0 w-full h-full object-cover opacity-0 translate-y-full transition-all duration-500"
                                    />

                                    <img
                                        src={img2}
                                        className="tab-image absolute inset-0 w-full h-full object-cover opacity-0 translate-y-full transition-all duration-500"
                                    />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-[50vh]" />
        </>
    );
};

export default ScrollTabsSection;
import img from "../../assets/XR-4-1.webp";

export default function PassthroughSection() {
    return (
        <section className="bg-white py-16 sm:py-24 lg:py-[140px]">
            <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 sm:gap-16 lg:gap-[100px] px-4 sm:px-8 lg:px-16">

                {/* LEFT TEXT */}
                <div className="w-full lg:w-[42%]">
                    <small className="block text-[10px] sm:text-[12px] tracking-widest text-black">
                        TRAIN WITH PHYSICAL ELEMENTS
                    </small>

                    <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-tight text-black">
                        Passthrough for human-level realism.
                    </h2>

                    <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                        Varjo’s dual 20-megapixel passthrough cameras recreate the real
                        world with ultra-low latency and industry-leading clarity.
                    </p>

                    <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                        Trainees can see and interact naturally with real cockpit controls,
                        tools, or instruments while remaining fully immersed in the virtual
                        environment.
                    </p>

                    <p className="mt-4 sm:mt-6 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                        The XR-4 Focal Edition enhances realism further with a world-first
                        gaze-driven autofocus system, mimicking the way the human eye
                        focuses to deliver unmatched mixed reality fidelity.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-[58%]">
                    <img
                        src={img}
                        alt="Passthrough optics"
                        className="h-[260px] sm:h-[380px] lg:h-[520px] w-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
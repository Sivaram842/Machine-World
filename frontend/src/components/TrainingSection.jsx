
export default function TrainingSection() {
    return (
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
            <div className="w-full px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">

                {/* LEFT CONTENT */}
                <div className="max-w-[620px]">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-tight font-light text-gray-900 mb-4 sm:mb-6">
                        Spatial Computing: Boundless <br />
                        Creation, Real-World Impact.
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                        The need for immersive creation, learning, and collaboration grows
                        every day—across classrooms, creative studios, and workspaces worldwide.
                        Traditional screens and fixed workstations can’t keep up with the demand
                        for mobility, scale, or true freedom. Spatial computing bridges this gap,
                        delivering transformative experiences that are more portable, more immersive,
                        and more adaptable than anything before—empowering you to work, create, and
                        connect everywhere, without limits.
                    </p>

                    <button className="inline-flex items-center gap-3 sm:gap-4 bg-black text-white 
                        px-6 sm:px-8 lg:px-10 
                        py-3 sm:py-4 
                        text-sm sm:text-base font-medium 
                        hover:opacity-80 transition">
                        WHY XR?
                        <span className="text-base sm:text-lg">→</span>
                    </button>
                </div>

                {/* RIGHT VIDEO */}
                <div className="w-full">
                    <video
                        src={"/training.mp4"}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[280px] sm:h-[380px] lg:h-[520px] object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
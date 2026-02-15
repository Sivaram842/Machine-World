import trainingVideo from "../assets/training.mp4";

export default function TrainingSection() {
    return (
        <section className="w-full bg-white py-24">
            <div className="w-full px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* LEFT CONTENT */}
                <div className="max-w-[620px]">
                    <h2 className="text-[38px] leading-tight font-light text-gray-900 mb-6">
                        Spatial Computing: Boundless  <br />
                        Creation, Real-World Impact.
                    </h2>

                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                        The need for immersive creation, learning, and collaboration grows
                        every day—across classrooms, creative studios, and workspaces worldwide.
                        Traditional screens and fixed workstations can’t keep up with the demand
                        for mobility, scale, or true freedom. Spatial computing bridges this gap,
                        delivering transformative experiences that are more portable, more immersive,
                        and more adaptable than anything before—empowering you to work, create, and
                        connect everywhere, without limits.
                    </p>

                    {/* <p className="text-gray-600 text-base leading-relaxed mb-10">
                        Mixed reality technology can bridge that gap, with training solutions
                        that are more portable and more immersive than ever before.
                    </p> */}

                    <button className="inline-flex items-center gap-4 bg-black text-white 
  px-10 py-4 text-base font-medium 
  hover:opacity-80 transition">
                        WHY XR?
                        <span className="text-lg">→</span>
                    </button>
                </div>

                {/* RIGHT VIDEO */}
                <div className="w-full">
                    <video
                        src={trainingVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[520px] object-cover"
                    />
                </div>

            </div>
        </section>
    );
}

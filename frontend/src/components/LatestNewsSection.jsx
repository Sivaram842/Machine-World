import Training from "../assets/state-of-xr-report-hero.webp"

export default function LatestNewsSection() {
    return (
        <section className="w-full px-16 py-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
                <p className="text-xs tracking-widest uppercase text-black">
                    Latest news and insights
                </p>
                <a className="text-xs tracking-widest uppercase flex items-center gap-2 hover:underline">
                    All articles →
                </a>
            </div>

            {/* GRID */}
            <div
                className="grid gap-6"
                style={{
                    gridTemplateColumns: "1.6fr 1fr 1fr",
                }}
            >
                {/* LARGE LEFT CARD */}
                <div
                    className="relative h-[520px] overflow-hidden group"
                    style={{
                        backgroundImage:
                            `url(${Training})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-blue-700/90 transition-all duration-300" />

                    <div className="relative z-10 p-12 h-full flex flex-col justify-between text-white">
                        <p className="text-xs tracking-widest uppercase">
                            December 3, 2025
                        </p>

                        <div>
                            <h3 className="text-3xl leading-snug font-semibold mb-5 max-w-xl">
                                Varjo releases state of XR in simulation training report: adoption
                                moves beyond experimentation
                            </h3>

                            <p className="text-sm opacity-90 max-w-lg">
                                Varjo’s report reveals how defense organizations adopt immersive XR
                                to power next-generation training.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARD 1 */}
                <div className="group h-[520px] bg-[#f1f1f1] text-black p-10 flex flex-col justify-between transition-all duration-300 hover:bg-blue-700 hover:text-white">
                    <p className="text-xs tracking-widest uppercase">
                        Press release / November 25, 2025
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold leading-snug mb-4">
                            Rheinmetall and Varjo join forces to accelerate defense readiness
                        </h3>

                        <p className="text-sm opacity-90">
                            Varjo’s XR integrates into Rheinmetall’s deployable virtual land
                            training systems.
                        </p>
                    </div>
                </div>

                {/* RIGHT CARD 2 */}
                <div className="group h-[520px] bg-[#f1f1f1] text-black p-10 flex flex-col justify-between transition-all duration-300 hover:bg-blue-700 hover:text-white">
                    <p className="text-xs tracking-widest uppercase">
                        Press release / November 18, 2025
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold leading-snug mb-4">
                            Varjo and Reiser announce EASA pre-qualification of the mixed reality
                            H145 D3 simulator
                        </h3>

                        <p className="text-sm opacity-80 group-hover:opacity-100">
                            Advancing certified multi-crew training with mixed reality
                            technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

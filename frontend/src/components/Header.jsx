
export default function Header() {
    return (
        <header className="relative w-full min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen overflow-hidden">

            {/* Background video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={"/homeVideo.mp4"}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex items-end min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen">

                <div className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-24">

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between max-w-7xl w-full gap-8">

                        {/* LEFT */}
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight lg:max-w-2xl">
                            NEXT-GEN SPATIAL COMPUTING
                        </h1>

                        {/* RIGHT */}
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl text-left lg:text-right">
                            By fusing immersive digital and real environments,
                            our spatial computers and modular XR glasses + pods enable creators,
                            students, and pioneers to invent, collaborate, and build in limitless
                            3D space—without barriers, screens, or boundaries. Experience the freedom
                            to create, learn, and connect anywhere—powered by AI, and always evolving.
                        </p>

                    </div>

                </div>
            </div>

        </header>
    );
}
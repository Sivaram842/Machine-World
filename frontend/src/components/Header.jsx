import hero1 from "../assets/hero.mp4";
import hero from "../assets/homeVideo.mp4";

export default function Header() {
    return (
        <header className="relative h-screen w-full overflow-hidden">

            {/* Background video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={hero}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-end">
                <div className="w-full px-12 pb-24">

                    {/* GRID WRAPPER – this controls alignment */}
                    <div className="grid grid-cols-2 gap-16 max-w-7xl">

                        {/* LEFT COLUMN */}
                        <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                            NEXT-GEN SPATIAL COMPUTING
                        </h1>

                        {/* RIGHT COLUMN */}
                        <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-xl">
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

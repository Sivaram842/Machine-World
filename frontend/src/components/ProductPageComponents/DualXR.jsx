export default function DualXR({ leftImage, rightImage }) {
    return (
        <section className="w-full h-screen grid grid-cols-1 md:grid-cols-2">

            {/* LEFT */}
            <div
                className="relative flex flex-col justify-between p-16 text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${leftImage})` }}
            >
                {/* Overlay (optional but recommended) */}
                <div className="absolute inset-0 bg-black/40" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-xl">
                    <span className="block text-xs tracking-[0.25em] uppercase mb-6 text-gray-200">
                        Enhanced Mixed Reality
                    </span>

                    <h1 className="text-4xl md:text-5xl font-light mb-8">
                        Varjo XR-4 Focal Edition
                    </h1>

                    <ul className="space-y-3 text-base text-gray-100">
                        <li>Human vision XR with gaze-driven autofocus</li>
                        <li>120° × 105° FOV (50% increase)</li>
                        <li>Integrated spatial audio</li>
                        <li>Enhanced depth awareness with LiDAR</li>
                        <li>Steam and inside-out tracking</li>
                    </ul>
                </div>

                {/* BUTTON */}
                <button className="relative z-10 self-start border border-white px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition">
                    Explore XR-4 Focal →
                </button>
            </div>

            {/* RIGHT */}
            <div
                className="relative flex flex-col justify-between p-16 text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${rightImage})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-xl">
                    <span className="block text-xs tracking-[0.25em] uppercase mb-6 text-gray-200">
                        For Classified Environments
                    </span>

                    <h1 className="text-4xl md:text-5xl font-light mb-8">
                        Varjo XR-4 Secure Edition
                    </h1>

                    <ul className="space-y-3 text-base text-gray-100">
                        <li>Advanced XR-4 features included</li>
                        <li>Fully TAA compliant</li>
                        <li>No radio components</li>
                        <li>Secure manufacturing in Finland</li>
                    </ul>
                </div>

                {/* BUTTON */}
                <button className="relative z-10 self-start border border-white px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition">
                    Explore XR-4 Secure →
                </button>
            </div>
        </section>
    );
}

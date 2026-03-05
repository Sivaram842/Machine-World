export default function DualXR({ leftImage, rightImage }) {
    return (
        <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">

            {/* LEFT */}
            <div
                className="relative flex flex-col justify-between p-6 sm:p-10 md:p-16 text-white bg-cover bg-center min-h-[70vh] md:min-h-screen"
                style={{ backgroundImage: `url(${leftImage})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-xl">
                    <span className="block text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-6 text-gray-200">
                        Enhanced Mixed Reality
                    </span>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 leading-tight">
                        Varjo XR-4 Focal Edition
                    </h1>

                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-100">
                        <li>Human vision XR with gaze-driven autofocus</li>
                        <li>120° × 105° FOV (50% increase)</li>
                        <li>Integrated spatial audio</li>
                        <li>Enhanced depth awareness with LiDAR</li>
                        <li>Steam and inside-out tracking</li>
                    </ul>
                </div>

                {/* BUTTON */}
                <button className="relative z-10 self-start mt-8 md:mt-0 border border-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wide hover:bg-white hover:text-black transition w-fit">
                    Explore XR-4 Focal →
                </button>
            </div>

            {/* RIGHT */}
            <div
                className="relative flex flex-col justify-between p-6 sm:p-10 md:p-16 text-white bg-cover bg-center min-h-[70vh] md:min-h-screen"
                style={{ backgroundImage: `url(${rightImage})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-xl">
                    <span className="block text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-6 text-gray-200">
                        For Classified Environments
                    </span>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 leading-tight">
                        Varjo XR-4 Secure Edition
                    </h1>

                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-100">
                        <li>Advanced XR-4 features included</li>
                        <li>Fully TAA compliant</li>
                        <li>No radio components</li>
                        <li>Secure manufacturing in Finland</li>
                    </ul>
                </div>

                {/* BUTTON */}
                <button className="relative z-10 self-start mt-8 md:mt-0 border border-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wide hover:bg-white hover:text-black transition w-fit">
                    Explore XR-4 Secure →
                </button>
            </div>
        </section>
    );
}
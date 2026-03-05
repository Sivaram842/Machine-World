export default function PurposeSection() {
    return (
        <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
            <div className="px-4 sm:px-8 lg:px-16 max-w-4xl">

                {/* Small label */}
                <p className="text-xs tracking-widest text-gray-500 uppercase mb-4 sm:mb-6">
                    Our XR Offering
                </p>

                {/* Main heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-light text-black mb-4 sm:mb-6">
                    Purpose-built for training and <br />
                    simulation.
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                    At Varjo, you don't just get cutting-edge mixed reality headsets. Our
                    customers rely on us because we provide the most advanced software,
                    integration capabilities and expert services, all designed to scale
                    mission-critical training safely and securely. Step into a new era of
                    preparedness with Varjo.
                </p>

            </div>
        </section>
    );
}
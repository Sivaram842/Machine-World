export default function TrainingPackageSection() {
    return (
        <section className="bg-white px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
            <div className="mx-auto max-w-[450px] text-center">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-[36px] font-light leading-snug text-black">
                    A complete package for
                    <br />
                    training and simulation.
                </h2>

                {/* Paragraph 1 */}
                <p className="mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                    Engineered for long-duration use, each headset offers automatic IPD
                    adjustment, glasses compatibility, and integrated DTS 3D spatial
                    audio with noise-cancelling microphones for seamless communication
                    during multi-trainee sessions.
                </p>

                {/* Paragraph 2 */}
                <p className="mt-6 sm:mt-8 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                    Integrated 200 Hz eye-tracking cameras provide detailed analytics
                    for post-training performance review and research.
                </p>

                {/* Button */}
                <button className="mt-10 sm:mt-14 lg:mt-20 
                                   inline-flex items-center justify-center gap-4 
                                   bg-black 
                                   px-6 sm:px-8 lg:px-10 
                                   py-3 sm:py-3.5 lg:py-4 
                                   text-xs sm:text-[13px] 
                                   tracking-widest text-white 
                                   hover:bg-gray-900 transition 
                                   w-full sm:w-auto">
                    LEARN MORE ABOUT XR TRAINING AND SIMULATION
                    <span className="text-base sm:text-lg">→</span>
                </button>

            </div>
        </section>
    );
}
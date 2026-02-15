export default function TrainingPackageSection() {
    return (
        <section className="bg-white px-6 py-[160px]">
            <div className="mx-auto max-w-[450px] text-center">
                {/* Heading */}
                <h2 className="text-[36px] font-light leading-snug text-black">
                    A complete package for
                    <br />
                    training and simulation.
                </h2>

                {/* Paragraph 1 */}
                <p className="mt-10 text-[15px] leading-relaxed text-gray-600">
                    Engineered for long-duration use, each headset offers automatic IPD
                    adjustment, glasses compatibility, and integrated DTS 3D spatial
                    audio with noise-cancelling microphones for seamless communication
                    during multi-trainee sessions.
                </p>

                {/* Paragraph 2 */}
                <p className="mt-8 text-[15px] leading-relaxed text-gray-600">
                    Integrated 200 Hz eye-tracking cameras provide detailed analytics
                    for post-training performance review and research.
                </p>

                {/* Button */}
                <button className="mt-20 inline-flex items-center gap-4 bg-black px-10 py-4 text-[13px] tracking-widest text-white hover:bg-gray-900 transition">
                    LEARN MORE ABOUT XR TRAINING AND SIMULATION
                    <span className="text-lg">→</span>
                </button>
            </div>
        </section>
    );
}

export default function VariantsSection() {
    return (
        <section className="bg-[#efefed] px-6 py-[160px]">
            <div className="mx-auto max-w-3xl text-center">
                {/* Heading */}
                <h2 className="text-[38px] font-light tracking-tight text-black">
                    Variants for every mission
                </h2>

                {/* Subtitle */}
                <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-relaxed text-gray-600">
                    The Varjo XR-4 Series includes three models, each tailored
                    for specific operational requirements:
                </p>

                {/* Variants */}
                <div className="mt-20 space-y-16 text-[15px] leading-relaxed text-gray-700">
                    <p>
                        <strong className="font-semibold text-black">
                            Varjo XR-4
                        </strong>{" "}
                        — Best-in-class visual fidelity for virtual
                        <br />
                        training environments.
                    </p>

                    <p>
                        <strong className="font-semibold text-black">
                            Varjo XR-4 Focal Edition
                        </strong>{" "}
                        — Enhanced mixed reality with
                        <br />
                        gaze-driven autofocus passthrough for real-world
                        integration.
                    </p>

                    <p>
                        <strong className="font-semibold text-black">
                            Varjo XR-4 Secure Edition
                        </strong>{" "}
                        — Fully TAA-compliant,
                        <br />
                        Finland-assembled model for classified or air-gapped
                        environments.
                    </p>
                </div>

                {/* Button */}
                <button className="mt-28 inline-flex items-center gap-3 bg-black px-10 py-4 text-[13px] tracking-widest text-white hover:bg-gray-900 transition">
                    DOWNLOAD PRODUCT BOOK
                    <span className="text-lg">→</span>
                </button>
            </div>
        </section>
    );
}

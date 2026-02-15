import img from "../../assets/XR-4-2.png";

export default function ImmersionSection() {
    return (
        <section className="bg-white py-[140px]">
            <div className="mx-auto flex max-w-[1400px] items-start gap-[100px] px-16">
                {/* LEFT IMAGE */}
                <div className="w-[58%]">
                    <img
                        src={img}
                        alt="Immersion display"
                        className="h-[520px] w-full object-cover"
                    />
                </div>

                {/* RIGHT TEXT */}
                <div className="w-[42%]">
                    <small className="block text-[12px] tracking-widest text-black">
                        SEE EVERY MISSION DETAIL
                    </small>

                    <h2 className="mt-6 text-[40px] font-light leading-tight text-black">
                        360 degrees of immersion.
                    </h2>

                    <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                        Pilot-grade 4K-per-eye mini-LED displays with local dimming deliver
                        the clarity, contrast, and depth perception required for authentic
                        mission rehearsal.
                    </p>

                    <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
                        A 120° × 105° field of view achieves full binocular vision, while
                        28 million pixels of visual precision recreate environments with
                        unprecedented realism, allowing trainees to perceive detail
                        exactly as they would in the real world.
                    </p>
                </div>
            </div>
        </section>
    );
}

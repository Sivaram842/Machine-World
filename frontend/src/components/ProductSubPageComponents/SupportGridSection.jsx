export default function SupportGridSection() {
    return (
        <section className="bg-[#f2f2f2] px-20 py-[120px]">
            <div className="grid grid-cols-4 gap-6">
                {/* BLOCK 1 – IMAGE (row-span-2) */}
                <div
                    className="group relative row-span-2 min-h-[325px] cursor-pointer bg-cover bg-center p-8 text-white transition-colors"
                    style={{ backgroundImage: "url(/assets/tracking.jpg)" }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

                    <small className="relative z-10 text-[12px] tracking-widest">
                        STEAM VR
                    </small>
                    <h3 className="relative z-10 my-4 text-[22px] leading-snug">
                        TRACKING
                        <br />
                        NEEDS COVERED
                    </h3>
                    <p className="relative z-10 text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                        SteamVR™ tracking and inside-out tracking are included in every
                        XR-4 Series headset.
                    </p>
                </div>

                {/* BLOCK 2 */}
                <div
                    className="group relative row-span-2 min-h-[325px] cursor-pointer bg-cover bg-center p-8 text-white"
                    style={{ backgroundImage: "url(/assets/vendors.jpg)" }}
                >
                    <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

                    <small className="relative z-10 text-[12px] tracking-widest">
                        VENDORS
                    </small>
                    <h3 className="relative z-10 my-4 text-[22px] leading-snug">
                        VARJO-READY
                        <br />
                        COMPUTERS
                    </h3>
                    <p className="relative z-10 text-[14px] leading-relaxed text-gray-200 group-hover:text-white">
                        The XR-4 Series caters for professional software running on Windows,
                        tapping into the power of NVIDIA graphics cards.
                    </p>
                </div>

                {/* BLOCK 3 – IMAGE (row-span-2) */}


                <div className="min-h-[325px] cursor-pointer bg-white p-8 transition hover:bg-[#0057ff] hover:text-white">
                    <small className="text-[12px] tracking-widest">VARJO ALPHA</small>
                    <h3 className="my-4 text-[22px] leading-snug">
                        GET END-TO-END SUPPORT
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#444] hover:text-white">
                        Need assistance with planning or implementing an XR based solution?
                        Our in-house experts are available.
                    </p>
                </div>
                {/* BLOCK 4 */}
                <div className="min-h-[325px] cursor-pointer bg-white p-8 transition hover:bg-[#0057ff] hover:text-white">
                    <small className="text-[12px] tracking-widest">ACCESSORIES</small>
                    <h3 className="my-4 text-[22px] leading-snug">
                        COMPLETE THE EXPERIENCE
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#444] hover:text-white">
                        Extended cables, additional controllers and more to support your
                        immersive workflow.
                    </p>
                </div>

                {/* BLOCK 5 */}
                <div className="min-h-[325px] cursor-pointer bg-white p-8 transition hover:bg-[#0057ff] hover:text-white">
                    <small className="text-[12px] tracking-widest">SYSTEM</small>
                    <h3 className="my-4 text-[22px] leading-snug">
                        SYSTEM REQUIREMENTS
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#444] hover:text-white">
                        Find minimum OS, connectivity, GPU and CPU requirements for XR-4.
                    </p>
                </div>

                {/* BLOCK 6 */}
                <div className="min-h-[325px] cursor-pointer bg-white p-8 transition hover:bg-[#0057ff] hover:text-white">
                    <small className="text-[12px] tracking-widest">PRODUCT BOOK</small>
                    <h3 className="my-4 text-[22px] leading-snug">TECH SPECS</h3>
                    <p className="text-[14px] leading-relaxed text-[#444] hover:text-white">
                        Download the official technical specifications of the XR-4 Series.
                    </p>
                </div>
            </div>
        </section>
    );
}

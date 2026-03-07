
export default function CustomerQuoteSection() {
    return (
        <section className="w-full bg-white py-16 sm:py-24 lg:py-36">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-28 items-start">

                {/* LEFT SIDE — CUSTOMER LIST */}
                <div>
                    <p className="text-xs tracking-widest text-gray-500 mb-6 sm:mb-8 lg:mb-10 uppercase">
                        From our customers
                    </p>

                    <ul className="space-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] font-light">
                        {[
                            "RHEINMETALL",
                            "LOCKHEED MARTIN",
                            "EUROPEAN SPACE AGENCY",
                            "BOHEMIA INTERACTIVE",
                            "TRU SIMULATION",
                            "NVIDIA",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="text-gray-400 hover:text-black transition-colors duration-300 cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14">

                    {/* VIDEO */}
                    <div className="relative w-full aspect-[16/9] min-h-[220px] sm:min-h-[320px] lg:min-h-[520px] overflow-hidden bg-black">
                        <video
                            src={"/driving-simulator-monitor-center.mp4"}
                            controls
                            preload="metadata"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* QUOTE TEXT */}
                    <div className="max-w-3xl">
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] leading-[1.25] font-light italic text-black mb-4">
                            “The newest update to the XR-4 Series allows us to feel confident
                            that we can meet our customer requirements.”
                        </p>

                        <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-600 mb-6">
                            BARTEK PANASEWICZ — VP TRAINING SYSTEMS, LAND
                        </p>

                        <button className="inline-flex items-center justify-center gap-1 
                                           bg-black text-white 
                                           px-6 sm:px-8 
                                           py-3 sm:py-4 
                                           text-xs sm:text-sm 
                                           tracking-wide 
                                           hover:opacity-90 transition 
                                           w-full sm:w-auto">
                            READ CASE STUDY →
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
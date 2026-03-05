export default function XRDetails({ image }) {
    return (
        <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">

            {/* LEFT HALF */}
            <div className="flex flex-col justify-between px-6 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-24">

                {/* TEXT */}
                <div className="max-w-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6">
                        Varjo XR-4
                    </h1>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                        <span className="font-semibold text-gray-900">
                            Human vision computerized:
                        </span>{" "}
                        XR camera system that mimics the human eye
                        at 33 PPD. Dedicated ambient lighting reconstruction cameras deliver
                        the most realistic fusion of physical and virtual worlds ever
                        achieved.
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                        <span className="font-semibold text-gray-900">
                            Human vision computerized:
                        </span>{" "}
                        XR camera system that mimics the human eye
                        at 33 PPD. Dedicated ambient lighting reconstruction cameras deliver
                        the most realistic fusion of physical and virtual worlds ever
                        achieved.
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                        <span className="font-semibold text-gray-900">
                            Human vision computerized:
                        </span>{" "}
                        XR camera system that mimics the human eye
                        at 33 PPD. Dedicated ambient lighting reconstruction cameras deliver
                        the most realistic fusion of physical and virtual worlds ever
                        achieved.
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-900">
                            Human vision computerized:
                        </span>{" "}
                        XR camera system that mimics the human eye
                        at 33 PPD. Dedicated ambient lighting reconstruction cameras deliver
                        the most realistic fusion of physical and virtual worlds ever
                        achieved.
                    </p>
                </div>

                {/* BUTTON */}
                <button className="self-start mt-8 lg:mt-12 border border-black px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wide hover:bg-black hover:text-white transition w-full sm:w-auto">
                    Explore XR-4 →
                </button>
            </div>

            {/* RIGHT IMAGE */}
            <div
                className="min-h-[300px] sm:min-h-[400px] lg:min-h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
        </section>
    );
}
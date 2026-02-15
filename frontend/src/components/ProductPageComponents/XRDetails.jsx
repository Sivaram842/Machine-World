export default function XRDetails({ image }) {
    return (
        <section className="w-full h-screen grid grid-cols-1 md:grid-cols-2 bg-white">

            {/* LEFT HALF */}
            <div className="flex flex-col justify-between px-20 py-24">
                {/* TEXT */}
                <div className="max-w-xl">
                    <h1 className="text-5xl font-light mb-6">
                        Varjo XR-4
                    </h1>

                    <p className="text-base text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-900">
                            Human vision computerized:
                        </span>{" "}
                        XR camera system that mimics the human eye
                        at 33 PPD. Dedicated ambient lighting reconstruction cameras deliver
                        the most realistic fusion of physical and virtual worlds ever
                        achieved.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-900">
                            Human vision computerized:
                        </span>{" "}
                        XR camera system that mimics the human eye
                        at 33 PPD. Dedicated ambient lighting reconstruction cameras deliver
                        the most realistic fusion of physical and virtual worlds ever
                        achieved.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-900">
                            Human vision computerized:
                        </span>{" "}
                        XR camera system that mimics the human eye
                        at 33 PPD. Dedicated ambient lighting reconstruction cameras deliver
                        the most realistic fusion of physical and virtual worlds ever
                        achieved.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
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
                <button className="self-start border border-black px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition">
                    Explore XR-4 →
                </button>
            </div>

            {/* RIGHT IMAGE */}
            <div
                className="bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
        </section>
    );
}

export default function MilitaryXR() {
    return (
        <section className="w-full bg-[#eeeeec] py-16 sm:py-24 lg:py-40 px-4 sm:px-6">
            <div className="max-w-xl mx-auto text-center">

                {/* HEADING */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-6 sm:mb-8 lg:mb-10 text-black">
                    Military-grade VR and <br className="hidden sm:block" /> XR
                </h1>

                {/* PARAGRAPH 1 */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-5">
                    Varjo headsets are engineered to deliver true-to-life immersion and
                    unmatched visual fidelity for training and simulation. They enable
                    users to train, rehearse, and operate in fully realistic mixed reality
                    environments.
                </p>

                {/* PARAGRAPH 2 */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8 sm:mb-10 lg:mb-14">
                    Explore Varjo’s range of high-resolution mixed and virtual reality
                    headsets below. Full technical details and specifications are
                    available in the product book.
                </p>

                {/* BUTTON */}
                <button className="inline-flex items-center justify-center gap-3 
                                   bg-black text-white 
                                   px-6 sm:px-8 lg:px-10 
                                   py-3 sm:py-3.5 lg:py-4 
                                   text-xs sm:text-sm 
                                   tracking-widest 
                                   hover:opacity-80 
                                   transition 
                                   w-full sm:w-auto">
                    DOWNLOAD PRODUCT BOOK
                    <span className="text-base sm:text-lg">→</span>
                </button>
            </div>
        </section>
    );
}
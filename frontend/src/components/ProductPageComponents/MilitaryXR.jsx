export default function MilitaryXR() {
    return (
        <section className="w-full bg-[#eeeeec] py-40 px-6">
            <div className="max-w-xl mx-auto text-center">

                {/* HEADING */}
                <h1 className="text-4xl font-semibold leading-tight mb-10 text-black">
                    Military-grade VR and <br /> XR
                </h1>

                {/* PARAGRAPH 1 */}
                <p className="text-base text-gray-700 leading-relaxed mb-5">
                    Varjo headsets are engineered to deliver true-to-life immersion and
                    unmatched visual fidelity for training and simulation. They enable
                    users to train, rehearse, and operate in fully realistic mixed reality
                    environments.
                </p>

                {/* PARAGRAPH 2 */}
                <p className="text-base text-gray-700 leading-relaxed mb-14">
                    Explore Varjo’s range of high-resolution mixed and virtual reality
                    headsets below. Full technical details and specifications are
                    available in the product book.
                </p>

                {/* BUTTON */}
                <button className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 text-sm tracking-widest hover:opacity-80 transition">
                    DOWNLOAD PRODUCT BOOK
                    <span className="text-lg">→</span>
                </button>
            </div>
        </section>
    );
}

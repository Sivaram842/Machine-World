import p1 from "../../assets/XR-4-2.png";
import p2 from "../../assets/XR-4-2.png";
import p3 from "../../assets/XR-4-2.png";

export default function OrderNow() {
    return (
        <section className="w-full bg-white py-24 px-16">
            {/* TITLE */}
            <h1 className="text-4xl font-semibold mb-16">
                Order Now
            </h1>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* CARD 1 */}
                <div className="relative bg-gray-100 p-10 flex flex-col items-start hover:bg-gray-200 transition">
                    <h3 className="text-xl font-semibold mb-6">
                        XR-4
                    </h3>

                    <img
                        src={p1}
                        alt="XR-4"
                        className="w-full max-w-[260px] mx-auto mb-6 object-contain"
                    />

                    <p className="text-sm text-gray-600 mb-2">
                        Fixed Focus
                    </p>

                    <span className="text-sm font-medium text-black">
                        €6,990 excluding sales tax
                    </span>

                    <span className="absolute bottom-6 right-6 text-xl">
                        →
                    </span>
                </div>

                {/* CARD 2 */}
                <div className="relative bg-gray-100 p-10 flex flex-col items-start hover:bg-gray-200 transition">
                    <h3 className="text-xl font-semibold mb-6">
                        XR-4 Focal Edition
                    </h3>

                    <img
                        src={p2}
                        alt="XR-4 Focal Edition"
                        className="w-full max-w-[260px] mx-auto mb-6 object-contain"
                    />

                    <p className="text-sm text-gray-600 mb-2">
                        Autofocus
                    </p>

                    <span className="text-sm font-medium text-black">
                        €10,990 excluding sales tax
                    </span>

                    <span className="absolute bottom-6 right-6 text-xl">
                        →
                    </span>
                </div>

                {/* CARD 3 */}
                <div className="relative bg-gray-100 p-10 flex flex-col items-start hover:bg-gray-200 transition">
                    <h3 className="text-xl font-semibold mb-6">
                        XR-4 Secure Edition
                    </h3>

                    <img
                        src={p3}
                        alt="XR-4 Secure Edition"
                        className="w-full max-w-[260px] mx-auto mb-6 object-contain"
                    />

                    <p className="text-sm text-gray-600 mb-2">
                        TAA Compliant
                    </p>

                    <span className="text-sm font-medium text-black">
                        Request a quote
                    </span>

                    <span className="absolute bottom-6 right-6 text-xl">
                        →
                    </span>
                </div>

            </div>
        </section>
    );
}

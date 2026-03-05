import p1 from "../../assets/XR-4-2.png";
import p2 from "../../assets/XR-4-2.png";
import p3 from "../../assets/XR-4-2.png";

export default function OrderNow() {
    return (
        <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16">

            {/* TITLE */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 sm:mb-14 lg:mb-16">
                Order Now
            </h1>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">

                {/* CARD */}
                {[{
                    title: "XR-4",
                    img: p1,
                    subtitle: "Fixed Focus",
                    price: "€6,990 excluding sales tax"
                },
                {
                    title: "XR-4 Focal Edition",
                    img: p2,
                    subtitle: "Autofocus",
                    price: "€10,990 excluding sales tax"
                },
                {
                    title: "XR-4 Secure Edition",
                    img: p3,
                    subtitle: "TAA Compliant",
                    price: "Request a quote"
                }].map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-100 p-6 sm:p-8 lg:p-10 flex flex-col hover:bg-gray-200 transition min-h-[360px]"
                    >
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                            {item.title}
                        </h3>

                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[260px] mx-auto mb-4 sm:mb-6 object-contain"
                        />

                        <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                            {item.subtitle}
                        </p>

                        <span className="text-sm font-medium text-black">
                            {item.price}
                        </span>

                        <span className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-lg sm:text-xl">
                            →
                        </span>
                    </div>
                ))}

            </div>
        </section>
    );
}
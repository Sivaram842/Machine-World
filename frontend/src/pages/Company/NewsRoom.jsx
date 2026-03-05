import { useState } from "react";
import NavbarStatic from "../../components/NavbarStatic";
import Footer from "../../components/Footer";

export default function Newsroom() {
    const [visible, setVisible] = useState(6);
    const [open, setOpen] = useState(false);

    const articles = [
        {
            id: 1,
            category: "Company News",
            date: "June 4, 2025",
            title:
                "Varjo XR technology powers first-ever EASA-qualified mixed reality flight simulator",
            desc:
                "For the first time ever, a mixed reality flight simulator has been officially qualified.",
            featured: true,
        },
        {
            id: 2,
            category: "Company News",
            date: "April 24, 2025",
            title:
                "Varjo launches Teleport 2.0: A generational leap in photorealistic 3D capture",
            desc:
                "Introducing Teleport 2.0, a next-generation release for our 3D capture service.",
        },
        {
            id: 3,
            category: "Company News",
            date: "March 25, 2025",
            title:
                "Varjo XR-4 achieves NATO accreditation in Inzpire's cutting-edge JTAC simulator",
            desc:
                "Official certification from the UK Ministry of Defence and NATO competency.",
        },
        {
            id: 4,
            category: "Press Release",
            date: "March 18, 2025",
            title:
                "Varjo named to Fast Company's list of the world’s most innovative companies",
            desc:
                "Varjo has been named to Fast Company's prestigious list of the world’s most innovative companies.",
        },
        {
            id: 5,
            category: "Press Release",
            date: "November 25, 2025",
            title: "New enterprise XR partnership announced",
            desc: "Major enterprise collaboration expanding XR adoption.",
        },
        {
            id: 6,
            category: "Product Update",
            date: "November 3, 2025",
            title: "XR-4 firmware update improves performance",
            desc: "Latest update enhances tracking and visual clarity.",
        },
        {
            id: 7,
            category: "Government & Defense",
            date: "October 10, 2025",
            title: "Military XR deployment success",
            desc: "XR solutions deployed for defense training.",
        },
        {
            id: 8,
            category: "Training and Simulation",
            date: "September 14, 2025",
            title: "XR simulation training breakthrough",
            desc: "Revolutionizing training environments.",
        },
    ];

    const categories = [
        "All categories",
        "Press Release",
        "Company News",
        "Product Update",
        "Government & Defense",
        "Training and Simulation",
    ];

    return (
        <div>
            <NavbarStatic />
            <div className="font-sans text-black overflow-x-hidden">


                {/* ================= HERO ================= */}
                {/* ================= HERO ================= */}
                <section className="bg-[#f3f3f3] 
                    min-h-[75vh] md:min-h-[85vh] lg:min-h-[95vh] 
                    flex items-center 
                    px-6 md:px-16 lg:px-24">

                    <div className="max-w-[520px]">

                        <h1 className="text-[34px] sm:text-[44px] md:text-[60px] lg:text-[72px] 
                   font-extrabold uppercase tracking-tight leading-none">
                            News
                        </h1>

                        <p className="mt-6 md:mt-8 
                  text-[15px] sm:text-[16px] md:text-[18px] 
                  leading-[26px] md:leading-[32px] 
                  text-gray-700">
                            Read our latest VR/XR technology insights, hear what the world is
                            saying about Varjo, and know right away when Varjo news breaks –
                            it’s all here.
                        </p>

                    </div>
                </section>

                {/* ================= CATEGORIES ================= */}
                <section className="bg-[#f3f3f3] px-6 md:px-16 pb-16 md:pb-20 relative">
                    <div className="relative inline-block">

                        <button
                            onClick={() => setOpen(!open)}
                            className="uppercase text-xs sm:text-sm tracking-widest flex items-center gap-2"
                        >
                            ALL CATEGORIES
                            <span className="text-xs">▼</span>
                        </button>

                        {open && (
                            <div className="absolute mt-4 md:mt-6 bg-white shadow-xl w-[240px] sm:w-[280px] p-4 sm:p-6 space-y-3 sm:space-y-4 z-20">
                                {categories.map((cat, i) => (
                                    <div
                                        key={i}
                                        className="cursor-pointer text-gray-700 hover:bg-black hover:text-white px-3 py-2 transition-all duration-300"
                                    >
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* ================= NEWS GRID ================= */}
                <section className="bg-[#f3f3f3] px-6 md:px-16 pb-20 md:pb-32">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">

                        {articles.slice(0, visible).map((article) => (
                            <div
                                key={article.id}
                                className={`group p-6 md:p-8 min-h-[300px] md:h-[360px] flex flex-col justify-between transition-all duration-300 ${article.featured
                                    ? "bg-[#0d1bff] text-white"
                                    : "bg-[#e5e5e5] hover:bg-[#0d1bff] hover:text-white"
                                    }`}
                            >
                                <div>
                                    <p className="uppercase text-xs tracking-widest">
                                        {article.category} / {article.date}
                                    </p>

                                    <h3 className="mt-4 md:mt-6 font-extrabold text-[16px] sm:text-[18px] md:text-[20px] leading-6 md:leading-7 uppercase">
                                        {article.title}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-sm opacity-80">
                                    {article.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ================= LOAD MORE ================= */}
                    {visible < articles.length && (
                        <div className="mt-12 md:mt-24 text-center">
                            <button
                                onClick={() => setVisible((prev) => prev + 4)}
                                className="bg-black text-white px-8 md:px-12 py-3 md:py-4 uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:bg-[#0d1bff]"
                            >
                                Load More →
                            </button>
                        </div>
                    )}
                </section>

            </div>
            <Footer />
        </div>
    );
}
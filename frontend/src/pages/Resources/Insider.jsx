import React, { useState } from "react"
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer";

const filteredData = [
    // 🔥 YOUR DATA — NOT MODIFIED AT ALL
    {
        id: 1,
        title: "REISER",
        description:
            "Reiser's newly pre-qualified H145 D3 MR simulator marks a significant milestone for the industry.",
        category: "Simulated Training",
        industry: "Aviation",
        size: "double",
    },
    {
        id: 2,
        title: "THE ROYAL AUSTRALIAN AIR FORCE",
        description:
            "Harnessing the power of mixed reality to prepare personnel under demanding conditions.",
        category: "Simulated Training",
        industry: "Medical",
    },
    {
        id: 3,
        title: "RHEINMETALL",
        description:
            "Driving simulator powered by refreshed XR transforms training into preparation for real-world combat.",
        category: "Simulated Training",
        industry: "Defense",
    },
    {
        id: 4,
        title: "DEFENSE CASE 1",
        description: "Advanced defense mixed reality training program.",
        category: "Simulated Training",
        industry: "Defense",
    },
    {
        id: 5,
        title: "DEFENSE CASE 2",
        description: "Immersive battlefield readiness simulations.",
        category: "Simulated Training",
        industry: "Defense",
    },
    {
        id: 6,
        title: "SPACE PROGRAM",
        description: "Space mission preparation using XR environments.",
        category: "Simulated Training",
        industry: "Space",
    },
    {
        id: 7,
        title: "MEDICAL XR",
        description: "Next-gen surgical simulation powered by XR.",
        category: "Simulated Training",
        industry: "Medical",
    },
    {
        id: 8,
        title: "SPACE PROGRAM",
        description: "Space mission preparation using XR environments.",
        category: "Simulated Training",
        industry: "Space",
    },
    {
        id: 9,
        title: "MEDICAL XR",
        description: "Next-gen surgical simulation powered by XR.",
        category: "Simulated Training",
        industry: "Medical",
    },
    {
        id: 10,
        title: "REISER",
        description:
            "Reiser's newly pre-qualified H145 D3 MR simulator marks a significant milestone for the industry.",
        category: "Simulated Training",
        industry: "Aviation",
        size: "double",
    },
    {
        id: 11,
        title: "THE ROYAL AUSTRALIAN AIR FORCE",
        description:
            "Harnessing the power of mixed reality to prepare personnel under demanding conditions.",
        category: "Simulated Training",
        industry: "Medical",
    },
    {
        id: 12,
        title: "RHEINMETALL",
        description:
            "Driving simulator powered by refreshed XR transforms training into preparation for real-world combat.",
        category: "Simulated Training",
        industry: "Defense",
    },
    {
        id: 13,
        title: "DEFENSE CASE 1",
        description: "Advanced defense mixed reality training program.",
        category: "Simulated Training",
        industry: "Defense",
    },
    {
        id: 14,
        title: "DEFENSE CASE 2",
        description: "Immersive battlefield readiness simulations.",
        category: "Simulated Training",
        industry: "Defense",
    },
];

const Insider = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    return (
        <div>
            <Navbar />
            <section className="bg-black text-white 
        min-h-[75vh] md:min-h-[85vh] lg:min-h-[95vh] 
        flex items-center 
        px-6 md:px-16 lg:px-24">

                <div className="max-w-[620px]">

                    {/* Heading */}
                    <h1 className="text-[30px] sm:text-[48px] md:text-[48px] lg:text-[40px]
          font-extrabold uppercase tracking-tight leading-[0.95] scale-x-150 origin-left">
                        VARJO INSIDER BLOG
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 text-[16px] md:text-[18px] text-gray-300 leading-[28px]">
                        Pop the hood on the virtual, augmented, and mixed reality community.
                    </p>

                    {/* Description */}
                    <p className="mt-6 text-[16px] md:text-[18px] text-gray-400 leading-[30px]">
                        The Varjo Insider blog is the perfect place to keep up to date with
                        our developer insights, tech tips, and insider opinions on VR, AR,
                        and XR hardware and software.
                    </p>

                    {/* Link */}
                    <a
                        href="#"
                        className="inline-block mt-8 text-[16px] text-gray-300 underline
          hover:text-white transition"
                    >
                        What is the Varjo Insider Blog and how can I get involved?
                    </a>

                </div>
            </section>
            <section className="bg-black px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 text-white">

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-12 md:mb-16">

                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-transparent border-b border-gray-500 pb-2 text-sm uppercase tracking-wider focus:outline-none text-white"
                    >
                        <option className="text-black" value="All">ALL CATEGORIES</option>
                        <option className="text-black" value="Simulated Training">Simulated Training</option>
                    </select>

                    <select
                        value={selectedIndustry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                        className="bg-transparent border-b border-gray-500 pb-2 text-sm uppercase tracking-wider focus:outline-none text-white"
                    >
                        <option className="text-black" value="All">ALL INDUSTRIES</option>
                        <option className="text-black" value="Aviation">Aviation</option>
                        <option className="text-black" value="Medical">Medical</option>
                        <option className="text-black" value="Defense">Defense</option>
                        <option className="text-black" value="Space">Space</option>
                    </select>

                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:auto-rows-[650px]">

                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className={`
          ${item.size === "double" ? "lg:col-span-2" : ""}
          bg-[#111111]
          p-6 md:p-8
          flex flex-col justify-between
          transition-all duration-300
          hover:bg-blue-700 hover:text-white
          cursor-pointer
          min-h-[200px] sm:min-h-[300px] lg:min-h-0
        `}
                        >

                            {/* Category */}
                            <div className="text-xs uppercase tracking-widest text-gray-400">
                                {item.category} &nbsp;&nbsp; {item.industry}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-base sm:text-lg font-bold mb-4 text-white">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-400">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

                <div className="h-12 md:h-20"></div>

                <button className="inline-flex items-center gap-4 bg-white text-black px-6 sm:px-10 py-3 md:py-4 text-sm sm:text-base font-medium hover:opacity-80 transition">
                    LOAD MORE
                    <span>→</span>
                </button>

            </section>
            <Footer />
        </div>
    )
}

export default Insider
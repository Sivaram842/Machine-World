
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


/* ================= SYSTEM REQUIREMENTS HERO ================= */

export default function SystemRequirementsPage() {
    const [pcType, setPcType] = useState("desktop");
    const [search, setSearch] = useState("");
    const navigate = useNavigate();


    const cards = [
        {
            title: "DELL PRO MAX TOWER T2 DESKTOP",
            img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/precision-desktops/precision-3660/gallery/desktop-precision-3660-tower-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=635&qlt=100,1&resMode=sharp2&size=635,804",
            type: "desktop",
        },
        {
            title: "VARJO XR STATION – US VERSION",
            img: "https://varjo.com/wp-content/uploads/2023/05/varjo-xr-station.png",
            type: "desktop",
        },
        {
            title: "DELL PRO MAX 16 PLUS LAPTOP",
            img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/laptops/precision-laptops/precision-5680/gallery/laptop-precision-5680-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=635&qlt=100,1&resMode=sharp2&size=635,804",
            type: "laptop",
        },
        {
            title: "HP ZBOOK FURY G11 MOBILE WORKSTATION PC",
            img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08472151.png",
            type: "laptop",
        },
        {
            title: "VARJO XR STATION – EU VERSION",
            img: "https://varjo.com/wp-content/uploads/2023/05/varjo-xr-station.png",
            type: "desktop",
        },
    ];

    const filteredCards = cards.filter((card) =>
        card.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <section
                className="relative w-full min-h-screen text-white flex items-end"
                style={{
                    backgroundImage:
                        "url('PASTE_YOUR_IMAGE_URL_HERE')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 w-full px-6 md:px-16 pb-20">
                    <div className="max-w-[1200px]">

                        <h1 className="uppercase font-extrabold leading-[0.9] tracking-tight
                         text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.5vw]">
                            System
                            <br />
                            Requirements
                        </h1>

                        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-[600px] text-white/90">
                            Ensure your hardware meets the requirements for running Varjo XR
                            headsets at peak performance.
                        </p>

                    </div>
                </div>
            </section>
            <section className="w-full bg-[#f3f3f3] py-28 px-6 md:px-16">
                <div className="max-w-[900px] mx-auto text-center">

                    {/* Heading */}
                    <h2
                        className="
        uppercase
        font-extrabold
        leading-[1.05]
        tracking-[-0.02em]
        text-[60px]
        sm:text-[34px]
        md:text-[42px]
        lg:text-[34px]
        mb-12
      "
                    >
                        GET THE BEST
                        <br />
                        PERFORMANCE FROM
                        <br />
                        YOUR XR-4
                        <br />
                        SERIES HEADSET
                    </h2>

                    {/* Paragraphs */}
                    <div className="max-w-[420px] mx-auto space-y-6 text-[12px] leading-[1.9] text-gray-700">

                        <p>
                            The Varjo XR-4 Series is built to run smoothly on today’s
                            high-end workstations and laptops. The specifications and
                            computers listed below are what we recommend to make sure
                            you get the most out of your headset in the most demanding
                            use cases.
                        </p>

                        <p>
                            Depending on your application and workflow, your exact needs
                            may vary. For more detailed requirements tailored to your
                            use case, or to see if your existing computer is compatible
                            with the XR-4 Series, visit our{" "}
                            <a
                                href="/support"
                                className="underline hover:no-underline transition"
                            >
                                Help Center
                            </a>.
                        </p>

                    </div>

                </div>
            </section>
            <section className="w-full bg-white py-28 px-6 md:px-16">
                <div className="max-w-[1000px] mx-auto text-center">

                    <h2
                        className="
            uppercase
            font-extrabold
            leading-[1.05]
            tracking-[-0.02em]
            text-[28px]
            sm:text-[38px]
            md:text-[48px]
            lg:text-[60px]
            mb-12
          "
                    >
                        Recommended System Specifications
                    </h2>

                    <div className="space-y-8 text-[16px] md:text-[18px] leading-[1.8] text-gray-700">

                        <p>
                            To achieve optimal performance with the XR-4 Series, we recommend
                            using a high-performance workstation or laptop equipped with a
                            modern multi-core processor, sufficient RAM, and a powerful
                            graphics card.
                        </p>

                        <p>
                            These specifications ensure smooth rendering, low latency,
                            and stable performance across demanding professional workflows
                            such as simulation, design, training, and research.
                        </p>

                    </div>

                </div>
            </section>
            <section className="w-full bg-[#f3f3f3] py-24 px-6 md:px-16">
                <div className="max-w-[1400px] mx-auto">

                    {/* Section Title */}
                    <h2 className="uppercase font-extrabold text-[28px] md:text-[36px] mb-8">
                        Recommended Specifications
                    </h2>

                    {/* Intro Text */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-10 max-w-[1000px]">
                        The recommended desktop specifications are designed for the most demanding
                        and intensive workloads in virtual and mixed reality. Laptop specifications
                        are intended for high-end professional use cases.
                    </p>

                    {/* Table */}
                    <div className="overflow-x-auto border border-gray-300">

                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-white">
                                    <th className="border border-gray-300 p-4 text-left"></th>
                                    <th className="border border-gray-300 p-4 text-left uppercase">
                                        Desktop
                                    </th>
                                    <th className="border border-gray-300 p-4 text-left uppercase">
                                        Laptop
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td className="border border-gray-300 p-4 font-medium">
                                        Processor (CPU)
                                    </td>
                                    <td className="border border-gray-300 p-4">
                                        Intel Core i9 / AMD Ryzen 9 high-end workstation CPU
                                    </td>
                                    <td className="border border-gray-300 p-4">
                                        Intel Core i9 / AMD Ryzen 9 (HX Series)
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-4 font-medium">
                                        Memory (RAM)
                                    </td>
                                    <td className="border border-gray-300 p-4">
                                        64 GB
                                    </td>
                                    <td className="border border-gray-300 p-4">
                                        32 GB
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-4 font-medium">
                                        Graphics card (GPU)
                                    </td>
                                    <td className="border border-gray-300 p-4">
                                        NVIDIA RTX PRO 6000 / GeForce RTX 5090
                                    </td>
                                    <td className="border border-gray-300 p-4">
                                        NVIDIA RTX 5000 Laptop GPU
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-4 font-medium">
                                        Storage
                                    </td>
                                    <td className="border border-gray-300 p-4">
                                        3 GB free space (Varjo Base)
                                    </td>
                                    <td className="border border-gray-300 p-4">
                                        3 GB free space (Varjo Base)
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-4 font-medium">
                                        Operating System
                                    </td>
                                    <td className="border border-gray-300 p-4">
                                        Windows 10 (64-bit) / Windows 11
                                    </td>
                                    <td className="border border-gray-300 p-4">
                                        Windows 10 (64-bit) / Windows 11
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>

                </div>
            </section>
            <section
                className="relative w-full min-h-screen text-white overflow-hidden"
                style={{
                    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZhb6Nny4IWqb6SLp9r2Ck5zAh1bjYt0XiA&s")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/80"></div>

                {/* Content - Top Left */}
                <div className="relative z-10 px-6 md:px-16 pt-16">

                    {/* Micro Label */}
                    <p className="uppercase tracking-widest text-[8px] text-gray-400 mb-3">
                        Varjo Integrated XR System
                    </p>

                    {/* Heading */}
                    <h2
                        className="
            uppercase
            font-extrabold
            leading-[1.05]
            tracking-tight
            text-[14px]
            sm:text-[18px]
            md:text-[24px]
            lg:text-[28px]
            mb-4
          "
                    >
                        Supported.
                        <br />
                        Certified.
                        <br />
                        Ready on arrival.
                    </h2>

                    {/* Description */}
                    <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-300 max-w-[500px] leading-[1.7] mb-6">
                        Reduce IT workload, avoid compatibility issues, and get teams up and running
                        with a ready-to-use setup that has been extensively tested to provide
                        optimal performance.
                    </p>

                    {/* Button */}
                    <a
                        href="#"
                        className="
            inline-block
            border border-white
            px-6 py-2
            text-[10px] sm:text-[12px] md:text-[14px]
            uppercase tracking-wider
            hover:bg-white hover:text-black
            transition-all duration-300
          "
                    >
                        Integrated XR System →
                    </a>

                </div>
            </section>
            <section className="w-full bg-[#f3f3f3] px-6 md:px-16 py-20">
                <div className="max-w-[1500px] mx-auto">

                    {/* ===== Heading ===== */}
                    <h2 className="uppercase font-extrabold tracking-tight text-[34px] md:text-[44px] mb-4">
                        Varjo-Ready Computers
                    </h2>

                    {/* ===== Description ===== */}
                    <p className="max-w-[620px] text-[14px] leading-[1.7] text-gray-700 mb-8">
                        Varjo works together with industry-leading manufacturers to test and
                        certify a suite of computers to make sure they’re compatible with XR/VR.
                        Each recommended computer goes through extensive testing to ensure it
                        provides optimal performance with Varjo headsets.
                    </p>

                    {/* ===== Filters ===== */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 border-t border-gray-300 pt-6 mb-10">

                        {/* PC Type Toggle */}
                        <div className="flex items-center gap-4">

                            <span className="text-gray-600 text-sm">PC type</span>

                            <button
                                onClick={() => setPcType("desktop")}
                                className={`px-5 py-1.5 text-sm border transition ${pcType === "desktop"
                                    ? "bg-black text-white border-black"
                                    : "border-gray-400 hover:bg-gray-200"
                                    }`}
                            >
                                DESKTOP
                            </button>

                            <button
                                onClick={() => setPcType("laptop")}
                                className={`px-5 py-1.5 text-sm border transition ${pcType === "laptop"
                                    ? "bg-black text-white border-black"
                                    : "border-gray-400 hover:bg-gray-200"
                                    }`}
                            >
                                LAPTOP
                            </button>

                        </div>

                        {/* Search */}
                        <div className="flex items-center border-b border-gray-400 flex-1 max-w-[420px] md:ml-auto">

                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-transparent py-2 outline-none text-sm"
                            />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>

                        </div>

                    </div>

                    {/* ===== Grid ===== */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {filteredCards.slice(0, 5).map((card, index) => (
                            <div
                                key={index}
                                className="relative bg-white p-6 min-h-[420px]
                 flex flex-col justify-between
                 transition-all duration-300
                 hover:bg-[#e8e8ff]
                 cursor-pointer"
                            >
                                <h3 className="text-xs tracking-widest uppercase mb-4">
                                    {card.title}
                                </h3>

                                <div className="flex justify-center items-center flex-1">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="max-h-[220px] object-contain"
                                    />
                                </div>

                                <div className="text-xs text-gray-700 mt-4 space-y-1">
                                    <p>CPU: Intel / AMD High-End</p>
                                    <p>Memory: 32–128 GB</p>
                                    <p>GPU: NVIDIA RTX / RTX PRO Series</p>
                                </div>

                                <div className="mt-4 text-lg">→</div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
            <section className="w-full bg-[#f3f3f3] py-32 px-6 md:px-16">
                <div className="max-w-[900px] mx-auto text-center">

                    {/* Heading */}
                    <h2
                        className="
            uppercase
            font-extrabold
            tracking-[-0.02em]
            text-[28px]
            sm:text-[36px]
            md:text-[48px]
            mb-6
          "
                    >
                        STILL NOT SURE?
                    </h2>

                    {/* Paragraph */}
                    <p className="text-[15px] md:text-[17px] text-gray-600 leading-[1.8] max-w-[650px] mx-auto mb-10">
                        Reach out to our sales team to figure out if your existing PC is supported
                        and how to get optimally set up for VR/XR.
                    </p>

                    {/* Button */}
                    <a
                        href="#"
                        className="
            inline-flex items-center gap-4
            bg-black text-white
            px-10 py-4
            text-sm uppercase tracking-widest
            hover:bg-gray-800
            transition-all duration-300
          "
                    >
                        TALK TO SALES →
                    </a>

                </div>
            </section>
        </div>

    );
};
























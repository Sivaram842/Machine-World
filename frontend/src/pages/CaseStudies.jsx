import React, { useState } from "react";
import NavbarStatic from "../components/NavbarStatic";
import { useNavigate } from "react-router-dom";

const caseStudiesData = [
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

const CaseStudies = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredData = caseStudiesData.filter((item) => {
    return (
      (selectedCategory === "All" ||
        item.category === selectedCategory) &&
      (selectedIndustry === "All" ||
        item.industry === selectedIndustry)
    );
  });

  return (
    <div>
      <NavbarStatic />

      <div className="bg-[#f3f3f3] h-20 sm:h-28 md:h-40"></div>

      {/* HERO */}
      <section className="bg-[#f3f3f3] min-h-screen">
        <div className="max-w-6xl px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24">

          <p className="text-lg sm:text-xl md:text-2xl tracking-widest font-bold uppercase mb-6">
            Varjo Case Studies
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-tight mb-5 max-w-[900px]">
            OVER 25% OF <br />
            FORTUNE100 <br />
            COMPANIES ARE <br />
            ALREADY USING <br />
            VARJO FOR HIGH- <br />
            STAKES WORK.
          </h1>

          <p className="mt-10 md:mt-20 text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
            From the very beginning, we’ve built VR/XR solutions for visionaries
            in some of the world’s most demanding industries...
          </p>

        </div>
      </section>

      {/* GRID SECTION */}
      <section className="bg-[#f3f3f3] px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20">

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-12 md:mb-16">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-transparent border-b border-black pb-2 text-sm uppercase tracking-wider focus:outline-none"
          >
            <option value="All">Select Category</option>
            <option value="Simulated Training">Simulated Training</option>
          </select>

          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="bg-transparent border-b border-black pb-2 text-sm uppercase tracking-wider focus:outline-none"
          >
            <option value="All">Select Industry</option>
            <option value="Aviation">Aviation</option>
            <option value="Medical">Medical</option>
            <option value="Defense">Defense</option>
            <option value="Space">Space</option>
          </select>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:auto-rows-[650px]">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className={`
                ${item.size === "double" ? "lg:col-span-2" : ""}
                bg-[#e5e5e5]
                p-6 md:p-8
                flex flex-col justify-between
                transition-all duration-300
                hover:bg-blue-700 hover:text-white
                cursor-pointer
                min-h-[300px] sm:min-h-[400px] lg:min-h-0
              `}
            >
              <div className="text-xs uppercase tracking-widest">
                {item.category} &nbsp;&nbsp; {item.industry}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-12 md:h-20"></div>

        <button className="inline-flex items-center gap-4 bg-black text-white px-6 sm:px-10 py-3 md:py-4 text-sm sm:text-base font-medium hover:opacity-80 transition">
          LOAD MORE?
          <span>→</span>
        </button>
      </section>

      <div className="bg-[#f3f3f3] h-20 md:h-40"></div>

      {/* CTA */}
      <section className="w-full">
        <div
          onClick={() => navigate("/talk-to-sales")}
          className="
            group relative w-full
            h-[180px] sm:h-[220px] md:h-[260px]
            bg-black hover:bg-blue-900
            flex items-center
            px-6 sm:px-10 md:px-16
            transition-colors duration-300
            cursor-pointer
          "
        >
          <div>
            <p className="text-xs sm:text-sm tracking-widest text-white/80 mb-6">
              BECOME AN ANTIWORLD INSIDER
            </p>

            <h2 className="text-2xl sm:text-4xl md:text-[56px] font-extrabold text-white leading-tight">
              SUBSCRIBE TO <br /> NEWSLETTER
            </h2>
          </div>
        </div>
      </section>

      {/* FOOTER RESPONSIVE */}
      <footer className="bg-black text-white w-full">

        <div className="px-6 sm:px-10 md:px-16 pt-16 pb-10">
          <div className="text-xl sm:text-2xl tracking-[0.3em] font-semibold">
            ANTI WORLD
          </div>
        </div>

        <div className="px-6 sm:px-10 md:px-16 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">

            <div>
              <p className="text-sm tracking-widest mb-6">COMPANY</p>
              <ul className="space-y-3 text-white/90 text-sm">
                <li>About Us</li>
                <li>News</li>
                <li>Jobs</li>
                <li>Media</li>
                <li>Legal</li>
                <li>Case Studies</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <p className="text-sm tracking-widest mb-6">PRODUCTS</p>
              <ul className="space-y-3 text-white/90 text-sm">
                <li>DAS</li>
                <li>Realm</li>
                <li>Book</li>
                <li>SPATIAL OS</li>
                <li>MINIMAL OS</li>
              </ul>
            </div>

            <div>
              <p className="text-sm tracking-widest mb-6">SUPPORT</p>
              <ul className="space-y-3 text-white/90 text-sm">
                <li>Help Center</li>
                <li>System Requirements</li>
                <li>Compatible Software</li>
                <li>Find a Reseller</li>
                <li>Setup Guide</li>
                <li>Developers</li>
                <li>ANTI WORLD Account Portal</li>
              </ul>
            </div>

          </div>
        </div>

      </footer>
    </div>
  );
};

export default CaseStudies;
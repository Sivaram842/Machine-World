import React, { useState } from "react";
import Navbar from "../../components/NewNavbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/NewFooter";

const caseStudiesData = [
  {
    id: 1,
    title: "ADVANCED FIGHTER COCKPIT SIMULATOR",
    description:
      "Antiworld developed a high-fidelity cockpit simulator designed to replicate real fighter jet controls and mission scenarios, allowing pilots to train safely while dramatically reducing operational training costs.",
    category: "XR Training",
    industry: "Defense",
    size: "double"
  },
  {
    id: 2,
    title: "COUNTER-DRONE DEFENSE SYSTEM",
    description:
      "An intelligent counter-drone platform designed to detect, track, and neutralize hostile drones in sensitive environments using advanced sensor systems and real-time threat monitoring.",
    category: "Defense Technology",
    industry: "Defense"
  },
  {
    id: 3,
    title: "MILITARY MISSION TRAINING ENVIRONMENT",
    description:
      "Immersive XR mission rehearsal environments that allow defense personnel to practice tactical operations, mission planning, and scenario simulations in realistic digital battlefields.",
    category: "XR Training",
    industry: "Defense"
  },
  {
    id: 4,
    title: "XR AVIATION TRAINING PLATFORM",
    description:
      "Mixed reality aviation training solutions enabling pilots to interact with real cockpit controls while visualizing fully immersive simulated flight environments.",
    category: "Simulated Training",
    industry: "Aviation"
  },
  {
    id: 5,
    title: "ENTERPRISE SPATIAL WORKSPACE",
    description:
      "Antiworld built spatial computing workspaces that allow professionals to work with multiple virtual screens and collaborative XR environments for complex engineering workflows.",
    category: "Spatial Computing",
    industry: "Enterprise"
  },
  {
    id: 6,
    title: "IMMERSIVE EDUCATION PLATFORM",
    description:
      "XR learning environments designed for educational institutions to deliver interactive training programs in engineering, aviation, and technical skills.",
    category: "XR Education",
    industry: "Education"
  },
  {
    id: 7,
    title: "DEFENSE VEHICLE SIMULATION TRAINING",
    description:
      "Vehicle simulation systems designed to train defense personnel in operating complex military vehicles using immersive XR environments.",
    category: "Simulated Training",
    industry: "Defense"
  },
  {
    id: 8,
    title: "AR INDUSTRIAL MAINTENANCE SYSTEM",
    description:
      "Augmented reality tools that guide technicians through complex maintenance procedures using real-time visual overlays and interactive digital instructions.",
    category: "AR Applications",
    industry: "Enterprise"
  },
  {
    id: 9,
    title: "XR EMERGENCY RESPONSE TRAINING",
    description:
      "Immersive XR simulations designed to train emergency responders and security teams to operate in high-risk environments safely.",
    category: "XR Training",
    industry: "Defense"
  },
  {
    id: 10,
    title: "NEXT-GEN COCKPIT TRAINING SYSTEM",
    description:
      "Antiworld's modular cockpit training simulator provides realistic pilot training environments with immersive visuals and real-world flight control replication.",
    category: "Simulated Training",
    industry: "Aviation",
    size: "double"
  },
  {
    id: 11,
    title: "XR COLLABORATIVE DESIGN ENVIRONMENT",
    description:
      "A spatial computing platform allowing engineering teams to design, review, and collaborate on complex 3D systems inside shared XR workspaces.",
    category: "Spatial Computing",
    industry: "Enterprise"
  },
  {
    id: 12,
    title: "VIRTUAL DEFENSE MISSION PLANNING",
    description:
      "Immersive mission planning systems enabling defense teams to visualize operational scenarios and coordinate strategies inside XR environments.",
    category: "XR Training",
    industry: "Defense"
  },
  {
    id: 13,
    title: "INTERACTIVE XR ENTERTAINMENT PLATFORM",
    description:
      "Antiworld created immersive entertainment environments where users can experience interactive digital worlds powered by XR technology.",
    category: "XR Experience",
    industry: "Entertainment"
  },
  {
    id: 14,
    title: "SIMULATION-BASED TECHNICAL TRAINING",
    description:
      "Advanced XR simulations designed to train technicians and engineers to operate complex systems in safe virtual environments.",
    category: "Simulated Training",
    industry: "Enterprise"
  }
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
      <Navbar />

      <div className="bg-[#f3f3f3] h-20 sm:h-28 md:h-40"></div>

      {/* HERO */}
      <section className="bg-[#f3f3f3] min-h-screen">
        <div className="max-w-6xl px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24">

          <p className="text-lg sm:text-xl md:text-2xl tracking-widest font-bold uppercase mb-6">
            Antiworld Case Studies
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-tight mb-5 max-w-[900px]">
            REAL-WORLD APPLICATIONS <br />
            OF SPATIAL COMPUTING <br />
            XR TECHNOLOGY <br />
            AND DEFENSE <br />
            SIMULATION SYSTEMS <br />
            BUILT BY ANTIWORLD
          </h1>

          <p className="mt-10 md:mt-20 text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
            Antiworld develops advanced defense technologies, cockpit simulators,
            and immersive XR applications designed for mission-critical training,
            enterprise innovation, and next-generation spatial computing systems.

            Our solutions help organizations reduce operational costs,
            improve training efficiency, and unlock entirely new digital
            workflows through immersive technologies.
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
            <option value="XR Training">XR Training</option>
            <option value="Simulated Training">Simulated Training</option>
            <option value="Spatial Computing">Spatial Computing</option>
            <option value="Defense Technology">Defense Technology</option>
            <option value="XR Education">XR Education</option>
            <option value="AR Applications">AR Applications</option>
            <option value="XR Experience">XR Experience</option>
          </select>

          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="bg-transparent border-b border-black pb-2 text-sm uppercase tracking-wider focus:outline-none"
          >
            <option value="Defense">Defense</option>
            <option value="Aviation">Aviation</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
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

      <Footer />
    </div>
  );
};

export default CaseStudies;
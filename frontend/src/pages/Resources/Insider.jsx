import React, { useState } from "react";
import Navbar from "../../components/NewNavbar";
import Footer from "../../components/NewFooter";

const filteredData = [
  {
    id: 1,
    title: "BUILDING THE DAS SPATIAL COMPUTER",
    description:
      "Discover how Doom Industries developed DAS, a next-generation spatial computer designed to create immersive workspaces with multiple virtual displays and advanced XR interaction.",
    category: "Product Technology",
    industry: "Spatial Computing",
    size: "double",
  },
  {
    id: 2,
    title: "THE FUTURE OF XR TRAINING SYSTEMS",
    description:
      "XR technologies are transforming professional training. Learn how immersive environments enable safer, faster, and more cost-effective skill development.",
    category: "XR Technology",
    industry: "Training",
  },
  {
    id: 3,
    title: "REALM: THE PLATFORM FOR IMMERSIVE DIGITAL WORLDS",
    description:
      "Realm is Doom Industries' immersive platform designed for collaborative XR environments, enabling shared virtual spaces for development, design, and training.",
    category: "Product Technology",
    industry: "Spatial Computing",
  },
  {
    id: 4,
    title: "ADVANCED COCKPIT SIMULATORS FOR DEFENSE TRAINING",
    description:
      "Doom Industries develops high-fidelity cockpit simulators for jets, helicopters, and military vehicles to enable safe and efficient pilot training.",
    category: "Defense Technology",
    industry: "Defense",
  },
  {
    id: 5,
    title: "SPATIAL WORKSPACES FOR ENTERPRISE TEAMS",
    description:
      "Explore how spatial computing environments allow professionals to work with multiple digital tools simultaneously inside immersive 3D workspaces.",
    category: "XR Technology",
    industry: "Enterprise",
  },
  {
    id: 6,
    title: "THE ROLE OF XR IN AVIATION TRAINING",
    description:
      "Mixed reality cockpit simulators provide pilots with realistic mission training while significantly reducing operational costs.",
    category: "Simulated Training",
    industry: "Aviation",
  },
  {
    id: 7,
    title: "BUILDING NEXT-GEN NOTEBOOK DEVICES",
    description:
      "The Doom Industries Notebook reimagines portable computing by integrating immersive displays and spatial computing capabilities.",
    category: "Product Technology",
    industry: "Spatial Computing",
  },
  {
    id: 8,
    title: "SIMULATION TECHNOLOGY FOR GROUND VEHICLES",
    description:
      "XR simulation systems help train operators for armored vehicles and defense equipment in fully immersive environments.",
    category: "Defense Technology",
    industry: "Defense",
  },
  {
    id: 9,
    title: "AR APPLICATIONS FOR INDUSTRIAL WORKFLOWS",
    description:
      "Augmented reality enables technicians to visualize complex systems and perform maintenance tasks with real-time digital guidance.",
    category: "AR Applications",
    industry: "Enterprise",
  },
  {
    id: 10,
    title: "THE EVOLUTION OF SPATIAL COMPUTING",
    description:
      "From VR headsets to full spatial workspaces, explore how immersive computing technologies are redefining human-computer interaction.",
    category: "XR Technology",
    industry: "Spatial Computing",
    size: "double",
  },
  {
    id: 11,
    title: "MISSION SIMULATION IN XR ENVIRONMENTS",
    description:
      "Defense organizations can rehearse complex operations using immersive simulation environments powered by advanced XR systems.",
    category: "Simulated Training",
    industry: "Defense",
  },
  {
    id: 12,
    title: "IMMERSIVE EDUCATION PLATFORMS",
    description:
      "XR learning environments allow students to interact with complex systems and concepts in ways impossible with traditional education tools.",
    category: "XR Technology",
    industry: "Education",
  },
  {
    id: 13,
    title: "DESIGNING IMMERSIVE DIGITAL WORLDS",
    description:
      "Explore how developers and designers use XR platforms to build interactive digital environments for training and entertainment.",
    category: "XR Experience",
    industry: "Entertainment",
  },
  {
    id: 14,
    title: "THE FUTURE OF DEFENSE SIMULATION",
    description:
      "Advanced cockpit simulators and XR environments will redefine how defense personnel train for real-world missions.",
    category: "Defense Technology",
    industry: "Defense",
  },
];

const Insider = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  return (
    <div>
      <Navbar />
      <section
        className="bg-black text-white 
        min-h-[75vh] md:min-h-[85vh] lg:min-h-[95vh] 
        flex items-center 
        px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-[620px]">
          {/* Heading */}
          <h1
            className="text-[30px] sm:text-[48px] md:text-[48px] lg:text-[40px]
          font-extrabold uppercase tracking-tight leading-[0.95] scale-x-150 origin-left"
          >
            DOOM INDUSTRIES INSIDER
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-[16px] md:text-[18px] text-gray-300 leading-[28px]">
            Insights into spatial computing, XR technologies, and
            next-generation defense simulation systems.
          </p>

          {/* Description */}
          <p className="mt-6 text-[16px] md:text-[18px] text-gray-400 leading-[30px]">
            The Doom Industries Insider blog explores the technologies shaping
            the future of immersive computing, spatial workspaces, and advanced
            simulation systems. Discover how XR, AR, and mixed reality are
            transforming industries from defense training and aviation to
            enterprise productivity and interactive digital environments.
          </p>

          {/* Link */}
          <a
            href="#"
            className="inline-block mt-8 text-[16px] text-gray-300 underline
          hover:text-white transition"
          >
            Learn more about Doom Industries technologies and developer
            insights.
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
            <option className="text-black" value="All">
              ALL CATEGORIES
            </option>
            <option className="text-black" value="Product Technology">
              Product Technology
            </option>
            <option className="text-black" value="XR Technology">
              XR Technology
            </option>
            <option className="text-black" value="Simulated Training">
              Simulated Training
            </option>
            <option className="text-black" value="Defense Technology">
              Defense Technology
            </option>
            <option className="text-black" value="AR Applications">
              AR Applications
            </option>
            <option className="text-black" value="XR Experience">
              XR Experience
            </option>
          </select>

          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="bg-transparent border-b border-gray-500 pb-2 text-sm uppercase tracking-wider focus:outline-none text-white"
          >
            <option className="text-black" value="All">
              ALL INDUSTRIES
            </option>
            <option className="text-black" value="Spatial Computing">
              Spatial Computing
            </option>
            <option className="text-black" value="Defense">
              Defense
            </option>
            <option className="text-black" value="Aviation">
              Aviation
            </option>
            <option className="text-black" value="Enterprise">
              Enterprise
            </option>
            <option className="text-black" value="Education">
              Education
            </option>
            <option className="text-black" value="Entertainment">
              Entertainment
            </option>
            <option className="text-black" value="Training">
              Training
            </option>
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
  );
};

export default Insider;

import React, { useState } from "react";
import Navbar from "../../components/NewNavbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/NewFooter";
import Card1 from "../../assets/Card1.jpg";
import Card2 from "../../assets/Card2.webp";
import Card3 from "../../assets/Card3.jpg";
import Card5 from "../../assets/Card5.jpg";
import Card8 from "../../assets/Card8.webp";
import Card9 from "../../assets/Card9.png";
import Card10 from "../../assets/Card10.avif";
import Card11 from "../../assets/Card11.webp";
import Card12 from "../../assets/Card12.avif";
import Card13 from "../../assets/Card13.webp";
import Card14 from "../../assets/Card14.png";
import Card15 from "../../assets/Card15.jpg";
import Card16 from "../../assets/Card16.avif";
import Card17 from "../../assets/Card17.jpg";
import Card19 from "../../assets/Card19.avif";
import Card20 from "../../assets/Card20.jpeg";
const caseStudiesData = [
  {
    id: 1,
    title: "XR Training Platform Deployed for Military Forces",
    description:
      "A new integrated XR training system enables defense teams to simulate missions in isolated environments with ready-to-use hardware and software.",
    link: "https://thedefensepost.com/2026/03/03/finland-xr-training-platform/",
    image: Card1,
  },
  {
    id: 2,
    title: "Drone Warfare Is Changing Military Training",
    description:
      "Modern warfare is shifting towards drone-based combat, requiring new simulation and training systems to prepare operators at scale.",
    link: "https://www.halldale.com/defence/drone-warfare-train-many-train-fast",
    image: Card2,
  },
  {
    id: 3,
    title: "New Drone Simulation Platforms for Military Training",
    description:
      "Defense companies are launching advanced drone simulators that allow operators to train without risking physical equipment.",
    link: "https://www.auganix.org/xr-news-inveris-fats-drone/",
    image: Card3,
  },
  {
    id: 4,
    title: "Anti-Drone Rifle Simulator Developed",
    description:
      "A new simulation system allows personnel to train with drone detection and counter-drone weapons in realistic environments.",
    link: "https://m.economictimes.com/news/defence/russia-creates-worlds-first-anti-drone-rifle-simulator/articleshow/123084356.cms",
  },
  {
    id: 5,
    title: "Counter-Drone Swarm System Tested Successfully",
    description:
      "India has developed a system capable of detecting and destroying drone swarms using AI-powered targeting and rapid interception.",
    link: "https://en.wikipedia.org/wiki/Bhargavastra_micro-missile_system",
    image: Card5,
  },
  {
    id: 6,
    title: "Portable Anti-Drone Jamming Systems in Development",
    description:
      "Modern anti-drone systems now use radar and jamming technologies to neutralize threats including low-flying and swarm drones.",
    link: "https://en.wikipedia.org/wiki/Telemachus_Jammer",
  },
  {
    id: 7,
    title: "Military Expanding Drone Training Systems",
    description:
      "Simulation platforms now allow operators to train against electronic warfare and counter-UAS threats in virtual environments.",
    link: "https://www.nationaldefensemagazine.org/articles/2025/12/3/industry-bringing-new-drone-training-systems-online",
  },
  {
    id: 8,
    title: "XR-Based Simulation Improves Training Outcomes",
    description:
      "Studies show XR simulators can match or exceed traditional training methods while reducing operational costs.",
    link: "https://www.sciepublish.com/article/pii/686",
    image: Card8,
  },
  {
    id: 9,
    title: "Combat Drone Simulator Used for Real Training",
    description:
      "New software platforms are being used to train drone operators for real-world combat scenarios.",
    link: "https://en.wikipedia.org/wiki/Ukrainian_Fight_Drone_Simulator",
    image: Card9,
  },
  {
    id: 10,
    title: "Indian Army Conducts Drone Warfare Exercises",
    description:
      "Large-scale military drills are now focused on drone and counter-drone operations, reflecting modern battlefield needs.",
    link: "https://timesofindia.indiatimes.com/city/pune/southern-command-tests-combat-readiness-in-large-scale-drone-warfare-exercise/articleshow/125024741.cms",
    image: Card10,
  },
  {
    id: 11,
    title: "Low-Cost Drone Interceptors Changing Defense Strategy",
    description:
      "Countries are deploying cost-effective interceptor drones to counter aerial threats, replacing expensive missile systems.",
    link: "https://apnews.com/article/c7b57962e573b344490b07b2cfead856",
    image: Card11,
  },
  {
    id: 12,
    title: "US Military Expands Drone Testing Programs",
    description:
      "The US military is actively testing new drone systems for real-world missions including surveillance and combat operations.",
    link: "https://www.defense.gov/News/News-Stories/Article/Article/3423456/dod-expands-drone-testing/",
    image: Card12,
  },
  {
    id: 13,
    title: "Rise of Low-Cost Counter-Drone Systems",
    description:
      "Affordable drone interception systems are emerging as a scalable solution to modern aerial threats.",
    link: "https://www.tomshardware.com/tech-industry/us-and-gulf-states-race-for-ukrainian-interceptor-drones-3d-printed-model-costs-usd1-000-apiece-shahed-136-kamikaze-drone-threat-spurs-rush-for-interceptors",
    image: Card13,
  },
  {
    id: 14,
    title: "AI-Enabled Drones Are Changing Warfare",
    description:
      "Countries are rapidly developing AI-powered drones capable of autonomous navigation, target identification and coordinated swarm operations.",
    link: "https://www.reuters.com/technology/artificial-intelligence/ukraine-rushes-create-ai-enabled-war-drones-2024-07-18/",
    image: Card14,
  },
  {
    id: 15,
    title: "Global Expansion of Drone Warfare Capabilities",
    description:
      "Armed drones are now used by multiple countries, transforming modern warfare with surveillance, precision strikes and autonomous systems.",
    link: "https://www.newamerica.org/insights/world-drones/",
    image: Card15,
  },
  {
    id: 16,
    title: "India Developing Dedicated Drone Force",
    description:
      "The Indian Army is expanding drone units and training soldiers in UAV operations for future warfare scenarios.",
    link: "https://www.indiatoday.in/india/story/indian-army-preparing-dedicated-drone-force-for-future-warfare-2841402-2025-12-25",
    image: Card16,
  },
  {
    id: 17,
    title: "India Conducts Large-Scale Drone Warfare Exercise",
    description:
      "India is conducting major drone warfare exercises to strengthen air defence and counter-drone capabilities.",
    link: "https://www.reuters.com/world/india/india-hold-its-biggest-drone-exercise-seeking-air-defence-boost-2025-09-23/",
    image: Card17,
  },
  {
    id: 18,
    title: "India Developing AI-Powered Strike Drones",
    description:
      "New indigenous drones with long-range and swarm capabilities are being developed for modern combat scenarios.",
    link: "https://www.ndtv.com/video/india-builds-next-gen-strike-drones-as-global-drone-wars-intensify-1069690",
  },
  {
    id: 19,
    title: "India Deploying Indigenous Counter-Drone Systems",
    description:
      "The Indian Army and Air Force are set to deploy next-generation indigenous counter-drone systems capable of detecting and neutralizing aerial threats using laser-based interception.",
    link: "https://timesofindia.indiatimes.com/india/boost-for-counter-drone-warfare-army-iaf-to-deploy-new-indigenous-systems-drdo-readies-next-gen-weapons/articleshow/125366402.cms",
    image: Card19,
  },
  {
    id: 20,
    title: "India Advancing Stealth Combat Drone Program",
    description:
      "DRDO’s Ghatak UCAV program is developing stealth drones for autonomous strike missions.",
    link: "https://en.wikipedia.org/wiki/DRDO_Ghatak",
    image: Card20,
  },
];

const CaseStudies = () => {
  const navigate = useNavigate();

  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [visibleCount, setVisibleCount] = useState(7);

  const visibleCards = caseStudiesData.slice(0, visibleCount);

  // const filteredData = caseStudiesData.filter((item) => {
  //   return (
  //     (selectedCategory === "All" ||
  //       item.category === selectedCategory) &&
  //     (selectedIndustry === "All" ||
  //       item.industry === selectedIndustry)
  //   );
  // });

  return (
    <div>
      <Navbar />

      <div className="bg-[#f3f3f3] h-20 sm:h-28 md:h-40"></div>

      {/* HERO */}
      <section className="bg-[#f3f3f3] min-h-screen">
        <div className="max-w-6xl px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24">
          <p
            className="
  text-[12px] sm:text-[13px]
  tracking-[0.28em]
  font-[600]
  uppercase
  text-neutral-500
  mb-6
"
          >
            DEFENSE & XR INSIGHTS
          </p>

          <h1
            className="
  text-[28px] sm:text-[34px] lg:text-[40px]
  font-[800]
  leading-[0.95]
  tracking-[-0.03em]
  text-black
  mb-6
  max-w-[720px]
"
          >
            REAL-WORLD DEVELOPMENTS <br />
            IN DEFENCE TECHNOLOGY <br />
            SPATIAL COMPUTING <br />
            AND IMMERSIVE <br />
            TRAINING SYSTEMS
          </h1>

          <p
            className="
  mt-8
  text-[13px] sm:text-[14px]
  text-black-400
  max-w-[520px]
  leading-[1.55]
  tracking-[0.01em]
"
          >
            Modern defense systems are evolving through simulation, spatial
            computing and intelligent technologies. From cockpit training and
            mission rehearsal platforms to drone warfare and ground combat
            systems, these developments are redefining how organizations improve
            readiness and reduce operational risk.
          </p>

          <p
            className="
  mt-4
  text-[13px] sm:text-[14px]
  text-black-400
  max-w-[520px]
  leading-[1.55]
  tracking-[0.01em]
"
          >
            These advancements across public and private sectors are shaping the
            future of training, simulation and mission-critical decision making.
          </p>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="bg-[#f3f3f3] px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20">
        {/* Filters */}
        {/* <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-12 md:mb-16">
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
        </div> */}

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[260px]">
          {visibleCards.map((item, index) => (
            <div
              key={item.id}
              onClick={() => window.open(item.link, "_blank")}
              className={`
      group relative
      flex flex-col justify-end
      overflow-hidden
      cursor-pointer
      transition-all duration-500

     ${index === 0 ? "lg:col-span-2 lg:row-span-2" : "lg:row-span-1"}
    `}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                className="
        absolute inset-0 w-full h-full object-cover
        group-hover:scale-105 transition duration-700
      "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* TEXT AT BOTTOM */}
              <div className="relative z-10 p-6">
                <h3
                  className="
        text-white
        text-[16px] sm:text-[18px]
        font-[600]
        leading-[1.2]
        tracking-[-0.01em]
        mb-2
      "
                >
                  {item.title}
                </h3>

                <p
                  className="
        text-neutral-300
        text-[13px]
        leading-[1.5]
        max-w-[320px]
      "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-12 md:h-20"></div>

        {visibleCount < caseStudiesData.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="mt-16 inline-flex items-center gap-4 bg-black text-white px-8 py-4 text-sm uppercase tracking-wider hover:opacity-80 transition"
          >
            LOAD MORE
            <span>→</span>
          </button>
        )}
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
              BECOME AN DOOM INDUSTRIES INSIDER
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

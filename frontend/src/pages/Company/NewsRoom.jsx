import { useState } from "react";
import Navbar from "../../components/NewNavbar";
import Footer from "../../components/NewFooter";

export default function Newsroom() {
  const [visible, setVisible] = useState(6);
  const [open, setOpen] = useState(false);

  const articles = [
    {
      id: 1,
      category: "Company News",
      date: "June 12, 2026",
      title:
        "Doom Industries develops next-generation cockpit simulator for advanced pilot training",
      desc: "A new immersive cockpit simulator designed to improve pilot training efficiency while reducing operational costs.",
      featured: true,
    },
    {
      id: 2,
      category: "Company News",
      date: "May 28, 2026",
      title:
        "Doom Industries expands XR research for defence and enterprise simulation systems",
      desc: "Our engineering team continues developing advanced XR solutions for training and operational simulation.",
    },
    {
      id: 3,
      category: "Government & Defense",
      date: "April 18, 2026",
      title:
        "Doom Industries introduces counter-drone monitoring system for defence applications",
      desc: "The system enhances detection and response capabilities for modern aerial threats.",
    },
    {
      id: 4,
      category: "Press Release",
      date: "March 22, 2026",
      title:
        "Doom Industries announces new immersive training platform for defence and aviation sectors",
      desc: "The platform integrates simulation software, XR technologies, and advanced hardware systems.",
    },
    {
      id: 5,
      category: "Press Release",
      date: "February 12, 2026",
      title:
        "Doom Industries partners with technology teams to accelerate XR development",
      desc: "New collaborations aim to expand immersive technology solutions across industries.",
    },
    {
      id: 6,
      category: "Product Update",
      date: "January 30, 2026",
      title: "Simulation engine update improves performance and visual realism",
      desc: "Latest improvements enhance real-time rendering and system stability for training environments.",
    },
    {
      id: 7,
      category: "Government & Defense",
      date: "December 10, 2025",
      title:
        "Advanced defence training systems developed using immersive technologies",
      desc: "XR simulation platforms enable safer and more cost-efficient training operations.",
    },
    {
      id: 8,
      category: "Training and Simulation",
      date: "November 20, 2025",
      title:
        "Immersive XR training environments redefine simulation-based learning",
      desc: "Doom Industries technology helps organizations train effectively in controlled virtual environments.",
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
      <Navbar />
      <div className="font-sans text-black overflow-x-hidden">
        {/* HERO */}
        <section
          className="bg-[#f3f3f3] 
                    min-h-[75vh] md:min-h-[85vh] lg:min-h-[95vh] 
                    flex items-center 
                    px-6 md:px-16 lg:px-24"
        >
          <div className="max-w-[520px]">
            <h1
              className="text-[34px] sm:text-[44px] md:text-[60px] lg:text-[72px] 
                   font-extrabold uppercase tracking-tight leading-none"
            >
              News
            </h1>

            <p
              className="mt-6 md:mt-8 
                  text-[15px] sm:text-[16px] md:text-[18px] 
                  leading-[26px] md:leading-[32px] 
                  text-gray-700"
            >
              Read the latest updates from Doom Industries including defence
              technology developments, XR innovation, simulation breakthroughs,
              and company announcements from our engineering and research teams.
            </p>
          </div>
        </section>

        {/* CATEGORIES */}
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

        {/* NEWS GRID */}
        <section className="bg-[#f3f3f3] px-6 md:px-16 pb-20 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">
            {articles.slice(0, visible).map((article) => (
              <div
                key={article.id}
                className={`group p-6 md:p-8 min-h-[300px] md:h-[360px] flex flex-col justify-between transition-all duration-300 ${
                  article.featured
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

                <p className="text-xs sm:text-sm opacity-80">{article.desc}</p>
              </div>
            ))}
          </div>

          {/* LOAD MORE */}
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

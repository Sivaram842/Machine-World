import Navbar from "../components/NewNavbar";
import Footer from "../components/NewFooter";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import XR from "../assets/XR.png";
import ModernTraining from "../assets/ModernTraining.png";

import Cockpit from "../assets/Cockpit.png";
import Article1 from "../assets/Article1.png";
import Article2 from "../assets/Article2.jpeg";
import Article3 from "../assets/Article3.avif";

export default function WhyXR() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img src="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-[820px] mx-auto text-center">
          <h1
            className="
  text-[26px] sm:text-[34px] lg:text-[42px]
  font-[700]
  leading-[0.9]
  tracking-[-0.04em]
  text-white
"
          >
            SMARTER. FASTER. <br /> SAFER.
          </h1>

          <p
            className="
    text-neutral-300
    mt-5
    text-[14px] sm:text-[15px] lg:text-[16px]
    leading-[1.5]
    tracking-[0.01em]
    max-w-[520px]
    mx-auto
  "
          >
            Mixed reality transforms training by <br />
            delivering lifelike simulations across air and <br />
            land - preparing personnel for real-world <br />
            missions at a fraction of the cost.
          </p>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="bg-black text-white py-28 px-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="max-w-[520px]">
            {/* LABEL */}
            <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-4">
              PRACTICE MADE PERFECT
            </p>

            {/* HEADING */}
            <h2
              className="
  text-[30px] sm:text-[36px] lg:text-[40px]
  font-[800]
  leading-[0.9]
  tracking-[-0.04em]
  text-white
  mb-4
"
            >
              MODERN MISSIONS <br /> DEMAND MODERN TRAINING.
            </h2>

            {/* PARA 1 */}
            <p
              className="
        text-[13px]
        text-neutral-400
        leading-[1.6]
        tracking-[0.01em]
        mb-4
      "
            >
              Modern defense operations demand training systems that are fast,
              scalable, and adaptable. Traditional methods—live exercises,
              physical simulators, and large-scale drills—are expensive,
              resource-intensive, and difficult to deploy at scale.
            </p>

            {/* PARA 2 */}
            <p
              className="
        text-[13px]
        text-neutral-400
        leading-[1.6]
        tracking-[0.01em]
      "
            >
              Our XR platforms transform training into immersive, high-fidelity
              simulation environments where teams can learn, test, and operate
              without physical constraints—delivering faster deployment, reduced
              costs, and safer mission readiness.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <img
          src={ModernTraining}
          className="w-full h-[420px] object-cover brightness-[0.85] contrast-110"
        />
      </section>

      {/* STATS SECTION */}
      <section className="bg-black text-white py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          {/* HEADING */}
          <h2
            className="
      text-[36px] lg:text-[44px]
      font-[800]
      leading-[1]
      tracking-[-0.02em]
      mb-20
    "
          >
            THE DATA SPEAKS FOR ITSELF.
          </h2>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-y-24 gap-x-32">
            {/* ITEM 1 */}
            <div>
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 mb-4">
                FASTER TRAINING
              </p>

              <h3
                className="
          text-[72px] lg:text-[84px]
          font-[900]
          leading-[0.85]
          tracking-[-0.03em]
          text-white
        "
              >
                40%
              </h3>

              <p className="text-neutral-400 mt-4 text-[13px] leading-[1.6] max-w-[260px]">
                Reduction in training time through immersive XR-based simulation
                environments.
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 mb-4">
                COST REDUCTION
              </p>

              <h3
                className="
          text-[72px] lg:text-[84px]
          font-[900]
          leading-[0.85]
          tracking-[-0.03em]
          text-white
        "
              >
                70%
              </h3>

              <p className="text-neutral-400 mt-4 text-[13px] leading-[1.6] max-w-[260px]">
                Lower infrastructure and operational costs compared to
                traditional simulators.
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 mb-4">
                DEPLOYMENT SPEED
              </p>

              <h3
                className="
          text-[72px] lg:text-[84px]
          font-[900]
          leading-[0.85]
          tracking-[-0.03em]
          text-white
        "
              >
                5×
              </h3>

              <p className="text-neutral-400 mt-4 text-[13px] leading-[1.6] max-w-[260px]">
                Faster setup and deployment compared to large-scale physical
                training systems.
              </p>
            </div>

            {/* ITEM 4 */}
            <div>
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 mb-4">
                SCALABILITY
              </p>

              <h3
                className="
          text-[72px] lg:text-[84px]
          font-[900]
          leading-[0.85]
          tracking-[-0.03em]
          text-white
        "
              >
                ∞
              </h3>

              <p className="text-neutral-400 mt-4 text-[13px] leading-[1.6] max-w-[260px]">
                Train multiple users simultaneously across distributed XR
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* DOMAIN SECTION */}
      {/* <section className="bg-white text-black py-28 px-16">

        <h2 className="text-5xl font-bold mb-20 max-w-3xl">
          TRUE-TO-LIFE TRAINING ACROSS EVERY DOMAIN.
        </h2>

        <div className="grid md:grid-cols-3 gap-12"> */}

      {/* AIR */}
      {/* <div>
            <p className="text-xs tracking-widest mb-2">
              PILOT TRAINING REDEFINED
            </p>
            <h3 className="text-3xl mb-3">Air</h3>
            <p className="text-gray-600 mb-6">
              Train pilots in immersive cockpit simulations with real-world systems.
            </p>
            <img src={PilotTrainingXR} className="w-full h-56 object-cover" />
          </div> */}

      {/* LAND */}
      {/* <div>
            <p className="text-xs tracking-widest mb-2">
              GROUND TRAINING WITHOUT LIMITS
            </p>
            <h3 className="text-3xl mb-3">Land</h3>
            <p className="text-gray-600 mb-6">
              Simulate missions, vehicles and operations in realistic environments.
            </p>
            <img src={EngineeringDesign} className="w-full h-56 object-cover" />
          </div> */}

      {/* SEA */}
      {/* <div>
            <p className="text-xs tracking-widest mb-2">
              PRACTICE MADE PERFECT
            </p>
            <h3 className="text-3xl mb-3">Sea</h3>
            <p className="text-gray-600 mb-6">
              Train navigation and maritime operations with high realism.
            </p>
            <img src={MissionPlanning} className="w-full h-56 object-cover" />
          </div>

        </div>
      </section> */}

      {/* FINAL PRODUCT / CTA */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src={XR}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        {/* FULL OVERLAY (FIXED) */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/85 via-black/60 to-black/10" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 w-full">
          {/* PUSH CONTENT TO LEFT */}
          <div className="pl-6 sm:pl-10 lg:pl-20">
            <div className="max-w-[480px]">
              {/* LABEL */}
              <p
                className="
          text-[11px]
          tracking-[0.22em]
          text-neutral-400
          mb-4
        "
              >
                THE XR ADVANTAGE
              </p>

              {/* HEADING */}
              <h2
                className="
          text-[32px] sm:text-[38px] lg:text-[42px]
          font-[600]
          leading-[1.05]
          tracking-[-0.02em]
          text-white
          mb-5
        "
              >
                Building Scalable XR Systems <br />
                for Defence Training.
              </h2>

              {/* PARAGRAPH */}
              <p
                className="
          text-neutral-300
          text-[14px]
          leading-[1.6]
          tracking-[0.01em]
          max-w-[420px]
          mb-8
        "
              >
                Our XR platforms combine spatial computing and real-time
                simulation to create immersive training environments for
                aerospace and defense. From cockpit systems to ground
                operations, teams can train, test, and operate with greater
                speed, safety, and efficiency.
              </p>

              {/* BUTTON */}
              <button
                className="
          border border-white
          px-6 py-3
          text-[13px]
          tracking-[0.08em]
          hover:bg-white hover:text-black
          transition-all duration-300
        "
              >
                EXPLORE →
              </button>
            </div>
          </div>
        </div>
      </section>
      <LatestNewsSection />

      {/* TALK TO SALES */}

      <TalkToSalesCTA />

      <Footer />
    </div>
  );
}

function TalkToSalesCTA() {
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <div
        onClick={() => navigate("/talk-to-sales")}
        className="
                    group
                    relative
                    w-full
                    h-[180px] sm:h-[220px] lg:h-[260px]
                    bg-black
                    hover:bg-gradient-to-r hover:from-blue-800 hover:to-indigo-900
                    transition-all
                    duration-500
                    flex
                    items-center
                    px-4 sm:px-8 lg:px-16
                    overflow-hidden
                    cursor-pointer
                "
      >
        {/* glow overlay */}
        <div
          className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]
                    transition-opacity duration-500
                "
        />

        {/* LEFT TEXT */}
        <div className="relative z-10">
          <p className="text-xs sm:text-sm tracking-widest text-white/80 mb-3 sm:mb-4">
            READY TO REDEFINE REALITY?
          </p>

          <h2
            className="
                        text-3xl sm:text-4xl md:text-5xl lg:text-[56px]
                        font-extrabold text-white leading-none
                        transition-transform duration-300
                        group-hover:scale-105
                    "
          >
            TALK TO SALES
          </h2>
        </div>

        {/* ARROW */}
        <div
          className="
                        absolute
                        right-4 sm:right-8 lg:right-16
                        opacity-0
                        translate-x-10
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                        duration-500
                    "
        >
          <svg
            className="w-[60px] sm:w-[80px] lg:w-[100px]"
            viewBox="0 0 100 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="20"
              x2="70"
              y2="20"
              stroke="white"
              strokeWidth="5"
            />
            <polyline
              points="55,5 70,20 55,35"
              fill="none"
              stroke="white"
              strokeWidth="5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

function LatestNewsSection() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => setAnimate(true));
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black px-6 sm:px-10 lg:px-16 py-20"
    >
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-14">
        <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-500">
          Defense Technology Insights
        </p>

        {/* <button
          onClick={() => navigate("/articles")}
          className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 hover:text-white transition flex items-center gap-2"
        >
          All Articles →
        </button> */}
      </div>

      {/* GRID */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr]">
        {/* MAIN ARTICLE */}
        <div
          onClick={() =>
            window.open(
              "https://www.defence-industries.com/articles/advanced-ai-powered-military-simulation",
              "_blank",
            )
          }
          className={`cursor-pointer relative min-h-[420px] lg:h-[520px] overflow-hidden group border border-neutral-800
  transition-all duration-700 hover:scale-[1.02]
  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[120px]"}`}
        >
          {/* ✅ IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
            style={{ backgroundImage: `url(${Article1})` }}
          />

          {/* ✅ OVERLAY */}
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500" />

          {/* ✅ CONTENT */}
          <div className="relative z-10 p-10 h-full flex flex-col justify-between">
            <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400">
              Simulation & Defense
            </p>

            <div>
              <h3 className="text-white font-semibold mb-4">
                AI Simulation Is Changing Military Training
              </h3>

              <p className="text-neutral-300 text-[14px] leading-relaxed">
                Advanced simulation systems are helping forces train in
                realistic environments while improving readiness and reducing
                risk.
              </p>
            </div>
          </div>
        </div>

        {/* ARTICLE 2 */}
        <div
          onClick={() =>
            window.open(
              "https://sdi.ai/blog/military-training-simulation-software-ai/",
              "_blank",
            )
          }
          className={`cursor-pointer relative overflow-hidden group border border-neutral-800 p-10 flex flex-col justify-between
  transition-all duration-700 hover:-translate-y-2
  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[120px]"}`}
        >
          {/* IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
            style={{ backgroundImage: `url(${Article2})` }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400">
              Defense Technology
            </p>

            <div>
              <h3 className="text-white font-semibold mb-4">
                How Simulation Powers Modern Defense Systems
              </h3>

              <p className="text-neutral-300 text-[14px] leading-relaxed">
                VR and AI-based platforms allow teams to simulate operations,
                test systems and improve decision making in real time.
              </p>
            </div>
          </div>
        </div>

        {/* ARTICLE 3 */}
        <div
          onClick={() =>
            window.open(
              "https://simpleflying.com/airline-pilot-training-cost/",
              "_blank",
            )
          }
          className={`cursor-pointer relative overflow-hidden group border border-neutral-800 p-10 flex flex-col justify-between
  transition-all duration-700 hover:-translate-y-2
  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[120px]"}`}
        >
          {/* IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
            style={{ backgroundImage: `url(${Article3})` }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400">
              Aviation Training
            </p>

            <div>
              <h3 className="text-white font-semibold mb-4">
                Why Simulators Are Key for Pilot Training
              </h3>

              <p className="text-neutral-300 text-[14px] leading-relaxed">
                Flight simulators reduce training costs while allowing pilots to
                practice complex scenarios safely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

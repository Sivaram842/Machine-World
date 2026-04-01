import React, { useRef, useState, useEffect } from "react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/NewNavbar";
import Footer from "../../components/NewFooter";

import img1 from "../../assets/srm1.jpg";
import img2 from "../../assets/srm2.jpeg";
import img3 from "../../assets/srm3.png";
import img4 from "../../assets/srm4.jpg";

import Mig29K1 from "../../assets/Rafale1.jpg";
import Mig29K2 from "../../assets/Rafale2.jpg";
import Mig29K3 from "../../assets/Rafale3.jpg";
import Mig29K4 from "../../assets/Rafale4.jpg";
import Mig29K5 from "../../assets/Rafale5.jpg";
import Mig29K6 from "../../assets/Rafale6.jpg";
import Mig29K7 from "../../assets/Rafale7.webp";

import FDRImg from "../../assets/fdr.jpeg";
import AIImg from "../../assets/ai-defense.jpg";
import SquadronImg from "../../assets/squadron.png";
import CustomImg from "../../assets/custom-defense.png";
import PersonalImg from "../../assets/personalized-training.jpg";

import RafaleImg from "../../assets/dassaultrafale.jpg";
import rafaleCockpit from "../../assets/rafale-cockpit.jpg";

import TalkToSalesCTA from "../../components/TalkToSalesCTA";

const tabs = [
  {
    id: 1,
    label: "FDR Intelligence",
    title: "FLIGHT DATA RECORDING & TRAINING INTELLIGENCE",
    text: "FDR captures simulation interactions for mission replay, performance analysis and error tracking, improving accuracy and operational readiness.",
    img: FDRImg,
  },
  {
    id: 2,
    label: "AI-Driven Systems",
    title: "AI-POWERED ADAPTIVE TRAINING ENVIRONMENTS",
    text: "AI adapts training scenarios in real time, introducing intelligent threats and feedback to enhance performance and realism.",
    img: AIImg,
  },
  // {
  //   id: 3,
  //   label: "Squadron Labs",
  //   title: "MULTI-USER SQUADRON TRAINING ENVIRONMENTS",
  //   text: "Coordinated multi-user simulations where pilots, command units and ground teams train together, replicating real mission environments.Enhances communication, decision-making and operational readiness at scale.",
  //   img: SquadronImg,
  // },
  {
    id: 4,
    label: "Custom Solutions",
    title: "MISSION-SPECIFIC XR TRAINING SYSTEMS",
    text: "Customized XR systems tailored to aircraft, terrain and mission-specific defence requirements.Designed to align with real-world operations across air, land and integrated defence systems.",
    img: CustomImg,
  },
  {
    id: 5,
    label: "Personalized Training",
    title: "INDIVIDUAL PERFORMANCE-DRIVEN TRAINING SYSTEMS",
    text: "Adapts training using individual performance data to identify strengths and improve weaknesses.Creates personalized learning paths for faster skill development and higher efficiency.",
    img: PersonalImg,
  },
  {
    id: 6,
    label: "Building Blocks Curriculum",
    title: "BUILDING BLOCKS CURRICULUM",
    text: "A structured building-block curriculum spanning Tier 1 to Tier 3, delivering immersive high-fidelity simulations that enhance muscle memory and pilot readiness.",
    img: img1,
  },
  {
    id: 7,
    label: "Basic to Advance Training",
    title:
      "Basic to Advance Training Simulation Solurom basic to advanced training, tions",
    text: "Our high-fidelity simulators deliver immersive pilot training, replicating real aircraft cockpits for authentic flight experience from basic to advanced levels.",
    img: img2,
  },
  // {
  //   id: 8,
  //   label: "Combined Squadran Training",
  //   title: "Integrated Combined Squadron Training",
  //   text: "Combined training blends multiple aircraft types, scenarios, or crew roles into integrated sessions to build coordination and adaptability in realistic operations.",
  //   img: img3,
  // },
  {
    id: 9,
    label: "Indegeous Product Development",
    title: "Indigenous Engineering Excellence",
    text: "Atmanirbhar Bharat promotes indigenous development by strengthening domestic manufacturing, technology, and innovation to reduce dependence on foreign imports.",

    img: img4,
  },
];

const Rafale = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [active, setActive] = useState(0);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const [open, setOpen] = useState(false);

  const gridRef = useRef(null);
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  useEffect(() => {
    const container = scrollRef.current;
    const activeTab = container?.children[active];

    if (activeTab && container) {
      const containerWidth = container.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;

      container.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      });
    }
  }, [active]);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const statVariant = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full bg-black text-white min-h-[60vh] flex flex-col justify-between px-6 sm:px-10 lg:px-20 pt-20 pb-10"
      >
        {/* BIG TITLE */}
        <div>
          <h1 className="text-[34px] sm:text-[48px] md:text-[72px] lg:text-[110px] font-semibold tracking-tight leading-[0.95]">
            Rafale
          </h1>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-end">
          {/* LEFT LABEL */}
          <div className="text-[11px] sm:text-[12px] tracking-[0.25em] text-gray-400 uppercase">
            HIGH FIDELITY SIMULATION
          </div>

          {/* PARAGRAPH */}
          <div className="text-[13px] sm:text-[14px] leading-relaxed text-gray-300 max-w-[420px]">
            Two variants of the Rafale include the Rafale B twin-seat fighter
            used for training and operational missions, and the Rafale C
            single-seat aircraft designed for frontline multirole combat.
          </div>

          {/* SCROLL ARROW */}
          <div
            onClick={scrollToGrid}
            className="flex md:justify-end text-3xl md:text-4xl cursor-pointer text-gray-300 hover:translate-y-1 transition"
          >
            ↓
          </div>
        </div>
      </motion.section>
      <header className="relative w-full min-h-[75vh] sm:min-h-[100vh] lg:min-h-screen overflow-hidden">
        {/* Background image */}
        <img
          src={RafaleImg}
          alt="Rafale Fighter"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-end min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen">
          <div className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-24">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-8"></div>
          </div>
        </div>
      </header>
      {/* BLACK BLANK SECTION */}
      <section className="w-full bg-black h-[10vh]"></section>
      {/* ================= AEROSPACE MOSAIC GRID ================= */}

      <section
        ref={gridRef}
        className="w-full bg-black text-white py-20 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-20"
      >
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 auto-rows-[220px] sm:auto-rows-[240px] lg:auto-rows-[260px] gap-6">
          {/* HERO BLOCK */}
          <div
            onClick={() =>
              window.open(
                "https://ihedn.fr/en/notre-selection/lepopee-du-rafale-lavion-de-combat-supreme/",
                "_blank",
              )
            }
            className="relative col-span-1 sm:col-span-2 lg:col-span-6 lg:row-span-2 rounded-xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${Mig29K1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>

            <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-6 sm:left-8 lg:left-10 max-w-[420px]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 group-hover:-translate-y-1 transition">
                Rafale’s Development as a Multirole Fighter
              </h3>

              <p className="text-gray-300 text-sm hidden sm:block">
                The Dassault Rafale is a 4.5-generation multirole fighter
                developed by the French aerospace company Dassault Aviation.
              </p>
            </div>
          </div>

          {/* SMALL CARD */}
          <div
            onClick={() =>
              window.open(
                "https://theaviationist.com/2024/11/28/dassault-rafale/",
                "_blank",
              )
            }
            className="relative col-span-1 lg:col-span-3 rounded-xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${Mig29K2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-lg font-semibold">
                Rafale in Combat Operations – Libya and Middle East
              </h4>
            </div>
          </div>

          {/* SMALL CARD */}
          <div
            onClick={() =>
              window.open(
                "https://csdronline.com/blind-spot/indias-return-to-rafale-jets/",
                "_blank",
              )
            }
            className="relative col-span-1 lg:col-span-3 rounded-xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${Mig29K3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-lg font-semibold">
                India’s Rafale Acquisition Program
              </h4>
            </div>
          </div>

          {/* WIDE CARD */}
          <div
            onClick={() =>
              window.open(
                "https://www.dassault-aviation.com/en/defense/rafale/",
                "_blank",
              )
            }
            className="relative col-span-1 sm:col-span-2 lg:col-span-6 rounded-xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${Mig29K4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 max-w-[400px]">
              <h3 className="text-lg sm:text-xl font-semibold">
                Rafale Carrier Operations – French Navy
              </h3>
            </div>
          </div>

          {/* SMALL */}
          <div
            onClick={() =>
              window.open(
                "https://www.dassault-aviation.com/en/defense/rafale/synthesise-and-facilitate/",
                "_blank",
              )
            }
            className="relative col-span-1 lg:col-span-3 rounded-xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${Mig29K5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

            <div className="absolute bottom-6 left-6">
              <h4 className="text-lg font-semibold">
                Rafale Sensor Fusion and Network-Centric Warfare
              </h4>
            </div>
          </div>

          {/* MEDIUM */}
          <div
            onClick={() =>
              window.open(
                "https://www.flyajetfighter.com/rafale-the-real-reasons-behind-its-late-export-success/",
                "_blank",
              )
            }
            className="relative col-span-1 lg:col-span-3 rounded-xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${Mig29K6})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

            <div className="absolute bottom-6 left-6">
              <h4 className="text-lg font-semibold">
                Rafale Export Success and Global Defence Market
              </h4>
            </div>
          </div>

          {/* WIDE CARD */}
          <div
            onClick={() =>
              window.open(
                "https://timesofindia.indiatimes.com/india/iaf-set-to-deploy-rafales-in-hasimara-for-eastern-front-with-china/articleshow/83699361.cms",
                "_blank",
              )
            }
            className="relative col-span-1 sm:col-span-2 lg:col-span-6 rounded-xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${Mig29K7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 max-w-[400px]">
              <h3 className="text-lg sm:text-xl font-semibold">
                IAF Rafale Deployment at Hasimara Air Base
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black text-white py-16 sm:py-20 flex items-center px-6 sm:px-10 lg:px-20">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* LEFT SIDE */}
          <div className="max-w-[620px]">
            <h2
              className="font-semibold leading-[0.95] tracking-tight
        text-[36px] sm:text-[48px] md:text-[64px] lg:text-[60px] mb-8"
            >
              Rafale
              <br />
              Cockpit Architecture
            </h2>

            <p className="text-gray-400 text-[14px] sm:text-[16px] leading-relaxed max-w-[420px]">
              The Dassault Rafale comes in two variants—the Rafale B (two-seat)
              and Rafale C (single-seat)—both featuring a fully digital glass
              cockpit with HUD, multifunction displays, HOTAS, and advanced
              sensor fusion for integrated mission management.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={rafaleCockpit}
              alt="Rafale Cockpit"
              className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] object-contain"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-black text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          {/* SECTION 1 */}
          <p className="text-gray-400 tracking-widest text-xs sm:text-sm uppercase mb-10 sm:mb-14">
            Airframe & Operational Expenditure Overview
          </p>

          <motion.div
            variants={statVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-10"
          >
            <div>
              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                $45–50M
              </h2>
              <p className="text-gray-400 mt-3">Airframe</p>
            </div>

            <div>
              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                $15–25M
              </h2>
              <p className="text-gray-400 mt-3">Fuel per year</p>
            </div>

            <div>
              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                $30–40M
              </h2>
              <p className="text-gray-400 mt-3">Maintenance per year</p>
            </div>
          </motion.div>

          <div className="border-b border-gray-700 my-14"></div>

          {/* SECTION 2 */}
          <p className="text-gray-400 tracking-widest text-xs sm:text-sm uppercase mb-10 sm:mb-14">
            Estimated Expenditure on OEM's
          </p>

          <motion.div
            variants={statVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-10"
          >
            <div>
              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                $6–10M
              </h2>
              <p className="text-gray-400 mt-3">
                MiG-29K Simulator Infrastructure
              </p>
            </div>

            <div>
              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                $6–10M
              </h2>
              <p className="text-gray-400 mt-3">
                Full-Mission Cockpit Simulator
              </p>
            </div>

            <div>
              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                $300–400M+
              </h2>
              <p className="text-gray-400 mt-3">
                OEM Support & Engine Contracts
              </p>
            </div>
          </motion.div>

          <div className="border-b border-gray-700 my-14"></div>

          {/* SECTION 3 */}
          <p className="text-gray-400 tracking-widest text-xs sm:text-sm uppercase mb-10 sm:mb-14">
            Operational Training Investment
          </p>

          <motion.div
            variants={statVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-10"
          >
            <div>
              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                900–1,000
              </h2>
              <p className="text-gray-400 mt-3">Total Fighter Pilots (IAF)</p>
            </div>

            <div>
              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                220,000+ hrs
              </h2>
              <p className="text-gray-400 mt-3">Total Annual Flying Hours</p>
            </div>

            <div>
              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-none">
                $1.5–2B
              </h2>
              <p className="text-gray-400 mt-3">
                Estimated Annual Training Cost
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= ANDURIL STYLE HERO ================= */}
      <section className="relative py-20 sm:py-24 md:py-32 px-6 sm:px-10 lg:px-20 overflow-hidden bg-black">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.06),transparent_45%)]"></div>

        <div className="relative max-w-[1100px] mx-auto text-left lg:ml-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
        font-extrabold uppercase
        text-[26px] sm:text-[34px] md:text-[46px] lg:text-[60px]
        leading-[1.08]
        tracking-tight
        text-white
      "
          >
            {[
              "WE ARE PROVIDING",
              "HIGH FIDELITY MIXED REALITY",
              "COCKPIT SIMULATORS",
              "REPLICATING ACTUAL COCKPIT",
              "ENVIRONMENT FEEL AND TOUCH",
            ].map((line, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      delay: i * 0.2,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className={`block
            ${
              i === 1
                ? "bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                : i === 4
                  ? "text-gray-500"
                  : i === 3
                    ? "text-gray-300"
                    : ""
            }`}
              >
                {line}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      </section>
      <section className="w-full bg-black text-white py-20 sm:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-12 sm:mb-16">
            OUR ADVANCED COCKPIT SIMULATOR PROVIDES
          </h2>

          <div className="relative flex items-center">
            {/* LEFT ARROW */}
            <div className="w-10 flex justify-start">
              <button
                onClick={scrollLeft}
                className="text-white text-xl hover:opacity-70 cursor-pointer"
              >
                ←
              </button>
            </div>

            {/* CENTER TABS */}
            <div className="flex-1 overflow-hidden">
              <div
                ref={scrollRef}
                className="
      flex
      items-center
      gap-8 sm:gap-12
      text-gray-400
      border-b border-gray-700
      pb-4 sm:pb-6 mb-12 sm:mb-16
      overflow-x-auto
      whitespace-nowrap
      scroll-smooth
      px-10   /* 🔥 more breathing space from arrows */
      [-ms-overflow-style:none]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
              >
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`whitespace-nowrap transition ${
                      active === index
                        ? "text-white border-b border-white pb-2"
                        : ""
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT ARROW */}
            <div className="w-10 flex justify-end">
              <button
                onClick={scrollRight}
                className="text-white text-xl hover:opacity-70 cursor-pointer"
              >
                →
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <div className="bg-gray-100 text-black p-6 sm:p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
            {/* LEFT TEXT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm tracking-wide text-gray-500 mb-4">
                  {String(tabs[active].id).padStart(2, "0")} / {tabs.length}
                </p>

                <p className="text-xs tracking-widest mb-6">
                  {tabs[active].title}
                </p>

                <p
                  className="
                                                  text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]
                                                  leading-[1.4]
                                                  italic
                                                  font-light
                                                  tracking-tight
                                                  text-gray-800
                                                  max-w-[700px]
                                                "
                >
                  “{tabs[active].text}”
                </p>
                <div className="text-[60px] sm:text-[90px] lg:text-[120px] font-bold mt-10 lg:mt-16 opacity-80">
                  {tabs[active].id}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* IMAGE */}
            <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[360px] overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={tabs[active].img}
                  src={tabs[active].img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <TalkToSalesCTA />
      <Footer />
    </div>
  );
};

export default Rafale;

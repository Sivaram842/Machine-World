import React, { useRef, useState } from "react";

import Footer from "../../../components/NewFooter";

import learn from "../../../assets/srm1.jpg";
import learn1 from "../../../assets/rehearsal.jpg";
import learn2 from "../../../assets/combat.webp";
import learn3 from "../../../assets/fighterjet.jpg";
import learn4 from "../../../assets/colab.jpg";
import learn5 from "../../../assets/mission.webp";
import learn6 from "../../../assets/advtrain.png";
import learn7 from "../../../assets/train.png";
import Navbar from "../../../components/NewNavbar";

const cards = [
  {
    tag: "PILOT TRAINING",
    title: "High-fidelity cockpit simulators",
    desc: "Antiworld cockpit simulators allow pilots to train for real combat missions, emergency situations, and complex flight operations without the cost and risk of live aircraft training.",
    img: learn,
  },
  {
    tag: "TACTICAL MISSION SIMULATION",
    title: "Mission rehearsal environments",
    desc: "Immersive XR simulation environments enable defense teams to plan, rehearse, and analyze aerial missions before real deployment.",
    img: learn1,
  },
  {
    tag: "AIR COMBAT TRAINING",
    title: "Combat scenario simulation",
    desc: "Pilots experience realistic aerial combat environments including threat detection, maneuvering, and coordinated operations.",
    img: learn3,
  },
  {
    tag: "AERIAL SYSTEM TRAINING",
    title: "Aircraft systems familiarization",
    desc: "XR environments allow trainees to interact with aircraft controls, avionics systems, and cockpit procedures in immersive digital simulations.",
    img: learn2,
  },
  {
    tag: "MULTI-PILOT COORDINATION",
    title: "Collaborative mission training",
    desc: "Multiple pilots and command units can train together inside shared simulation environments for coordinated aerial operations.",
    img: learn4,
  },
  {
    tag: "AIRSPACE DEFENSE",
    title: "Counter-drone simulation",
    desc: "Simulation platforms help defense teams train for detecting, tracking, and neutralizing hostile drone threats in controlled environments.",
    img: learn5,
  },
];

export default function Aerial() {
  const scrollRef = useRef(null);
  const dragRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeftStart: 0,
  });

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;

    dragRef.current.isDown = true;
    dragRef.current.startX = e.pageX - scrollRef.current.offsetLeft;
    dragRef.current.scrollLeftStart = scrollRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    dragRef.current.isDown = false;
  };

  const handleMouseLeave = () => {
    dragRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!scrollRef.current || !dragRef.current.isDown) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.2;

    scrollRef.current.scrollLeft = dragRef.current.scrollLeftStart - walk;
  };
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;
    await videoRef.current.play();
    setPlaying(true);
  };

  return (
    <div className="bg-[#f3f3f3]">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden text-white bg-black">
        <img
          src=""
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative h-full flex items-end pb-[14vh] px-6 md:px-[6vw]">
          <div className="grid md:grid-cols-12 w-full">
            {/* LEFT */}
            <div className="md:col-span-6">
              <h1 className="font-extrabold uppercase leading-[0.9] tracking-tight text-[11vw] md:text-[4.5vw]">
                IMMERSIVE <br /> AERIAL WARFARE <br /> PLATFORMS
              </h1>
            </div>

            {/* RIGHT */}
            <div className="md:col-span-4 md:col-start-9 flex items-end">
              <ul className="text-[16px] md:text-[17px] leading-[1.7] max-w-[420px] text-white/90 space-y-2">
                <li>
                  {" "}
                  Immersive aerial warfare training using cockpit simulators and
                  mission simulation environments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* XR EDUCATION */}
      <section className="py-28 px-[6vw]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img src={learn6} className="w-full object-cover rounded-lg" />

          <div>
            <p className="uppercase text-[12px] tracking-[0.2em] text-black/60 mb-4">
              NEXT-GENERATION AERIAL TRAINING
            </p>

            <h2 className="text-[36px] md:text-[44px] font-extrabold leading-[1.05] mb-6">
              ADVANCED TRAINING FOR MODERN AERIAL WARFARE
            </h2>

            <ul className="space-y-2 text-[16px] text-black/70 leading-[1.7]">
              <li>
                {" "}
                High-fidelity simulators for aerial combat, emergency flight
                scenarios, and pilot training.
              </li>
              <li>
                {" "}
                Mission planning, UAV defense training, and tactical
                coordination in safe digital environments.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HORIZONTAL CARDS */}
      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="px-[6vw] mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-[1.1] uppercase">
            AERIAL WARFARE
            <br className="sm:hidden" />
            SIMULATION USE CASES
          </h2>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 lg:gap-10 px-[6vw] overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing touch-pan-x"
          style={{ scrollbarWidth: "none" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[420px] max-w-[420px] flex flex-col group flex-shrink-0"
            >
              <div className="h-auto lg:h-[220px]">
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-gray-500 mb-3">
                  {card.tag}
                </p>

                <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold mb-3 lg:mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-[1.6] text-sm lg:text-[15px]">
                  {card.desc}
                </p>
              </div>

              <img
                src={card.img}
                draggable="false"
                className="mt-5 lg:mt-6 h-[240px] sm:h-[300px] lg:h-[420px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* XR ADOPTION */}
      <section className="py-36 px-[6vw] bg-[#f3f3f3] text-black">
        <div className="max-w-[1200px] mx-auto">
          {/* HEADING */}
          <h2
            className="
      text-[34px] md:text-[48px]
      font-extrabold
      leading-[1.05]
      tracking-[-0.02em]
      max-w-[900px]
      mb-20
    "
          >
            DEFENSE ORGANIZATIONS ARE ADOPTING ADVANCED AERIAL TRAINING SYSTEMS
          </h2>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-[20px] font-semibold mb-3">
                Mission Rehearsal
              </h3>
              <p className="text-black/70 text-[15px] leading-[1.7]">
                Air forces rehearse aerial missions and refine combat strategies
                using immersive simulation platforms before deployment.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold mb-3">Safe Training</h3>
              <p className="text-black/70 text-[15px] leading-[1.7]">
                Pilots train for emergency scenarios and operations without the
                risks associated with real aircraft environments.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-semibold mb-3">Coordination</h3>
              <p className="text-black/70 text-[15px] leading-[1.7]">
                Simulation enables better coordination between pilots, command
                units and mission control systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-28 px-[6vw]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <video
            ref={videoRef}
            src="/training1.mp4"
            className="w-full rounded-lg"
            controls={playing}
          />

          <div>
            <p className="text-[28px] italic font-light leading-[1.4] mb-6">
              “ Train pilots for complex combat missions and high-risk aerial
              operations. Improve coordination between pilots, commanders, and
              air units.”
            </p>

            <p className="uppercase text-[12px] tracking-[0.18em] text-black/60">
              ANTIWORLD DEFENSE TRAINING SYSTEMS
            </p>

            <button
              onClick={handlePlay}
              className="mt-8 bg-black text-white px-8 py-4 uppercase text-[12px] tracking-[0.12em] hover:bg-black/80"
            >
              Play Video →
            </button>
          </div>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section
        className="relative py-40 text-white"
        style={{
          backgroundImage: `url(${learn7})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-[600px] ml-[6vw]">
          <p className="uppercase text-[12px] tracking-[0.18em] mb-5">
            THE ANTIWORLD ADVANTAGE
          </p>

          <h2 className="text-[44px] font-extrabold leading-[1.1] mb-6">
            BUILDING THE FUTURE OF AERIAL WARFARE TRAINING
          </h2>

          <p
            className="
  text-[16px]
  leading-[1.8]
  text-white/80
  max-w-[520px]
  mb-10
"
          >
            High-fidelity cockpit simulators, mission rehearsal platforms and
            collaborative simulation environments designed to improve pilot
            readiness and operational coordination in modern aerial warfare.
          </p>

          <button className="bg-white text-black px-8 py-4 uppercase text-[12px] tracking-[0.12em] hover:bg-white/80">
            Explore Technologies →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

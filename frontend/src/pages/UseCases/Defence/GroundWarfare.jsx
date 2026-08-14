import React, { useRef, useState } from "react";

import Footer from "../../../components/NewFooter";

import learn from "../../../assets/immersive-education.jpg";
import learn1 from "../../../assets/skilldevelopment.jpg";
import learn2 from "../../../assets/labs.jpg";
import learn3 from "../../../assets/education.jpg";
import learn4 from "../../../assets/collab.jpg";
import learn5 from "../../../assets/mission.webp";
import learn6 from "../../../assets/groundwarfare.png";
import learn7 from "../../../assets/ground.png";
import Navbar from "../../../components/NewNavbar";
import truck from "../../../assets/download.png";
const cards = [
  {
    tag: "TACTICAL COMBAT TRAINING",
    title: "Battlefield simulation environments",
    desc: "Doom Industries immersive simulation systems allow soldiers to train in realistic battlefield environments including urban combat, mission planning, and coordinated ground operations.",
    img: learn,
  },
  {
    tag: "MISSION REHEARSAL",
    title: "Operational planning simulations",
    desc: "Defense teams can simulate ground missions before deployment, allowing commanders and soldiers to plan strategies and analyze battlefield scenarios.",
    img: learn1,
  },
  {
    tag: "AUTONOMOUS GROUND SYSTEMS",
    title: "Robotics and tactical automation",
    desc: "Doom Industries develops intelligent robotic systems designed for reconnaissance, surveillance, and hazardous operations in complex combat environments.",
    img: learn3,
  },
  {
    tag: "BATTLEFIELD SYSTEM TRAINING",
    title: "Equipment and vehicle simulation",
    desc: "XR environments enable soldiers to train with military equipment, tactical vehicles, and operational systems through immersive digital simulations.",
    img: learn2,
  },
  {
    tag: "TEAM COORDINATION",
    title: "Multi-unit mission training",
    desc: "Ground forces can train collaboratively in shared simulation environments to improve communication, coordination, and tactical response during missions.",
    img: learn4,
  },
  {
    tag: "COUNTER-DRONE DEFENSE",
    title: "Threat detection training",
    desc: "Simulation systems allow defense personnel to train for detecting, tracking, and responding to hostile drones in ground warfare environments.",
    img: learn5,
  },
];

const GroundWarfare = () => {
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
          src={truck}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative h-full flex items-end pb-[14vh] px-6 md:px-[6vw]">
          <div className="grid md:grid-cols-12 w-full">
            {/* LEFT */}
            <div className="md:col-span-6">
              <h1 className="font-extrabold uppercase leading-[0.9] tracking-tight text-[11vw] md:text-[4.5vw]">
                IMMERSIVE <br /> GROUND WARFARE <br /> PLATFORMS
              </h1>
            </div>

            {/* RIGHT */}
            <div className="md:col-span-4 md:col-start-9 flex items-end">
              <p
                className="
      text-[15px] md:text-[17px]
      leading-[1.7]
      text-white/80
      max-w-[420px]
    "
              >
                Advanced simulation platforms designed for modern ground forces
                - enabling mission rehearsal, tactical coordination and combat
                training in fully immersive digital environments.
              </p>
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
              NEXT-GENERATION DEFENSE TRAINING
            </p>

            <h2
              className="
  text-[32px] md:text-[40px]
  font-extrabold
  leading-[1.05]
  tracking-[-0.02em]
  mb-6
"
            >
              ADVANCED SYSTEMS FOR <br />
              MODERN GROUND WARFARE
            </h2>

            <p
              className="
  text-[15px] md:text-[16px]
  text-black/70
  leading-[1.7]
  max-w-[520px]
"
            >
              Train soldiers in realistic urban combat environments, rehearse
              tactical missions before deployment and improve coordination
              across units using immersive simulation platforms designed for
              modern battlefield conditions.
            </p>
          </div>
        </div>
      </section>

      {/* HORIZONTAL CARDS */}
      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="px-[6vw] mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-[1.1] uppercase">
            GROUND WARFARE
            <br className="sm:hidden" />
            TECHNOLOGY USE CASES
          </h2>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 lg:gap-10 px-[6vw] overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
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
      <section className="py-36 px-[6vw] bg-white text-black">
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
            DEFENSE FORCES ARE ADOPTING <br />
            INTELLIGENT GROUND WARFARE SYSTEMS
          </h2>

          {/* GRID POINTS */}
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-[22px] font-semibold mb-3">Safe Training</h3>
              <p className="text-grey/70 text-[15px] leading-[1.7]">
                Conduct combat simulations in controlled digital environments
                without real-world risks or operational costs.
              </p>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold mb-3">
                Mission Readiness
              </h3>
              <p className="text-grey/70 text-[15px] leading-[1.7]">
                Prepare forces for real deployment through realistic mission
                rehearsal and tactical scenario training.
              </p>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold mb-3">Coordination</h3>
              <p className="text-grey/70 text-[15px] leading-[1.7]">
                Improve communication and coordination between units during
                complex ground operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* VIDEO SECTION
            <section className="py-28 px-[6vw]">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className="w-full lg:w-[58%]">
                        <img
                            src={truck}
                            alt="Ground Vehicle"
                            className="h-[300px] sm:h-[420px] lg:h-[520px] w-full object-cover"
                        />
                    </div>

                    <div>
                        <ul className="text-[20px] italic font-light leading-[1.5] mb-6 space-y-2">
                            <li>• Train for high-risk battlefield missions.</li>
                            <li>• Improve command and unit response.</li>
                        </ul>

                        <p className="uppercase text-[12px] tracking-[0.18em] text-black/60">
                            Doom Industries DEFENSE SIMULATION SYSTEMS
                        </p>
                     
                        <button
                            onClick={handlePlay}
                            className="mt-8 bg-black text-white px-8 py-4 uppercase text-[12px] tracking-[0.12em] hover:bg-black/80"
                        >
                            Play Video →
                        </button> 
                    </div>
                </div>
            </section> */}

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
            THE DOOM INDUSTRIES ADVANTAGE
          </p>

          <h2 className="text-[44px] font-extrabold leading-[1.1] mb-6">
            BUILDING THE FUTURE OF GROUND WARFARE SYSTEMS
          </h2>

          <p
            className="
  text-[16px]
  leading-[1.7]
  text-white/80
  max-w-[480px]
  mb-8
"
          >
            From tactical mission simulators to autonomous battlefield systems,
            Doom Industries is redefining how defense forces train, operate and
            prepare for complex ground operations.
          </p>
          <button className="bg-white text-black px-8 py-4 uppercase text-[12px] tracking-[0.12em] hover:bg-white/80">
            Explore Technologies →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroundWarfare;

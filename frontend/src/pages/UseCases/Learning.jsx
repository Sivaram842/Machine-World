import React, { useRef, useState } from "react";
import Navbar from "../../components/NewNavbar";
import Footer from "../../components/Footer";
import learn from "../../assets/immersive-education.jpg";
import learn1 from "../../assets/skilldevelopment.jpg";
import learn2 from "../../assets/labs.jpg";
import learn3 from "../../assets/education.jpg";
import learn4 from "../../assets/collab.jpg";
import learn5 from "../../assets/mission.webp";
import learn6 from "../../assets/XR_Lab.avif";
import learn7 from "../../assets/training.jpeg";

const cards = [
  {
    tag: "INTERACTIVE LEARNING",
    title: "Immersive classroom environments",
    desc: "Students learn complex subjects through interactive spatial simulations where theory becomes practical experience inside immersive digital environments.",
    img: learn,
  },
  {
    tag: "SKILL DEVELOPMENT",
    title: "Hands-on technical training",
    desc: "Learners can practice engineering, aviation, and industrial procedures inside virtual training systems powered by Doom Industries XR technologies.",
    img: learn1,
  },
  {
    tag: "SIMULATION-BASED EDUCATION",
    title: "Scenario-based learning",
    desc: "Students experience real-world situations through immersive simulations that enhance decision making and problem solving skills.",
    img: learn3,
  },
  {
    tag: "IMMERSIVE LABS",
    title: "Virtual laboratories",
    desc: "Educational institutions can deploy virtual labs where students experiment, analyze systems, and interact with complex environments safely.",
    img: learn2,
  },
  {
    tag: "COLLABORATIVE TRAINING",
    title: "Multi-user learning environments",
    desc: "REALM enables collaborative XR training where multiple learners interact in shared immersive spaces.",
    img: learn4,
  },
  {
    tag: "MISSION SIMULATION",
    title: "Real-world system simulations",
    desc: "From aviation to industrial training, Doom Industries simulators replicate real operational environments for realistic practice.",
    img: learn5,
  },
];

const customers = [
  "TECHNICAL UNIVERSITIES",
  "AVIATION TRAINING CENTERS",
  "DEFENSE ACADEMIES",
  "ENGINEERING INSTITUTES",
  "XR EDUCATION LABS",
  "ADVANCED SKILL DEVELOPMENT PROGRAMS",
];

export default function Learning() {
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
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setPlaying(true);
    } catch (err) {
      console.log("Playback prevented:", err);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="relative h-screen w-full overflow-hidden bg-black text-white">
        {/* Exact structural match using figure */}
        <figure className="absolute inset-0 h-full w-full">
          <img
            src="https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=1920&height=1080&name=1920x1080%20(5)-min.png"
            srcSet={`
            https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=3840&name=1920x1080%20(5)-min.png 3840w,
            https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=2560&name=1920x1080%20(5)-min.png 2560w,
            https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=1920&name=1920x1080%20(5)-min.png 1920w,
            https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=1280&name=1920x1080%20(5)-min.png 1280w,
            https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(5)-min.png?width=800&name=1920x1080%20(5)-min.png 800w
          `}
            sizes="100vw"
            width="1920"
            height="1080"
            alt="A person sitting in a flight simulator, wearing a VR headset"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="relative h-full w-full">
          <div className="absolute bottom-[15vh] left-0 w-full px-6 md:px-[5.5vw]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* LEFT HEADING */}
              <div className="md:col-span-6">
                <h1
                  className="
          font-extrabold
          uppercase
          leading-[0.9]
          tracking-[-0.015em]
          text-[12vw] md:text-[4vw]
          scale-x-105 md:scale-x-110
          scale-y-95 md:scale-y-90
        "
                >
                  IMMERSIVE
                  <br />
                  LEARNING PLATFORMS
                </h1>
              </div>

              {/* RIGHT PARAGRAPH */}
              <div className="md:col-span-6">
                <p
                  className="
          mt-6 md:mt-[3.5vh]
          text-[15px] md:text-[16px]
          leading-[1.6]
          max-w-full md:max-w-[430px]
        "
                >
                  Students, professionals, and institutions are adopting
                  immersive XR learning environments to develop real-world
                  skills. Doom Industries technologies combine spatial
                  computing, interactive simulations, and digital environments
                  to create engaging and practical learning experiences across
                  multiple industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f3f3f3] pt-[110px] pb-[95px]">
        <div className="max-w-[1380px] mx-auto px-[6vw]">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-[5.5vw] items-start">
            {/* LEFT IMAGE (54%) */}
            <div>
              <img
                src={learn6}
                alt="Pilot training simulator"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col items-start text-left">
              {/* Eyebrow */}
              <p className="uppercase text-[13px] tracking-[0.2em] font-medium mb-5 text-left">
                NEXT-GENERATION EDUCATION
              </p>

              {/* Heading */}
              <h2
                className="
  text-[26px] md:text-[36px]
  font-extrabold
  leading-[1]
  tracking-[-0.02em]
  mb-6
  origin-left
  scale-x-105 md:scale-x-110
  scale-y-95 md:scale-y-90
"
              >
                TRANSFORM LEARNING
                <br />
                WITH IMMERSIVE
                <br />
                XR TECHNOLOGY
              </h2>

              {/* Bullet List */}
              <ul className="list-disc list-outside pl-4 space-y-3 text-[14px] md:text-[15px] leading-[1.65] text-[#1a1a1a]">
                <li>
                  <strong>Enable experiential learning</strong> through
                  immersive XR environments where students interact with
                  realistic simulations instead of passive theoretical study.
                </li>

                <li>
                  <strong>Accelerate skill development</strong> by allowing
                  learners to repeatedly practice complex procedures in
                  controlled virtual environments.
                </li>

                <li>
                  <strong>Improve engagement and retention</strong> using
                  interactive spatial computing experiences powered by Doom
                  Industries' DAS platform.
                </li>

                <li>
                  <strong>
                    Create virtual laboratories and simulation classrooms
                  </strong>{" "}
                  that replicate real-world systems and environments.
                </li>

                <li>
                  <strong>
                    Expand accessibility to advanced training tools
                  </strong>{" "}
                  without the need for expensive physical infrastructure.
                </li>

                <li>
                  <strong>Train safely for complex scenarios</strong> such as
                  aviation operations, engineering procedures, and technical
                  simulations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f3] py-20 overflow-hidden">
        {/* Heading */}
        <div className="px-16 mb-12">
          <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] uppercase">
            TRAINING EVERY PHASE
            <br />
            OF FLIGHT
          </h2>
        </div>

        {/* Horizontal Drag Scroll Area */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 md:gap-10 px-6 md:px-16 overflow-x-auto md:overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[85vw] md:min-w-[420px] max-w-[85vw] md:max-w-[420px] flex-shrink-0 flex flex-col"
            >
              {/* Text Block - fixed height for perfect alignment */}
              <div className="h-[260px] flex flex-col">
                <p className="uppercase text-[12px] tracking-[0.18em] mb-4 text-gray-500">
                  {card.tag}
                </p>

                <h3 className="text-[22px] font-light mb-6 leading-snug">
                  {card.title}
                </h3>

                <p className="text-[15px] text-gray-600 leading-[1.7]">
                  {card.desc}
                </p>
              </div>

              {/* Image Block - equal height */}
              <div className="mt-5">
                <img
                  src={card.img}
                  alt=""
                  draggable="false"
                  className="w-full h-[320px] md:h-[520px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center">
        <div className="w-full max-w-[1100px] mx-auto px-[6vw] text-center">
          <h2 className="uppercase font-light text-[24px] md:text-[40px] leading-[1.4] tracking-[0.03em] text-[#111111]">
            EDUCATIONAL INSTITUTIONS
            <br />
            AND TRAINING ORGANIZATIONS
            <br />
            ARE ADOPTING IMMERSIVE XR LEARNING SYSTEMS.
          </h2>

          <p className="mt-8 md:mt-12 text-[16px] md:text-[19px] leading-[1.7] text-[#555555] max-w-[520px] mx-auto">
            Discover how Doom Industries technologies enable institutions and
            training centers to build immersive learning ecosystems that combine
            spatial computing, simulations, and real-time collaboration.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f3f3f3] min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SECTION */}
          <div className="pt-[60px] pl-[3vw]">
            <p className="uppercase text-[10px] tracking-[0.18em] text-black/60 mb-[25px]">
              OUR CUSTOMERS
            </p>

            <div className="space-y-4">
              {customers.map((name, index) => (
                <p
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`text-[26px] md:text-[40px] font-light tracking-[0.005em] cursor-pointer transition-colors duration-300 ${
                    activeIndex === index ? "text-black" : "text-black/30"
                  }`}
                >
                  {name}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="pt-[60px] pr-[5vw]">
            {/* VIDEO PLAYER */}
            <div className="relative mb-[30px]">
              <video
                ref={videoRef}
                className="w-full object-cover"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls={playing}
              />

              {!playing && (
                <div
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-[70px] h-[70px] bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[18px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-[4px]" />
                  </div>
                </div>
              )}
            </div>

            {/* QUOTE */}
            <p className="text-[20px] md:text-[27px] leading-[1.4] italic font-light text-black mb-[18px]">
              “Our XR-powered training environments deliver exceptional realism
              and immersion, enabling learners to train, practice, and master
              complex skills inside highly interactive simulated worlds.”
            </p>

            {/* AUTHOR */}
            <p className="uppercase text-[9px] tracking-[0.18em] text-black/60 mb-[24px]">
              JAVIER CASTELLAR – CHIEF STRATEGY OFFICER, AECHELON TECHNOLOGY
            </p>

            {/* BUTTON */}
            <button className="bg-black text-white px-[30px] py-[14px] uppercase text-[11px] tracking-[0.12em] hover:bg-black/80 transition">
              READ CASE STUDY →
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f3f3f3] py-[160px]">
        <div className="flex flex-col md:flex-row w-full max-w-[1650px] mx-auto px-6 md:px-[6vw] gap-12">
          {/* ================= LEFT SECTION ================= */}
          <div className="w-full md:w-[55%]">
            {/* 16:9 Responsive Video */}
            <div className="relative w-full aspect-video">
              <iframe
                src="/training1.mp4"
                title="Military Helicopter Cockpit Training"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="w-full md:w-[45%] flex items-center">
            <div className="max-w-[580px]">
              {/* Eyebrow */}
              <p className="uppercase text-[11px] tracking-[0.22em] text-black/70 mb-[22px]">
                IMMERSIVE TRAINING ECOSYSTEM
              </p>

              {/* Heading */}
              <h2 className="uppercase text-[28px] md:text-[46px] font-extrabold leading-[1.1] mb-[26px]">
                XR-POWERED LEARNING AND TRAINING SYSTEMS
              </h2>

              {/* Paragraph */}
              <p className="text-[17px] leading-[1.7] text-black/70 mb-[40px]">
                Doom Industries platforms combine spatial computing, immersive
                simulation environments, and real-time interaction systems to
                create advanced training ecosystems. Learners can practice
                complex procedures, explore digital environments, and
                collaborate with instructors in highly realistic immersive
                simulations.
              </p>

              {/* Button */}
              <button className="bg-black text-white px-[34px] py-[16px] uppercase text-[12px] tracking-[0.14em] hover:bg-black/80 transition">
                READ MORE →
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative w-full min-h-screen flex items-center text-white"
        style={{
          backgroundImage: `url(${learn7})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional overlay (remove if you don't want it) */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* LEFT CONTENT — pushed near edge */}
        <div className="relative ml-[4vw] max-w-[560px]">
          {/* Preheader */}
          <p className="uppercase text-[12px] tracking-[0.18em] font-light mb-6 text-white/80">
            THE DOOM INDUSTRIES ADVANTAGE
          </p>

          {/* Heading */}
          <h2 className="uppercase text-[28px] md:text-[36px] font-extrabold leading-[1.1] mb-8">
            BUILDING THE
            <br />
            FUTURE OF
            <br />
            IMMERSIVE
            <br />
            LEARNING.
          </h2>

          {/* Paragraph */}
          <p className="text-[15px] md:text-[16px] leading-[1.75] text-white/80 mb-10 max-w-[520px]">
            Doom Industries’ immersive technologies combine XR simulation,
            spatial computing, and interactive environments to redefine how
            knowledge is delivered. Our platforms allow learners to experience
            complex systems, develop practical skills, and collaborate inside
            fully immersive digital worlds.
          </p>

          {/* Button */}
          <a
            href="#"
            className="inline-flex items-center gap-3 uppercase text-[13px] tracking-[0.12em] font-medium text-white hover:opacity-70 transition"
          >
            Explore Doom Industries Technologies →
            <span className="text-lg">→</span>
          </a>
        </div>
      </section>
      {/* <section className="w-full bg-[#f3f3f3] py-[170px]">

                <div className="max-w-[1650px] mx-auto px-[6vw]">

                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-[7vw]">

                        <div className="w-full md:w-[40%]">
                            <p className="uppercase text-[11px] tracking-[0.22em] text-black/60 mb-[22px]">
                                IMMERSIVE LEARNING TECHNOLOGY
                            </p>

                            <h2 className="uppercase text-[44px] font-extrabold leading-[1.08] mb-[26px]">
                                DESIGNED FOR REAL-WORLD
                                <br />
                                DESIGNED FOR REAL-WORLD
                            </h2>

                            <p className="text-[16px] leading-[1.7] text-black/70 max-w-[460px]">
                                Doom Industries immersive systems combine spatial computing,
                                interactive simulation environments, and real-time rendering
                                technologies to create realistic digital training worlds.

                                Learners can interact with complex systems, operate simulated
                                equipment, and collaborate with instructors inside shared XR
                                environments. By integrating cockpit simulators, immersive
                                visualization systems, and multi-user platforms, Doom Industries
                                technologies enable practical skill development in fields
                                such as aviation, engineering, defense, and technical education.
                            </p>

                        </div>


                        <div className="w-full md:w-[55%]">

                            <video
                                className="w-full h-[300px] md:h-[500px] object-cover"
                                src="https://www.w3schools.com/html/mov_bbb.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />

                        </div>

                    </div>

                </div>

            </section>
            <section className="bg-[#f3f3f3] py-28">
                <div className="max-w-[1700px] mx-auto px-[6vw]">

                    <div className="flex justify-between items-center mb-16">
                        <p className="uppercase text-[12px] tracking-[0.18em]">
                            INSIGHTS FROM THE DOOM INDUSTRIES LEARNING ECOSYSTEM
                        </p>

                        <a
                            href="#"
                            className="uppercase text-[12px] tracking-[0.18em] hover:opacity-70 transition"
                        >
                            VIEW ALL ARTICLES →
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 items-start">

                        <div className="relative aspect-square overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1581090700227-1e8c29e7f52c"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <h3 className="uppercase text-[20px] font-bold leading-[1.25] mb-4">
                                    THE FUTURE OF IMMERSIVE EDUCATION WITH XR
                                </h3>

                                <p className="text-[15px] leading-[1.6] text-white/90">
                                    Doom Industries immersive technologies enable educational institutions
                                    to transform traditional classrooms into interactive learning
                                    environments. Using spatial computing and XR simulation systems,
                                    students can explore complex subjects through hands-on
                                    experiences rather than passive theoretical instruction.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[350px] md:h-[500px] overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1508610048659-a06b669e3321"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-12 left-10 right-10 text-white">
                                <h3 className="uppercase text-[22px] font-bold leading-[1.2] mb-6">
                                    HOW SIMULATION TECHNOLOGY IS CHANGING PROFESSIONAL TRAINING
                                </h3>

                                <p className="text-[16px] leading-[1.6] text-white/90">
                                    Simulation-based training allows professionals to practice
                                    complex operations in safe digital environments. Doom Industries
                                    cockpit simulators and immersive XR systems provide realistic
                                    training scenarios that help users develop critical skills,
                                    improve decision-making, and prepare for real-world challenges.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[500px] overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-12 left-10 right-10 text-white">
                                <p className="uppercase text-[11px] tracking-[0.15em] mb-5 text-white/80">
                                    DOOM INDUSTRIES TECHNOLOGY
                                </p>

                                <h3 className="uppercase text-[22px] font-bold leading-[1.2] mb-6">
                                    REALM: BUILDING COLLABORATIVE XR LEARNING WORLDS
                                </h3>

                                <p className="text-[16px] leading-[1.6] text-white/90">
                                    REALM is Doom Industries’ immersive platform designed to support
                                    multi-user XR environments where learners, instructors, and
                                    teams can interact inside shared digital worlds. By combining
                                    spatial computing with real-time collaboration tools, REALM
                                    creates powerful environments for training, simulation,
                                    and knowledge sharing.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section> */}
      <Footer />
    </div>
  );
}

import React from "react";
import HeroVideo from "../../components/ProductSubPageComponents/HeroVideo";
import Navbar from "../../components/NewNavbar";
import Footer from "../../components/NewFooter";
import TalkToSalesCTA from "../../components/TalkToSalesCTA";
import fullImg from "../../assets/casualDAS.png";

import img from "../../assets/sss.png";
import img1 from "../../assets/ssr.png";
import img2 from "../../assets/realmback.png";
import img3 from "../../assets/sss.png";
import img4 from "../../assets/rrr.png";
import Boximg from "../../assets/RealmBox.jpeg";
import { useRef, useState } from "react";
import poster from "../../assets/homeRealm.png";
import { useNavigate } from "react-router-dom";
const Product2 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const gridRef = useRef(null);
  const xrGlassesRef = useRef(null);
  const workspaceRef = useRef(null);
  const computePodRef = useRef(null);
  const simulationRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <section className="w-full bg-white text-black min-h-[60vh] flex items-end px-4 lg:px-16 py-8">
        <div className="w-full">
          {/* TITLE AREA */}
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] text-gray-600 mb-4">
              SPATIAL COMPUTING SYSTEM
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight">
              Portable XR Spatial Computer
            </h1>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {/* Label */}
            <div className="text-xs tracking-wider text-gray-600">
              IMMERSIVE COMPUTING
            </div>

            {/* Description */}
            <div className="text-sm text-gray-700 leading-relaxed max-w-[320px]">
              REALM is Doom Industries' portable spatial computing system
              combining lightweight XR glasses with a pocket-sized compute pod.
              It enables immersive workspaces, simulation design, and
              professional workflows anywhere without bulky hardware or
              traditional desktop setups.
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 text-xs tracking-wide">
              <a
                onClick={() => scrollToSection(xrGlassesRef)}
                className="hover:underline cursor-pointer"
              >
                XR Glasses
              </a>

              <a
                onClick={() => scrollToSection(workspaceRef)}
                className="hover:underline cursor-pointer"
              >
                Spatial Workspace
              </a>

              <a
                onClick={() => scrollToSection(computePodRef)}
                className="hover:underline cursor-pointer"
              >
                Compute Pod
              </a>

              <a
                onClick={() => scrollToSection(simulationRef)}
                className="hover:underline cursor-pointer"
              >
                Portable Simulation
              </a>
            </div>

            {/* Arrow */}
            <div
              onClick={scrollToGrid}
              className="flex md:justify-end items-center text-3xl cursor-pointer hover:translate-y-1 transition"
            >
              ↓
            </div>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src={img4}
          alt="Fullscreen"
          className="block w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/60" /> */}

        <div className="relative z-10 h-full flex items-end">
          <div className="w-full px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-7xl">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                {/* REALM */}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={xrGlassesRef}
        className="bg-white py-16 sm:py-24 lg:py-[140px]"
      >
        <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 lg:gap-[100px] px-6 sm:px-10 lg:px-16">
          {/* IMAGE */}
          <div className="w-full lg:w-[58%]">
            <img
              src={img2}
              alt="Realm XR Glasses"
              className="h-[300px] sm:h-[420px] lg:h-[520px] w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-[42%]">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
              REALM
            </h2>

            <ul className="mt-6 space-y-4 text-[15px] text-gray-700 leading-relaxed">
              <li>
                {" "}
                Portable spatial computer with lightweight XR glasses and pocket
                compute pod.
              </li>

              <li>
                {" "}
                Enables desktop-level creativity, simulation design, and
                immersive training anywhere.
              </li>

              <li>
                {" "}
                Ideal for creators, engineers, designers, defense operators, and
                entertainment professionals.
              </li>

              {/* <li>• XR glasses + compact compute pod deliver crisp 90Hz visuals with precise spatial tracking.</li>

                            <li>• Supports cockpit simulations, drone command systems, and advanced 3D modeling workflows.</li>

                            <li>• Native compatibility with major simulation platforms and live analytics tools.</li>

                            <li>• Cable-free portable system designed for backpack deployment.</li>

                            <li>• Full system setup and operational readiness in under 3 minutes.</li> */}
            </ul>
          </div>
        </div>
      </section>

      {/* <section className="w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
                <img
                    src={fullImg}
                    alt="Fullscreen"
                    className="block w-full h-full object-cover"
                />
            </section> */}
      <section
        ref={workspaceRef}
        className="bg-white px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]"
      >
        <div className="mx-auto max-w-[450px] text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-light leading-snug text-black">
            The Future of Portable Spatial Computing
          </h2>

          {/* Two-line content */}
          <p className="mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-[15px] leading-relaxed text-gray-600">
            Lightweight XR glasses and a pocket-sized compute pod deliver
            powerful desktop-class spatial computing anywhere. Experience
            immersive 4K visuals, wide field of view, and a portable workspace
            designed to move with you.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/spatial-os")}
            className="mt-10 sm:mt-14 lg:mt-20 
      inline-flex items-center justify-center gap-4 
      bg-black 
      px-6 sm:px-8 lg:px-10 
      py-3 sm:py-3.5 lg:py-4 
      text-xs sm:text-[13px] 
      tracking-widest text-white 
      hover:bg-gray-900 transition 
      w-full sm:w-auto cursor-pointer"
          >
            LEARN MORE ABOUT SPATIAL COMPUTING
            <span className="text-base sm:text-lg">→</span>
          </button>
        </div>
      </section>
      <section className="w-full bg-white py-16 sm:py-24 lg:py-36">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-28 items-start">
          {/* LEFT SIDE — CUSTOMER LIST */}
          <div>
            <p className="text-xs tracking-widest text-gray-500 mb-6 sm:mb-8 lg:mb-10 uppercase">
              Designed for Creators and Innovators
            </p>

            <ul className="space-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] font-light">
              {[
                "Developers & Engineers",
                "3D Designers & Creators",
                "Content Creators",
                "Remote Professionals",
                "Researchers & Innovators",
                "Tech Enthusiasts",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-gray-400 hover:text-black transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14">
            {/* VIDEO */}
            <div className="relative w-full aspect-[16/9] min-h-[220px] sm:min-h-[320px] lg:min-h-[520px] overflow-hidden bg-black">
              <video
                src={"/RealmHero.mp4"}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            {/* QUOTE TEXT */}
            <div className="max-w-3xl">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] leading-[1.25] font-light italic text-black mb-4">
                “Working with multiple floating development windows in spatial
                space has completely changed how I manage complex projects.”
              </p>

              {/* <p className="text-xs sm:text-sm tracking-widest uppercase text-gray-600 mb-6">
                                BARTEK PANASEWICZ — VP TRAINING SYSTEMS, LAND
                            </p> */}

              {/* <button className="inline-flex items-center justify-center gap-1 
                                           bg-black text-white 
                                           px-6 sm:px-8 
                                           py-3 sm:py-4 
                                           text-xs sm:text-sm 
                                           tracking-wide 
                                           hover:opacity-90 transition 
                                           w-full sm:w-auto">
                                READ MORE →
                            </button> */}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
                <img
                    src={poster}
                    alt="XR Headsets"
                    className="block w-full h-full object-cover"
                />
            </section> */}
      {/* COMPUTE POD + PORTABLE SIMULATION */}
      <section
        ref={computePodRef}
        className="bg-white py-16 sm:py-24 lg:py-[140px]"
      >
        <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 lg:gap-[100px] px-6 sm:px-10 lg:px-16">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[58%]">
            <img
              src={img1}
              alt="REALM Compute Pod"
              className="h-[300px] sm:h-[420px] lg:h-[520px] w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[42%]">
            <small className="block text-[12px] tracking-widest text-black">
              COMPUTE POD & PORTABLE SIMULATION
            </small>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[40px] font-light leading-tight text-black">
              Run Powerful Simulations Anywhere
            </h2>

            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-gray-700">
              <li> Pocket-sized compute pod with powerful XR processing.</li>

              <li> Instantly create a portable spatial workstation.</li>

              <li> Run immersive simulations and 3D environments anywhere.</li>

              <li> Train, test, and collaborate from any location.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#efefed] px-4 sm:px-6 py-16 sm:py-24 lg:py-[160px]">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light tracking-tight text-black">
            Modes of Your Spatial Computer
          </h2>

          {/* Modes */}
          <div className="mt-12 sm:mt-16 lg:mt-20 space-y-6 text-left max-w-[800px] mx-auto">
            <div className="grid grid-cols-[220px_20px_1fr] gap-4 items-start">
              <h3 className="font-semibold text-black">
                Portable Display Mode
              </h3>
              <span className="text-black">-</span>
              <p className="text-gray-600 leading-[1.7]">
                Use XR glasses as a lightweight personal display for work and
                entertainment.
              </p>
            </div>

            <div className="grid grid-cols-[220px_20px_1fr] gap-4 items-start">
              <h3 className="font-semibold text-black">
                Spatial Workspace Mode
              </h3>
              <span className="text-black">-</span>
              <p className="text-gray-600 leading-[1.7]">
                Create immersive multi-window environments for coding, designing
                and multitasking.
              </p>
            </div>

            {showMore && (
              <>
                <div className="grid grid-cols-[220px_20px_1fr] gap-4 items-start">
                  <h3 className="font-semibold text-black">Simulation Mode</h3>
                  <span className="text-black">-</span>
                  <p className="text-gray-600 leading-[1.7]">
                    Run immersive training and testing environments anywhere.
                  </p>
                </div>

                <div className="grid grid-cols-[220px_20px_1fr] gap-4 items-start">
                  <h3 className="font-semibold text-black">
                    Collaboration Mode
                  </h3>
                  <span className="text-black">-</span>
                  <p className="text-gray-600 leading-[1.7]">
                    Work together in shared spatial environments with remote
                    teams.
                  </p>
                </div>

                <div className="grid grid-cols-[220px_20px_1fr] gap-4 items-start">
                  <h3 className="font-semibold text-black">
                    Entertainment Mode
                  </h3>
                  <span className="text-black">-</span>
                  <p className="text-gray-600 leading-[1.7]">
                    Enjoy immersive movies, games and interactive experiences.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Load More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-12 sm:mt-20 lg:mt-28 
          inline-flex items-center justify-center gap-3 
          bg-black 
          px-6 sm:px-8 lg:px-10 
          py-3 sm:py-3.5 lg:py-4 
          text-xs sm:text-[13px] 
          tracking-widest text-white 
          hover:bg-gray-900 transition 
          w-full sm:w-auto"
          >
            {showMore ? "Show Less" : "Load More"}
            <span className="text-base sm:text-lg">→</span>
          </button>
        </div>
      </section>
      <section className="bg-[#f2f2f2] px-4 sm:px-8 lg:px-20 py-16 sm:py-24 lg:py-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* BLOCK 1 – IMAGE (row-span-2 on desktop only) */}
          <div
            className="group relative lg:row-span-2 min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-cover bg-[position:30%_center] p-6 sm:p-8 text-black transition-colors hover:text-white"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

            <small className="relative z-10 text-[10px] sm:text-[12px] tracking-widest">
              SPATIAL COMPUTING
            </small>
            <h3 className="relative z-10 my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
              LIMITLESS WORKSPACE
              <br />
            </h3>
            <p className="relative z-10 text-xs sm:text-[14px] leading-relaxed text-black group-hover:text-white">
              Turn any environment into a powerful spatial workspace. Open
              multiple floating screens, organize your tools in 3D, and work
              without the limits of traditional monitors.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div
            className="group relative lg:row-span-2 min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-cover bg-center p-6 sm:p-8 text-black hover:text-white"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="absolute inset-0 bg-[#0057ff]/0 transition group-hover:bg-[#0057ff]/75" />

            <small className="relative z-10 text-[10px] sm:text-[12px] tracking-widest">
              POCKET COMPUTE POD
            </small>
            <h3 className="relative z-10 my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
              {/* VARJO-READY */}
              <br />
              POWER ANYWHERE
            </h3>
            <p className="relative z-10 text-xs sm:text-[14px] leading-relaxed text-black group-hover:text-white">
              The compact compute pod delivers desktop-class performance in your
              pocket. Experience powerful processing, multitasking, and graphics
              wherever you go.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer  bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
            <small className="text-[10px] sm:text-[12px]  tracking-widest">
              XR GLASSES
            </small>
            <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
              IMMERSIVE VISUALS
            </h3>
            <p className="text-xs sm:text-[14px] leading-relaxed text-black hover:text-white">
              Lightweight XR glasses provide vibrant 4K visuals, a wide field of
              view, and smooth 90Hz performance for an immersive and comfortable
              experience.
            </p>
          </div>

          {/* BLOCK 4 */}
          <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
            <small className="text-[10px] sm:text-[12px] tracking-widest">
              NATURAL CONTROLS
            </small>
            <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
              INTUITIVE INTERACTION
            </h3>
            <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
              Navigate your spatial workspace using hand gestures, voice
              commands, and a wireless touchpad—no keyboard or mouse required.
            </p>
          </div>

          {/* BLOCK 5 */}
          <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
            <small className="text-[10px] sm:text-[12px] tracking-widest">
              PORTABLE DESIGN
            </small>
            <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
              WORK FROM ANYWHERE
            </h3>
            <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
              Designed for mobility, the system is lightweight and comfortable
              for long sessions, with 6–8 hours of battery life for
              uninterrupted productivity.
            </p>
          </div>

          {/* BLOCK 6 */}
          <div className="min-h-[260px] sm:min-h-[300px] lg:min-h-[325px] cursor-pointer bg-white p-6 sm:p-8 transition hover:bg-[#0057ff] hover:text-white">
            <small className="text-[10px] sm:text-[12px] tracking-widest">
              PRODUCT DETAILS
            </small>
            <h3 className="my-4 text-lg sm:text-[20px] lg:text-[22px] leading-snug">
              TECHNICAL SPECIFICATIONS
            </h3>
            <p className="text-xs sm:text-[14px] leading-relaxed text-[#444] hover:text-white">
              Explore the full capabilities of the system, including performance
              details, connectivity, and hardware specifications.
            </p>
          </div>
        </div>
      </section>
      <TalkToSalesCTA />
      <Footer />
    </div>
  );
};

export default Product2;

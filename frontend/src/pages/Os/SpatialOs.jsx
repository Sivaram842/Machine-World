import React from "react";
import { useRef, useState } from "react";
import Navbar from "../../components/NewNavbar";
import Header from "../../components/Header";
import Footer from "../../components/NewFooter";
import spos from "../../assets/spatialOS.jpeg";
import spos1 from "../../assets/spatialOS1.webp";
import spos2 from "../../assets/spatialapplication.webp";
import spos3 from "../../assets/worldmesh.png";
import { useNavigate } from "react-router-dom";

const SpatialOs = () => {
  const gridRef = useRef(null);
  const spatialAppsRef = useRef(null);
  const xrInteractionRef = useRef(null);
  const worldMeshRef = useRef(null);
  const simulationRef = useRef(null);
  const navigate = useNavigate();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar />
      <section className="w-full bg-white text-black min-h-[60vh] flex items-end px-4 lg:px-16 py-8">
        <div className="w-full">
          {/* TITLE AREA */}
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] text-gray-600 mb-4">
              SPATIAL COMPUTING PLATFORM
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight">
              Spatial OS
            </h1>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {/* Label */}
            <div className="text-xs tracking-wider text-gray-600">
              IMMERSIVE XR SYSTEMS
            </div>

            {/* Description */}
            <div className="text-sm text-gray-700 leading-relaxed max-w-[320px]">
              Spatial OS enables enterprise applications to run in a 3D spatial
              computing environment, where users interact naturally using XR
              devices. It transforms traditional interfaces into immersive
              digital workspaces.
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 text-xs tracking-wide">
              <a
                onClick={() => scrollToSection(spatialAppsRef)}
                className="hover:underline cursor-pointer"
              >
                Spatial Applications
              </a>

              <a
                onClick={() => scrollToSection(xrInteractionRef)}
                className="hover:underline cursor-pointer"
              >
                XR Interaction
              </a>

              <a
                onClick={() => scrollToSection(worldMeshRef)}
                className="hover:underline cursor-pointer"
              >
                World Mesh
              </a>

              <a
                onClick={() => scrollToSection(simulationRef)}
                className="hover:underline cursor-pointer"
              >
                Simulation Systems
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
      <header className="relative w-full min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={"/spatialherovideo.mp4"}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-end min-h-[75vh] sm:min-h-[90vh] lg:min-h-screen">
          <div className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-24">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-8">
              <div className="max-w-2xl">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  Spatial OS
                </h1>

                <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  The Future Of Immersive Defence & Enterprise Systems
                </p>
              </div>

              {/* RIGHT */}
              <div className="max-w-xl">
                {/* <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed text-left">
                                    Doom Industries Spatial OS enables enterprise applications to run in interactive
                                    spatial environments where users can launch and interact with apps in 3D
                                    using VR, MR, and XR technologies.
                                </p> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-white text-black">
        {/* ================= SECTION 1 - HERO ================= */}
        <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
          <img
            src={spos}
            alt="Doom Industries Spatial OS"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
            <div className="max-w-[900px] flex flex-col items-center">
              <h1
                className="text-white uppercase font-extrabold 
      text-[22px] sm:text-[28px] md:text-[40px] lg:text-[52px]
      leading-[1.15] md:leading-[1.1] tracking-tight"
              >
                The Core Platform <br />
                For Doom Industries XR Systems
              </h1>

              <p className="mt-6 max-w-[610px] text-gray-100 text-[16px] leading-[28px]">
                Doom Industries Spatial OS runs enterprise and simulation
                applications inside immersive 3D spatial environments by
                connecting XR hardware, sensors, and rendering engines.
              </p>
              <p className="mt-6 max-w-[560px] text-gray-100 text-[16px] leading-[28px]">
                Generate world meshes and interact with apps using spatial
                controls in real spaces.
              </p>
            </div>
          </div>
        </section>
        {/* ================= SPATIAL APPLICATIONS + INTERACTION ================= */}
        <section ref={spatialAppsRef} className="py-20 md:py-28 px-6 md:px-16">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2
                className="uppercase font-extrabold 
      text-[22px] sm:text-[26px] md:text-[34px] 
      leading-[1.2] tracking-tight"
              >
                Spatial Applications <br />
                And Interaction
              </h2>

              <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">
                <li>
                  {" "}
                  Run enterprise software as spatial applications inside
                  immersive 3D workspaces.
                </li>

                <li>
                  {" "}
                  Organize dashboards, analytics, and collaboration tools as
                  floating spatial panels.
                </li>

                <li>
                  {" "}
                  Manage multiple applications simultaneously in a natural
                  multi-window environment.
                </li>

                <li>
                  {" "}
                  Interact with applications using spatial controls like hover,
                  follow mode, and theatre view.
                </li>
              </ul>

              <button
                className="mt-10 bg-black text-white px-10 py-4 
      uppercase tracking-wider text-sm
      transition-all duration-300
      hover:bg-[#1117C7]"
              >
                Explore Spatial Features →
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src={spos2}
                alt="Spatial Applications and Interaction"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
        {/* 
               
                <section className="py-20 md:py-28 px-6 text-center">
                    <div className="max-w-[700px] mx-auto">

                        <h2 className="uppercase font-extrabold 
               text-[22px] sm:text-[26px] md:text-[34px] 
               leading-[1.2] tracking-tight">
                            Enterprise-<br />
                            Grade Security,<br />
                            By Design.
                        </h2>

                        <p className="mt-6 text-gray-700 leading-[28px]">
                            Security isn’t an afterthought in Varjo Base—it’s built into <br />
                            the core. From fully local log file storage to optional <br />
                            software updates, every detail puts you in control.
                        </p>

                        <p className="mt-6 text-gray-700 leading-[28px]">
                            Updates are digitally signed for authenticity, and no data is <br />
                            ever sent automatically. Developed under a secure <br />
                            Software Development Lifecycle (SDLC), Varjo Base <br />
                            incorporates mandatory code reviews, static code <br />
                            analysis, and continuous vulnerability scanning. Varjo <br />
                            Base ensures your XR experience stays secure and under<br />
                            your control, giving you peace of mind in sensitive <br />
                            environments and everyday use.
                        </p>

                        <button className="mt-10 bg-black text-white px-10 py-4 
                             uppercase tracking-wider text-sm
                             transition-all duration-300
                             hover:bg-[#1117C7]">
                            Download Varjo Base →
                        </button>

                    </div>
                </section> */}

        {/* ================= WORLD MESH ================= */}
        <section
          ref={worldMeshRef}
          className="py-20 md:py-28 px-6 md:px-16 bg-[#f3f3f3]"
        >
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
            <img
              src={spos3}
              alt="Spatial OS World Mesh"
              className="w-full object-cover"
            />

            {/* RIGHT CONTENT */}
            <div>
              <h2
                className="uppercase font-extrabold 
      text-[22px] sm:text-[26px] md:text-[34px] 
      leading-[1.2] tracking-tight"
              >
                World Mesh <br />
                Spatial Mapping <br />
                Technology
              </h2>

              <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">
                <li>
                  {" "}
                  Scan and reconstruct real-world environments as detailed 3D
                  spatial meshes.
                </li>

                <li>
                  {" "}
                  Place and interact with spatial applications on physical
                  surfaces like walls, desks, and tables.
                </li>

                <li>
                  {" "}
                  Anchor digital objects with spatial persistence inside
                  mixed-reality environments.
                </li>
              </ul>

              {/* <button className="mt-10 bg-black text-white px-10 py-4 
      uppercase tracking-wider text-sm
      transition-all duration-300
      hover:bg-[#1117C7]">
                                Learn About World Mesh →
                            </button> */}
            </div>
          </div>
        </section>

        <section ref={simulationRef} className="py-24 px-6 bg-[#f3f3f3]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              {/* LEFT VIDEO */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover"
              >
                <source src="/spatialVideo.mp4" type="video/mp4" />
              </video>

              {/* RIGHT CONTENT */}
              <div>
                <h2
                  className="uppercase font-extrabold 
          text-[22px] sm:text-[26px] md:text-[34px] 
          leading-[1.2] tracking-tight"
                >
                  Spatial Productivity Workspace
                </h2>

                <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">
                  <li>
                    Use real productivity tools inside immersive spatial
                    workspaces with large floating interfaces.
                  </li>
                  <li>
                    Interact with applications using XR pointers, virtual
                    keyboards, and spatial UI controls.
                  </li>
                </ul>

                <div className="mt-8 flex gap-6 flex-wrap">
                  {/* <button
                                        className="bg-black text-white px-8 py-4 
            uppercase text-sm transition-all 
            hover:bg-[#1117C7]"
                                    >
                                        Spatial OS Features →
                                    </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5 ================= */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2
              className="uppercase font-extrabold 
    text-[22px] sm:text-[26px] md:text-[34px] 
    leading-[1.2] tracking-tight"
            >
              Continuous Innovation <br />
              Real-World Impact
            </h2>

            <ul className="mt-6 space-y-3 text-gray-700 text-[15px]">
              <li>
                {" "}
                Advancing spatial computing for defence, enterprise, and
                research applications.
              </li>

              <li>
                {" "}
                Multidisciplinary teams across hardware, software, design, and
                XR development driving innovation.
              </li>
            </ul>

            <button
              onClick={() => navigate("/resources/casestudies")}
              className="mt-10 bg-black text-white px-10 py-4 
    uppercase text-sm transition-all 
    hover:bg-[#1117C7] cursor-pointer"
            >
              Explore Our Technologies →
            </button>
          </div>
        </section>

        {/* ================= SECTION 6 - LATEST ARTICLES ================= */}
        {/* ================= LATEST NEWS AND INSIGHTS ================= */}
        <section className="bg-[#f3f3f3] py-20 md:py-40">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            {/* HEADER ROW */}
            <div
              className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] 
                    mb-12 md:mb-24 items-center gap-6"
            >
              {/* 
                            <h2 className="uppercase tracking-[3px] text-xs font-medium">
                                Latest News and Insights
                            </h2> */}

              {/* <span className="uppercase tracking-[3px] text-xs 
                       transition-colors duration-300 
                       hover:text-[#1117C7] cursor-pointer">
                                All Articles →
                            </span> */}

              <div></div>
            </div>

            {/* NEWS GRID */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 
                    lg:grid-cols-[1.6fr_1fr_1fr] 
                    gap-8 md:gap-12 lg:gap-16"
            >
              {/* LARGE FEATURED CARD */}
              <div
                className="group bg-[#e6e6e6] 
                      p-8 sm:p-12 lg:p-20 
                      min-h-[320px] sm:min-h-[420px] lg:h-[520px] 
                      flex flex-col justify-between 
                      transition-all duration-300 
                      hover:bg-[#1117C7] cursor-pointer"
              >
                {/* <p className="text-sm text-gray-700 
                      group-hover:text-white 
                      transition-colors duration-300">
                                    February 26, 2026
                                </p> */}

                <div>
                  <h3
                    className="uppercase font-extrabold 
                         text-[16px] sm:text-[18px] md:text-[20px] 
                         leading-6 md:leading-7 
                         text-black 
                         group-hover:text-white 
                         transition-colors duration-300"
                  >
                    Doom Industries Develops Advanced XR Cockpit Simulator For
                    Defence Training
                  </h3>

                  <p
                    className="mt-4 sm:mt-6 text-gray-700 
                        text-[13px] sm:text-[14px] 
                        leading-5 md:leading-6 
                        group-hover:text-white 
                        transition-colors duration-300"
                  >
                    Doom Industries introduces a next-generation immersive
                    cockpit simulator designed to reduce pilot training costs
                    while maintaining high realism.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                className="group bg-[#e6e6e6] 
                      p-8 sm:p-10 lg:p-16 
                      min-h-[320px] sm:min-h-[420px] lg:h-[520px] 
                      flex flex-col justify-between 
                      transition-all duration-300 
                      hover:bg-[#1117C7] cursor-pointer"
              >
                {/* <p className="text-sm text-gray-700 
                      group-hover:text-white 
                      transition-colors duration-300">
                                    January 21, 2026
                                </p> */}

                <h3
                  className="uppercase font-extrabold 
                       text-[15px] sm:text-[17px] md:text-[18px] 
                       leading-6 md:leading-7 
                       text-black 
                       group-hover:text-white 
                       transition-colors duration-300"
                >
                  Doom Industries Expands XR Development For Enterprise And
                  Education
                </h3>
              </div>

              {/* CARD 3 */}
              <div
                className="group bg-[#e6e6e6] 
                      p-8 sm:p-10 lg:p-16 
                      min-h-[320px] sm:min-h-[420px] lg:h-[520px] 
                      flex flex-col justify-between 
                      transition-all duration-300 
                      hover:bg-[#1117C7] cursor-pointer"
              >
                {/* 
                                <p className="text-sm text-gray-700 
                      group-hover:text-white 
                      transition-colors duration-300">
                                    December 3, 2025
                                </p> */}

                <h3
                  className="uppercase font-extrabold 
                       text-[15px] sm:text-[17px] md:text-[18px] 
                       leading-6 md:leading-7 
                       text-black 
                       group-hover:text-white 
                       transition-colors duration-300"
                >
                  The Future Of Spatial Computing In Defence And Simulation
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SpatialOs;

import React from "react";
import Navbar from "../../components/NewNavbar";
import Footer from "../../components/NewFooter";
import img from "../../assets/DAS1.jpeg";
import heroImage from "../../assets/XR-4-2.png";
import newsletterBg from "../../assets/DAS.jpeg";
import bookImg from "../../assets/Book.jpeg";
const resources = [
  {
    id: 1,
    title: "STATE OF XR IN SIMULATION TRAINING INDUSTRY REPORT",
    type: "REPORT",
    description:
      "Based on survey insights from over a hundred system integrators and training professionals, this report offers the clearest snapshot of the XR training landscape.",
    image: bookImg,
  },
  {
    id: 2,
    title: "A GUIDE TO ADVANCED EYE TRACKING WITH VIRTUAL AND MIXED REALITY",
    type: "E-BOOK",
    description:
      "Looking for a better way to study human reactions or performance? Discover how you can turn human gaze into actionable insights.",
    image: bookImg,
  },
  {
    id: 3,
    title: "BEYOND THE BOOKS - A GUIDE TO VR/XR FOR ACADEMIC USE",
    type: "E-BOOK",
    description:
      "Leading universities worldwide are adopting virtual and mixed reality technologies to educate and engage students.",
    image: bookImg,
  },

  {
    id: 4,
    title: "STATE OF XR IN SIMULATION TRAINING INDUSTRY REPORT",
    type: "REPORT",
    description:
      "Based on survey insights from over a hundred system integrators and training professionals, this report offers the clearest snapshot of the XR training landscape.",
    image: bookImg,
  },
  {
    id: 5,
    title: "A GUIDE TO ADVANCED EYE TRACKING WITH VIRTUAL AND MIXED REALITY",
    type: "E-BOOK",
    description:
      "Looking for a better way to study human reactions or performance? Discover how you can turn human gaze into actionable insights.",
    image: bookImg,
  },
  {
    id: 6,
    title: "BEYOND THE BOOKS - A GUIDE TO VR/XR FOR ACADEMIC USE",
    type: "E-BOOK",
    description:
      "Leading universities worldwide are adopting virtual and mixed reality technologies to educate and engage students.",
    image: bookImg,
  },
];

const resources2 = [
  {
    id: 1,
    title: "STATE OF XR IN SIMULATION TRAINING INDUSTRY REPORT",
    type: "REPORT",
    description:
      "Based on survey insights from over a hundred system integrators and training professionals, this report offers the clearest snapshot of the XR training landscape.",
    image: bookImg,
  },
  {
    id: 2,
    title: "A GUIDE TO ADVANCED EYE TRACKING WITH VIRTUAL AND MIXED REALITY",
    type: "E-BOOK",
    description:
      "Looking for a better way to study human reactions or performance? Discover how you can turn human gaze into actionable insights.",
    image: bookImg,
  },
  {
    id: 3,
    title: "BEYOND THE BOOKS - A GUIDE TO VR/XR FOR ACADEMIC USE",
    type: "E-BOOK",
    description:
      "Leading universities worldwide are adopting virtual and mixed reality technologies to educate and engage students.",
    image: bookImg,
  },

  {
    id: 4,
    title: "STATE OF XR IN SIMULATION TRAINING INDUSTRY REPORT",
    type: "REPORT",
    description:
      "Based on survey insights from over a hundred system integrators and training professionals, this report offers the clearest snapshot of the XR training landscape.",
    image: bookImg,
  },
  {
    id: 5,
    title: "A GUIDE TO ADVANCED EYE TRACKING WITH VIRTUAL AND MIXED REALITY",
    type: "E-BOOK",
    description:
      "Looking for a better way to study human reactions or performance? Discover how you can turn human gaze into actionable insights.",
    image: bookImg,
  },
  {
    id: 6,
    title: "BEYOND THE BOOKS - A GUIDE TO VR/XR FOR ACADEMIC USE",
    type: "E-BOOK",
    description:
      "Leading universities worldwide are adopting virtual and mixed reality technologies to educate and engage students.",
    image: bookImg,
  },
  {
    id: 7,
    title: "STATE OF XR IN SIMULATION TRAINING INDUSTRY REPORT",
    type: "REPORT",
    description:
      "Based on survey insights from over a hundred system integrators and training professionals, this report offers the clearest snapshot of the XR training landscape.",
    image: bookImg,
  },
  {
    id: 8,
    title: "A GUIDE TO ADVANCED EYE TRACKING WITH VIRTUAL AND MIXED REALITY",
    type: "E-BOOK",
    description:
      "Looking for a better way to study human reactions or performance? Discover how you can turn human gaze into actionable insights.",
    image: bookImg,
  },
  {
    id: 9,
    title: "BEYOND THE BOOKS - A GUIDE TO VR/XR FOR ACADEMIC USE",
    type: "E-BOOK",
    description:
      "Leading universities worldwide are adopting virtual and mixed reality technologies to educate and engage students.",
    image: bookImg,
  },
];
const Resources = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-[#f3f3f3] h-16 md:h-24"></div>
      <section className="bg-[#f3f3f3] min-h-screen ">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
          {/* Main Heading */}
          <h1 className="text-[30px] md:text-[48px] font-bold leading-none text-black mb-5 scale-x-130 origin-left">
            RESOURCES
          </h1>

          {/* Description */}
          <p className="mt-20 text-lg text-gray-700 max-w-2xl leading-relaxed">
            Watch our webinars, download e-books and whitepapers about VR/XR and
            browse our latest articles. You can find all of our resources here.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#f3f3f3] px-6 md:px-16 py-16 md:py-24">
        <div
          className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        grid-rows-[minmax(360px,1fr)_minmax(360px,1fr)]
        gap-8
      "
        >
          {/* BLOCK 1 – TALL IMAGE */}
          <div
            className="md:row-span-2 min-h-[740px]
          relative bg-black text-white p-10 flex flex-col justify-end bg-cover bg-center transition-all duration-300
        hover:bg-blue-700 hover:text-white
        cursor-pointer"
            style={{ backgroundImage: "url(/explore/computers.jpg)" }}
          >
            <span className="text-xs tracking-[0.25em] uppercase mb-4">
              Computers
            </span>
            <h2 className="text-3xl font-semibold leading-tight mb-4">
              VARJO-READY
              <br />
              COMPUTERS
            </h2>
            <p className="text-sm text-gray-200 max-w-sm">
              Varjo headsets are tethered devices, compatible with a broad range
              of Windows 10 and 11 computers. Browse our recommended models
              here. →
            </p>
          </div>

          {/* BLOCK 2 */}
          <div
            className="md:row-span-2 min-h-[740px] bg-gray-100 p-10 flex flex-col justify-end transition-all duration-300
        hover:bg-blue-700 hover:text-white
        cursor-pointer"
          >
            <span className="text-xs tracking-[0.25em] uppercase mb-4">
              System
            </span>
            <h2 className="text-2xl font-semibold leading-tight mb-4">
              SYSTEM
              <br />
              REQUIREMENTS
            </h2>
            <p className="text-sm text-gray-600">
              Find the minimum requirements for running the XR-4 Series. →
            </p>
          </div>

          {/* BLOCK 3 */}
          <div
            className="min-h-[360px] relative bg-cover bg-center text-white p-10 flex flex-col justify-end transition-all duration-300
        hover:bg-blue-700 hover:text-white
        cursor-pointer"
            style={{ backgroundImage: "url(/explore/accessories.jpg)" }}
          >
            <span className="text-xs tracking-[0.25em] uppercase mb-4">
              Accessories
            </span>
            <h2 className="text-2xl font-semibold leading-tight mb-4">
              COMPLETE THE
              <br />
              EXPERIENCE
            </h2>
            <p className="text-sm text-gray-200">
              Extended cables, controllers and more. →
            </p>
          </div>

          {/* BLOCK 4 */}
          <div
            className="min-h-[360px] bg-[#d9dcef] p-10 flex flex-col justify-end transition-all duration-300
        hover:bg-blue-700 hover:text-white
        cursor-pointer"
          >
            <span className="text-xs tracking-[0.25em] uppercase mb-4">
              Varjo Alpha
            </span>
            <h2 className="text-2xl font-semibold leading-tight mb-4">
              BRING YOUR XR
              <br />
              VISION TO LIFE
            </h2>
            <p className="text-sm text-gray-700">
              High-performance XR systems demand precision. →
            </p>
          </div>

          {/* BLOCK 5 */}
          <div
            className="min-h-[360px] bg-gray-100 p-10 flex flex-col justify-end transition-all duration-300
        hover:bg-blue-700 hover:text-white
        cursor-pointer"
          >
            <span className="text-xs tracking-[0.25em] uppercase mb-4">
              Software
            </span>
            <h2 className="text-2xl font-semibold leading-tight mb-4">
              VARJO-READY
              <br />
              SOFTWARE
            </h2>
            <p className="text-sm text-gray-600">
              See all Varjo-ready software here. →
            </p>
          </div>

          {/* BLOCK 6 */}
          <div
            className="min-h-[360px] bg-gray-100 p-10 flex flex-col justify-end transition-all duration-300
        hover:bg-blue-700 hover:text-white
        cursor-pointer"
          >
            <span className="text-xs tracking-[0.25em] uppercase mb-4">
              Varjo Base
            </span>
            <h2 className="text-2xl font-semibold leading-tight mb-4">
              TAKE YOUR HEADSET
              <br />
              EXPERIENCE TO NEW
              <br />
              HEIGHTS
            </h2>
            <p className="text-sm text-gray-600">
              Unlock the full XR experience. →
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f3] px-6 py-[160px]">
        <div className="mx-auto max-w-[500px] text-center py-16 space-y-6">
          {/* Heading */}
          <h2 className="text-[30px] md:text-[48px] font-bold leading-tight text-black scale-y-90 scale-x-110 origin-center">
            A complete package for
            <br />
            training and simulation.
          </h2>

          {/* Paragraph 1 */}
          <p className="text-[15px] leading-relaxed text-gray-600">
            Engineered for long-duration use, each headset offers automatic IPD
            adjustment, glasses compatibility, and integrated DTS 3D spatial
            audio with noise-cancelling microphones for seamless communication
            during multi-trainee sessions.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[15px] leading-relaxed text-gray-600">
            Integrated 200 Hz eye-tracking cameras provide detailed analytics
            for post-training performance review and research.
          </p>
        </div>
      </section>
      <section className="bg-[#f3f3f3] px-16 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {resources.map((item) => (
            <div
              key={item.id}
              className="group bg-[#e5e5e5] p-10 transition-all duration-300 
                       hover:bg-blue-700 cursor-pointer flex flex-col"
            >
              {/* Title */}
              <h3
                className="text-sm tracking-widest uppercase mb-8 
                           group-hover:text-white"
              >
                {item.title}
              </h3>

              {/* Image */}
              <div className="flex justify-center mb-8">
                <img
                  src={item.image}
                  alt="resource"
                  className="w-[240px] h-[300px] object-cover"
                />
              </div>

              {/* Type */}
              <p
                className="uppercase text-xs mb-4 
                          group-hover:text-white"
              >
                {item.type}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed text-gray-700 
                          group-hover:text-white"
              >
                {item.description}
              </p>

              {/* Arrow */}
              <span className="mt-6 text-lg group-hover:text-white">→</span>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f3f3f3] py-[140px]">
        <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start gap-10 lg:gap-[100px] px-6 md:px-16">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[58%]">
            <img
              src={img}
              alt="Immersion display"
              className="h-[520px] w-full object-cover"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="w-full lg:w-[42%]">
            <small className="block text-[12px] tracking-widest text-black">
              SEE EVERY MISSION DETAIL
            </small>

            <h2 className="mt-6 text-[40px] font-light leading-tight text-black">
              360 degrees of immersion.
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
              Pilot-grade 4K-per-eye mini-LED displays with local dimming
              deliver the clarity, contrast, and depth perception required for
              authentic mission rehearsal.
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
              A 120° × 105° field of view achieves full binocular vision, while
              28 million pixels of visual precision recreate environments with
              unprecedented realism, allowing trainees to perceive detail
              exactly as they would in the real world.
            </p>
            <div className=" bg-[#f3f3f3] h-16 md:h-24"></div>
            <button className="inline-flex items-center gap-1 bg-black text-white px-8 py-4 text-sm tracking-wide hover:opacity-90 transition">
              READ CASE STUDY →
            </button>
          </div>
        </div>
      </section>
      <section
        className="relative min-h-[110vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-start">
          <div className="pt-28 pl-16 max-w-lg text-white">
            {/* Small Label */}
            <p className="text-xs tracking-widest uppercase mb-5">TECH SPECS</p>

            {/* Heading */}
            <h1 className="text-[34px] md:text-[52px] font-semibold leading-tight mb-5">
              DOWNLOAD <br />
              PRODUCT BOOK
            </h1>

            {/* Description */}
            <p className="text-base text-gray-300 mb-8">
              Get detailed Varjo headset tech specs directly to your inbox.
            </p>

            {/* Button */}
            <button
              className="border border-white px-6 py-3 uppercase tracking-wide text-xs 
                             hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
            >
              DOWNLOAD PRODUCT BOOK
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f3] px-6 py-[160px]">
        <div className="mx-auto max-w-[500px] text-center py-16 space-y-6">
          {/* Heading */}
          <h2 className="text-[30px] md:text-[48px] font-extrabold leading-tight text-black scale-y-90 scale-x-110 origin-center">
            DOOM INDUSTRIES WEBINARS
          </h2>

          {/* Paragraph 1 */}
          <p className="text-[15px] leading-relaxed text-gray-600">
            Engineered for long-duration use, each headset offers automatic IPD
            adjustment, glasses compatibility, and integrated DTS 3D spatial
            audio with noise-cancelling microphones for seamless communication
            during multi-trainee sessions.
          </p>

          {/* Paragraph 2 */}
          <p className="text-[15px] leading-relaxed text-gray-600">
            Integrated 200 Hz eye-tracking cameras provide detailed analytics
            for post-training performance review and research.
          </p>
          <div className=" bg-[#f3f3f3] h-16 md:h-24"></div>
          <button className="inline-flex items-center gap-1 bg-black text-white px-8 py-4 text-sm tracking-wide hover:opacity-90 transition">
            SEE ALL IN YOUTUBE →
          </button>
        </div>
      </section>
      <div>
        <section className="bg-[#f3f3f3] px-16 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {resources2.map((item) => (
              <div
                key={item.id}
                className="group bg-[#e5e5e5] p-10 transition-all duration-300 
                       hover:bg-blue-700 cursor-pointer flex flex-col"
              >
                {/* Title */}
                <h3
                  className="text-sm tracking-widest uppercase mb-8 
                           group-hover:text-white"
                >
                  {item.title}
                </h3>

                {/* Image */}
                <div className="flex justify-center mb-8">
                  <img
                    src={item.image}
                    alt="resource"
                    className="w-[240px] h-[300px] object-cover"
                  />
                </div>

                {/* Type */}
                <p
                  className="uppercase text-xs mb-4 
                          group-hover:text-white"
                >
                  {item.type}
                </p>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed text-gray-700 
                          group-hover:text-white"
                >
                  {item.description}
                </p>

                {/* Arrow */}
                <span className="mt-6 text-lg group-hover:text-white">→</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className=" bg-[#f3f3f3] h-16 md:h-24"></div>
      <section className="bg-[#e5e5e5] py-24">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* LEFT SIDE — VIDEO */}
            <div>
              <video
                src={"/DAS2.mp4"}
                autoPlay
                muted
                loop
                className="w-full h-[260px] sm:h-[350px] lg:h-[420px] object-cover"
              />
            </div>

            {/* RIGHT SIDE — CONTENT */}
            <div className="max-w-md">
              {/* Small Label */}
              <p className="text-xs tracking-widest uppercase mb-6 text-black">
                VARJO DOCUMENTARY
              </p>

              {/* Heading */}
              <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-4">
                VR IS DEAD
              </h2>

              {/* Subtitle */}
              <p className="text-sm uppercase tracking-wide text-gray-600 mb-10">
                STORIES BEYOND THE METAVERSE
              </p>

              {/* Button */}
              <button
                className="bg-black text-white px-8 py-4 uppercase tracking-wide text-sm 
                               flex items-center gap-4 hover:bg-gray-800 transition-all duration-300"
              >
                WATCH NOW
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-[#e5e5e5] h-16 md:h-24"></div>

      <section
        className="relative w-full min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${newsletterBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 text-white">
          {/* FLEX CONTAINER */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* LEFT SIDE */}
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-[48px] font-light leading-tight mb-6">
                SUBSCRIBE TO VARJO'S
                <br />
                NEWSLETTER
              </h2>

              <p className="text-gray-300 leading-relaxed">
                Get early access to product information, exclusive offers,
                in-depth insights into the world of VR and XR and stay connected
                with the latest news and trends in the industry.
              </p>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="max-w-md w-full">
              {/* Email */}
              <div className="mb-10">
                <label className="block text-sm mb-2">Email address*</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-gray-400 
                           focus:outline-none focus:border-white py-2"
                />
              </div>

              {/* Select */}
              <div className="mb-10">
                <label className="block text-sm mb-2">
                  I'm interested in Varjo for:*
                </label>
                <select
                  className="w-full bg-transparent border-b border-gray-400 
                           focus:outline-none focus:border-white py-2 text-gray-300"
                >
                  <option value="">Please Select</option>
                  <option>Training & Simulation</option>
                  <option>Research</option>
                  <option>Enterprise</option>
                  <option>Medical</option>
                </select>
              </div>

              {/* Consent */}
              <p className="text-xs text-gray-400 mb-10 leading-relaxed">
                By submitting the form, you consent to our{" "}
                <span className="underline cursor-pointer">Terms of Use</span>{" "}
                and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
                .
              </p>

              {/* Button */}
              <button
                className="bg-white text-black px-10 py-4 uppercase text-sm 
                               tracking-wide flex items-center gap-4 
                               hover:bg-gray-200 transition-all duration-300"
              >
                SUBSCRIBE
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;

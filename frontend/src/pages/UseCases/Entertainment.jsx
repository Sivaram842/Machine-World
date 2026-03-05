import React, { useRef, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


const cards = [
    {
        tag: "BUILD SKILLS FROM DAY ONE",
        title: "Foundational flight training",
        desc: "Mixed reality enables student pilots to master maneuvers, navigation, and instrument procedures in safe, repeatable environments that accelerate their learning curve.",
        img: "https://images.unsplash.com/photo-1542365887-9e1f3d1d6d2d"
    },
    {
        tag: "TRAIN FOR COMPLEXITY",
        title: "Advanced operations",
        desc: "Crew can practice formation flying, tactical maneuvers, and multi-aircraft coordination in highly realistic simulations that prepare them for operational demands.",
        img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321"
    },
    {
        tag: "PREPARE FOR THE UNEXPECTED",
        title: "Emergency procedures",
        desc: "Pilots rehearse critical responses to engine failures, system malfunctions, and severe weather without the risks or costs of live training.",
        img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63"
    },
    {
        tag: "PRECISION UNDER PRESSURE",
        title: "Weapons and targeting",
        desc: "Mixed reality allows pilots, aircrew and JTACs to train together on air-to-air and air-to-ground targeting, building accuracy and confidence in mission scenarios.",
        img: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51"
    },
    {
        tag: "EVERY ROLE, EVERY MISSION",
        title: "Crew and rear-crew training",
        desc: "Weapons systems officers, loadmasters, and mission specialists can rehearse procedures and coordination in immersive environments that mirror real operations.",
        img: "https://images.unsplash.com/photo-1558980664-10c236debd83"
    },
    {
        tag: "TRAIN THE MISSION BEFORE FLYING IT",
        title: "Full mission rehearsal",
        desc: "Full Mission Rehearsal lets aircrews practice complete missions in high-fidelity, data-driven virtual environments that enhance readiness while reducing cost and risk.",
        img: "https://images.unsplash.com/photo-1504718855392-c0f33b372e72"
    }
];



const customers = [
    "AECHELON",
    "TRU SIMULATION",
    "FINNISH AIR FORCE",
    "LUFTHANSA AVIATION TRAINING",
    "SLOVENIAN ARMED FORCES",
    "DASSAULT AVIATION",
];


export default function Entertainment() {

    const scrollRef = useRef(null);

    const handleMouseLeave = () => {
        if (!scrollRef.current) return;
        scrollRef.current.isDown = false;
    };

    const handleMouseUp = () => {
        if (!scrollRef.current) return;
        scrollRef.current.isDown = false;
    };

    const handleMouseDown = (e) => {
        if (!scrollRef.current) return;

        const slider = scrollRef.current;
        slider.isDown = true;
        slider.startX = e.pageX - slider.offsetLeft;
        slider.scrollLeftStart = slider.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!scrollRef.current) return;
        const slider = scrollRef.current;
        if (!slider.isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - slider.startX) * 1.2;
        slider.scrollLeft = slider.scrollLeftStart - walk;
    };

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePlay = () => {
        if (!videoRef.current) return;

        videoRef.current.play();
        setPlaying(true);
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
                                    MASTER THE
                                    <br />
                                    COCKPIT
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
                                    Pilots and flight instructors globally are using immersive XR
                                    technology to simulate flight scenarios at the point of need,
                                    enabling a higher level of training at a fraction of the cost.
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
                                src="https://varjo.com/hs-fs/hubfs/Gaia%20images/1250X800%20(3).png?width=1875&height=1200&name=1250X800%20(3).png"
                                alt="Pilot training simulator"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-start text-left">

                            {/* Eyebrow */}
                            <p className="uppercase text-[13px] tracking-[0.2em] font-medium mb-5 text-left">
                                TRAIN ANY TIME, ANY PLACE
                            </p>

                            {/* Heading */}
                            <h2 className="
  text-[26px] md:text-[36px]
  font-extrabold
  leading-[1]
  tracking-[-0.02em]
  mb-6
  origin-left
  scale-x-105 md:scale-x-110
  scale-y-95 md:scale-y-90
">
                                BENEFIT FROM A SAFE, BUT
                                <br />
                                FULLY IMMERSIVE
                                <br />
                                ENVIRONMENT.
                            </h2>

                            {/* Bullet List */}
                            <ul className="list-disc list-outside pl-4 space-y-3 text-[14px] md:text-[15px] leading-[1.65] text-[#1a1a1a]">
                                <li>
                                    <strong>Reduce the cost of training by up to 99%+</strong> with low-cost,
                                    immersive learning environments to replace or supplement traditional
                                    training solutions
                                </li>

                                <li>
                                    <strong>Increase training velocity</strong> and enable more trainees to
                                    become proficient in less time by using XR and VR training tactics
                                </li>

                                <li>
                                    <strong>Optimize user engagement</strong> with a solution where trainees
                                    want to engage in and repeat exercises
                                </li>

                                <li>
                                    <strong>Increase the value of existing part-task simulators</strong> with
                                    full field of view, immersive visuals using mixed reality technology
                                </li>

                                <li>
                                    <strong>Reduce travel time and costs</strong> by training at the point of
                                    need, thanks to portability and reduced simulator size
                                </li>

                                <li>
                                    <strong>Train effectively for the most dangerous scenarios</strong> in a
                                    completely safe immersive environment
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
                        INDUSTRY LEADERS AND PIONEERS
                        <br />
                        CHOOSE VARJO FOR ADVANCED AIR
                        <br />
                        TRAINING IN MIXED REALITY.
                    </h2>

                    <p className="mt-8 md:mt-12 text-[16px] md:text-[19px] leading-[1.7] text-[#555555] max-w-[520px] mx-auto">
                        Read how our customers and partners use the world's most advanced XR to modernize air training across the industry.
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
                                    className={`text-[26px] md:text-[40px] font-light tracking-[0.005em] cursor-pointer transition-colors duration-300 ${activeIndex === index ? "text-black" : "text-black/30"
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
                            “XR-4 truly has superlative resolution and immersion level that we
                            have never seen before. It’s absolutely clear that Varjo is in a
                            different league.”
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
                                src="https://www.youtube.com/embed/9No-FiEInLA"
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
                                SEAMLESS SYNTHETIC HELICOPTER TRAINING
                            </p>

                            {/* Heading */}
                            <h2 className="uppercase text-[28px] md:text-[46px] font-extrabold leading-[1.1] mb-[26px]">
                                U.S. ARMY RVCT AIR PROGRAM
                            </h2>

                            {/* Paragraph */}
                            <p className="text-[17px] leading-[1.7] text-black/70 mb-[40px]">
                                Varjo was chosen as the XR technology provider for the U.S. Army’s
                                Reconfigurable Virtual Collective Trainer (RVCT) Air Program in 2023,
                                enabling a portable training capability for three different helicopters:
                                Apache, Chinook, and Blackhawk. U.S. Army pilots use Varjo’s high
                                resolution mixed reality to experience a fully immersive training
                                environment where they can interact with physical controls in real-time.
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
                    backgroundImage:
                        "url('https://varjo.com/hs-fs/hubfs/Gaia%20images/1920x1080%20(6)-min.png?width=1920&height=1080&name=1920x1080%20(6)-min.png')",
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
                        THE VARJO ADVANTAGE
                    </p>

                    {/* Heading */}
                    <h2 className="uppercase text-[28px] md:text-[36px] font-extrabold leading-[1.1] mb-8">
                        SETTING THE
                        <br />
                        STANDARD FOR
                        <br />
                        MIXED REALITY
                        <br />
                        TRAINING.
                    </h2>

                    {/* Paragraph */}
                    <p className="text-[15px] md:text-[16px] leading-[1.75] text-white/80 mb-10 max-w-[520px]">
                        Varjo’s XR solutions provide the realism, interoperability, and security
                        needed to prepare personnel for mission-critical operations. The XR-4
                        Series delivers uncompising fidelity and integrates seamlessly with
                        leading simulators, software, and hardware. Built for portability and
                        scalability, and backed by Varjo’s defense-certified expert services, it
                        is the trusted foundation for the future of training.
                    </p>

                    {/* Button */}
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 uppercase text-[13px] tracking-[0.12em] font-medium text-white hover:opacity-70 transition"
                    >
                        Explore Products
                        <span className="text-lg">→</span>
                    </a>

                </div>
            </section>
            <section className="w-full bg-[#f3f3f3] py-[170px]">

                <div className="max-w-[1650px] mx-auto px-[6vw]">

                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-[7vw]">

                        {/* ================= LEFT TEXT ================= */}
                        <div className="w-full md:w-[40%]">
                            {/* Eyebrow */}
                            <p className="uppercase text-[11px] tracking-[0.22em] text-black/60 mb-[22px]">
                                CLARITY AND COMFORT
                            </p>

                            {/* Heading */}
                            <h2 className="uppercase text-[44px] font-extrabold leading-[1.08] mb-[26px]">
                                DESIGNED FOR TRUE-TO-
                                <br />
                                LIFE IMMERSION.
                            </h2>

                            {/* Paragraph */}
                            <p className="text-[16px] leading-[1.7] text-black/70 max-w-[460px]">
                                The Varjo XR-4 Series brings unmatched realism to aerospace training,
                                with advanced video passthrough, dual 4K displays, and LiDAR sensors
                                that align physical and virtual elements seamlessly. Pilots can
                                interact naturally with panels, HOTAS systems, and crew members while
                                eliminating negative training risks. Ergonomic design features,
                                including a zero gravity headband, automatic IPD adjustment, and
                                active cooling, ensure long sessions remain comfortable and effective.
                            </p>

                        </div>


                        {/* ================= RIGHT VIDEO ================= */}
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

                    {/* Top Row */}
                    <div className="flex justify-between items-center mb-16">
                        <p className="uppercase text-[12px] tracking-[0.18em]">
                            BROWSE LATEST RELATED ARTICLES
                        </p>

                        <a
                            href="#"
                            className="uppercase text-[12px] tracking-[0.18em] hover:opacity-70 transition"
                        >
                            VIEW ALL ARTICLES →
                        </a>
                    </div>

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 items-start">

                        {/* SMALL SQUARE */}
                        <div className="relative aspect-square overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1581090700227-1e8c29e7f52c"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <h3 className="uppercase text-[20px] font-bold leading-[1.25] mb-4">
                                    ADVANCING PILOT READINESS THROUGH LOCKHEED MARTIN PREPAR3D’S NEXT-GENERATION XR
                                </h3>

                                <p className="text-[15px] leading-[1.6] text-white/90">
                                    Learn about Varjo's longstanding collaboration with Lockheed Martin and Prepar3D.
                                </p>
                            </div>
                        </div>

                        {/* VERTICAL RECTANGLE 1 */}
                        <div className="relative h-[350px] md:h-[500px] overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1508610048659-a06b669e3321"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-12 left-10 right-10 text-white">
                                <h3 className="uppercase text-[22px] font-bold leading-[1.2] mb-6">
                                    HOW THE SLOVENIAN ARMED FORCES ARE DRIVING OPERATIONAL READINESS WITH VR/XR
                                </h3>

                                <p className="text-[16px] leading-[1.6] text-white/90">
                                    The XR military flight simulators delivered to the Slovenian Armed Forces are redefining tactical aviation training.
                                </p>
                            </div>
                        </div>

                        {/* VERTICAL RECTANGLE 2 */}
                        <div className="relative h-[500px] overflow-hidden group">

                            <img
                                src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            <div className="absolute bottom-12 left-10 right-10 text-white">
                                <p className="uppercase text-[11px] tracking-[0.15em] mb-5 text-white/80">
                                    COMPANY NEWS
                                </p>

                                <h3 className="uppercase text-[22px] font-bold leading-[1.2] mb-6">
                                    VARJO SECURES U.S. AIR FORCE CERTIFICATION FOR VARJO BASE SOFTWARE
                                </h3>

                                <p className="text-[16px] leading-[1.6] text-white/90">
                                    Varjo secures U.S. Air Force Certificate to Field for its Varjo Base software.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </div>

    )
}
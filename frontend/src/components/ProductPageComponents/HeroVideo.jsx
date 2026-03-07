import React from "react";

const HeroVideo = () => {
    return (
        <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] md:min-h-screen overflow-hidden">

            {/* Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Optional Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />

        </section>
    );
};

export default HeroVideo;
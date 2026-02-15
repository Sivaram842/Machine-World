import React from 'react'
import hero from "../../assets/hero.mp4";

const HeroVideo = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
            >
                <source src={hero} type="video/mp4" />
            </video>
        </section>
    )
}

export default HeroVideo
import heroVideo from "../../assets/hero.mp4";

export default function HeroVideo() {
    return (
        <section className="relative h-screen overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
            />
        </section>

    );
}

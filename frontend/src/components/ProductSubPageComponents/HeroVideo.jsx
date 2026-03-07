
export default function HeroVideo() {
    return (
        <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={"/hero.mp4"}
                autoPlay
                muted
                loop
                playsInline
            />
        </section>
    );
}
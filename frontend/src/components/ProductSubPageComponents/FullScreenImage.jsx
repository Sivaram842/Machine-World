import fullImg from "../../assets/Headset in hand.webp";

export default function FullScreenImage() {
    return (
        <section className="w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
            <img
                src={fullImg}
                alt="Fullscreen"
                className="block w-full h-full object-cover"
            />
        </section>
    );
}
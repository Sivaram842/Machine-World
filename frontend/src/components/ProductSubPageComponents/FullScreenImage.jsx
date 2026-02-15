import fullImg from "../../assets/Headset in hand.webp";

export default function FullScreenImage() {
    return (
        <section className="h-screen w-screen">
            <img
                src={fullImg}
                alt="Fullscreen"
                className="block h-full w-full object-cover"
            />
        </section>
    );
}

import heroImg from "../../assets/state-of-xr-report-hero.webp";

export default function FullScreenXRImage() {
    return (
        <section className="relative h-screen w-screen overflow-hidden">
            <img
                src={heroImg}
                alt="XR Headsets"
                className="block h-full w-full object-cover"
            />
        </section>
    );
}

import heroImg from "../../assets/state-of-xr-report-hero.webp";

export default function FullScreenXRImage() {
    return (
        <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">
            <img
                src={heroImg}
                alt="XR Headsets"
                className="block w-full h-full object-cover"
            />
        </section>
    );
}
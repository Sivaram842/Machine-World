import { useRef, useState } from "react";
import trainingVideo from "../../assets/training.mp4";
import poster from "../../assets/state-of-xr-report-hero.webp";

export default function DeploymentSection() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (!videoRef.current) return;
        videoRef.current.play();
        setIsPlaying(true);
    };

    return (
        <section className="bg-white py-[160px]">
            <div className="mx-auto max-w-[900px] text-center">
                {/* VIDEO CONTAINER */}
                <div className="relative mx-auto mb-16 w-full max-w-[640px]">
                    {/* VIDEO (native controls kept) */}
                    <video
                        ref={videoRef}
                        src={trainingVideo}
                        poster={poster}
                        controls
                        playsInline
                        preload="metadata"
                        onPause={() => setIsPlaying(false)}
                        onPlay={() => setIsPlaying(true)}
                        className="block h-[420px] w-full bg-black object-cover"
                    />

                    {/* CUSTOM PLAY BUTTON (overlay only) */}
                    {!isPlaying && (
                        <button
                            onClick={handlePlay}
                            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 transition hover:bg-black/70"
                        >
                            <span className="ml-1 h-0 w-0 border-b-[12px] border-l-[22px] border-t-[12px] border-b-transparent border-t-transparent border-l-white" />
                        </button>
                    )}
                </div>

                {/* TEXT */}
                <h2 className="text-[38px] font-light leading-tight">
                    Deployment ready
                    <br />
                    performance.
                </h2>

                <p className="mx-auto mt-8 max-w-[560px] text-[15px] leading-[1.75] text-gray-600">
                    Break free from the constraints of standalone headsets. The XR-4
                    Series works in tandem with workstations that tap into the power of
                    NVIDIA GPUs to support completely unrestricted and upgradable
                    performance in professional 3D platforms and software.
                </p>

                <button className="mt-14 inline-flex items-center gap-4 bg-black px-10 py-4 text-[13px] tracking-widest text-white transition hover:bg-gray-900">
                    VIEW VARJO-READY SOFTWARE
                    <span className="text-lg">→</span>
                </button>
            </div>
        </section>
    );
}

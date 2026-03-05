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
        <section className="bg-white py-16 sm:py-24 lg:py-[160px] px-4 sm:px-6">
            <div className="mx-auto max-w-[900px] text-center">

                {/* VIDEO CONTAINER */}
                <div className="relative mx-auto mb-10 sm:mb-14 lg:mb-16 w-full max-w-[640px]">

                    {/* VIDEO */}
                    <video
                        ref={videoRef}
                        src={trainingVideo}
                        poster={poster}
                        controls
                        playsInline
                        preload="metadata"
                        onPause={() => setIsPlaying(false)}
                        onPlay={() => setIsPlaying(true)}
                        className="block h-[220px] sm:h-[320px] md:h-[420px] w-full bg-black object-cover"
                    />

                    {/* CUSTOM PLAY BUTTON */}
                    {!isPlaying && (
                        <button
                            onClick={handlePlay}
                            className="absolute left-1/2 top-1/2 flex 
                                       h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20
                                       -translate-x-1/2 -translate-y-1/2 
                                       items-center justify-center 
                                       rounded-full bg-black/50 
                                       transition hover:bg-black/70"
                        >
                            <span className="ml-1 h-0 w-0 
                                             border-b-[8px] border-t-[8px] border-l-[14px]
                                             sm:border-b-[10px] sm:border-t-[10px] sm:border-l-[18px]
                                             lg:border-b-[12px] lg:border-t-[12px] lg:border-l-[22px]
                                             border-b-transparent border-t-transparent border-l-white" />
                        </button>
                    )}
                </div>

                {/* TEXT */}
                <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light leading-tight">
                    Deployment ready
                    <br />
                    performance.
                </h2>

                <p className="mx-auto mt-6 sm:mt-8 max-w-[560px] 
                              text-sm sm:text-[15px] 
                              leading-relaxed sm:leading-[1.75] 
                              text-gray-600">
                    Break free from the constraints of standalone headsets. The XR-4
                    Series works in tandem with workstations that tap into the power of
                    NVIDIA GPUs to support completely unrestricted and upgradable
                    performance in professional 3D platforms and software.
                </p>

                <button className="mt-10 sm:mt-12 lg:mt-14 
                                   inline-flex items-center justify-center gap-4 
                                   bg-black 
                                   px-6 sm:px-8 lg:px-10 
                                   py-3 sm:py-3.5 lg:py-4 
                                   text-xs sm:text-[13px] 
                                   tracking-widest text-white 
                                   transition hover:bg-gray-900 
                                   w-full sm:w-auto">
                    VIEW VARJO-READY SOFTWARE
                    <span className="text-base sm:text-lg">→</span>
                </button>
            </div>
        </section>
    );
}
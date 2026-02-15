import { useNavigate } from "react-router-dom";

export default function TalkToSalesCTA() {

    const navigate = useNavigate();
    return (
        <section className="w-full">
            <div
                onClick={() => navigate("/talk-to-sales")}
                className="
          group
          relative
          w-full
          h-[260px]
          bg-black
          transition-colors
          duration-300
          hover:bg-blue-900
          flex
          items-center
          px-16
          overflow-hidden
          cursor-pointer
        "
            >
                {/* LEFT TEXT */}
                <div>
                    <p className="text-sm tracking-widest text-white/80 mb-4">
                        READY TO REDEFINE REALITY?
                    </p>

                    <h2 className="text-[56px] font-extrabold text-white leading-none">
                        TALK TO SALES
                    </h2>
                </div>

                {/* ARROW (appears on hover) */}
                <div
                    className="
            absolute
            right-16
            opacity-0
            translate-x-6
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
          "
                >
                    <svg
                        width="100"
                        height="60"
                        viewBox="0 0 100 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="0"
                            y1="20"
                            x2="70"
                            y2="20"
                            stroke="white"
                            strokeWidth="5"
                        />
                        <polyline
                            points="55,5 70,20 55,35"
                            fill="none"
                            stroke="white"
                            strokeWidth="5"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}

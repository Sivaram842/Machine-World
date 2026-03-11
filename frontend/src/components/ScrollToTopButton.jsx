
import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-white text-black w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
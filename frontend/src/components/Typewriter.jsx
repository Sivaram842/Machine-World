import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 30 }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        setDisplayText("");

        const interval = setInterval(() => {
            setDisplayText(text.slice(0, i + 1));
            i++;

            if (i >= text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <span>{displayText}</span>;
};

export default Typewriter;
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransitionOverlay = () => {
    const location = useLocation();

    return (
        <motion.div
            key={location.pathname}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "black",
                transformOrigin: "top",
                zIndex: 9999,
                pointerEvents: "none"
            }}
        />
    );
};

export default PageTransitionOverlay;
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Intro from "./Intro";

// export default function IntroGate() {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             navigate("/home", { replace: true });
//         }, 2800); // match your animation timing

//         return () => clearTimeout(timer);
//     }, [navigate]);

//     return <Intro />;
// }

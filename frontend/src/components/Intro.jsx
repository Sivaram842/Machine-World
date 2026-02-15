// export default function Intro() {
//     return (
//         <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center bg-black intro-wrapper">

//             {/* OPTIONAL: subtle dark vignette (can remove if you want flat black) */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),rgba(0,0,0,1))] z-[1]" />

//             {/* Title */}
//             <svg
//                 viewBox="0 0 1200 260"
//                 className="w-[80%] max-w-[1200px] h-auto z-[2]"
//             >
//                 {/* Outline */}
//                 <text
//                     x="50%"
//                     y="45%"
//                     dominantBaseline="middle"
//                     textAnchor="middle"
//                     className="title-outline"
//                 >
//                     ANTI WORLD
//                 </text>

//                 {/* Fill */}
//                 <text
//                     x="50%"
//                     y="45%"
//                     dominantBaseline="middle"
//                     textAnchor="middle"
//                     className="title-fill"
//                 >
//                     ANTI WORLD
//                 </text>

//                 {/* Subtitle */}
//                 <text
//                     x="50%"
//                     y="80%"
//                     dominantBaseline="middle"
//                     textAnchor="middle"
//                     className="title-subtitle"
//                 >
//                     REDEFINING REALITY
//                 </text>
//             </svg>

//             {/* Scoped animation styles */}
//             <style>{`
//         /* ================= Outline draw ================= */
//         .title-outline {
//           font-size: 120px;
//           font-weight: 800;
//           letter-spacing: 10px;
//           fill: none;
//           stroke: #ffffff;
//           stroke-width: 2.5;
//           stroke-dasharray: 1200;
//           stroke-dashoffset: 1200;
//           animation: outlineDraw 2.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
//         }

//         @keyframes outlineDraw {
//           to { stroke-dashoffset: 0; }
//         }

//         /* ================= Title fill ================= */
//         .title-fill {
//           font-size: 120px;
//           font-weight: 800;
//           letter-spacing: 10px;
//           fill: #ffffff;
//           opacity: 0;
//           animation: fillIn 1.2s ease-out forwards;
//           animation-delay: 1.9s;
//         }

//         @keyframes fillIn {
//           from { opacity: 0; filter: blur(6px); }
//           to { opacity: 1; filter: blur(0); }
//         }

//         /* ================= Subtitle ================= */
//         .title-subtitle {
//           font-size: 26px;
//           letter-spacing: 4px;
//           fill: #ffffff;
//           opacity: 0;
//           animation: subtitleFade 0.8s ease-out forwards;
//           animation-delay: 3.1s;
//         }

//         @keyframes subtitleFade {
//           from {
//             opacity: 0;
//             transform: translateY(8px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* ================= Hold scene ================= */
//         .intro-wrapper {
//           animation: holdScene 2s linear forwards;
//           animation-delay: 3.5s;
//         }

//         @keyframes holdScene {
//           to {}
//         }
//       `}</style>
//         </section>
//     );
// }

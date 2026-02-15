// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getAuth, applyActionCode } from "firebase/auth";
// import axios from "axios";

// export default function VerifyEmail() {
//     const [searchParams] = useSearchParams();
//     const [status, setStatus] = useState("Verifying...");

//     useEffect(() => {
//         const oobCode = searchParams.get("oobCode");
//         const auth = getAuth();

//         if (!oobCode) {
//             setStatus("Invalid verification link.");
//             return;
//         }

//         applyActionCode(auth, oobCode)
//             .then(() => {
//                 return axios.post("http://localhost:5000/api/users/verify-email", { oobCode });
//             })
//             .then(() => setStatus("🎉 Email verified successfully!"))
//             .catch((e) => {
//                 console.log("APPLY ERROR:", e);
//                 setStatus("Invalid or expired verification link");
//             });
//     }, []);


//     return <div style={{ padding: 50, fontSize: 24 }}>{status}</div>;
// }

import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

export default function LoginPassword() {
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");

    const { email } = useOutletContext();
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!password.trim()) {
            setError("Password required");
            return;
        }

        try {
            const api = `${import.meta.env.VITE_API_URL}/api/users/login`;


            const response = await axios.post(api, {
                email: email.trim().toLowerCase(),
                password: password.trim(),
            });

            console.log("LOGIN RESPONSE:", response.data);

            // Extract token and save the rest as user object
            const { token, ...userData } = response.data;
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("token", token);

            navigate("/dashboard");
        } catch (err) {
            setError(
                err.response?.data?.message || "Invalid email or password"
            );
        }
    };

    return (
        <div className="max-w-[520px] mx-auto mt-20 px-4">
            <h1 className="text-3xl font-medium mb-6">Enter your password</h1>

            <label className="block text-sm font-medium">Password</label>

            <div className="relative mt-1">
                <input
                    type={show ? "text" : "password"}
                    className="w-full h-11 px-3 pr-11 text-base border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                    }}
                />

                <span
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer flex items-center"
                >
                    👁️
                </span>
            </div>

            {error && <p className="text-red-600 mt-2">{error}</p>}

            <div className="flex justify-end gap-3 mt-8">
                <button
                    onClick={() => navigate("/login")}
                    className="h-10 px-5 rounded-full border border-gray-400 text-sm hover:bg-gray-100 transition"
                >
                    Back
                </button>

                <button
                    onClick={handleLogin}
                    disabled={!password.trim()}
                    className={`h-10 px-5 rounded-full text-sm transition ${password.trim()
                            ? "bg-black text-white hover:bg-gray-900"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Log in
                </button>
            </div>
        </div>
    );
}

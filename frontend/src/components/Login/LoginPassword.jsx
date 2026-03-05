import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

export default function LoginPassword() {
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");

    const { email } = useOutletContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleLogin = async () => {
        if (!password.trim()) {
            setError("Password required");
            return;
        }

        try {
            setLoading(true);

            const api = `${import.meta.env.VITE_API_URL}/api/users/login`;

            const response = await axios.post(api, {
                email: email.trim().toLowerCase(),
                password: password.trim(),
            });

            const { token, ...userData } = response.data;

            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("token", token);

            navigate("/dashboard");

        } catch (err) {
            setError(
                err.response?.data?.message || "Invalid email or password"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md sm:max-w-lg mx-auto mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6">

            <h1 className="text-2xl sm:text-3xl font-medium mb-6">
                Enter your password
            </h1>

            <label className="block text-sm font-medium">
                Password
            </label>

            <div className="relative mt-1">
                <input
                    type={show ? "text" : "password"}
                    className="w-full h-11 sm:h-12 px-3 pr-11 text-base border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                    }}
                />

                <span
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer flex items-center text-lg"
                >
                    👁️
                </span>
            </div>

            {error && (
                <p className="text-red-600 mt-2 text-sm break-words">
                    {error}
                </p>
            )}

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 mt-6 sm:mt-8">

                <button
                    onClick={() => navigate("/login")}
                    className="w-full sm:w-auto h-10 px-5 rounded-full border border-gray-400 text-sm hover:bg-gray-100 transition"
                >
                    Back
                </button>

                <button
                    onClick={handleLogin}
                    disabled={!password.trim() || loading}
                    className={`w-full sm:w-auto h-10 px-5 rounded-full text-sm transition flex items-center justify-center gap-2
        ${password.trim() && !loading
                            ? "bg-black text-white hover:bg-gray-900"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    {loading ? (
                        <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Logging in...
                        </>
                    ) : (
                        "Log in"
                    )}
                </button>

            </div>
        </div>
    );
}
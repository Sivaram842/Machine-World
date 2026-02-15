import { useNavigate } from "react-router-dom";

export default function ForgotPassword({ setPage }) {
    const navigate = useNavigate();

    return (
        <div className="max-w-[520px] mx-auto mt-20 px-4">
            {/* Heading */}
            <h1 className="text-3xl font-medium mb-4">
                Reset password
            </h1>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
                Enter your email address and we&apos;ll send you instructions how to
                reset your password
            </p>

            {/* Label */}
            <label className="block text-sm font-medium mb-1">
                Email address
            </label>

            {/* Input */}
            <input
                type="email"
                className="w-full h-11 px-3 text-base border border-gray-300 rounded-md bg-gray-100 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Button — right aligned */}
            <div className="flex justify-end mt-2">
                <button className="px-6 py-2 border border-black text-sm tracking-wide hover:bg-black hover:text-white transition">
                    Reset password
                </button>
            </div>

            <hr className="my-8 border-t border-gray-200" />

            {/* Links */}
            <div className="text-sm space-y-2">
                <p
                    className="text-blue-600 cursor-pointer hover:underline"
                    onClick={() => navigate("/signup")}
                >
                    Create an account
                </p>

                <p
                    className="text-blue-600 cursor-pointer hover:underline"
                    onClick={() => navigate("/login")}
                >
                    Back to the login page
                </p>
            </div>
        </div>
    );
}

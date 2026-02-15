import { useNavigate } from "react-router-dom";

export default function Signup({ setPage }) {
    const navigate = useNavigate();

    return (
        <div className="max-w-[520px] mx-auto mt-20 px-4">
            {/* Heading */}
            <h1 className="text-3xl font-medium mb-8">
                Sign up
            </h1>

            {/* Commercial account */}
            <section className="mb-10">
                <h2 className="text-lg font-medium mb-2">
                    Commercial account
                </h2>

                <p className="text-sm text-gray-600 mb-5">
                    Commercial accounts can be used with all AntiWorld headset models
                    and provide access to AntiWorld services purchased by your
                    organization.
                </p>

                <button
                    className="border border-black px-6 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition"
                    onClick={() => navigate("/signup/caccount")}
                >
                    Create commercial account
                </button>
            </section>

            <hr className="my-8 border-t border-gray-200" />

            {/* Personal account */}
            <section className="mb-10">
                <h2 className="text-lg font-medium mb-2">
                    Personal account
                </h2>

                <p className="text-sm text-gray-600 mb-5">
                    Personal accounts are intended for non-commercial use only.
                </p>

                <button
                    className="border border-black px-6 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition"
                    onClick={() => navigate("/signup/paccount")}
                >
                    Create personal account
                </button>
            </section>

            <hr className="my-8 border-t border-gray-200" />

            {/* Links */}
            <div className="text-sm space-y-2">
                <p
                    className="text-blue-600 cursor-pointer hover:underline"
                    onClick={() => navigate("/forgot-password")}

                >
                    Forgot password?
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

import { useNavigate, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginEmail() {
    const { email, setEmail } = useOutletContext();
    const navigate = useNavigate();

    const isValid = email.trim().length > 0;

    const handleContinue = () => {
        setEmail(email.trim().toLowerCase());
        navigate("password");
    };

    return (
        <div className="w-full max-w-md sm:max-w-lg mx-auto mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6">

            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 leading-snug">
                Log in to your AntiWorld Account
            </h1>

            <p className="text-sm sm:text-base mb-6">
                New to AntiWorld?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                    Create an account
                </Link>
            </p>

            <label className="block mb-1 text-sm font-medium">
                Email address
            </label>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 sm:py-2.5 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <div className="flex flex-col sm:flex-row sm:justify-end mt-6 sm:mt-8">
                <button
                    disabled={!isValid}
                    onClick={handleContinue}
                    className={`w-full sm:w-auto px-6 py-2.5 rounded-md transition ${isValid
                            ? "bg-black text-white hover:bg-gray-900"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    Continue
                </button>
            </div>

        </div>
    );
}
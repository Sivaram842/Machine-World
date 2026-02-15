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
        <div className="max-w-[520px] mx-auto mt-20 px-4">
            <h1 className="text-3xl font-semibold mb-2">
                Log in to your AntiWorld Account
            </h1>

            <p className="text-sm mb-6">
                New to AntiWorld?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                    Create an account
                </Link>
            </p>

            <label className="block mb-1 text-sm font-medium">Email address</label>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
            />

            <div className="flex justify-end mt-8">
                <button
                    disabled={!isValid}
                    onClick={handleContinue}
                    className={`px-6 py-2 rounded-md transition ${isValid
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

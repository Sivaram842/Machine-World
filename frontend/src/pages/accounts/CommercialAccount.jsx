import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";

/* ---------------- COUNTRY LIST ---------------- */
const countries = [
    "United States",
    "United Kingdom",
    "India",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "South Korea",
    "Singapore",
    "United Arab Emirates"
];

export default function CommercialAccount({ setPage }) {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const {
        firstName, setFirstName,
        lastName, setLastName,
        country, setCountry,
        password, setPassword,
        dob, email, setEmail
    } = useOutletContext();

    const handleSignup = async () => {
        try {
            const { day, month, year } = dob;
            const dateOfBirth = new Date(`${month} ${day}, ${year}`);
           const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/users/register`, {
                firstName,
                lastName,
                country,
                email,
                password,
                dateOfBirth,
                updatesConsent: false,   // optional
                termsAccepted: true,     // you can read checkbox state later
            });

            navigate("/verify-notice", {
  state: { email },
});

            console.log("User registered:", response.data);

        } catch (error) {
            console.error("SIGNUP ERROR:", error);
            alert(error.response?.data?.message || "Signup failed");
        }
    };

    /* -------- PASSWORD VALIDATION -------- */
    const isPasswordStrong = (pwd) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(pwd);
    const isEmailValid = /\S+@\S+\.\S+/.test(email);

    const isFormValid =
        firstName.trim() &&
        lastName.trim() &&
        country.trim() &&
        isPasswordStrong(password) &&
        isEmailValid;
    const inputClass =
        "w-full h-11 px-3 text-base border border-gray-300 rounded-md bg-gray-100 mb-6 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-200";

    return (
        <div className="max-w-[520px] mx-auto px-4">
            {/* HEADING */}
            <h1 className="text-3xl font-medium mb-8">Sign up</h1>

            {/* FIRST NAME */}
            <Label text="First name" />
            <input
                className={inputClass}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            {/* LAST NAME */}
            <Label text="Last name" />
            <input
                className={inputClass}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            {/* COUNTRY */}
            <Label text="Country" />
            <div className="relative">
                <select
                    className={`${inputClass} appearance-none`}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="" disabled>
                        Select country
                    </option>
                    {countries.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>

                {/* Dropdown icon */}
                <span className="absolute right-4 top-[22px] pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </span>
            </div>

            {/* EMAIL */}
            <Label text="Email address" />
            <input
                type="email"
                className={inputClass}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />



            {/* PASSWORD */}
            <Label text="Password" />
            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    className={inputClass}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <span
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                    {show ? eyeOpen : eyeClosed}
                </span>
            </div>

            {/* PASSWORD HELP */}
            <p
                className={`text-sm mb-6 ${isPasswordStrong(password) ? "text-green-700" : "text-red-600"
                    }`}
            >
                Your password must be at least 8 characters long and contain at least one
                uppercase letter, lowercase letter, number, and special character.
            </p>

            {/* OPTIONAL UPDATES */}
            <Checkbox>
                I consent to receiving the latest updates from AntiWorld
            </Checkbox>

            {/* REQUIRED TERMS */}
            <Checkbox>
                <span className="leading-snug">
                    I accept{" "}
                    <span className="text-blue-600 cursor-pointer">Privacy Policy</span> and{" "}
                    <span className="text-blue-600 cursor-pointer">Terms of Use</span>
                </span>
            </Checkbox>

            {/* CAPTCHA */}
            <div className="my-6 border border-gray-300 rounded-md px-4 py-3 w-[300px] text-sm text-gray-600">
                I'm not a robot
            </div>

            {/* SUBMIT */}
            <div className="flex justify-end mt-8">
                <button
                    disabled={!isFormValid}
                    onClick={handleSignup}
                    className={`px-8 py-2 rounded-full text-sm transition cursor-pointer
    ${isFormValid
                            ? "bg-black text-white hover:bg-gray-900"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Create an account
                </button>

            </div>
        </div>
    );
}

/* ---------------- HELPERS ---------------- */

function Label({ text }) {
    return <label className="block text-sm font-medium mb-1">{text}</label>;
}

function Checkbox({ children }) {
    return (
        <label className="flex items-start gap-3 text-sm mb-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 mt-1 accent-black" />
            <span>{children}</span>
        </label>
    );
}

/* ---------------- ICONS ---------------- */

const eyeOpen = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const eyeClosed = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
        <path d="M1 1l22 22" />
        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.77 21.77 0 0 1 5.17-6.11" />
    </svg>
);

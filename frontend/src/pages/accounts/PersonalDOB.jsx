import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function PersonalDOB() {
    const { dob, setDob } = useOutletContext();
    const navigate = useNavigate();

    const [day, setDay] = useState(dob.day || "");
    const [month, setMonth] = useState(dob.month || "");
    const [year, setYear] = useState(dob.year || "");

    const handleContinue = () => {
        setDob({ day, month, year });
        navigate("/signup/caccount");
    };

    const isDOBValid = day && month && year;

    return (
        <div className="max-w-[520px] w-full mx-auto px-4 sm:px-6 mt-10 sm:mt-14">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2">Sign up</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Please enter your birth date:
            </p>

            {/* DOB fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {/* Day */}
                <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1">
                        Day
                    </label>
                    <select
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        className="w-full h-10 sm:h-11 px-3 border rounded-md bg-gray-100 text-sm"
                    >
                        <option value=""></option>
                        {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </div>

                {/* Month */}
                <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1">
                        Month
                    </label>
                    <select
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className="w-full h-10 sm:h-11 px-3 border rounded-md bg-gray-100 text-sm"
                    >
                        <option value=""></option>
                        {[
                            "January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                        ].map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                </div>

                {/* Year */}
                <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1">
                        Year
                    </label>
                    <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full h-10 sm:h-11 px-3 border rounded-md bg-gray-100 text-sm"
                    >
                        <option value=""></option>
                        {Array.from({ length: 100 }, (_, i) => (
                            <option key={i} value={2024 - i}>{2024 - i}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex justify-end mt-6 sm:mt-8">
                <button
                    disabled={!isDOBValid}
                    onClick={handleContinue}
                    className={`px-6 sm:px-8 py-2 rounded-full text-xs sm:text-sm transition
                        ${isDOBValid
                            ? "bg-black text-white hover:bg-gray-900"
                            : "bg-gray-200 text-gray-400"
                        }`}
                >
                    Continue
                </button>
            </div>

            <hr className="my-6 sm:my-8" />

            <p
                onClick={() => navigate("/forgot-password")}
                className="text-xs sm:text-sm text-blue-600 cursor-pointer mb-3 hover:underline"
            >
                Forgot password?
            </p>
            <p
                onClick={() => navigate("/login")}
                className="text-xs sm:text-sm text-blue-600 cursor-pointer hover:underline"
            >
                Back to login
            </p>
        </div>
    );
}
import { useNavigate } from "react-router-dom";

export default function PersonalAccount({ setPage }) {
    const navigate = useNavigate();

    return (
        <div className="max-w-[520px] mx-auto mt-20 px-4">
            {/* Title */}
            <h1 className="text-3xl font-medium">
                Personal account
            </h1>

            {/* Question */}
            <p className="text-base font-medium text-gray-900 mt-8 mb-5">
                Are you sure you want to create a Personal account?
            </p>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-10">
                Personal accounts are intended only for non-commercial use of
                AntiWorld headsets and cannot be used to access services purchased
                by an organization.
            </p>

            {/* BUTTON GROUP */}
            <div className="flex flex-col gap-4">
                <button
                    className="w-full border border-black px-6 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition"
                    onClick={() => navigate("/signup/paccount/dob")}
                >
                    Yes, create a personal account
                </button>

                <button
                    className="w-full border border-black px-6 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition"
                    onClick={() => navigate("/signup/caccount")}

                >
                    No, create a commercial account instead
                </button>
            </div>

            <hr className="my-10 border-t border-gray-200" />

            {/* LINKS */}
            <p
                className="text-blue-600 text-sm cursor-pointer hover:underline mb-2"
                onClick={() => navigate("/forgot-password")}
            >
                Forgot password?
            </p>

            <p
                className="text-blue-600 text-sm cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
            >
                Back to the login page
            </p>
        </div>
    );
}

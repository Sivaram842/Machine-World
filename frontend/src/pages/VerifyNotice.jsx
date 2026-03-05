import { useLocation } from "react-router-dom";

export default function VerifyNotice() {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md text-center">

        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          📩 Verify your email
        </h1>

        <p className="text-gray-700 mb-2">
          We’ve sent a verification link to:
        </p>

        <p className="font-semibold text-black mb-6 break-all">
          {email || "your email address"}
        </p>

        <p className="text-gray-700">
          Please check your inbox and click the link to activate your account.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          You cannot log in until your email is verified.
        </p>

      </div>
    </div>
  );
}
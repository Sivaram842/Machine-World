import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PersonalInfo from "../components/DashboardComponents/PersonalInfo";
import SignInSecurity from "../components/DashboardComponents/SignInSecurity";
import PaymentShipping from "../components/DashboardComponents/PaymentShipping";
import Subscriptions from "../components/DashboardComponents/Subscriptions";
import FamilySharing from "../components/DashboardComponents/FamilySharing";
import Devices from "../components/DashboardComponents/Devices";
import Privacy from "../components/DashboardComponents/Privacy";

export default function Dashboard() {
  const [selected, setSelected] = useState("personal");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (!raw || !token) {
        navigate("/login");
        return;
      }

      const parsed = JSON.parse(raw);
      setUser(parsed);
    } catch (error) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const renderComponent = () => {
    const props = { user };
    switch (selected) {
      case "personal":
        return <PersonalInfo {...props} />;
      case "security":
        return <SignInSecurity {...props} />;
      case "payment":
        return <PaymentShipping {...props} />;
      case "subscriptions":
        return <Subscriptions {...props} />;
      case "family":
        return <FamilySharing {...props} />;
      case "devices":
        return <Devices {...props} />;
      case "privacy":
        return <Privacy {...props} />;
      default:
        return <PersonalInfo {...props} />;
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-8 py-4 sm:py-5 border-b border-gray-200 gap-4 sm:gap-0">
        <h1 className="text-xl sm:text-2xl font-semibold">
          DOOM INDUSTRIES ACCOUNT
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm sm:text-base"
        >
          Sign Out
        </button>
      </header>

      {/* Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 py-8 sm:py-12 px-4 sm:px-6 lg:px-0">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 px-2">
          <div className="flex gap-4 items-center mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-2xl sm:text-3xl">👤</span>
            </div>
            <div>
              <p className="font-semibold text-sm sm:text-base">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 break-all">
                {user.email}
              </p>
            </div>
          </div>

          <nav className="space-y-3 font-medium text-sm sm:text-base">
            <p
              onClick={() => setSelected("personal")}
              className={`cursor-pointer hover:text-blue-600 ${
                selected === "personal"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              Personal Information
            </p>

            <p
              onClick={() => setSelected("security")}
              className={`cursor-pointer hover:text-blue-600 ${
                selected === "security"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              Sign-In and Security
            </p>

            <p
              onClick={() => setSelected("payment")}
              className={`cursor-pointer hover:text-blue-600 ${
                selected === "payment"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              Payment & Shipping
            </p>

            <p
              onClick={() => setSelected("subscriptions")}
              className={`cursor-pointer hover:text-blue-600 ${
                selected === "subscriptions"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              Subscriptions
            </p>

            <p
              onClick={() => setSelected("family")}
              className={`cursor-pointer hover:text-blue-600 ${
                selected === "family"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              Family Sharing
            </p>

            <p
              onClick={() => setSelected("devices")}
              className={`cursor-pointer hover:text-blue-600 ${
                selected === "devices"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              Devices
            </p>

            <p
              onClick={() => setSelected("privacy")}
              className={`cursor-pointer hover:text-blue-600 ${
                selected === "privacy"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              Privacy
            </p>
          </nav>
        </aside>

        {/* Dynamic Content */}
        <main className="flex-1 w-full">{renderComponent()}</main>
      </div>
    </div>
  );
}

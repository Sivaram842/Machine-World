export default function PersonalInfo({ user }) {
    return (
        <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
                Personal Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                <div className="border rounded-2xl p-4 sm:p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold text-sm sm:text-base">
                        Name
                    </p>
                    <p className="text-base sm:text-lg break-words">
                        {user.firstName} {user.lastName}
                    </p>
                </div>

                <div className="border rounded-2xl p-4 sm:p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold text-sm sm:text-base">
                        Date Of Birth
                    </p>
                    <p className="text-base sm:text-lg">
                        {user.dateOfBirth
                            ? new Date(user.dateOfBirth).toLocaleDateString()
                            : "Not provided"}
                    </p>
                </div>

                <div className="border rounded-2xl p-4 sm:p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold text-sm sm:text-base">
                        Country / Region
                    </p>
                    <p className="text-base sm:text-lg break-words">
                        {user.country || "Unknown"}
                    </p>
                </div>

                <div className="border rounded-2xl p-4 sm:p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold text-sm sm:text-base">
                        Email
                    </p>
                    <p className="text-base sm:text-lg break-words">
                        {user.email}
                    </p>
                </div>

            </div>
        </div>
    );
}
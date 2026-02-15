export default function PersonalInfo({ user }) {
    return (
        <>
            <h2 className="text-3xl font-semibold mb-8">Personal Information</h2>
            <div className="grid grid-cols-2 gap-6">
                <div className="border rounded-2xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold">Name</p>
                    <p className="text-lg">
                        {user.firstName} {user.lastName}
                    </p>
                </div>

                <div className="border rounded-2xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold">Date Of Birth</p>
                    <p className="text-lg">
                        {user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : "Not provided"}

                    </p>
                </div>

                <div className="border rounded-2xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold">Country / Region</p>
                    <p className="text-lg">
                        {user.country || "Unknown"}
                    </p>
                </div>

                <div className="border rounded-2xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold">Email</p>
                    <p className="text-lg">
                        {user.email}
                    </p>
                </div>
            </div>
        </>
    );
}

// pages/UserProfile.jsx
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";

const UserProfile = () => {

    const [profileImg, setProfileImg] = useState(
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // default avatar
    );

    const user = {
        name: "Aman Kumar",
        phone: "9876543210",
        aadhar: "1234-5678-9012",
        email: "aman@example.com",
        state: "Jharkhand",
        district: "Dhanbad",
        block: "Some Block",
        gram: "Some Gram",
        samiti: "Some Samiti",
        village: "Some Village"
    };

    // Handle profile change
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfileImg(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-semibold mb-6">User Profile</h1>

            {/* TOP SECTION  */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-center">

                {/* Left: Photo + Name */}
                <div className="flex items-center gap-6">

                    {/* Profile Picture */}
                    <div className="relative">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-28 h-28 rounded-full object-cover border"
                        />

                        {/* Change Photo Button */}
                        <label className="absolute bottom-0 right-0 bg-indigo-500 text-white px-2 py-[2px] rounded text-xs cursor-pointer hover:bg-indigo-400">
                            Change
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handlePhotoChange}
                            />
                        </label>
                    </div>

                    {/* User Name */}
                    <div>
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-gray-600 text-sm">{user.email}</p>
                        <p className="text-gray-600 text-sm">{user.phone}</p>
                    </div>
                </div>

                {/* Right: Edit Profile Button */}
                <button className="px-5 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-400 shadow">
                    Edit Profile
                </button>
            </div>

            {/* USER DETAILS SECTION */}
            <div className="bg-white shadow-md p-6 rounded-md">
                <h2 className="text-lg font-bold mb-4">User Details</h2>

                <div className="grid grid-cols-2 gap-4 text-gray-700">

                    <p><span className="font-semibold">Full Name:</span> {user.name}</p>
                    <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                    <p><span className="font-semibold">Aadhar No:</span> {user.aadhar}</p>
                    <p><span className="font-semibold">Email:</span> {user.email}</p>

                    <p><span className="font-semibold">State:</span> {user.state}</p>
                    <p><span className="font-semibold">District:</span> {user.district}</p>

                    <p><span className="font-semibold">Block:</span> {user.block}</p>
                    <p><span className="font-semibold">Gram:</span> {user.gram}</p>

                    <p><span className="font-semibold">Samiti:</span> {user.samiti}</p>
                    <p><span className="font-semibold">Village:</span> {user.village}</p>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default UserProfile;

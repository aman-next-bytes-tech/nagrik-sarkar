import React, { useState } from "react";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        aadhar: "",
        email: "",
        state: "",
        district: "",
        block: "",
        gram: "",
        samiti: "",
        village: "",
        password: "",
        repassword: "",
        profilePhoto: null,
    });

    const [photoPreview, setPhotoPreview] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhoto = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, profilePhoto: file });

        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPhotoPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.phone || !form.aadhar) {
            alert("Please fill all mandatory fields!");
            return;
        }

        if (form.password !== form.repassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Registration Successful!");
        console.log("REGISTER DATA:", form);
    };

    return (
        <div className="flex justify-center items-center py-10 bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
                    Registration
                </h2>

                {/* Profile Photo */}
                <div className="flex flex-col items-center mb-6">
                    <div className="relative w-28 h-28">
                        <img
                            src={photoPreview || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                            alt="Profile"
                            className="w-28 h-28 rounded-full object-cover border shadow"
                        />
                        <label className="absolute bottom-0 right-0 bg-indigo-500 text-white text-xs px-2 py-[2px] rounded cursor-pointer hover:bg-indigo-400">
                            Change
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handlePhoto}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>

                {/* PERSONAL DETAILS */}
                <h3 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-1">
                    Personal Details
                </h3>

                <div className="space-y-3 mb-6">
                    <div>
                        <label className="block text-sm mb-1 font-medium">Full Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Phone Number *</label>
                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Aadhar Number *</label>
                        <input
                            type="text"
                            name="aadhar"
                            value={form.aadhar}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Email (Optional)</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>
                </div>

                {/* ADDRESS DETAILS */}
                <h3 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-1">
                    Address Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                    <div>
                        <label className="block text-sm mb-1 font-medium">State</label>
                        <input
                            type="text"
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">District</label>
                        <input
                            type="text"
                            name="district"
                            value={form.district}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Block</label>
                        <input
                            type="text"
                            name="block"
                            value={form.block}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Gram</label>
                        <input
                            type="text"
                            name="gram"
                            value={form.gram}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Samiti</label>
                        <input
                            type="text"
                            name="samiti"
                            value={form.samiti}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Village</label>
                        <input
                            type="text"
                            name="village"
                            value={form.village}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>
                </div>

                {/* PASSWORD SECTION */}
                <h3 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-1">
                    Security
                </h3>

                <div className="space-y-3 mb-6">
                    <div>
                        <label className="block text-sm mb-1 font-medium">Password *</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Confirm Password *</label>
                        <input
                            type="password"
                            name="repassword"
                            value={form.repassword}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none"
                        />
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-md text-lg font-semibold shadow-md transition-all"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

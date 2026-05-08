import React, { useState } from "react";

const RegisterForVolunteer = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        dob: "",
        gender: "",
        married: "",
        aadhar: "",
        education: "",
        experience: "",
        siblings: "",
        fatherOccupation: "",
        aboutFamily: "",
        aboutYourself: "",
        state: "",
        district: "",
        block: "",
        village: "",
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

        alert("Volunteer Registration Successful!");
        console.log("VOLUNTEER DATA:", form);
    };

    return (
        <div className="flex justify-center items-center py-10 bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
                    Volunteer Registration
                </h2>

                {/* Profile Photo */}
                <div className="flex justify-center mb-6">
                    <div className="relative w-28 h-28">
                        <img
                            src={
                                photoPreview ||
                                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            }
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm mb-1 font-medium">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">
                            Phone Number *
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">
                            Email (Optional)
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">
                            Aadhar Number *
                        </label>
                        <input
                            type="text"
                            name="aadhar"
                            value={form.aadhar}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Date of Birth *</label>
                        <input
                            type="date"
                            name="dob"
                            value={form.dob}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400 focus:ring-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Gender *</label>
                        <select
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400 focus:ring-1"
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Marital Status *</label>
                        <select
                            name="married"
                            value={form.married}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        >
                            <option value="">Select</option>
                            <option value="Married">Married</option>
                            <option value="Unmarried">Unmarried</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Siblings</label>
                        <input
                            type="number"
                            name="siblings"
                            value={form.siblings}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        />
                    </div>
                </div>

                {/* EDUCATION & EXPERIENCE */}
                <h3 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-1">
                    Education & Experience
                </h3>

                <div className="space-y-4 mb-6">
                    <div>
                        <label className="block text-sm mb-1 font-medium">Education</label>
                        <input
                            type="text"
                            name="education"
                            value={form.education}
                            onChange={handleChange}
                            placeholder="Highest Qualification"
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Experience</label>
                        <textarea
                            name="experience"
                            rows="2"
                            value={form.experience}
                            onChange={handleChange}
                            placeholder="Any volunteer, job or leadership experience"
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        ></textarea>
                    </div>
                </div>

                {/* FAMILY DETAILS */}
                <h3 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-1">
                    Family Details
                </h3>

                <div className="space-y-4 mb-6">
                    <div>
                        <label className="block text-sm mb-1 font-medium">
                            Father's Occupation
                        </label>
                        <input
                            type="text"
                            name="fatherOccupation"
                            value={form.fatherOccupation}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">About Your Family/Father i.e, Occupation/Profession etc.</label>
                        <textarea
                            name="aboutFamily"
                            rows="2"
                            value={form.aboutFamily}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        ></textarea>
                    </div>
                </div>

                {/* ABOUT YOURSELF */}
                <h3 className="text-lg font-semibold mb-3 text-gray-700 border-b pb-1">
                   Speak About Yourself
                </h3>

                <div className="mb-6">
                    <textarea
                        name="aboutYourself"
                        rows="3"
                        placeholder="Tell us something about yourself, skills, motivation, etc."
                        value={form.aboutYourself}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                    ></textarea>
                </div>

                {/* ADDRESS INFORMATION */}
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
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">District</label>
                        <input
                            type="text"
                            name="district"
                            value={form.district}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Block</label>
                        <input
                            type="text"
                            name="block"
                            value={form.block}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 font-medium">Gram Samiti</label>
                        <input
                            type="text"
                            name="gramSamiti"
                            value={form.gramSamiti}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        />
                    </div>
                                        <div>
                        <label className="block text-sm mb-1 font-medium">Village</label>
                        <input
                            type="text"
                            name="village"
                            value={form.village}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        />
                    </div>
                                        <div>
                        <label className="block text-sm mb-1 font-medium">House Name/No.</label>
                        <input
                            type="text"
                            name="houseName"
                            value={form.houseName}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-indigo-400"
                        />
                    </div>
                </div>

                {/* SUBMIT */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-md text-lg font-semibold shadow-md transition-all"
                >
                    Register as Volunteer
                </button>
            </form>
        </div>
    );
};

export default RegisterForVolunteer;

// pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState(null);

    const [step, setStep] = useState("credentials");
    const [error, setError] = useState("");

    // Dummy Credentials
    const correctPhone = "9876543210";
    const correctPassword = "123456";

    const handleVerifyCredentials = () => {
        if (phone === correctPhone && password === correctPassword) {
            setError("");

            const randomOtp = Math.floor(1000 + Math.random() * 9000);
            console.log("Your OTP is:", randomOtp);

            setGeneratedOtp(randomOtp);
            setStep("otp");
        } else {
            setError("Invalid phone number or password!");
        }
    };

    const handleVerifyOtp = () => {
        if (otp == generatedOtp) {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    phone: phone,
                    isLoggedIn: true,
                })
            );
            navigate("/dashboard");
        } else {
            alert("Invalid OTP!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[85vh] bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
                    Login Page
                </h2>

                {/* STEP 1 — PHONE + PASSWORD */}
                {step === "credentials" && (
                    <div className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium mb-1">Phone Number</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 focus:ring-1 focus:ring-indigo-400 focus:border-indigo-500 outline-none"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full border rounded-md px-3 py-2 focus:ring-1 focus:ring-indigo-400 focus:border-indigo-500 outline-none"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        <button
                            onClick={handleVerifyCredentials}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-md text-lg font-semibold shadow-md"
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* STEP 2 — OTP BOX */}
                {step === "otp" && (
                    <div className="space-y-4">

                        <h3 className="text-lg font-semibold text-gray-700 border-b pb-1">
                            Enter OTP
                        </h3>

                        <div>
                            <label className="block text-sm font-medium mb-1">OTP</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 focus:ring-1 focus:ring-indigo-400 focus:border-indigo-500 outline-none"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={handleVerifyOtp}
                            className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-md text-lg font-semibold shadow-md"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;

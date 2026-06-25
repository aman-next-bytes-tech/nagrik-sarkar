import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  LockKeyhole,
  Phone,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import api from "../../api.js";

const inputClass =
  "min-h-11 w-full rounded-[8px] border border-gray-200 bg-white px-3 py-2 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100";

const Login = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [pendingCitizen, setPendingCitizen] = useState(null);
  const [step, setStep] = useState("credentials");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerifyCredentials = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/public/citizens/login", {
        phone,
        password,
      });
      const randomOtp = Math.floor(1000 + Math.random() * 9000);
      console.log("Your OTP is:", randomOtp);

      setPendingCitizen(res.data.citizen);
      setGeneratedOtp(randomOtp);
      setStep("otp");
    } catch (err) {
      setError(
        err.response?.data?.message || "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp === String(generatedOtp)) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          phone,
          isLoggedIn: true,
        })
      );

      if (pendingCitizen) {
        localStorage.setItem("citizenProfile", JSON.stringify(pendingCitizen));
      }

      navigate("/dashboard");
      return;
    }

    setError("Invalid OTP.");
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#f6f7fb] px-4 py-10">
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-[8px] border border-gray-200 bg-white shadow-sm">
        <section className="p-6 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-md">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Welcome Back
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-950">
              Login to your account
            </h2>

            <div className="mt-8 rounded-[8px] border border-gray-200 bg-gray-50 p-1">
              <div className="grid grid-cols-2 gap-1">
                <div
                  className={`rounded-[8px] px-3 py-2 text-center text-sm font-bold ${
                    step === "credentials"
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-gray-500"
                  }`}
                >
                  Credentials
                </div>
                <div
                  className={`rounded-[8px] px-3 py-2 text-center text-sm font-bold ${
                    step === "otp"
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-gray-500"
                  }`}
                >
                  OTP
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-5 rounded-[8px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
                {error}
              </div>
            )}

            {step === "credentials" && (
              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-sm font-bold text-gray-800">
                    <Phone size={16} className="text-gray-500" />
                    Phone Number
                  </span>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-sm font-bold text-gray-800">
                    <LockKeyhole size={16} className="text-gray-500" />
                    Password
                  </span>
                  <input
                    type="password"
                    className={inputClass}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>

                <button
                  type="button"
                  onClick={handleVerifyCredentials}
                  disabled={loading}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
                >
                  {loading ? "Checking..." : "Continue"}
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            {step === "otp" && (
              <div className="mt-6 space-y-4">
                <div className="rounded-[8px] border border-indigo-100 bg-indigo-50 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-indigo-600 text-white">
                      <Smartphone size={19} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-950">
                        OTP sent for verification
                      </p>
                      <p className="text-xs text-gray-600">
                        Check console in this demo.
                      </p>
                    </div>
                  </div>
                </div>

                <label className="block">
                  <span className="mb-1.5 text-sm font-bold text-gray-800">
                    OTP
                  </span>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </label>

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  <ShieldCheck size={18} />
                  Verify OTP
                </button>
              </div>
            )}

            <p className="mt-6 text-center text-sm text-gray-600">
              New citizen?{" "}
              <Link
                to="/register"
                className="font-bold text-indigo-600 hover:text-indigo-700"
              >
                Create account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;

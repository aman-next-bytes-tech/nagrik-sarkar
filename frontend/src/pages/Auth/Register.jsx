import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AlertCircle,
  Camera,
  CheckCircle2,
  IdCard,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import api from "../../api.js";

const inputClass =
  "min-h-11 w-full rounded-[8px] border border-gray-200 bg-white px-3 py-2 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100";

const Field = ({ label, icon: Icon, children }) => (
  <label className="block">
    <span className="mb-1.5 flex items-center gap-2 text-sm font-bold text-gray-800">
      {Icon && <Icon size={16} className="text-gray-500" />}
      {label}
    </span>
    {children}
  </label>
);

const getApiErrorMessage = (err) => {
  const data = err.response?.data;

  if (data?.errors) {
    return Object.values(data.errors).flat().join(" ");
  }

  return data?.message || "Registration failed. Please check your details.";
};

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    aadhar: "",
    email: "",
    stateId: "",
    districtId: "",
    blockId: "",
    gramId: "",
    samiti: "",
    village: "",
    password: "",
    repassword: "",
    profilePhoto: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [grams, setGrams] = useState([]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api
      .get("/public/states")
      .then((res) => setStates(res.data))
      .catch((err) => {
        console.error("Failed to load states", err);
        setMessage("Unable to load state list.");
      });
  }, []);

  useEffect(() => {
    if (!form.stateId) {
      setDistricts([]);
      return;
    }

    api
      .get("/public/districts", { params: { state_id: form.stateId } })
      .then((res) => setDistricts(res.data))
      .catch((err) => {
        console.error("Failed to load districts", err);
        setMessage("Unable to load districts.");
      });
  }, [form.stateId]);

  useEffect(() => {
    if (!form.districtId) {
      setBlocks([]);
      return;
    }

    api
      .get("/public/blocks", { params: { district_id: form.districtId } })
      .then((res) => setBlocks(res.data))
      .catch((err) => {
        console.error("Failed to load blocks", err);
        setMessage("Unable to load blocks.");
      });
  }, [form.districtId]);

  useEffect(() => {
    if (!form.blockId) {
      setGrams([]);
      return;
    }

    api
      .get("/public/gps", { params: { block_id: form.blockId } })
      .then((res) => setGrams(res.data))
      .catch((err) => {
        console.error("Failed to load gram panchayats", err);
        setMessage("Unable to load gram panchayats.");
      });
  }, [form.blockId]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => {
      const next = { ...current, [name]: value };

      if (name === "stateId") {
        next.districtId = "";
        next.blockId = "";
        next.gramId = "";
      }

      if (name === "districtId") {
        next.blockId = "";
        next.gramId = "";
      }

      if (name === "blockId") {
        next.gramId = "";
      }

      return next;
    });

    setMessage("");
  };

  const showSequenceMessage = (field) => {
    if (field === "district" && !form.stateId) {
      setMessage("Please select state first.");
      return;
    }

    if (field === "block" && !form.districtId) {
      setMessage("Please select district first.");
      return;
    }

    if (field === "gram" && !form.blockId) {
      setMessage("Please select block first.");
      return;
    }

    setMessage("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const aadhaar = form.aadhar.replace(/\D/g, "");
    const phone = form.phone.replace(/\D/g, "");

    if (!form.name || !form.phone || !form.aadhar) {
      setMessage("Please fill all mandatory personal details.");
      return;
    }

    if (phone.length < 10) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    if (aadhaar.length !== 12) {
      setMessage("Aadhaar number must be 12 digits.");
      return;
    }

    if (!form.stateId || !form.districtId || !form.blockId || !form.gramId) {
      setMessage("Please complete state, district, block and gram selection.");
      return;
    }

    if (form.password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.repassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const payload = new FormData();

      payload.append("name", form.name);
      payload.append("phone", phone);
      payload.append("email", form.email);
      payload.append("aadhaar", aadhaar);
      payload.append("state_id", form.stateId);
      payload.append("district_id", form.districtId);
      payload.append("block_id", form.blockId);
      payload.append("gp_id", form.gramId);
      payload.append("village", form.village);
      payload.append("password", form.password);

      if (form.profilePhoto) {
        payload.append("profile_photo", form.profilePhoto);
      }

      const res = await api.post("/public/citizens", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      localStorage.setItem(
        "user",
        JSON.stringify({
          phone,
          isLoggedIn: true,
        })
      );
      localStorage.setItem("citizenProfile", JSON.stringify(res.data.citizen));

      setMessage("Registration successful.");
      navigate("/dashboard");
    } catch (err) {
      setMessage(getApiErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#f6f7fb] px-4 py-10">
      <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-[8px] border border-gray-200 bg-white shadow-sm">
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Citizen Registration
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-950">
                Register account
              </h2>
            </div>

            <div className="relative h-24 w-24 shrink-0">
              <img
                src={
                  photoPreview ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt="Profile"
                className="h-24 w-24 rounded-[8px] border border-gray-200 bg-white object-cover shadow-sm"
              />
              <label className="absolute bottom-2 right-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-[8px] bg-gray-950 text-white shadow-sm transition hover:bg-indigo-700">
                <Camera size={17} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhoto}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {message && (
            <div
              className={`mb-6 flex items-start gap-3 rounded-[8px] border px-4 py-3 text-sm font-semibold ${
                message.includes("successful")
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-amber-200 bg-amber-50 text-amber-800"
              }`}
            >
              {message.includes("successful") ? (
                <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
              ) : (
                <AlertCircle className="mt-0.5 shrink-0" size={18} />
              )}
              <span>{message}</span>
            </div>
          )}

          <section className="mb-7">
            <div className="mb-4 flex items-center gap-3 border-b border-gray-200 pb-3">
              <span className="rounded-[8px] bg-indigo-100 p-2 text-indigo-700">
                <UserRound size={19} />
              </span>
              <h3 className="text-lg font-bold text-gray-950">
                Personal Details
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Full Name *" icon={UserRound}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Phone Number *" icon={Phone}>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Aadhaar Number *" icon={IdCard}>
                <input
                  type="text"
                  name="aadhar"
                  value={form.aadhar}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Email" icon={Mail}>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>
            </div>
          </section>

          <section className="mb-7">
            <div className="mb-4 flex items-center gap-3 border-b border-gray-200 pb-3">
              <span className="rounded-[8px] bg-emerald-100 p-2 text-emerald-700">
                <MapPin size={19} />
              </span>
              <h3 className="text-lg font-bold text-gray-950">
                Address Information
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="State *">
                <select
                  name="stateId"
                  value={form.stateId}
                  onChange={handleLocationChange}
                  className={inputClass}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="District *">
                <select
                  name="districtId"
                  value={form.districtId}
                  onFocus={() => showSequenceMessage("district")}
                  onMouseDown={() => showSequenceMessage("district")}
                  onChange={handleLocationChange}
                  className={inputClass}
                >
                  <option value="">
                    {form.stateId ? "Select District" : "Select state first"}
                  </option>
                  {districts.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Block *">
                <select
                  name="blockId"
                  value={form.blockId}
                  onFocus={() => showSequenceMessage("block")}
                  onMouseDown={() => showSequenceMessage("block")}
                  onChange={handleLocationChange}
                  className={inputClass}
                >
                  <option value="">
                    {form.districtId ? "Select Block" : "Select district first"}
                  </option>
                  {blocks.map((block) => (
                    <option key={block.id} value={block.id}>
                      {block.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Gram Panchayat *">
                <select
                  name="gramId"
                  value={form.gramId}
                  onFocus={() => showSequenceMessage("gram")}
                  onMouseDown={() => showSequenceMessage("gram")}
                  onChange={handleLocationChange}
                  className={inputClass}
                >
                  <option value="">
                    {form.blockId ? "Select Gram Panchayat" : "Select block first"}
                  </option>
                  {grams.map((gram) => (
                    <option key={gram.id} value={gram.id}>
                      {gram.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Samiti">
                <input
                  type="text"
                  name="samiti"
                  value={form.samiti}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Village">
                <input
                  type="text"
                  name="village"
                  value={form.village}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>
            </div>
          </section>

          <section className="mb-7">
            <div className="mb-4 flex items-center gap-3 border-b border-gray-200 pb-3">
              <span className="rounded-[8px] bg-amber-100 p-2 text-amber-700">
                <LockKeyhole size={19} />
              </span>
              <h3 className="text-lg font-bold text-gray-950">Security</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Password *" icon={LockKeyhole}>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Confirm Password *" icon={ShieldCheck}>
                <input
                  type="password"
                  name="repassword"
                  value={form.repassword}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>
            </div>
          </section>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
          >
            <ShieldCheck size={18} />
            {submitting ? "Registering..." : "Register"}
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already registered?{" "}
            <Link
              to="/login"
              className="font-bold text-indigo-600 hover:text-indigo-700"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

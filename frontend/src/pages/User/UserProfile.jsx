import React, { useEffect, useState } from "react";
import {
  BadgeCheck,
  Camera,
  Home,
  IdCard,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Save,
  UserRound,
  X,
} from "lucide-react";
import api from "../../api.js";
import DashboardLayout from "./DashboardLayout";

const inputClass =
  "min-h-11 w-full rounded-[8px] border border-gray-200 bg-white px-3 py-2 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 disabled:bg-gray-100";

const fallbackProfileImg =
  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

const emptyProfile = {
  id: "",
  name: "",
  phone: "",
  email: "",
  aadhaar: "",
  village: "",
  pincode: "",
  address: "",
  profile_photo_path: "",
  profile_photo_url: "",
  location: {
    state_id: "",
    state: "",
    district_id: "",
    district: "",
    block_id: "",
    block: "",
    gp_id: "",
    gp: "",
  },
};

const Field = ({ label, icon: Icon, children }) => (
  <label className="block">
    <span className="mb-1.5 flex items-center gap-2 text-sm font-bold text-gray-800">
      {Icon && <Icon size={16} className="text-gray-500" />}
      {label}
    </span>
    {children}
  </label>
);

const getProfilePhotoSrc = (citizen) =>
  citizen.profile_photo_url
    ? `${citizen.profile_photo_url}?v=${Date.now()}`
    : fallbackProfileImg;

const UserProfile = () => {
  const [profileImg, setProfileImg] = useState(fallbackProfileImg);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profile, setProfile] = useState(emptyProfile);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    aadhaar: "",
    stateId: "",
    districtId: "",
    blockId: "",
    gpId: "",
    village: "",
    pincode: "",
    address: "",
    password: "",
  });
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [gps, setGps] = useState([]);
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const syncForm = (citizen) => {
    setForm({
      name: citizen.name || "",
      phone: citizen.phone || "",
      email: citizen.email || "",
      aadhaar: citizen.aadhaar || "",
      stateId: citizen.location?.state_id || "",
      districtId: citizen.location?.district_id || "",
      blockId: citizen.location?.block_id || "",
      gpId: citizen.location?.gp_id || "",
      village: citizen.village || "",
      pincode: citizen.pincode || "",
      address: citizen.address || "",
      password: "",
    });
  };

  const applyProfile = (citizen) => {
    const nextProfile = {
      ...emptyProfile,
      ...citizen,
      location: {
        ...emptyProfile.location,
        ...(citizen.location || {}),
      },
    };

    setProfile(nextProfile);
    setProfileImg(getProfilePhotoSrc(nextProfile));
    syncForm(nextProfile);
  };

  useEffect(() => {
    api
      .get("/public/states")
      .then((res) => setStates(res.data))
      .catch((err) => console.error("Unable to load states", err));

    const savedProfile = localStorage.getItem("citizenProfile");

    if (savedProfile) {
      applyProfile(JSON.parse(savedProfile));
      return;
    }

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      return;
    }

    const currentUser = JSON.parse(savedUser);

    if (!currentUser.phone) {
      return;
    }

    api
      .get(`/public/citizens/${currentUser.phone}`)
      .then((res) => {
        localStorage.setItem("citizenProfile", JSON.stringify(res.data.citizen));
        applyProfile(res.data.citizen);
      })
      .catch((err) => console.error("Unable to load citizen profile", err));
  }, []);

  useEffect(() => {
    if (!form.stateId) {
      setDistricts([]);
      return;
    }

    api
      .get("/public/districts", { params: { state_id: form.stateId } })
      .then((res) => setDistricts(res.data))
      .catch((err) => console.error("Unable to load districts", err));
  }, [form.stateId]);

  useEffect(() => {
    if (!form.districtId) {
      setBlocks([]);
      return;
    }

    api
      .get("/public/blocks", { params: { district_id: form.districtId } })
      .then((res) => setBlocks(res.data))
      .catch((err) => console.error("Unable to load blocks", err));
  }, [form.districtId]);

  useEffect(() => {
    if (!form.blockId) {
      setGps([]);
      return;
    }

    api
      .get("/public/gps", { params: { block_id: form.blockId } })
      .then((res) => setGps(res.data))
      .catch((err) => console.error("Unable to load gram panchayats", err));
  }, [form.blockId]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      const reader = new FileReader();
      reader.onload = () => setProfileImg(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => {
      const next = { ...current, [name]: value };

      if (name === "stateId") {
        next.districtId = "";
        next.blockId = "";
        next.gpId = "";
      }

      if (name === "districtId") {
        next.blockId = "";
        next.gpId = "";
      }

      if (name === "blockId") {
        next.gpId = "";
      }

      return next;
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setMessage("");
    setSaving(true);

    try {
      const payload = {
        citizen_id: profile.id || "",
        current_phone:
          profile.phone ||
          JSON.parse(localStorage.getItem("user") || "{}").phone ||
          form.phone,
        name: form.name,
        phone: form.phone,
        email: form.email,
        aadhaar: form.aadhaar.replace(/\D/g, ""),
        state_id: form.stateId,
        district_id: form.districtId,
        block_id: form.blockId,
        gp_id: form.gpId,
        village: form.village,
        pincode: form.pincode,
        address: form.address,
      };

      if (form.password) {
        payload.password = form.password;
      }

      const updatePhone = encodeURIComponent(payload.current_phone || "");
      const endpoint = updatePhone
        ? `/public/citizens/${updatePhone}`
        : "/public/citizens";

      let res;

      if (profilePhoto) {
        const multipartPayload = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
          multipartPayload.append(key, value ?? "");
        });

        multipartPayload.append("profile_photo", profilePhoto);
        res = await api.post(endpoint, multipartPayload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        res = await api.put(endpoint, payload);
      }

      localStorage.setItem("citizenProfile", JSON.stringify(res.data.citizen));
      localStorage.setItem(
        "user",
        JSON.stringify({ phone: res.data.citizen.phone, isLoggedIn: true })
      );
      applyProfile(res.data.citizen);
      setProfilePhoto(null);
      setEditing(false);
      setMessage("Profile updated successfully.");
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          "Unable to update profile. Please check the details."
      );
    } finally {
      setSaving(false);
    }
  };

  const contactItems = [
    { label: "Email", value: profile.email || "Not added", icon: Mail },
    { label: "Phone", value: profile.phone || "Not added", icon: Phone },
    { label: "Aadhaar", value: profile.aadhaar || "Not added", icon: IdCard },
  ];

  const locationItems = [
    { label: "State", value: profile.location.state || "Not added" },
    { label: "District", value: profile.location.district || "Not added" },
    { label: "Block", value: profile.location.block || "Not added" },
    { label: "Gram Panchayat", value: profile.location.gp || "Not added" },
    { label: "Village", value: profile.village || "Not added" },
    { label: "Pincode", value: profile.pincode || "Not added" },
  ];

  return (
    <DashboardLayout>
      <div className="mb-6 flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Profile
        </p>
        <h1 className="text-2xl font-bold text-gray-950">
          Citizen Information
        </h1>
      </div>

      {message && (
        <div
          className={`mb-5 rounded-[8px] border px-4 py-3 text-sm font-semibold ${
            message.includes("success")
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {message}
        </div>
      )}

      <section className="mb-6 overflow-hidden rounded-[8px] border border-gray-200 bg-white shadow-sm">
        <div className="h-28 bg-[linear-gradient(120deg,#4f46e5,#0f766e,#f59e0b)]" />

        <div className="flex flex-col gap-5 px-5 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="relative h-28 w-28 shrink-0">
              <img
                src={profileImg}
                alt="Profile"
                className="h-28 w-28 rounded-[8px] border-4 border-white bg-white object-cover shadow-sm"
              />
              <label className="absolute bottom-2 right-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-[8px] bg-gray-950 text-white shadow-sm transition hover:bg-indigo-700">
                <Camera size={17} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </label>
            </div>

            <div className="pb-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-950">
                  {profile.name || "Citizen"}
                </h2>
                <span className="inline-flex items-center gap-1 rounded-[8px] border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">
                  <BadgeCheck size={14} />
                  Verified
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Registered citizen profile for grievance services.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (editing) {
                syncForm(profile);
                setProfilePhoto(null);
                setProfileImg(getProfilePhotoSrc(profile));
                setEditing(false);
              } else {
                setEditing(true);
              }
            }}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
          >
            {editing ? <X size={17} /> : <Pencil size={17} />}
            {editing ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </section>

      {editing ? (
        <form
          onSubmit={handleSave}
          className="rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Full Name *" icon={UserRound}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </Field>

            <Field label="Phone *" icon={Phone}>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
                required
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

            <Field label="Aadhaar" icon={IdCard}>
              <input
                name="aadhaar"
                value={form.aadhaar}
                onChange={handleChange}
                className={inputClass}
                maxLength="12"
              />
            </Field>

            <Field label="State *">
              <select
                name="stateId"
                value={form.stateId}
                onChange={handleLocationChange}
                className={inputClass}
                required
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
                onChange={handleLocationChange}
                className={inputClass}
                disabled={!form.stateId}
                required
              >
                <option value="">Select District</option>
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
                onChange={handleLocationChange}
                className={inputClass}
                disabled={!form.districtId}
                required
              >
                <option value="">Select Block</option>
                {blocks.map((block) => (
                  <option key={block.id} value={block.id}>
                    {block.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Gram Panchayat *">
              <select
                name="gpId"
                value={form.gpId}
                onChange={handleLocationChange}
                className={inputClass}
                disabled={!form.blockId}
                required
              >
                <option value="">Select Gram Panchayat</option>
                {gps.map((gp) => (
                  <option key={gp.id} value={gp.id}>
                    {gp.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Village">
              <input
                name="village"
                value={form.village}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Pincode">
              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                className={inputClass}
                maxLength="6"
              />
            </Field>

            <div className="md:col-span-2">
              <Field label="Address">
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="md:col-span-2">
              <Field label="New Password">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Leave blank to keep current password"
                />
              </Field>
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save Profile"}
          </button>
        </form>
      ) : (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-[8px] bg-indigo-100 p-3 text-indigo-700">
                <UserRound size={22} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-950">
                  Contact Details
                </h2>
                <p className="text-sm text-gray-500">
                  Used for updates and verification.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-[8px] border border-gray-200 p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-gray-100 text-gray-700">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-gray-950">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-[8px] bg-emerald-100 p-3 text-emerald-700">
                <MapPin size={22} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-950">
                  Location Details
                </h2>
                <p className="text-sm text-gray-500">
                  Helps route grievances to the right office.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {locationItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[8px] border border-gray-200 p-4"
                >
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-gray-950">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-[8px] border border-amber-100 bg-amber-50 p-4">
              <Home className="mt-0.5 text-amber-700" size={18} />
              <p className="text-sm leading-6 text-amber-800">
                Keep this address updated so assigned officers can route and
                verify applications faster.
              </p>
            </div>
          </section>
        </div>
      )}
    </DashboardLayout>
  );
};

export default UserProfile;

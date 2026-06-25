import React, { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  BriefcaseBusiness,
  Calendar,
  Camera,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Home,
  IdCard,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import api from "../../api.js";

const inputClass =
  "min-h-11 w-full rounded-[8px] border border-gray-200 bg-white px-3 py-2 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100";
const inputErrorClass =
  "!border-red-500 !bg-red-50 focus:!border-red-500 focus:!ring-red-100";

const Field = ({ label, icon: Icon, children, error }) => (
  <label className="block">
    <span className="mb-1.5 flex items-center gap-2 text-sm font-bold text-gray-800">
      {Icon && <Icon size={16} className="text-gray-500" />}
      {label}
    </span>
    {children}
    {error && <span className="mt-1 block text-xs font-semibold text-red-600">{error}</span>}
  </label>
);

const backendFieldMap = {
  aadhaar: "aadhar",
  marital_status: "married",
  state_id: "stateId",
  district_id: "districtId",
  block_id: "blockId",
  gp_id: "gramId",
  father_occupation: "fatherOccupation",
  about_family: "aboutFamily",
  about_yourself: "aboutYourself",
  house_name: "houseName",
  profile_photo: "profilePhoto",
};

const SectionHeading = ({ icon: Icon, title, tone = "indigo" }) => {
  const tones = {
    indigo: "bg-indigo-100 text-indigo-700",
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    rose: "bg-rose-100 text-rose-700",
    sky: "bg-sky-100 text-sky-700",
  };

  return (
    <div className="mb-4 flex items-center gap-3 border-b border-gray-200 pb-3">
      <span className={`rounded-[8px] p-2 ${tones[tone]}`}>
        <Icon size={19} />
      </span>
      <h3 className="text-lg font-bold text-gray-950">{title}</h3>
    </div>
  );
};

const RegisterForVolunteer = () => {
  const fieldRefs = useRef({});
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
    stateId: "",
    districtId: "",
    blockId: "",
    gramId: "",
    village: "",
    houseName: "",
    profilePhoto: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [grams, setGrams] = useState([]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
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
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    clearFieldError(name);
    setMessage("");
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

    const clearedFields = [name];

    if (name === "stateId") {
      clearedFields.push("districtId", "blockId", "gramId");
    }

    if (name === "districtId") {
      clearedFields.push("blockId", "gramId");
    }

    if (name === "blockId") {
      clearedFields.push("gramId");
    }

    clearFieldErrors(clearedFields);
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
    clearFieldError("profilePhoto");
    setMessage("");

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const setFieldRef = (name) => (element) => {
    if (element) {
      fieldRefs.current[name] = element;
    }
  };

  const focusField = (name) => {
    const element = fieldRefs.current[name];

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => {
      element.focus({ preventScroll: true });
    }, 250);
  };

  const clearFieldError = (name) => {
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const clearFieldErrors = (names) => {
    setErrors((current) => {
      const next = { ...current };
      let changed = false;

      names.forEach((name) => {
        if (next[name]) {
          delete next[name];
          changed = true;
        }
      });

      return changed ? next : current;
    });
  };

  const fieldClass = (name) =>
    `${inputClass} ${errors[name] ? inputErrorClass : ""}`;

  const applyValidationErrors = (nextErrors, fallbackMessage) => {
    const firstField = Object.keys(nextErrors)[0];

    setErrors(nextErrors);
    setMessage(nextErrors[firstField] || fallbackMessage);

    if (firstField) {
      window.setTimeout(() => focusField(firstField), 0);
    }
  };

  const validateForm = (phone, aadhaar) => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (phone.length < 10) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.aadhar.trim()) {
      nextErrors.aadhar = "Aadhaar number is required.";
    } else if (aadhaar.length !== 12) {
      nextErrors.aadhar = "Aadhaar number must be 12 digits.";
    }

    if (!form.stateId) {
      nextErrors.stateId = "Please select state.";
    } else if (!form.districtId) {
      nextErrors.districtId = "Please select district.";
    } else if (!form.blockId) {
      nextErrors.blockId = "Please select block.";
    } else if (!form.gramId) {
      nextErrors.gramId = "Please select gram panchayat.";
    }

    return nextErrors;
  };

  const normalizeBackendErrors = (validationErrors) => {
    if (!validationErrors) {
      return {};
    }

    return Object.entries(validationErrors).reduce((nextErrors, [field, messages]) => {
      const frontendField = backendFieldMap[field] || field;
      nextErrors[frontendField] = Array.isArray(messages) ? messages[0] : messages;
      return nextErrors;
    }, {});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const aadhaar = form.aadhar.replace(/\D/g, "");
    const phone = form.phone.replace(/\D/g, "");
    const frontendErrors = validateForm(phone, aadhaar);

    if (Object.keys(frontendErrors).length > 0) {
      applyValidationErrors(
        frontendErrors,
        "Please correct the highlighted fields."
      );
      return;
    }

    setSubmitting(true);
    setMessage("");
    setErrors({});

    const payload = new FormData();
    payload.append("name", form.name);
    payload.append("phone", phone);
    payload.append("email", form.email);
    payload.append("aadhaar", aadhaar);
    payload.append("dob", form.dob);
    payload.append("gender", form.gender);
    payload.append("marital_status", form.married);
    payload.append("siblings", form.siblings);
    payload.append("education", form.education);
    payload.append("experience", form.experience);
    payload.append("father_occupation", form.fatherOccupation);
    payload.append("about_family", form.aboutFamily);
    payload.append("about_yourself", form.aboutYourself);
    payload.append("state_id", form.stateId);
    payload.append("district_id", form.districtId);
    payload.append("block_id", form.blockId);
    payload.append("gp_id", form.gramId);
    payload.append("village", form.village);
    payload.append("house_name", form.houseName);

    if (form.profilePhoto) {
      payload.append("profile_photo", form.profilePhoto);
    }

    try {
      const res = await api.post("/public/volunteer-applications", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(
        `Volunteer registration successful. Reference No: ${res.data.reference_no}`
      );
    } catch (err) {
      console.error("Volunteer registration failed", err);
      const validationErrors = err.response?.data?.errors;
      const backendErrors = normalizeBackendErrors(validationErrors);
      const firstError = validationErrors
        ? Object.values(validationErrors).flat()[0]
        : null;

      if (Object.keys(backendErrors).length > 0) {
        applyValidationErrors(
          backendErrors,
          firstError || "Please correct the highlighted fields."
        );
        return;
      }

      setMessage(
        firstError ||
          err.response?.data?.message ||
          "Unable to submit volunteer registration. Please try again."
      );
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
                Volunteer Registration
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-950">
                Register as volunteer
              </h2>
            </div>

            <div
              ref={setFieldRef("profilePhoto")}
              tabIndex="-1"
              className="relative h-24 w-24 shrink-0 outline-none"
            >
              <img
                src={
                  photoPreview ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt="Profile"
                className={`h-24 w-24 rounded-[8px] border bg-white object-cover shadow-sm ${
                  errors.profilePhoto ? "border-red-500 ring-4 ring-red-100" : "border-gray-200"
                }`}
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
              {errors.profilePhoto && (
                <p className="absolute left-0 top-full mt-1 w-56 text-xs font-semibold text-red-600">
                  {errors.profilePhoto}
                </p>
              )}
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
            <SectionHeading icon={UserRound} title="Personal Details" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Full Name *" icon={UserRound} error={errors.name}>
                <input
                  type="text"
                  name="name"
                  ref={setFieldRef("name")}
                  value={form.name}
                  onChange={handleChange}
                  className={fieldClass("name")}
                />
              </Field>

              <Field label="Phone Number *" icon={Phone} error={errors.phone}>
                <input
                  type="text"
                  name="phone"
                  ref={setFieldRef("phone")}
                  value={form.phone}
                  onChange={handleChange}
                  className={fieldClass("phone")}
                />
              </Field>

              <Field label="Email" icon={Mail} error={errors.email}>
                <input
                  type="email"
                  name="email"
                  ref={setFieldRef("email")}
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass("email")}
                />
              </Field>

              <Field label="Aadhaar Number *" icon={IdCard} error={errors.aadhar}>
                <input
                  type="text"
                  name="aadhar"
                  ref={setFieldRef("aadhar")}
                  value={form.aadhar}
                  onChange={handleChange}
                  className={fieldClass("aadhar")}
                />
              </Field>

              <Field label="Date of Birth" icon={Calendar} error={errors.dob}>
                <input
                  type="date"
                  name="dob"
                  ref={setFieldRef("dob")}
                  value={form.dob}
                  onChange={handleChange}
                  className={fieldClass("dob")}
                />
              </Field>

              <Field label="Gender" error={errors.gender}>
                <select
                  name="gender"
                  ref={setFieldRef("gender")}
                  value={form.gender}
                  onChange={handleChange}
                  className={fieldClass("gender")}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </Field>

              <Field label="Marital Status" error={errors.married}>
                <select
                  name="married"
                  ref={setFieldRef("married")}
                  value={form.married}
                  onChange={handleChange}
                  className={fieldClass("married")}
                >
                  <option value="">Select Status</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                </select>
              </Field>

              <Field label="Siblings" icon={UsersRound} error={errors.siblings}>
                <input
                  type="number"
                  name="siblings"
                  ref={setFieldRef("siblings")}
                  value={form.siblings}
                  onChange={handleChange}
                  className={fieldClass("siblings")}
                />
              </Field>
            </div>
          </section>

          <section className="mb-7">
            <SectionHeading
              icon={GraduationCap}
              title="Education & Experience"
              tone="sky"
            />

            <div className="space-y-4">
              <Field label="Education" icon={GraduationCap} error={errors.education}>
                <input
                  type="text"
                  name="education"
                  ref={setFieldRef("education")}
                  value={form.education}
                  onChange={handleChange}
                  placeholder="Highest Qualification"
                  className={fieldClass("education")}
                />
              </Field>

              <Field label="Experience" icon={BriefcaseBusiness} error={errors.experience}>
                <textarea
                  name="experience"
                  ref={setFieldRef("experience")}
                  rows="3"
                  value={form.experience}
                  onChange={handleChange}
                  placeholder="Any volunteer, job or leadership experience"
                  className={fieldClass("experience")}
                />
              </Field>
            </div>
          </section>

          <section className="mb-7">
            <SectionHeading icon={UsersRound} title="Family Details" tone="amber" />

            <div className="space-y-4">
              <Field
                label="Father's Occupation"
                icon={BriefcaseBusiness}
                error={errors.fatherOccupation}
              >
                <input
                  type="text"
                  name="fatherOccupation"
                  ref={setFieldRef("fatherOccupation")}
                  value={form.fatherOccupation}
                  onChange={handleChange}
                  className={fieldClass("fatherOccupation")}
                />
              </Field>

              <Field label="About Your Family" error={errors.aboutFamily}>
                <textarea
                  name="aboutFamily"
                  ref={setFieldRef("aboutFamily")}
                  rows="3"
                  value={form.aboutFamily}
                  onChange={handleChange}
                  placeholder="Family background, occupation, profession, etc."
                  className={fieldClass("aboutFamily")}
                />
              </Field>
            </div>
          </section>

          <section className="mb-7">
            <SectionHeading
              icon={HeartHandshake}
              title="Speak About Yourself"
              tone="rose"
            />

            <Field label="About Yourself" error={errors.aboutYourself}>
              <textarea
                name="aboutYourself"
                ref={setFieldRef("aboutYourself")}
                rows="4"
                placeholder="Tell us about your skills, motivation, and volunteer interests."
                value={form.aboutYourself}
                onChange={handleChange}
                className={fieldClass("aboutYourself")}
              />
            </Field>
          </section>

          <section className="mb-7">
            <SectionHeading
              icon={MapPin}
              title="Address Information"
              tone="emerald"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="State *" error={errors.stateId}>
                <select
                  name="stateId"
                  ref={setFieldRef("stateId")}
                  value={form.stateId}
                  onChange={handleLocationChange}
                  className={fieldClass("stateId")}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="District *" error={errors.districtId}>
                <select
                  name="districtId"
                  ref={setFieldRef("districtId")}
                  value={form.districtId}
                  onFocus={() => showSequenceMessage("district")}
                  onMouseDown={() => showSequenceMessage("district")}
                  onChange={handleLocationChange}
                  className={fieldClass("districtId")}
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

              <Field label="Block *" error={errors.blockId}>
                <select
                  name="blockId"
                  ref={setFieldRef("blockId")}
                  value={form.blockId}
                  onFocus={() => showSequenceMessage("block")}
                  onMouseDown={() => showSequenceMessage("block")}
                  onChange={handleLocationChange}
                  className={fieldClass("blockId")}
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

              <Field label="Gram Panchayat *" error={errors.gramId}>
                <select
                  name="gramId"
                  ref={setFieldRef("gramId")}
                  value={form.gramId}
                  onFocus={() => showSequenceMessage("gram")}
                  onMouseDown={() => showSequenceMessage("gram")}
                  onChange={handleLocationChange}
                  className={fieldClass("gramId")}
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

              <Field label="Village" icon={MapPin} error={errors.village}>
                <input
                  type="text"
                  name="village"
                  ref={setFieldRef("village")}
                  value={form.village}
                  onChange={handleChange}
                  className={fieldClass("village")}
                />
              </Field>

              <Field label="House Name/No." icon={Home} error={errors.houseName}>
                <input
                  type="text"
                  name="houseName"
                  ref={setFieldRef("houseName")}
                  value={form.houseName}
                  onChange={handleChange}
                  className={fieldClass("houseName")}
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
            {submitting ? "Registering..." : "Register as Volunteer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForVolunteer;

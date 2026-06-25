import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  Building2,
  FileText,
  Flag,
  Layers,
  Mail,
  MapPin,
  Phone,
  Send,
  UploadCloud,
  UserRound,
} from "lucide-react";
import api from "../../api.js";
import DashboardLayout from "./DashboardLayout";

const fallbackCategories = [
  "Road & Transport Issues",
  "Water Supply",
  "Electricity / Power Supply",
  "Sanitation & Waste Management",
  "Drainage / Sewer Problems",
  "Health & Hospital Issues",
  "Public Distribution System (Ration)",
  "Aadhar / UIDAI Issues",
  "Income/Caste Certificate Delay",
  "Pension Related Problems",
  "Education & School Issues",
  "Scholarship Issues",
  "Corruption / Bribery Complaint",
  "Police / Law & Order Issues",
  "Women Safety / Harassment",
  "Land & Revenue Issues",
  "Municipal Service Request",
  "Railway Related Issues",
  "Public Transport / Bus Complaints",
  "Employment Exchange Issues",
  "Social Welfare Scheme Problems",
  "Banking Problems",
  "Gas Connection / LPG Issues",
  "Environmental Issues",
];

const fallbackDepartments = [
  "Public Works Department (PWD)",
  "Municipal Corporation / Nagar Nigam",
  "Electricity Board / Energy Department",
  "Water Supply & Sanitation Department",
  "Urban Development Department",
  "Rural Development Department",
  "Panchayati Raj Department",
  "Health & Family Welfare Department",
  "Food & Civil Supplies Department",
  "Education Department",
  "Social Welfare Department",
  "Transport Department",
  "Road Transport Office (RTO)",
  "Revenue Department",
  "Police Department",
  "Women & Child Development Department",
  "Forest & Environment Department",
  "Labour Department",
  "Agriculture Department",
  "Fisheries & Animal Husbandry",
  "Banking / RBI / Nationalised Banks",
  "UIDAI - Aadhaar",
  "LIC / Insurance Department",
  "Postal Department",
  "Gas Agencies (Bharat Gas / HP Gas / Indane)",
  "Railways - Indian Railways Service",
];

const inputClass =
  "min-h-11 w-full rounded-[8px] border border-gray-200 bg-white px-3 py-2 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 disabled:bg-gray-100";

const Field = ({ label, icon: Icon, children }) => (
  <label className="block">
    <span className="mb-1.5 flex items-center gap-2 text-sm font-bold text-gray-800">
      {Icon && <Icon size={16} className="text-gray-500" />}
      {label}
    </span>
    {children}
  </label>
);

const SectionHeader = ({ icon: Icon, title, description }) => (
  <div className="mb-5 flex items-start gap-3">
    <div className="rounded-[8px] bg-indigo-100 p-3 text-indigo-700">
      <Icon size={21} />
    </div>
    <div>
      <h2 className="text-lg font-bold text-gray-950">{title}</h2>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const ApplyGrievance = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    citizenName: "",
    phone: "",
    email: "",
    address: "",
    village: "",
    pincode: "",
    stateId: "",
    districtId: "",
    blockId: "",
    gpId: "",
    title: "",
    description: "",
    category: "",
    customCategory: "",
    department: "",
    customDepartment: "",
    priority: "medium",
    document: null,
  });

  const [categories, setCategories] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [gps, setGps] = useState([]);
  const [profile, setProfile] = useState(null);
  const [useProfileAddress, setUseProfileAddress] = useState(true);
  const [docPreview, setDocPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fillFormFromProfile = (citizen) => {
    setForm((current) => ({
      ...current,
      citizenName: citizen.name || current.citizenName,
      phone: citizen.phone || current.phone,
      email: citizen.email || current.email,
      address: citizen.address || "",
      village: citizen.village || "",
      pincode: citizen.pincode || "",
      stateId: citizen.location?.state_id || "",
      districtId: citizen.location?.district_id || "",
      blockId: citizen.location?.block_id || "",
      gpId: citizen.location?.gp_id || "",
    }));
  };

  useEffect(() => {
    const loadOptions = async () => {
      try {
        const [categoryRes, departmentRes, stateRes] = await Promise.all([
          api.get("/public/categories"),
          api.get("/public/departments"),
          api.get("/public/states"),
        ]);

        setCategories(categoryRes.data);
        setDepartments(departmentRes.data);
        setStates(stateRes.data);
      } catch (err) {
        console.error("Failed to load grievance options", err);
      }
    };

    loadOptions();
  }, []);

  useEffect(() => {
    const savedProfile = localStorage.getItem("citizenProfile");
    const savedUser = localStorage.getItem("user");

    if (savedProfile) {
      const citizen = JSON.parse(savedProfile);
      setProfile(citizen);
      fillFormFromProfile(citizen);
      return;
    }

    if (!savedUser) {
      setUseProfileAddress(false);
      return;
    }

    const user = JSON.parse(savedUser);

    if (!user.phone) {
      setUseProfileAddress(false);
      return;
    }

    api
      .get(`/public/citizens/${user.phone}`)
      .then((res) => {
        setProfile(res.data.citizen);
        localStorage.setItem("citizenProfile", JSON.stringify(res.data.citizen));
        fillFormFromProfile(res.data.citizen);
      })
      .catch((err) => {
        console.error("Failed to load citizen profile", err);
        setUseProfileAddress(false);
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
      .catch((err) => console.error("Failed to load districts", err));
  }, [form.stateId]);

  useEffect(() => {
    if (!form.districtId) {
      setBlocks([]);
      return;
    }

    api
      .get("/public/blocks", { params: { district_id: form.districtId } })
      .then((res) => setBlocks(res.data))
      .catch((err) => console.error("Failed to load blocks", err));
  }, [form.districtId]);

  useEffect(() => {
    if (!form.blockId) {
      setGps([]);
      return;
    }

    api
      .get("/public/gps", { params: { block_id: form.blockId } })
      .then((res) => setGps(res.data))
      .catch((err) => console.error("Failed to load gram panchayats", err));
  }, [form.blockId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

  const handleDocument = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, document: file });
    setDocPreview(file ? file.name : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const profileLocation = profile?.location;
    const selectedLocation =
      useProfileAddress && profileLocation
        ? {
            stateId: profileLocation.state_id,
            districtId: profileLocation.district_id,
            blockId: profileLocation.block_id,
            gpId: profileLocation.gp_id,
            address: profile.address || "",
            village: profile.village || "",
            pincode: profile.pincode || "",
          }
        : {
            stateId: form.stateId,
            districtId: form.districtId,
            blockId: form.blockId,
            gpId: form.gpId,
            address: form.address,
            village: form.village,
            pincode: form.pincode,
          };

    const payload = new FormData();
    payload.append("citizen_name", form.citizenName);
    payload.append("phone", form.phone);
    payload.append("email", form.email);
    payload.append("address", selectedLocation.address);
    payload.append("village", selectedLocation.village);
    payload.append("pincode", selectedLocation.pincode);
    payload.append("state_id", selectedLocation.stateId);
    payload.append("district_id", selectedLocation.districtId);
    payload.append("block_id", selectedLocation.blockId);
    payload.append("gp_id", selectedLocation.gpId);
    payload.append("title", form.title);
    payload.append("description", form.description);
    payload.append("category", form.category);
    payload.append("custom_category", form.customCategory);
    payload.append("department", form.department);
    payload.append("custom_department", form.customDepartment);
    payload.append("priority", form.priority);
    payload.append("save_address_to_profile", "0");

    if (form.document) {
      payload.append("document", form.document);
    }

    try {
      const res = await api.post("/public/grievances", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const referenceNo = res.data.reference_no;
      const saved = JSON.parse(
        localStorage.getItem("submittedGrievances") || "[]"
      );

      localStorage.setItem(
        "submittedGrievances",
        JSON.stringify([
          {
            reference_no: referenceNo,
            title: res.data.application?.title || form.title,
            status: res.data.application?.status || "submitted",
            submitted_at: res.data.application?.submitted_at,
          },
          ...saved.filter((item) => item.reference_no !== referenceNo),
        ])
      );

      navigate(`/track-grievance/${referenceNo}`);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Unable to submit grievance. Please check the form and try again.";

      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const categoryOptions = categories.length
    ? categories.map((category) => category.name)
    : fallbackCategories;

  const departmentOptions = departments.length
    ? departments.map((department) => department.name)
    : fallbackDepartments;

  return (
    <DashboardLayout>
      <div className="mb-6 rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          New Application
        </p>
        <h1 className="mt-1 text-2xl font-bold text-gray-950">
          Apply New Grievance
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
          Fill the citizen, location, and grievance details. A reference number
          will be generated after successful submission.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="flex items-start gap-3 rounded-[8px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            <AlertCircle className="mt-0.5 shrink-0" size={18} />
            <span>{error}</span>
          </div>
        )}

        <section className="rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm">
          <SectionHeader
            icon={UserRound}
            title="Citizen Details"
            description="Contact information used for tracking and updates."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Citizen Name *" icon={UserRound}>
              <input
                type="text"
                name="citizenName"
                value={form.citizenName}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </Field>

            <Field label="Phone *" icon={Phone}>
              <input
                type="tel"
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

            <Field label="Pincode" icon={MapPin}>
              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                className={inputClass}
                maxLength="6"
              />
            </Field>
          </div>
        </section>

        <section className="rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm">
          <SectionHeader
            icon={MapPin}
            title="Location"
            description="Use your saved profile address, or choose another location for this grievance."
          />

          {profile && (
            <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  setUseProfileAddress(true);
                  fillFormFromProfile(profile);
                }}
                className={`rounded-[8px] border px-4 py-3 text-left text-sm font-bold transition ${
                  useProfileAddress
                    ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Use profile address
              </button>
              <button
                type="button"
                onClick={() => setUseProfileAddress(false)}
                className={`rounded-[8px] border px-4 py-3 text-left text-sm font-bold transition ${
                  !useProfileAddress
                    ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Use different address
              </button>
            </div>
          )}

          {useProfileAddress && profile ? (
            <div className="rounded-[8px] border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-bold text-emerald-900">
                Profile address selected
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-800">
                {[profile.location?.gp, profile.location?.block, profile.location?.district, profile.location?.state]
                  .filter(Boolean)
                  .join(", ")}
                {profile.village ? ` - ${profile.village}` : ""}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {!profile && (
                <div className="md:col-span-2 rounded-[8px] border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
                  No saved profile address found. Please select the grievance location.
                </div>
              )}

              <Field label="State *">
                <select
                  name="stateId"
                  value={form.stateId}
                  onChange={handleLocationChange}
                  className={inputClass}
                  required={!useProfileAddress}
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
                  required={!useProfileAddress}
                  disabled={!form.stateId}
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
                  required={!useProfileAddress}
                  disabled={!form.districtId}
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
                  required={!useProfileAddress}
                  disabled={!form.blockId}
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
                  type="text"
                  name="village"
                  value={form.village}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Address">
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>
            </div>
          )}
        </section>

        <section className="rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm">
          <SectionHeader
            icon={FileText}
            title="Grievance Details"
            description="Give enough detail for the department to act quickly."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Grievance Title *" icon={FileText}>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </Field>

            <Field label="Priority *" icon={Flag}>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </Field>

            <Field label="Category *" icon={Layers}>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="">Select Category</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </Field>

            {form.category === "other" && (
              <Field label="Specify Category">
                <input
                  type="text"
                  name="customCategory"
                  value={form.customCategory}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter custom category"
                />
              </Field>
            )}

            <Field label="Department *" icon={Building2}>
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="">Select Department</option>
                {departmentOptions.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </Field>

            {form.department === "other" && (
              <Field label="Specify Department">
                <input
                  type="text"
                  name="customDepartment"
                  value={form.customDepartment}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter custom department"
                />
              </Field>
            )}
          </div>

          <div className="mt-4">
            <Field label="Description *">
              <textarea
                name="description"
                rows="5"
                value={form.description}
                onChange={handleChange}
                className={`${inputClass} resize-y`}
                required
              />
            </Field>
          </div>

          <div className="mt-4">
            <label className="block">
              <span className="mb-1.5 flex items-center gap-2 text-sm font-bold text-gray-800">
                <UploadCloud size={16} className="text-gray-500" />
                Supporting Document
              </span>
              <div className="rounded-[8px] border border-dashed border-gray-300 bg-gray-50 p-5">
                <input
                  type="file"
                  onChange={handleDocument}
                  className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-[8px] file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-700"
                />
                {docPreview && (
                  <p className="mt-3 text-sm font-semibold text-emerald-700">
                    Uploaded: {docPreview}
                  </p>
                )}
              </div>
            </label>
          </div>
        </section>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
          >
            <Send size={18} />
            {submitting ? "Submitting..." : "Submit Grievance"}
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default ApplyGrievance;

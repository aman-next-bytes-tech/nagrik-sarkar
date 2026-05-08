// pages/ApplyGrievance.jsx
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";

const ApplyGrievance = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    customCategory: "",
    department: "",
    customDepartment: "",
    document: null,
  });

  const [docPreview, setDocPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDocument = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, document: file });

    if (file) {
      setDocPreview(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Grievance Submitted!");
    console.log(form);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Apply New Grievance</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        
        {/* ------ TITLE (FULL WIDTH) ------ */}
<div className="mb-4 md:w-1/2">
  <label className="block mb-1 font-medium">Grievance Title *</label>
  <input
    type="text"
    name="title"
    value={form.title}
    onChange={handleChange}
    className="w-full border px-3 py-2 rounded-md"
  />
</div>

        {/* ------ CATEGORY SECTION ------ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          <div>
            <label className="block mb-1 font-medium">Category *</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            >
              <option value="">Select Category</option>
              <option>Road & Transport Issues</option>
              <option>Water Supply</option>
              <option>Electricity / Power Supply</option>
              <option>Sanitation & Waste Management</option>
              <option>Drainage / Sewer Problems</option>
              <option>Health & Hospital Issues</option>
              <option>Public Distribution System (Ration)</option>
              <option>Aadhar / UIDAI Issues</option>
              <option>Income Certificate / Caste Certificate Delay</option>
              <option>Pension Related Problems</option>
              <option>Education & School Issues</option>
              <option>Scholarship Issues</option>
              <option>Corruption / Bribery Complaint</option>
              <option>Police Complaint / Law & Order</option>
              <option>Women Safety / Harassment</option>
              <option>Land & Revenue Issues</option>
              <option>Municipal Service Request</option>
              <option>Railway Related Issues</option>
              <option>Public Transport / Bus Complaints</option>
              <option>Employment Exchange Issues</option>
              <option>Social Welfare Scheme Problems</option>
              <option>Banking Problems</option>
              <option>Gas Connection / LPG Issues</option>
              <option>Environmental Issues</option>
              <option value="other">Other</option>
            </select>
          </div>

          {form.category === "other" && (
            <div>
              <label className="block mb-1 font-medium">Specify Category</label>
              <input
                type="text"
                name="customCategory"
                value={form.customCategory}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Enter custom category"
              />
            </div>
          )}

        </div>

        {/* ------ DEPARTMENT SECTION ------ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          <div>
            <label className="block mb-1 font-medium">Department *</label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            >
              <option value="">Select Department</option>
    <option>Public Works Department (PWD)</option>
    <option>Municipal Corporation / Nagar Nigam</option>
    <option>Electricity Board / Energy Department</option>
    <option>Water Supply & Sanitation Department</option>
    <option>Urban Development Department</option>
    <option>Rural Development Department</option>
    <option>Panchayati Raj Department</option>
    <option>Health & Family Welfare Department</option>
    <option>Food & Civil Supplies Department</option>
    <option>Education Department</option>
    <option>Social Welfare Department</option>
    <option>Transport Department</option>
    <option>Road Transport Office (RTO)</option>
    <option>Revenue Department</option>
    <option>Police Department</option>
    <option>Women & Child Development Department</option>
    <option>Forest & Environment Department</option>
    <option>Labour Department</option>
    <option>Agriculture Department</option>
    <option>Fisheries & Animal Husbandry</option>
    <option>Banking / RBI / Nationalised Banks</option>
    <option>UIDAI – Aadhaar</option>
    <option>LIC / Insurance Department</option>
    <option>Postal Department</option>
    <option>Gas Agencies (Bharat Gas / HP Gas / Indane)</option>
    <option>Railways – Indian Railways Service</option>

              <option value="other">Other</option>
            </select>
          </div>

          {form.department === "other" && (
            <div>
              <label className="block mb-1 font-medium">Specify Department</label>
              <input
                type="text"
                name="customDepartment"
                value={form.customDepartment}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                placeholder="Enter custom department"
              />
            </div>
          )}

        </div>

        {/* ------ DESCRIPTION ------ */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Description *</label>
          <textarea
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          ></textarea>
        </div>

        {/* ------ DOCUMENT UPLOAD ------ */}
        <div className="mb-4">
          <label className="font-medium">Upload Supporting Document</label>
          <input
            type="file"
            onChange={handleDocument}
            className="block mt-1"
          />

          {docPreview && (
            <p className="text-sm text-gray-600 mt-1">Uploaded: {docPreview}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500"
        >
          Submit Grievance
        </button>

      </form>
    </DashboardLayout>
  );
};

export default ApplyGrievance;

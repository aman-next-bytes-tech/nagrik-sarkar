// pages/GrievanceDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import { FileText, FileImage } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const GrievanceDetails = () => {
  const { id } = useParams();

  // Example grievance data (replace with API later)
  const g = {
    id: id,
    title: "Water Pipeline Broken Near Colony",
    status: "Pending",
    category: "Water Supply",
    department: "Municipal Corporation",
    date: "28 Nov 2024",
    description:
      "The main water pipeline located near the central colony park has developed a serious crack. This is causing continuous water leakage and resulting in water wastage, muddy streets, and unhygienic conditions. Several complaints have been raised verbally in the past few days, but the issue remains unresolved. Immediate repair is required.",
    documents: [
      { name: "leakage_image.jpg", type: "image" },
      { name: "location_map.pdf", type: "pdf" },
    ],
  };

  const statusStyles = {
    Pending: "bg-yellow-500 text-white shadow-[0_0_10px_#facc15]",
    Approved: "bg-green-500 text-white shadow-[0_0_10px_#4ade80]",
    Rejected: "bg-red-500 text-white shadow-[0_0_10px_#f87171]",
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">Grievance Details</h1>

      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">

        {/* TOP SECTION */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{g.title}</h2>
            <p className="text-gray-500 mt-1">Grievance ID: #{g.id}</p>
          </div>

          <span
            className={`px-4 py-1 rounded-md text-sm font-semibold ${statusStyles[g.status]}`}
          >
            {g.status}
          </span>
        </div>

        <hr className="my-4" />

        {/* GRID DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <p>
            <strong className="text-gray-700">Category:</strong>{" "}
            <span className="text-gray-600">{g.category}</span>
          </p>
          <p>
            <strong className="text-gray-700">Department:</strong>{" "}
            <span className="text-gray-600">{g.department}</span>
          </p>
          <p>
            <strong className="text-gray-700">Submitted Date:</strong>{" "}
            <span className="text-gray-600">{g.date}</span>
          </p>
        </div>

        <hr className="my-4" />

        {/* DESCRIPTION */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Issue Description
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            {g.description}
          </p>
        </div>

        <hr className="my-4" />

        {/* DOCUMENTS SECTION */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Submitted Documents
          </h3>

          {g.documents.length === 0 && (
            <p className="text-gray-500">No documents submitted.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {g.documents.map((doc, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-sm flex items-center gap-3 hover:shadow-md transition"
              >
                <div className="text-indigo-600">
                  {doc.type === "image" ? (
                    <FileImage size={26} />
                  ) : (
                    <FileText size={26} />
                  )}
                </div>

                <div>
                  <p className="font-medium text-gray-700">{doc.name}</p>
                  <button className="text-indigo-600 text-sm hover:underline mt-1">
                    View / Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRACK BUTTON */}
<Link
  to={`/track-grievance/${g.id}`}
  className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-500 transition shadow"
>
  Track Status
</Link>
      </div>
    </DashboardLayout>
  );
};

export default GrievanceDetails;

// pages/GrievanceList.jsx
import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

const data = [
  {
    id: 1011,
    title: "Road Damage",
    status: "Pending",
    category: "Road & Transport Issues",
    department: "Municipal Corporation",
    date: "28 Nov",
  },
  {
    id: 1012,
    title: "Water Leakage",
    status: "Approved",
    category: "Water Supply",
    department: "Water Department",
    date: "26 Nov",
  },
  {
    id: 1013,
    title: "No Electricity",
    status: "Rejected",
    category: "Electricity / Power Supply",
    department: "Electricity Board",
    date: "25 Nov",
  },
];

const statusStyles = {
  Pending: "bg-yellow-500 text-white shadow-[0_0_10px_#facc15]",
  Approved: "bg-green-500 text-white shadow-[0_0_10px_#4ade80]",
  Rejected: "bg-red-500 text-white shadow-[0_0_10px_#f87171]",
};

const GrievanceList = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">My Grievances</h1>

      <div className="space-y-4">
        {data.map((g) => (
          <div
            key={g.id}
            className="bg-white p-5 rounded-md shadow border border-gray-200"
          >
            <div className="flex justify-between items-start">

              {/* LEFT SECTION */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">{g.title}</h3>

                <p className="text-gray-600 text-sm mt-1">
                  <strong>ID:</strong> #{g.id}
                </p>

                <p className="text-gray-600 text-sm">
                  <strong>Category:</strong> {g.category}
                </p>

                <p className="text-gray-600 text-sm">
                  <strong>Department:</strong> {g.department}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Submitted on {g.date}
                </p>
              </div>

              {/* RIGHT: STATUS + DETAILS BUTTON */}
              <div className="flex flex-col items-end gap-2">

                {/* Gradient Status Badge */}
                <span
                  className={`px-3 py-1 text-white rounded-md text-sm shadow ${statusStyles[g.status]}`}
                >
                  {g.status}
                </span>

                <Link
                  to={`/grievance/${g.id}`}
                  className="mt-1 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 rounded shadow text-sm"
                >
                  View Details
                </Link>

              </div>

            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default GrievanceList;

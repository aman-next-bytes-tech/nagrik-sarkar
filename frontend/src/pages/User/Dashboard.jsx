// pages/Dashboard.jsx
import React from "react";
import DashboardLayout from "./DashboardLayout";

const Dashboard = () => {

    // Dummy grievance stats
    const totalGrievances = 12;
    const pending = 5;
    const approved = 4;
    const rejected = 3;

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-semibold mb-6">Welcome, Aman Kumar</h1>

            {/* TOP STATS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

                {/* Total Submitted */}
                <div className="bg-blue-500 text-white p-5 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Total Submitted</h3>
                    <p className="text-3xl font-bold mt-2">{totalGrievances}</p>
                </div>

                {/* Pending */}
                <div className="bg-yellow-500 text-white p-5 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Pending</h3>
                    <p className="text-3xl font-bold mt-2">{pending}</p>
                </div>

                {/* Approved */}
                <div className="bg-green-500 text-white p-5 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Approved</h3>
                    <p className="text-3xl font-bold mt-2">{approved}</p>
                </div>

                {/* Rejected */}
                <div className="bg-red-500 text-white p-5 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Rejected</h3>
                    <p className="text-3xl font-bold mt-2">{rejected}</p>
                </div>

            </div>

            {/* PENDING GRIEVANCE STATUS */}
            <div className="bg-white p-5 rounded-md shadow-md mb-6">
                <h2 className="text-lg font-bold mb-3">Pending Grievance Status</h2>

                <ul className="space-y-2 text-gray-700">
                    <li>📌 Grievance #1021 — <strong className="text-yellow-600">Pending</strong></li>
                    <li>📌 Grievance #1044 — <strong className="text-yellow-600">Pending</strong></li>
                    <li>📌 Grievance #1070 — <strong className="text-yellow-600">Pending</strong></li>
                </ul>
            </div>

            {/* RECENT ACTIVITIES */}
            <div className="bg-white p-5 rounded-md shadow-md">
                <h2 className="text-lg font-bold mb-3">Recent Activities</h2>

                <ul className="list-disc ml-6 text-gray-700">
                    <li>Applied new Grievance on 28 Nov</li>
                    <li>Submitted documents on 25 Nov</li>
                    <li>Updated profile on 20 Nov</li>
                    <li>Old Grievance approved on 18 Nov</li>
                </ul>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;

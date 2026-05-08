// pages/TrackGrievance.jsx
import React from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import { CheckCircle, Circle, Clock } from "lucide-react";


const steps = [
  { text: "Grievance Submitted", date: "28 Nov 2024", done: true },
  { text: "Under Review", date: "29 Nov 2024", done: true },
  { text: "Forwarded to Department", date: "30 Nov 2024", done: false },
  { text: "Final Decision Pending", date: "", done: false },
];

const TrackGrievance = () => {
  const { id } = useParams();

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6">
        Track Grievance #{id}
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">

        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Current Status Timeline
        </h2>

        {/* Vertical Timeline */}
        <div className="relative border-l-4 border-indigo-500 pl-8">

          {steps.map((s, i) => (
            <div key={i} className="relative mb-10">

              {/* Connector Line */}
              <span
                className={`absolute -left-1 top-1 w-4 h-4 rounded-full flex items-center justify-center
                ${s.done ? "bg-green-500 shadow-[0_0_8px_#4ade80]" : "bg-gray-300"}
                `}
              >
                {s.done ? (
                  <CheckCircle size={14} className="text-white" />
                ) : (
                  <Circle size={12} className="text-white" />
                )}
              </span>

              {/* Step Content */}
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {s.text}
                </h3>

                {s.date ? (
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Clock size={14} /> {s.date}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500 mt-1">Pending...</p>
                )}
              </div>
            </div>
          ))}

        </div>

      </div>
    </DashboardLayout>
  );
};

export default TrackGrievance;

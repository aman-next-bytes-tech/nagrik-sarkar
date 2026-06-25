import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AlertCircle,
  ArrowLeft,
  Building2,
  CheckCircle2,
  Circle,
  Clock3,
  FileText,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import api from "../../api.js";
import DashboardLayout from "./DashboardLayout";

const statusFlow = [
  { status: "submitted", text: "Grievance Submitted", icon: FileText },
  { status: "in_review", text: "Under Review", icon: Clock3 },
  { status: "assigned", text: "Forwarded to Department", icon: ShieldCheck },
  { status: "resolved", text: "Resolved", icon: CheckCircle2 },
  { status: "closed", text: "Closed", icon: CheckCircle2 },
];

const statusLabel = {
  submitted: "Submitted",
  in_review: "In Review",
  assigned: "Assigned",
  resolved: "Resolved",
  rejected: "Rejected",
  closed: "Closed",
};

const TrackGrievance = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGrievance = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/public/grievances/${id}`);
        setApplication(res.data.application);
        setError("");
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Unable to find this grievance reference."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGrievance();
  }, [id]);

  const currentIndex = Math.max(
    statusFlow.findIndex((step) => step.status === application?.status),
    0
  );

  const steps = statusFlow.map((step, index) => ({
    ...step,
    done: index <= currentIndex,
    date: index === 0 ? application?.submitted_at : "",
  }));

  return (
    <DashboardLayout>
      <div className="mb-6 flex flex-col gap-4 rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            to="/grievances"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-indigo-700"
          >
            <ArrowLeft size={16} />
            Back to status center
          </Link>
          <h1 className="mt-3 text-2xl font-bold text-gray-950">
            Track Grievance
          </h1>
          <p className="mt-2 text-sm text-gray-600">Reference: {id}</p>
        </div>

        {application && (
          <span className="inline-flex min-h-11 items-center justify-center rounded-[8px] border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
            {statusLabel[application.status] || application.status}
          </span>
        )}
      </div>

      {loading && (
        <section className="rounded-[8px] border border-gray-200 bg-white p-8 text-sm text-gray-500 shadow-sm">
          Loading grievance...
        </section>
      )}

      {!loading && error && (
        <section className="flex items-start gap-3 rounded-[8px] border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
          <AlertCircle className="mt-0.5 shrink-0" size={18} />
          <span>{error}</span>
        </section>
      )}

      {!loading && application && (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-start gap-3">
              <div className="rounded-[8px] bg-indigo-100 p-3 text-indigo-700">
                <FileText size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-950">
                  {application.title}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Submitted on {application.submitted_at || "recently"}
                </p>
              </div>
            </div>

            <p className="rounded-[8px] border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-700">
              {application.description}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-[8px] border border-gray-200 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <Building2 size={16} />
                  Department
                </div>
                <p className="text-sm text-gray-600">
                  {application.department || "Not assigned"}
                </p>
              </div>

              <div className="rounded-[8px] border border-gray-200 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <FileText size={16} />
                  Category
                </div>
                <p className="text-sm text-gray-600">
                  {application.category || "Not assigned"}
                </p>
              </div>

              <div className="rounded-[8px] border border-gray-200 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <UserRound size={16} />
                  Citizen
                </div>
                <p className="text-sm text-gray-600">
                  {application.citizen?.name || "Citizen"}
                </p>
              </div>

              <div className="rounded-[8px] border border-gray-200 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <MapPin size={16} />
                  Location
                </div>
                <p className="text-sm text-gray-600">
                  {[application.location?.district, application.location?.state]
                    .filter(Boolean)
                    .join(", ") || "Not available"}
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-950">
              Current Status Timeline
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Follow how the application moves through the department workflow.
            </p>

            <div className="mt-6 space-y-4">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isCurrent = index === currentIndex;

                return (
                  <div key={step.status} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-[8px] border ${
                          step.done
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-gray-200 bg-gray-50 text-gray-400"
                        }`}
                      >
                        {step.done ? <StepIcon size={19} /> : <Circle size={18} />}
                      </span>
                      {index < steps.length - 1 && (
                        <span
                          className={`mt-2 h-10 w-px ${
                            step.done ? "bg-emerald-200" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>

                    <div className="min-w-0 pb-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-gray-950">
                          {step.text}
                        </h3>
                        {isCurrent && (
                          <span className="rounded-[8px] bg-indigo-100 px-2 py-1 text-xs font-bold text-indigo-700">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {step.date || (step.done ? "Completed" : "Pending")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </DashboardLayout>
  );
};

export default TrackGrievance;

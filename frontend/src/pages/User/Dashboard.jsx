import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FilePlus2,
  FileText,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import DashboardLayout from "./DashboardLayout";

const statusMeta = {
  submitted: {
    label: "Submitted",
    icon: Clock3,
    className: "border-amber-200 bg-amber-50 text-amber-700",
  },
  in_review: {
    label: "In Review",
    icon: Clock3,
    className: "border-sky-200 bg-sky-50 text-sky-700",
  },
  assigned: {
    label: "Assigned",
    icon: ShieldCheck,
    className: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
  resolved: {
    label: "Resolved",
    icon: CheckCircle2,
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  rejected: {
    label: "Rejected",
    icon: XCircle,
    className: "border-rose-200 bg-rose-50 text-rose-700",
  },
  closed: {
    label: "Closed",
    icon: CheckCircle2,
    className: "border-gray-200 bg-gray-50 text-gray-700",
  },
};

const Dashboard = () => {
  const saved = JSON.parse(localStorage.getItem("submittedGrievances") || "[]");

  const total = saved.length;
  const active = saved.filter((item) =>
    ["submitted", "in_review", "assigned"].includes(item.status)
  ).length;
  const resolved = saved.filter((item) =>
    ["resolved", "closed"].includes(item.status)
  ).length;
  const rejected = saved.filter((item) => item.status === "rejected").length;

  const stats = [
    {
      label: "Total Grievances",
      value: total,
      icon: FileText,
      accent: "bg-indigo-600",
    },
    {
      label: "Active",
      value: active,
      icon: Clock3,
      accent: "bg-amber-500",
    },
    {
      label: "Resolved",
      value: resolved,
      icon: CheckCircle2,
      accent: "bg-emerald-500",
    },
    {
      label: "Rejected",
      value: rejected,
      icon: XCircle,
      accent: "bg-rose-500",
    },
  ];

  const recent = saved.slice(0, 4);

  return (
    <DashboardLayout>
      <div className="mb-6 flex flex-col gap-4 rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            User Dashboard
          </p>
          <h1 className="mt-1 text-2xl font-bold text-gray-950">
            Welcome back, Aman Kumar
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            Submit a grievance, save the reference number, and follow each
            status update from one place.
          </p>
        </div>

        <Link
          to="/apply-grievance"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          <FilePlus2 size={18} />
          New Grievance
        </Link>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-[8px] p-3 text-white ${stat.accent}`}>
                  <Icon size={22} />
                </div>
                <span className="text-3xl font-bold text-gray-950">
                  {stat.value}
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-600">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <section className="rounded-[8px] border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 p-5">
            <div>
              <h2 className="text-lg font-bold text-gray-950">
                Recent Grievances
              </h2>
              <p className="text-sm text-gray-500">
                Your latest submissions from this device.
              </p>
            </div>
            <Link
              to="/grievances"
              className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="divide-y divide-gray-100">
            {recent.length === 0 && (
              <div className="p-6 text-sm text-gray-500">
                No grievance submitted yet. Start with a new application.
              </div>
            )}

            {recent.map((item) => {
              const meta = statusMeta[item.status] || statusMeta.submitted;
              const StatusIcon = meta.icon;

              return (
                <div
                  key={item.reference_no}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold text-gray-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.reference_no}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-[8px] border px-3 py-1 text-xs font-bold ${meta.className}`}
                    >
                      <StatusIcon size={14} />
                      {meta.label}
                    </span>
                    <Link
                      to={`/track-grievance/${item.reference_no}`}
                      className="rounded-[8px] border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                    >
                      Track
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-950">Service Snapshot</h2>
          <div className="mt-5 space-y-4">
            {[
              "Reference number is created instantly after submission.",
              "Applications are routed by location and department.",
              "Status page stays available with the GRV reference number.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[8px] bg-emerald-100 text-emerald-700">
                  <CheckCircle2 size={16} />
                </span>
                <p className="text-sm leading-6 text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

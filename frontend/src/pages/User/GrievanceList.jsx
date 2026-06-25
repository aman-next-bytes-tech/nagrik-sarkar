import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FilePlus2,
  SearchCheck,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import DashboardLayout from "./DashboardLayout";

const statusStyles = {
  submitted: {
    label: "Submitted",
    icon: Clock3,
    className: "border-amber-200 bg-amber-50 text-amber-700",
  },
  in_review: {
    label: "In Review",
    icon: SearchCheck,
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

const GrievanceList = () => {
  const data = JSON.parse(localStorage.getItem("submittedGrievances") || "[]");

  return (
    <DashboardLayout>
      <div className="mb-6 flex flex-col gap-4 rounded-[8px] border border-gray-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Status Center
          </p>
          <h1 className="mt-1 text-2xl font-bold text-gray-950">
            My Grievances
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Track submitted grievances saved on this device.
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

      {data.length === 0 ? (
        <section className="rounded-[8px] border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[8px] bg-indigo-100 text-indigo-700">
            <ClipboardList size={26} />
          </div>
          <h2 className="mt-4 text-xl font-bold text-gray-950">
            No grievances yet
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-600">
            Once you submit an application, it will appear here with its
            reference number and status.
          </p>
          <Link
            to="/apply-grievance"
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
          >
            <FilePlus2 size={18} />
            Apply now
          </Link>
        </section>
      ) : (
        <section className="overflow-hidden rounded-[8px] border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-gray-100 px-5 py-4 text-xs font-bold uppercase text-gray-500">
            <span>Application</span>
            <span>Status</span>
          </div>

          <div className="divide-y divide-gray-100">
            {data.map((g) => {
              const meta = statusStyles[g.status] || statusStyles.submitted;
              const StatusIcon = meta.icon;

              return (
                <div
                  key={g.reference_no}
                  className="grid gap-4 p-5 transition hover:bg-gray-50 md:grid-cols-[1fr_auto]"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-gray-950">
                        {g.title}
                      </h3>
                      <span className="rounded-[8px] bg-gray-100 px-2 py-1 text-xs font-bold text-gray-600">
                        {g.reference_no}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Submitted on {g.submitted_at || "recently"}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:justify-end">
                    <span
                      className={`inline-flex min-h-9 items-center gap-2 rounded-[8px] border px-3 py-1 text-sm font-bold ${meta.className}`}
                    >
                      <StatusIcon size={16} />
                      {meta.label}
                    </span>

                    <Link
                      to={`/track-grievance/${g.reference_no}`}
                      className="inline-flex min-h-9 items-center gap-2 rounded-[8px] bg-gray-950 px-3 py-1 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                      Track
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </DashboardLayout>
  );
};

export default GrievanceList;

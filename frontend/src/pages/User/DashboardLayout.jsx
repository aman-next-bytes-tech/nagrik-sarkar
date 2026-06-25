import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ClipboardList,
  FilePlus2,
  LayoutDashboard,
  SearchCheck,
  UserRound,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Profile", path: "/profile", icon: UserRound },
  { label: "Apply", path: "/apply-grievance", icon: FilePlus2 },
  { label: "Status", path: "/grievances", icon: ClipboardList },
];

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-4 py-6 lg:flex-row lg:px-6">
        <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:w-72">
          <div className="flex h-full flex-col rounded-[8px] border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-indigo-600 text-white">
                  <SearchCheck size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-950">
                    Citizen Desk
                  </h2>
                  <p className="text-xs font-medium text-gray-500">
                    Grievance services
                  </p>
                </div>
              </div>
            </div>

            <nav className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4 lg:flex lg:flex-1 lg:flex-col">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex min-h-11 items-center justify-center gap-2 rounded-[8px] px-3 py-2 text-sm font-semibold transition lg:justify-start ${
                      active
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden border-t border-gray-100 p-4 lg:block">
              <div className="rounded-[8px] border border-emerald-100 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-950">
                  Need quick help?
                </p>
                <p className="mt-1 text-xs leading-5 text-emerald-800">
                  Submit once and keep your reference number to track every
                  update.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

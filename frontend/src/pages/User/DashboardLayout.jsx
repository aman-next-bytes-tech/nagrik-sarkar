// components/DashboardLayout.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const DashboardLayout = ({ children }) => {
    const location = useLocation();

    // Function to check active route
    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* SIDEBAR */}
            <div className="w-64 bg-white shadow-lg p-4">
                <h2 className="text-2xl font-bold mb-8 text-indigo-600">User Panel</h2>

                <nav className="flex flex-col gap-2">

                    {/* Dashboard Link */}
                    <Link
                        to="/dashboard"
                        className={`px-4 py-2 rounded-md font-medium transition-all
                            ${isActive("/dashboard")
                                ? "bg-indigo-500 text-white shadow-md"
                                : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                            }
                        `}
                    >
                        Dashboard
                    </Link>

                    {/* User Profile Link */}
                    <Link
                        to="/profile"
                        className={`px-4 py-2 rounded-md font-medium transition-all
                            ${isActive("/profile")
                                ? "bg-indigo-500 text-white shadow-md"
                                : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                            }
                        `}
                    >
                        User Profile
                    </Link>
                                        {/* Apply Grievance */}
                    <Link
                        to="/apply-grievance"
                        className={`px-4 py-2 rounded-md font-medium transition-all
                        ${isActive("/apply-grievance")
                            ? "bg-indigo-500 text-white shadow-md"
                            : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                        }`}
                    >
                        Apply Grievance
                    </Link>

                    {/* My Grievances */}
                    <Link
                        to="/grievances"
                        className={`px-4 py-2 rounded-md font-medium transition-all
                        ${isActive("/grievances")
                            ? "bg-indigo-500 text-white shadow-md"
                            : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                        }`}
                    >
                        My Grievances
                    </Link>

                </nav>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 p-6">{children}</div>
        </div>
    );
};

export default DashboardLayout;

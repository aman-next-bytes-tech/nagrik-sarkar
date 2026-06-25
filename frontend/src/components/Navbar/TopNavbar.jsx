import { Link } from "react-router-dom";
import { LayoutDashboard, LogIn, LogOut, Menu, UserPlus, UsersRound, X } from "lucide-react";

const logo = '/assets/nagrik_sarkar_logo.png';


const TopNavbar = ({mobileMenuOpen, setMobileMenuOpen, user, handleLogout}) => {
    const profile = JSON.parse(localStorage.getItem("citizenProfile") || "null");
    const displayName = profile?.name || "Citizen";

    return (
        <div id="top-nav" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
            <Link to="/" className='group flex min-w-0 items-center gap-3'>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-sky-50 shadow-sm transition group-hover:-translate-y-0.5 group-hover:border-indigo-200 group-hover:shadow-md">
                    <img className='h-9 w-9 object-contain' src={logo} alt="Logo" />
                </span>
                <span className="min-w-0">
                    <span className="block truncate bg-gradient-to-r from-slate-950 to-indigo-700 bg-clip-text text-xl font-black text-transparent sm:text-2xl">
                        Nagrik Sarkar
                    </span>
                    <span className='hidden text-xs font-semibold text-slate-500 sm:block'>
                        न्याय और अवसर पहुचेंगे घर-घर
                    </span>
                </span>
            </Link>

            <div className="hidden items-center gap-3 md:flex">
                {user ? (
                    <>
                        <Link
                            to="/dashboard"
                            className="inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                        >
                            <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-indigo-100 text-indigo-700">
                                {displayName.slice(0, 1).toUpperCase()}
                            </span>
                            <span className="max-w-32 truncate">{displayName}</span>
                        </Link>
                        <Link
                            to="/dashboard"
                            className="inline-flex min-h-10 items-center gap-2 rounded-[8px] bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700"
                        >
                            <LayoutDashboard size={17} />
                            Dashboard
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700 transition hover:bg-rose-100"
                        >
                            <LogOut size={17} />
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/register-for-volunteer"
                            className="inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100"
                        >
                            <UsersRound size={17} />
                            Volunteer
                        </Link>

                        <Link
                            to="/login"
                            className="inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                        >
                            <LogIn size={17} />
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="inline-flex min-h-10 items-center gap-2 rounded-[8px] bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700"
                        >
                            <UserPlus size={17} />
                            Register
                        </Link>
                    </>
                )}
            </div>

            <button
                className='inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 md:hidden'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
        </div>
    );
};



export default TopNavbar;

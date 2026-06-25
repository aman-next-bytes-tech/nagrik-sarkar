import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { LayoutDashboard, LogIn, LogOut, UserPlus, UsersRound, X } from "lucide-react";


const MenuItems = ({ options, setMobileMenuOpen }) => {
    return (
        <>
            {options.map(({ text, href }) => (
                <li key={text}>
                    <NavLink
                        to={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                            `block px-4 py-3 rounded-lg text-base font-medium
                             transition-all duration-200
                             ${isActive
                                ? "bg-indigo-600 text-white"
                                : "text-gray-800 hover:bg-indigo-100 hover:text-indigo-700"}`
                        }
                    >
                        {text}
                    </NavLink>
                </li>
            ))}
        </>
    );
};

const MobileMenu = ({ options, mobileMenuOpen, setMobileMenuOpen, user, handleLogout }) => {
    const profile = JSON.parse(localStorage.getItem("citizenProfile") || "null");
    const displayName = profile?.name || "Citizen";

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={() => setMobileMenuOpen(false)}
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300
                ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            />

            {/* Drawer */}
            <aside
                className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm
                bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
                ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                    <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-indigo-600 text-lg font-black text-white shadow-sm">
                            {user ? displayName.slice(0, 1).toUpperCase() : "N"}
                        </span>
                        <div>
                            <p className="text-sm text-gray-500">Welcome</p>
                            <p className="font-semibold text-gray-900">
                                {user ? displayName : "Nagrik Sarkar"}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-slate-200 text-gray-600 hover:bg-slate-50 hover:text-gray-900"
                        aria-label="Close menu"
                    >
                        <X size={21} />
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="px-5 py-6">
                    <ul className="flex flex-col gap-2">
                        <MenuItems
                            options={options}
                            setMobileMenuOpen={setMobileMenuOpen}
                        />
                    </ul>
                </nav>

                {/* Footer (Optional) */}
                <div className="absolute bottom-0 flex w-full flex-col gap-2 border-t border-slate-100 bg-white px-5 py-4">
                    {user ? (
                        <>
                            <NavLink
                                to="/dashboard"
                                onClick={() => setMobileMenuOpen(false)}
                                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-indigo-700"
                            >
                                <LayoutDashboard size={18} />
                                Dashboard
                            </NavLink>
                            <button 
                                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700 transition hover:bg-rose-100"
                                onClick={handleLogout}
                            >
                                <LogOut size={18} />
                                Logout
                             </button>
                        </>

                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                            >
                                <LogIn size={18} />
                                Log In
                            </NavLink>
                            <NavLink
                                to="/register"
                                onClick={() => setMobileMenuOpen(false)}
                                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-indigo-700"
                            >
                                <UserPlus size={18} />
                                Register
                            </NavLink>
                            <NavLink
                                to="/register-for-volunteer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100"
                            >
                                <UsersRound size={18} />
                                Volunteer
                            </NavLink>
                        </>
                    )}
                    
                </div>
            </aside>
        </>
    );
};

MobileMenu.propTypes = {
    options: PropTypes.array.isRequired,
    mobileMenuOpen: PropTypes.bool.isRequired,
    setMobileMenuOpen: PropTypes.func.isRequired,
    user: PropTypes.object,
    handleLogout: PropTypes.func.isRequired
};

MenuItems.propTypes = {
    options: PropTypes.array.isRequired,
    setMobileMenuOpen: PropTypes.func.isRequired
}

export default MobileMenu;

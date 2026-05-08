import { NavLink } from "react-router-dom";
import Button from "./Button";
import PropTypes from 'prop-types';


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
                <div className="flex items-center justify-between px-6 py-5 border-b">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                            alt="User"
                            className="w-12 h-12 rounded-full object-cover border"
                        />
                        <div>
                            <p className="text-sm text-gray-500">Welcome</p>
                            <p className="font-semibold text-gray-900">
                                Name of the user
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-gray-600 hover:text-gray-900 text-2xl"
                    >
                        ×
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="px-6 py-6">
                    <ul className="flex flex-col gap-2">
                        <MenuItems
                            options={options}
                            setMobileMenuOpen={setMobileMenuOpen}
                        />
                    </ul>
                </nav>

                {/* Footer (Optional) */}
                <div className="flex flex-col gap-2 absolute bottom-0 w-full px-6 py-4 border-t">
                    {user ? (
                        <>
                            <button 
                                className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                                onClick={handleLogout}
                            >
                                Logout
                             </button>
                        </>

                    ) : (
                        <>
                            <Button onClick={() => setMobileMenuOpen(false)}>
                                <NavLink
                                    to="/login"
                                >
                                    Log In
                                </NavLink>
                            </Button>
                            <Button onClick={() => setMobileMenuOpen(false)}>
                                <NavLink
                                    to="/register"
                                >
                                    Register
                                </NavLink>
                            </Button>
                            <Button onClick={() => setMobileMenuOpen(false)}>
                                <NavLink
                                    to="/register-for-volunteer"
                                >
                                    Register for Volunteer
                                </NavLink>
                            </Button>
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

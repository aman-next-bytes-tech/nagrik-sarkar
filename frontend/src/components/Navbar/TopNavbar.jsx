import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from '../Utils/Button';
import RegisterForVolunteer from '../../pages/Auth/RegisterForVolunteer';

const logo = 'https://icons.veryicon.com/png/o/miscellaneous/government-icon/social-public-welfare.png';


const TopNavbar = ({mobileMenuOpen, setMobileMenuOpen, user, handleLogout}) => {
    // const navigate = useNavigate();

    // // Check user session
    // const user = JSON.parse(localStorage.getItem("user"));

    // // Logout Function
    // const handleLogout = () => {
    //     localStorage.removeItem("user");
    //     navigate("/login");
    // };

    return (
        <div id="top-nav" className="flex justify-between items-center bg-slate-50 px-4 py-2 shadow-sm">
            <div className='flex gap-2 items-center'>
                <img className='w-12 h-12' src={logo} alt="Logo" />
                <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 
                                 bg-clip-text text-transparent font-semibold text-2xl">
                    Nagrik Sarkar
                </span>
            </div>

            <p className='hidden md:block font-semibold tex-base text-slate-600'>न्याय और अवसर पहुचेंगे घर-घर</p>

            <div className="hidden md:flex gap-2 items-center">
                {/* If user is logged in */}
                {user ? (
                    <>
                        <Link to="/dashboard">
                            <Button>Dashborad</Button>
                        </Link>
                        <Button onClick={handleLogout}>Log out</Button>
                    </>
                ) : (
                    // If user is not logged in
                    <>
                        <Link to="/register-for-volunteer">
                            <Button>Register for Volunteer</Button>
                        </Link>

                        <Link to="/login">
                            <Button>Log In</Button>
                        </Link>

                        <Link to="/register">
                            <Button>Register</Button>
                        </Link>
                    </>
                )}
            </div>

            {/* Mobile Menu Button */}

            <Button className='md:hidden bg-white text-2xl' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</Button>
        </div>
    );
};



export default TopNavbar;

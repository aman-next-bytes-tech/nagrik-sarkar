import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import React from 'react';
import MobileMenu from '../Utils/MobileMenu';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const options = [
            {
                text: 'Home',
                href: '/',
            },
            {
                text: 'About us',
                href: '/about',
            },
            {
                text: 'News Events',
                href: '/news',
            },
            {
                text: 'Courses',
                href: '/courses',
            },
            {
                text: 'Campaign',
                href: '/campaign',
            },
            {
                text: 'Media',
                href: '/media',
            },
            {
                text: 'Promotion',
                href: '/promotion',
            },
            {
                text: 'Contact us',
                href: '/contact',
            },
        ];
    
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("citizenProfile");
        navigate("login");
    }
    return (
        <>
            <nav id='navbar' className="sticky top-0 left-0 z-50 border-b border-slate-300/80 bg-slate-100/95 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                <div className="h-1 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500" />
                <TopNavbar 
                    mobileMenuOpen={mobileMenuOpen} 
                    setMobileMenuOpen={setMobileMenuOpen}
                    user={user}
                    handleLogout={handleLogout}
                />
                <BottomNavbar options={options}/>
                {mobileMenuOpen && (
                    <MobileMenu 
                        options={options} 
                        mobileMenuOpen={mobileMenuOpen} 
                        setMobileMenuOpen={setMobileMenuOpen}
                        user={user}
                        handleLogout={handleLogout}
                    />)
                }
            </nav>
        </>

    );
};

export default Navbar;

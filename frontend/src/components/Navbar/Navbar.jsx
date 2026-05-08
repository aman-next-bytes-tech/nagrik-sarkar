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
        navigate("login");
    }
    return (
        <>
            <nav id='navbar' className="sticky top-0 left-0 z-50 shadow-md">
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

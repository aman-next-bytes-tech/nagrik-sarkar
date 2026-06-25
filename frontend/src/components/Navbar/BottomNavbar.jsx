import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Contact, Home, Images, Info, Megaphone, Newspaper, Trophy } from 'lucide-react';

const navIcons = {
    Home,
    'About us': Info,
    'News Events': Newspaper,
    Courses: BookOpen,
    Campaign: Megaphone,
    Media: Images,
    Promotion: Trophy,
    'Contact us': Contact,
};

const BottomNavbar = ({options}) => {

    return (
        <div id="bottom-nav" className="hidden border-t border-slate-300/80 bg-gradient-to-r from-slate-200/95 via-slate-100/95 to-indigo-100/90 px-4 py-2.5 md:flex md:justify-center">
            <ul className="flex max-w-7xl flex-wrap items-center justify-center gap-2 rounded-[8px] border border-slate-200 bg-white/85 px-2 py-1.5 font-semibold text-slate-700 shadow-sm backdrop-blur">
                {options.map(({ text, href }) => {
                    const Icon = navIcons[text];

                    return (
                    <li key={text} className="group">
                        <NavLink
                            to={href}
                            className={({ isActive }) =>
                                `relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-[8px] px-4 py-2 text-sm transition-all duration-300 ${
                                    isActive
                                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200/70 ring-1 ring-indigo-500/20'
                                        : 'text-slate-600 hover:-translate-y-0.5 hover:bg-white hover:text-indigo-700 hover:shadow-sm'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`absolute inset-x-3 bottom-1 h-0.5 rounded-full transition-all duration-300 ${
                                            isActive ? 'bg-white/85 opacity-100' : 'bg-indigo-400 opacity-0 group-hover:opacity-100'
                                        }`}
                                    />
                                    {Icon && (
                                        <Icon
                                            size={17}
                                            strokeWidth={2.3}
                                            className={isActive ? 'text-white' : 'text-indigo-500'}
                                        />
                                    )}
                                    <span className="relative">{text}</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BottomNavbar;

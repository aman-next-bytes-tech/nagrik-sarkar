import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNavbar = ({options}) => {

    return (
        <div id="bottom-nav" className="hidden p-4 md:flex justify-center bg-slate-200">
            <ul className="flex gap-4 font-[500] text-slate-700">
                {options.map(({ text, href }) => (
                    <li key={text} className='border-b-2 pb-1 text-base transition duration-300 hover:border-indigo-300'>
                        <NavLink
                            to={href}
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-indigo-300 text-indigo-500 pb-1'
                                    : 'hover:border-indigo-300'
                            }
                            style={({ isActive }) =>
                                isActive
                                    ? { borderBottomWidth: '4px' }
                                    : {}
                            }
                        >
                            {text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BottomNavbar;

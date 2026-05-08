import React from 'react'
import rocket from '../../assets/rocket.webp';
import icon24 from '../../assets/24icon.svg';
import heart from '../../assets/heart.svg';
import leaf from '../../assets/leaf.svg';
import badge from '../../assets/badge.svg';
import ticket from '../../assets/ticket.png';
import bagpack from '../../assets/bagpack.png';
import earth from '../../assets/planet-earth.png';
import tropicalLeaf from '../../assets/tropical-leaves.png';
import repairTool from '../../assets/repair-tools.png';
import star from '../../assets/star.png';
import handshake from '../../assets/handshake.png';
import briefcase from '../../assets/briefcase.png';
import enrollment from '../../assets/enrollment.png';

const Card = ({ icon, title, content }) => {
    return (
        <div className='max-w-xs flex flex-col items-center'>
            <div 
                className="border-2 border-slate-200 flex items-center p-2 mb-4 w-16 h-w-16 justify-center rounded-xl bg-gradient-to-br from-[#cacaca] to-[#f0f0f0] shadow-[10px_10px_40px_#c3c3c3,-20px_-20px_40px_#fdfdfd]">
                <img src={icon} alt="icon" />
            </div>
            <p className='font-semibold'>{title}</p>
            <p className='hidden md:block text-slate-600'>{content}</p>
        </div>
    )
}

const Service = () => {
    


    const data = [
        {
            icon: handshake,
            title: '1) Citizen Grievance Redressal',
            content: 'Enable citizens to submit grievances, track the status of complaints, and get assistance for resolution.'
        },
        {
            icon: enrollment,
            title: '2) Welfare Schemes Enrollment',
            content: 'Empowering Citizens with Essential Welfare Services, Support Programs, and Opportunities for a Better, Inclusive Future',
        },
        {
            icon: briefcase,
            title: '3) Skill Development and Training',
            content: 'Promote employment services, self-employment opportunities, and livelihood programs designed to boost job creation and economic growth',
        },
        {
            icon: earth,
            title: '4) Community Programs',
            content: 'Offer information on skill development courses and training programs that empower citizens to improve their employability and income potential',
        },
    ];
    return (
        <div className='relative py-16 text-center md:px-[5.5rem]'>
            <div className='relative z-1 max-w-screen-xl m-auto'>
                <h3 className='text-indigo-600 font-[500] text-[1.4rem] text-center'>
                    What will you get?
                </h3>

                <div className='grid grid-cols-2 md:flex gap-2 justify-center mt-6'>
                    {
                        data.map(({ icon, title, content }, index) => (
                            <Card
                                key={index}
                                icon={icon}
                                title={title}
                                content={content}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Service
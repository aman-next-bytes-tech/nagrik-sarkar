import React from 'react'
import tropicalLeaf from '../../assets/tropical-leaves.png';
const rocket = '';

const Card = ({ name, designation }) => {
    return (
        <div className='bg-slate-400 rounded-xl min-w-52 min-h-60 relative overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://th.bing.com/th/id/OIP.9iP5hfylm0iGQPmS8s1cOgHaE8?rs=1&pid=ImgDetMain" alt="" />
            <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
            <div className='text-sm absolute bottom-0 left-0 p-3'>
                <h4 className='font-semibold text-white'>{name}</h4>
                <p className='text-xs text-slate-300'>{designation}</p>
            </div>
        </div>
    )
}

const TeamMember = () => {
    const cards = [];
    for(let i = 0; i<5; ++i){
        cards.push(<Card key={i} name={'Abhijeet Singh'} designation={'Software Engineer'}/>);
    }

    return (
        <div className='relative py-16 max-w-screen-xl m-auto'>
            <img className='absolute z-10 w-10 bottom-10 left-10' src={tropicalLeaf} alt="" />
            <div className='relative z-1 max-w-screen-xl m-auto'>
                <h4 className='text-indigo-600 font-semibold text-center'>Our Team Members</h4>
                <h3 className='justify-center flex items-center gap-1 font-bold text-xl text-slate-900'>
                    Designation
                    {/* <img className='w-10 object-cover' src={rocket} alt="" /> */}
                </h3>
                <p className='text-slate-600 mb-4 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, tempora!</p>

                <div className='flex gap-2 justify-center'>
                    {
                       cards
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamMember
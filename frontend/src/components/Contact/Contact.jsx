import React from 'react'
import Form from '../Utils/Form';
import rocket from '../../assets/rocket.webp';
import phone from '../../assets/phone.webp';


const List = ({ icon, type,details }) => {
    return (
        <div className='flex gap-2 items-center'>
            <div className="border-2 border-slate-700 w-7 h-7 rounded grid place-items-center">
                {icon}
            </div>
            <div className='text-sm'>
                <p className='font-semibold'>{type}</p>
                <p className='text-slate-300'>{details}</p>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <div className='py-8'>
            <div className='text-center max-w-screen-xl m-auto'>
                <h4 className='font-[500] text-[1.4rem] px-[1rem] text-indigo-500 mb-2'>Contact Us!</h4>
                <p className='hidden md:block text-slate-600 mb-8'>Empowering Citizens with Essential Welfare Services, Support Programs, and Opportunities for a Better, Inclusive Future.</p>
            </div>

            <div className='max-w-4xl m-auto grid grid-cols-2 p-4 md:rounded-xl bg-slate-950 text-white'>
                <div className='pr-4'>
                    <div className='border-b border-slate-800'>
                        <strong className='text-xl font-bold mb-4'>Get in touch</strong>
                        <p className='text-slate-300 mb-4'>
                            We are here to assist you with any questions or concerns you may have. Our team is dedicated to providing support and ensuring your needs are met.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 mt-4'>
                        <List
                            icon={<i className="text-slate-400 uil uil-phone" />}
                            type={'Call Us'}
                            details={'+91 1234567890'}
                        />
                        <List
                            icon={<i className="text-slate-400 uil uil-envelope" />}
                            type={'send Email'}
                            details={'Info@socialwelfare.com'}
                        />
                        <List
                            icon={<i className="text-slate-400 uil uil-comment-alt" />}
                            type={'Tweet Us'}
                            details={'@socialwefare'}
                        />
                    </div>
                </div>
                <div className='border-l border-slate-800 pl-4'>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Contact
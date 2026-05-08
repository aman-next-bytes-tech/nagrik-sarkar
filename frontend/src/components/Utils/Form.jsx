import React from 'react'

const Form = () => {
    return (
        <div className='max-w-2x'>
            <form  action="">
                <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-2 mb-4'>
                    <div>
                        <label className='font-semibold text-xs' htmlFor="name">Name</label>
                        <input className='mt-1 w-full bg-slate-800 text-sm py-1 px-3 rounded block' type="text" id='name' placeholder='Full Name' />
                    </div>
                    <div>
                        <label className='font-semibold text-xs' htmlFor="email">Email</label>
                        <input className='mt-1 w-full bg-slate-800 text-sm py-1 px-3 rounded block' type="email" id='email' placeholder='example@email.com' />
                    </div>
                    <div>
                        <label className='font-semibold text-xs' htmlFor="phone-no">Phone</label>
                        <input className='mt-1 w-full bg-slate-800 text-sm py-1 px-3 rounded block' type="tel" id='phone-no' placeholder='(123)456-789' />
                    </div>
                    <div>
                        <label className='font-semibold text-xs' htmlFor="company">Company</label>
                        <input className='mt-1 w-full bg-slate-800 text-sm py-1 px-3 rounded block' type="text" id='company'/>
                    </div>
                </div>
                <div>
                    <label className='font-semibold text-xs' htmlFor="message">Leave us a message</label>
                    <textarea className='mt-1 min-h-32 w-full bg-slate-800 text-sm py-1 px-3 rounded block' id="message" placeholder='Please type your message here...'></textarea>
                </div>
            </form>
        </div>
    )
}

export default Form
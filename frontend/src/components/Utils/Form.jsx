const Form = () => {
    const inputClass = 'mt-1 block w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30';
    const labelClass = 'text-xs font-semibold text-slate-200';

    return (
        <div className='w-full'>
            <form action="" className='space-y-4'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    <div>
                        <label className={labelClass} htmlFor="name">Name</label>
                        <input className={inputClass} type="text" id='name' placeholder='Full Name' />
                    </div>
                    <div>
                        <label className={labelClass} htmlFor="email">Email</label>
                        <input className={inputClass} type="email" id='email' placeholder='example@email.com' />
                    </div>
                    <div>
                        <label className={labelClass} htmlFor="phone-no">Phone</label>
                        <input className={inputClass} type="tel" id='phone-no' placeholder='(123)456-789' />
                    </div>
                    <div>
                        <label className={labelClass} htmlFor="company">Company</label>
                        <input className={inputClass} type="text" id='company' />
                    </div>
                </div>
                <div>
                    <label className={labelClass} htmlFor="message">Leave us a message</label>
                    <textarea className={`${inputClass} min-h-32 resize-none`} id="message" placeholder='Please type your message here...'></textarea>
                </div>
            </form>
        </div>
    )
}

export default Form

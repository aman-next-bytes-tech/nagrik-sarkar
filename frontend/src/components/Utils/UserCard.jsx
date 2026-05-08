import React from 'react'

const UserCard = ({ userName, content, tags, img }) => {
    return (
        <div className='flex flex-col sm:flex-row gap-4 p-4 bg-slate-200 rounded max-w-[700px]'>
            <div className="flex-1 rounded bg-slate-400 overflow-hidden min-h-52">
                <img src={img} alt="user profile" className='w-full h-full object-cover' />
            </div>

            <div className="flex-1 rounded bg-slate-40 0">
                <h3 className='font-semibold mb-2'>{userName}</h3>
                <div className='flex flex-wrap gap-1 mb-2'>
                    {
                        tags.map((tag, index) => (
                            <div key={index} className='w-max rounded px-2 py-[2px] border-2 border-slate-500 text-xs text-slate-900'>#{tag}</div>
                        ))
                    }
                </div>
                <p className='text-slate-600 mb-4'>{content}</p>


                <div className='grid grid-cols-3 gap-2'>
                    <button className='col-span-1 rounded px-8 py-2 border-2 border-slate-500 hover:border-slate-400 font-semibold text-sm text-slate-900'>More</button>
                    <button className='col-span-2 rounded px-8 py-2 bg-indigo-500 hover:bg-indigo-400 font-semibold text-sm text-white'>Book Lecture</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard
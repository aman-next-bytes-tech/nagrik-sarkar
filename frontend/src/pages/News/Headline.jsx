import React from 'react'

const Headline = ({ img, heading, tags,views, time}) => {
    return (
        <div className='flex gap-2 items-start bg-slate-100 p-2 rounded shadow-md'>
            <div className='rounded bg-gray-200 w-20 h-20 overflow-hidden'>
                <img className='w-full h-full object-cover' src={img} alt="" />
            </div>
            <div>
                <h4 className='font-semibold'>{heading}</h4>
                <div className='flex gap-1 mb-2 flex-wrap'>
                    {
                        tags.map((tag, index) => (
                            <span key={index} className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded whitespace-nowrap'>{tag}</span>
                        ))
                    }
                </div>
                <div className="text-sm text-slate-500 flex justify-between items-center">
                    <div className='flex items-center gap-[2px]'>
                        <i className="text-lg uil uil-eye"></i>
                        <span>{views}</span>
                    </div>
                    <div>
                        {time}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Headline
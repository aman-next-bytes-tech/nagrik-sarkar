import React from 'react'

const FeaturedCard = ({ img, heading, source, time }) => {
    return (
        <div className=''>
            <div className='bg-slate-200 rounded overflow-hidden w-full h-48 mb-2'>
                <img className='w-full h-full object-cover' src={img} alt="img" />
            </div>
            <div className='flex gap-2 justify-between'>
                <h4 className='font-semibold text-sm'>{heading}</h4>
                <div className='flex flex-col items-end'>
                    {
                        source &&
                        <span className='text-xs font-semibold bg-violet-200 text-violet-500 px-2 py-[1px] rounded whitespace-nowrap'>{source}</span>
                    }
                    <div className='text-slate-500 text-sm'>
                        {time}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCard
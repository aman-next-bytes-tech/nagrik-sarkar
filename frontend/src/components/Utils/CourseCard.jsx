import React from 'react'
import starIcon from '../../assets/star.svg';

const CourseCard = ({ img, badge, review, rating, courseTitle, couseDescription }) => {
    return (
        <div className='p-4 rounded-lg bg-slate-200 m-4 max-w-sm'>
            <div className='relative rounded-lg mb-2 bg-slate-500 h-56 overflow-hidden'>
                {badge && 
                    <div className='absolute top-2 right-2 rounded-full bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 text-white px-3'>
                    {badge}
                </div>
                }
                <img src={img} alt="" className='h-full w-full object-cover' />
            </div>
            <div className='mb-4'>
                <h3 className='font-semibold'>{courseTitle}</h3>
                <p className='text-slate-600'>{couseDescription}</p>
            </div>
            <div className='flex gap-2'>
                <div className='flex gap-1 bg-yellow-100 items-center px-2 py-1 text-sm rounded-full'>
                    <span className=''>
                        <img src={starIcon} alt="" className='w-5' />
                    </span>
                    <span>{rating}</span>
                </div>
                <div>({review} Review)</div>
            </div>
        </div>
    )
}

export default CourseCard
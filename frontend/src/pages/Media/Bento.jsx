import React from 'react'

const img1 = "https://images.pexels.com/photos/7919635/pexels-photo-7919635.jpeg?auto=compress&cs=tinysrgb&w=600";
const img2 = "https://images.pexels.com/photos/693776/pexels-photo-693776.jpeg?auto=compress&cs=tinysrgb&w=600";
const img3 = "https://images.pexels.com/photos/2804327/pexels-photo-2804327.jpeg?auto=compress&cs=tinysrgb&w=600";
const img4 = "https://images.pexels.com/photos/2378278/pexels-photo-2378278.jpeg?auto=compress&cs=tinysrgb&w=600";
const img5 = "https://images.pexels.com/photos/235731/pexels-photo-235731.jpeg?auto=compress&cs=tinysrgb&w=600";

const Bento = () => {
  return (
    <div className='grid grid-rows-3 grid-cols-3 h-full gap-2'>
      <div className='row-span-3 rounded bg-slate-200 overflow-hidden'>
        <img src={img1}
        className='w-full h-full object-cover'
        alt="" />
      </div>
      <div className='rounded bg-slate-200 overflow-hidden'>
        <img src={img2}
        className='w-full h-full object-cover'
        alt="" />
      </div>
      <div className='row-span-2 rounded bg-slate-200 overflow-hidden'>
        <img src={img3}
        className='w-full h-full object-cover'
        alt="" />
      </div>
      <div className='row-span-2 rounded bg-slate-200 overflow-hidden'>
        <img src={img4}
        className='w-full h-full object-cover'
        alt="" />
      </div>
      <div className='rounded bg-slate-200 overflow-hidden'>
        <img src={img5}
        className='w-full h-full object-cover'
        alt="" />
      </div>
    </div>
  )
}

export default Bento
import React from 'react'

const Card = ({ name, designation }) => {
    return (
        <div className='bg-slate-400 rounded-xl min-w-52 min-h-60 relative overflow-hidden'>
            
        </div>
    )
}

const EventCard = ({span, heading, description, img})=>{
    return (
        <div className={`
            bg-slate-300 col-span-${span} rounded relative overflow-hidden h-full
        `}>
            <img className='w-full h-full object-cover' src={img} alt="" />
            <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
            <div className='text-sm absolute bottom-0 left-0 p-3'>
                <h4 className='font-semibold text-white'>{heading}</h4>
                <p className='text-xs text-slate-300'>{description}</p>
            </div>
        </div>
    )
}

const data = [
    {
        span: 2,
        img: "https://th.bing.com/th/id/OIP.9iP5hfylm0iGQPmS8s1cOgHaE8?rs=1&pid=ImgDetMain",
        description: "description",
        heading: "Heading",
    },
    {
        span: 1,
        img: "https://th.bing.com/th/id/OIP.9iP5hfylm0iGQPmS8s1cOgHaE8?rs=1&pid=ImgDetMain",
        description: "description",
        heading: "Heading",
    },
    {
        span: 1,
        img: "https://th.bing.com/th/id/OIP.9iP5hfylm0iGQPmS8s1cOgHaE8?rs=1&pid=ImgDetMain",
        description: "description",
        heading: "Heading",
    },
    {
        span: 1,
        img: "https://th.bing.com/th/id/OIP.9iP5hfylm0iGQPmS8s1cOgHaE8?rs=1&pid=ImgDetMain",
        description: "description",
        heading: "Heading",
    },
    {
        span: 1,
        img: "https://th.bing.com/th/id/OIP.9iP5hfylm0iGQPmS8s1cOgHaE8?rs=1&pid=ImgDetMain",
        description: "description",
        heading: "Heading",
    }
];

const Events = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-1  max-w-2xl h-[400px] bg-slate-100 rounded-xl p-4'>
        {
            data.map((e, index)=>(
                <EventCard
                    key={index}
                    span={e.span}
                    img={e.img}
                    description={e.description}
                    heading={e.heading}
                />
            ))
        }
    </div>
  )
}

export default Events
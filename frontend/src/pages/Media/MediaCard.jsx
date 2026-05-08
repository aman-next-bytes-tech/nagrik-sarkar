const MediaCard = ({ img, title, duration, audience, topic }) => {
  return (
    <article className='rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow'>
      <div className='h-48 bg-zinc-200 overflow-hidden'>
        <img className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' src={img} alt={title} />
      </div>

      <div className='p-4 space-y-3'>
        <div className='flex flex-wrap gap-2'>
          <span className='rounded-full bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1'>{topic}</span>
          <span className='rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1'>{duration}</span>
        </div>

        <h3 className='text-base md:text-lg font-semibold text-slate-900'>{title}</h3>
        <p className='text-sm text-slate-600'>Target Audience: {audience}</p>

        <a href='/contact' className='inline-block text-sm font-medium text-emerald-700 hover:text-emerald-600'>
          Request Screening
        </a>
      </div>
    </article>
  );
};

export default MediaCard;

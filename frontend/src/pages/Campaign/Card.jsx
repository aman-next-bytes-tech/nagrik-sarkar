const Card = ({ img, heading, description, focusArea, beneficiaries, goal, raised }) => {
  const progress = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <article className='h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300'>
      <div className='flex h-[420px] w-full items-center justify-center overflow-hidden rounded-t-2xl bg-slate-50 p-3'>
        <img className='h-full w-full object-contain transition-transform duration-500 hover:scale-[1.02]' src={img} alt={heading} />
      </div>

      <div className='p-5 space-y-3'>
        <div className='flex justify-between gap-2 items-start'>
          <h3 className='font-semibold text-lg text-slate-900'>{heading}</h3>
          {/* <span className='shrink-0 rounded-full bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1'>
            {focusArea}
          </span> */}
        </div>

        <p className='text-sm text-slate-600 min-h-[48px]'>{description}</p>




        <div className='flex gap-2 pt-1'>
          <a
            href='#'
            className='flex-1 text-center rounded-lg bg-emerald-600 text-white text-sm py-2 hover:bg-emerald-500 transition-colors'
          >
            Join Campaign
          </a>
          <a
            href='#'
            className='flex-1 text-center rounded-lg border border-emerald-600 text-emerald-700 text-sm py-2 hover:bg-emerald-50 transition-colors'
          >
            Donate
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;

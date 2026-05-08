const stats = [
  { label: 'District Campaigns', value: '48+' },
  { label: 'Community Partners', value: '120+' },
  { label: 'People Reached', value: '2.1L+' },
];

const Banner = () => {
  return (
    <section className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-orange-50 to-amber-100 p-6 md:p-10 my-5'>
      <div className='absolute -top-12 -right-10 h-44 w-44 rounded-full bg-emerald-200/60 blur-2xl' />
      <div className='absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-orange-200/60 blur-2xl' />

      <div className='relative'>
        <div>
          <span className='inline-block rounded-full bg-emerald-100 text-emerald-800 px-4 py-1 text-xs md:text-sm font-semibold'>
            Promote Social Welfare Initiatives
          </span>

          <h1 className='mt-4 text-3xl md:text-5xl font-bold leading-tight text-slate-900'>
            Join Awareness Campaigns for an Inclusive India
          </h1>

          <p className='mt-4 text-slate-700 md:text-lg'>
            Collaborate with us to promote child welfare, women empowerment, health awareness, and senior citizen support
            through trusted community campaigns.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <a
              href='/contact'
              className='rounded-lg bg-emerald-600 px-5 py-2.5 text-white font-medium hover:bg-emerald-500 transition-colors'
            >
              Become a Partner
            </a>
            <a
              href='/campaign'
              className='rounded-lg border border-emerald-600 px-5 py-2.5 text-emerald-700 font-medium hover:bg-emerald-50 transition-colors'
            >
              Explore Campaigns
            </a>
          </div>

          <div className='mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3'>
            {stats.map((item) => (
              <div key={item.label} className='rounded-xl border border-white bg-white/80 p-3'>
                <p className='text-xl md:text-2xl font-bold text-slate-900'>{item.value}</p>
                <p className='text-xs md:text-sm text-slate-600'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;

const quickStats = [
  { label: 'Stories Published', value: '180+' },
  { label: 'Awareness Videos', value: '95+' },
  { label: 'Field Updates / Month', value: '40+' },
];

const Banner = () => {
  return (
    <section className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-orange-50 to-amber-100 p-6 md:p-10 mb-8'>
      <div className='absolute -top-10 -right-8 h-40 w-40 rounded-full bg-emerald-200/60 blur-2xl' />
      <div className='absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-orange-200/50 blur-2xl' />

      <div className='relative'>
        <div>
          <span className='inline-block rounded-full bg-emerald-100 text-emerald-800 px-4 py-1 text-xs md:text-sm font-semibold'>
            Media & Impact Updates
          </span>

          <h1 className='mt-4 text-3xl md:text-5xl font-bold leading-tight text-slate-900'>
            Voices, Stories, and Ground Realities From Communities
          </h1>

          <p className='mt-4 text-slate-700 md:text-lg max-w-2xl'>
            Follow our latest reports, awareness videos, and campaign highlights from education, healthcare,
            women empowerment, and relief programs.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <a
              href='/campaign'
              className='rounded-lg bg-emerald-600 px-5 py-2.5 text-white font-medium hover:bg-emerald-500 transition-colors'
            >
              View Campaigns
            </a>
            <a
              href='/contact'
              className='rounded-lg border border-emerald-600 px-5 py-2.5 text-emerald-700 font-medium hover:bg-emerald-50 transition-colors'
            >
              Share Story
            </a>
          </div>

          <div className='mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3'>
            {quickStats.map((stat) => (
              <div key={stat.label} className='rounded-xl bg-white/80 border border-white p-3'>
                <p className='text-xl md:text-2xl font-bold text-slate-900'>{stat.value}</p>
                <p className='text-xs md:text-sm text-slate-600'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;

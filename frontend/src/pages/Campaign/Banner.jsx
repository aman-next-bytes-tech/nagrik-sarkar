const impactStats = [
  { label: 'Families Supported', value: '12,500+' },
  { label: 'Active Volunteers', value: '1,300+' },
  { label: 'District Programs', value: '48' },
];

const Banner = () => {
  return (
    <section className='relative my-6 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-6 py-10 md:px-10 md:py-14'>
      <div className='absolute -top-16 -right-16 h-48 w-48 rounded-full bg-emerald-200/50 blur-3xl' />
      <div className='absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-amber-200/50 blur-3xl' />
      <div className='absolute left-8 top-8 h-20 w-20 rounded-full border border-emerald-200/70' />
      <div className='absolute right-10 bottom-10 h-14 w-14 rounded-full border border-amber-200/80' />

      <div className='relative mx-auto max-w-5xl'>
        <div className='inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100/70 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-emerald-800'>
          Social Welfare Campaigns
        </div>

        <h1 className='mt-5 max-w-4xl text-3xl md:text-5xl font-bold leading-tight text-slate-900'>
          Together We Build Safer, Healthier, and Better Communities
        </h1>

        <p className='mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-slate-700'>
          Support initiatives focused on education, healthcare access, women empowerment, and emergency relief.
          Every contribution helps us reach more families with dignity and hope.
        </p>

        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href='/register-for-volunteer'
            className='rounded-lg bg-emerald-600 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors'
          >
            Become a Volunteer
          </a>
          <a
            href='/contact'
            className='rounded-lg border border-emerald-600 bg-white/80 px-5 py-2.5 text-emerald-700 font-medium hover:bg-emerald-50 transition-colors'
          >
            Partner With Us
          </a>
        </div>

        {/* <div className='mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3'>
          {impactStats.map((item) => (
            <div
              key={item.label}
              className='rounded-xl border border-white/80 bg-white/70 px-4 py-3 backdrop-blur-sm shadow-[0_6px_20px_rgba(15,23,42,0.06)]'
            >
              <p className='text-xl md:text-2xl font-bold text-slate-900'>{item.value}</p>
              <p className='text-xs md:text-sm text-slate-600'>{item.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Banner;

import { ArrowRight, Megaphone } from 'lucide-react';

const stats = [
  { label: 'Awareness Drives', value: '48+' },
  { label: 'Local Volunteers', value: '1,300+' },
  { label: 'Citizens Reached', value: '2.1L+' },
];

const Banner = () => {
  return (
    <section className='relative my-6 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-100 p-6 shadow-sm sm:p-8 md:p-12'>
      <div className='absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-200/60 blur-3xl' />
      <div className='absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-amber-200/70 blur-3xl' />

      <div className='relative'>
        <span className='inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-sm font-bold text-emerald-800'>
          <Megaphone size={16} />
          Public Awareness Promotion
        </span>

        <h1 className='mt-6 max-w-4xl text-3xl font-bold leading-tight text-slate-950 md:text-5xl'>
          Spread Trusted Welfare Information in Every Community
        </h1>

        <p className='mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg'>
          Promote NagrikSarkar awareness drives for schemes, SWO support, women safety,
          digital inclusion, health camps, and citizen rights through simple shareable material.
        </p>

        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href='/register-for-volunteer'
            className='inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500'
          >
            Join as Volunteer
            <ArrowRight size={16} />
          </a>
          <a
            href='/contact'
            className='inline-flex items-center gap-2 rounded-lg border border-emerald-600 bg-white/70 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50'
          >
            Request Awareness Drive
          </a>
        </div>

        <div className='mt-8 grid gap-3 sm:grid-cols-3'>
          {stats.map((item) => (
            <div key={item.label} className='rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm'>
              <p className='text-2xl font-bold text-slate-950'>{item.value}</p>
              <p className='mt-1 text-sm text-slate-600'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;

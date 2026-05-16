import { ArrowRight, BadgeCheck, Leaf, MapPinned, Scale, Smartphone, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/social-welfare-banner.jpg';
import communityImg from '../../assets/handshake.png';
import supportImg from '../../assets/planet-earth.png';

const stats = [
  { value: 'One-step', label: 'digital public welfare support' },
  { value: 'Central & State', label: 'government scheme guidance' },
  { value: 'People-first', label: 'transparent citizen assistance' },
];

const focusAreas = [
  {
    icon: <Smartphone className='h-5 w-5' />,
    title: 'Digital Social Welfare',
    description: 'Making government services easy, transparent, and accessible for everyone.',
  },
  {
    icon: <Leaf className='h-5 w-5' />,
    title: 'Greenery & Environmental Initiatives',
    description: 'Promoting tree plantation, environmental awareness, and sustainable living for a greener future.',
  },
  {
    icon: <Scale className='h-5 w-5' />,
    title: 'Social Justice & Inclusion',
    description: 'Supporting equality, awareness, and opportunities for marginalized and underprivileged communities.',
  },
  {
    icon: <UsersRound className='h-5 w-5' />,
    title: 'Citizen Empowerment',
    description: 'Helping people become digitally aware, informed, and self-reliant.',
  },
];

const principles = [
  'Common citizens and rural communities',
  'Students, senior citizens, farmers, and workers',
  'People seeking guidance for government-related digital services',
  'Anyone looking for information, opportunities, and public benefits',
];

const About = () => {
  return (
    <main className='bg-white'>
      <section className='relative overflow-hidden bg-slate-950 text-white'>
        <img
          src={bannerImg}
          alt='Social welfare support'
          className='absolute inset-0 h-full w-full object-cover opacity-30'
        />
        <div className='absolute inset-0 bg-slate-950/70' />

        <div className='relative mx-auto grid min-h-[28rem] max-w-screen-xl items-center gap-10 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-6 lg:py-20'>
          <div className='max-w-2xl'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-200'>About NagrikSarkar</p>
            <h1 className='text-4xl font-bold leading-tight md:text-5xl'>
              Connecting citizens with government, digitally and transparently.
            </h1>
            <p className='mt-5 max-w-xl text-base leading-7 text-slate-200'>
            </p>
            <div className='mt-7 flex flex-wrap gap-3'>
              <Link
                to='/schemes/search'
                className='inline-flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200'
              >
                Explore Schemes
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200'
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1'>
            {stats.map(({ value, label }) => (
              <div key={label} className='rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur-md'>
                <p className='text-2xl font-bold text-indigo-200'>{value}</p>
                <p className='mt-1 text-sm text-slate-200'>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto grid max-w-screen-xl gap-10 px-4 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-6 lg:py-16'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600'>Who we are</p>
          <h2 className='mt-3 text-3xl font-bold text-slate-950'>A simple digital bridge between people and public services</h2>
        </div>
        <div className='space-y-5 text-sm leading-7 text-slate-600 md:text-base'>
          <p>
                          NagrikSarkar is a people-first digital platform dedicated to empowering citizens through technology, transparency, and social welfare. Our mission is to bridge the gap between government services and common people by providing a simple, accessible, and reliable one-step digital solution for all public welfare needs.
          </p>
          <p>
            We believe that every citizen deserves equal access to information, opportunities, and government benefits. Through our website and mobile app, NagrikSarkar helps users discover, understand, and apply for various Central and State Government schemes related to education, healthcare, employment, pensions, agriculture, women empowerment, scholarships, digital services, and social welfare programs.
          </p>
        </div>
      </section>

      <section className='bg-slate-50 py-14 lg:py-16'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-6'>
          <div className='mb-8 max-w-2xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600'>What we focus on</p>
            <h2 className='mt-3 text-3xl font-bold text-slate-950'>Committed to a better society</h2>
            <p className='mt-4 text-sm leading-7 text-slate-600 md:text-base'>
              Beyond digital assistance, NagrikSarkar is committed to creating a better society through practical social, environmental, and citizen empowerment initiatives.
            </p>
          </div>

          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {focusAreas.map(({ icon, title, description }) => (
              <article key={title} className='rounded-lg border border-slate-200 bg-white p-6 shadow-sm'>
                <div className='grid h-11 w-11 place-items-center rounded-md bg-indigo-50 text-indigo-600'>
                  {icon}
                </div>
                <h3 className='mt-5 text-lg font-bold text-slate-950'>{title}</h3>
                <p className='mt-3 text-sm leading-6 text-slate-600'>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto grid max-w-screen-xl gap-8 px-4 py-14 md:grid-cols-2 md:px-6 lg:py-16'>
        <div className='overflow-hidden rounded-xl bg-slate-100'>
          <img src={communityImg} alt='Community partnership' className='h-full min-h-72 w-full object-contain p-8' />
        </div>

        <div className='flex flex-col justify-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600'>Our approach</p>
          <h2 className='mt-3 text-3xl font-bold text-slate-950'>Designed for citizens who need clear guidance</h2>
          <p className='mt-4 text-sm leading-7 text-slate-600 md:text-base'>
            Our platform is designed especially for common citizens, rural communities, students, senior citizens, farmers, workers, and anyone seeking guidance for government-related digital services.
          </p>

          <ul className='mt-6 space-y-3'>
            {principles.map((principle) => (
              <li key={principle} className='flex gap-3 text-sm text-slate-700'>
                <BadgeCheck className='mt-0.5 h-5 w-5 flex-none text-emerald-500' />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='bg-slate-950 text-white'>
        <div className='mx-auto grid max-w-screen-xl md:grid-cols-[1fr_260px]'>
          <div className='px-4 py-12 md:px-6 lg:py-14'>
            <div className='mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-indigo-500/20 text-indigo-200'>
              <MapPinned className='h-5 w-5' />
            </div>
            <h2 className='text-2xl font-bold'>A smarter, greener, and more inclusive India</h2>
            <p className='mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base'>
              At NagrikSarkar, we aim to build a future where every citizen can access government support without confusion, delays, or middlemen, creating a smarter, greener, and more inclusive India.
            </p>
            <p className='mt-5 text-sm font-semibold text-indigo-200 md:text-base'>
              NagrikSarkar - Connecting Citizens with Government, Digitally & Transparently.
            </p>
          </div>
          <div className='hidden items-end justify-center bg-indigo-500/10 p-6 md:flex'>
            <img src={supportImg} alt='Public welfare network' className='max-h-48 object-contain' />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

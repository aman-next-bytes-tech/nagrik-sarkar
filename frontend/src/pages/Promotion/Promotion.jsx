import {
  ArrowRight,
  CalendarDays,
  Download,
  HeartHandshake,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import swoSupportImg from '../../assets/news/swo-gram-panchayat-support.png';
import healthCampImg from '../../assets/news/health-nutrition-camp.png';
import digitalLearningImg from '../../assets/news/digital-learning-support.png';
import womenTrainingImg from '../../assets/news/women-shg-digital-training.png';
import Banner from './Banner';

const awarenessThemes = [
  {
    title: 'SWO Doorstep Awareness',
    description:
      'Explain how local Social Welfare Officers can help citizens with schemes, documents, applications, welfare benefits, and grievance support.',
    tag: 'Gram Panchayat',
    img: swoSupportImg,
  },
  {
    title: 'Women Safety & Empowerment',
    description:
      'Promote awareness around women safety, education, legal support, livelihood assistance, and family counseling services.',
    tag: 'Women Welfare',
    img: womenTrainingImg,
  },
  {
    title: 'Health & Nutrition Camps',
    description:
      'Share reliable information about health checkups, maternal care, nutrition counseling, referral support, and local camp schedules.',
    tag: 'Public Health',
    img: healthCampImg,
  },
  {
    title: 'Digital Access for Students',
    description:
      'Help students and families understand scholarship guidance, online forms, digital learning access, and education-related schemes.',
    tag: 'Digital Inclusion',
    img: digitalLearningImg,
  },
];

const promotionKit = [
  {
    title: 'SWO Initiative Poster',
    type: 'Campaign Poster',
    description: 'Use during Gram Panchayat meetings, volunteer onboarding, and public scheme awareness activities.',
    href: '/assets/Campaign/intiative1.jpeg',
  },
  {
    title: 'SWO Doorstep Service Poster',
    type: 'Campaign Poster',
    description: 'Useful for explaining the role of SWOs as local digital support partners for citizens.',
    href: '/assets/Campaign/Intiative2.jpeg',
  },
  {
    title: 'Mahila Kalyan Adhikari Poster',
    type: 'Women Welfare Poster',
    description: 'Share during women safety, awareness, health, education, and livelihood support meetings.',
    href: '/assets/Campaign/Mahila_kalyan.jpeg',
  },
];

const fieldDrives = [
  {
    title: 'Gram Panchayat SWO Awareness Sabha',
    date: '28 Jun 2026',
    location: 'Patna Rural Blocks',
    focus: 'Scheme guidance, document readiness, and doorstep service awareness',
  },
  {
    title: 'Mahila Suraksha Community Session',
    date: '05 Jul 2026',
    location: 'Muzaffarpur Community Halls',
    focus: 'Women safety, legal awareness, helpline information, and family support',
  },
  {
    title: 'Digital Safety and Scholarship Help Desk',
    date: '12 Jul 2026',
    location: 'Gaya School Clusters',
    focus: 'Cyber safety, scholarship forms, online application support, and student access',
  },
];

const participationSteps = [
  {
    title: 'Pick an awareness theme',
    description: 'Choose SWO support, women safety, digital access, health camps, or scheme discovery.',
    icon: ShieldCheck,
  },
  {
    title: 'Share trusted material',
    description: 'Use official posters during WhatsApp sharing, local meetings, and field sessions.',
    icon: MessageSquareText,
  },
  {
    title: 'Guide citizens locally',
    description: 'Help people understand benefits, documents, online forms, and where to get assistance.',
    icon: HeartHandshake,
  },
  {
    title: 'Report field response',
    description: 'Collect basic feedback so NagrikSarkar can improve future awareness drives.',
    icon: UsersRound,
  },
];

const ThemeCard = ({ title, description, tag, img }) => (
  <article className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
    <div className='aspect-[16/10] overflow-hidden bg-slate-100'>
      <img src={img} alt={title} className='h-full w-full object-cover transition duration-500 hover:scale-105' />
    </div>
    <div className='p-5'>
      <span className='rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700'>{tag}</span>
      <h3 className='mt-4 text-xl font-bold text-slate-950'>{title}</h3>
      <p className='mt-3 text-sm leading-6 text-slate-600'>{description}</p>
    </div>
  </article>
);

const KitCard = ({ title, type, description, href }) => (
  <article className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
    <div className='flex items-start justify-between gap-4'>
      <span className='rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700'>{type}</span>
    </div>
    <h3 className='mt-4 text-lg font-bold text-slate-950'>{title}</h3>
    <p className='mt-2 min-h-[72px] text-sm leading-6 text-slate-600'>{description}</p>
    <div className='mt-5 grid gap-3 sm:grid-cols-2'>
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className='inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500'
      >
        Open
        <ArrowRight size={16} />
      </a>
      <a
        href={href}
        download
        className='inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-600 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50'
      >
        Download
        <Download size={16} />
      </a>
    </div>
  </article>
);

const DriveCard = ({ title, date, location, focus }) => (
  <article className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
    <div className='flex items-start justify-between gap-4'>
      <span className='grid h-12 w-12 place-items-center rounded-xl bg-amber-50 text-amber-700'>
        <CalendarDays size={22} />
      </span>
      <span className='rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700'>Upcoming</span>
    </div>
    <h3 className='mt-4 text-lg font-bold text-slate-950'>{title}</h3>
    <p className='mt-3 flex items-center gap-2 text-sm text-slate-600'>
      <CalendarDays size={16} />
      {date}
    </p>
    <p className='mt-2 flex items-center gap-2 text-sm text-slate-600'>
      <MapPin size={16} />
      {location}
    </p>
    <p className='mt-4 text-sm leading-6 text-slate-600'>{focus}</p>
  </article>
);

const StepCard = ({ title, description, icon: Icon }) => (
  <article className='rounded-2xl border border-white/10 bg-white/5 p-5'>
    <span className='grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300'>
      <Icon size={22} />
    </span>
    <h3 className='mt-4 font-bold text-white'>{title}</h3>
    <p className='mt-2 text-sm leading-6 text-slate-300'>{description}</p>
  </article>
);

const Promotion = () => {
  return (
    <main className='bg-slate-50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Banner />
      </div>

      <section className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-6'>
          <p className='text-sm font-bold uppercase tracking-[0.2em] text-emerald-700'>Awareness Themes</p>
          <h2 className='mt-2 text-2xl font-bold text-slate-950 md:text-3xl'>Promote messages citizens can act on</h2>
        </div>
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {awarenessThemes.map((theme) => (
            <ThemeCard key={theme.title} {...theme} />
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='rounded-3xl bg-white p-6 shadow-sm md:p-8'>
          <div className='mb-6 flex flex-wrap items-end justify-between gap-4'>
            <div>
              <p className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>Promotion Kit</p>
              <h2 className='mt-2 text-2xl font-bold text-slate-950 md:text-3xl'>Posters for public sharing</h2>
            </div>
            <a href='/campaign' className='inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-600'>
              View campaigns
              <ArrowRight size={16} />
            </a>
          </div>

          <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {promotionKit.map((item) => (
              <KitCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-6 flex flex-wrap items-end justify-between gap-4'>
          <div>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-amber-700'>Field Drives</p>
            <h2 className='mt-2 text-2xl font-bold text-slate-950 md:text-3xl'>Upcoming awareness activities</h2>
          </div>
          <a href='/contact' className='inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-600'>
            Request local drive
            <ArrowRight size={16} />
          </a>
        </div>
        <div className='grid gap-5 md:grid-cols-3'>
          {fieldDrives.map((drive) => (
            <DriveCard key={drive.title} {...drive} />
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8'>
        <div className='rounded-3xl bg-slate-950 p-6 text-white md:p-8'>
          <div className='mb-6 max-w-3xl'>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-emerald-300'>How to participate</p>
            <h2 className='mt-2 text-2xl font-bold md:text-3xl'>Make promotion useful, local, and trustworthy</h2>
            <p className='mt-4 leading-7 text-slate-300'>
              The goal is not advertising. It is to help citizens understand where to get support,
              which documents they need, and how to access welfare services without middlemen.
            </p>
          </div>
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
            {participationSteps.map((step) => (
              <StepCard key={step.title} {...step} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Promotion;

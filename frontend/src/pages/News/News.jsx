import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Download,
  FileText,
  MapPin,
  Newspaper,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import glanceBanner from '../../assets/glance-banner.jpg';
import nashaMukt from '../../assets/events/nasha_mukt.jpg';
import swoSupportImg from '../../assets/news/swo-gram-panchayat-support.png';
import healthCampImg from '../../assets/news/health-nutrition-camp.png';
import childWelfareImg from '../../assets/news/child-welfare-session.png';
import womenTrainingImg from '../../assets/news/women-shg-digital-training.png';
import seniorHelpdeskImg from '../../assets/news/senior-citizen-helpdesk.png';
import digitalLearningImg from '../../assets/news/digital-learning-support.png';

const categories = [
  { label: 'All Updates', values: null },
  { label: 'Schemes', values: ['Schemes'] },
  { label: 'Health Camps', values: ['Public Health'] },
  { label: 'Women & Child', values: ['Women Empowerment', 'Child Welfare'] },
  { label: 'Senior Citizens', values: ['Senior Citizen Care'] },
  { label: 'Livelihood', values: ['Livelihood'] },
  { label: 'Community Outreach', values: ['Community Outreach'] },
];

const topStats = [
  { value: '38', label: 'District updates', icon: MapPin },
  { value: '126+', label: 'Citizen camps planned', icon: UsersRound },
  { value: '24x7', label: 'Digital support access', icon: ShieldCheck },
];

const featuredStory = {
  category: 'SWO Initiative',
  title: 'Gram Panchayat welfare support network enters field onboarding phase',
  summary:
    'NagrikSarkar is preparing local Social Welfare Officer support points to help citizens with schemes, documents, online applications, grievance assistance, and awareness programs.',
  date: '22 Jun 2026',
  location: 'Bihar',
  img: swoSupportImg,
};

const latestUpdates = [
  // {
  //   title: 'Scheme discovery portal adds new service categories',
  //   category: 'Schemes',
  //   source: 'Citizen Services',
  //   date: '22 Jun 2026',
  //   readTime: '2 min read',
  //   img: glanceBanner,
  //   excerpt:
  //     'Citizens can now browse welfare schemes by agriculture, education, housing, health, employment, and social support categories.',
  // },
  {
    title: 'Health and nutrition camp calendar released for rural blocks',
    category: 'Public Health',
    source: 'Health Outreach Desk',
    date: '22 Jun 2026',
    readTime: '3 min read',
    img: healthCampImg,
    excerpt:
      'Upcoming camps will focus on preventive checkups, maternal care, anemia awareness, and referral support for underserved households.',
  },
  {
    title: 'Bal Suraksha awareness sessions to support at-risk children',
    category: 'Child Welfare',
    source: 'Child Protection Cell',
    date: '21 Jun 2026',
    readTime: '4 min read',
    img: childWelfareImg,
    excerpt:
      'Field teams will coordinate with local institutions to identify children needing education, documentation, counseling, or referral support.',
  },
  {
    title: 'Women SHG digital services training starts at community centers',
    category: 'Livelihood',
    source: 'Livelihood Cell',
    date: '20 Jun 2026',
    readTime: '2 min read',
    img: womenTrainingImg,
    excerpt:
      'The program will help self-help groups understand online service access, welfare entitlements, and basic financial documentation.',
  },
  {
    title: 'Senior citizen help desks add pension guidance and wellness support',
    category: 'Senior Citizen Care',
    source: 'Senior Welfare Cell',
    date: '19 Jun 2026',
    readTime: '3 min read',
    img: seniorHelpdeskImg,
    excerpt:
      'The support desk model brings pension guidance, document review, and routine welfare assistance closer to elderly citizens.',
  },
  {
    title: 'Nasha Mukt Bharat youth outreach expands through volunteers',
    category: 'Community Outreach',
    source: 'Youth Outreach Cell',
    date: '18 Jun 2026',
    readTime: '3 min read',
    img: nashaMukt,
    excerpt:
      'Volunteer groups will help run awareness drives, counseling referrals, and community meetings against substance abuse.',
  },
  {
    title: 'Digital learning support drive reaches first-generation students',
    category: 'Education',
    source: 'Education Outreach',
    date: '17 Jun 2026',
    readTime: '2 min read',
    img: digitalLearningImg,
    excerpt:
      'Students will receive guidance on scholarships, application documents, digital access, and education-related government schemes.',
  },
];

const upcomingEvents = [
  {
    title: 'Block-Level SWO Orientation Camp',
    date: '28 Jun 2026',
    time: '10:30 AM',
    location: 'District Welfare Office, Patna',
    status: 'Registration Open',
  },
  {
    title: 'Community Health & Nutrition Camp',
    date: '04 Jul 2026',
    time: '09:00 AM',
    location: 'Primary Health Centre, Gaya',
    status: 'Public Camp',
  },
  {
    title: 'Women SHG Digital Services Workshop',
    date: '11 Jul 2026',
    time: '11:00 AM',
    location: 'Community Hall, Muzaffarpur',
    status: 'Limited Seats',
  },
];

const resources = [
  {
    title: 'Monthly welfare activity report',
    detail: 'District outreach, camps, and application assistance summary',
  },
  {
    title: 'Citizen scheme application checklist',
    detail: 'Documents and steps commonly needed before applying',
  },
  {
    title: 'Volunteer field support handbook',
    detail: 'Basic operating process for local welfare assistance',
  },
];

const StatCard = ({ value, label, icon: Icon }) => (
  <div className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm'>
    <div className='flex items-center gap-3'>
      <span className='grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700'>
        <Icon size={20} />
      </span>
      <div>
        <p className='text-2xl font-bold text-slate-950'>{value}</p>
        <p className='text-sm text-slate-600'>{label}</p>
      </div>
    </div>
  </div>
);

const UpdateCard = ({ title, category, source, date, readTime, img, excerpt }) => (
  <article className='group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
    <div className='aspect-[16/10] overflow-hidden bg-slate-100'>
      <img
        src={img}
        alt={title}
        className='h-full w-full object-cover transition duration-300 group-hover:scale-105'
      />
    </div>
    <div className='p-5'>
      <div className='mb-3 flex flex-wrap items-center gap-2 text-xs'>
        <span className='rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700'>{category}</span>
        <span className='text-slate-500'>{date}</span>
      </div>
      <h3 className='text-lg font-bold leading-snug text-slate-950'>{title}</h3>
      <p className='mt-3 line-clamp-3 text-sm leading-6 text-slate-600'>{excerpt}</p>
      <div className='mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500'>
        <span className='font-semibold text-slate-700'>{source}</span>
        <span className='flex items-center gap-1'>
          <Clock3 size={14} />
          {readTime}
        </span>
      </div>
    </div>
  </article>
);

const EventCard = ({ title, date, time, location, status }) => (
  <article className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
    <div className='flex items-start justify-between gap-4'>
      <div className='rounded-xl bg-blue-50 px-3 py-2 text-center text-blue-800'>
        <p className='text-xs font-semibold uppercase'>{date.split(' ')[1]}</p>
        <p className='text-2xl font-bold leading-none'>{date.split(' ')[0]}</p>
      </div>
      <span className='rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700'>{status}</span>
    </div>
    <h3 className='mt-4 text-lg font-bold text-slate-950'>{title}</h3>
    <div className='mt-4 space-y-2 text-sm text-slate-600'>
      <p className='flex items-center gap-2'>
        <Clock3 size={16} />
        {time}
      </p>
      <p className='flex items-center gap-2'>
        <MapPin size={16} />
        {location}
      </p>
    </div>
  </article>
);

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All Updates');
  const selectedCategory = categories.find((category) => category.label === activeCategory);
  const visibleUpdates = selectedCategory?.values
    ? latestUpdates.filter((item) => selectedCategory.values.includes(item.category))
    : latestUpdates;

  return (
    <main className='bg-slate-50'>
      <section className='bg-white px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-100 p-6 shadow-sm sm:p-8 md:p-12'>
          <span className='inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-sm font-bold text-emerald-800'>
            <Newspaper size={16} />
            News & Welfare Updates
          </span>

          <h1 className='mt-6 max-w-4xl text-3xl font-bold leading-tight text-slate-950 md:text-5xl'>
            Latest Welfare Announcements, Public Notices, and Community Events
          </h1>
          <p className='mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg'>
            Follow NagrikSarkar updates on government schemes, social welfare camps, SWO activity,
            citizen services, and important field announcements in one place.
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <Link
              to='/schemes/search'
              className='inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-500'
            >
              Explore Schemes
              <ArrowRight size={18} />
            </Link>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 rounded-lg border border-emerald-600 px-6 py-3 text-base font-semibold text-emerald-700 transition hover:bg-emerald-50'
            >
              Share Update
            </Link>
          </div>

          <div className='mt-8 grid gap-4 sm:grid-cols-3'>
            {topStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
        <div className='grid gap-6 lg:grid-cols-[1.35fr_0.65fr]'>
          <article className='overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm'>
            <div className='grid lg:grid-cols-[0.95fr_1.05fr]'>
              <div className='min-h-72 bg-slate-100'>
                <img
                  src={featuredStory.img}
                  alt={featuredStory.title}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='flex flex-col justify-center p-6 md:p-8'>
                <span className='mb-4 w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700'>
                  Lead story
                </span>
                <p className='text-sm font-semibold text-blue-700'>{featuredStory.category}</p>
                <h2 className='mt-3 text-2xl font-bold leading-tight text-slate-950 md:text-3xl'>
                  {featuredStory.title}
                </h2>
                <p className='mt-4 leading-7 text-slate-600'>{featuredStory.summary}</p>
                <div className='mt-6 flex flex-wrap gap-4 text-sm text-slate-500'>
                  <span className='flex items-center gap-2'>
                    <CalendarDays size={16} />
                    {featuredStory.date}
                  </span>
                  <span className='flex items-center gap-2'>
                    <MapPin size={16} />
                    {featuredStory.location}
                  </span>
                </div>
              </div>
            </div>
          </article>

          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>Quick access</p>
            <h2 className='mt-2 text-2xl font-bold text-slate-950'>For citizens</h2>
            <div className='mt-5 space-y-3'>
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  to='/schemes/search'
                  className='group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-emerald-300 hover:bg-emerald-50/60'
                >
                  <span>
                    <span className='flex items-center gap-2 font-semibold text-slate-950'>
                      <FileText size={18} className='text-emerald-700' />
                      {resource.title}
                    </span>
                    <span className='mt-1 block text-sm leading-6 text-slate-600'>{resource.detail}</span>
                  </span>
                  <ArrowRight size={18} className='mt-1 text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-700' />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap gap-3'>
          {categories.map((category) => (
            <button
              key={category.label}
              type='button'
              onClick={() => setActiveCategory(category.label)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category.label
                  ? 'border-blue-700 bg-blue-700 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-6 flex flex-wrap items-end justify-between gap-4'>
          <div>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-emerald-700'>Latest updates</p>
            <h2 className='mt-2 text-2xl font-bold text-slate-950 md:text-3xl'>News from welfare programs</h2>
          </div>
          <Link to='/contact' className='inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-600'>
            Share an update
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {visibleUpdates.map((item) => (
            <UpdateCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8'>
          <div className='mb-6 flex flex-wrap items-end justify-between gap-4'>
            <div>
              <p className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>Events & camps</p>
              <h2 className='mt-2 text-2xl font-bold text-slate-950 md:text-3xl'>Upcoming citizen support programs</h2>
            </div>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500'
            >
              Register participation
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className='grid gap-5 md:grid-cols-3'>
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8'>
        <div className='grid gap-6 rounded-3xl bg-slate-950 p-6 text-white md:grid-cols-[0.8fr_1.2fr] md:p-8'>
          <div>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-emerald-300'>Public information</p>
            <h2 className='mt-2 text-2xl font-bold md:text-3xl'>Need scheme guidance or field support?</h2>
            <p className='mt-4 leading-7 text-slate-300'>
              Citizens, volunteers, and local partners can contact NagrikSarkar for scheme discovery,
              document readiness, online application help, and awareness activity coordination.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-3'>
            {resources.map((resource) => (
              <div key={resource.title} className='rounded-2xl border border-white/10 bg-white/5 p-5'>
                <Download size={20} className='text-emerald-300' />
                <h3 className='mt-4 font-bold'>{resource.title}</h3>
                <p className='mt-2 text-sm leading-6 text-slate-300'>{resource.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;

import { useState } from 'react';
import {
  ArrowRight,
  BookOpenCheck,
  Download,
  ExternalLink,
  FileText,
  HeartHandshake,
  Search,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';

const pdfResources = [
    {
    title: 'RBI Ombudsman Awareness Comic',
    category: 'Financial Awareness',
    audience: 'Bank customers and digital payment users',
    description:
      'Citizen-friendly awareness material explaining complaint redressal and banking grievance support through an easy story format.',
    href: '/assets/Courses/Raju_and_40_thieves-RBI_Ombudsman_Mumbai_II_Mobile_landscape_compressed.pdf',
    fileName: 'Raju_and_40_thieves-RBI_Ombudsman_Mumbai_II_Mobile_landscape_compressed.pdf',
    accent: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    title: 'Mahila Suraksha Booklet',
    category: 'Women Safety',
    audience: 'Women, families, community workers',
    description:
      'Awareness material focused on women safety, rights, protection services, reporting support, and practical safety information.',
    href: '/assets/Courses/Mahila_Suraksha_Booklet25.pdf',
    fileName: 'Mahila_Suraksha_Booklet25.pdf',
    accent: 'bg-rose-50 text-rose-700 border-rose-100',
  },
  {
    title: 'Cyber Crime Awareness Handbook',
    category: 'Cyber Safety',
    audience: 'Students, citizens, volunteers',
    description:
      'A practical handbook for understanding common cyber crimes, online fraud patterns, reporting steps, and digital safety habits.',
    href: '/assets/Courses/TSWSW-HandbookforTacklingCyberCrimes.pdf',
    fileName: 'TSWSW-HandbookforTacklingCyberCrimes.pdf',
    accent: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    title: 'Cybersecurity Awareness Book',
    category: 'Cyber Safety',
    audience: 'Youth, families, digital service users',
    description:
      'CERT-In awareness content for safer internet use, cyber hygiene, mobile protection, password safety, and fraud prevention.',
    href: '/assets/Courses/CERT-In-NCSAM-Book_cybersecurity_handbook.pdf',
    fileName: 'CERT-In-NCSAM-Book_cybersecurity_handbook.pdf',
    accent: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  },
  {
    title: 'ABDM Scan and Share Onboarding Manual',
    category: 'Digital Health',
    audience: 'Health desks, volunteers, service operators',
    description:
      'Operational awareness document for ABDM Scan and Share onboarding, useful for digital health access support and public service desks.',
    href: '/assets/Courses/ABDM_Scan_and_Share_Onboarding_Manual.pdf',
    fileName: 'ABDM_Scan_and_Share_Onboarding_Manual.pdf',
    accent: 'bg-cyan-50 text-cyan-700 border-cyan-100',
  },
  {
    title: 'Social and Economic Change in Bihar',
    category: 'Bihar Development',
    audience: 'Researchers, volunteers, public awareness teams',
    description:
      'Reference content on social and economic change in Bihar, useful for understanding local development context and welfare priorities.',
    href: '/assets/Courses/Social_and_Economic_change_in_bihar.pdf',
    fileName: 'Social_and_Economic_change_in_bihar.pdf',
    accent: 'bg-lime-50 text-lime-700 border-lime-100',
  },
    {
    title: 'Social Justice Awareness Guide',
    category: 'Social Justice',
    audience: 'Citizens, volunteers, and field support teams',
    description:
      'A public awareness document covering social justice concepts, welfare rights, inclusion, and support pathways for vulnerable communities.',
    href: '/assets/Courses/social_justice.pdf',
    fileName: 'social_justice.pdf',
    accent: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
];

const categories = ['All Resources', ...new Set(pdfResources.map((item) => item.category))];

const focusAreas = [
  {
    title: 'Citizen Awareness',
    description: 'Readable guides for rights, safety, services, and public welfare access.',
    icon: UsersRound,
  },
  {
    title: 'Digital & Financial Safety',
    description: 'Cyber safety, banking grievance, and digital service support materials.',
    icon: ShieldCheck,
  },
  {
    title: 'Field Support Material',
    description: 'Helpful references for volunteers, SWOs, and community assistance desks.',
    icon: HeartHandshake,
  },
];

const ResourceCard = ({ title, category, audience, description, href, fileName, accent }) => (
  <article className='flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
    <div className='flex items-start justify-between gap-4'>
      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${accent}`}>
        {category}
      </span>
      <span className='grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-500'>
        <FileText size={20} />
      </span>
    </div>

    <h3 className='mt-5 text-xl font-bold leading-snug text-slate-950'>{title}</h3>
    <p className='mt-2 text-sm font-medium text-slate-500'>{audience}</p>
    <p className='mt-4 flex-1 text-sm leading-6 text-slate-600'>{description}</p>

    <div className='mt-5 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-500'>
      PDF: <span className='font-medium text-slate-700'>{fileName}</span>
    </div>

    <div className='mt-5 grid gap-3 sm:grid-cols-2'>
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className='inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500'
      >
        View PDF
        <ExternalLink size={16} />
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

const FocusCard = ({ title, description, icon: Icon }) => (
  <article className='rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm'>
    <span className='grid h-11 w-11 place-items-center rounded-xl bg-emerald-100 text-emerald-700'>
      <Icon size={22} />
    </span>
    <h3 className='mt-4 text-lg font-bold text-slate-950'>{title}</h3>
    <p className='mt-2 text-sm leading-6 text-slate-600'>{description}</p>
  </article>
);

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All Resources');
  const visibleResources =
    activeCategory === 'All Resources'
      ? pdfResources
      : pdfResources.filter((item) => item.category === activeCategory);

  return (
    <main className='bg-slate-50'>
      <section className='bg-white px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-100 p-6 shadow-sm sm:p-8 md:p-12'>
          <span className='inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-sm font-bold text-emerald-800'>
            <BookOpenCheck size={16} />
            Social Awareness Resources
          </span>

          <h1 className='mt-6 max-w-4xl text-3xl font-bold leading-tight text-slate-950 md:text-5xl'>
            Public Welfare Guides, Safety Booklets, and Awareness PDFs
          </h1>
          <p className='mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg'>
            Access helpful documents for citizen awareness, digital safety, women protection, social justice,
            health services, and community welfare support. These resources are for public education and field guidance.
          </p>

          <div className='mt-8 grid gap-4 md:grid-cols-3'>
            {focusAreas.map((item) => (
              <FocusCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-6 flex flex-wrap items-end justify-between gap-4'>
          <div>
            <p className='text-sm font-bold uppercase tracking-[0.2em] text-emerald-700'>Resource Library</p>
            <h2 className='mt-2 text-2xl font-bold text-slate-950 md:text-3xl'>Awareness Content PDFs</h2>
          </div>
          <div className='inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm'>
            <Search size={16} />
            {visibleResources.length} resources available
          </div>
        </div>

        <div className='mb-6 flex flex-wrap gap-3'>
          {categories.map((category) => (
            <button
              key={category}
              type='button'
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:text-emerald-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {visibleResources.map((resource) => (
            <ResourceCard key={resource.href} {...resource} />
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8'>
        <div className='rounded-3xl bg-slate-950 p-6 text-white md:p-8'>
          <div className='grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center'>
            <div>
              <p className='text-sm font-bold uppercase tracking-[0.2em] text-emerald-300'>For public use</p>
              <h2 className='mt-2 text-2xl font-bold md:text-3xl'>Share these resources during awareness drives</h2>
            </div>
            <p className='leading-7 text-slate-300'>
              Volunteers and SWO teams can use these PDFs during meetings, camps, school sessions,
              women safety discussions, cyber awareness programs, and doorstep citizen support activities.
            </p>
          </div>
          <a
            href='/contact'
            className='mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500'
          >
            Request more awareness material
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Courses;

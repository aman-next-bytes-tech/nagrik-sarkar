import Banner from './Banner';
import goldMedal from '../../assets/gold-medal.webp';
import silverMedal from '../../assets/silver-medal.webp';
import bronzeMedal from '../../assets/bronze-medal.webp';

const initiatives = [
  {
    title: 'Nasha Mukti Jan Jagrukta Drive',
    description: 'Community-led awareness sessions in schools and wards for substance abuse prevention.',
    location: 'Delhi NCR',
    period: 'May - July 2026',
  },
  {
    title: 'Bal Shiksha Enrollment Campaign',
    description: 'Door-to-door enrollment outreach for children from vulnerable households.',
    location: 'Urban Slums & Rural Clusters',
    period: 'June - August 2026',
  },
  {
    title: 'Senior Citizen Care Promotion Week',
    description: 'Health camps, pension awareness, and legal support assistance for senior citizens.',
    location: 'District Welfare Centers',
    period: 'July 2026',
  },
];

const sponsorPlans = [
  {
    level: 'Bronze Supporter',
    contribution: '₹25,000+',
    benefits: 'Local campaign branding, event mention, quarterly update report',
    medal: bronzeMedal,
  },
  {
    level: 'Silver Supporter',
    contribution: '₹75,000+',
    benefits: 'District-level recognition, social media mention, impact report spotlight',
    medal: silverMedal,
  },
  {
    level: 'Gold Supporter',
    contribution: '₹1,50,000+',
    benefits: 'Flagship campaign co-branding, annual recognition, detailed impact dashboard',
    medal: goldMedal,
  },
];

const partnerHighlights = [
  {
    name: 'Jan Seva Foundation',
    impact: 'Supported 18 awareness camps and 6 health outreach drives',
  },
  {
    name: 'Udaan Women Collective',
    impact: 'Enabled 1,200 women to access training and livelihood sessions',
  },
  {
    name: 'Shiksha Saathi Network',
    impact: 'Helped enroll 900+ children through local school mobilization',
  },
];

const InitiativeCard = ({ title, description, location, period }) => (
  <article className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow'>
    <h3 className='text-lg font-semibold text-slate-900'>{title}</h3>
    <p className='mt-2 text-sm text-slate-600'>{description}</p>
    <div className='mt-4 flex flex-col gap-1 text-sm text-slate-700'>
      <p><span className='font-medium text-slate-900'>Location:</span> {location}</p>
      <p><span className='font-medium text-slate-900'>Timeline:</span> {period}</p>
    </div>
  </article>
);

const SponsorCard = ({ level, contribution, benefits, medal }) => (
  <article className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow text-center'>
    <div className='mx-auto h-20 w-20'>
      <img src={medal} alt={level} className='w-full h-full object-contain' />
    </div>
    <h3 className='mt-3 text-lg font-semibold text-slate-900'>{level}</h3>
    <p className='mt-1 text-emerald-700 font-semibold'>{contribution}</p>
    <p className='mt-2 text-sm text-slate-600 min-h-[60px]'>{benefits}</p>
    <a
      href='/contact'
      className='inline-block mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white font-medium hover:bg-emerald-500 transition-colors'
    >
      Select Plan
    </a>
  </article>
);

const PartnerItem = ({ name, impact, index }) => (
  <div className='flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4'>
    <div className='flex-shrink-0 h-8 w-8 rounded-full bg-orange-100 text-orange-700 grid place-items-center font-semibold text-sm'>
      {index + 1}
    </div>
    <div>
      <h4 className='font-semibold text-slate-900'>{name}</h4>
      <p className='text-sm text-slate-600 mt-1'>{impact}</p>
    </div>
  </div>
);

const Promotion = () => {
  return (
    <main className='m-auto max-w-screen-xl px-4 md:px-6 pb-10'>
      <Banner />

      <section className='mb-12'>
        <div className='flex items-center justify-between mb-5'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900'>Featured Promotion Initiatives</h2>
          <a href='/media' className='text-sm font-medium text-emerald-700 hover:text-emerald-600'>
            View media coverage
          </a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {initiatives.map((item) => (
            <InitiativeCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className='mb-12 rounded-3xl bg-slate-50 p-5 md:p-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-3'>Sponsorship Levels</h2>
        <p className='text-sm md:text-base text-slate-600 mb-6 max-w-3xl'>
          Support verified social welfare campaigns through transparent contribution plans and measurable impact updates.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {sponsorPlans.map((plan) => (
            <SponsorCard key={plan.level} {...plan} />
          ))}
        </div>
      </section>

      <section className='mb-8'>
        <div className='flex items-center justify-between mb-5'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900'>Partner Impact Board</h2>
          <a href='/contact' className='text-sm font-medium text-emerald-700 hover:text-emerald-600'>
            Register your organization
          </a>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {partnerHighlights.map((partner, index) => (
            <PartnerItem key={partner.name} {...partner} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Promotion;

import FilterOption from '../../components/Utils/FilterOption';
import NewsCard from '../../components/Utils/NewsCard';
import FeaturedCard from './FeaturedCard';
import TreadingNews from './TreadingNews';
import healthCampaign from '../../assets/health-campaign.jpg';
import campaignImg from '../../assets/campaign.jpg';
import campaign1 from '../../assets/campaign-1.avif';
import glanceBanner from '../../assets/glance-banner.jpg';
import educationCampaign from '../../assets/education-campaign.avif';
import educationDay from '../../assets/education-day.avif';
import olderPersonsEvent from '../../assets/events/international_data_of older_persons.jpg';
import nashaMukt from '../../assets/events/nasha_mukt.jpg';

const newsCategories = [
  'All',
  'Child Welfare',
  'Women Empowerment',
  'Public Health',
  'Senior Citizen Care',
  'Livelihood',
  'Nutrition',
  'Education',
  'Community Outreach',
  'Policy Update',
];

const trendingNewsData = [
  {
    views: '142K',
    heading: 'Nasha Mukt Bharat Awareness Drives Expanded Across 12 Districts',
    tags: ['Awareness', 'Youth'],
    img: nashaMukt,
  },
  {
    views: '96K',
    heading: 'International Day of Older Persons: 40 New Community Help Desks Announced',
    tags: ['Senior Care', 'Inclusion'],
    img: olderPersonsEvent,
  },
];

const featuredNewsData = [
  {
    heading: 'Bal Suraksha Campaign Supports 1,200 At-Risk Children',
    img: educationCampaign,
    source: 'Welfare Desk',
    time: '2 hours ago',
  },
  {
    heading: 'Rural Health Camps Deliver Preventive Checkups to 8,000 Citizens',
    img: healthCampaign,
    source: 'Public Health Unit',
    time: '5 hours ago',
  },
  {
    heading: 'Women Self-Help Groups Launch New Micro-Enterprise Network',
    img: campaign1,
    source: 'Livelihood Cell',
    time: '1 day ago',
  },
  {
    heading: 'Nutrition and Maternal Care Workshops Begin in Community Centers',
    img: glanceBanner,
    source: 'Nutrition Mission',
    time: '1 day ago',
  },
  {
    heading: 'Digital Learning Access Program Reaches First-Generation Students',
    img: educationDay,
    source: 'Education Outreach',
    time: '2 days ago',
  },
  {
    heading: 'Disability Assistance Camps Provide On-Ground Registration Support',
    img: campaignImg,
    source: 'Inclusive Support Team',
    time: '3 days ago',
  },
  {
    heading: 'Monsoon Relief Preparedness Plan Shared With Local Volunteers',
    img: campaignImg,
    source: 'Relief Operations',
    time: '4 days ago',
  },
  {
    heading: 'Social Welfare Helpline Strengthened for Faster Citizen Resolution',
    img: campaign1,
    source: 'Citizen Services',
    time: '5 days ago',
  },
];

const allNewsData = [
  {
    headline: 'Child Enrollment Mobilization Campaign Starts in Urban Settlements',
    source: 'Education Outreach',
    sourceLogo: '',
    time: 'Today',
    img: educationCampaign,
    content: 'Field teams launched enrollment mapping and household visits to bring out-of-school children back to classrooms.',
  },
  {
    headline: 'Senior Citizen Support Centers Begin Weekly Health Consultation Services',
    source: 'Senior Welfare Cell',
    sourceLogo: '',
    time: 'Today',
    img: olderPersonsEvent,
    content: 'New support desks now provide guidance on pension services, legal support, and routine health consultation access.',
  },
  {
    headline: 'Community Nutrition Sessions Target Maternal and Child Health Outcomes',
    source: 'Nutrition Mission',
    sourceLogo: '',
    time: '1 day ago',
    img: glanceBanner,
    content: 'Nutrition workers are conducting ward-level sessions on balanced diets, anemia prevention, and infant feeding practices.',
  },
  {
    headline: 'Women SHGs Receive Governance and Financial Literacy Training',
    source: 'Women Empowerment Unit',
    sourceLogo: '',
    time: '1 day ago',
    img: campaign1,
    content: 'The program focuses on savings discipline, meeting management, and micro-enterprise readiness for self-help groups.',
  },
  {
    headline: 'Mobile Public Health Units Cover Underserved Rural Blocks',
    source: 'Public Health Unit',
    sourceLogo: '',
    time: '2 days ago',
    img: healthCampaign,
    content: 'Teams provided preventive checkups, referral support, and awareness sessions on seasonal disease prevention.',
  },
  {
    headline: 'Youth Volunteer Network Expands Drug-Free Community Initiative',
    source: 'Youth Outreach Cell',
    sourceLogo: '',
    time: '2 days ago',
    img: nashaMukt,
    content: 'College volunteers partnered with local bodies to run community awareness rallies and counseling referral drives.',
  },
];

const upcomingEvents = [
  {
    title: 'District Bal Suraksha Workshop',
    date: '18 Apr 2026',
    location: 'District Welfare Office, New Delhi',
  },
  {
    title: 'Community Health and Nutrition Camp',
    date: '23 Apr 2026',
    location: 'Ward Community Hall, East Delhi',
  },
  {
    title: 'Women SHG Leadership Conclave',
    date: '30 Apr 2026',
    location: 'Social Welfare Training Center, Delhi',
  },
];

const EventTile = ({ title, date, location }) => (
  <div className='rounded-xl border border-slate-200 bg-white p-4'>
    <p className='text-xs text-emerald-700 font-semibold'>{date}</p>
    <h4 className='mt-1 font-semibold text-slate-900'>{title}</h4>
    <p className='text-sm text-slate-600 mt-1'>{location}</p>
  </div>
);

const News = () => {
  return (
    <main className='max-w-screen-xl mx-auto px-4 md:px-6 py-6 md:py-8'>
      <section className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-orange-50 to-amber-100 p-6 md:p-10 mb-10'>
        <div className='absolute -top-10 -right-8 h-36 w-36 rounded-full bg-emerald-200/60 blur-2xl' />
        <div className='absolute -bottom-14 -left-8 h-40 w-40 rounded-full bg-orange-200/60 blur-2xl' />

        <div className='relative'>
          <div>
            <span className='inline-block rounded-full bg-emerald-100 text-emerald-800 px-4 py-1 text-xs md:text-sm font-semibold'>
              Social Welfare Newsroom
            </span>
            <h1 className='mt-4 text-3xl md:text-5xl font-bold leading-tight text-slate-900'>
              Latest Welfare Updates, Reports, and Community Announcements
            </h1>
            <p className='mt-4 text-slate-700 md:text-lg'>
              Stay informed about public welfare programs, field activities, policy circulars, and upcoming citizen events.
            </p>
          </div>

        </div>
      </section>

      <section className='mb-16'>
        <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-6'>Trending Welfare Highlights</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {trendingNewsData.map((item) => (
            <TreadingNews key={item.heading} {...item} />
          ))}
        </div>
      </section>

      <section className='mb-16'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900'>Featured News</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {featuredNewsData.map((item) => (
            <FeaturedCard key={item.heading} {...item} />
          ))}
        </div>
      </section>

      <section className='mb-16 rounded-3xl bg-slate-50 p-5 md:p-8'>
        <div className='flex items-center justify-between mb-5'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900'>Upcoming Events</h2>
          <a href='/contact' className='text-sm font-medium text-emerald-700 hover:text-emerald-600'>
            Register Participation
          </a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {upcomingEvents.map((event) => (
            <EventTile key={event.title} {...event} />
          ))}
        </div>
      </section>

      <section>
        <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>All News</h2>

        <div className='mb-6'>
          <FilterOption items={newsCategories} />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {allNewsData.map((item) => (
            <NewsCard key={item.headline} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default News;

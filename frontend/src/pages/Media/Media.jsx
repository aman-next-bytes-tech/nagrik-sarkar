import Banner from './Banner';
import MediaCard from './MediaCard';
import slider1 from '../../assets/slider1.jpg';
import healthCampaign from '../../assets/health-campaign.jpg';
import glanceBanner from '../../assets/glance-banner.jpg';
import campaignImg from '../../assets/campaign.jpg';
import campaign1 from '../../assets/campaign-1.avif';
import educationDay from '../../assets/education-day.avif';
import educationCampaign from '../../assets/education-campaign.avif';
import readingImg from '../../assets/boy-reading.avif';
import humanityDay from '../../assets/champaign-humanity-day.avif';

const featuredStories = [
  {
    img: healthCampaign,
    title: 'Mobile Health Camps Reach 27 Villages in One Month',
    category: 'Public Health',
    source: 'Field Team Bulletin',
    published: 'Updated 2 days ago',
  },
  {
    img: educationCampaign,
    title: 'Enrollment Drive Supports 900 New School Admissions',
    category: 'Child Education',
    source: 'Education Desk',
    published: 'Updated 4 days ago',
  },
  {
    img: humanityDay,
    title: 'Women Self-Help Groups Launch Micro-Enterprise Initiative',
    category: 'Women Empowerment',
    source: 'Community Report',
    published: 'Updated 1 week ago',
  },
  {
    img: campaign1,
    title: 'Emergency Relief Kits Distributed During Heatwave Response',
    category: 'Relief',
    source: 'Relief Operations Unit',
    published: 'Updated 1 week ago',
  },
  {
    img: readingImg,
    title: 'Reading Corners Improve Foundational Literacy Outcomes',
    category: 'Learning',
    source: 'Volunteer Network',
    published: 'Updated 9 days ago',
  },
  {
    img: slider1,
    title: 'Youth Leaders Complete Community Action Fellowship',
    category: 'Youth Development',
    source: 'Program Team',
    published: 'Updated 2 weeks ago',
  },
];

const mediaCatalog = [
  {
    img: campaignImg,
    title: 'Safe Communities: Substance Abuse Awareness',
    duration: '12 min',
    topic: 'Awareness Film',
    audience: 'Parents, Youth Clubs, Schools',
  },
  {
    img: educationDay,
    title: 'Bal Vikas Learning Sessions in Rural Schools',
    duration: '9 min',
    topic: 'Program Documentary',
    audience: 'Teachers, Volunteers, NGOs',
  },
  {
    img: healthCampaign,
    title: 'Senior Citizen Welfare and Health Access',
    duration: '10 min',
    topic: 'Health Outreach',
    audience: 'Caregivers, Panchayat Teams',
  },
  {
    img: glanceBanner,
    title: 'Nutrition and Maternal Care: Field Practices',
    duration: '15 min',
    topic: 'Training Video',
    audience: 'ASHA Workers, Field Staff',
  },
  {
    img: campaign1,
    title: 'Nasha Mukti Abhiyan: Community Action Toolkit',
    duration: '8 min',
    topic: 'Campaign Toolkit',
    audience: 'Local Leaders, Youth Mentors',
  },
  {
    img: slider1,
    title: 'Siksha Abhiyan: Community Learning Model',
    duration: '11 min',
    topic: 'Case Study',
    audience: 'Education Volunteers, NGOs',
  },
];

const StoryCard = ({ img, title, category, source, published }) => (
  <article className='rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow'>
    <div className='h-52 overflow-hidden'>
      <img src={img} alt={title} className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
    </div>

    <div className='p-4'>
      <span className='inline-block rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1'>
        {category}
      </span>
      <h3 className='mt-3 text-lg font-semibold text-slate-900'>{title}</h3>
      <div className='mt-3 flex items-center justify-between gap-3 text-xs text-slate-500'>
        <span>{source}</span>
        <span>{published}</span>
      </div>
    </div>
  </article>
);

const highlights = [
  { label: 'Focus Areas', value: '6 key sectors' },
  { label: 'Monthly Viewers', value: '22K+' },
  { label: 'Community Partners', value: '70+' },
];

const Media = () => {
  return (
    <main className='m-auto max-w-screen-xl px-4 md:px-6 pb-10'>
      <Banner />

      {/* <section className='mb-10 rounded-3xl bg-slate-50 p-5 md:p-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {highlights.map((item) => (
            <div key={item.label} className='rounded-xl bg-white border border-slate-200 p-4'>
              <p className='text-xl font-bold text-slate-900'>{item.value}</p>
              <p className='text-sm text-slate-600'>{item.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className='mb-14'>
        <div className='flex items-center justify-between mb-5'>
          <h2 className='font-bold text-2xl md:text-3xl text-slate-900'>Featured Stories</h2>
          <a href='/news' className='text-sm font-medium text-emerald-700 hover:text-emerald-600'>
            View all updates
          </a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {featuredStories.map((story) => (
            <StoryCard key={story.title} {...story} />
          ))}
        </div>
      </section>

      <section>
        <div className='flex items-center justify-between mb-5'>
          <h2 className='font-bold text-2xl md:text-3xl text-slate-900'>Awareness Video Catalog</h2>
          <a href='/contact' className='text-sm font-medium text-emerald-700 hover:text-emerald-600'>
            Submit a media request
          </a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {mediaCatalog.map((item) => (
            <MediaCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Media;

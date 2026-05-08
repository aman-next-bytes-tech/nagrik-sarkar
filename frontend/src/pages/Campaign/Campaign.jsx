import Banner from './Banner';
import Card from './Card';
import img1 from '../../assets/campaign-1.avif';
import img2 from '../../assets/champaign-charity.avif';
import img3 from '../../assets/day-of-charity.avif';
import img4 from '../../assets/champaign-humanity-day.avif';
import img5 from '../../assets/heath-day.avif';
import img6 from '../../assets/health-campaign.jpg';
import img7 from '../../assets/education-campaign.avif';
import img8 from '../../assets/boy-reading.avif';
import img9 from '../../assets/education-day.avif';

const campaignData = {
  'Community Care & Relief': [
    {
      img: img1,
      heading: 'Helping Hands Drive',
      description: 'Delivering food kits, hygiene support, and emergency essentials to vulnerable families.',
      focusArea: 'Relief',
      beneficiaries: 3200,
      goal: 600000,
      raised: 438000,
    },
    {
      img: img2,
      heading: 'Women Self-Help Support',
      description: 'Training and financial literacy sessions for women-led households and youth groups.',
      focusArea: 'Livelihood',
      beneficiaries: 1800,
      goal: 450000,
      raised: 274000,
    },
    {
      img: img3,
      heading: 'Winter Care Mission',
      description: 'Blanket distribution, shelter support, and safe-night outreach for at-risk communities.',
      focusArea: 'Shelter',
      beneficiaries: 2100,
      goal: 350000,
      raised: 289000,
    },
  ],
  'Health & Wellbeing': [
    {
      img: img4,
      heading: 'Village Health Awareness',
      description: 'Preventive care sessions and free checkups through health camps in underserved areas.',
      focusArea: 'Health',
      beneficiaries: 2750,
      goal: 520000,
      raised: 341000,
    },
    {
      img: img5,
      heading: 'Mental Wellness Outreach',
      description: 'Counseling support and adolescent wellness workshops in schools and community centers.',
      focusArea: 'Mental Health',
      beneficiaries: 1450,
      goal: 300000,
      raised: 186000,
    },
    {
      img: img6,
      heading: 'Maternal Care Program',
      description: 'Nutrition guidance and antenatal support for expecting mothers in rural communities.',
      focusArea: 'Maternal Care',
      beneficiaries: 980,
      goal: 400000,
      raised: 252000,
    },
  ],
  'Education & Child Development': [
    {
      img: img7,
      heading: 'Education for Every Child',
      description: 'School supplies, enrollment support, and learning continuity for underprivileged children.',
      focusArea: 'Education',
      beneficiaries: 3600,
      goal: 700000,
      raised: 513000,
    },
    {
      img: img8,
      heading: 'Read to Rise',
      description: 'Community reading corners and after-school mentoring to improve literacy outcomes.',
      focusArea: 'Literacy',
      beneficiaries: 2200,
      goal: 380000,
      raised: 238000,
    },
    {
      img: img9,
      heading: 'Digital Learning Access',
      description: 'Device access, digital classes, and student mentorship for first-generation learners.',
      focusArea: 'Digital Inclusion',
      beneficiaries: 1650,
      goal: 500000,
      raised: 322000,
    },
  ],
};

const CampaignSection = ({ heading, cardData }) => {
  return (
    <section className='mb-12'>
      <div className='flex items-center justify-between mb-5 px-1'>
        <h2 className='font-bold text-2xl md:text-3xl text-slate-900'>{heading}</h2>
        <span className='hidden md:inline text-sm text-slate-500'>
          {cardData.length} active programs
        </span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {cardData.map((campaign) => (
          <Card key={campaign.heading} {...campaign} />
        ))}
      </div>
    </section>
  );
};

const Campaign = () => {
  return (
    <main className='mx-auto max-w-screen-xl px-4 md:px-6 pb-10'>
      <Banner />

      <div className='rounded-3xl bg-slate-50 p-5 md:p-8'>
        <div className='mb-8'>
          <p className='text-sm md:text-base text-slate-600 max-w-3xl'>
            Explore active campaigns and contribute through donations, volunteering, or local partnerships.
            Your support helps us create long-term social impact where it is needed most.
          </p>
        </div>

        {Object.entries(campaignData).map(([title, items]) => (
          <CampaignSection key={title} heading={title} cardData={items} />
        ))}
      </div>
    </main>
  );
};

export default Campaign;

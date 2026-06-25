import Banner from './Banner';
import Card from './Card';

const campaignImages = {
  swoInitiative: '/assets/Campaign/intiative1.jpeg',
  swoSupport: '/assets/Campaign/Intiative2.jpeg',
  mahilaKalyan: '/assets/Campaign/Mahila_kalyan.jpeg',
};

const campaignData = {
  'Active Campaigns': [
    {
      img: campaignImages.swoInitiative,
      heading: 'NagrikSarkar SWO Initiative',
      description: 'Placing one dedicated Social Welfare Officer in every Gram Panchayat to support citizens with schemes, documents, applications, and grievance assistance.',
      focusArea: 'SWO Initiative',
      beneficiaries: 8400,
      goal: 900000,
      raised: 612000,
    },
    {
      img: campaignImages.swoSupport,
      heading: 'Har Nagrik Tak Seva',
      description: 'Building local digital support points for transparent access to government schemes, welfare benefits, awareness programs, and online services.',
      focusArea: 'Digital Access',
      beneficiaries: 6200,
      goal: 750000,
      raised: 481000,
    },
    {
      img: campaignImages.mahilaKalyan,
      heading: 'Mahila Kalyan Adhikari Initiative',
      description: 'Supporting women empowerment through awareness, education, health guidance, livelihood assistance, legal support, and community counseling.',
      focusArea: 'Women Welfare',
      beneficiaries: 4100,
      goal: 650000,
      raised: 397000,
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
        {/* <div className='mb-8'>
          <p className='text-sm md:text-base text-slate-600 max-w-3xl'>
            Explore active campaigns and contribute through donations, volunteering, or local partnerships.
            Your support helps us create long-term social impact where it is needed most.
          </p>
        </div> */}

        {Object.entries(campaignData).map(([title, items]) => (
          <CampaignSection key={title} heading={title} cardData={items} />
        ))}
      </div>
    </main>
  );
};

export default Campaign;

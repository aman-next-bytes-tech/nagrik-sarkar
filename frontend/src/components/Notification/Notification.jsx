import React from 'react';

const upcomingEvents = [
  {
    title: 'District Bal Suraksha Workshop',
    description: 'Training session for volunteers on child protection workflows and referral support.',
    date: '18 Apr 2026',
    location: 'District Welfare Office, New Delhi',
    status: 'Registration Open',
  },
  {
    title: 'Community Health & Nutrition Camp',
    description: 'Free health checkups, nutrition counseling, and maternal care awareness activities.',
    date: '23 Apr 2026',
    location: 'Ward Community Hall, East Delhi',
    status: 'Limited Seats',
  },
  {
    title: 'Women SHG Leadership Conclave',
    description: 'Capacity building for self-help groups on governance, finance, and local enterprise planning.',
    date: '30 Apr 2026',
    location: 'Social Welfare Training Center, Delhi',
    status: 'Registration Open',
  },
  {
    title: 'Senior Citizen Welfare Facilitation Camp',
    description: 'Guidance on pension access, legal aid desks, and routine wellness support.',
    date: '07 May 2026',
    location: 'Integrated Care Center, North Delhi',
    status: 'Upcoming',
  },
  {
    title: 'Nasha Mukti Youth Awareness Rally',
    description: 'Community youth rally and counseling referral orientation for substance abuse prevention.',
    date: '14 May 2026',
    location: 'Public Ground, Central Delhi',
    status: 'Upcoming',
  },
  {
    title: 'Digital Literacy for Rural Youth Bootcamp',
    description: 'Hands-on digital learning orientation for students and first-time internet users.',
    date: '20 May 2026',
    location: 'Community Learning Hub, Delhi NCR',
    status: 'Upcoming',
  },
];

const EventCard = ({ title, description, date, location, status }) => {
  const statusClass =
    status === 'Limited Seats'
      ? 'bg-amber-100 text-amber-700'
      : status === 'Registration Open'
        ? 'bg-emerald-100 text-emerald-700'
        : 'bg-slate-100 text-slate-700';

  return (
    <article
      className='relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-200'
    >
      <span className='absolute left-0 top-4 h-10 w-1 rounded-r bg-emerald-500' />

      <div className='pl-3'>
        <div className='flex items-center justify-between gap-2'>
          <p className='text-xs font-semibold text-slate-500'>{date}</p>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusClass}`}>{status}</span>
        </div>

        <h4 className='mt-2 text-sm font-semibold text-slate-900 leading-snug'>{title}</h4>
        <p className='mt-1 text-sm text-slate-600'>{description}</p>
        <p className='mt-2 text-xs text-slate-500'>Location: {location}</p>
      </div>
    </article>
  );
};

const Notification = () => {
  return (
    <section
      className='h-[420px] w-full bg-slate-50 rounded-2xl border border-slate-200 p-4 overflow-y-auto space-y-3 hide-scrollbar'
    >
      {upcomingEvents.map((event) => (
        <EventCard key={event.title} {...event} />
      ))}
    </section>
  );
};

export default Notification;

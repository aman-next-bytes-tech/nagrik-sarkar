import { Link } from 'react-router-dom';
import FilterOption from '../../components/Utils/FilterOption';
import Stars from '../../components/Utils/Stars';
import { courseData } from './courseData';

const filterOptions = [
  'All Programs',
  'Child Protection',
  'Public Health',
  'Women Empowerment',
  'Livelihood',
  'Digital Literacy',
  'Emergency Relief',
];

const learningTracks = [
  {
    title: 'Child Welfare & Education Support',
    summary: 'Learn enrollment support, safe learning spaces, and community tutoring practices.',
    courses: 12,
    learners: '4,200+',
    color: 'bg-emerald-100 text-emerald-800',
  },
  {
    title: 'Health, Nutrition & Community Outreach',
    summary: 'Build skills for health awareness drives, nutrition counseling, and camp coordination.',
    courses: 9,
    learners: '3,150+',
    color: 'bg-orange-100 text-orange-800',
  },
  {
    title: 'Women Empowerment & Livelihood',
    summary: 'Support SHGs, micro-entrepreneurship, and workplace readiness for rural women.',
    courses: 10,
    learners: '2,800+',
    color: 'bg-amber-100 text-amber-800',
  },
];

const reviewData = [
  {
    name: 'Sunita Verma',
    role: 'Community Volunteer, Lucknow',
    rating: 4.8,
    review:
      'The course gave me practical tools to run education support sessions in my neighborhood. The modules are simple and action-focused.',
  },
  {
    name: 'Arjun Kumar',
    role: 'Health Camp Coordinator, Patna',
    rating: 4.7,
    review:
      'I used the camp management lessons directly in our monthly outreach drive. Documentation and referral tracking became much easier.',
  },
  {
    name: 'Nazia Khan',
    role: 'SHG Mentor, Jaipur',
    rating: 4.9,
    review:
      'Women leadership modules are excellent. Our SHG members are now confident in planning, communication, and savings discipline.',
  },
];

const TrackCard = ({ title, summary, courses, learners, color }) => (
  <article className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow'>
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${color}`}>
      {courses} Courses
    </span>
    <h3 className='mt-3 text-xl font-semibold text-slate-900'>{title}</h3>
    <p className='mt-2 text-sm text-slate-600'>{summary}</p>
    <p className='mt-4 text-sm text-slate-700'>
      <span className='font-semibold text-slate-900'>{learners}</span> learners enrolled
    </p>
  </article>
);

const WelfareCourseCard = ({ id, title, description, category, duration, level, learners, rating, img }) => (
  <article className='rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300'>
    <div className='h-44 overflow-hidden'>
      <img src={img} alt={title} className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
    </div>

    <div className='p-5'>
      <div className='flex flex-wrap gap-2 mb-3'>
        <span className='rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1'>{category}</span>
        <span className='rounded-full bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1'>{level}</span>
      </div>

      <h3 className='text-lg font-semibold text-slate-900'>{title}</h3>
      <p className='mt-2 text-sm text-slate-600 min-h-[40px]'>{description}</p>

      <div className='mt-4 flex items-center justify-between gap-3'>
        <div>
          <p className='text-xs text-slate-500'>Course Duration</p>
          <p className='text-sm font-medium text-slate-800'>{duration}</p>
        </div>
        <div>
          <p className='text-xs text-slate-500'>Learners</p>
          <p className='text-sm font-medium text-slate-800'>{learners.toLocaleString()}</p>
        </div>
      </div>

      <div className='mt-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-sm font-semibold text-slate-900'>{rating}</span>
          <Stars rating={rating} />
        </div>

        <Link
          to={`/courses/${id}`}
          className='rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500 transition-colors'
        >
          Enroll Now
        </Link>
      </div>
    </div>
  </article>
);

const ReviewCard = ({ name, role, rating, review }) => (
  <article className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
    <div className='flex items-start justify-between gap-3'>
      <div>
        <h4 className='font-semibold text-slate-900'>{name}</h4>
        <p className='text-xs text-slate-500'>{role}</p>
      </div>
      <div className='flex items-center gap-1'>
        <span className='text-sm font-semibold text-slate-900'>{rating}</span>
        <Stars rating={rating} />
      </div>
    </div>
    <p className='mt-4 text-sm text-slate-600'>{review}</p>
  </article>
);

const Courses = () => {
  return (
    <main className='max-w-screen-xl mx-auto px-4 md:px-6 py-5 md:py-8'>
      <section className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-orange-50 to-amber-100 p-6 md:p-10 mb-10'>
        <div className='absolute -top-10 -right-8 h-36 w-36 rounded-full bg-emerald-200/60 blur-2xl' />
        <div className='absolute -bottom-14 -left-8 h-40 w-40 rounded-full bg-orange-200/60 blur-2xl' />

        <div className='relative'>
          <div>
            <span className='inline-block rounded-full bg-emerald-100 text-emerald-800 px-4 py-1 text-xs md:text-sm font-semibold'>
              Social Welfare Learning Hub
            </span>
            <h1 className='mt-4 text-3xl md:text-5xl font-bold leading-tight text-slate-900'>
              Courses That Build Community Impact Skills
            </h1>
            <p className='mt-4 text-slate-700 md:text-lg max-w-2xl'>
              Learn practical skills to support education, health outreach, women empowerment, and relief operations.
              Every course is designed for volunteers, field workers, and social welfare leaders.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <a
                href='/register-for-volunteer'
                className='rounded-lg bg-emerald-600 px-5 py-2.5 text-white font-medium hover:bg-emerald-500 transition-colors'
              >
                Start Learning
              </a>
              <a
                href='/campaign'
                className='rounded-lg border border-emerald-600 px-5 py-2.5 text-emerald-700 font-medium hover:bg-emerald-50 transition-colors'
              >
                Explore Campaigns
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className='mb-12'>
        <div className='flex items-center justify-between mb-5'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900'>Learning Tracks</h2>
          <span className='hidden md:inline text-sm text-slate-500'>Mission-oriented training paths</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {learningTracks.map((track) => (
            <TrackCard key={track.title} {...track} />
          ))}
        </div>
      </section>

      <section className='mb-12 rounded-3xl bg-slate-50 p-5 md:p-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>Explore Welfare Courses</h2>
        <p className='text-sm md:text-base text-slate-600 mb-5 max-w-3xl'>
          Choose a training program based on your area of interest and start contributing to real social outcomes.
        </p>

        <FilterOption items={filterOptions} />

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {courseData.map((course) => (
            <WelfareCourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

      <section>
        <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>Learner Stories</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {reviewData.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Courses;

import { Link, useParams } from 'react-router-dom';
import { getCourseById } from './courseData';
import Stars from '../../components/Utils/Stars';

const InfoBlock = ({ label, value }) => (
  <div className='rounded-xl border border-slate-200 bg-white p-4'>
    <p className='text-xs text-slate-500'>{label}</p>
    <p className='mt-1 text-sm md:text-base font-semibold text-slate-900'>{value}</p>
  </div>
);

const CourseDetails = () => {
  const { id } = useParams();
  const course = getCourseById(id);

  if (!course) {
    return (
      <main className='mx-auto max-w-screen-xl px-4 md:px-6 py-10'>
        <div className='rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8'>
          <h1 className='text-2xl font-bold text-slate-900'>Course not found</h1>
          <p className='mt-3 text-slate-600'>The requested course ID does not exist. Please return to the courses page.</p>
          <Link
            to='/courses'
            className='inline-block mt-5 rounded-lg bg-emerald-600 px-5 py-2.5 text-white font-medium hover:bg-emerald-500 transition-colors'
          >
            Back to Courses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className='mx-auto max-w-screen-xl px-4 md:px-6 py-6 md:py-8'>
      <section className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-orange-50 to-amber-100 p-6 md:p-10 mb-8'>
        <div className='absolute -top-10 -right-8 h-36 w-36 rounded-full bg-emerald-200/60 blur-2xl' />
        <div className='absolute -bottom-14 -left-8 h-40 w-40 rounded-full bg-orange-200/60 blur-2xl' />

        <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-7 items-center'>
          <div>
            <div className='flex flex-wrap gap-2'>
              <span className='rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1'>{course.category}</span>
              <span className='rounded-full bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1'>{course.level}</span>
            </div>

            <h1 className='mt-4 text-3xl md:text-5xl font-bold leading-tight text-slate-900'>{course.title}</h1>
            <p className='mt-4 text-slate-700 md:text-lg'>{course.longDescription}</p>

            <div className='mt-4 flex items-center gap-2'>
              <span className='text-sm font-semibold text-slate-900'>{course.rating}</span>
              <Stars rating={course.rating} />
              <span className='text-sm text-slate-600'>({course.learners.toLocaleString()} learners)</span>
            </div>

            <div className='mt-6 flex flex-wrap gap-3'>
              <a
                href='/register-for-volunteer'
                className='rounded-lg bg-emerald-600 px-5 py-2.5 text-white font-medium hover:bg-emerald-500 transition-colors'
              >
                Continue Enrollment
              </a>
              <Link
                to='/courses'
                className='rounded-lg border border-emerald-600 px-5 py-2.5 text-emerald-700 font-medium hover:bg-emerald-50 transition-colors'
              >
                Back to Course List
              </Link>
            </div>
          </div>

          <div className='rounded-2xl overflow-hidden border border-white/70 shadow-lg'>
            <img src={course.img} alt={course.title} className='w-full h-[260px] md:h-[420px] object-cover' />
          </div>
        </div>
      </section>

      <section className='mb-8 rounded-3xl bg-slate-50 p-5 md:p-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-5'>Course Information</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          <InfoBlock label='Duration' value={course.duration} />
          <InfoBlock label='Starts On' value={course.startsOn} />
          <InfoBlock label='Available Seats' value={course.seats} />
          <InfoBlock label='Language' value={course.language} />
          <InfoBlock label='Delivery Format' value={course.format} />
          <InfoBlock label='Certificate' value={course.certificate} />
        </div>
      </section>

      <section className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <article className='rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm'>
          <h3 className='text-xl font-semibold text-slate-900 mb-4'>What You Will Learn</h3>
          <ul className='space-y-2'>
            {course.outcomes.map((outcome) => (
              <li key={outcome} className='text-slate-700 text-sm md:text-base'>
                • {outcome}
              </li>
            ))}
          </ul>
        </article>

        <article className='rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm'>
          <h3 className='text-xl font-semibold text-slate-900 mb-4'>Module Breakdown</h3>
          <ul className='space-y-2'>
            {course.modules.map((module, index) => (
              <li key={module} className='text-slate-700 text-sm md:text-base'>
                {index + 1}. {module}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default CourseDetails;

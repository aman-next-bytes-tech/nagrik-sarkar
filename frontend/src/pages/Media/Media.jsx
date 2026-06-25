import Banner from './Banner';

const galleryImages = [
  '/assets/gallery/photo1.jpg',
  '/assets/gallery/photo2.jpg',
  '/assets/gallery/photo3.jpg',
  '/assets/gallery/photo4.jpg',
  '/assets/gallery/photo 5.jpg',
  '/assets/gallery/photo6.jpg',
  '/assets/gallery/photo7.jpg',
  '/assets/gallery/photo8.jpg',
  '/assets/gallery/photo9.webp',
];

const Media = () => {
  return (
    <main className='m-auto max-w-screen-xl px-4 pb-10 md:px-6'>
      <Banner />

      <section className='columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3'>
        {galleryImages.map((img, index) => (
          <figure
            key={img}
            className='break-inside-avoid overflow-hidden rounded-2xl bg-slate-100 shadow-sm'
          >
            <img
              src={img}
              alt={`NagrikSarkar gallery ${index + 1}`}
              loading='lazy'
              className='h-auto w-full object-cover transition duration-500 hover:scale-[1.02]'
            />
          </figure>
        ))}
      </section>
    </main>
  );
};

export default Media;

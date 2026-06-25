import Hero from "./Hero";
import Service from "../../components/Service/Service";
import Contact from "../../components/Contact/Contact";
import Notification from "../../components/Notification/Notification";
import { Link } from "react-router-dom";
import categoriesData from "../../data/categories.json";

const SchemesCategory = () => {
  return (
    <section id="Search-by-category" className="py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            role="heading" 
            className="text-2xl font-bold text-indigo-600 mb-3"
          >
            Search By Category
          </h2>
          <p className="text-slate-600 text-md">
            Find schemes tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categoriesData.categories.map((category) => (
            <Link
              key={category.name}
              to={{
                pathname : "/schemes/search",
                search : `?category=${encodeURIComponent(category.name)}`
              }}
            >
              <div 
                className="group flex flex-col items-center p-6 
                      bg-white rounded-lg shadow-md 
                        hover:shadow-xl transition-all duration-300 
                        hover:-translate-y-1 cursor-pointer 
                        hover:border-indigo-400
                        border border-slate-100
                        h-full
                        " 
              >
                <div className="mb-4">
                  <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <img 
                      src={category.icon}
                      alt={category.name} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <p className="text-center text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const AboutIntro = () => {
  return (
    <section className="mt-10 bg-slate-50 px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-screen-xl gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            About NagrikSarkar
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Empowering citizens through technology, transparency, and social welfare
          </h2>

          <div className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              NagrikSarkar is a people-first digital platform dedicated to empowering citizens through technology, transparency, and social welfare. Our mission is to bridge the gap between government services and common people by providing a simple, accessible, and reliable one-step digital solution for all public welfare needs.
            </p>
            <p className="mt-4">
              We believe that every citizen deserves equal access to information, opportunities, and government benefits. Through our website and mobile app, NagrikSarkar helps users discover, understand, and apply for various Central and State Government schemes related to education, healthcare, employment, pensions, agriculture, women empowerment, scholarships, digital services, and social welfare programs.
            </p>
          </div>

          {/* <Link
            to="/about"
            className="mt-5 inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Read more
          </Link> */}
        </div>

        <div className="border-t border-slate-200 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            SWO Initiative
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            NagrikSarkar SWO Initiative
          </h2>

          <div className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              NagrikSarkar aims to place one dedicated Social Welfare Officer (SWO) in every Gram Panchayat of Bihar to ensure easy and transparent access to government services for every citizen. The SWO will act as a local digital support partner, helping people with government schemes, online applications, documents, welfare benefits, awareness programs, and grievance assistance.
            </p>
            <p className="mt-4">
              This initiative is focused on empowering rural citizens by providing reliable doorstep guidance, digital inclusion, and social welfare support without dependence on middlemen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <>
      <Hero />
      <section className="bg-white py-14">
        <h3 className="flex items-center justify-center gap-1 font-bold text-xl text-slate-900 my-6">
          {/* Trending Highlights */}
          {/* <img className='w-8' src={star} alt="" /> */}
        </h3>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h3 className="mb-4 text-[1.4rem] font-[500] text-indigo-500">
              Welcome to Social Welfare
            </h3>
            <div className="md:rounded-lg">
              <p className="text-base font-[400] leading-8 text-slate-950">
                In 1948-49, this department was established as ‘Harijan Sahayak
                Vibhag’. To implement schemes related to the social sector,
                another department, ‘Social Welfare Department,’ was established
                in 1955. Later, in 1961, both departments merged to form the
                Harijan & Social Welfare Department, which was renamed to Social
                Welfare Department in 1991-92. The primary goal of this
                department is to provide better education to people belonging to
                weaker and backward sections of society and to support their
                social and economic upliftment. Grant is approved by the Social
                Welfare Minister from his discretional fund. Rs. 35 Lakhs have
                been fixed for this fund. Apart from the above, Disabled and Old
                Age Homes, operation of Rajkiya Bhikshuk Grih is being operated
                and financial assistance is provided to various volunteer
                organizations which are working for welfare of scheduled castes.
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-[1.4rem] font-[500] text-indigo-500">
              Upcoming Events
            </h3>
            <Notification />
            {/* <Events /> */}
          </div>
        </div>
      </section>
      <AboutIntro />
      <Service />
      {/* <TeamMember /> */}

      {/* <SchemesCategory /> */}

      {/* <div className="md:px-[5.5rem] px-4 py-8">
        <div className="text-center mb-8">
          <h4 className="text-indigo-600 font-semibold text-[1.4rem]">
            Latest News
          </h4>
          <p className="text-slate-500 text-sm mt-1">
            Official updates, press releases & announcements
          </p>
        </div>

        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4 
            max-h-[40rem]
            overflow-y-auto
            scrollbar-hide
          "
        >
          {newsData.slice(0, 10).map((e, index) => (
            <NewsCard
              key={index}
              content={e.content}
              img={e.img}
              sourceLogo={e.sourceLogo}
              source={e.source}
              time={e.time}
              headline={e.headline}
            />
          ))}
        </div>
      </div> */}

      <Contact />
    </>
  );
};

export default Home;

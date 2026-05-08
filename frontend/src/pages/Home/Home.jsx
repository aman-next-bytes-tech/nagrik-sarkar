import { useEffect, useState } from "react";
import api from "../../api.js";
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

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/user/");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <div>
        <h3 className="flex items-center justify-center gap-1 font-bold text-xl text-slate-900 my-6">
          {/* Trending Highlights */}
          {/* <img className='w-8' src={star} alt="" /> */}
        </h3>
        <div className="flex flex-col md:flex-row justify-between between m-auto md:px-[14rem] gap-10 h-fit">
          <div className="md:max-w-[50%]">
            <h3 className="font-[500] text-indigo-500 mb-2 text-[1.4rem] px-[1rem]">
              Welcome to Social Welfare
            </h3>
            <div className=" md:rounded-lg px-6">
              <p className="font-[400]">
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
          <div className="md:max-w-[50%]">
            <h3 className="font-[500] text-[1.4rem] px-[1rem] text-indigo-500 mb-2">
              Upcoming Events
            </h3>
            <Notification />
            {/* <Events /> */}
          </div>
        </div>
      </div>
      <Service />
      {/* <TeamMember /> */}

      <SchemesCategory />

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

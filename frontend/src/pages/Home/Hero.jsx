import slider from '../../assets/slider1.jpg';

const Hero = () => {
    return (
        <>
            {/* <div id='hero' className="mx-auto w-full  text-center bg-slate-950 relative">
                   <img src="/slider1.jpg" class = "m-0" alt="..." /> */}
                   <div id="hero" className="relative w-full mx-auto text-center overflow-hidden">
                      {/* Blurred background image */}
                      <img
                        src={slider}
                        alt="Hero Background"
                        className="w-full h-[25vh] md:h-[60vh] object-cover brightness-[70%] opacity-80"
                      />

                      {/* Centered content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                        <h1 className="text-3xl md:text-5xl text-indigo-100 font-bold mb-4 drop-shadow-lg">
                          Serving Humanity, <br className='md:hidden'/>
                          Shaping the Future
                        </h1>
                        <p className="hidden md:flex text-lg md:text-xl max-w-2xl drop-shadow-md">
                          Our mission is to bring positive change by supporting those in need, promoting equality, and fostering a culture of care and compassion.
                        </p>
                      </div>
                    </div>
                {/* <div className="dotted-background absolute w-full h-full top-0 left-0 z-0"></div> */}

                {/* <button className="px-4 py-2 rounded-md text-white text-center relative overflow-hidden">
                    <div className="z-10 flex mb-6 items-center justify-center">
                        <div className="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-black/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                            <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]">
                            </div>🎉
                            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
                            <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">Apply for a member!
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"><path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </div>
                    </div>
                </button> */}

                {/* <h1 className="z-1 relative text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Social <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">Welfare</span>
                </h1> */}



                {/* <div className="h-80 sm:h-96 xl:h-[30rem] 2xl:h-[36rem] overflow-hidden">
                          <img src="/slider1.jpg" class = "m-0" alt="..." /> */}
                  {/* <Carousel>
                    <img src="/slider1.jpg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                  </Carousel> */}
                {/* </div> */}

                {/* <p className="z-1 relative mt-6 text-lg leading-8 max-w-6xl mx-auto text-slate-300">
                    Disabilities, social security for the aged and destitute through the network of residential care homes and non-institutional services. Besides this the Department also provides avenues of Persons with Disabilities and creates awareness amongst general public regarding the welfare measures of the Department.

                    In order to achieve its objectives, the Department of social welfare has decentralized its progr
                    programme implementation to the level of its 10 districts units having jurisdictions co-terminus with the Revenue /Police districts of Bihar.
                </p> */}
            {/* </div> */}
        </>
    )
}

export default Hero
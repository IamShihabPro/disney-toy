import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';



const Banner = () => {
  return (
    <div className="bg-gray-100 -mt-28">
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, ]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <div className={`h-screen w-full `}>
            <div className='max-w-screen-lg mx-auto mt-28 sm:mt-6 md:mt-4 lg:mt-0 xl:mt-0 flex flex-col items-center justify-center h-full px-4 sm:flex-col md:flex-row lg:flex-row xl:flex-row text-white pt-4'>
                <div className='flex flex-col justify-center h-full w-full'>
                    <h2 className="text-3xl sm:text-4xl max-w-lg font-bold text-left text-red-500"> Scientist Toys </h2>

                    <p className='py-4 text-gray-900 max-w-lg text-left '>Toys can provide kids with opportunities to practice important social skills like sharing, communication, and cooperation. They can also help kids develop a better understanding of their own emotions and the emotions of others.</p>

                      {/* Button */}
                    <div className='flex gap-4'>
                            <button className={`group mb-16 text-white w-fit flex items-center rounded-md px-6 py-3 my-2 cursor-pointer duration-200  `}> 
                            <Link className='flex justify-center items-center' smooth duration={500} > Projects <span className='ml-2 group-hover:rotate-90 duration-200'><FaArrowRight></FaArrowRight> </span></Link>
                            
                            </button>
                    </div>

                </div>

                <div className='md:ml-4 -mt-10 sm:-mt-6 md:-mt-0 lg:-mt-0 xl:-mt-0 pl-2'>
                    <img src='https://img.freepik.com/free-photo/medium-shot-kid-learning-with-microscope_23-2148913633.jpg?w=1060&t=st=1701872894~exp=1701873494~hmac=954d333ba9d6ae46683d74521b8d68d0cb658827992fe103b58b330dc0d6ee5b' alt="shihab" className='rounded-2xl mx-auto  md:w-96 lg:w-full w-2/3 md:ml-16'/>
                </div>

            </div>
        </div>
          
        </SwiperSlide>


        <SwiperSlide>
          
        <div className={`h-screen w-full `}>
            <div className='max-w-screen-lg mx-auto mt-28 sm:mt-6 md:mt-4 lg:mt-0 xl:mt-0 flex flex-col items-center justify-center h-full px-4 sm:flex-col md:flex-row lg:flex-row xl:flex-row text-white pt-4'>
                <div className='flex flex-col justify-center h-full w-full'>
                <h2 className="text-3xl sm:text-4xl max-w-lg font-bold text-left text-red-500"> Math Toys </h2>

                    <p className={`py-4 text-gray-900 max-w-lg text-left `}>Toys can provide kids with opportunities to practice important social skills like sharing, communication, and cooperation. They can also help kids develop a better understanding of their own emotions and the emotions of others.</p>

                      {/* Button */}
                    <div className='flex gap-4'>
                            <button className={`group mb-16 text-white w-fit flex items-center rounded-md px-6 py-3 my-2 cursor-pointer duration-200  `}> 
                            <Link className='flex justify-center items-center' smooth duration={500} > Projects <span className='ml-2 group-hover:rotate-90 duration-200'><FaArrowRight></FaArrowRight> </span></Link>
                            
                            </button>
                    </div>

                </div>

                <div className='md:ml-4 -mt-10 sm:-mt-6 md:-mt-0 lg:-mt-0 xl:-mt-0 pl-2'>
                    <img src='https://img.freepik.com/free-photo/front-view-child-using-abacus-learn-how-count_23-2148524674.jpg?w=1060&t=st=1701873008~exp=1701873608~hmac=5faf6bd67fd5c9482cfbe24397e46de63a1f739f8fd765db70addefc5fc57394' alt="shihab" className='rounded-2xl mx-auto  md:w-96 lg:w-full w-2/3 md:ml-16'/>
                </div>

            </div>
        </div>
            
        </SwiperSlide>     


        <SwiperSlide> 
          
        <div className={`h-screen w-full `}>
            <div className='max-w-screen-lg mx-auto mt-28 sm:mt-6 md:mt-4 lg:mt-0 xl:mt-0 flex flex-col items-center justify-center h-full px-4 sm:flex-col md:flex-row lg:flex-row xl:flex-row text-white pt-4'>
                <div className='flex flex-col justify-center h-full w-full'>
                <h2 className="text-3xl sm:text-4xl max-w-lg font-bold text-left text-red-500"> Engineering Toys </h2>

                    <p className={`py-4 text-gray-900 max-w-lg text-left `}>Toys can provide kids with opportunities to practice important social skills like sharing, communication, and cooperation. They can also help kids develop a better understanding of their own emotions and the emotions of others.</p>

                      {/* Button */}
                    <div className='flex gap-4'>
                            <button className={`group mb-16 text-white w-fit flex items-center rounded-md px-6 py-3 my-2 cursor-pointer duration-200  `}> 
                            <Link className='flex justify-center items-center' smooth duration={500} > Projects <span className='ml-2 group-hover:rotate-90 duration-200'><FaArrowRight></FaArrowRight> </span></Link>
                            
                            </button>
                    </div>

                </div>

                <div className='md:ml-4 -mt-10 sm:-mt-6 md:-mt-0 lg:-mt-0 xl:-mt-0 pl-2'>
                    <img src='https://img.freepik.com/free-photo/adorable-girl-being-passionate-about-robotics_23-2149106252.jpg?w=1060&t=st=1701873123~exp=1701873723~hmac=b1370c34842093ace56bbc0d49378484deb66e7f886a786b15640f733a5432e3' alt="shihab" className='rounded-2xl mx-auto  md:w-96 lg:w-full w-2/3 md:ml-16'/>
                </div>

            </div>
        </div>
            
        </SwiperSlide>     
     
      </Swiper>
    </div>
  );
};

export default Banner;
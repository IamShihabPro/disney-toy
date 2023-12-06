import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { AuthContext } from "../../Provider/AuthProvider";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);
  const { loading } = useContext(AuthContext);

  //   if(loading){
  //     return <Loader></Loader>
  //   }

  // useEffect(()=>{
  //     fetch(`${import.meta.env.VITE_API_URL}/reviews`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setReviews(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching reviews:', error);
  //   });
  // },[reviews])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disney-toys-server.vercel.app/reviews"
        );
        const result = await response.json();
        setReviews(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(reviews);

  return (
    <div className="bg-red-200 ">
      <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center pt-4">
        Reviews
      </h3>
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviews.slice(0, 5).map((review, i) => (
          <SwiperSlide key={i}>
            <div className="h-96 w-full bg-red-200">
              <div className="max-w-screen-md mx-auto mt-10 flex flex-col items-center justify-center h-full px-4 text-white pt-4">
                <div className="w-20">
                  <img
                    src={review.photo}
                    alt="shihab"
                    className="rounded-full w-6 h-6"
                  />
                </div>

                <div className="mt-4 mb-2">
                  <Rating
                    style={{ maxWidth: 70 }}
                    value={review.review}
                    readOnly
                  />
                </div>

                <div className="flex flex-col items-center text-center h-full w-full mt-2">
                  <h2 className={`text-2xl sm:text-2xl max-w-md font-bold `}>
                    {review.name}{" "}
                  </h2>

                  <p className={` text-gray-900 max-w-lg`}> {review.message}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShowReview;

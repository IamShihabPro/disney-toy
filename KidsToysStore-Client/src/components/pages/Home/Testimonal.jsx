import React from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import Slider from "react-slick";
import Review from "./Review";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonal = () => {
  const toyReviews = [
    {
      reviewerPicture:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
      name: "Emily Johnson",
      review:
        "My son absolutely loves the scientist toy he got from KidsToysStore! It's educational and entertaining at the same time. The experiments are easy to follow, and it sparks his curiosity about science. Highly recommended!",
      rating: 4.0,
    },
    {
      reviewerPicture:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "David Rodriguez",
      review:
        "As a math enthusiast, I was thrilled to find the math toy collection at KidsToysStore. The puzzles and games are challenging yet fun. They have greatly improved my kids' problem-solving skills, and they now enjoy math even more!",
      rating: 4.8,
    },
    {
      reviewerPicture:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      name: "Sophie Adams",
      review:
        "KidsToysStore's engineer toy set is fantastic! My daughter spends hours constructing different structures and learning about engineering principles. The toy is durable, and it comes with a guidebook that explains the basics of engineering. It's a winner!",
      rating: 5.0,
    },
    {
      reviewerPicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Michael Carter",
      review:
        "I purchased a scientist toy from KidsToysStore for my nephew, and he couldn't be happier! The toy is interactive, engaging, and helps him develop a love for science. It's a great way to introduce complex scientific concepts in a simple and enjoyable manner.",
      rating: 4.3,
    },
    {
      reviewerPicture:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Olivia Thompson",
      review:
        "I highly recommend KidsToysStore's math toy collection. My kids used to struggle with math, but these toys have made learning numbers and calculations so much fun for them. They've shown remarkable improvement in their math skills, and they genuinely enjoy playing with these toys!",
      rating: 4.5,
    },
  ];

  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-5xl font-bold text-red-400">
        From Our Customer
      </h1>

      <br />
      <Slider {...settings} className="">
        {toyReviews.map((review) => (
          <Review review={review}></Review>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonal;

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import Reviews from "./Reviews";
import "swiper/css/navigation";

export default function Testimonials() {
  const testimonials = [
    <Reviews
      userName="surbhi sachdeva"
      userReview="Highly qualified and experienced team. They take care of eacha nsd every word told by their clients and make the social media look as beautiful and powerful as promised."
    />,
    <Reviews
      userName="ravi saxena"
      userReview="Really appreciate their work and professionalism…all the best to Devoir team and thanks for their work"
    />,
    <Reviews
      userName="Sagar Jaggal"
      userReview="Absolutely commendable work. Committed and disciplined towards the work. 100 % recommended"
    />,
    <Reviews
      userName="Jatin Gupta"
      userReview="Really great team, they helped us with really great work of creatives and content for our social media and websites. Would highly suggest them for someone looking for quality work at good price."
    />,
  ];

  return (
    <section className="default-padding bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h6 className="subtitle">reviews</h6>
          <h1 className="title text-white">
            What Our <span>Clients</span> Says
          </h1>
        </div>
        <Swiper
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {testimonials.map((review, idx) => (
            <SwiperSlide key={idx}>{review}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

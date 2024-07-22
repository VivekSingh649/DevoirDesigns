import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  const projectCards = [
    {
      projectName: "Oneiro",
      firstImage:
        "https://i0.wp.com/portfolio.devoirdesigns.com/wp-content/uploads/2024/05/onerio.jpg?fit=1440%2C1440&ssl=1",
      secondImage:
        "https://i0.wp.com/portfolio.devoirdesigns.com/wp-content/uploads/2024/05/dd-post_oneiro-1-1.png?resize=1536%2C1536&ssl=1",
      link: "https://oneiroeducation.com/",
    },
    {
      projectName: "Oneiro",
      firstImage:
        "https://i0.wp.com/portfolio.devoirdesigns.com/wp-content/uploads/2024/05/dd-post_oneiro-1-1.png?resize=1536%2C1536&ssl=1",
      secondImage:
        "https://i0.wp.com/portfolio.devoirdesigns.com/wp-content/uploads/2024/05/onerio.jpg?fit=1440%2C1440&ssl=1",
      link: "https://oneiroeducation.com/",
    },
    {
      projectName: "Oneiro",
      firstImage:
        "https://i0.wp.com/portfolio.devoirdesigns.com/wp-content/uploads/2024/05/dd-post_oneiro-1-1.png?resize=1536%2C1536&ssl=1",
      secondImage:
        "https://i0.wp.com/portfolio.devoirdesigns.com/wp-content/uploads/2024/05/onerio.jpg?fit=1440%2C1440&ssl=1",
      link: "https://oneiroeducation.com/",
    },
    {
      projectName: "Oneiro",
      firstImage:
        "https://i0.wp.com/portfolio.devoirdesigns.com/wp-content/uploads/2024/05/dd-post_oneiro-1-1.png?resize=1536%2C1536&ssl=1",
      secondImage:
        "https://i0.wp.com/portfolio.devoirdesigns.com/wp-content/uploads/2024/05/onerio.jpg?fit=1440%2C1440&ssl=1",
      link: "https://oneiroeducation.com/",
    },
    {
      projectName: "Oneiro",
      firstImage:
        "https://i0.wp.com/portfolio.devoirdesigns.com/wp-content/uploads/2024/05/dd-post_oneiro-1-1.png?resize=1536%2C1536&ssl=1",
      secondImage:
        "https://i0.wp.com/portfolio.devoirdesigns.com/wp-content/uploads/2024/05/onerio.jpg?fit=1440%2C1440&ssl=1",
      link: "https://oneiroeducation.com/",
    },
  ];

  return (
    <>
      <section className="default-padding bg-gray-50" id="Service">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h6 className="subtitle">Portfolio</h6>
            <h1 className="title">
              Our <span>Latest</span> Projects
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
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
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {projectCards.map((project, idx) => (
                <SwiperSlide key={idx}>
                  <ProjectCard
                    projectName={project.projectName}
                    fitsImage={project.firstImage}
                    secondImage={project.secondImage}
                    link={project.link}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;

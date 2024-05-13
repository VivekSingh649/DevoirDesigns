import React from "react";

function HeroSection() {
  return (
    <section className="hero_section">
      <img
        className="banner-animate-img animate-img-1 top_image_bounce"
        src="assets/elements_dots.svg"
        alt="img"
      ></img>
      <img
        className="banner-animate-img animate-img-2 left_image_bounce"
        src="assets/elements_circel.svg"
        alt="img"
      ></img>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-6/12 flex items-center justify-center">
            <div className="banner-inner pr-0 lg:pr-12 xl:pr-20">
              <h6
                className="subtitle"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                Enliven Your Brand
              </h6>
              <h1
                className="title"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Making The <span>Digital</span> World Work For You
              </h1>
              <p
                className="content"
                data-aos="fade-right"
                data-aos-delay="250"
                data-aos-duration="1500"
              >
                Devoir Designs is your one-stop destination for comprehensive
                marketing and creative solutions that drive results.
              </p>
              <a
                className="main_btn add_outline"
                href="#Contact-us"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                Discover More
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="w-full lg:w-5/12 md:w-6/12 mt-5 lg:mt-0 banner_thumb"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            <div
              className="banner-animate-img banner-animate-img-1 top_image_bounce"
              alt="img"
            >
              <img src="assets/trophy.png" alt="" />
              <h4>
                Award Wining <br />
                Agency
              </h4>
            </div>
            <div
              className="banner-animate-img banner-animate-img-2 left_image_bounce"
              alt="img"
            >
              <span>5+</span> <h4>Work Experience</h4>
            </div>
            <img
              className="main-img"
              src="assets/Babita-Kaushik.jpeg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

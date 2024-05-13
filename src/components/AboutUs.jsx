import React from "react";

function AboutUs() {
  return (
    <section className="default-padding" id="About">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-1/2 px-2">
            <div
              className="about_image"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <img src="assets/about_icon.svg" alt="" />
              <img
                src="assets/code.svg"
                className="animate-img top_image_bounce"
                alt=""
              />
              <img
                src="assets/seo.svg"
                className="animate-img left_image_bounce"
                alt=""
              />
              <img
                src="assets/cloud.svg"
                className="animate-img top_image_bounce"
                alt=""
              />
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 px-2 self-center mt-6 md:mt-0"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            <h6 className="subtitle">About us</h6>
            <h1 className="title capitalize">
              Our <span>designs</span> <br />
              breathe life into your brand.
            </h1>
            <h4 className="text-xl font-semibold border-b-2 border-b-slate-200 pb-8">
              Team Devoir Designs assures
            </h4>
            <ul className="custom_list">
              <li>Timely Delivery</li>
              <li>Unwavering Creativity</li>
              <li>Synergistic Collaboration</li>
              <li>Engaging Content Strategy</li>
              <li>Data-Driven Insights</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

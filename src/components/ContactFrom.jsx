import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactFrom() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "239f16c3-66b8-4d0a-87ec-17041c56b689");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      navigate("/thank-you");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setTimeout(() => {
      setResult("");
    }, 500);
  };

  return (
    <section className="default-padding bg-gray-50" id="Contact-us">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between">
            <div
              className="w-full md:w-6/12 lg:w-7/12 self-center"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="900"
            >
              <div className="mb-10">
                <h6 className="subtitle">Contact us</h6>
                <h1 className="title">
                  Contact Us to <br /> <span>Discuss the</span> Event
                </h1>
              </div>
              <div className="contact_icon">
                <div className="icon">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="content">
                  <h2>Phone</h2>
                  <p>
                    <a href="tel:+919810416275">9810416275</a>
                  </p>
                </div>
              </div>
              <div className="contact_icon">
                <div className="icon">
                  <i className="bi bi-envelope-at-fill"></i>
                </div>
                <div className="content">
                  <h2>Mail</h2>
                  <p>
                    <a href="mailto:info@devoirdesigns.com">
                      info@devoirdesigns.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact_icon">
                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="content">
                  <h2>Address</h2>
                  <p>
                    3, First Floor Nilgiri Shopping Complex, <br />
                    Alaknanda New Delhi - 110019
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-6/12 lg:w-4/12 md:mt-0 mt-6"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="9i00"
            >
              <div className="contact_form bg-primary-50 rounded-3xl">
                <h1>Write A Message</h1>
                <form action="" onSubmit={onSubmit}>
                  <input
                    type="hidden"
                    name="from_name"
                    value="Devoir Designs"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Submission from Devoir Designs landing page"
                  />
                  <div className="input_wrapper">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div className="input_wrapper">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="input_wrapper">
                    <input
                      type="number"
                      name="number"
                      placeholder="Enter Your Number"
                      required
                    />
                  </div>
                  <div className="input_wrapper">
                    <textarea
                      cols="30"
                      rows="5"
                      name="message"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                  <div className="input_wrapper">
                    <button
                      type="submit"
                      className="main_btn aos-init aos-animate"
                      data-aos="fade-right"
                      data-aos-delay="300"
                      data-aos-duration="1500"
                    >
                      Submit<i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                  <p>{result}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ContactFrom;

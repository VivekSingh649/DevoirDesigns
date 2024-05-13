import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <>
      <section className="default-padding">
        <div className="container mx-auto">
          <div className="card_wrapper">
            <div className="icon">
              <img src="assets/email.svg" alt="" />
            </div>
            <div className="content">
              <h2>Thanks for submitting!</h2>
              <p>Your Message has been sent!</p>
            </div>
            <Link
              className="main_btn add_outline aos-init aos-animate"
              to="/"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1500"
            >
              Go Home
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThankYou;

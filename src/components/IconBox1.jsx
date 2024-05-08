import React from "react";

function IconBox1(props) {
  return (
    <div className="service-card" data-aos="fade-up">
      <div className="icon_wrapper">
        <div className="icon">
          <img src={props.svg} alt={props.title} />
        </div>
        <div className="icon_tittle">
          <h3>{props.title}</h3>
        </div>
      </div>
      <div className="icon_content">
        <p>{props.description}</p>
      </div>
      <a href="#Contact-us" className="service_btn">
        <i className="bi bi-chevron-right"></i> Know more
      </a>
    </div>
  );
}

export default IconBox1;

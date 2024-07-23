import React from "react";

function ProjectCard({ fitsImage, secondImage, link, projectName }) {
  return (
    <div className="portfolio_card shadow-lg">
      <a href={link} target="_blank" className="portfolio_image">
        <img src={fitsImage} alt="" />
        <img src={secondImage} alt="" />
      </a>
      <div className="portfolio_title py-3 px-4">
        <h2 className="text-xl">{projectName}</h2>
        <i className="text-2xl bi bi-arrow-up-right-circle-fill"></i>
      </div>
    </div>
  );
}

export default ProjectCard;

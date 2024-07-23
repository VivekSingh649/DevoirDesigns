import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(0);

  const menus = [
    {
      link: "/",
      menuText: "Home",
    },
    {
      link: "#About",
      menuText: "About",
    },
    {
      link: "#Service",
      menuText: "Services",
    },
    {
      link: "#Contact-us",
      menuText: "Contact us",
    },
    {
      link: "https://portfolio.devoirdesigns.com/",
      menuText: "Portfolio",
    },
  ];

  const handleClick = (idx) => {
    setIsActive(idx);
  };

  return (
    <nav className="container mx-auto navbar_container">
      <div className="navbar-area flex flex-wrap items-center justify-between bg-white">
        <div className="logo ml-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="assets/logo/1.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Devoir Designs
            </span>
          </a>
        </div>
        <Link
          type="button"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-800 md:hidden"
          to="tel:+919810416275"
        >
          <i className="bi bi-telephone text-white"></i>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="main_menu font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menus.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className={`${
                    isActive === index ? "active" : ""
                  } block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                  onClick={() => handleClick(index)}
                >
                  {item.menuText}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-right-part nav-right-part-desktop align-self-center hidden md:block">
          <a className="navbar-phone" href="tel:9810416275">
            <span className="icon">
              <i className="bi bi-telephone"></i>
            </span>
            <span>Need help?</span>
            <h5>+91 9810416275</h5>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

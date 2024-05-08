import React, { useEffect, useState } from "react";

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
  ];

  const handleClick = (idx) => {
    setIsActive(idx);
    console.log(isActive);
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
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
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

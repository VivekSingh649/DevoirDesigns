import React from "react";

function Footer() {
  return (
    <footer className="text-white body-font bg-black">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img
            src="assets/logo/1.png"
            className="h-8"
            alt="Flowbite Logo"
            style={{ filter: "invert(1)" }}
          />
          <span className="ml-3 text-xl">Devoir Designs</span>
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 mb-0">
          © 2024 DevoirDesigns. All rights reserved.
        </p>
        <span className="inline-flex gap-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="text-white text-xl"
            href="https://www.instagram.com/devoirdesigns/"
            target="_blank"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            className="text-white text-xl"
            href="https://www.facebook.com/devoirdesignsofficial/"
            target="_blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className="text-white text-xl"
            href="https://www.linkedin.com/company/devoir-designs/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>{" "}
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

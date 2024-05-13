import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Clients from "../components/Clients";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ContactFrom from "../components/ContactFrom";

function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Clients />
      <AboutUs />
      <Testimonials />
      <ContactFrom />
    </>
  );
}

export default Home;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Clients from './components/Clients';
import Services from './components/Services';
import ContactFrom from './components/ContactFrom';
import Footer from './components/Footer';

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 120,
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <Header />
            <HeroSection />
            <AboutUs />
            <Clients />
            <Services />
            <ContactFrom />
            <Footer />
        </>
    );
};

export default App;

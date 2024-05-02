import React from 'react'

function HeroSection() {
    return (
        <section className="hero_section">
            <img class="banner-animate-img animate-img-1 top_image_bounce" src="assets/2.png" alt="img"></img>
            <img class="banner-animate-img animate-img-2 left_image_bounce" src="assets/5.svg" alt="img"></img>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-6/12 flex items-center justify-center">
                        <div className="banner-inner pr-0 lg:pr-12 xl:pr-20">
                            <h6 className="subtitle" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">DESIGNING FOR THE FUTURE</h6>
                            <h1 className="title" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500">Making The <span>Digital</span> World Work For You</h1>
                            <p className="content" data-aos="fade-right" data-aos-delay="250" data-aos-duration="1500">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business Are Necessary.</p>
                            <a className="main_btn add_outline" href="#" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500">
                                Discover More
                                <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12 md:w-6/12 mt-5 lg:mt-0 banner_thumb" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
                        <img className="banner-animate-img banner-animate-img-1 top_image_bounce" src="assets/2.png" alt="img" />
                        <img className="banner-animate-img banner-animate-img-2 left_image_bounce" src="assets/4.svg" alt="img" />
                        <img className="main-img" src="assets/1.png" alt="img" />

                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection

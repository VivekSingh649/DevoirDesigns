import React from 'react'

function AboutUs() {
    return (
        <section className="default-padding" id='About'>
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full lg:w-1/2 px-2">
                        <div className="about_image" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
                            <img src="assets/1 (1).png" alt="" />
                            <img src="assets/5.svg" className='animate-img top_image_bounce' alt="" />
                            <img src="assets/3.png" className='animate-img left_image_bounce' alt="" />
                            <img src="assets/2 (2).png" className='animate-img top_image_bounce' alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-2 self-center" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
                        <h6 className="subtitle">About us</h6>
                        <h1 className="title" >It Is A Critical Component Of <span>Modern</span> Businesses</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Loreaim Ipsum has been the industry's standard dummy
                        </p>
                        <div className="about_icon_wrapper">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="about_icon">
                                        <div className="icon"><i className="bi bi-motherboard"></i></div>
                                        <h3>Our Ambition</h3>
                                        <p>Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi designer is our country.</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-4">
                                    <div className="about_icon">
                                        <div className="icon"><i className="bi bi-motherboard"></i></div>
                                        <h3>Our Ambition</h3>
                                        <p>Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi designer is our country.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs

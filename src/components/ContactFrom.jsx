import React, { useState } from 'react'

function ContactFrom() {

    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormData);
    }

    const handleKeyPress = () => {

    }

    return (
        <section className="default-padding">
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container mx-auto">
                    <div className="flex flex-wrap justify-center md:justify-between">
                        <div className="w-full md:w-6/12 lg:w-7/12 self-center" data-aos="fade-right" data-aos-delay="100" data-aos-duration="900">
                            <div className="mb-10">
                                <h6 className="subtitle">Contact us</h6>
                                <h1 className="title" >Contact Us to <br /> <span>Discuss the</span> Event</h1>
                            </div>
                            <div className="contact_icon">
                                <div className="icon">
                                    <i class="bi bi-geo-alt-fill"></i>
                                </div>
                                <div className="content">
                                    <h2>Address</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                                </div>
                            </div>
                            <div className="contact_icon">
                                <div className="icon">
                                    <i class="bi bi-geo-alt-fill"></i>
                                </div>
                                <div className="content">
                                    <h2>Address</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                                </div>
                            </div>
                            <div className="contact_icon">
                                <div className="icon">
                                    <i class="bi bi-geo-alt-fill"></i>
                                </div>
                                <div className="content">
                                    <h2>Address</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12" data-aos="fade-left" data-aos-delay="100" data-aos-duration="9i00">
                            <div className="contact_form bg-primary-50 rounded-3xl">
                                <h1>Write A Message</h1>
                                <form action="" onSubmit={handleSubmit} method='GET' onKeyUp={handleKeyPress}>
                                    <div className="input_wrapper">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder='Enter Your Name'
                                            value={FormData.name}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input_wrapper">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder='Enter Your Email'
                                            value={FormData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="input_wrapper">
                                        <input
                                            type="number"
                                            name="number"
                                            placeholder='Enter Your Number'
                                            value={FormData.number}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input_wrapper">
                                        <textarea cols="30" rows="5"
                                            name="message"
                                            placeholder='Write your message'
                                            value={FormData.message}
                                            onChange={handleChange}>
                                        </textarea>
                                    </div>
                                    <div className="input_wrapper">
                                        <button type='submit' class="main_btn aos-init aos-animate" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500">Submit<i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ContactFrom

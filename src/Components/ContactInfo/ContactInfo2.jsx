
const ContactInfo2 = () => {
    return (
        <div>
            <section className="contact-info-section fix section-padding">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="contact-info-items text-center active">
                                <div className="icon">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </div>
                                <div className="content">
                                    <h3>Our Address</h3>
                                    <p>
                                        A-307, Empire Business Hub,
                                        <br /> Science City Rd, Sola,
                                        Ahmedabad
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="contact-info-items text-center">
                                <div className="icon">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>
                                <div className="content">
                                    <h3 className="text-lowercase"><a href="mailto:arvind@codersh.com">arvind@codersh.com</a></h3>
                                    <p>
                                        Email us anytime for anykind <br />
                                        ofquety.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="contact-info-items text-center">
                                <div className="icon">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>
                                <div className="content">
                                    <h3>Hot:<a href="tel:+9664617700">+966-461-7700</a></h3>
                                    <p>
                                        Call us any kind suppor,we <br />
                                        will wait for it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section-33 fix section-padding pt-0">
                <div className="container">
                    <div className="contact-wrapper-2">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="map-items">
                                    <div className="googpemap">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6541294331378!2d72.5106517760089!3d23.073138514437932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81f21c5da795%3A0x8c70d1b4999d0473!2sCodersh%20Web%20Services!5e0!3m2!1sen!2sin!4v1748325608685!5m2!1sen!2sin" loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-content">
                                    <h2>Ready to Get Started?</h2>
                                    <p>
                                        Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in turpis. Quisque rhoncus, eros in auctor ultrices,
                                    </p>
                                    <form id="contact-form" className="contact-form-items">
                                        <div className="row g-4">
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="form-clt">
                                                    <span>Your name*</span>
                                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                <div className="form-clt">
                                                    <span>Your Email*</span>
                                                    <input type="text" name="email" id="email" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                                <div className="form-clt">
                                                    <span>Write Message*</span>
                                                    <textarea name="message" id="message" placeholder="Write Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                                                <button type="submit" className="theme-btn">
                                                    Send Message <i className="bi bi-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactInfo2;
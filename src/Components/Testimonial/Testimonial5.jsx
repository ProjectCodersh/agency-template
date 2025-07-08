const Testimonial5 = () => {
    const testimonialContent = [

        {
            img: '/assets/img/testimonial/02.png',
            subtitle: "Seattle, Washington",
            title: "Milano Joe",
            content: "Made an amazing website for our org. We have him our vision and everything came out even better than imagined. Use him for all website needs you will be pleased! Use him for all website needs you will be pleased!"
        },
        {
            img: '/assets/img/testimonial/01.png',
            subtitle: 'San Antonio, Texas',
            title: 'Danial Mark',
            content: "His work went beyond what I was expecting and I would love to continue working with him. His work went beyond what I was expecting and I would love to continue working with him continue working with him."
        },
        {
            img: '/assets/img/testimonial/02.png',
            subtitle: "Detroit, Michigan",
            title: "Phillip Hunt",
            content: "Working with Shah was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn't be happier the results!"
        },
        {
            img: '/assets/img/testimonial/01.png',
            subtitle: 'Portland, Oregon',
            title: 'Amber Page',
            content: "The Biggest thing was he got the design from the beginning mockup and didn't waste any time and everything ran on schedule with making lots of minor didn't waste any time and everything ran on schedule with making adjustments to a level of amazing quality!"
        },
        // Add more testimonials as needed
    ];

    return (
        <section className="testimonial-section fix section-padding">
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="section-title-area">
                        <div className="section-title">
                            <div className="sub-title bg-color-2 wow fadeInUp" style={{ backgroundColor: "#f6f3fe" }}>
                                <span>TESTIMONIALS</span>
                            </div>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Loved by niche digital agencies across the US!
                            </h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                            We are very proud of the service we provide <br /> and stand by every product we carry. Read our testimonials from our happy customers.
                        </p>
                    </div>

                    <div className="row g-4">
                        {testimonialContent.map((item, i) => (
                            <div key={i} className="col-xl-6 col-lg-6 col-md-12">
                                <div className="testimonial-box-items">
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/icon.png" alt="testimonial icon" />
                                    </div>
                                    <div className="testimonial-img">
                                        <img src={item.img} alt="img" />
                                        <div className="shape-img">
                                            <img src="/assets/img/testimonial/shape.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content" style={{ maxWidth: "475px" }}>
                                        <div className="client-info">
                                            <div className="star">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <h5>{item.title}</h5>
                                            <span>{item.subtitle}</span>
                                        </div>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial5;

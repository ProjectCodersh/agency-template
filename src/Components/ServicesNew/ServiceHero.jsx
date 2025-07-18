import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import overlayImage from "/assets/img/hero/bg-shape.png";
import bgImage from "/assets/img/hero/hero-bg-2.png";

const ServiceHero = ({ data }) => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    if (!data) return null;

    const brandContent = [
        { img: '/assets/img/brand/kucrimson-brand.png' },
        { img: '/assets/img/brand/datadepot-brand.png' },
        { img: '/assets/img/brand/informadist-brand.png' },
        { img: '/assets/img/brand/squreit-brand.png' },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 4 } },
            { breakpoint: 1199, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 2 } },
            { breakpoint: 575, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="hero-section hero-2" data-background={bgImage}>
            <div
                className="glowup-bg w-100 h-100 position-absolute"
                data-background={overlayImage}
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            ></div>

            <div className="container px-3 position-relative z-1">
                <div className="row g-4 align-items-center text-center">
                    <div className="col-12">
                        <h1 className="wow img-custom-anim-left mb-2" data-wow-delay="0.2s">
                            {parse(data.title)}
                        </h1>
                        <p
                            className="wow fadeInUp img-custom-anim-right hero-section-peragraph mb-2 text-white"
                            data-wow-delay=".3s"
                        >
                            {data.content}

                        </p>
                    </div>

                    <div className="col-12">
                        <div className="client-items d-flex justify-content-center align-items-center flex-wrap gap-3">
                            <div className="clutchreview">
                                {data.badge?.link ? (
                                    <a
                                        href={data.badge.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={data.badge.image}
                                            alt={data.badge.alt}
                                            style={{ height: data.badge.height }}
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={data.badge.image}
                                        alt={data.badge.alt}
                                        style={{ height: data.badge.height }}
                                    />
                                )}
                            </div>

                            <div className="client-img d-flex flex-column flex-sm-row align-items-center gap-0 gap-md-2">
                                <img
                                    src={data.review?.image}
                                    alt="Happy client"
                                    className="img-fluid"
                                />
                                <div className="star-icon text-center text-sm-start">
                                    <div className="star text-warning">
                                        {Array.from({ length: data.review?.ratingStars }, (_, i) => (
                                            <i key={i} className="fa-solid fa-star"></i>
                                        ))}
                                        {Array.from({ length: data.review?.totalStars - data.review?.ratingStars }, (_, i) => (
                                            <i key={`empty-${i}`} className="fa-regular fa-star"></i>
                                        ))}
                                    </div>
                                    <span className="d-block mt-0 mt-md-1 text-white">{data.review?.text}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-12 wow fadeInUp d-flex justify-content-center align-items-center flex-wrap gap-3"
                        data-wow-delay=".4s"
                    >
                        {data.buttons?.map((btn, idx) => (
                            <div key={idx} className="main-button">
                                {btn.external ? (
                                    <a
                                        href={btn.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span
                                            className={idx === 1 ? "hero-theme-btn-second" : "hero-theme-btn"}
                                            style={{ minWidth: "209px" }}
                                        >
                                            {btn.label}
                                        </span>
                                    </a>
                                ) : (
                                    <Link to={btn.link}>
                                        <span
                                            className={idx === 1 ? "hero-theme-btn-second" : "hero-theme-btn"}
                                            style={{ minWidth: "209px" }}
                                        >
                                            {btn.label}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="brand-wrapper-2">
                <h4 className="brand-title">1k + Brands Trust Us</h4>
                <div className="swiper brand-slider">
                    <div className="swiper-wrapper cs_slider_gap_30">
                        <Slider {...sliderSettings}>
                            {brandContent.map((item, i) => (
                                <div key={i} className="swiper-slide">
                                    <div className="brand-img center">
                                        <img src={item.img} alt="Brand Logo" className="brand-trust-img" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;

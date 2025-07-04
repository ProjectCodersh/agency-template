import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Slider from "react-slick";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
const HeroBanner1 = () => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);


    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,                // Very high speed // speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 0,           // No delay between transitions  // autoplaySpeed: 4000,
        cssEase: 'linear',          //css effect
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const brandContent = [
        { img: '/assets/img/brand/kucrimson-brand.png' },
        { img: '/assets/img/brand/datadepot-brand.png' },
        { img: '/assets/img/brand/informadist-brand.png' },
        { img: '/assets/img/brand/squreit-brand.png' },
    ];

    const heroContent = {
        bg: "/assets/img/hero/hero-bg-2.png",
        bg2: "/assets/img/hero/bg-shape.png",
        subtitle: "go for advertising",
        // title: "Grow profits, save time, and scale your\u00A0agency",
        title: "Grow profits, save time, <br/> and scale your agency",
        content:
            "White Label WordPress Development Partner for Digital Agencies at Fixed Cost.",
        content2:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.",
        img: "/assets/img/hero/hero-text.png",
        reviewlogo: "/assets/img/hero/logo.png",
        reviewimg: "/assets/img/hero/client-demo.png",
        review: "450+ reviews",
    };

    return (
        <section className="hero-section hero-2" data-background={heroContent.bg}>
            <div className="glowup-bg w-100 h-100" data-background={heroContent.bg2}
                style={{
                    position: "absolute",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}></div>
            <div className="container" style={{ zIndex: "9" }}>
                <div className="row g-4 align-items-center text-center hero-rows">
                    <div className="col-12">
                        <h1
                            className="wow img-custom-anim-left mb-3"
                            data-wow-duration="1.5s"
                            data-wow-delay="0.2s"
                        >
                            {parse(heroContent.title)}
                        </h1>
                        <p
                            className="wow fadeInUp img-custom-anim-right hero-section-peragraph"
                            data-wow-delay=".3s"
                        >
                            {heroContent.content}
                        </p>
                    </div>

                    <div
                        className="col-12 wow fadeInUp img-custom-anim-top client-items d-flex justify-content-center align-items-center flex-wrap"
                        data-wow-delay=".7s"
                    >
                        <div className="clutchreview" >
                            <img src="/assets/img/hero/clutchreview-2.png" alt="clutchreview-img" style={{ height: "42px" }} />
                        </div>

                        <div className="client-img d-flex flex-column flex-sm-row align-items-center gap-2">
                            <img
                                src={heroContent.reviewimg}
                                alt="Happy client"
                                className="img-fluid"
                            />
                            <div className="star-icon text-center text-sm-start">
                                <div className="star text-warning">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                                <span className="d-block mt-1">{heroContent.review}</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-1 gap-sm-1 gap-md-4 gap-lg-5 gap-xl-5
4">
                        <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                            <Link to="/#"> <span className="hero-theme-btn"> GET A FREE QUOTE </span></Link>
                        </div>
                        <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                            <Link to="/service-new/website-redesign"> <span className="hero-theme-btn-second"> EXPLORE MORE WR </span></Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="brand-wrapper-2">
                <h4 className="brand-title">1k + Brands Trust Us</h4>
                <div className="swiper brand-slider">
                    <div className="swiper-wrapper cs_slider_gap_30">
                        <Slider {...settings}>
                            {brandContent.map((item, i) => (
                                <div key={i} className="swiper-slide">
                                    <div className="brand-img center ">
                                        <img src={item.img} alt="img" className="brand-trust-img" />
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

export default HeroBanner1;

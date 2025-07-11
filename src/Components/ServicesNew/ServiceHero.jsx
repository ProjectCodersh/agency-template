import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

import overlayImage from "/assets/img/hero/bg-shape.png";
import bgImage from "/assets/img/hero/hero-bg-2.png";

const ServiceHero = ({ data }) => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    if (!data) return null;

    return (
        <section className="hero-section hero-4 mb-0" style={{ background: "#6a47ed" }} data-background={bgImage}>
            <div className="glowup-bg w-100 h-100" data-background={overlayImage}
                style={{
                    position: "absolute",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}></div>

            <div className="container px-3" style={{ zIndex: "9" }}>
                <div className="row g-4 align-items-center text-center hero-rows">
                    <div className="col-12">
                        <h1 className="wow img-custom-anim-left mb-3" data-wow-duration="1.5s" data-wow-delay="0.2s">
                            {data.title}
                        </h1>
                        <p className="wow fadeInUp img-custom-anim-right hero-section-peragraph" data-wow-delay=".3s">
                            {data.content}
                        </p>
                    </div>

                    <div className="col-12 wow fadeInUp img-custom-anim-top client-items d-flex justify-content-center align-items-center flex-wrap" data-wow-delay=".7s">
                        <div className="clutchreview">
                            <img src={data.badge?.image} alt={data.badge?.alt} style={{ height: data.badge?.height }} />
                        </div>

                        <div className="client-img d-flex flex-column flex-sm-row align-items-center gap-2">
                            <img src={data.review?.image} alt="Happy client" className="img-fluid" />
                            <div className="star-icon text-center text-sm-start">
                                <div className="star text-warning">
                                    {Array.from({ length: data.review?.ratingStars }, (_, i) => (
                                        <i key={i} className="fa-solid fa-star"></i>
                                    ))}
                                    {Array.from({ length: data.review?.totalStars - data.review?.ratingStars }, (_, i) => (
                                        <i key={`empty-${i}`} className="fa-regular fa-star"></i>
                                    ))}
                                </div>
                                <span className="d-block mt-1">{data.review?.text}</span>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-sm-1 gap-md-3 gap-lg-4">
                        {data.buttons?.map((btn, idx) => (
                            <div key={idx} className="main-button wow fadeInUp" data-wow-delay=".3s">
                                <Link to={btn.link}>
                                    <span className={idx === 1 ? "hero-theme-btn-second" : "hero-theme-btn"}>
                                        {btn.label}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;

import { memo } from 'react';
import Slider from 'react-slick';

const brandLogos = [
  '/assets/img/brand/kucrimson-brand.png',
  '/assets/img/brand/datadepot-brand.png',
  '/assets/img/brand/informadist-brand.png',
  '/assets/img/brand/squreit-brand.png',
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
  cssEase: 'linear',
  responsive: [
    { breakpoint: 1399, settings: { slidesToShow: 4 } },
    { breakpoint: 1199, settings: { slidesToShow: 3 } },
    { breakpoint: 575, settings: { slidesToShow: 2 } },
  ],
};

const Brand1 = () => {
  return (
    <section className="brand-section-22">
      <div className="container">
        <div className="brand-wrapper-2">
          <h4 className="brand-title">1k+ Brands Trust Us</h4>
          <div className="swiper brand-slider">
            <Slider {...sliderSettings}>
              {brandLogos.map((src, index) => (
                <div key={index} className="swiper-slide">
                  <div className="brand-img center brand-img-slider">
                    <img
                      src={src}
                      alt={`Trusted brand ${index + 1}`}
                      className="brand-trust-img"
                      loading="lazy"
                    />
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

export default memo(Brand1);

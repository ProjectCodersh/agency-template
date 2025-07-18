import Slider from "react-slick";

const Brand1 = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,                // Very high speed
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 0,           // No delay between transitions
    cssEase: 'linear',
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
          slidesToShow: 2,
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

  return (
    <div className="brand-section-22">
      <div className="container">
        <div className="brand-wrapper-2">
          <h4 className="brand-title">1k + Brands Trust Us</h4>
          <div className="swiper brand-slider">
            <div className="swiper-wrapper">
              <Slider {...settings}>
                {brandContent.map((item, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="brand-img center brand-img-slider">
                      <img src={item.img} alt="img" className="brand-trust-img" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand1;
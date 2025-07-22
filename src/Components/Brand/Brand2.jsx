import Slider from 'react-slick';

const Brand2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Very high speed // speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 0, // No delay between transitions  // autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brandContent = [
    { img: '/assets/img/brand/reinventu-logo2.png' },
    { img: '/assets/img/brand/500-logo.png' },
    { img: '/assets/img/brand/chenchef-logo.png' },
    { img: '/assets/img/brand/christianbookbag-logo.png' },
    { img: '/assets/img/brand/anadian-logo.png' },
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
                    <div className="brand-img center d-flex justify-content-center">
                      <img src={item.img} alt="img" />
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

export default Brand2;

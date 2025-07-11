// import Blog1 from "../Components/Blog/Blog1";
// import CaseStudy1 from "../Components/CaseStudy/CaseStudy1";
// import Marquee1 from "../Components/Marquee/Marquee1";
// import Pricing1 from "../Components/Pricing/Pricing1";
// import SuccessStories from "../Components/SuccessStories/SuccessStories";
// import Testimonial1 from "../Components/Testimonial/Testimonial1";
// import WhyChoose1 from "../Components/WhyChoose/WhyChoose1";
// import About1 from "../Components/About/About1";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import Counter4 from "../Components/WhatWeDo/WhatWeDo3";
import Faq1 from "../Components/Faq/Faq1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import WhatWeDo from "../Components/WhatWeDo/WhatWeDo";
import Tools1 from "../Components/Extra/HomePage/Tools1";
import Brandsection1 from "../Components/Extra/HomePage/Brandsection1";
import BrandSection2 from "../Components/Extra/HomePage/BrandSection2";
import Brandsection3 from "../Components/Extra/HomePage/BrandSection3";
import Brand1 from "../Components/Brand/Brand1";
import VideoTestimonialSlick from "../Components/Testimonial/VideoTestimonial";
import About4 from "../Components/About/About4";


const Home = () => {
    return (
        <div>
            <HeroBanner1></HeroBanner1>
            <Brand1></Brand1>
            <WhatWeDo></WhatWeDo>
            {/* <About4 addclass="about-section-2 fix section-padding"></About4> */}
            {/* <About1></About1> */}
            <Counter4></Counter4>
            <Tools1></Tools1>
            <Brandsection1></Brandsection1>
            <BrandSection2></BrandSection2>
            <Brandsection3></Brandsection3>
            {/* <div className="section-padding3"></div> */}
            <Faq1 addclass="faq-section section-padding2 pb-0"></Faq1>
            {/* <Testimonial1></Testimonial1> */}
            <VideoTestimonialSlick></VideoTestimonialSlick>
            <ContactInfo1></ContactInfo1>
        </div>
    );
};

export default Home;
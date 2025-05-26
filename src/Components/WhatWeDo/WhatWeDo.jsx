import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const WhatWeDo = () => {

    const heading = {
        subtitle: "WHY services US",
        title: 'What’s Included in <br> Our WordPress SEO Services',
        content: 'Pellentesque ut vehicula sapien <br> dictumst. Maecenas ante.',
    }

    const whyContent = [
        { img: '/assets/img/service/financial-audit-icon.png', title: 'SEO Audit', content: 'Get a detailed SEO audit that covers critical issues affecting your clients’ sites. By fixing these issues, we enhance site performance, leading to higher rankings and increased traffic.' },
        { img: '/assets/img/service/location-icon.png', title: 'Local SEO', content: 'Increase your clients’ local visibility and attract more customers. Our local SEO services ensure your clients stand out in local searches.' },
        { img: '/assets/img/service/tools-icon.png', title: 'On-Site & Technical SEO', content: 'Our WordPress SEO experts optimize your clients’ content and site structure, internal linking, ensuring top crawlability and rankings. This enhances user experience and boosts search engine performance.' },
    ];

    return (
        <section className="service-section fix section-padding">
            <div className="left-shape float-bob-y">
                {/* <img src="/assets/img/service/left-shape.png" alt="img" /> */}
            </div>
            <div className="right-shape">
                {/* <img src="/assets/img/service/right-shape.png" alt="img" /> */}
            </div>
            <div className="bg-shape">
                <img src="/assets/img/service/bg-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>{heading.subtitle}</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {parse(heading.title)}
                        </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                        {parse(heading.content)}
                    </p>
                </div>
                <div className="row">
                    {whyContent.map((item, i) => (
                        <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <img src={item.img} alt="img" className="icon-img" />
                                </div>
                                <div className="content">
                                    <h4><Link to="/service/service-details">{item.title}</Link></h4>
                                    <p>{item.content}</p>
                                    <Link to="/service/service-details" className="link-btn">Read More <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
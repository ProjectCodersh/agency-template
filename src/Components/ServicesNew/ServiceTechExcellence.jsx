import { useEffect, useRef, useState } from "react";
import parser from "html-react-parser";
import axios from "axios";

const ServiceFaq = () => {
    const [faqData, setFaqData] = useState({ faq: {}, faqlist: [] });
    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);

    const fetchingData = async () => {
        try {
            const response = await axios.get("/assets/data/WebsiteRedesign.json");
            const serviceData = response.data?.ServicePageData;
            const faqSection = serviceData.find(section => section.faqSection);

            if (faqSection && faqSection.faqSection) {
                setFaqData(faqSection.faqSection);
            }
        } catch (error) {
            console.error("Error fetching FAQ section:", error);
        }
    };

    useEffect(() => {
        fetchingData();
    }, []);

    useEffect(() => {
        if (firstItemOpen && faqData.faqlist.length > 0) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
        }
    }, [faqData, firstItemOpen]);

    // Don't render if there's no data
    if (!faqData.faqlist || faqData.faqlist.length === 0) return null;

    return (
        <section className="fix section-padding">
            <div className="faq-shape"></div>
            <div className="container">

                <div className="section-title-area text-center justify-content-center mb-4 mb-sm-4 mb-md-0 mb-lg-4">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>{faqData.faq?.faqtitle}</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: faqData.faq?.faqsubtitle }} />
                    </div>
                </div>
                <div className="faq-wrapper newservice-faq-wrapper">
                    <div className="row g-4 justify-content-between">


                        <div className="col-12 col-lg-12 col-xl-8 offset-xl-2">
                            <div className="faq-accordion-items">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                        {faqData.faqlist.map((item, index) => {
                                            const isOpen = index === openItemIndex;
                                            const collapseId = `faq${index}`;

                                            return (
                                                <div
                                                    key={index}
                                                    className={`accordion-item mb-3 ${isOpen ? "active" : ""}`}
                                                >
                                                    <h5
                                                        onClick={() => setOpenItemIndex(isOpen ? -1 : index)}
                                                        className="accordion-header"
                                                    >
                                                        <button
                                                            className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#${collapseId}`}
                                                            aria-expanded={isOpen}
                                                            aria-controls={collapseId}
                                                        >
                                                            {item.title}
                                                        </button>
                                                    </h5>
                                                    <div
                                                        ref={accordionContentRef}
                                                        id={collapseId}
                                                        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                                        data-bs-parent="#accordion"
                                                    >
                                                        <div className="accordion-body">
                                                            {parser(item.content)}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFaq;

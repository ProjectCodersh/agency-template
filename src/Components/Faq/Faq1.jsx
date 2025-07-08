import { useEffect, useRef, useState } from "react";

const Faq1 = ({ addclass }) => {

  const faqContent = [
    { title: 'How do I request work and get updates on work in progress?', content: 'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus' },
    { title: 'Can I really have unlimited tasks?', content: 'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus' },
    { title: 'How long dose it task to get one website done?', content: 'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus' },
    { title: 'What type of tasks can I assign?', content: 'Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio.Mauris et mollis quam. Nullam fringilla erat id ante commodo maximus' },
  ];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const contentRefs = useRef([]);

  const setContentRef = (el, index) => {
    contentRefs.current[index] = el;
  };


  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <section className={`${addclass} section-padding`} style={{ backgroundColor: '#f6f3fe' }}>

      {/* <div className="faq-overlay">
        <img src="/assets/img/faq-overlay.png" alt="img" />
      </div>
      <div className="faq-shape">
        <img src="/assets/img/faq-shape.png" alt="img" />
      </div> */}
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4 justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="faq-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>FAQs</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Let’s make something awesome together
                  </h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  We are not just another agency - we are your digital growth partners. With
                  years of industry experience and a passion for innovation, our team is
                  dedicated to delivering measurable results propel your business forward.
                </p>
                {/* <ul className="faq-list">
                  <li className="wow fadeInUp" data-wow-delay=".3s">
                    <i className="bi bi-check-circle"></i>
                    Top quality service
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <i className="bi bi-check-circle"></i>
                    Intermodal Shipping
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="faq-accordion-items">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    {faqContent.map((item, index) => {
                      const isOpen = index === openItemIndex;

                      return (
                        <div
                          key={index}
                          className={`accordion-item mb-3 ${isOpen ? "active" : ""
                            }`}
                          data-wow-delay=".3s"
                        >
                          <h5
                            onClick={() => handleItemClick(index)}
                            className="accordion-header"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                            >
                              {item.title}
                            </button>
                          </h5>
                          <div
                            ref={(el) => setContentRef(el, index)}
                            className="accordion-collapse"
                            style={{
                              overflow: "hidden",
                              transition: "max-height 0.3s ease",
                              maxHeight: isOpen
                                ? `${contentRefs.current[index]?.scrollHeight}px`
                                : "0px",
                            }}
                          >
                            <div className="accordion-body">{item.content}</div>
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

export default Faq1;
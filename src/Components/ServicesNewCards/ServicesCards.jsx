import { useEffect, useState, memo } from "react";
import axios from "axios";
import servicecardimg from "/assets/img/servicescards/service-card.png";

const ServicesCards = memo(function ServicesCards() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const response = await axios.get("/assets/data/ServiceCardData.json");
                const servicesData = response.data.ServicePage.find(
                    (section) => section.OurServicesCard
                );
                setServices(servicesData.OurServicesCard);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };
        fetchingData();
    }, []);

    return (
        <section className="container-fluid py-5 bg-light-services" aria-label="Services">
            <div className="container">
                <div className="row justify-content-center">
                    {services.map((service, index) => (
                        <div className="col-12 col-md-6 col-xl-4 my-5 d-flex" key={index}>
                            <article className="svc-card h-100 position-relative" tabIndex={0} aria-labelledby={`svc-title-${index}`}>
                                {/* Header Tag */}
                                <div className="svc-header-tag">{service.headertag}</div>

                                {/* PageSpeed Badge */}
                                <div className="page-speed-badge">
                                    <span className="icon">⚡</span>
                                    PageSpeed <span className="score">99</span>
                                </div>

                                {/* Card Image */}
                                <div className="svc-img">
                                    <img src={servicecardimg} alt={service.servicetitle} loading="lazy" />
                                </div>

                                {/* Content */}
                                <div className="svc-content">
                                    <h3 className="svc-title" id={`svc-title-${index}`}>
                                        {service.servicetitle}
                                    </h3>
                                    <p className="svc-description">{service.servicedescription}</p>
                                    <button className="svc-btn" onClick={() => window.location.href = service.link} aria-label={service.servicebtn}>
                                        {service.servicebtn}
                                    </button>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default ServicesCards;

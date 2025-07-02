import { useEffect, useState } from "react";
import axios from "axios";
import servicecardimg from "/assets/img/servicescards/service-card.png"
function ServicesCards() {
    const [services, setServices] = useState([]);

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

    useEffect(() => {
        fetchingData();
    }, []);

    return (
        <div
            className="container-fluid py-5"
            style={{ backgroundColor: "#f8f9ff" }}
        >
            <div className="container">
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-4 mt-5" key={index}>
                            <div className="svc-card h-100">
                                <div className="svc-header-tag">{service.headertag}</div>

                                <div className="svc-img">
                                    <img src={servicecardimg} alt={service.servicetitle} />
                                </div>

                                <div className="svc-content">
                                    <h3 className="svc-title d-flex justify-content-start">
                                        {service.servicetitle}
                                    </h3>
                                    <p className="svc-description">{service.servicedescription}</p>
                                    <button className="svc-btn">
                                        <a href={service.link}>{service.servicebtn}</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesCards;

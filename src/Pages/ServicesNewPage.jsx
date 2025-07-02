import { useEffect, useState } from "react";
import axios from "axios";

import NewServiceHero from "../Components/ServicesNew/ServiceHero";
import ServiceProcess from "../Components/ServicesNew/ServiceProcess";
import ServiceWhyChoose from "../Components/ServicesNew/ServiceWhyChoose";
import ServiceKeyFeatures from "../Components/ServicesNew/ServiceKeyFetures";
import ServiceRealworldApp from "../Components/ServicesNew/ServiceRealWorld";
import ServiceTechExcellence from "../Components/ServicesNew/ServiceTechExcellence";
import VideoTestimonialSlickSecond from "../Components/Testimonial/VideoTestimonialTwo";

function ServicesNewPage({ serviceDataFile = "WebsiteRedesign.json" }) {
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/assets/data/${serviceDataFile}`);
                setServiceData(response.data.ServicePageData);
            } catch (error) {
                console.error("Error fetching service data:", error);
            }
        };

        fetchData();
    }, [serviceDataFile]);

    if (!serviceData) return <div>Loading...</div>;

    // Destructure each section from serviceData array
    const heroSection = serviceData[0]?.heroSection;
    const processSection = serviceData[1]?.processSection;
    const whyChoose = serviceData[2]?.whyChoose;
    const keyFeatures = serviceData[3]?.KeyFeatures;
    const realworldApp = serviceData[4]?.realworldApp;
    const faqSection = serviceData[5]?.faqSection;

    return (
        <>
            <NewServiceHero data={heroSection} />
            <ServiceProcess data={processSection} />
            <ServiceWhyChoose data={whyChoose} />
            <ServiceKeyFeatures data={keyFeatures} />
            <ServiceRealworldApp data={realworldApp} />
            <ServiceTechExcellence data={faqSection} />
            <VideoTestimonialSlickSecond />
        </>
    );
}

export default ServicesNewPage;

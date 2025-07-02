// import React from 'react'
import NewServiceHero from "../Components/ServicesNew/ServiceHero";
import ServiceProcess from "../Components/ServicesNew/ServiceProcess";
import ServiceWhyChoose from "../Components/ServicesNew/ServiceWhyChoose";
import ServiceKeyFeatures from "../Components/ServicesNew/ServiceKeyFetures";
import ServiceRealworldApp from "../Components/ServicesNew/ServiceRealWorld";
import ServiceTechExcellence from "../Components/ServicesNew/ServiceTechExcellence";
import VideoTestimonialSlickSecond from "../Components/Testimonial/VideoTestimonialTwo";

function ServicesNewPage() {
    return (
        <>
            <NewServiceHero />
            <ServiceProcess />
            <ServiceWhyChoose />
            <ServiceKeyFeatures />
            <ServiceRealworldApp />
            <ServiceTechExcellence />
            <VideoTestimonialSlickSecond></VideoTestimonialSlickSecond>

        </>
    )
}

export default ServicesNewPage


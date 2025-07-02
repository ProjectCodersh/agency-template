// import React from 'react'
import ServicesCards from '../Components/ServicesNewCards/ServicesCards'
import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonialTwo'
import BreadCumb from '../Components/Common/BreadCumb'
import "../assets/servicecards.css"

function ServicesNewCardsPage() {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Services"
            ></BreadCumb>
            <ServicesCards></ServicesCards>
            <VideoTestimonialSlickSecond></VideoTestimonialSlickSecond>
        </div>
    )
}

export default ServicesNewCardsPage
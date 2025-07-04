import { lazy, Suspense } from 'react';
import ServicesCards from '../Components/ServicesNewCards/ServicesCards';
import BreadCumb from '../Components/Common/BreadCumb';
import "../assets/servicecards.css";

const VideoTestimonialSlickSecond = lazy(() => import('../Components/Testimonial/VideoTestimonialTwo'));

function ServicesNewCardsPage() {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Services"
            />
            <ServicesCards />
            <Suspense fallback={<div>Loading testimonials...</div>}>
                <VideoTestimonialSlickSecond />
            </Suspense>
        </div>
    );
}

export default ServicesNewCardsPage;
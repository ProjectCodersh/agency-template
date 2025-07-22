// src/pages/ServicePage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { serviceSlugMap } from '../Components/ServicesNew/ServicesIndex';
import React from 'react';
import Brand1 from '../Components/Brand/Brand1';

const ServiceHero = React.lazy(() => import('../Components/ServicesNew/ServiceHero'));
const ServiceProcess = React.lazy(() => import('../Components/ServicesNew/ServiceProcess'));
const ServiceWhyChoose = React.lazy(() => import('../Components/ServicesNew/ServiceWhyChoose'));
const ServiceKeyFeatures = React.lazy(() => import('../Components/ServicesNew/ServiceKeyFetures'));
const ServiceRealWorld = React.lazy(() => import('../Components/ServicesNew/ServiceRealWorld'));
const ServiceTechExcellence = React.lazy(
  () => import('../Components/ServicesNew/ServiceTechExcellence')
);
const VideoTestimonialSlickSecond = React.lazy(
  () => import('../Components/Testimonial/VideoTestimonialTwo')
);

export default function ServicePage() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const file = serviceSlugMap[slug];
    if (!file) return;

    fetch(`/assets/data/services/${file}`)
      .then((res) => res.json())
      .then((json) => setData(json.ServicePageData))
      .catch((err) => console.error('Failed to load service data', err));
  }, [slug]);

  if (!data) return <p>Loading...</p>;

  return (
    <Suspense fallback={<div>Loading sections...</div>}>
      <ServiceHero data={data[0]?.heroSection} />
      <Brand1></Brand1>
      <ServiceProcess data={data[1]?.processSection} />
      <ServiceWhyChoose data={data[2]?.whyChoose} />
      <ServiceKeyFeatures data={data.find((d) => d.KeyFeatures)?.KeyFeatures} />
      <ServiceRealWorld data={data.find((d) => d.realworldApp)?.realworldApp} />
      <ServiceTechExcellence data={data.find((d) => d.faqSection)?.faqSection} />
      <VideoTestimonialSlickSecond></VideoTestimonialSlickSecond>
    </Suspense>
  );
}

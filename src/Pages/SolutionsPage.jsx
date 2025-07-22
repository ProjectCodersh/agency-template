import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BreadCumb from '../Components/Common/BreadCumb';
import VideoTestimonialSlickSecond from '../Components/Testimonial/VideoTestimonialTwo';

// Lazy load sections
const SolutionSlider = React.lazy(() => import('../Components/Solutions/SolutionSlider'));
const SolutionWhychoose = React.lazy(() => import('../Components/Solutions/SolutionWhy'));
const SolutionFeatures = React.lazy(() => import('../Components/Solutions/SolutionKeyFeatures'));

function SolutionsPage() {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchSolutionData = async () => {
      try {
        const response = await axios.get(`/assets/data/solutions/${slug}.json`);
        setPageData(response.data || null);
      } catch (error) {
        console.error('Error fetching solution data:', error);
        setPageData(null); // show fallback
      }
    };

    fetchSolutionData();
  }, [slug]);

  const sliderMemo = useMemo(() => pageData?.slider || [], [pageData]);
  const whyChooseMemo = useMemo(() => pageData?.whyChoose || null, [pageData]);
  const featuresMemo = useMemo(() => pageData?.features || null, [pageData]);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title={pageData.title} />

      <React.Suspense fallback={<div>Loading Data </div>}>
        <SolutionSlider data={sliderMemo} />
        {whyChooseMemo && <SolutionWhychoose data={whyChooseMemo} />}
        {featuresMemo && <SolutionFeatures data={featuresMemo} />}
        <VideoTestimonialSlickSecond />
      </React.Suspense>
    </>
  );
}

export default SolutionsPage;

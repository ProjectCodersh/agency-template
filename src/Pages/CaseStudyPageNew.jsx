import React, { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCumb from "../Components/Common/BreadCumb";
import VideoTestimonialSlickSecond from "../Components/Testimonial/VideoTestimonialTwo";

// Lazy load detail component
const CaseStudyDetails = lazy(() =>
  import("../Components/CaseStudyDetailsNew/CaseStudyDetailsNew")
);

function CaseStudyDetailsPage() {
  const { slug } = useParams();
  const [caseStudyData, setCaseStudyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    fetch(`/assets/data/${slug}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not found");
        }
        return res.json();
      })
      .then((json) => {
        setCaseStudyData(json);
      })
      .catch((err) => {
        console.error(err);
        setCaseStudyData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div style={{ padding: "2rem" }}>Loading...</div>;

  if (!caseStudyData)
    return <div style={{ padding: "2rem" }}>Case study not found.</div>;

  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb.jpg"
        // Title={caseStudyData.title}
        Title='Case Study Details'
      />
      <Suspense fallback={<div>Loading details...</div>}>
        <CaseStudyDetails data={caseStudyData} />
      </Suspense>
      <VideoTestimonialSlickSecond />
    </>
  );
}

export default React.memo(CaseStudyDetailsPage);

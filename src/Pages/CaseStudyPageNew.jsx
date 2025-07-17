import React, { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCumb from "../Components/Common/BreadCumb";
import VideoTestimonialSlickSecond from "../Components/Testimonial/VideoTestimonialTwo";
import { caseStudiesList } from "../Components/CaseStudyDetailsNew/CaseStudiesList";

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

    fetch(`/assets/data/casestudy/${slug}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not found");
        }
        return res.json();
      })
      .then((json) => {
        setCaseStudyData({ ...json, slug });
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

  const caseStudyFromList = caseStudiesList.find(
    (item) => item.slug === slug
  );
  const dynamicTitle =
    caseStudyFromList?.title || caseStudyData?.title || "Case Study Details";

  return (
    <>
      <BreadCumb
        bgimg={caseStudyFromList?.BgImg || "/assets/img/breadcrumb.jpg"}
        Title={dynamicTitle}
        hasOverlay={true}
        customTrail={[
          { label: "Case Study", link: "/case-study" },
          { label: dynamicTitle },
        ]}
      />
      <Suspense fallback={<div>Loading details...</div>}>
        <CaseStudyDetails data={caseStudyData} list={caseStudiesList} />
        <VideoTestimonialSlickSecond />
      </Suspense>
    </>
  );
}

export default React.memo(CaseStudyDetailsPage);

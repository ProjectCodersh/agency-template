import React, { useEffect, useState } from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import Overview from "../Components/CaseStudies/Overview";
import WhyChoose from "../Components/CaseStudies/Whychoose";
import axios from "axios";
import Features from "../Components/CaseStudies/Fetures";
import VideoTestimonialSlickSecond from "../Components/Testimonial/VideoTestimonialTwo";

const Casestudies = () => {
  const [caseStudyData, setCaseStudyData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("/assets/data/CaseStudies.json");
      setCaseStudyData(res.data);
    } catch (error) {
      console.error("Failed to load case study data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!caseStudyData) return <div>Loading...</div>;

  return (
    <>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Case Studies" />
      <Overview data={caseStudyData.overview} />
      <WhyChoose data={caseStudyData.whyChoose} />
      <Features data={caseStudyData.fetures} />
      <VideoTestimonialSlickSecond />
    </>
  );
};

export default Casestudies;

import React, { useEffect, useState } from "react";
import axios from "axios";
import SolutionSlider from "../Components/Solutions/SolutionSlider";
import BreadCumb from "../Components/Common/BreadCumb";

const Solutions = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get("/assets/data/solutions.json");
        setSliderData(response.data.sliderData);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSliderData();
  }, []);

  return (
    <>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="CreditRepair" />
      <SolutionSlider data={sliderData} />
    </>
  );
};

export default Solutions;

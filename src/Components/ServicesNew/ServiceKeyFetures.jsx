import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";
import axios from "axios";

const ServiceKeyFeatures = () => {
    const [chooseHeading, setChooseHeading] = useState({});
    const [chooseContent, setChooseContent] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("/assets/data/NewservicesData.json");
            const serviceData = response.data.ServicePageData;

            const keyFeaturesSection = serviceData.find(section => section.KeyFeatures);

            if (keyFeaturesSection?.KeyFeatures) {
                setChooseHeading(keyFeaturesSection.KeyFeatures.chooseHeading);
                setChooseContent(keyFeaturesSection.KeyFeatures.chooseContent);
            }
        } catch (error) {
            console.error("Error fetching key features:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="feature-secton section-padding fix">
            <div className="bg-shape">
                {/* <img src="/assets/img/bg-shape-2.png" alt="img" /> */}
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        {chooseHeading.subtitle && (
                            <div className="sub-title wow fadeInUp">
                                <span>{chooseHeading.subtitle}</span>
                            </div>
                        )}
                        {chooseHeading.title && (
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                {parse(chooseHeading.title)}
                            </h2>
                        )}
                    </div>
                    {chooseHeading.content && (
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                            {parse(chooseHeading.content)}
                        </p>
                    )}
                </div>

                <div className="row justify-content-center">
                    {chooseContent.map((item, i) => (
                        <div
                            key={i}
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".2s"
                        >
                            <div className="feature-box-items">
                                <div className="icon">
                                    <i className={item.iconclass}></i>
                                </div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceKeyFeatures;

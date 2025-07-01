import axios from "axios";
import { useEffect, useState } from "react";

const Process = () => {
    const [processData, setProcessData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get("/assets/data/NewservicesData.json");
            const processSection = response.data.ServicePageData[1]?.processSection;
            setProcessData(processSection);
        } catch (error) {
            console.error("Error fetching process data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!processData) return null;

    return (
        <section className="service-section fix section-padding">
            {/* {processData.leftShape && (
                <div className="left-shape float-bob-y">
                    <img src={processData.leftShape} alt="left-shape" />
                </div>
            )}
            {processData.rightShape && (
                <div className="right-shape">
                    <img src={processData.rightShape} alt="right-shape" />
                </div>
            )}
            {processData.bgShape && (
                <div className="bg-shape">
                    <img src={processData.bgShape} alt="bg-shape" />
                </div>
            )} */}
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>{processData.subtitle}</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: processData.title }} />
                    </div>
                </div>

                <div className="row">
                    {Array.isArray(processData.steps) &&
                        processData.steps.map((item, i) => (
                            <div
                                key={i}
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <div className="service-box-items text-center flex-column">
                                    <div className="d-flex justify-content-center justify-content-md-start service-box-items-icon">
                                        <div className="icon" style={{ fontSize: "40px" }}>
                                            <i className={item.iconclass}></i>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4 className="text-center text-md-start">{item.title}</h4>
                                        <p className="text-center text-md-start">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

import parse from "html-react-parser";
import figmaLogo from "/assets/img/tools/figma-logo.png";
import canvaLogo from "/assets/img/tools/canva-logo.png";
import photoshopLogo from "/assets/img/tools/photoshop-logo.png";
import adobeLogo from "/assets/img/tools/adobecloud-logo.png";

const Brandsection6 = () => {
    const recommended = [{ name: "Gmail", logo: figmaLogo }];

    const compatible = [
        { name: "ClickUp", logo: canvaLogo },
        { name: "Trello", logo: photoshopLogo },
        { name: "Jira", logo: adobeLogo },
    ];

    const chooseHeading = {
        subtitle: "Our Services",
        title: "Design & Prototype Tools We Use",
        content:
            "A fully equipped Shopify development <br/> team ready to handle all your technical needs— <br/>fast, flexible, and reliable.",
        plantitle1: "We recommend For you ",
        plantitle2: "We are Also compatible with",
    };

    return (
        <section
            className="section-padding brand-section fix"
            style={{ backgroundColor: "#f6f3fe" }}
        >
            <div className="container ">
                <div className="section-title-area">
                    <div className="section-title">
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {parse(chooseHeading.title)}
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-xl-3 col-lg-4 col-md-12 col-sm-12">
                        <div className="section-title mb-0">
                            <div
                                className="sub-title wow fadeInUp my-4"
                                style={{ backgroundColor: "#384bff1a" }}
                            >
                                <span>{chooseHeading.plantitle1}</span>
                            </div>
                        </div>

                        <div className="row d-flex align-items-center justify-content-start ms-0 ms-md-5 ms-lg-0 ms-xl-0 p-md-0">
                            {recommended.map((tool, index) => (
                                <div
                                    className="col-6 col-sm-4 col-md-6 col-lg-3 text-start  flex-column"
                                    key={index}
                                >
                                    <img
                                        src={tool.logo}
                                        alt={tool.name}
                                        className="img-fluid mb-2 px-2 px-md-0"
                                        style={{ maxHeight: "60px", maxWidth: "60px" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-xl-9 col-lg-8 col-md-12 col-sm-12 ">
                        <div className="section-title mb-0">
                            <div
                                className="sub-title wow fadeInUp my-4"
                                style={{ backgroundColor: "#384bff1a" }}
                            >
                                <span>{chooseHeading.plantitle2}</span>
                            </div>
                        </div>

                        <div className="row p-md-0">
                            {compatible.map((tool, index) => (
                                <div
                                    className="col-4 col-sm-4 col-md-4 col-lg-2 text-center flex-column"
                                    key={index}
                                >
                                    <img
                                        src={tool.logo}
                                        alt={tool.name}
                                        className="img-fluid mb-2 px-2 px-md-0"
                                        style={{ maxHeight: "60px", maxWidth: "60px" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brandsection6;

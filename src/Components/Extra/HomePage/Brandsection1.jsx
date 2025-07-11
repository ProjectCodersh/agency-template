import parse from "html-react-parser";
import gmailLogo from "/assets/img/tools/gmail-logo.png";
import asanaLogo from "/assets/img/tools/asana-logo.png";
import loomLogo from "/assets/img/tools/loom-logo.png";
import zoomLogo from "/assets/img/tools/zoom-logo.png";
// import googleMeetLogo from "/assets/img/tools/tool5.png";
import clickupLogo from "/assets/img/tools/clickup-logo.png";
import trelloLogo from "/assets/img/tools/trello-logo.png";
import jiraLogo from "/assets/img/tools/jira-logo.png";
import githubLogo from "/assets/img/tools/github-logo.png";

const Brandsection1 = () => {
    const recommended = [
        { name: "Gmail", logo: gmailLogo },
        { name: "Asana", logo: asanaLogo },
        { name: "Loom", logo: loomLogo },
        { name: "Zoom", logo: zoomLogo },
        // { name: "Google Meet", logo: googleMeetLogo },
    ];

    const compatible = [
        { name: "ClickUp", logo: clickupLogo },
        { name: "Trello", logo: trelloLogo },
        { name: "Jira", logo: jiraLogo },
        { name: "GitHub", logo: githubLogo },
    ];

    const chooseHeading = {
        subtitle: "Our Services",
        title: "Project Management &  Communication  Tools",
        content: "",
        // "A fully equipped WordPress development <br/> team ready to handle all your technical needs— <br/>fast, flexible, and reliable.",
        plantitle1: "We recommend For you ",
        plantitle2: "We are Also compatible with",
    };

    return (
        <section className="section-padding brand-section fix" style={{ backgroundColor: "#f6f3fe" }}>
            <div className="container px-3">
                <div className="section-title-area">
                    <div className="section-title">
                        {/* <div className="sub-title wow fadeInUp" style={{ backgroundColor: '#384bff1a' }}>
                            <span>{chooseHeading.subtitle}</span>
                        </div> */}
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {parse(chooseHeading.title)}
                        </h2>
                    </div>
                    {/* <p className="wow fadeInUp" data-wow-delay=".5s">
                        {parse(chooseHeading.content)}
                    </p> */}
                </div>

                <div className="mb-4">
                    <div className="section-title mb-0">
                        <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: "#384bff1a" }}>
                            <span>{chooseHeading.plantitle1}</span>
                        </div>
                    </div>

                    <div className="row gy-4 mx-2 mx-md-0">
                        {recommended.map((tool, index) => (
                            <div
                                className="col-6 col-sm-4 col-md-4 col-lg-3 text-center d-flex align-items-center justify-content-center flex-column"
                                key={index}
                            >
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="img-fluid mb-2 brandsection-brands"

                                />
                                {/* <p className="small text-muted mb-0">{tool.name}</p> */}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="section-title mb-0">
                        <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: "#384bff1a" }}>
                            <span>{chooseHeading.plantitle2}</span>
                        </div>
                    </div>

                    <div className="row gy-4  p-md-0">
                        {compatible.map((tool, index) => (
                            <div
                                className="col-6 col-sm-4 col-md-4 col-lg-3 text-center  d-flex align-items-center justify-content-center flex-column "
                                key={index}
                            >
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="img-fluid mb-2 brandsection-brands px-2 px-md-0"

                                />
                                {/* <p className="small text-muted mb-0">{tool.name}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brandsection1;

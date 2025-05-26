import parse from 'html-react-parser';
import gmailLogo from '../../../../public/assets/img/tools/tool1.png';
import asanaLogo from '../../../../public/assets/img/tools/tool2.png';
import loomLogo from '../../../../public/assets/img/tools/tool3.png';
import zoomLogo from '../../../../public/assets/img/tools/tool4.png';
import googleMeetLogo from '../../../../public/assets/img/tools/tool5.png';
import clickupLogo from '../../../../public/assets/img/tools/tool6.png';
import trelloLogo from '../../../../public/assets/img/tools/tool7.png';
import jiraLogo from '../../../../public/assets/img/tools/tool8.png';
import githubLogo from '../../../../public/assets/img/tools/tool9.png';

const Brandsection1 = () => {
    const recommended = [
        { name: 'Gmail', logo: gmailLogo },
        { name: 'Asana', logo: asanaLogo },
        { name: 'Loom', logo: loomLogo },
        { name: 'Zoom', logo: zoomLogo },
        { name: 'Google Meet', logo: googleMeetLogo },
    ];

    const compatible = [
        { name: 'ClickUp', logo: clickupLogo },
        { name: 'Trello', logo: trelloLogo },
        { name: 'Jira', logo: jiraLogo },
        { name: 'GitHub', logo: githubLogo },
    ];

    const chooseHeading = {
        subtitle: "Our Services",
        title: 'Project Management <br/> & Communication  Tools',
        content: 'A fully equipped WordPress development <br/> team ready to handle all your technical needs— <br/>fast, flexible, and reliable.',
        plantitle1: "We recommend For you ",
        plantitle2: "We are Also compatible with",

    }

    return (
        <section className="py-5 px-3 brand-section fix" style={{ backgroundColor: '#f6f3fe' }}>
            <div className="container ">
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
                        <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }}>
                            <span>{chooseHeading.plantitle1}</span>
                        </div>
                    </div>

                    <div className="row gy-4 ">
                        {recommended.map((tool, index) => (
                            <div className="col-6 col-sm-4 col-md-4 col-lg-3 text-center d-flex align-items-center justify-content-center flex-column" key={index}>
                                <img src={tool.logo} alt={tool.name} className="img-fluid mb-2" style={{ maxHeight: '200px', maxWidth: "200px" }} />
                                {/* <p className="small text-muted mb-0">{tool.name}</p> */}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="section-title mb-0">
                        <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }}>
                            <span>{chooseHeading.plantitle2}</span>
                        </div>
                    </div>

                    <div className="row gy-4  p-md-0">
                        {compatible.map((tool, index) => (
                            <div className="col-6 col-sm-4 col-md-4 col-lg-3 text-center  d-flex align-items-center justify-content-center flex-column " key={index}>
                                <img src={tool.logo} alt={tool.name} className="img-fluid mb-2 px-2 px-md-0" style={{ maxHeight: '200px', maxWidth: "200px" }} />
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

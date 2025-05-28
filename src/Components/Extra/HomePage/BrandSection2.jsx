import parse from 'html-react-parser';
import goDaddyLogo from '../../../../public/assets/img/tools/tool10.png';
import flyWheelLogo from '../../../../public/assets/img/tools/tool11.png';
import HighLevelLogo from '../../../../public/assets/img/tools/tool12.png';
import HostingerLogo from '../../../../public/assets/img/tools/tool13.png';
import blueHostLogo from '../../../../public/assets/img/tools/tool14.png';
import kinstaLogo from '../../../../public/assets/img/tools/tool15.png';
import namecheapLogo from '../../../../public/assets/img/tools/tool16.png';
import onetwothreeRegLogo from '../../../../public/assets/img/tools/tool17.png';
import ionosLogo from '../../../../public/assets/img/tools/tool18.png';
import hostgatorLogo from '../../../../public/assets/img/tools/tool19.png';

const BrandSection2 = () => {
    const recommended = [
        { name: 'Gmail', logo: goDaddyLogo },
        { name: 'Asana', logo: flyWheelLogo },
        { name: 'Loom', logo: HighLevelLogo },
        { name: 'Zoom', logo: HostingerLogo },

    ];

    const compatible = [
        { name: 'Google Meet', logo: blueHostLogo },
        { name: 'ClickUp', logo: kinstaLogo },
        { name: 'Trello', logo: namecheapLogo },
        { name: 'Jira', logo: onetwothreeRegLogo },
        { name: 'GitHub', logo: ionosLogo },
        { name: 'GitHub', logo: hostgatorLogo },
    ];

    const chooseHeading = {
        subtitle: "Our Services",
        title: 'Domain/Hosting/SSL/Email Management Tools',
        content: 'A fully equipped WordPress development <br/> team ready to handle all your technical needs— <br/>fast, flexible, and reliable.',
        plantitle1: "We recommend For you ",
        plantitle2: "We are Also compatible with",
    }

    return (
        <section className="section-padding brand-section fix" style={{ backgroundColor: '#f6f3fe' }}>
            <div className="container ">
                <div className="section-title-area">
                    <div className="section-title">
                        <h2 className="wow fadeInUp text-break" data-wow-delay=".3s">
                            {parse(chooseHeading.title)}
                        </h2>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="section-title mb-0">
                        <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }}>
                            <span>{chooseHeading.plantitle1}</span>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {recommended.map((tool, index) => (
                            <div className="col-6 col-sm-4 col-md-4 col-lg-3 text-center d-flex align-items-center justify-content-center flex-column" key={index}>
                                <img src={tool.logo} alt={tool.name} className="img-fluid mb-2 px-3 px-md-0" style={{ maxHeight: '200px', maxWidth: "200px" }} />

                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="section-title mb-0">
                        <div className="sub-title wow fadeInUp my-4" style={{ backgroundColor: '#384bff1a' }} >
                            <span>{chooseHeading.plantitle2}</span>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {compatible.map((tool, index) => (
                            <div className="col-6 col-sm-4 col-md-4 col-lg-3 text-center  d-flex align-items-center justify-content-center flex-column" key={index} >
                                <img src={tool.logo} alt={tool.name} className="img-fluid mb-2 px-3 px-md-0" style={{ maxHeight: '200px', maxWidth: "200px" }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandSection2;


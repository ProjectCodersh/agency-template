import parse from 'html-react-parser';
import figmalLogo from '../../../../public/assets/img/tools/tool20.png';
import canvaLogo from '../../../../public/assets/img/tools/tool21.png';
import photoshopLogo from '../../../../public/assets/img/tools/tool22.png';
import adobeLogo from '../../../../public/assets/img/tools/tool23.png';

const Brandsection3 = () => {
    const recommended = [
        { name: 'Gmail', logo: figmalLogo },

    ];

    const compatible = [
        { name: 'ClickUp', logo: canvaLogo },
        { name: 'Trello', logo: photoshopLogo },
        { name: 'Jira', logo: adobeLogo },

    ];

    const chooseHeading = {
        subtitle: "Our Services",
        title: 'Design & Prototype Tools We Use',
        content: 'A fully equipped WordPress development <br/> team ready to handle all your technical needs— <br/>fast, flexible, and reliable.',
        plantitle1: "We recommend For you ",
        plantitle2: "We are Also compatible with",
    }

    return (
        <section className="section-padding brand-section fix" >
            <div className="container ">
                <div className="section-title-area">
                    <div className="section-title">

                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {parse(chooseHeading.title)}
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 col-xl-3 col-lg-4 col-md-12 col-sm-12'>
                        <div className="section-title mb-0">
                            <div className="sub-title wow fadeInUp my-4" >
                                <span>{chooseHeading.plantitle1}</span>
                            </div>
                        </div>

                        <div className="row gy-4  d-flex align-items-center justify-content-center  p-md-0">
                            {recommended.map((tool, index) => (
                                <div className="col-6 col-sm-4 col-md-6 col-lg-3 text-center d-flex align-items-center justify-content-center flex-column mt-4" key={index}>
                                    <img src={tool.logo} alt={tool.name} className="img-fluid  mb-2 px-2 px-md-0" style={{ maxHeight: '120px', maxWidth: "120px" }} />

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-12 col-xl-9 col-lg-8 col-md-12 col-sm-12 '>
                        <div className="section-title mb-0">
                            <div className="sub-title wow fadeInUp my-4" >
                                <span>{chooseHeading.plantitle2}</span>
                            </div>
                        </div>

                        <div className="row gy-4  d-flex align-items-center justify-content-between p-md-0">
                            {compatible.map((tool, index) => (
                                <div className="col-6 col-sm-4 col-md-4 col-lg-3 text-center d-flex align-items-center justify-content-center flex-column " key={index}>
                                    <img src={tool.logo} alt={tool.name} className="img-fluid mb-2 px-2 px-md-0" style={{ maxHeight: '120px', maxWidth: "120px" }} />

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brandsection3;

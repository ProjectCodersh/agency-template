
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';


function Counter4() {
    const chooseHeading = {
        subtitle: "Page Builders",
        title: ' Seamless integration <br/> with page builders',
        content: ' We work with all major page builders,<br/> including Elementor. Whether you prefer to leverage <br/> existing page builder functionality or need custom .',
        img: '/assets/img/feature-img.png',
    }

    const chooseContent = [
        { img: '/assets/img/pagebuilder/builder1.png', title: 'Better audiences', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder2.png', title: 'Better Analytics', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder3.png', title: 'Better Output', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder4.png', title: 'Better Output', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder5.png', title: 'Better Output', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder6.png', title: 'Better Output', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder7.png', title: 'Better Output', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder8.png', title: 'Better Output', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder9.png', title: 'Better Output', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder10.png', title: 'Better Output', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder11.png', title: 'Better Output', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
        { img: '/assets/img/pagebuilder/builder12.png', title: 'Better Output', content: 'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.' },
    ];

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="feature-secton section-padding fix">
            {/* <div className="bg-shape">
                <img src="/assets/img/bg-shape-2.png" alt="img" />
            </div> */}
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>{chooseHeading.subtitle}</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {parse(chooseHeading.title)}
                        </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                        {parse(chooseHeading.content)}
                    </p>
                </div>
                <div className="row">

                    {chooseContent.map((item, i) => (
                        <div key={i} className="col-xl-2 col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="feature-box-items2">
                                <div className="icon">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                {/* <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>
                                        {item.content}
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Counter4



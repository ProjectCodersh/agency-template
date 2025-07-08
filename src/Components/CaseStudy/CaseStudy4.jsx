import { Link } from "react-router-dom";

const CaseStudy4 = () => {

    const chooseContent = [
        { subtitle: 'E-Commerce', title: 'ReinventU', img: '/assets/img/case-studies/02.jpg', slug: 'reinventu' },
        { subtitle: 'Restaurant & Hospitality', title: 'Chez Omar', img: '/assets/img/case-studies/03.jpg', slug: 'chez-omar' },
        { subtitle: 'Wine Brand (LGBTQ+ Focused)', title: 'Madame F', img: '/assets/img/case-studies/04.jpg', slug: 'madame-f' },
        { subtitle: 'Food & Beverage', title: 'Liberation Cocktails', img: '/assets/img/case-studies/06.jpg', slug: 'liberation-cocktails' },
        { subtitle: 'Food & Beverage', title: 'Van Hunks ', img: '/assets/img/case-studies/07.jpg', slug: 'van-hunks' },
        { subtitle: 'E-Commerce & Financial Services', title: 'Pa Mi Gente', img: '/assets/img/case-studies/08.jpg', slug: 'pa-mi-gente' },
        { subtitle: 'Financial Services', title: 'Stellar Credit', img: '/assets/img/case-studies/02.jpg', slug: 'stellar-credit' },
        { subtitle: 'E-Commerce', title: 'Bergbat', img: '/assets/img/case-studies/03.jpg', slug: 'bergbat' },
    ];

    return (
        <section className="case-studies-section-4 fix section-padding">
            <div className="container">
                <div className="row g-4">
                    {chooseContent.map((item, i) => (
                        <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                            <div className="case-studies-card-items mt-0">
                                <div className="thumb">
                                    <img src={item.img} alt="img" />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h3><Link to={`/case-studies/${item.slug}`} > {item.title}</Link></h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                    <Link to={`/case-studies/${item.slug}`} className="icon"><i className="bi bi-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default CaseStudy4;
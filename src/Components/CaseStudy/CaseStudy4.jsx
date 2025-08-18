import { Link } from 'react-router-dom';

const CaseStudy4 = () => {
  const chooseContent = [
    // { subtitle: 'E-Commerce', title: 'ReinventU', img: '/assets/img/case-studies/02.jpg', slug: 'reinventu' },
    // { subtitle: 'wordpress E-Commerce', title: 'Chez Omar', img: '/assets/img/case-studies/03.jpg', slug: 'chez-omar' },
    {
      slug: 'madame-f',
      title: 'Madame F',
      subtitle: 'Wine Brand (LGBTQ+ Focused)',
      img: '/assets/img/casestudy/madamef-casestudy.webp',
      description:
        'MADAME F is a bold, innovative wine brand celebrating individuality and the LGBTQ+ community. More than just a beverage, it represents a movement toward authenticity and inclusivity',
    },
    {
      slug: 'liberation-cocktails',
      title: 'Liberation Cocktails',
      subtitle: 'E-Commerce (cocktail store)',
      img: '/assets/img/casestudy/liberation-casestudy.webp',
      description:
        'Liberation Cocktails is a premium pre-mixed cocktail brand known for delivering exceptional taste and convenience. To elevate their online presence, Liberation Cocktails partnered',
    },
    {
      slug: 'van-hunks',
      title: 'Van Hunks',
      subtitle: 'E-Commerce (wine store)',
      img: '/assets/img/casestudy/van-hunks-casestudy.webp',
      description:
        'Van Hunks is a vibrant South African brand crafting sparkling wines that bring a sense of fun to everyday moments. Their existing Shopify store wasn’t capturing the energy or quality of',
    },
    {
      slug: 'pa-mi-gente',
      title: 'Pa Mi Gente',
      subtitle: 'Wordpress',
      img: '/assets/img/casestudy/pami-gente-casestudy.webp',
      description:
        'Pa Mi Gente is an innovative platform bridging families across borders by enabling US-based customers to send groceries and money to loved ones in Cuba. Evolving from a simple',
    },
    {
      slug: 'stellar-credit',
      title: 'Stellar Credit',
      subtitle: 'Financial Services',
      img: '/assets/img/casestudy/stellar-credit-casestudy.webp',
      description:
        'Stellar Credit serves as a beacon of hope for individuals striving to improve their credit scores and achieve financial security. The project focused on building a digital platform that',
    },
    {
      slug: 'bergbat',
      title: 'Bergbat',
      subtitle: 'E-Commerce',
      img: '/assets/img/casestudy/bergbat-casestudy.webp',
      description:
        'Bergbat is a premium baseball bat company renowned for its highly customizable products. To better support their complex product configurations and enhance the customer',
    },
  ];

  return (
    <section className="case-studies-section-4 fix section-padding pb-0">
      <div className="container">
        <div className="row g-4">
          {chooseContent.map((item, i) => (
            <div key={i} className="col-xl-6 col-lg-6 col-md-6 mb-5">
              <div className="case-studies-card-items mt-0">
                <div className="thumb case-studies-card-items-imgbox">
                  <img
                    src={item.img}
                    alt={
                      item.img
                        ? item.img.split('/').pop().split('.')[0].replace(/[-_]/g, ' ')
                        : 'case study image'
                    }
                    className="case-studies-card-items-coverimg"
                  />
                </div>
                <div className="content">
                  <div className="title">
                    <h3>
                      <Link to={`/case-study/${item.slug}`}> {item.title}</Link>
                    </h3>
                    <p>{item.subtitle}</p>
                    <p className="clamp-2-lines">{item.description}</p>
                  </div>
                  <Link
                    to={`/case-study/${item.slug}`}
                    className="icon"
                    style={{ minWidth: '52px', height: '52px' }}
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy4;

import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";

const Features = ({ data }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  if (!data) return null;

  const { subtitle, title, content = [] } = data;

  return (
    <section className="feature-secton section-padding fix">
      <div className="bg-shape"></div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            {subtitle && (
              <div className="sub-title wow fadeInUp">
                <span>{subtitle}</span>
              </div>
            )}
            {title && (
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                {parse(title)}
              </h2>
            )}
          </div>
        </div>

        <div className="row justify-content-center">
          {content.map((item, i) => (
            <div
              key={i}
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="feature-box-items card-hover-effect">
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

export default Features;

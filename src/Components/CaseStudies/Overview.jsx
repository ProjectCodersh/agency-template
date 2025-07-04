import { CheckCircle } from "lucide-react";

const Overview = ({ data }) => {
  if (!data) return null;

  const {
    title,
    description,
    resultsTitle,
    resultList1,
    resultList2,
    progress,
    images,
  } = data;

  return (
    <section className="fix section-padding">
      <div className="container">
        <div className="project-details-content">
          <h3>{title}</h3>
          <div className="row g-4">
            <div className="col-lg-12">
              <p className="mt-4">{description}</p>
            </div>
          </div>

          <h3 className="mt-5">{resultsTitle}</h3>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="list-items d-flex mt-4">
                <ul>
                  {resultList1.map((item, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-start gap-2 mb-2"
                    >
                      <span className="pt-1">
                        <CheckCircle
                          size={20}
                          color="#28a745"
                          strokeWidth={2.2}
                        />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="ms-4">
                  {resultList2.map((item, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-start gap-2 mb-2"
                    >
                      <span className="pt-1">
                        <CheckCircle
                          size={20}
                          color="#28a745"
                          strokeWidth={2.2}
                        />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="progress-area">
                <div className="progress-wrap">
                  {progress.map((item, idx) => (
                    <div className="pro-items mb-4" key={idx}>
                      <div className="pro-head d-flex justify-content-between align-items-center">
                        <h6 className="title mb-1">{item.label}</h6>
                        <span className="point fw-bold">{item.value}%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-value"
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-4">
            {images.map((img, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="details-image">
                  <img src={img} alt={`Case Image ${idx + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

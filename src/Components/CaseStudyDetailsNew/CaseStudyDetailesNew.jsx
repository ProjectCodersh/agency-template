// components/CaseStudyDetailsNew/CaseStudyDetailesNew.jsx

import React from "react";

function CaseStudyDetailesNew({ data }) {
  if (!data) return null;

  const {
    title,
    industry,
    technology,
    overview,
    bulletLists = [],
    detailColumns = [],
    resultData = [],
    images = [],
  } = data;

  return (
    <section className="project-details-section fix section-padding">
      <div className="container">
        <div className="project-details-wrapper">
          <div className="project-details-items">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="details-top-items">
                  <div className="details-left">
                    <h2>{title}</h2>
                  </div>
                  <div className="details-right">
                    <ul className="client-details">
                      <li>
                        Industry: <span>{industry}</span>
                      </li>
                      <li>
                        Technology: <span>{technology}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-details-content">
            <h3>Overview</h3>
            <p>{overview}</p>

            {bulletLists.length > 0 && (
              <>
                <h3 className="mt-5">Goals of The Project</h3>
                <div className="row g-5">
                  {bulletLists.map((list, listIndex) => (
                    <div key={listIndex} className="col-lg-6">
                      <ul className="list-items flex-column align-items-start">
                        {list.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}

            {detailColumns.length > 0 && (
              <>
                <h3 className="mt-5">Process Of The Project</h3>
                <div className="row g-5">
                  {detailColumns.map((col, colIndex) => (
                    <div key={colIndex} className="col-lg-6">
                      <h4 className="mb-3">{col.heading}</h4>
                      <p>{col.text}</p>
                    </div>
                  ))}
                </div>
              </>
            )}


            {resultData.length > 0 && (
              <>
                <h3 className="mt-5">Result Of The Project</h3>
                <div className="row g-5">
                  {resultData.map((col, colIndex) => (
                    <div key={colIndex} className="col-lg-12">
                      <p>{col.text}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {images.length > 0 && (
              <div className="row g-4 mt-4">
                {images.map((imgSrc, index) => (
                  <div key={index} className="col-md-6">
                    <div className="details-image">
                      <img
                        src={imgSrc}
                        alt={`case-study-img-${index}`}
                        loading="lazy"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="slider-button d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
              <button className="cmn-prev cmn-border d-center">
                <i className="bi bi-chevron-left"></i>
              </button>
              <span className="fw-bold white-clr previus-text text-capitalize">
                Previous
              </span>
            </div>
            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
              <span className="fw-bold white-clr previus-text text-capitalize">
                Next
              </span>
              <button className="cmn-next cmn-border d-center">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(CaseStudyDetailesNew);

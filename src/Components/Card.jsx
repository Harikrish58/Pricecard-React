import React from "react";
import "./Card.css";

const Card = ({ plan }) => {
  return (
    <div className="container">
    <div className="row">
      {plan.map((element, index) => {
        return (
          <>
            <div key={index} className="col-lg-3 col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <p className="card-text text-center text-very-small">
                    {element.subscription}
                  </p>
                  <h1 className="card-text text-center">
                    {element.subscriptionAmount}
                  </h1>
                  <hr />
                  <p className="card-text">
                    <i className="fas fa-check me-2"></i>
                    {element.user}
                  </p>
                  <p className="card-text">
                    <i className="fas fa-check me-2"></i>
                    {element.storage}
                  </p>
                  <p className="card-text">
                    <i className="fas fa-check me-2"></i>
                    {element.projects}
                  </p>
                  <p className="card-text">
                    <i className="fas fa-check me-2"></i>
                    {element.access}
                  </p>
                  <ul className="list-unstyled">
                    {element.features.map((feature, featureIndex) => {
                      return (
                        <>
                          <li
                            key={featureIndex}
                            className={
                              feature.enabled ? "text-sucess" : "text-muted"
                            }
                          >
                            <i
                              className={`fas ${
                                feature.enabled ? "fa-check" : "fa-xmark"
                              } me-2`}
                            ></i>
                            {feature.title}
                          </li>
                        </>
                      );
                    })}
                  </ul>
                  <div className="card-footer">
                    <button className="btn btn-primary">
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
    </div>
  );
};

export default Card;

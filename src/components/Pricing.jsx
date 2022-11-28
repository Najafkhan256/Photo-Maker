import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PricingData } from "../static/data";
import Divider from "./Divider";

const Pricing = () => {
  return (
    <div className="Pricing_container">
      <div className="Pricing_title">
        <h2>Affordable Plans for Any Budget</h2>
        <Divider />
      </div>
      <Container>
        <Row>
          {PricingData.map(
            ({
              id,
              price,
              packageName,
              description,
              list1,
              list2,
              list3,
              list4,
              list5,
              list6,
              list7,
              answer1,
              answer2,
              answer3,
              answer4,
              answer5,
              answer6,
              answer7
            }) => {
              return (
                <Col lg={4} key={id}>
                  <div className="price-section">
                    <article className="price-table">
                      <div className="price">
                        <small>$</small>
                        {price}
                      </div>
                      <h2 className="title">{packageName}</h2>
                      <p className="description">{description}</p>

                      <div className="features">
                        <details className="feature">
                          <summary>
                            <i aria-hidden="true" className="checkmark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                />
                              </svg>
                            </i>
                            <span className="name">{list1}</span>
                            <i aria-hidden="true" className="question-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
                                />
                              </svg>
                            </i>
                          </summary>
                          <div className="answer">{answer1}</div>
                        </details>

                        <details className="feature">
                          <summary>
                            <i aria-hidden="true" className="checkmark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                />
                              </svg>
                            </i>
                            <span className="name">{list2}</span>
                            <i aria-hidden="true" className="question-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
                                />
                              </svg>
                            </i>
                          </summary>
                          <div className="answer">{answer2}</div>
                        </details>
                        <details className="feature">
                          <summary>
                            <i aria-hidden="true" className="checkmark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                />
                              </svg>
                            </i>
                            <span className="name">{list3}</span>
                            <i aria-hidden="true" className="question-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
                                />
                              </svg>
                            </i>
                          </summary>
                          <div className="answer">{answer3}</div>
                        </details>
                        <details className="feature">
                          <summary>
                            <i aria-hidden="true" className="checkmark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                />
                              </svg>
                            </i>
                            <span className="name">{list4}</span>
                            <i aria-hidden="true" className="question-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
                                />
                              </svg>
                            </i>
                          </summary>
                          <div className="answer">{answer4} </div>
                        </details>
                        <details className="feature">
                          <summary>
                            <i aria-hidden="true" className="checkmark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                />
                              </svg>
                            </i>
                            <span className="name">{list5}</span>
                            <i aria-hidden="true" className="question-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
                                />
                              </svg>
                            </i>
                          </summary>
                          <div className="answer">{answer5}</div>
                        </details>
                        <details className="feature">
                          <summary>
                            <i aria-hidden="true" className="checkmark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                />
                              </svg>
                            </i>
                            <span className="name">{list6}</span>
                            <i aria-hidden="true" className="question-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
                                />
                              </svg>
                            </i>
                          </summary>
                          <div className="answer">{answer6}</div>
                        </details>
                        <details className="feature">
                          <summary>
                            <i aria-hidden="true" className="checkmark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                />
                              </svg>
                            </i>
                            <span className="name">{list7}</span>
                            <i aria-hidden="true" className="question-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  fill="currentColor"
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
                                />
                              </svg>
                            </i>
                          </summary>
                          <div className="answer">{answer7}</div>
                        </details>
                      </div>
                    </article>
                  </div>
                </Col>
              );
            }
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;

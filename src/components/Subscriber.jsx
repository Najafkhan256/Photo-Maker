import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Divider from "../components/Divider";
import { SubscribersData } from "../static/data";

const Subscriber = () => {
  return (
    <div className="Subscriber_container">
      <div className="Subscriber_wrapper">
        <div className="Subscriber_title">
          <h2>Happy Subscribers</h2>
          <Divider />
        </div>
        <Container>
          <Row>
            {SubscribersData.map(({ id, comment, Img, name, designation }) => {
              return (
                <Col lg={4} key={id}>
                  <div className="testimonials">
                    <div className="slider-container">
                      <div className="slider">
                        <div className="slide-box">
                          <p className="comment">{comment}</p>
                          <img src={Img} alt="client" />
                          <h3 className="name">{name}</h3>
                          <h4 className="job">{designation}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Subscriber;

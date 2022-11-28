import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ServiceCardsData } from "../../static/data";
import Divider from "../Divider";

const Services = () => {
  return (
    <Container className="serivces_container">
      <div className="services_heading">
        <h1>Our Services</h1>
        <Divider />
      </div>
      <Row>
        {ServiceCardsData.map(({ id, title, description,img }) => {
          return (
            <Col lg={3} key={id}>
              <div className="hoverbox">
                <img
                  className="hoverbox__image"
                  src={img}
                  alt="Test Img"
                />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Services;

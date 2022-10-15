import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

function Fitness() {
  return (
    <main>
      <div className="breadcrumb6">
        <h3>Fitness Work Services</h3>
        <p>
          Home / Service / <span>fitness work services</span>
        </p>
      </div>
      {/* About */}
      <Container className="serv-sec">
        <Row>
          <Col xs={6}>
            <img alt="services" src={require("../assets/f.png")} width="90%" />
          </Col>
          <Col xs={6}>
            <h5>OUR SERVICES</h5>
            <h3>Fitness Work Services</h3>
            <p>
              We provide fitness and wellness services to our patients and
              members of the communities. It is one of our ways to contribute to
              building community wellness. <br />
              <br />
              We help community members and patients to:
              <br />
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Improve their fitness levels.
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Avoid dangerous health conditions.
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Improve their overall wellbeing.
              </div>
            </p>
          </Col>
        </Row>
      </Container>
      {/* // Services Section */}
    </main>
  );
}

export default Fitness;

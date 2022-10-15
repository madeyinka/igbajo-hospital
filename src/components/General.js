import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

function General() {
  return (
    <main>
      <div className="breadcrumb4">
        <h3>General Consultation Services</h3>
        <p>
          Home / Service / <span>General Consultation Services</span>
        </p>
      </div>
      {/* About */}
      <Container className="serv-sec">
        <Row>
          <Col xs={6}>
            <img alt="services" src={require("../assets/s3.png")} width="90%" />
          </Col>
          <Col xs={6}>
            <h5>OUR SERVICES</h5>
            <h3>
              General Consultation <br /> Services
            </h3>
            <p>
              We offer consultation services that entail an in-depth discussion
              about your medical symptoms or condition between you and our
              Consultants. <br />
              <br />
              Preparing to visit us. At your outpatient visit, you will meet
              with the Consultant who will look after you throughout your
              treatment and, if necessary, during your hospital stay.
              <br />
            </p>
          </Col>
        </Row>
      </Container>
      {/* // Services Section */}
    </main>
  );
}

export default General;

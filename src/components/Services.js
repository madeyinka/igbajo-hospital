import React from "react";
import "./styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Services() {
  return (
    <main>
      <div className="breadcrumb">
        <h3>Our Services</h3>
        <p>
          Home / <span>Our Services</span>
        </p>
      </div>
      <section className="about">
        <Container className="abt-sec">
          <Row>
            <Col xs={3}>
              <Card className="shadow p-3 mb-5 bg-white rounded">
                <img
                  alt="about-icon"
                  src={require("../assets/s10.png")}
                  width="50px"
                />
                <h5>
                  Fitness work <br /> Services
                </h5>
                <p>
                  We provide fitness and wellness services to our patients and
                  members of the communities.
                </p>
                <Link to="/fitness">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </Card>
            </Col>
            <Col xs={3}>
              <Card className="shadow p-3 mb-5 bg-white rounded">
                <img
                  alt="about-icon"
                  src={require("../assets/s20.png")}
                  width="50px"
                />
                <h5>
                  Inpatient and Outpatient <br /> services
                </h5>
                <p>
                  Our outpatient or inpatient care is determined by the type of
                  care our patients require...
                </p>
                <Link to="/inpatient">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </Card>
            </Col>
            <Col xs={3}>
              <Card className="shadow p-3 mb-5 bg-white rounded">
                <img
                  alt="about-icon"
                  src={require("../assets/s30.png")}
                  width="50px"
                />
                <h5>
                  Laboratory <br /> services
                </h5>
                <p>
                  We maintain a high-standard, full-service laboratory. The lab
                  is staffed with competent...
                </p>
                <Link to="/laboratory">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </Card>
            </Col>
            <Col xs={3}>
              <Card className="shadow p-3 mb-5 bg-white rounded">
                <img
                  alt="about-icon"
                  src={require("../assets/s40.png")}
                  width="50px"
                />
                <h5>
                  General Consultation <br /> Services
                </h5>
                <p>
                  We offer consultation services that entail an in-depth
                  discussion about your medical symptoms...
                </p>
                <Link to="/general-consultation">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </Card>
            </Col>
            <Col xs={3}>
              <Card className="shadow p-3 mb-5 bg-white rounded">
                <img
                  alt="about-icon"
                  src={require("../assets/s40.png")}
                  width="50px"
                />
                <h5>
                  General Health <br /> Services
                </h5>
                <p>
                  We offer the following health services so that our patients
                  can have convenient, affordable care...
                </p>
                <Link to="/general-health">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Services;

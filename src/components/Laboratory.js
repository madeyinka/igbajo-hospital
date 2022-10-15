import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

function Laboratory() {
  return (
    <main>
      <div className="breadcrumb3">
        <h3>Laboratory Services</h3>
        <p>
          Home / Service / <span>Laboratory services</span>
        </p>
      </div>
      {/* About */}
      <Container className="serv-sec">
        <Row>
          <Col xs={6}>
            <img alt="services" src={require("../assets/s5.png")} width="90%" />
          </Col>
          <Col xs={6}>
            <h5>OUR SERVICES</h5>
            <h3>Laboratory Services</h3>
            <p>
              We maintain a high-standard, full-service laboratory. The lab is
              staffed with competent and qualified technologists and
              technicians, and it provides routine and emergency clinical
              services for our patients. <br />
              <br />
              We offer a wide spectrum of laboratory services, which include:
              <br />
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Cytology
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Histopathology
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Clinical Chemistry
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Blood bank (Outsourced)
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Hematology/Coagulation studies
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Microbiology – bacteriology, parasitology,
                mycobacteria/mycology, and serology
              </div>
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <hr />
      </Container>
      {/* // Services Section */}
    </main>
  );
}

export default Laboratory;

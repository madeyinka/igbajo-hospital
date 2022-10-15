import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

function Inpatient() {
  return (
    <main>
      <div className="breadcrumb2">
        <h3>Inpatient and Outpatient Services</h3>
        <p>
          Home / Service / <span>inpatient and outpatient services</span>
        </p>
      </div>
      {/* About */}
      <Container className="serv-sec">
        <Row>
          <Col xs={6}>
            <img alt="services" src={require("../assets/s4.png")} width="90%" />
          </Col>
          <Col xs={6}>
            <h5>OUR SERVICES</h5>
            <h3>
              Inpatient and Outpatient <br /> Services
            </h3>
            <p>
              Our outpatient or inpatient care is determined by the type of care
              our patients require. Intensive care, around-the-clock care, major
              surgery, and treatment for a severe illness, are examples of
              medical situations that would require you to be admitted to the
              hospital.
              <br />
              <br />
              Examples of our inpatient care include:
              <br />
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Severe burn
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Traumatic injury
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Serious illnesses, such as flu, stroke, heart attack.
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Some cosmetic procedures require extensive plastic surgery or
                reconstruction.
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Serious mental health issues, treatment for substance use
                disorder, and overdoses.
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Chronic diseases, such as cancer and COPD, require specialized
                treatment and ongoing care.
              </div>
            </p>
          </Col>
        </Row>
        <br />
        <hr />
        <br />
        <Row>
          <Col xs={6} className="inpatient">
            <h5>OUR SERVICES</h5>
            <h3>
              Types of outpatient care <br /> and services include:
            </h3>
            <p>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Medical screenings such as mammograms, colonoscopies, and
                endoscopies
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Oral surgeries and other dental procedures, such as extractions,
                implants, root canals, and gum grafts,
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Certain types of treatment are used for ongoing or long-term
                illnesses, such as dialysis and chemotherapy.
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Minor surgeries and procedures that don’t require advanced
                medical care, such as laser surgery, hand or foot surgery, mole
                removal, and Lasik eye surgery,
              </div>
            </p>
          </Col>
          <Col xs={6}>
            <br />
            <img
              alt="services"
              src={require("../assets/man.png")}
              width="90%"
            />
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

export default Inpatient;

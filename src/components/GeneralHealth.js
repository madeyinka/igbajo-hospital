import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

function GeneralHealth() {
  return (
    <main>
      <div className="breadcrumb5">
        <h3>General Health Services</h3>
        <p>
          Home / Service / <span>General Health Services</span>
        </p>
      </div>
      {/* About */}
      <Container className="serv-sec">
        <Row>
          <Col xs={6}>
            <img alt="services" src={require("../assets/s6.png")} width="90%" />
          </Col>
          <Col xs={6}>
            <h5>OUR SERVICES</h5>
            <h3>General Health Services</h3>
            <p>
              We offer the following health services so that our patients can
              have convenient, affordable care close to home.
              <br />
              <br />
              Examples of general health services include:
              <br />
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Vaccines
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Physical Exams
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Minor Procedures
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                We also do Medicare Annual Wellness Visits.
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Diagnosis and Treatment of Chronic Diseases
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                We diagnose and treat illnesses in children as well as adults.
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                We give all mandatory vaccines as required by the Federal
                Government of Nigeria and Osun State.
              </div>
            </p>
          </Col>
        </Row>
        <br />
        <hr />
        <br />
        <Row>
          <center>
            <h3 style={{ textTransform: "capitalize" }}>
              Others general health services <br /> Include
            </h3>
          </center>
          <Col xs={6} className="inpatient">
            <p>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                We offer a comprehensive list of physical exams, including well
                baby and well child checks, sports physicals, adult physicals,
                and CDL/DOT Physicals.
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Minor procedures are performed, including removal of benign
                lesions (warts, moles, cysts), as well as biopsies of lesions
                that warrant further study. Joint injections are done for
                bursitis, arthritis, and tendonitis.
              </div>
            </p>
          </Col>
          <Col xs={6} className="inpatient">
            <p>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                We offer a comprehensive list of physical exams, including well
                baby and well child checks, sports physicals, adult physicals,
                and CDL/DOT Physicals.
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                We treat most chronic diseases, including diabetes,
                hypertension, asthma, cardiovascular disease, obesity,
                arthritis, thyroid disease, depression, ADHD, and anxiety.
                Referrals to specialists are made as needed.
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

export default GeneralHealth;

import React from "react";
import "./styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Donation() {
  return (
    <main>
      <div className="breadcrumb">
        <h3>Donation</h3>
        <p>
          Home / <span>Donation</span>
        </p>
      </div>
      {/* About */}
      <Container className="serv-sec">
        <Row>
          <Col xs={6}>
            <img alt="services" src={require("../assets/f.png")} width="90%" />
          </Col>
          <Col xs={6}>
            <h5>DONATE NOW</h5>
            <h3>
              Let's Make it Happen <br /> Together
            </h3>
            <p>
              The projected estimate for the building of Igbajo Baptist Medical
              Centre is N100m. <br />
              <br />
              As you give generously towards this project, which will benefit
              the community, it is our earnest prayer that God will in turn
              bless you, your family, and your business beyond measure.
              <br />
              Donations should be made to:
              <br />
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Bank Name : Zenith Bank
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Account Number: 1214564605
              </div>
              <div className="f-d">
                <i className="fas fa-circle"></i>
                Acount Name : Igbajo Baptist Hospital
              </div>
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <hr />
      </Container>
      <Container className="abt-sec">
        <Row>
          <Col xs={6}>
            <Card className="shadow p-3 mb-5 bg-white rounded">
              <img
                alt="about-icon"
                src={require("../assets/s2.png")}
                width="60px"
              />
              <h5>Our Mission</h5>
              <p>
                To collaborate and consistently provide medical services at
                subsidized rates for the people of Igbajo, associated villages,
                and neighboring towns and cities for improved healthcare.
              </p>
            </Card>
          </Col>
          <Col xs={6}>
            <Card className="shadow p-3 mb-5 bg-white rounded">
              <img
                alt="about-icon"
                src={require("../assets/s1.png")}
                width="60px"
              />
              <h5>Our Vision</h5>
              <p>
                To be the first-ever successful community medical hub in Osun
                State and Nigeria.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </main>
  );
}

export default Donation;

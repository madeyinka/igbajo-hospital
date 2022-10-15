import React from "react";
import "./styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function About() {
  return (
    <main>
      <div className="breadcrumb">
        <h3>About Us</h3>
        <p>
          Home / <span>About us</span>
        </p>
      </div>
      {/* About */}
      <Container className="serv-sec">
        <Row>
          <Col xs={6}>
            <img
              alt="services"
              src={require("../assets/man2.png")}
              width="90%"
            />
          </Col>
          <Col xs={6}>
            <h5>ABOUT US</h5>
            <h3>
              Igbajo Baptist Medical <br /> Center
            </h3>
            <p>
              The history of Igbajo Baptist Medical Center goes back to 2014. It
              was wholly sponsored by the Igbajo Baptist Community. The
              hospital, which started well with firm support from the larger
              community, had qualified health workers. But later, faced with
              some challenges that necessitated upgrades and restructuring.{" "}
              <br />
              Hence, the clarion call for the new hospital. The new hospital is
              expected to serve the Igbajo community and nearby towns and
              villages.
              <br />
              The Igbajo Baptist Medical Center covers about 705 square meters
              of floor space. The floor space is divided into three parts. On
              the central wing are the waiting area, the nursing station/record,
              the offices of doctors and nurses, and a multipurpose room. The
              left wing comprises 2 consulting rooms, an observatory room, an
              equipment room, and an operating room. The pharmacy, side
              laboratory, treatment/injection room, and 2 call rooms are on the
              right wing. With the floor plan conceptualized in the shape of a
              cross, a symbol of healing, the entire project was conceived to be
              expanded into a more extensive health facility as the need arises.
            </p>
          </Col>
        </Row>
      </Container>
      {/* // Services Section */}

      <section className="about">
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
                  subsidized rates for the people of Igbajo, associated
                  villages, and neighboring towns and cities for improved
                  healthcare.
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
      </section>
      {/* Home contact form */}
      <section className="news">
        <center>
          <h5>CORE VALUES</h5>
        </center>
        <Row>
          <Col xs={4} className="activity">
            <div className="act-img">
              <img src={require("../assets/act1.png")} alt="activity" />
            </div>
            <div className="act-details">
              <h3>Collaboration</h3>
              <p>
                To us, collaboration means ‘listening and evolving together,
                helping and supporting each other for the sake of a collective
                goal; reciprocity.’
              </p>
            </div>
          </Col>
          <Col xs={4} className="activity">
            <div className="act-img">
              <img src={require("../assets/act2.png")} alt="activity" />
            </div>
            <div className="act-details">
              <h3>consistency</h3>
              <p>
                To us, consistency in our efforts leads to self-discipline,
                teaches self-control, improves overall personality, and builds
                momentum.
              </p>
            </div>
          </Col>
          <Col xs={4} className="activity">
            <div className="act-img">
              <img src={require("../assets/act3.png")} alt="activity" />
            </div>
            <div className="act-details">
              <h3>Sustainability</h3>
              <p>
                As a social enterprise, we are committed to sustainability,
                which includes cost savings, lower risks, supply chain security,
                access to new markets, customer loyalty, and overall enhanced
                brand value.
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <Container className="faq">
        <h3>Frequently Asked Questions</h3>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Igbaja Hospital about ?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </main>
  );
}

export default About;

import React from "react";
import "./styles.css";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";

function Contact() {
  return (
    <main>
      <div className="breadcrumb">
        <h3>Contact Us</h3>
        <p>
          Home / <span>Contact us</span>
        </p>
      </div>
      <section className="about">
        <Container className="abt-sec">
          <h5>SEND MESSAGE</h5>
          <h3>Send us a message for any query</h3>
          <Row>
            <Col xs={6} className="d-right shadow p-5 text-left">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      size="lg"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3" style={{ marginTop: "0px" }}>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Control
                      size="lg"
                      placeholder="Your phone number here"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSubject">
                    <Form.Control size="lg" placeholder="Subject" />
                  </Form.Group>
                </Row>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    size="lg"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <Button variant="primary" type="submit" w-100>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col xs={6}>
              <div className="cont-details">
                <div className="cont-img">
                  <img
                    src={require("../assets/m1.png")}
                    alt="opase"
                    width={"40px"}
                  />
                </div>
                <div className="cont-dt">
                  <h3>Address</h3>
                  <p>
                    Igbajo Baptist Medical Center Alabidun Hill, Igbajo, Osun
                    State, Nigeria
                  </p>
                </div>
              </div>
              <div className="cont-details">
                <div className="cont-img">
                  <img
                    src={require("../assets/m2.png")}
                    alt="opase"
                    width={"50px"}
                  />
                </div>
                <div className="cont-dt">
                  <h3>Email</h3>
                  <p>info@igbajobmc.org.ng</p>
                </div>
              </div>
              <div className="cont-details">
                <div className="cont-img">
                  <img
                    src={require("../assets/m3.png")}
                    alt="opase"
                    width={"50px"}
                  />
                </div>
                <div className="cont-dt">
                  <h3>Phone numbers</h3>
                  <p>+44 587 154756 // +55 5555 14574</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Contact;

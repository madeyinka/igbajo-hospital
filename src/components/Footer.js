import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="newsletter">
          <Col xs={6}>
            {" "}
            <h2>Join Our Newsletter</h2> <br />{" "}
            <p style={{ marginTop: "-20px" }}>
              Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </Col>
          <Col xs={6}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter your email address"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col xs={4}>
            <h4>Donation Info</h4>
            <ul className="list-unstyled">
              <li>
                <p>Bank Name : Zenith Bank</p>
              </li>
              <li>
                <p>Account Number: 1214564605</p>
              </li>
              <li>
                <p>Acount Name : Igbaja Baptist Medical Center</p>
              </li>
            </ul>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </Col>
          <Col xs={3}>
            <h4>Services</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/fitness">Fitness work</Link>
              </li>
              <li>
                <Link to="/general-consultation">General Consultation</Link>
              </li>
              <li>
                <Link to="/laboratory">Laboratory services</Link>
              </li>
              <li>
                <Link to="/general-health">General health service</Link>
              </li>
              <li>
                <Link to="/inpatient">Inpatient and outpatient services</Link>
              </li>
            </ul>
          </Col>
          <Col xs={2}>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Service</Link>
              </li>
              <li>
                <Link to="/department">Department</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/blog">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          <Col xs={3}>
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <p>
                  Igbajo Baptist Medical Center Alabidun Hill, Igbajo, Osun
                  State, Nigeria .
                </p>
              </li>
              <li>
                <Link to="tel:/+234 2345 6789 789">+234 2345 6789 789</Link>
              </li>
              <li>
                <Link to="mailto:info@igbajobmc.org.ng ">
                  info@igbajobmc.org.ng
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr />
      <center>
        <p>
          © 2022 Copyright.{" "}
          <strong style={{ color: "#fff" }}>Igbabaptistmedicalcenter</strong>
        </p>
      </center>
    </footer>
  );
}

export default Footer;

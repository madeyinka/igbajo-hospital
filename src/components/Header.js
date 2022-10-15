import React from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Container,
  Button,
  Offcanvas,
  Form,
  NavDropdown,
} from "react-bootstrap";
import "./styles.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="app-header w-100" fixed="top">
        <Row className="info-header">
          <Col xs={2}>
            <img alt="logo" src={require("../assets/logo.png")} width="100%" />
          </Col>
          <Col xs={10}>
            <div className="personal-info">
              <i className="fas fa-phone"></i>
              <p> +234 2345 6789 789</p>
              <i className="fas fa-envelope"></i>
              <p> info@igbajobmc.org.ng</p>
              <i className="fas fa-map"></i>
              <p>
                Igbajo Baptist Medical Center Alabidun Hill, Igbajo, Osun State,
                Nigeria .
              </p>
            </div>
          </Col>
        </Row>
        <Row className="main-header shadow p-1 mb-5 bg-white rounded">
          <Col xs={2}></Col>
          <Col xs={10}>
            <Navbar bg="white" variant="light">
              <Container>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/about">
                      About Us
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/directors">
                      Board of Directors
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/management">
                      Management
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/services">
                    Services
                  </Nav.Link>
                  <Nav.Link as={Link} to="/department">
                    Departments
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blog">
                    Blog
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact us
                  </Nav.Link>
                </Nav>
                <Button className="var-primary" as={Link} to="/donation">
                  Donate
                </Button>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </div>

      <Container className="mobile">
        <Navbar
          bg="white"
          fixed="top"
          collapseOnSelect
          expand="false"
          className="shadow"
        >
          <Navbar.Brand as={Link} to="/" exact>
            <img
              src={require("../assets/logo.png")}
              alt="brand-logo"
              width={"100px"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img
                  src={require("../assets/logo.png")}
                  alt="brand-logo"
                  width={"100px"}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" eventKey="1">
                  Home
                </Nav.Link>
                <NavDropdown title="About" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/about">
                    About Us
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/directors">
                    Board of Directors
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/management">
                    Management
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/services" eventKey="3">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/department" eventKey="4">
                  Departments
                </Nav.Link>
                <Nav.Link as={Link} to="/blog" eventKey="5">
                  Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" eventKey="6">
                  Contact Us
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Nav.Link
                  className="outline-success"
                  as={Link}
                  to="/contact"
                  eventKey="6"
                >
                  <Button variant="primary">Donate</Button>
                </Nav.Link>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;

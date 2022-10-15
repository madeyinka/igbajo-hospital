import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";
// import Testimonials from "./Testimonials";
import DepartmentCarousel from "./DepartmentCarousel";

function Home() {
  return (
    // Banner Section
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img alt="banner" src={require("../assets/banner.jpg")} />
          <Carousel.Caption>
            <h5>LABORATORY SERVICES</h5>
            <h3>
              Your health is our <br /> top priority
            </h3>
            <p>
              We provide medical services at subsidized rates for the people of
              Igbajo, associated villages, and neighboring towns for improved
              healthcare
            </p>
            <Button variant="primary" as={Link} to="/donation">
              Donate
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img alt="banner" src={require("../assets/banner.jpg")} />
          <Carousel.Caption>
            <h5>LABORATORY SERVICES</h5>
            <h3>
              We are commited to <br /> Sustainability
            </h3>
            <p>
              As a social enterprise, we are committed to sustainability which
              includes cost savings, lower risks, supply chain security,
              customer loyalty, and overall enhanced brand value.
            </p>
            <Button variant="primary" as={Link} to="/donation">
              Donate
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img alt="banner" src={require("../assets/banner.jpg")} />
          <Carousel.Caption>
            <h5>LABORATORY SERVICES</h5>
            <h3>
              The making of a <br /> medical hub
            </h3>
            <p>
              Our vision is to be the first-ever successful community medical
              hub in Osun State and Nigeria.
            </p>
            <Button variant="primary" as={Link} to="/donation">
              Donate
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* // Services Section */}

      <section className="about">
        <Container className="abt-sec">
          <h5>OUR SERVICES</h5>
          <h3>Your Health is our top Priority</h3>
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
          </Row>
          <center className="serv-link">
            <p>
              We hope you will allow us to care for you and strive to be the
              first and best choice for healthcare.{" "}
            </p>
            <Link to="/department">See more Services</Link>
          </center>
        </Container>
      </section>
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
          <Col xs={6} className="serv-right-about">
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
              <br />
              Hence, the clarion call for the new hospital. The new hospital is
              expected to serve the Igbajo community and nearby towns and
              villages.{" "}
            </p>
            <Link to="/about">
              <Button variant="primary" to="/about">
                Learn More
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      {/* Departments */}
      <section className="department">
        <Row>
          <Col xs={6} className="d-left">
            <h6>DEPARTMENTS</h6>
            <h3>
              To collaborate and consistently provide medical services at
              subsidized rates for the people of Igbajo,
            </h3>
          </Col>
          <Col xs={6} className="d-right">
            <p>
              The Igbajo Baptist Medical Center covers about 705 square meters
              of floor space. The floor space is divided into three parts. On
              the central wing are the waiting area, the nursing station/record,
              the offices of doctors and nurses, and a multipurpose room. <br />
              <br /> The left wing comprises 2 consulting rooms, an observatory
              room, an equipment room, and an operating room.{" "}
            </p>
            <div className="d-btn">
              <Link to="/department">
                <Button variant="primary" as={Link} to="/department">
                  View All
                </Button>
              </Link>
              <Button className="outline-success" as={Link} to="/donation">
                Donate Now
              </Button>
            </div>
          </Col>
          <Container className="dept">
            <DepartmentCarousel />
          </Container>
        </Row>
      </section>
      {/* board members */}
      <section className="about1">
        <Container className="abt-sec1">
          <h5>BOARD MEMBERS</h5>
          <h3>Meet Our Qualified Board Members</h3>
          <Row>
            <Col xs={4}>
              <Card className="shadow mb-5 bg-white rounded board">
                <Card.Img a variant="top" src={require("../assets/b1.png")} />
                <Card.Body>
                  <Card.Title>
                    Asiwaju Adegboyega Solomon Awomolo SAN Chairman, <br />
                    <small>Igbajo Baptist Hospital Building Committee</small>
                  </Card.Title>{" "}
                  <br />
                  <Card.Text>+</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="shadow mb-5 bg-white rounded board">
                <Card.Img a variant="top" src={require("../assets/b2.png")} />
                <Card.Body>
                  <Card.Title>
                    Sola Fanawopo <br />
                    <small>Member</small>
                  </Card.Title>{" "}
                  <br />
                  <Card.Text>+</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="shadow mb-5 bg-white rounded board">
                <Card.Img a variant="top" src={require("../assets/b3.png")} />
                <Card.Body>
                  <Card.Title>
                    Rev. Dr. Paul Kolawole Oladapo
                    <br />
                    <small>
                      Member
                    </small>
                  </Card.Title>{" "}
                  <br />
                  <Card.Text>+</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* tESTIMONIALS */}
      {/*  <section className="about">
        <Container className="abt-sec">
          <h5>TESTIMONIALS</h5>
          <h3>
            See What Customers Are Saying <br /> About Us
          </h3>
          <Testimonials />
        </Container>
      </section> */}
      {/* Home contact form */}
      <section className="news">
        <Row>
          <Col xs={6} className="d-left">
            <h6>CONTACT FORM</h6>
            <h3>We’re Helping Today. Helping Tommorow</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              vel platea at etiam massa odio cursus vivamus. Amet eget id at
              pellentesque. Ornare habitant urna sagittis, donec in turpis quam.
              Dictumst eleifend duis molestie vulputate. Non sit. <br />
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum id interdum diam, leo sagittis. Eget leo aenean ornare
              faucibus sapien sit feugiat cras.{" "}
            </p>
          </Col>
          <Col xs={6} className="d-right">
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

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control size="lg" placeholder="Your phone number here" />
              </Form.Group>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  size="lg"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </section>
      {/* blog section */}
      <section className="about">
        <Container className="blog-sec">
          <h5>BLOG</h5>
          <h3>Articles & Insight</h3>
          <Row>
            <Col xs={4}>
              <Card className="shadow mb-5 bg-white rounded">
                <Card.Img
                  a
                  variant="top"
                  src={require("../assets/blog1.png")}
                />
                <Card.Body>
                  <p>
                    By: <span style={{ color: "#0046C0" }}>John Smith</span> /
                    June 19, 2021
                  </p>
                  <Card.Title>
                    250+ Medical Tips We Just Had to Share
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="shadow mb-5 bg-white rounded">
                <Card.Img variant="top" src={require("../assets/blog2.png")} />
                <Card.Body>
                  <p>
                    By: <span style={{ color: "#0046C0" }}>John Smith</span> /
                    June 19, 2021
                  </p>
                  <Card.Title>
                    12 Ways You Can Cut Your Prescription Costs
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="shadow mb-5 bg-white rounded">
                <Card.Img variant="top" src={require("../assets/blog3.png")} />
                <Card.Body>
                  <p>
                    By: <span style={{ color: "#0046C0" }}>John Smith</span> /
                    June 19, 2021
                  </p>
                  <Card.Title>
                    10 Tips to Live Better With Psoriatic Arthritis
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;

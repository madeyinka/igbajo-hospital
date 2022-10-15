import React from "react";
import "./styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Blog() {
  return (
    <main>
      <div className="breadcrumb">
        <h3>News & Articles</h3>
        <p>
          Home / <span>Blog</span>
        </p>
      </div>
      <section className="about">
        <Container className="blog-sec">
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
    </main>
  );
}

export default Blog;

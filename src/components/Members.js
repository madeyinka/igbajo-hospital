import React from "react";
import "./styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Members() {
  return (
    <main>
      <div className="breadcrumb">
        <h3>Board Members</h3>
        <p>
          Home / <span>Board Members</span>
        </p>
      </div>
      <section>
        <Container>
          <Row>
            <Col xs={4}>
              <Card className="shadow mb-5 bg-white rounded board">
                <Card.Img
                  a
                  variant="top"
                  src={require("../assets/board.png")}
                />
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
                <Card.Img
                  a
                  variant="top"
                  src={require("../assets/board.png")}
                />
                <Card.Body>
                  <Card.Title>
                    Rev. Dr. Gabriel O. A. Ajani (J.P.) <br />
                    <small>Senior Pastor, First Baptist Church Igbajo</small>
                  </Card.Title>{" "}
                  <br />
                  <Card.Text>+</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="shadow mb-5 bg-white rounded board">
                <Card.Img
                  a
                  variant="top"
                  src={require("../assets/board.png")}
                />
                <Card.Body>
                  <Card.Title>
                    Prof. Adewale Akinsola
                    <br />
                    <small>
                      Convention Director of Medical and Health Services
                    </small>
                  </Card.Title>{" "}
                  <br />
                  <Card.Text>+</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="shadow mb-5 bg-white rounded board">
                <Card.Img
                  a
                  variant="top"
                  src={require("../assets/board.png")}
                />
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
                <Card.Img
                  a
                  variant="top"
                  src={require("../assets/board.png")}
                />
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
                <Card.Img
                  a
                  variant="top"
                  src={require("../assets/board.png")}
                />
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
                <Card.Img
                  a
                  variant="top"
                  src={require("../assets/board.png")}
                />
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
                <Card.Img
                  a
                  variant="top"
                  src={require("../assets/board.png")}
                />
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
                <Card.Img
                  a
                  variant="top"
                  src={require("../assets/board.png")}
                />
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
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Members;

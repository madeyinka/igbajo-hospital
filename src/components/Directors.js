import React from "react";
import "./styles.css";
import { teamData } from "../assets/team/data";
import { Container, Row, Col, Card } from "react-bootstrap";

function Directors() {
  return (
    <main>
      <div className="breadcrumb">
        <h3>Board Members</h3>
        <p>
          Home / <span>DEVELOPMENT COMMITTEE</span>
        </p>
      </div>
      <section>
        <Container>
          <Row>
            { teamData.map((item) => {
              return (
                <Col xs={4} key={item.id}>
                  <Card className="shadow mb-5 bg-white rounded board">
                    <Card.Img a variant="top" src={item.image}  height="400px" />
                    <Card.Body>
                      <Card.Title>
                        {item.name} <br />
                        <small>{item.role}</small>
                      </Card.Title>{" "}
                      <br />
                      <Card.Text>+</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Directors;

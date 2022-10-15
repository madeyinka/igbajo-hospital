import React from "react";

import Carousel from "react-elastic-carousel";
import { Container, Card } from "react-bootstrap";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

function Testimonials() {
  return (
    <div className="testimonials-card">
      <Container>
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={"3000"}
        >
          <Card
            style={{ width: "30rem" }}
            className="testimonial shadow p-3 mb-3 bg-body rounded"
          >
            <div className="user-icon">
              <img
                src={require("../assets/user.png")}
                alt="user"
                width={"80px"}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              enim tristique mi nisl nulla. Morbi nunc consectetur varius lacus,
              blandit iaculis accumsan sollicitudin.
            </p>
            <h6>A.O Samson</h6>
            <p>UI/UX Designer</p>
          </Card>
          <Card
            style={{ width: "30rem" }}
            className="testimonial shadow p-3 mb-5 bg-body rounded"
          >
            <div className="user-icon">
              <img
                src={require("../assets/icon-female.png")}
                alt="user"
                width={"80px"}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              enim tristique mi nisl nulla. Morbi nunc consectetur varius lacus,
              blandit iaculis accumsan sollicitudin.
            </p>
            <h6>C. Confidence</h6>
            <p>Software Developer</p>
          </Card>
          <Card
            style={{ width: "30rem" }}
            className="testimonial shadow p-3 mb-5 bg-body rounded"
          >
            <div className="user-icon">
              <img
                src={require("../assets/user.png")}
                alt="user"
                width={"80px"}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              enim tristique mi nisl nulla. Morbi nunc consectetur varius lacus,
              blandit iaculis accumsan sollicitudin.
            </p>
            <h6>A.O Samson</h6>
            <p>UI/UX Designer</p>
          </Card>
          <Card
            style={{ width: "30rem" }}
            className="testimonial shadow p-3 mb-5 bg-body rounded"
          >
            <div className="user-icon">
              <img
                src={require("../assets/icon-female.png")}
                alt="user"
                width={"80px"}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              enim tristique mi nisl nulla. Morbi nunc consectetur varius lacus,
              blandit iaculis accumsan sollicitudin.
            </p>
            <h6>C. Confidence</h6>
            <p>Software Developer</p>
          </Card>
        </Carousel>
      </Container>
    </div>
  );
}

export default Testimonials;

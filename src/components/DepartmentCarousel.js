import React from "react";

//import Carousel from "react-elastic-carousel";
import { Card } from "react-bootstrap";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

function DepartmentCarousel() {
  return (
    <div className="testimonials-card deptcard">
      {/* <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={"3000"}>
        <Card className="shadow mb-5 p-5 bg-white rounded">
          <img src={require("../assets/an.png")} alt="d-1" width={"50px"} />
          <h5>Anaesthesia</h5>
          <p>
            The department is involved in the day-to-day provision of anesthesia
            and analgesia for all surgical operations performed in the hospital.
          </p>
        </Card>
        <Card className="shadow mb-5 p-5 bg-white rounded">
          <img src={require("../assets/d2.png")} alt="d-1" width={"50px"} />
          <h5>Community Health</h5>
          <p>
            The unit focuses more on the community population’s physical and
            mental health.
          </p>
        </Card>
        <Card className="shadow mb-5 p-5 bg-white rounded">
          <img src={require("../assets/d3.png")} alt="d-1" width={"50px"} />
          <h5>Dietetics</h5>
          <p>
            The department provides holistic Medical Nutrition Therapy (MNT) to
            patients with special dietary needs thereby facilitating their
            speedy recovery
          </p>
        </Card>
        <Card className="shadow mb-5 p-5 bg-white rounded">
          <img src={require("../assets/d4.png")} alt="d-1" width={"50px"} />
          <h5>Dental Services</h5>
          <p>
            The department focuses on patient education to prevent dental
            disease and provide treatment options for the same procedures
            offered in general and (some) specialty practices
          </p>
        </Card>
        <Card className="shadow mb-5 p-5 bg-white rounded">
          <img src={require("../assets/d5.png")} alt="d-1" width={"50px"} />
          <h5>Emergency Services</h5>
          <p>
            Our emergency department is the first point of contact for any
            critically ill patient, needing immediate medical attention
          </p>
        </Card>
        <Card className="shadow mb-5 p-5 bg-white rounded">
          <img src={require("../assets/d6.png")} alt="d-1" width={"50px"} />
          <h5>Family Medicine</h5>
          <p>
            The department provides comprehensive out-patient and in-patient
            care and intrapartum, postpartum, and newborn care.
          </p>
        </Card>
        <Card className="shadow mb-5 p-5 bg-white rounded">
          <img src={require("../assets/d7.png")} alt="d-1" width={"50px"} />
          <h5>Medical Records</h5>
          <p>
            This department organizes and manages health information data by
            ensuring its quality, accuracy, accessibility, and security in both
            paper and electronic systems.
          </p>
        </Card>
        <Card className="shadow mb-5 bg-white rounded">
          <img src={require("../assets/d8.png")} alt="d-1" width={"50px"} />
          <h5>Obstetrics and Gynaecology</h5>
          <p>
            We cater to the needs of women and children with the view of
            reducing morbidity and mortality in the community
          </p>
        </Card>
        <Card className="shadow mb-5 bg-white rounded">
          <img src={require("../assets/d9.png")} alt="d-1" width={"50px"} />
          <h5>Ophthalmology</h5>
          <p>
            This department diagnoses and treats diseases and disorders of the
            eye.
          </p>
        </Card>
        <Card className="shadow mb-5 bg-white rounded">
          <img src={require("../assets/d10.png")} alt="d-1" width={"50px"} />
          <h5>Orthopaedic and Trauma</h5>
          <p>
            Our trauma and orthopedic unit provide an elective service for
            patients with conditions that have developed over time and trauma
            service for patients who have been injured in accidents.
          </p>
        </Card>
      </Carousel> */}
    </div>
  );
}

export default DepartmentCarousel;

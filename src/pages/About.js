import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <p>
            Full stack developer with a Bachelor of Arts in English and creative arts from Texas A&M. Certificate in Full Stack Development from SMU with skills in HTML5, CSS, and JavaScript. Creative problem-solver that is always interested in learning more to develop user-friendly designs.
            </p>
            <p>
              Strengths include creativity, executing client vision, and detail-oriented solutions. I have earned employee of the year at a previous position, my grade average in the course is an A+, and I developed a web application for an assignment that can save user input in local storage and populate on page load.
            </p>
            <p>
              Dedicated and detail-oriented with a history of coordinating with other departments within companies I have worked for in the past. Very meticulous and interested in fulfilling the design in the cleanest and clearest ways possible.
            </p>
            <p>
              I want to help clients with designing websites that fulfill the need to impress while also being easy to use and understandable. After all, a website isn't going to do much good if the user can't figure out how it works!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Skills() {
  return (
    <Container style={{ marginTop: 30 }}>
      <div className="card left" style={{width: "100%"}}>
        <div className="card-body">
          <ul>
            <Row align={"center"} padding={"10px"}>
              <Col><i className="fab fa-html5"></i> HTML5</Col>
              <Col><i className="fab fa-css3-alt"></i> CSS3</Col>
              <Col><i className="fab fa-js-square"></i> JavaScript</Col>
              <Col><i className="icon-nodejs"></i> Node.js</Col>
              <Col><i className="fab fa-github-square"></i> GitHub</Col>
              <Col><i className="fab fa-react"></i> React</Col>
            </Row>
            <Row align={"center"} padding={"10px"}>
              <Col><i className="icon-mysql"></i> MySQL</Col>
              <Col><i className="icon-mongodb"></i> MongoDB</Col>
              <Col><i className="fab fa-bootstrap"></i> Bootstrap</Col>
              <Col><i className="icon-heroku"></i> Heroku</Col>
              <Col><i className="icon-jquery"></i> JQuery</Col>
            </Row>
            <Row align={"center"} padding={"10px"}>
              <Col>Express</Col>
              <Col>Handlebars.js</Col>
              <Col>MaterializeCSS</Col>
            </Row>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Skills;
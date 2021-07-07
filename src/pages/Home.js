import React from 'react';
import "./style.css";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
    return <>
    <article id="home">
        <Row>
            <Col>
                <span className="homeText">
                    <h1>I'm Ashley!</h1>
                    <h3>My name is Ashley Wright, a full stack web developer currently working through the SMU Coding Bootcamp.
                    <br/><br/>
                    Please take a look around and don't hesitate to reach out for further information!</h3>
                </span>
            </Col>
            <Col>
                <img className="responsive-img" src="https://ashleyaggie.github.io/Portfolio/assets/images/selfPhoto.jpg" alt="Ashley, a blonde woman."/>
            </Col>
            
        </Row>

    </article>
    </>
};


export default Home;
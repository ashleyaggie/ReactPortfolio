import React from 'react';
import "./style.css";
import Row from "../Row";
import Card from "../Card";
import CardBtn from "../CardBtn";

// function onClickWeb(props) {
//     window.location=props.website
// };

// function onClickRepo(props) {
//     window.location=props.repo
// };

function Project(props) {
    return <>
    <div>
        <Row>
            <Card>
                <a href={props.website} target="_blank" rel="noreferrer" ><img className="card-img" src={props.image} alt={props.desc}/></a>
            </Card>
            <Card direction="card right">
                <span className="card-title">{props.title}</span>
                <p className="light-blue darken-4">{props.desc}</p>
                <CardBtn {...props} dataType="Website" link={props.website} />
                <CardBtn {...props} dataType="Repo" direction="btn right" link={props.repo} />
            </Card>
        </Row>
    </div>
    </>
};


export default Project;
import React from 'react';
import "./style.css";
import Row from "../Row";
import Card from "../Card";
import CardBtn from "../CardBtn";

function Project(props) {
    return <>
    <div>
        <Row>
            <Card>
                <a href={props.website} target="_blank" rel="noreferrer" ><img className="card-img" src={props.image} alt={props.desc}/></a>
            </Card>
            <Card direction="card right">
                <span className="card-title">{props.title}</span>
                <p className="desc-bg">{props.desc}</p>
                <CardBtn {...props} dataType="WEBSITE" link={props.website} />
                <CardBtn {...props} dataType="REPO" direction="btn right" link={props.repo} />
            </Card>
        </Row>
    </div>
    </>
};


export default Project;
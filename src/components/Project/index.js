import React from 'react';
import Row from "../Row";
import Card from "../Card";
import CardBtn from "../CardBtn";

function Project(props) {
    console.log(props);
    return <>
    <div>
        <Row>
            <Card>
                <a href={props.website} target="_blank" rel="noreferrer" ><img src={props.image} alt={props.desc}/></a>
            </Card>
            <Card direction="card right">
                <span class="card-title">{props.title}</span>
                <p class="light-blue darken-4">{props.desc}</p>
                <CardBtn {...props} dataType="website" />
                <CardBtn {...props} dataType="repo" direction="btn right" />
            </Card>
        </Row>
    </div>
    </>
};


export default Project;
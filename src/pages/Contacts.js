import React from "react";
import Container from '../components/Container';
import "./style.css";

function Contacts() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
      <div className="card left" style={{width: "100%"}}>
        <div className="card-body">
          <p>Thank you for taking an interest in my work and designs. I look forward to working with you and
            building up your website to suit your needs. Again, please do not hesitate to reach out. Thank you!
          </p>
          <ul>
            <li><a href="../images/AshleyWright21.pdf" target="_blank" rel="noreferrer">Resume (Downloadable PDF)</a></li>
            <li><a href="https://github.com/ashleyaggie" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/ashley-wright-580471105/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>Email: ashleyaggie@aol.com</li>
            <li>Phone: 214-679-8064</li>
          </ul>
        </div>
      </div>
        
      </Container>
    </div>
  );
}

export default Contacts;

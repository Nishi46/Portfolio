import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Nishi Kantamneni </span>
            from <span className="green"> California.</span>
            <br />
            I am currently a computer and informations sciences major at Cornell University.
            <br />
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and watching movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nishi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;



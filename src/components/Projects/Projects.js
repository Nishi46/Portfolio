import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Monopoly from "../../Assets/Projects/Monopoly.png";
import IPL from "../../Assets/Projects/ipl.png";
import CV from "../../Assets/Projects/cv.png";
import covid from "../../Assets/Projects/covid_map.png";
import Jeopardy from "../../Assets/Projects/jeopardy.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Monopoly}
              isBlog={false}
              title="Termal-Based-Monopoly"
              description="A command line implementation of the classic board game 'Monopoly' in OCaml."
              ghLink="https://github.com/Nishi46/monopoly_project"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IPL}
              isBlog={false}
              title="IPL Data Visualization"
              description="A visualization if IPL(cricket) dta in an easy-to-read form."
              ghLink="https://github.com/Nishi46/IPL_visualization"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CV}
              isBlog={false}
              title="Simple Computer Vision"
              description="Simple Computer Vision: placing tracker boxes around the images and labelling the boxes with numbers."
              ghLink="https://github.com/Nishi46/Computer_Vision"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="COVID Mortality Map"
              description="A geographical map of the COVID data points."
              ghLink="https://github.com/Nishi46/COVID_mortality_mapI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jeopardy}
              isBlog={false}
              title="Jeopardy"
              description="Play Jeopardy styled game"
              ghLink="https://github.com/Nishi46/Jeopardy_database"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    await fetch("https://git-scraper.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify("newan0805"),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
};

useEffect(() => {
  fetchData();
}, []);

return (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h2>Projects & Details</h2>
                <p>
                  I have completed many projects by myself for other developer
                  or to customers as well. My projects and all resources i have
                  and i am uploading to my GitHub. From this section my projects
                  would be reviled.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <p>
                        I am a person who love to learn always and inovate new
                        things for society and for developers. Daily basis i am
                        learning new things and exploring new inventions. I have
                        made new inventions and for programing and software
                        development i made my portfolio and link it with my{" "}
                        <a href="https://github.com/newan0805">GitHub</a> to
                        view my major and relised projects.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        <ul>
                          <li>
                            <dt>GCE O/L Examination (2019) -</dt>
                            <dd>Higher passes with an excellence outcome.</dd>
                          </li>
                          <li>
                            <dt>Diploma in Information Technology (2019) -</dt>
                            <dd>
                              Completed the Diploma at ICBT Nugegoda campus.
                              Received higher passes with excellence outcome.
                            </dd>
                          </li>
                          <li>
                            <dt>
                              HND in Computing & Software Engineering (2020 May
                              - 2021 November) -
                            </dt>
                            <dd>
                              Completed the Diploma at ICBT Nugegoda campus with
                              practical sessions and examinations. Graduated in
                              March 2022 with a preferred.
                            </dd>
                          </li>
                        </ul>
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {data.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img
      className="background-image-right"
      alt="image12"
      src={colorSharp2}
    ></img>
  </section>
);}

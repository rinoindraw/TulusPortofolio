import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React, { useState } from "react";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TrackVisibility from "react-on-screen";
import "./project.css";
import work1 from "../../assets/img/portotulus1.jpeg";
import work2 from "../../assets/img/datascient.png";

export const Project = () => {
  const projects = [
    {
      title: "Tulus Porto",
      description: "Tulus Porto",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Tulus Porto",
      description: "Tulus Porto",
      imgUrl: work2,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Tulus Porto",
      description: "Tulus Porto",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Tulus Porto",
      description: "Tulus Porto",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
  ];
  const secondtab = [
    {
      title: "Logo Designer",
      description: "Graphic Designer",
      imgUrl: work1,
      tabType: "secondtab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Creative Poster",
      description: "Graphic Designer",
      imgUrl: work1,
      tabType: "secondtab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Logo Designer",
      description: "Graphic Designer",
      imgUrl: work1,
      tabType: "secondtab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Logo Designer",
      description: "Graphic Designer",
      imgUrl: work1,
      tabType: "secondtab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
  ];
  const thirdtab = [
    {
      title: "Home",
      description: "UI/UX Designer",
      imgUrl: work1,
      tabType: "thirdtab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Details",
      description: "UI/UX Designer",
      imgUrl: work1,
      tabType: "thirdtab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Keranjang",
      description: "UI/UX Designer",
      imgUrl: work1,
      tabType: "thirdtab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Konfirmasi",
      description: "UI/UX Designer",
      imgUrl: work1,
      tabType: "thirdtab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
  ];
  const webtab = [
    {
      title: "SARI Technology System Login Web",
      description: "Web Developer",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "SARI Technology System Login Web",
      description: "Web Developer",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Profile React Js",
      description: "Web Developer",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Bookshelf App",
      description: "Web Developer",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
  ];
  const fifthtab = [
    {
      title: "SARI Technology System Login Web",
      description: "Web Developer",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "SARI Technology System Login Web",
      description: "Web Developer",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Profile React Js",
      description: "Web Developer",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
    {
      title: "Bookshelf App",
      description: "Web Developer",
      imgUrl: work1,
      tabType: "firsttab",
      overview:
        "Lorem ipsum dolor sit amet, usu cu alterum nominavi lobortis. At duo novum diceret. Tantas apeirian vix et, usu sanctus postulant inciderint ut, populo diceret necessitatibus in vim. Cu eum dicam feugiat noluisse.",
        github: "https://github.com/rinoindraw/WebChat"
    },
  ];
  const [lightboxData, setLightboxData] = useState({
    image: null,
    overview: null,
    title: null,
    github: null
  });

  const closeLightbox = () => {
    setLightboxData({ image: null, overview: null, title: null, github: null});
  };

  const openLightbox = (image, overview, title, github) => {
    // console.log("Opening lightbox:", image, overview);
    setLightboxData({ image, overview, title, github });
  };

  //   const openLightboxUx = (image, overview) => {
  //     console.log('Opening lightbox (UX):', image, overview);
  //     setLightboxData({ image, overview });
  //   };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__lightSpeedInLeft"
                      : ""
                  }
                >
                  <h2>Projects</h2>
                  <div className="linkproject">
                    <a
                      href="https://github.com/Jendma"
                      target="_blank"
                      className="icons"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="fourth">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item className="flex-fill">
                  <Nav.Link eventKey="fourth">Computer Vision</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-fill">
                  <Nav.Link eventKey="first">
                    Natural Language Processing
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-fill">
                  <Nav.Link eventKey="second">Predictive Analytics</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-fill">
                  <Nav.Link eventKey="third">
                    Data Analytics & Visualization
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-fill">
                  <Nav.Link eventKey="fifth">SQL</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row className="firsttab">
                    {webtab.map((project, index) => (
                      <Col key={index} xs={11} md={4} className="mx-auto mb-5">
                        <ProjectCard
                          {...project}
                          onClick={() =>
                            openLightbox(project.imgUrl, project.overview, project.title, project.github)
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row className="thirdtab">
                    {projects.map((project, index) => (
                      <Col key={index} xs={10} md={4} className="mx-auto mb-5">
                        <ProjectCard
                          {...project}
                          onClick={() =>
                            openLightbox(project.imgUrl, project.overview, project.title, project.github)
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row className="thirdtab">
                    {thirdtab.map((project, index) => (
                      <Col key={index} xs={10} md={4} className="mx-auto mb-5">
                        <ProjectCard
                          {...project}
                          onClick={() =>
                            openLightbox(project.imgUrl, project.overview, project.title, project.github)
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="secondtab">
                    {secondtab.map((project, index) => (
                      <Col key={index} xs={11} md={4} className="mx-auto mb-5">
                        <ProjectCard
                          {...project}
                          onClick={() =>
                            openLightbox(project.imgUrl, project.overview, project.title, project.github)
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Row className="fifthtab">
                    {fifthtab.map((project, index) => (
                      <Col key={index} xs={11} md={4} className="mx-auto mb-5">
                        <ProjectCard
                          {...project}
                          onClick={() =>
                            openLightbox(project.imgUrl, project.overview, project.title, project.github)
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        {lightboxData.image && (
          <div className="overlay-container" onClick={closeLightbox}>
            <div className="overlay-content">
              <div className="project-container-overlay">
                <img
                  src={lightboxData.image}
                  alt="Selected Project"
                  className="overlay-image"
                />
                <div className="text-card-wrapper">
                  <h4>{lightboxData.title}</h4>
                  <p>{lightboxData.overview}</p>
                  <a
                      href={lightboxData.github}
                      target="_blank"
                      className="icons"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

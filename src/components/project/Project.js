import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React, { useState } from "react";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TrackVisibility from "react-on-screen";
import "./project.css";
import teethCare from "../../assets/img/teethcare.png";
import nlp from "../../assets/img/nlp.jpg";
import geneExpression from "../../assets/img/dataset-cover.png";
import healthBoard from "../../assets/img/healthboard.png";
import xgboost from "../../assets/img/xgboost.png";
import sqlSystem from "../../assets/img/sqlsystem.jpg";

export const Project = () => {
  const computerVision = [
    {
      title: "TeethCare",
      description: "Capstone Project, Bangkit Academy",
      imgUrl: teethCare,
      overview:
        "Constructed a Computer Vision model for image classification, utilizing the Efficientnet V2M model architecture. This model was specifically trained to classify dental diseases in this project, achieving an AUC score of 88.98%.",
      github: "https://github.com/Jendma/TeethCare-Machine-Learning",
    },
  ];
  const predictiveAnalytics = [
    {
      title: "Gene Expression",
      description: "Data Science Genome",
      imgUrl: geneExpression,
      overview:
        "Implemented K-means and Hierarchical clustering models for brain cancer gene expression analysis.\n" +
        "Constructed Logistic Regression and XGBoost Classifier models for classifying brain cancer gene expression.\n" +
        "Utilized differential expression and statistical methods to identify genes with altered expression levels in breast cancer gene expression.",
      github: "https://github.com/Jendma/Academic/tree/main/Data%20Science%20Genom",
    },
    {
      title: "Inefficient Claim Detection",
      description: "Machine Learning",
      imgUrl: xgboost,
      overview:
        "Implemented an XGBoost model to classify claim inefficiencies among BPJS Kesehatan participants.\n" +
        "The model demonstrated high performance with an accuracy score of 99.4% and a precision score of 95.2%.",
      github: "https://github.com/Jendma/Journey/tree/main/Healthkathon%20BPJS%20Kesehatan%202022",
    },
  ];
  const dataAnalyticsVisualization = [
    {
      title: "HealthBoard",
      description: "Data Analytics and Visualization",
      imgUrl: healthBoard,
      overview:
        "Pioneered the development of informative and interactive dashboards, leveraging geographic data to foster a culture of data-driven decision-making.\n" +
        "Created dashboards to visualize demographic information, facility preferences, and health issue distribution of BPJS Kesehatan participants.",
      github: "https://github.com/Jendma/Journey/tree/main/Healthkathon%20BPJS%20Kesehatan%202023",
    },
  ];
  const naturalLanguageProcessing = [
    {
      title: "Sentiment Analysis Topic Detection",
      description: "Web Mining",
      imgUrl: nlp,
      overview:
        "Constructed NLP models for Sentiment Analysis and Topic Detection, specifically analyzing tweets about ChatGPT from March 2023.\n" +
        "Developed a Sentiment Analysis model using the BERT Pretrained model, achieving an accuracy score of 88% on tweets about the 2014 Presidential Election.",

      github: "https://github.com/Jendma/Academic/tree/main/Web%20Mining",
    },
  ];
  const sqlTab = [
    {
      title: "E-commerce System Database",
      description: "Database",
      imgUrl: sqlSystem,
      overview:
        "Developed an e-commerce database to aid management decisions.\n" +
        "Utilizing SQLite software and Google Colab's sqlite3 module for data wrangling, database creation, and data analysis.",
      github: "https://github.com/Jendma/Academic/tree/main/Database%20for%20Data%20Science",
    },
  ];
  const [lightboxData, setLightboxData] = useState({
    image: null,
    overview: null,
    title: null,
    github: null,
  });

  const closeLightbox = () => {
    setLightboxData({ image: null, overview: null, title: null, github: null });
  };

  const openLightbox = (image, overview, title, github) => {
    // console.log("Opening lightbox:", image, overview);
    setLightboxData({ image, overview, title, github });
  };

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
                      ? "animate__animated animate__flipInY"
                      : ""
                  }
                >
                  <h2>Projects</h2>
                  <div className="linkproject">
                    <a
                      href="https://github.com/Jendma?tab=repositories"
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
                    {naturalLanguageProcessing.map((project, index) => (
                      <Col key={index} xs={11} md={4} className="mx-auto mb-5">
                        <ProjectCard
                          {...project}
                          onClick={() =>
                            openLightbox(
                              project.imgUrl,
                              project.overview,
                              project.title,
                              project.github
                            )
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row className="thirdtab">
                    {computerVision.map((project, index) => (
                      <Col key={index} xs={10} md={4} className="mx-auto mb-5">
                        <ProjectCard
                          {...project}
                          onClick={() =>
                            openLightbox(
                              project.imgUrl,
                              project.overview,
                              project.title,
                              project.github
                            )
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row className="thirdtab">
                    {dataAnalyticsVisualization.map((project, index) => (
                      <Col key={index} xs={10} md={4} className="mx-auto mb-5">
                        <ProjectCard
                          {...project}
                          onClick={() =>
                            openLightbox(
                              project.imgUrl,
                              project.overview,
                              project.title,
                              project.github
                            )
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="secondtab">
                    {predictiveAnalytics.map((project, index) => (
                      <Col key={index} xs={11} md={5} className="mx-auto mb-5">
                        <ProjectCard
                          {...project}
                          onClick={() =>
                            openLightbox(
                              project.imgUrl,
                              project.overview,
                              project.title,
                              project.github
                            )
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Row className="fifthtab">
                    {sqlTab.map((project, index) => (
                      <Col key={index} xs={11} md={4} className="mx-auto mb-5">
                        <ProjectCard
                          {...project}
                          onClick={() =>
                            openLightbox(
                              project.imgUrl,
                              project.overview,
                              project.title,
                              project.github
                            )
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
                  <ul>
                    {lightboxData.overview.split("\n").map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}{" "}
                  </ul>
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

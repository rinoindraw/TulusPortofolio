import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import healthkaton from "../../assets/img/healthkathon.png";
import bpjs2022 from "../../assets/img/bpjs2022.png";
import "./achievement.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Achievement = () => {
  const experiences = [
    {
      company: "BPJS Kesehatan",
      award: "3rd Winner of Healthkathon 2022",
      categories: "Machine Learning Category",
      logo: bpjs2022,
      title: "Healthkathon 2022",
    },
    {
      company: "BPJS Kesehatan",
      award: "Top 45, Final Stage of Healthkathon 2023",
      categories: "Data Analytics dan Visualization Category",
      logo: healthkaton,
      title: "Healthkathon 2023",
    },
  ];

  return (
    <section className="ach-experience" id="achievement">
      <Container>
        <Row className="align-items-center justify-content-center dflex">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__flipInX" : ""
                }
              >
                <h2>Achievement</h2>
              </div>
            )}
          </TrackVisibility>
          {experiences.map((experience, index) => (
            <React.Fragment key={index}>
              <Col
                xs={12}
                sm={12}
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="company-logo">
                  <img src={experience.logo} alt={experience.company} />
                  <div className="logo-hover">
                    <h4>{experience.title}</h4>
                  </div>
                </div>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={5}
                className="d-flex align-items-center justify-content-center"
              >
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__slideInRight"
                          : ""
                      }
                    >
                      <div className="company-details">
                        <h3>{experience.award}</h3>
                        <h5 className="bold-company-ach">
                          {experience.categories}
                        </h5>
                        <h5 className="bold-company-ach">
                          {experience.company}
                        </h5>
                      </div>
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </section>
  );
};

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoUi from "../../assets/img/ui.png";
import logoBangkit from "../../assets/img/bangkitLogo.png";
import "./experience.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experience = () => {
  const experiences = [
    {
      position: "Laboratory Assistant",
      company: "Department of Mathematics",
      duration: "March 2023 - July 2023",
      description:
        "Served as an instructor, delivering practicum, mentoring students, and fostering skill development in the field.\n" +
        "Developed learning modules for hands-on practice in data science, machine learning, and mathematical programming in Numerical Differential Equations.\n" +
        "Administered and assessed practicum projects to evaluate student learning.",
      logo: logoUi,
      title: "Universitas Indonesia",
    },
    {
      position: "Study Independent",
      company: "Machine Learning Cohort",
      duration: "February 2023 - July 2023",
      description:
        "Accomplished completion of courses in Data Analytics, Python Automation, Machine Learning, Deep Learning, Data, and Deployment. \n" +
        "Collaborated with a multidisciplinary team, including Cloud Computing, Mobile Development, and Machine Learning divisions, on a Capstone Project\n" +
        "Developed a Machine Learning model for implementation into an Android application as part of the project.",
      logo: logoBangkit,
      title: "Bangkit Academy",
    },
  ];

  return (
    <section className="my-experience" id="experience">
      <Container>
        <Row className="align-items-center justify-content-center dflex">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__flipInX" : ""
                }
              >
                <h2>Experience</h2>
              </div>
            )}
          </TrackVisibility>
          {experiences.map((experience, index) => (
            <React.Fragment key={index} className="exp-wrapper">
              <Col
                xs={12}
                sm={12}
                md={3}
                className="d-flex align-items-center justify-content-center mb-5"
              >
                <div className="company-logo">
                  <img src={experience.logo} alt={experience.position} />
                  <div className="logo-hover">
                    <h4>{experience.title}</h4>
                  </div>
                </div>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={7}
                className="d-flex align-items-center justify-content-center mb-5"
              >
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__flipInX"
                          : ""
                      }
                    >
                      <div className="company-details">
                        <h3>{experience.duration}</h3>
                        <h5 className="boldCompany">{experience.position}</h5>
                        <h5 className="boldCompany">{experience.company}</h5>
                        {experience.description
                          .split("\n")
                          .map((point, pointIndex) => (
                            <ul>
                            <li key={pointIndex} className="description">
                              {point}
                            </li>
                            
                            </ul>
                          ))}
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

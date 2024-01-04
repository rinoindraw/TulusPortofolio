import React from "react";
import gdsc from "../../assets/img/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import logoHima from "../../assets/img/datascient.png";
import "./achievement.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Achievement = () => {
  const experiences = [
    {
      company: "Our Humble Beginings",
      position: "2009 - 2011",
      duration: "December 2022 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      logo: gdsc,
      title: "HMSK Gunadarma",
    },
    {
      company: "Our Humble Beginings",
      position: "2009 - 2011",
      duration: "December 2022 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      logo: logoHima,
      title: "HMSK Gunadarma",
    },
    {
      company: "Our Humble Beginings",
      position: "2009 - 2011",
      duration: "December 2022 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
      logo: logoHima,
      title: "HMSK Gunadarma",
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
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              </div>
            )}
          </TrackVisibility>
          {experiences.map((experience, index) => (
            <React.Fragment key={index}>
              <Col
                xs={12}
                sm={12}
                md={3}
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
                md={7}
                className="d-flex align-items-center justify-content-center"
              >
                <TrackVisibility once>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__slideInRight" : ""
                }
              >

                <div className="company-details">
                  <h3>{experience.position}</h3>
                  <p className="bold-company-ach">{experience.company}</p>
                  {experience.description
                    .split("\n")
                    .map((point, pointIndex) => (
                      <p key={pointIndex} className="description">
                        {point}
                      </p>
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

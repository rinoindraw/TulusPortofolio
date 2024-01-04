import React from "react";
import logoUi from "../../assets/img/ui.png";
import { Container, Row, Col } from "react-bootstrap";
import "./organization.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const OrganizationExp = () => {
  const experiences = [
    {
      company: "Vice Head of Logistic Division",
      position: "June 2022 - October 2022",
      head: "Pengenalan Departemen Matematika (PDM) 2022",
      description:
        "• Liaise with the event division for essential requirements like venues and supplies, ensuring their provision for events.\n" +
        "• Collaborate with the financial division on the fiscal system for procuring necessary goods during events.\n" +
        "• Coordinate with the secretarial division on official communications for securing venues during event series.",
      logo: logoUi,
      title: "Universitas Indonesia",
    },
    {
      company: "Staff of Career Development and Entrepreneurship Department",
      position: "2009 - 2011",
      head: "Himpunan Mahasiswa Departemen Matematika FMIPA UI",
      description:
        "• Engage in initiatives facilitated by the Career Development and Entrepreneur Department for Mathematics students, aimed at enhancing post-academic life. These initiatives encompass practical interview sessions, entrepreneurial courses, entrepreneurial projects including managing an Instagram feed, and webinars and workshops pertinent to careers in the field of Mathematics.\n" +
        "• Collaborate with other staff by carrying out different tasks in each project.\n",
      logo: logoUi,
      title: "HMSK Gunadarma",
    },
  ];

  return (
    <section className="org-experience" id="organization">
      <Container>
        <Row className="align-items-center justify-content-center dflex">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__flipInX" : ""
                }
              >
                <h2>Organization</h2>
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
                        isVisible
                          ? "animate__animated animate__slideInRight"
                          : ""
                      }
                    >
                      <div className="company-details">
                        <h3>{experience.position}</h3>
                        <h5 className="bold-company-org">
                          {experience.company}
                        </h5>
                        <h5 className="bold-company-org">{experience.head}</h5>
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

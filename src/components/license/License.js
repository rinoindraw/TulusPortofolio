import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import certifBangkit from "../../assets/license/certificateBangkit.jpg";
import certifData from "../../assets/license/certifData.jpg";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./license.css";

export const License = () => {
  const certificate = [
    {
      image: certifBangkit,
      desc: "Certificate of Completion",
      hover: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    },
    {
      image: certifData,
      desc: "Certificate of Completion",
      hover: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    },
  ];

  const [lightboxImageUx, setLightboxImageUx] = useState(null);

  const openLightboxUx = (image) => {
    setLightboxImageUx(image);
  };

  const closeLightboxUx = () => {
    setLightboxImageUx(null);
  };

  return (
    <section className="org-experience" id="license">
      <Container>
        <div className="experience-wrapper">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__animated animate__lightSpeedInLeft"
                    : ""
                }
              >
                <h2>License</h2>

                <div className="license-icon">
                  <a
                    href="https://www.linkedin.com/in/akshay-vakil/"
                    target="_blank"
                    className="icons"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </div>
              </div>
            )}
          </TrackVisibility>
          <Row>
            {certificate.map((cert, index) => (
              <Col key={index} xs={11} md={12} className="mx-auto">
                <div
                  className="certificate-item"
                  onClick={() => openLightboxUx(cert.image)}
                >
                  <div className="certif-img">
                    <img src={cert.image} alt={cert.desc} />
                    <div className="certif-desc">
                      <h4>{cert.desc}</h4>
                      <span>{cert.hover}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {lightboxImageUx && (
          <div className="overlay-container-license" onClick={closeLightboxUx}>
            <div className="overlay-content-license">
              <img
                src={lightboxImageUx}
                alt="Selected Project"
                className="overlay-image-ux"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

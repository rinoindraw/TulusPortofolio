import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import certifBangkit from "../../assets/img/license/certBangkit.jpg";
import certifData from "../../assets/img/license/courseragoogledata.jpg";
import certifBpjs from "../../assets/img/license/certBpjs.jpg";
import certDeepLearnig from "../../assets/img/license/courseradeeplearning.jpg";
import certMachine from "../../assets/img/license/courseramachinelearning.jpg";
import certMath from "../../assets/img/license/courseramath.jpg";
import certCourseraTensorflow from "../../assets/img/license/courseratensorflow.jpg";
import certTensorflow from "../../assets/img/license/tensorflowcert.jpg";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./license.css";

export const License = () => {
  const certificate = [
    {
      image: certTensorflow,
      desc: "TensorFlow Developer Certificate",
      hover: "TensorFlow",
    },
    {
      image: certifBangkit,
      desc: "Certificate of Completion",
      hover: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    },
    {
      image: certifBpjs,
      desc: "3rd Place in the Machine Learning Category",
      hover: "BPJS KESEHATAN HEALTHKATHON 2022",
    },
    {
      image: certCourseraTensorflow,
      desc: "TensorFlow: Data and Deployment",
      hover: "Coursera",
    },
    {
      image: certMachine,
      desc: "Machine Learning",
      hover: "Coursera",
    },
    {
      image: certDeepLearnig,
      desc: "DeepLearning.AI TensorFlow Developer",
      hover: "Coursera",
    },
    {
      image: certifData,
      desc: "Google Data Analytics",
      hover: "Coursera",
    },
    {
      image: certMath,
      desc: "Mathematics for Machine Learning",
      hover: "Coursera",
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
    <section className="license-experience" id="license">
      <Container>
        <div className="experience-wrapper">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__animated animate__flipInY"
                    : ""
                }
              >
                <h2 className="license-header">Certifications</h2>

                <div className="license-icon">
                  <a
                    href="https://www.linkedin.com/in/tulus-setiawan/"
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
              <Col key={index} xs={11} md={6} className="mx-auto">
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

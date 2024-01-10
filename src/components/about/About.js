import { Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import pasFoto from "../../assets/img/fototulus.jpeg";
import "./about.css";

export const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Android Developer",
    "Web Developer",
    "Robotics",
    "Graphic Designer",
    "UX Designer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const summary = "A person with a robust background in mathematics and a keen interest in data science, machine learning, deep learning, finance, and artificial intelligence. Known for resilience, perseverance, and a strong sense of responsibility. Committed to lifelong learning, personal and professional growth, with an unwavering determination to succeed in all endeavors."

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__flipInX" : ""
                  }
                >
                  <h1>About Me</h1>
                  <p>
                   {summary}
                  </p>
                  <a
                    className="socialBox"
                    href="https://www.linkedin.com/in/tulus-setiawan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-flex align-items-center justify-content-center">
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={pasFoto} alt="PasFoto" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

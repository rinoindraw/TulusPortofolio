import { Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import pasFoto from '../../assets/img/fototulus.jpeg';
import './about.css'


export const About = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Android Developer", "Web Developer", "Robotics", "Graphic Designer", "UX Designer" ];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return(
        <section className="about" id="home">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={6} xl={6}>
                      <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__slideInLeft" : ""}>
                          {/* <span className="tagline">Welcome To My Website</span> */}
                          <h1>About Me</h1>
                          <p>Undergraduate student, a long-life learner with a passion for mathematics, data science, machine learning, finance, technology, etc., has a strong character that is unyielding, diligent, and responsible.</p>
                          <a className="socialBox" href="https://www.linkedin.com/in/rino-indra-wicaksono-43582b235/" target="_blank" rel="noopener noreferrer">
                          Let’s Connect <ArrowRightCircle size={25} />
                          </a>
                        </div>}
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                          <img src={pasFoto} alt="PasFoto"/>
                        </div>}
                      </TrackVisibility>
                    </Col>
                </Row>
              </Container>
        </section>
  )
}
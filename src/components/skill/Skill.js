import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../../assets/img/datascient.png";
import skill2 from "../../assets/img/datascient.png";
import skill3 from "../../assets/img/datascient.png";
import skill4 from "../../assets/img/datascient.png";
import androidDev from "../../assets/img/datascient.png";
import roboticsDev from "../../assets/img/datascient.png";
// import colorSharp from "../../assets/img/fototulus.jpeg";
import "./skill.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__lightSpeedInRight" : ""
                }
              >
              <h2>Skills</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
              </div>
            )}
            </TrackVisibility>
              <Carousel
            //   centerMode={true}
                responsive={responsive}
                infinite={true}
                showDots={true}
                draggable={false}
                dotListClass="custom-dot-list-style"
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <div className="skill-item">
                    <div className="skill-inner">
                      <img src={androidDev} alt="Skills" className="skill-img" />
                      <div className="overlay">
                        <h5>Android Developer</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima maxime quam architecto quo inventore
                          harum ex magni, dicta impedit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="skill-item">
                    <div className="skill-inner">
                      <img src={skill1} alt="Skills" className="skill-img" />
                      <div className="overlay">
                        <h5>Web Developer</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima maxime quam architecto quo inventore
                          harum ex magni, dicta impedit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="skill-item">
                    <div className="skill-inner">
                      <img
                        src={roboticsDev}
                        alt="Skills"
                        className="skill-img"
                      />
                      <div className="overlay">
                        <h5>Robotics</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima maxime quam architecto quo inventore
                          harum ex magni, dicta impedit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="skill-item">
                    <div className="skill-inner">
                      <img src={skill2} alt="Skills" className="skill-img" />
                      <div className="overlay">
                        <h5>Graphic Designer</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima maxime quam architecto quo inventore
                          harum ex magni, dicta impedit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="skill-item">
                    <div className="skill-inner">
                      <img src={skill3} alt="Skills" className="skill-img" />
                      <div className="overlay">
                        <h5>UX Designer</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima maxime quam architecto quo inventore
                          harum ex magni, dicta impedit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="skill-item">
                    <div className="skill-inner">
                      <img src={skill4} alt="Skills" className="skill-img" />
                      <div className="overlay">
                        <h5>Photography</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima maxime quam architecto quo inventore
                          harum ex magni, dicta impedit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

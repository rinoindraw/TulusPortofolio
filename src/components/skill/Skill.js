import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../../assets/img/ds.png";
import skill2 from "../../assets/img/data.png";
import skill3 from "../../assets/img/dataanalysis.png";
import skill4 from "../../assets/img/deeplearning.png";
import skill5 from "../../assets/img/python.png";
import skill6 from "../../assets/img/office.png";
import skill7 from "../../assets/img/sql.png";
import skill8 from "../../assets/img/math.png";
import "./skill.css";
import "animate.css";
import colorBackground from "../../assets/img/colorbg.png";
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
                      isVisible
                        ? "animate__animated animate__flipInY"
                        : ""
                    }
                  >
                    <h2>Skills</h2>
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
                      <img src={skill1} alt="Skills" className="skill-img" />
                      <div className="overlay">
                        <h5>Machine Learning</h5>
                        <p>
                          Machine Learning is a branch of artificial
                          intelligence that enables systems to learn and improve
                          performance without explicit programming.
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
                        <h5>Deep Learning</h5>
                        <p>
                          Deep Learning is a subfield of Machine Learning that
                          focuses on the use of neural networks for modeling and
                          solving complex tasks.
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
                        <h5>Data Science</h5>
                        <p>
                          Data Science involves the analysis and interpretation
                          of data to generate insights that support business
                          decision-making.
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
                        <h5>Data Analysis</h5>
                        <p>
                          Data Analysis is the process of examining,
                          transforming, and visualizing data to gain valuable
                          insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="skill-item">
                    <div className="skill-inner">
                      <img src={skill5} alt="Skills" className="skill-img" />
                      <div className="overlay">
                        <h5>Python (Programming Language)</h5>
                        <p>
                          Python is a versatile programming language often used
                          in web development, data analysis, and Machine
                          Learning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="skill-item">
                    <div className="skill-inner">
                      <img src={skill6} alt="Skills" className="skill-img" />
                      <div className="overlay">
                        <h5>Ms. Office (Excel, Word, Powerpoint)</h5>
                        <p>
                          Ms. Office provides productivity applications like
                          Excel, Word, and Powerpoint, valuable for office work
                          and data analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="skill-item">
                    <div className="skill-inner">
                      <img src={skill7} alt="Skills" className="skill-img" />
                      <div className="overlay">
                        <h5>SQL (Structured Query Language)</h5>
                        <p>
                          SQL is used to manage and retrieve data from
                          relational databases, crucial for application
                          development and data analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="skill-item">
                    <div className="skill-inner">
                      <img src={skill8} alt="Skills" className="skill-img" />
                      <div className="overlay">
                        <h5>Mathematics</h5>
                        <p>
                          Mathematics plays a crucial role in data analysis,
                          Machine Learning, and many other computer science
                          fields.
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
      <img
        className="background-image-left"
        src={colorBackground}
        alt="color"
      />
    </section>
  );
};

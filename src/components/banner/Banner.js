import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect/dist/core";
import Arrow from "../../assets/img/arrow.png";
import "./banner.css";
import { EnvelopeFill } from "react-bootstrap-icons";
import Cv from "../../assets/img/cvtulus.pdf";

export const Banner = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "Longlife Learner",
        "Data Enthusiast",
        "A Man of Culture",
        "Keep Scrolling!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

  const onResumeClick = () => {
    window.open(Cv);
  };

  return (
    <div className="banner" id="home">
      <div className="flex-banner">
        <a
          href="https://www.linkedin.com/in/tulus-setiawan/"
          target="_blank"
          className="icons left-anim"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/Jendma"
          target="_blank"
          className="icons center-anim"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="mailto:tulus.setiawan01@sci.ui.ac.id"
          target="_blank"
          className="icons"
          rel="noreferrer"
        >
          <EnvelopeFill />
        </a>
      </div>

      <div className="Introduction">
        <h1>Tulus Setiawan</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>Final Year Mathematics Student at Universitas Indonesia</p>
        <Link to="Contact" smooth={true} duration={900}>
          <button onClick={onResumeClick}>Resume</button>
        </Link>
        <img src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
};

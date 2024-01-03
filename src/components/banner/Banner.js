import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect/dist/core";
import { animateScroll as scroll } from "react-scroll";
import Pdf from "../../assets/img/logo.png";
import Arrow from "../../assets/img/arrow.png";
import './banner.css'

export const Banner = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "I am a Mathematic Student",
        "I like coding",
        "I am a Data Scientist",
        "Keep scrolling!",
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
    window.open(Pdf);
  };

  return (
    <div className="banner">
      <div className="flex-banner">
      
      <a href="https://www.linkedin.com/in/akshay-vakil/" target="_blank" className="icons left-anim">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/Octrainn" target="_blank" className="icons">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      
      </div>
     
      <div className="Introduction">
        <h1>Tulus Setiawan</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
        Undergraduate student, a long-life learner with a passion for mathematics, data science, machine learning, finance, technology, etc., has a strong character that is unyielding, diligent, and responsible.
        </p>
        <Link to="Contact"  smooth={true} duration={900}>
          <button onClick={onResumeClick}>Contact Me</button>
        </Link>
        <img src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
}
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  tabType,
  onClick,
}) => {
  return (
    <Col xs={12}>
      <div className="project-container" onClick={onClick}>
      <div className={`proj-imgbx ${tabType}`} >
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h4>+</h4>  
        </div>
      </div>
      <div className="text-card-wrapper">
      <h4>{title}</h4>
      <span>{description}</span>
      </div>
      </div>
    </Col>
  );
};

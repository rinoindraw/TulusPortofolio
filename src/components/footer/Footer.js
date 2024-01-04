import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "./footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="logo-footer">&copy; 2024, Tulus Setiawan.</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rino-indra-wicaksono-43582b235/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADqtXqkBA5gluUzb8WbdxDkKj_n3Qy0kJ_0" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/rinoindraw/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
import { Container, Row, Col, ModalFooter } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = (props) => {
  return (
    <ModalFooter className="text-muted bg-dark">
      <Container fluid="md">
        <Row>
          <Col className="d-flex justify-content-center">
            Pratite nas na Facebooku i Instagramu:
            <FontAwesomeIcon
              icon={faFacebook}
              className="fas fa-camera fa-2x ms-2"
              href="https://www.facebook.com/CopperQueenSala"
              title="Facebook/CopperQueen"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faInstagram}
              className="fas fa-camera fa-2x ms-2"
              href="https://www.instagram.com/copper_queen_sala"
              title="Instagram/CopperQueen"
            ></FontAwesomeIcon>
          </Col>
          <Col className="d-flex justify-content-center">
            2022 &copy; Valjaonica Bakra Sevojno{" "}
            <a
              href="http://www.vbs.co.rs/index.html"
              className="text-decoration-none "
            >
              www.vbs.co.rs
            </a>
          </Col>
        </Row>
      </Container>
    </ModalFooter>
  );
};
export default Footer;

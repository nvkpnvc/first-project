import { Container, Row, Col, ModalFooter } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = (props) => {
  return (
    <ModalFooter className="text-muted bg-dark">
      <Container className="container-sm">
        <Row>
          <Col className="d-flex justify-content-left">
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
            <p className="ms-4">
              2022 &copy; Valjaonica Bakra Sevojno
              <a
                style={{ color: "#b87333" }}
                href="http://www.vbs.co.rs/index.html"
                className="text-decoration-none  ms-1"
              >
                www.vbs.co.rs
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </ModalFooter>
  );
};
export default Footer;

import { Container, Row, Col, ModalFooter } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = (props) => {
  return (
    <ModalFooter className="text-muted">
      <Container className="bg-light">
        <Row>
          <Col xs lg="3">
            Pratite nas na Facebooku i Instagramu:
            <FontAwesomeIcon
              icon={faFacebook}
              href="https://www.facebook.com/CopperQueenSala"
              title="Facebook/CopperQueen"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faInstagram}
              href="https://www.instagram.com/copper_queen_sala"
              title="Instagram/CopperQueen"
            ></FontAwesomeIcon>
          </Col>
          <Col xs lg="3">
            2022 &copy; Valjaonica Bakra Sevojno
          </Col>
        </Row>
      </Container>
    </ModalFooter>
  );
};
export default Footer;

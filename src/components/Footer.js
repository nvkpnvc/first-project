import { Container, Row, Col, ModalFooter } from "react-bootstrap";
// import { FontAwesomeIcon } from "react-fontawesome";

const Footer = (props) => {
  return (
    <ModalFooter className="text-muted">
      <Container className="bg-light" fluid="md">
        <Row>
          <Col>
            Pratite nas na Facebooku i Instagramu:
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
          </Col>
          <Col>2022 &copy; Valjaonica Bakra Sevojno</Col>
        </Row>
      </Container>
    </ModalFooter>
  );
};
export default Footer;

import { Container, Row, Col } from "react-bootstrap";

export default function Gallery() {
  return (
    <Container id="gallery">
      <Container className=" container-sm mt-4">
        <Row>
          <h3 className="text-center">~Galerija~</h3>
        </Row>
        <Row className="rowG">
          <Col>
            <img
              className="d-block w-100"
              src="/img/gallery/copper_queen_10.jpg"
              alt="Gallery img"
            />
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src="/img/gallery/copper_queen_6.jpg"
              alt="Gallery img"
            />
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src="/img/gallery/copper_queen_11.jpg"
              alt="Gallery img"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="d-block w-100"
              src="/img/gallery/copper_queen_10.jpg"
              alt="Gallery img"
            />
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src="/img/gallery/copper_queen_9.jpg"
              alt="Gallery img"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="d-block w-100"
              src="/img/gallery/copper_queen_8.jpg"
              alt="Gallery img"
            />
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src="/img/gallery/copper_queen_4.jpg"
              alt="Gallery img"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

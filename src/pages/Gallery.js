import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(false);

  const images = [
    "/img/gallery/copper_queen_4.jpg",
    "/img/gallery/copper_queen_5.jpg",
    "/img/gallery/copper_queen_6.jpg",
    "/img/gallery/copper_queen_8.jpg",
    "/img/gallery/copper_queen_9.jpg",
    "/img/gallery/copper_queen_10.jpg",
    "/img/gallery/copper_queen_11.jpg",
    "/img/gallery/copper_queen_12.jpg",
    "/img/gallery/copper_queen_13.jpg"
  ];
  return (
    <Container id="gallery">
      <Modal
        show={Boolean(selectedImg)}
        onHide={() => {
          setSelectedImg(false);
        }}
      >
        <img className="d-block w-100" src={selectedImg} alt="Gallery img" />
      </Modal>
      <Container className=" container-sm mt-4">
        <Row>
          <h3 className="text-center">~Galerija~</h3>
        </Row>
        <Row className="rowG">
          {images.map((img) => {
            return (
              <Col
                onClick={() => {
                  setSelectedImg(img);
                }}
              >
                <img className="d-block w-100" src={img} alt="Gallery img" />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal />
    </Container>
  );
}

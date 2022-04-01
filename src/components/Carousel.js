import Carousel from "react-bootstrap/Carousel";

export default function Carousell(props) {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/img/carousel/slider1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/img/carousel/slider2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="/img/carousel/slider3.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

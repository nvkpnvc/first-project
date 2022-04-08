import { Container, Row, Col, Ratio } from "react-bootstrap";

export default function Contact() {
  return (
    <Container id="contact">
      <Container className="container-sm bg-light mt-4 mb-4">
        <Row>
          <h3 className="text-center">~Kontakt~</h3>
        </Row>
        <Row>
          <Col>
            <div style={{ width: 300, height: 300 }}>
              <Ratio aspectRatio="1x1">
                <embed src="https://www.google.com/maps/place/Sve%C4%8Dana+sala+%22Copper+Queen%22/@43.8417477,19.8904221,17.75z/data=!4m12!1m6!3m5!1s0x0:0xff1684da5b01a413!2sSve%C4%8Dana+sala+%22Copper+Queen%22!8m2!3d43.8418476!4d19.8904088!3m4!1s0x0:0xff1684da5b01a413!8m2!3d43.8418476!4d19.8904088?hl=en" />
              </Ratio>
            </div>
          </Col>
          <Col>
            <h5>Adresa:</h5>
            <p>Prvomajska bb, 31205 Sevojno</p>
            <h5>Kontakt osoba:</h5>
            <p>Marko Marić</p>
            <h5>E-mail:</h5>
            <p>eventsala@vbs.co.rs</p>
            <h5>Telefon:</h5>
            <p>
              <a href="//+381 66 868 4370" className="text-decoration-none ">
                066 868 4370
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

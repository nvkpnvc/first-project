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
                <iframe
                  title="sad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6844.525317464675!2d19.890698023706037!3d43.83989984118644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759d571a715578b%3A0xff1684da5b01a413!2sCopper%20Queen%20sala%20za%20proslave!5e0!3m2!1sen!2srs!4v1568205781119!5m2!1sen!2srs"
                  width="600"
                  height="450"
                  style={{
                    border: 0
                  }}
                ></iframe>
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

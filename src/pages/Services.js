import { Col, Container, Row } from "react-bootstrap";

export default function Services() {
  return (
    <Container id="services">
      <Container bg="dark" className="mt-2">
        <Row>
          <h3 className="text-center">~Usluge~</h3>
        </Row>
        <Row>
          <Col>
            <h5 style={{ color: "#b87333" }}>
              Copper Queen sala za proslave. Dobrodošli!
            </h5>

            <p>
              Copper Queen je sala za proslave Valjaonice bakra Sevojno. Nekada
              sala Radničkog doma u potpunosti je preuređena, a sada u duhu
              novog vremena sala ima i novo ime: Copper Queen
            </p>
            <p>
              Copper Queen sala se nalazi u okruženju parka u Sevojnu,
              klimatizovana je a nedavno je i potpuno renovirana.
            </p>
            <p>Kapacitet sale je od 100 do 500 mesta.</p>
          </Col>
          <Col>
            <img
              className="d-block w-100"
              src="/img/gallery/copper_queen_6.jpg"
              alt="Gallery img"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="d-block w-100"
              src="/img/gallery/copper_queen_6.jpg"
              alt="Gallery img"
            />
          </Col>
          <Col>
            <h5>Nudimo vam kompletnu organizaciju:</h5>
            <ul>
              <li>Svadbi</li>
              <li>Rođendana</li>
              <li>Krštenja</li>
              <li>Poslovnih prezentacija</li>
              <li>Proslava firmi</li>
              <li>Prijema</li>
              <li>Seminara</li>
              <li>Predstava</li>
              <li>Koncerata...</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

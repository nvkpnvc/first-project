import Nav from "react-bootstrap/Nav";

export default function Navigation(props) {
  return (
    <Nav className="me-auto d-flex justify-content-end">
      <Nav.Link href="#home">Dobrodosli</Nav.Link>
      <Nav.Link href="#usluge">Usluge</Nav.Link>
      <Nav.Link href="#galerija">Galerija</Nav.Link>
      <Nav.Link href="#kontakt">Kontakt</Nav.Link>
    </Nav>
  );
}

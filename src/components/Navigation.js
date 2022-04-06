import { Navbar, Nav, Container, Span } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Copper Queen</Navbar.Brand>

        <Nav className="ml-auto d-flex justify-content-end">
          <Nav.Link href="#home">Dobrodosli</Nav.Link>
          <Nav.Link href="#usluge">Usluge</Nav.Link>
          <Nav.Link href="#galerija">Galerija</Nav.Link>
          <Nav.Link href="#kontakt">Kontakt</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

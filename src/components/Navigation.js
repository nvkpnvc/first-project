import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Navbar
      fixed="top"
      bg="dark"
      variant="dark"
      collapseOnSelect
      className="opacity-75"
    >
      <Container fluid="md">
        <Navbar.Brand href="#home" style={{ color: "#b87333" }}>
          Copper Queen
        </Navbar.Brand>

        <Nav className="ml-auto d-flex justify-content-end">
          <Nav.Link href="#home">Dobrodosli</Nav.Link>
          <Nav.Link href="#services">Usluge</Nav.Link>
          <Nav.Link href="#gallery">Galerija</Nav.Link>
          <Nav.Link href="#contact">Kontakt</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

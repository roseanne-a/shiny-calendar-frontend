import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shiny Calendar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="All months" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">January</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">February</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">March</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">April</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">May</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">June</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">July</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">August</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">September</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">October</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">November</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Spring" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">March</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">April</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">May</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Summer" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">June</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">July</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">August</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Autumn/Fall" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">September</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">October</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">November</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Winter" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">January</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">February</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

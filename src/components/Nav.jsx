import { NavLink } from 'react-router'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
  

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

              <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
              <Nav.Link as={NavLink} to="/experience">Experiencia</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">Proyectos</Nav.Link> 

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navigation
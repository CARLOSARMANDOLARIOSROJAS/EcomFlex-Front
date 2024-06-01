import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavbarAdmin = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EcomFlex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link style={{
                textDecoration: 'none'
              }}  to='/admin/dashboard'>
              Dashboard
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{
                textDecoration: 'none'
              }} to='/admin/registro'>
              Registrar Producto
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{
                textDecoration: 'none'
              }} to='/'>
              Shop
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavbarHome = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand className='titulo-nav'>EcomFlex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{ textDecoration: 'none' }} to='/'>
                Inicio
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: 'none' }}>
                Nosotros
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: 'none' }} to='/admin/login'>
                Admin
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cart">
                <i className="carrito fa-solid fa-cart-shopping"></i>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

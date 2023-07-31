import "./NavBarMenu.css";
import { Nav, Navbar, Container } from "react-bootstrap";

export const NavBarMenu = () => {
  return (
    <Container fluid>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Navbar.Brand href="/">
          <h3>Agrosat</h3>
        </Navbar.Brand>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Nav.Link className="link" href="/">
              Inicio
            </Nav.Link>
            <Nav.Link className="link " href="#1">
              Servicios
            </Nav.Link>
          </ul>
          <ul className="navbar-nav ms-auto">
            <Nav.Link className="link-like-bt" href="/registro">
              Registro
            </Nav.Link>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default NavBarMenu;

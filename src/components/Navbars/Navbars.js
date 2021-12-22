import "./Navbars.scss";
import { Navbar, Container, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

import { BsSuitHeart } from "react-icons/bs";

function Navbars() {
  return (
    <Navbar className="border-bottom" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold fs-3">
          <Link className="link-text" to="/">
            Katalog App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-dark fw-bold fs-5">
              <Link className="link-text" to="/">
                Anasayfa
              </Link>
            </Nav.Link>
            <Nav.Link className="text-dark fs-5">
              <Link className="link-text" to="/productdetail">
                Ürünler
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-dark fs-4">
              <BsSuitHeart />
            </Nav.Link>
            <Nav.Link className="text-dark fw-bold fs-4">
              <Link className="link-text" to="/favorites">
                Favorites
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;

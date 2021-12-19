import "./Navbars.scss";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";

import { BsSuitHeart } from "react-icons/bs";

function Navbars() {
  return (
    <>
      <Navbar className="border-bottom" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold fs-3" href="#home">
            Katalog App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-dark fw-bold fs-5" href="#home">
                Anasayfa
              </Nav.Link>
              <Nav.Link className="text-dark fs-5" href="#urunler">
                Ürünler
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-dark fs-4" href="#like">
                <BsSuitHeart />
              </Nav.Link>
              <Nav.Link className="text-dark fw-bold fs-4" href="#favorites">
                Favorites
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;

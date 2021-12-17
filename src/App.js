import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  Carousel,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { BsSuitHeart } from "react-icons/bs";
import { FaInstagramSquare, FaTwitterSquare, FaFacebook } from "react-icons/fa";

function App() {
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

      <Container className="mt-5">
        <Carousel variant="white">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/2960437.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/f6/f4/31/f6f431420843f53de1a6075e69d5b162.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="mt-5">
        <p class="text-center fs-3 fw-bold">Kategoriler</p>
      </Container>

      <Container className="mt-3">
        <Row className="justify-content-center" xs={6}>
          <Col xs>
            <Button className="w-100" variant="outline-dark">
              Elektronik
            </Button>
          </Col>
          <Col xs>
            <Button className="w-100" variant="outline-dark">
              Moda
            </Button>
          </Col>
          <Col xs>
            <Button className="w-100" variant="outline-dark">
              Kitap
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 border-bottom border-dark"></Container>

      <Container className="mt-3">
        <Row>
          <Col>
            <p class="text-dark">Katalog App © All rights reserved</p>
          </Col>
          <Col>
            <p class="float-end">
              <FaInstagramSquare className="fs-5" />
              <FaTwitterSquare className="fs-5" />
              <FaFacebook className="fs-5" />
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

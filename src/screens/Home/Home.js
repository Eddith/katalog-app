import "./Home.scss";
import {
  Container,
  Carousel,
  Button,
  Row,
  Col,
} from "react-bootstrap";

function Home() {
  return (
    <>
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

      {/* Slider */}

      {/* Kategoriler */}

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

      {/* Kategoriler */}
    </>
  );
}

export default Home;

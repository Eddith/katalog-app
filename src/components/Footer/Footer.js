import "./Footer.scss";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FaInstagramSquare, FaTwitterSquare, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
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

export default Footer;

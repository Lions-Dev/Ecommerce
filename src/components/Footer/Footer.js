import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer () {
    return (
        <Container>
        <Row className="mt-5">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </Row>
  
        <Row className="d-flex flex-column flex-sm-row justify-content-center py-3 border-top">
          
          <Col id='copyright' className="d-flex justify-content-center mt-2">
            <p>© 2022 Company, Inc. All rights reserved.</p>
          </Col>
  
          <Col id="a-brand" className="d-flex justify-content-center ">
            <a href="/" className="text-muted me-2">
              <FaInstagram />
            </a>
            <a href="/" className="text-muted me-2">
              <FaFacebook />
            </a>
            <a href="/" className="text-muted me-2">
              <FaTwitter />
            </a>
            <a href="/" className="text-muted me-2">
              <FaLinkedin />
            </a>
          </Col>
  
        </Row>
  
      </Container>
    )
}

export default Footer
import "./About.css";
import { Row, Col, Container } from "react-bootstrap";

function About() {
  return (
    <div>
      <Row xs={1} lg={2}>
        <Col id="backgroundAbout" className="d-flex justify-content-center">
          <span id="spanAbout" className="mt-4">
            <h1>About Us</h1>
          </span>
        </Col>

        <Col lg={4} className="d-flex justify-content-center">
          <Container>
            <p id="pAbout" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Container>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={8} className="d-flex justify-content-center">
          <Container>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26274.865336820367!2d-58.543308807381564!3d-34.59510354906624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1669218099999!5m2!1ses!2sar"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Container>
        </Col>
        <Col lg={4} className="d-flex justify-content-center">
          <Container id="containerDatos">
            <p>Phone: 1132478516</p>
            <p>Email: Jack@gmail.com</p>
             <p>Address: General San Martin - Mexico 9021</p>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default About;

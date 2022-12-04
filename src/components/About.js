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
        <Col lg={7} className="d-flex justify-content-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13146.056142460124!2d-58.56581055184656!3d-34.54053822522524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcba0895eab743%3A0x7f5d6b6bf3279359!2sH%C3%B6lters%20Schule!5e0!3m2!1ses!2sar!4v1669404519964!5m2!1ses!2sar" title="maps"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          
        </Col>
        <Col lg={5} className="d-flex justify-content-center">
          <div id="containerDatos">
            <ul>
           
              <li> <h5><span>Phone:</span> 1132478516</h5></li>
              <li> <h5><span>Email:</span> Jack@gmail.com</h5></li>
              <li>   <h5><span>Address:</span> General San Martin - Mexico 9021</h5></li>
            </ul>

          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;

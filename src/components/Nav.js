import React from "react";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../img/brand.png'
import "./Nav.css"

function NavbarBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid className="ms-3">
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img
            src={img}
            width="100"
            id="brand"
            className="d-inline-block align-top mt-3"
            alt="Brand"
          />
          <h4 className=" ms-3" id="brand-titulo">Sneakers</h4>
        </Navbar.Brand>
        <Navbar.Toggle variant="primary" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Tienda">
              Tienda
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBar;

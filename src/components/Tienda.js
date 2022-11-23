import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import { CardsJson, ListGroupJson } from "../json";
import "./Tienda.css";

function Tienda() {
    
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="tienda">
      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.entries(ListGroupJson).map((e) => (
            <ListGroup key={e[0]}>
              <ListGroup.Item>
                <h5>{Object.keys(e[1])}</h5>
              </ListGroup.Item>
              <div className="scroll">
                {Object.values(e[1])[0].map((e) => (
                  <ListGroup.Item key={e} class="d-flex">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    <p>{e}</p>
                  </ListGroup.Item>
                ))}
              </div>
            </ListGroup>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary">Aceptar</Button>
        </Modal.Footer>
      </Modal>

      {/* botones de filtro y ordenado */}
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <Button id="filtro" onClick={handleShow} className="me-1">
            Filtrar
          </Button>
          <Dropdown className="ms-1">
            <Dropdown.Toggle variant="outline-primary" id="dropdown">
              Ordenar por
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-3">Mas Reciente</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Relevancia</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Mayor Precio</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Menor Precio</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="mt-4">
        {/* ListGroup para filtrar cards */}
        <Col id="ListGroupJson" className="ms-3 mt-3" xs={3} md={2} xl={2}>
          <Row>
            <Col>
              {Object.entries(ListGroupJson).map((e) => (
                <ListGroup key={e[0]}>
                  <ListGroup.Item>
                    <h5>{Object.keys(e[1])}</h5>
                  </ListGroup.Item>
                  <div className="scroll">
                    {Object.values(e[1])[0].map((e) => (
                      <ListGroup.Item key={e} class="d-flex">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <p>{e}</p>
                      </ListGroup.Item>
                    ))}
                  </div>
                </ListGroup>
              ))}
            </Col>
          </Row>
        </Col>
        {/* Cards de productos */}
        <Col className="ms-4">
          <Row xs={2} md={3} xl={3}>
            {CardsJson.map((e) => (
              <Col key={e.id} className="mt-4">
                <Card className="Card">
                  <Card.Img className="CardImg" src={e.img} />
                  <Card.Body>
                    <Card.Title>{e.tittle}</Card.Title>
                    <Card.Text>${e.precio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Tienda;

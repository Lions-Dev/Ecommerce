import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CardsJson, ListGroupJson } from "../../data/json";
import "./Tienda.css";
import ModalTienda from "./ModalTienda";
import FiltrarButton from "./FiltrarButton";
import DropdownButton from "./DropdownButton";
import ListGroupFiltro from "./ListGroupFiltro";
import ListCards from "./ListCards";

function Tienda() {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (

    <div className="tienda">
      {/* Modal */}
      <ModalTienda show={show} handleClose={handleClose} ListGroupJson={ListGroupJson} />
      {/* Botones de filtro y ordenado */}
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <FiltrarButton handleShow={handleShow} />
          <DropdownButton />
        </Col>
      </Row>
      <Row className="mt-4">
        {/* ListGroup para filtrar cards */}
        <Col id="ListGroupJson" className="ms-3 mt-3" xs={3} md={2} xl={2}>
          <Row>
            <Col>
              <ListGroupFiltro ListGroupJson={ListGroupJson} />
            </Col>
          </Row>
        </Col>
        {/* Cards de productos */}
        <Col className="ms-4">
          <Row xs={2} md={3} lg={3} xl={4}>
            <ListCards CardsJson={CardsJson} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Tienda;

import Modal from "react-bootstrap/Modal";

function Modal1() {
    return (
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
                                <ListGroup.Item key={e} className="d-flex">
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
    )
}

export default Modal1

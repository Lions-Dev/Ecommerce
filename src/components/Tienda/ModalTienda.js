import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";



function ModalTienda({ show, handleClose, ListGroupJson }) {

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
                {Object.entries(ListGroupJson).map((e, key) => (
                    <ListGroup key={key}>
                        <ListGroup.Item>
                            <h5>{Object.keys(e[1])}</h5>
                        </ListGroup.Item>
                        <div className="scroll">
                            {Object.values(e[1])[0].map((e, key) => (
                                <ListGroup.Item key={key} className="d-flex">
                                    <InputGroup.Checkbox  aria-label="Checkbox for following text input" />
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

export default ModalTienda

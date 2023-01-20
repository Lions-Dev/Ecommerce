import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";



function ModalTienda(props) {
    const categoria = []
    const marca = []
    const talle = []
    props.checked.map(e => {
        const eDividido = e.split(":")
        switch (eDividido[0]) {
            case 'Categoria':
                return categoria.push(eDividido[1])
            case 'Marca':
                return marca.push(eDividido[1])
            case 'Talle':
                return talle.push(eDividido[1])
            default:
                return null
        }
    })
    
    return (
        <Modal
            centered
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header >
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Object.entries(props.ListGroupJson).map((titulo, key) => (
                    <ListGroup key={key}>
                        <ListGroup.Item>
                            <h5>{Object.keys(titulo[1])}</h5>
                        </ListGroup.Item>
                        <div className="scroll">
                            {Object.values(titulo[1])[0].map((valor, key) => (
                                <ListGroup.Item key={key} className="d-flex">
                                    <InputGroup.Checkbox onChange={() => props.handleChecked(valor,Object.keys(titulo[1])[0])} aria-label="Checkbox for following text input" />
                                    <p>{valor}</p>
                                </ListGroup.Item>
                            ))}
                        </div>
                    </ListGroup>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={props.handleClose}>Aceptar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalTienda

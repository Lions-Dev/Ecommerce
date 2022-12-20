import Dropdown from "react-bootstrap/Dropdown";

function DropdownButton() {
    return (
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
    )
}

export default DropdownButton
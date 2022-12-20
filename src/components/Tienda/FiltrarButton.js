import Button from "react-bootstrap/Button";

function FiltrarButton ({handleShow}){
    return (
        <Button id="filtro" onClick={handleShow} className="me-1">
        Filtrar
      </Button>
    )
}

export default FiltrarButton
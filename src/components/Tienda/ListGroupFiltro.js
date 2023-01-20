import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";

function ListGroupFiltro(props) {
  return (
    Object.entries(props.ListGroupJson).map((titulo, key) => (
      <ListGroup key={key}>
        <ListGroup.Item>
          <h5>{Object.keys(titulo[1])}</h5>
        </ListGroup.Item>
        <div className="scroll">
          {Object.values(titulo[1])[0].map((valor, key) => (
            <ListGroup.Item key={key} className="d-flex">
              <InputGroup.Checkbox onChange={() => props.handleChecked(valor,Object.keys(titulo[1])[0])} type="checkbox" aria-label="Checkbox for following text input" />
              <p>{valor}</p>
            </ListGroup.Item>
          ))}
        </div>
      </ListGroup>
    ))
  )
}

export default ListGroupFiltro
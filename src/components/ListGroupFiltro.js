import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";

function ListGroupFiltro({ ListGroupJson }) {
    
    return (
        Object.entries(ListGroupJson).map((e, key) => (
            <ListGroup key={key}>
              <ListGroup.Item>
                <h5>{Object.keys(e[1])}</h5>
              </ListGroup.Item>
              <div className="scroll">
                {Object.values(e[1])[0].map((e, key) => (
                  <ListGroup.Item key={key} className="d-flex">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    <p>{e}</p>
                  </ListGroup.Item>
                ))}
              </div>
            </ListGroup>
          ))
    )
}

export default ListGroupFiltro
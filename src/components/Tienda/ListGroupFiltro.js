import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";

function ListGroupFiltro({ ListGroupJson }) {
    const onChangeChecked = ()=>{
      let inputChecks = [...document.querySelectorAll(".form-check-input")]
      let inputChecksFilters = inputChecks.filter(inputCheck => inputCheck.checked )
      inputChecksFilters = inputChecksFilters.map((e)=>{
        return e.parentNode.parentNode.outerText
      })
      console.log(inputChecksFilters)
      console.log(inputChecksFilters.outerText)
    }
    
    return (
        Object.entries(ListGroupJson).map((e, key) => (
            <ListGroup key={key}>
              <ListGroup.Item>
                <h5>{Object.keys(e[1])}</h5>
              </ListGroup.Item>
              <div className="scroll">
                {Object.values(e[1])[0].map((e, key) => (
                  <ListGroup.Item key={key} className="d-flex">
                    <InputGroup.Checkbox onChange={onChangeChecked} aria-label="Checkbox for following text input" />
                    <p>{e}</p>
                  </ListGroup.Item>
                ))}
              </div>
            </ListGroup>
          ))
    )
}

export default ListGroupFiltro
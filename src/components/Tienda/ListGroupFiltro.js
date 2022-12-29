import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";


function ListGroupFiltro(props) {

  
  // const onChangeChecked = () => {
  //   let inputChecks = [...document.querySelectorAll(".form-check-input")]
  //   let inputChecksFilters = inputChecks.filter(inputCheck => inputCheck.checked)
  //   inputChecksFilters = inputChecksFilters.map((e) => {
  //     return e.parentNode.parentNode.outerText
  //   })
  //   console.log(inputChecksFilters)
    // let Arraycards = [...document.querySelectorAll(".Card")]
    // let ArrayCardsData = []
    // Arraycards.forEach(e => {
    //   let ArrayCard = []
    //   ArrayCard.push(Object.values(e)[1].categoria)
    //   ArrayCard.push(Object.values(e)[1].marca)
    //   ArrayCard.push(Object.values(e)[1].talle)
    //   ArrayCardsData.push(ArrayCard)
    // })
    // let ArrayCardsDataFilter = ArrayCardsData.filter(ArrayCardData => {
    //   return inputChecksFilters.forEach(e => {
    //     return ArrayCardData === e
    //   })
    // })



    // console.log(ArrayCardsData)
    // console.log(ArrayCardsDataFilter)
  // }

  return (
    Object.entries(props.ListGroupJson).map((e, key) => (
      <ListGroup key={key}>
        <ListGroup.Item>
          <h5>{Object.keys(e[1])}</h5>
        </ListGroup.Item>
        <div className="scroll">
          {Object.values(e[1])[0].map((e, key) => (
            <ListGroup.Item key={key} className="d-flex">
              <InputGroup.Checkbox onChange={() => props.handleChecked(e)} type="checkbox" aria-label="Checkbox for following text input" />
              <p>{e}</p>
            </ListGroup.Item>
          ))}
        </div>
      </ListGroup>
    ))
  )
}

export default ListGroupFiltro
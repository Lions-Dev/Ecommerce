import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Fragment } from "react";

function ListCards(props) {
  console.log(props.checked)
  return (
    <Fragment>
      {props.CardsJson.map((e, key) => {
        return 1 === 1 ? (<Col key={key} className="mt-4">
          <Card className='Card' categoria={e.categoria} marca={e.marca} talle={e.talle}>
            <Card.Img className="CardImg" src={e.img} />
            <Card.Body>
              <Card.Title>{e.tittle}</Card.Title>
              <Card.Text>${e.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>) : (<h2>a</h2>)
      })}
    </Fragment>
  )
}

export default ListCards
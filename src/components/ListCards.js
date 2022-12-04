import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

function ListCards ({CardsJson}){
    return(
        CardsJson.map((e, key) => (
            <Col key={key} className="mt-4">
              <Card className="Card">
                <Card.Img className="CardImg" src={e.img} />
                <Card.Body>
                  <Card.Title>{e.tittle}</Card.Title>
                  <Card.Text>${e.precio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
    )
}

export default ListCards
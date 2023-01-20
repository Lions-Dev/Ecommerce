import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Fragment } from "react";


function ListCards(props) {
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
  console.log(categoria)
  console.log(marca)
  console.log(talle)
  const CardsJsonFiltrados = props.CardsJson.map((CardJson, key) => {
    if (categoria.length > 0 && marca.length === 0 && talle.length === 0) { //Si solo esta lleno categoria entrara y pregunatara si coinciden con el dataset del cardjson
      if (categoria.includes(CardJson.categoria)) {
        return <Col key={key} className="mt-4">
          <Card className='Card' data-categoria={CardJson.categoria} data-marca={CardJson.marca} data-talle={CardJson.talle}>
            <Card.Img className="CardImg" src={CardJson.img} />
            <Card.Body>
              <Card.Title>{CardJson.tittle}</Card.Title>
              <Card.Text>${CardJson.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      } else {
        return null
      }
    } else if (marca.length > 0 && categoria.length === 0 && talle.length === 0) { //Si solo esta lleno marca
      if (marca.includes(CardJson.marca)) {
        return <Col key={key} className="mt-4">
          <Card className='Card' data-categoria={CardJson.categoria} data-marca={CardJson.marca} data-talle={CardJson.talle}>
            <Card.Img className="CardImg" src={CardJson.img} />
            <Card.Body>
              <Card.Title>{CardJson.tittle}</Card.Title>
              <Card.Text>${CardJson.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      } else {
        return null
      }
    } else if (talle.length > 0 && marca.length === 0 && categoria.length === 0) { //Si solo esta lleno talle
      if (talle.includes(CardJson.talle)) {
        return <Col key={key} className="mt-4">
          <Card className='Card' data-categoria={CardJson.categoria} data-marca={CardJson.marca} data-talle={CardJson.talle}>
            <Card.Img className="CardImg" src={CardJson.img} />
            <Card.Body>
              <Card.Title>{CardJson.tittle}</Card.Title>
              <Card.Text>${CardJson.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      } else {
        return null
      }
    } else if (categoria.length > 0 && marca.length > 0 && talle.length === 0) { //Si esta lleno categoria y marca
      if (categoria.includes(CardJson.categoria) && marca.includes(CardJson.marca)) {
        return <Col key={key} className="mt-4">
          <Card className='Card' data-categoria={CardJson.categoria} data-marca={CardJson.marca} data-talle={CardJson.talle}>
            <Card.Img className="CardImg" src={CardJson.img} />
            <Card.Body>
              <Card.Title>{CardJson.tittle}</Card.Title>
              <Card.Text>${CardJson.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      } else {
        return null
      }
    } else if (categoria.length > 0 && talle.length > 0 && marca.length === 0) { //Si esta lleno categoria y talle
      if (categoria.includes(CardJson.categoria) && talle.includes(CardJson.talle)) {
        return <Col key={key} className="mt-4">
          <Card className='Card' data-categoria={CardJson.categoria} data-marca={CardJson.marca} data-talle={CardJson.talle}>
            <Card.Img className="CardImg" src={CardJson.img} />
            <Card.Body>
              <Card.Title>{CardJson.tittle}</Card.Title>
              <Card.Text>${CardJson.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      } else {
        return null
      }
    } else if (talle.length > 0 && marca.length > 0 && categoria.length === 0) { //Si esta lleno talle y marca
      if (talle.includes(CardJson.talle) && marca.includes(CardJson.marca)) {
        return <Col key={key} className="mt-4">
          <Card className='Card' data-categoria={CardJson.categoria} data-marca={CardJson.marca} data-talle={CardJson.talle}>
            <Card.Img className="CardImg" src={CardJson.img} />
            <Card.Body>
              <Card.Title>{CardJson.tittle}</Card.Title>
              <Card.Text>${CardJson.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      } else {
        return null
      }
    } else if (talle.length > 0 && marca.length > 0 && categoria.length > 0) { //Si los tres estan llenos
      if (talle.includes(CardJson.talle) && marca.includes(CardJson.marca) && categoria.includes(CardJson.categoria)) {
        return <Col key={key} className="mt-4">
          <Card className='Card' data-categoria={CardJson.categoria} data-marca={CardJson.marca} data-talle={CardJson.talle}>
            <Card.Img className="CardImg" src={CardJson.img} />
            <Card.Body>
              <Card.Title>{CardJson.tittle}</Card.Title>
              <Card.Text>${CardJson.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      } else {
        return null
      }
    }
    else { //Si no se da ninguna condicion se renderizara todos los cardjson
      return <Col key={key} className="mt-4"> 
          <Card className='Card' data-categoria={CardJson.categoria} data-marca={CardJson.marca} data-talle={CardJson.talle}>
            <Card.Img className="CardImg" src={CardJson.img} />
            <Card.Body>
              <Card.Title>{CardJson.tittle}</Card.Title>
              <Card.Text>${CardJson.precio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    }
  })

  return (
    <Fragment>
      {CardsJsonFiltrados}
    </Fragment>
  )
}

export default ListCards
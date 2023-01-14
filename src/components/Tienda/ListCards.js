import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Fragment } from "react";
import { useState } from "react";

function ListCards(props) {
  const categoria = []
  const marca = []
  const talle = []
  props.checked.map(e => {
    const eDividido = e.split(":")
    switch (eDividido[0]) {
      case 'Categoria':
        categoria.push(eDividido[1])
        break
      case 'Marca':
        marca.push(eDividido[1])
        break
      case 'Talle':
        talle.push(eDividido[1])
        break
    }
  })
  console.log(categoria)
  console.log(marca)
  console.log(talle)

  const a = props.CardsJson.map((CardJson, key) => {
    return <Col key={key} className="mt-4">
      <Card className='Card' data-categoria={CardJson.categoria} data-marca={CardJson.marca} data-talle={CardJson.talle}>
        <Card.Img className="CardImg" src={CardJson.img} />
        <Card.Body>
          <Card.Title>{CardJson.tittle}</Card.Title>
          <Card.Text>${CardJson.precio}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  })
  // const [categoria,setCategoria] = useState([])
  // const [marca,setMarca] = useState([])
  // const [talle,setTalle] = useState([])
  // props.checked.map(e => {
  //   let checkedDividido = e.split(':')
  //   switch (checkedDividido[0]){
  //     case 'Categoria':
  //       setCategoria(...categoria,(checkedDividido[1]))
  //       break
  //     case 'Marca':
  //       setMarca(...marca,(checkedDividido[1]))
  //       break
  //     case 'Talle':
  //       setTalle(...talle,(checkedDividido[1]))
  //       break
  //     default:
  //   }
  //   return null
  // })
  // console.log(categoria)
  // console.log(marca)
  // console.log(talle)
  return (
    <Fragment>


      {a}

    </Fragment>
  )
}

export default ListCards
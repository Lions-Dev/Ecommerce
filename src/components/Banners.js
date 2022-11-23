import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Banners.css'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'


function Banners() {
    return (
        <Container fluid>
            <Row xs={2} md={3} className="justify-content-md-center ">
                <Col className='mt-4'>
                    <Card className="bg-dark text-white">
                        <Card.Img id='img-banner' src={img1} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className='position-absolute bottom-0 start-50 translate-middle-x'>Jordan</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className='mt-4'>
                    <Card className="bg-dark text-white">
                        <Card.Img id='img-banner' src={img2} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className='position-absolute bottom-0 start-50 translate-middle-x'>Adidas</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className='mt-4'>
                    <Card className="bg-dark text-white">
                        <Card.Img id='img-banner' src={img3} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className='position-absolute bottom-0 start-50 translate-middle-x'>Nike</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Banners;
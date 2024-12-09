import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
function Footer2() {
    return (
        <><BrowserRouter>
            <footer className="w-100">
                <Container fluid className='p-2 bg-primary text-white text-center'>
                    <Row>
                        <Col className='mx-5 center'>
                            <Image src="/logo-removebg.png" width={150} height={150} />
                            <h2>Talento Tech</h2>
                            <p>Innovating the Future</p>
                        </Col>
                        <Col>
                            <Nav className='flex-column fs-5'>
                                <Nav.Link href='/Dashboard' className='text-white'>Dashboard</Nav.Link>
                                <Nav.Link href='/Estadisticas' className='text-white'>Estadísticas</Nav.Link>
                                <Nav.Link href='/About' className='text-white'>Sobre Nosotros</Nav.Link>
                            </Nav>
                        </Col>
                    </Row> 
                </Container>
            </footer>
        </BrowserRouter>
        </>
    );
}

export default Footer2;
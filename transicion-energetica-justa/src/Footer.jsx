import { Container, Row, Col, Image, Nav, NavLink } from 'react-bootstrap';

function Footer() {
    return (
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
                            <NavLink href='/' className='text-white'>Inicio</NavLink>
                            <NavLink href='/Dashboard' className='text-white'>Dashboard</NavLink>
                            <NavLink href='/Estadisticas' className='text-white'>Estadísticas</NavLink>
                            <NavLink href='/About' className='text-white'>Sobre Nosotros</NavLink>
                        </Nav>
                    </Col>
                </Row>
                <Row className='text-white text-center'>
                    <Col>
                        <p>© 2021 Talento Tech. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
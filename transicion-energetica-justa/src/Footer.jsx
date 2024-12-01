import { Container, Row, Col, Image, Nav, NavLink } from 'react-bootstrap';
function Footer() {
    return (
        <footer>
            <Container fluid className='p-2 bg-primary  text-white text-center'>
                <Row >
                    <Col className='mx-5 center'>
                        <Image src="/logo-removebg.png" width={150} height={150} />
                        <h2>Talento Tech</h2>
                        <p>Innovating the Future</p>
                    </Col>
                    <Col>
                        <Nav className='flex-column fs-5'>
                            Useful Links
                            <NavLink href='#' className='text-white'>Home</NavLink>
                            <NavLink href='#' className='text-white'>About Us</NavLink>
                            <NavLink href='#' className='text-white'>Services</NavLink>
                            <NavLink href='#' className='text-white'>Contact Us</NavLink>
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
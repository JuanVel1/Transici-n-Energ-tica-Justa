import { Navbar, Container, Nav } from "react-bootstrap";
function NavBarr() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" fixed="top" >
                <Container className="justify-content-center" >
                    <Navbar.Brand href="#home">TEJ 🌀</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/Estadisticas">Estadísticas</Nav.Link>
                        <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarr;
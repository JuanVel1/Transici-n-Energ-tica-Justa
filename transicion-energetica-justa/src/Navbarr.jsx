import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Estadisticas from "./Estadisticas";
import About from "./About";

function NavBarr() {
    return (
        <>  <BrowserRouter>
            <Routes>
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Estadisticas" element={<Estadisticas />} />
                <Route path="/About" element={<About />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>

            <Navbar bg="light" data-bs-theme="light" fixed="top" >
                <Container className="justify-content-center" >
                    <Navbar.Brand href="#home">TEJ 🌀</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} to={"/Estadisticas"}>Estadísticas</Nav.Link>
                        <Nav.Link as={NavLink} to="/Dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={NavLink} to="/About">Sobre Nosotros</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </BrowserRouter>
        </>
    );
}

export default NavBarr;
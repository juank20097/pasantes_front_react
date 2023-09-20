import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import '../css/BarraVertical.css'

const Sidebar = ({isVisible}) => {
    return (
        <div className={
            `sidebar ${
                isVisible ? '' : 'hidden'
            }`
        }>
            <Container className='contenedor'>
                <Row>
                    <Col>
                        <Nav className='nav' vertical>
                            <NavItem className='item'>
                                <NavLink href="/home"> <span id='text'>Página Principal</span></NavLink>
                            </NavItem>
                            <NavItem className='item'>
                                <NavLink href="/servicios">Servicios</NavLink>
                            </NavItem>
                            <NavItem className='item'>
                                <NavLink href="/empresas">Empresas</NavLink>
                            </NavItem>
                            <NavItem className='item'>
                                <NavLink href="/departamentos">Departamentos</NavLink>
                            </NavItem>
                            <NavItem className='item'>
                                <NavLink href="/empleados">Empleados</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Sidebar;

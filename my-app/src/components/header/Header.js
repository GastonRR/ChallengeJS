import { React, Fragment } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default function Header() {
    return (
        <Fragment>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" >
                <Navbar.Brand href="#home" > Personal budgets</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Activity</Nav.Link>
                        <NavDropdown title="New Operations" id="collasible-nav-dropdown" >
                            <NavDropdown.Item href="">Deposit</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">Whithdraw</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-5">
                        <NavDropdown title="User" id="collasible-nav-dropdown" drop="left" >
                            <NavDropdown.Item href="">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">LogOut</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

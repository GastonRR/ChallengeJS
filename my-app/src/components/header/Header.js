import  React, { useState, useEffect }  from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


import AuthService from '../../services/auth.service'


const Header = () => {

    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          setCurrentUser(user);
        }
      }, []);

      const LogOut = () =>{
        AuthService.logOut();;
      }



    return (
        <React.Fragment>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" >
                <Navbar.Brand href="/" > WALLET </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/activity">Activity</Nav.Link>
                        <NavDropdown title="New Operations" id="collasible-nav-dropdown" >
                            <NavDropdown.Item href="/deposit">Deposit</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/withdraw">Whithdraw</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {currentUser ?( <Nav className="mr-5">
                        <NavDropdown title={currentUser.name} className="text-capitalize" id="collasible-nav-dropdown" drop="left" >
                            <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login"  onClick={LogOut} >LogOut</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>): <Nav className="mr-5">
    
                    </Nav>}
                   
                </Navbar.Collapse>
            </Navbar>
            <div>
              
            </div>
        </React.Fragment>
    );
}
export default Header

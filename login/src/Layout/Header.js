import React from "react";
import { Navbar,Nav,Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const Header=()=>{
  //const match=useRouteMatch()
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand >Authentication</Navbar.Brand>
              <Nav className="me-auto ">
                <Nav.Link as={NavLink} to = '/login'>Login</Nav.Link>
                <Nav.Link as={NavLink} to = '/login/profile'>Profile</Nav.Link>
                <Nav.Link as={NavLink} to ='/login'>Logout</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </>
)
}
export default Header;
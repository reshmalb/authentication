import React, { useContext } from "react";
import { Navbar,Nav,Container,Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import AuthorizationContext from "../Store/AuthorizationContext";
const Header=()=>{
  //const match=useRouteMatch()
      const ctx=useContext(AuthorizationContext);
      const islogIn=ctx.isLoggedin;

    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand >Authentication</Navbar.Brand>
              <Nav className="me-auto ">
           {!islogIn &&  (<Nav.Link as={NavLink} to = '/auth'>Login</Nav.Link>)}    
           {islogIn &&   (<Nav.Link as={NavLink} to = '/profile'>Profile</Nav.Link>)}
            {islogIn &&  ( <Button> LogOut</Button>)}
              </Nav>
            </Container>
          </Navbar>
          </>
)
}
export default Header;
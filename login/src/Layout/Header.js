import React, { useContext } from "react";
import { Navbar,Nav,Container,Button} from "react-bootstrap";
import { NavLink ,useHistory} from "react-router-dom";

import AuthorizationContext from "../Store/AuthorizationContext";
const Header=()=>{
  //const match=useRouteMatch()
      const ctx=useContext(AuthorizationContext);
      const islogIn=ctx.isLoggedin;

      const history=useHistory();
      const logoutHandler=()=>{
         ctx.logout();
         history.replace('/auth')

}
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand >Authentication</Navbar.Brand>
              <Nav className="me-auto ">
           {!islogIn &&  (<Nav.Link as={NavLink} to = '/login'>Login</Nav.Link>)}    
           {islogIn &&   (<Nav.Link as={NavLink} to = '/home'>Home</Nav.Link>)}

           {islogIn &&   (<Nav.Link as={NavLink} to = '/profile'>Profile</Nav.Link>)}

            {islogIn &&  ( <Button onClick={logoutHandler}> LogOut</Button>)}
              </Nav>
            </Container>
          </Navbar>
          </>
)
}
export default Header;
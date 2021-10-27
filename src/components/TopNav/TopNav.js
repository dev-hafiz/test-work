import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const TopNav = () => {
    const activeStyle = {
     fontWeight: "bold",
     color: "red",
     
     }
     return (
        
     <Navbar bg="dark" variant="dark">
                <Container>
               <Navbar.Brand href="#home">Resturent Yard</Navbar.Brand>
               
               <Nav className="ms-auto ">
               <Stack direction="horizontal" gap={3}>
                    <NavLink activeStyle={activeStyle} 
                    to="/home">
                      Home
                    </NavLink>
                    <NavLink activeStyle={activeStyle}
                     to="/resturant">
                     Order/resturant
                     </NavLink>
                    <NavLink activeStyle={activeStyle}
                     to="/about">
                     About
                     </NavLink>
                     </Stack>
               </Nav>
              
               
               </Container>
     </Navbar>
     );
};

export default TopNav;
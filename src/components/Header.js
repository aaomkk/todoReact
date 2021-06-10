import React from 'react'
import { Nav,Navbar,NavDropdown } from 'react-bootstrap'

export default function Header() {
   return (
      <div>
         <Navbar bg="primary" variant="dark">
         <Navbar.Brand href="#home">TodoList</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/card">Card</Nav.Link>

            </Nav>
         </Navbar.Collapse>
         </Navbar>
         
      </div>
   )
}

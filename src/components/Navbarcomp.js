import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Navbar,Nav, } from 'react-bootstrap';
import {
  BrowserRouter as HashRouter, Link
} from "react-router-dom";


export default class Navbarcomp extends Component {
  render() {
    return (

      <div>

        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to ={"/"}>BadBank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to ={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to ={"/Createaccount"}>Create Account</Nav.Link>
                <Nav.Link as={Link} to ={"/Deposit"}>Deposit</Nav.Link>
                <Nav.Link as={Link} to ={"/Withdraw"}>Withdraw</Nav.Link>
                <Nav.Link as={Link} to ={"/Alldata"}>All Data</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    )
  }
}

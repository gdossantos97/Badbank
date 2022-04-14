import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Navbar,Nav, } from 'react-bootstrap';
import {
  BrowserRouter as HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Navbarcomp extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to ={"/home"}>BadBank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to ={"/home"}>Home</Nav.Link>
                <Nav.Link href="#link">Create Account</Nav.Link>
                <Nav.Link href="#link">Deposit</Nav.Link>
                <Nav.Link href="#link">Withdraw</Nav.Link>
                <Nav.Link href="#link">All Data</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      </HashRouter>
    )
  }
}

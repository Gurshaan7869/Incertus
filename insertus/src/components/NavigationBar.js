import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import brand from "./img/incertus_logooo.png";

import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";

function NavigationBar({ user }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    firebase.auth().signOut();
    navigate("/");
  };

  return (
    <Navbar className="dark navbar" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img className="brand" src={brand} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/prevquestions">Company</Nav.Link>
          <Nav.Link href="/learning">Learning</Nav.Link>
          <Nav.Link href="/predict">Prediction</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          {user ? (
            <>
              <Navbar.Text className="mr-3">{user.email}</Navbar.Text>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;

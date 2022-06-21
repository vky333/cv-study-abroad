import React from "react";
import Logo from "./Logo";
import styles from "../header/Header.module.css";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className={`${styles.headerContainer} pageHeader`}>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
          <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={`${styles.menuTab} hderMenuTab`}>
                <Link href="/">
                  Suggest a University in 5 Mins
                </Link>
                <Link href="/">
                  Talk with an Expert
                </Link>
                <Link href="/">
                  Search By Course
                </Link>
                <Link href="/">
                  Search By Country
                </Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav>
                {/* <Link eventKey={2} href="#memes">
                Sing Up
                </Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;

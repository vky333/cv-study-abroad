import React from 'react';
import Logo from './Logo';
import styles from '../header/Header.module.css'
import { Navbar, Nav, Button } from 'react-bootstrap'
// import { FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export const Header = () => {
  return (
    <>
      <header className={`${styles.headerContainer} pageHeader`}>
        <div className='container'>
          <div className={`${styles.headerBox}`}>          
          <Navbar variant="light" className={`${styles.headerNavBar}`}>
            <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
            <Nav className={`${styles.menuTab} me-auto`}>
              {/* <Nav.Link href="#home"><FaHome/>Suggest Me a University</Nav.Link> */}
              <Nav.Link href="#home">Suggest Me a University</Nav.Link>
              <Nav.Link href="#Courses">Courses</Nav.Link>
              <Nav.Link href="#Country">Country</Nav.Link>
              <Nav.Link href="#VideoConsult">Video Consult </Nav.Link>
            </Nav>
            <Nav className={`${styles.login_main} logoinBox`}>
                <Nav.Link href="#deets" className="text-white">
                  <span>
                    <FiUser />
                    <span className={styles.loginText}>Login/Signup</span>
                  </span>
                </Nav.Link>
              </Nav>
          </Navbar>
        </div>
        </div>
      </header>
    </>
  )
}

export default Header
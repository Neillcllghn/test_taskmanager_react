import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
    <Container>
        <NavLink to="/">
            <Navbar.Brand className={styles.NavBarBrand}>
                 TASKMASTER
            </Navbar.Brand>
        </NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <NavLink exact
            className={styles.NavLink} 
            activeClassName={styles.Active} to="/">
                <i className="fas fa-home"></i> Home
            </NavLink>
            <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/login">
                <i className="fas fa-sign-in-alt"></i> Login
            </NavLink>
            <NavLink
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/signup">
                <i className="fas fa-user-plus"></i> Sign Up
            </NavLink>
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavBar
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="navbar">
      <Container className='navbar-container'>
        <Navbar.Brand href="/">Jesús Sierra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link 
              href='#about' 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#about');
                section.scrollIntoView({ behavior: 'smooth' });
              }}
              className='text-white ms-3 text-decoration-none link'>
              Acerca de mí
            </Nav.Link>
            <Nav.Link 
              href='#skills' 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#skills');
                section.scrollIntoView({ behavior: 'smooth' });
              }}
              className='text-white ms-3 text-decoration-none link'>
              Habilidades
            </Nav.Link>
            <Nav.Link 
              href='#projects' 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#projects');
                section.scrollIntoView({ behavior: 'smooth' });
              }}
              className='text-white ms-3 text-decoration-none link'>
              Proyectos
            </Nav.Link>
            <Nav.Link 
              href='#contact' 
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector('#contact');
                section.scrollIntoView({ behavior: 'smooth' });
              }}
              className='text-white ms-3 text-decoration-none link'>
              Contáctame
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

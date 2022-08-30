import React from 'react';
import Logo from '../Logo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

//Componente del encabezado con las opciones de filtrado y busqueda
function Nav({onSearch}) {
  return (
    <Navbar bg="primary" variant="dark" >
        <Container fluid>
          <Navbar.Brand href="#home" onClick={() => window.location.reload(true)} >
            <img 
              src={Logo} 
              width="30" 
              height="30" 
              className="d-inline-block align-topp" 
              alt="" 
              />{' '}
            Star Wars App
          </Navbar.Brand>
          <SearchBar onSearch={onSearch} />
        </Container>
    </Navbar>
  );
};

export default Nav;

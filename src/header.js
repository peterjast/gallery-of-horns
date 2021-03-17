import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render() {
    return(
      <header>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Gallery of Horns</Navbar.Brand>
        </Navbar>
      </header>
    );
  }
}

export default Header;

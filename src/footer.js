import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/footer.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
      <>
      <Navbar sticky="bottom" className="footer mt-5 py-3 bg-dark text-light">
      <Navbar.Brand href="#home" className="text-light">Gallery of Horns</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-light">Peter Staker &copy; 2021</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      </>
    );
  }
}

export default Footer;

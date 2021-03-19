import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './assets/header.css';
import Form from 'react-bootstrap/Form';
import rawData from './data.json';

class Header extends React.Component {
  // hornFilter = (e) => {
  //   const numHorns = parseInt(e.target.value);
  //   let beastsToDisplay = rawData;
  //   if (numHorns) {
  //     beastsToDisplay = rawData.filter((beast) => beast.horns === numHorns);
  //   }
  //   this.props.displayFilteredBeasts(beastsToDisplay);
  // };

  hornFilter = (e) => this.props.filterBeasts(parseInt(e.target.value) !== 0 ? rawData.filter((beast) => beast.horns === parseInt(e.target.value)) : rawData);

  render() {
    return(
      <>
        <Navbar sticky="top" bg="dark" expand="lg" className="mb-auto">
          <Navbar.Brand className="text-light" href="#home">Gallery of Horns</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Form inline>
              <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select" onChange={this.hornFilter}>
                <option value="0">All</option>
                <option value="1">One Horn</option>
                <option value="2">Two Horns</option>
                <option value="3">Three Horns</option>
                <option value="100">100 Horns</option>
              </Form.Control>
              </Form.Group>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;

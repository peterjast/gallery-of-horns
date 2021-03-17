import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './app.css';

class App extends React.Component {
  render() {
    return(
      <Container fluid>
        <Row>
          <Col>
            <Header />
            <Main />
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

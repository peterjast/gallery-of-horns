import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './assets/app.css';
import rawData from './data.json';
import SelectedBeast from './selectedBeast.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beastData: rawData,
      isSelected: false,
      selectedBeast: {}
    }
  }

  displaySelected = (index) => this.setState({ selectedBeast: this.state.beastData[index], isSelected: true });

  handleClose = () => this.setState({ isSelected: false});

  updateBeastData = (beastData) => this.setState({ beastData });

  render() {
    return(
      <>
      <Header filterBeasts={this.updateBeastData}/>
      <Container fluid className="h-100 mb-auto">
        <Row>
          <Col>
            <Main 
              beastData={this.state.beastData}
              displaySelected={this.displaySelected}
            />
            <SelectedBeast
              selectedBeast={this.state.selectedBeast}
              show={this.state.isSelected}
              handleClose={this.handleClose}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
      </>
    );
  }
}

export default App;

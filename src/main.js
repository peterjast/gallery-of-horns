import React from 'react';
import HornedBeast from './beasts.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import SelectedBeast from './selectedBeast.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
  // readData = () => {
  //   this.props.requireBeastData();
  // }

  handleShow = () => this.props.showBeast();

  closeBeast = () => this.props.unselectBeast();

  render() {
    return(
      <main className="flex-shrink-0 mt-5">
        <CardDeck className>
        {this.props.beastData.map((beast, index) => (
          <div key={index}>
            <Card className="beast" bg="light" text="dark" style={{ width: '18rem' }}>
              <HornedBeast 
                src = {beast.image_url}
                title = {beast.title}
                description = {beast.description}
              />
              <Button variant="primary" onClick={this.handleShow}>Details</Button>
              <SelectedBeast
                isSelected = {this.props.isSelected} 
                title = {beast.title}
                description = {beast.description}
                keyword = {beast.keyword}
                horns = {beast.horns}
                close = {this.closeBeast}
              />
            </Card>  
          </div>
        ))
        }
        </CardDeck>
      </main>
    );
  }
}

export default Main;

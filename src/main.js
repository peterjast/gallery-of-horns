import React from 'react';
import HornedBeast from './beasts.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';

class Main extends React.Component {

  render() {
    return(
      <div id = "beast-container">
        <CardDeck>
        {this.props.beastData.map((beast, index) => (
          <HornedBeast 
            key={index}
            index={index}
            src={beast.image_url}
            title={beast.title}
            description={beast.description}
            displaySelected={this.props.displaySelected}
          />
        ))}
        </CardDeck>
      </div>
    );
  }
}

export default Main;

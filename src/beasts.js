import React from 'react';
import beastData from './beastData.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

class Likes extends React.Component {
  constructor(props){
    super(props);
    this.state={
      numLikes: 0
    };
  }  

  likeBeast = () => this.setState({ numLikes: this.state.numLikes + 1 });

  render() {
    return (
      <>
      <Card.Text>{this.state.numLikes} likes</Card.Text>
      <Button variant="primary" onClick={this.likeBeast}>💖</Button>   
      </>
    );
  }  
}

class HornedBeasts extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     numLikes: 0
  //   };
  // }

likeBeast = () => this.setState({ numLikes: this.state.numLikes + 1 });

render() {
  const beastList = beastData.map((beast, index) =>
    <div key={index} className="col-sm-3 col-centered">
      <Card className="my-2-auto" variant="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={beast.image_url} alt={beast.description} title={beast.title}/>
        <Card.Body>
          <Card.Title>{beast.title}</Card.Title>
          <Card.Text>{beast.description}</Card.Text>
          <Likes />
        </Card.Body>
      </Card>
    </div>
  );
  return(
    <CardDeck>
      {beastList}
    </CardDeck>
  );
}
}

export default HornedBeasts;

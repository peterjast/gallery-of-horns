import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Like extends React.Component {
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

class HornedBeast extends React.Component {

  addModal = () => this.props.displaySelected(this.props.index);

  render() {
    return(
      <div className="col-lg-3 col-centered">      
        <Card className="beast" bg="light" text="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.src} alt={this.props.description} title={this.props.title}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Like />
            <Button variant="secondary" onClick={this.addModal}>Details</Button>
          </Card.Body>
        </Card>
      </div>    
    )
  }
}

export default HornedBeast;
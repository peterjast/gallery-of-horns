import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Card.Text className="mx-auto">
        <Col className="mx-auto">
          <Row>
            <p className="mx-auto">{`likes: ${this.state.numLikes}`}</p>
            <Button className="mx-auto" variant="primary" onClick={this.likeBeast}>💖</Button>  
          </Row>
        </Col>
      </Card.Text> 
      </>
    );
  }  
}

class HornedBeast extends React.Component {

  addModal = () => this.props.displaySelected(this.props.index);

  render() {
    return(
      <div className="col-lg-3 col-centered h-100">      
        <Card className="mt-5 mx-auto" bg="light" text="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.src} alt={this.props.description} title={this.props.title}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Row>
              <Col className="mx-auto">
                <Button variant="secondary" onClick={this.addModal}>Details</Button>
              </Col>
              <Col>
                <Like />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>    
    )
  }
}

export default HornedBeast;
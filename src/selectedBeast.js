import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './assets/selectedBeast.css';

class SelectedBeast extends React.Component {

  render() {
    return(
      <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>  
          <Modal.Body>
            <Card bg="dark" text="light" onClick={this.isSelected}>
              <Card.Img variant="top" alt={this.props.selectedBeast.title} src={this.props.selectedBeast.image_url} />
              <Card.Body>
                <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                <Card.Text>
                  {`${this.props.selectedBeast.description}`}
                </Card.Text>
                <Card.Text>
                  {`Type of Beast: ${this.props.selectedBeast.keyword}`}
                </Card.Text>
                <Card.Text>
                  {`Horns: ${this.props.selectedBeast.horns}`}
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose} variant="secondary">Close</Button>
          </Modal.Footer>
      </Modal>
    )
  }
}
  

export default SelectedBeast;

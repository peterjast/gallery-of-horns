import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {



//   selectBeast = () => this.setState({ isSelected: this.state.numLikes  });

// //     const [show, setShow] = useState(false);
  
//   handleClose = () => this.setState({ isSelected: this.state.numLikes  });
// //     const handleShow = () => setShow(true);

//     <Button variant="primary" onClick={handleShow}>
//     Launch demo modal
//   </Button>
  closeModal = () => this.props.close();

  render(){
        return (
            <>
              <Modal show={this.props.isSelected} onHide={this.closeModal}>
                <Modal.Header closeButton>
                  <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.description}. A {this.props.keyword} has {this.props.horns}.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.closeModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )
  }
}

  

export default SelectedBeast;

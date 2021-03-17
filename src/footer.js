import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer mt-5 py-3 text-white-50 bg-dark">
        <div className="container">
          <span className="text-muted-center">Peter Staker &copy; 2021</span>
        </div>
      </footer>
    );
  }
}

export default Footer;

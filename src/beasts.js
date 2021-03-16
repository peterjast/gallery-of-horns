import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return(
      <div id="beasts">
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.description} title={this.props.title}></img>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;

import React from 'react';
import HornedBeasts from './beasts.js';

class Main extends React.Component {
  render() {
    return(
      <main role="main" class="flex-shrink-0 mt-5">
        <HornedBeasts />
      </main>
    );
  }
}

export default Main;

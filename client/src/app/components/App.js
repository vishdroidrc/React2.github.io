import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
 
    this.state = {
      songs : [],
    }
  }

render() {    
    return (
      <div className="App">
        <h1>Nyt Stuff!</h1>
      </div>
    );
  }
}
export default App;

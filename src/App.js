import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy some milk"},
      {id: 2, content: "do the dishes"}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Not my first react app</h1>
        <p>Reviewing Redux</p>
      </div>
    );
  }
}

export default App;

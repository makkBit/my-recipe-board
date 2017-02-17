import React, { Component } from 'react';
import Board from './Board.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      	
      	<h2> recipeBoard </h2>

      	<Board recipes={[]}/>

      </div>
    );
  }
}



export default App;

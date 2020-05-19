import React from 'react';
import logo from './logo.svg';
import './App.css';

import Bubble from './bubble.js'
import BubbleContainer from './bubbleContainer.js'

function App() {
  return (
    <div className="App">
      <h1>Bubble Wrap</h1>
      <p>Click on a bubble to pop it</p>
      <BubbleContainer />
    </div>
  );
}

export default App;

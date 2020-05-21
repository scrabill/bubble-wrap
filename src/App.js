import React from 'react';
import './App.css';

import BubbleContainer from './bubbleContainer.js'

function App() {
  return (
    <div className="App">
      <h1>Bubble Wrap</h1>
      <p>Click on a bubble to pop it</p>
      <BubbleContainer />

      <footer>
        <p><a href="https://github.com/scrabill/bubble-wrap" rel="noopener noreferrer" target="_blank">Bubble Wrap</a> By Shannon Crabill as part of <a href="https://shannoncrabill.com/blog/7-days-7-websites/" rel="noopener noreferrer" target="_blank">#7Days7Websites</a>.</p>
      </footer>
    </div>
  );
}

export default App;

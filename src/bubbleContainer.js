import React from 'react';

import Bubble from './bubble.js'

export default class BubbleContainer extends React.Component {



  render() {
    let rows = [];

    for (let i = 0; i < 96; i++) {
      rows.push(<Bubble key={i}/>)
    }

    return (
      <div className="container">{rows}</div>
    )
  }
}

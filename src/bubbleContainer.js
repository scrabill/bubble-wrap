import React from 'react';

import Bubble from './bubble.js'

export default class BubbleContainer extends React.Component {



  render() {
    let rows = [];

    for (let i = 0; i < 100; i++) {
      rows.push(<Bubble/>)
    }

    return (
      <div class="container">{rows}</div>
    )
  }
}

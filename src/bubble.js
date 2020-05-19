import React from 'react';

export default class Bubble extends React.Component {

  state = {
    popped: false,
  }

  handleClick = (e) => {
    
    if (this.state.popped == false) {
      this.setState({
        popped: true,
      })
    }

  }

  render() {

    if (this.state.popped === false) {
      return (
        <div class="bubble unpopped" onClick={(e) => this.handleClick(e)}></div>
      )
    } else {
      return (
        <div class="bubble popped" onClick={(e) => this.handleClick(e)}></div>
      )
    }

  }
}

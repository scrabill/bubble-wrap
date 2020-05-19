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
        <div className="bubble unpopped" onClick={(e) => this.handleClick(e)}></div>
      )
    } else {
      return (
        <div className="bubble popped" onClick={(e) => this.handleClick(e)}></div>
      )
    }

  }
}

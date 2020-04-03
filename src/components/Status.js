import React, { Component } from 'react'
import '../App.css';

class Status extends Component {
  state = {
    likes: 0
  }

handleClick = () => {
  console.log("I am handling the click")
  this.setState({
    likes: this.state.likes + 1
  })
}

  render() {
    const { likes } = this.state
    const { myText } = this.props
    return (
      <div className="status">
        <p>{ myText }</p>
        <button onClick={ this.handleClick }>
          { likes } Likes 
        </button>
      </div>
    )
  }
}

export default Status



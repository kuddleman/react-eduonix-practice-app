import React, { Component } from 'react'
import '../App.css';


class Status extends Component {
  state = {
    likes: 0
  }

handleClick = () => {
  
  this.setState({
    likes: this.state.likes + 1
  })
}

delete = () => {

  this.props.delete( this.props.index )
}

  render() {
    const { likes } = this.state
    const { myText } = this.props
    return (
      <div className="status">
        <div className="close" onClick={ this.delete }>X</div>
        <p>{ myText }</p>
        <button onClick={ this.handleClick }>
          { likes } Likes 
        </button>
      </div>
    )
  }
}

export default Status



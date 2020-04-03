import React, { Component } from 'react'
import '../App.css'

import StatusList from './StatusList'



class StatusAll extends Component {

  state = {
    statuses: [
      "I love Crocker",
      "I love Sleepy",
      "I love Waify",
      "I love Helefant"
    ],
    newStatusText: ''
  }

  handleOnChange = ev => {
    console.log("Here is the target value:", ev.target.value)
    
    this.setState({ newStatusText: ev.target.value })
  }

  handleSubmit = ev => {
    // prevent default behavior and to automatically refresh
    ev.preventDefault()
    //declare new value 'newStatuses'
    // set to newStatusText plus existing array of statuses
    let newStatusText = [ this.state.newStatusText, ...this.state.statuses ]
    // setState
    this.setState({
      newStatusText: '',
      statuses: newStatusText
    })
  }


  render() {
    return (
      <React.Fragment>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" 
                 placeholder="What is your status?"
                 value={ this.state.newStatusText }
                 onChange = { this.handleOnChange }
        
        />
          <button>Submit My Status!</button>
        </form>
        <div>
          <StatusList statuses={ this.state.statuses }/>
        </div>
      </React.Fragment>
    )
  }
}

export default StatusAll
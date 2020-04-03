import React, { Component } from 'react'
import '../App.css'
import Status from './Status'


class StatusList extends Component {

  

  render() {
       
    return (
        this.props.statuses.map( ( status, idx ) => (
          <Status 
            key={ idx } 
            index={ idx }
            myText={ status } 
            delete={ this.props.delete }
            />
        ) )
    )
  }
}

export default StatusList


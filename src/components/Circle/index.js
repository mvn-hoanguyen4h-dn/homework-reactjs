import React, { Component } from 'react'

class Circle extends Component {

  render() {
    return (
      <div>
        <div className="circle">
          {this.props.number}
        </div>
      </div>
    )
  }
}

export default Circle;

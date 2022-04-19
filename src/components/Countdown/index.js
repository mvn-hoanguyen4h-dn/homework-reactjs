import React, { Component } from 'react'
import Circle from '../Circle';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      isToggle: true
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleStart() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count - 1 })
    }, 1000)
  }

  handleStop() {
    clearInterval(this.timer)
    this.setState(prevState => ({
      count: prevState.count
    }))
  }

  handleToggle() {
    this.setState({
      isToggle: !this.state.isToggle
    })
    if (this.state.isToggle) {
      this.handleStop()
    } else {
      this.handleStart()
    }
  }

  componentDidMount() {
    this.handleStart()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count === 0) {
      clearInterval(this.timer)
      this.setState({
        count: prevState.count
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="item">
        {this.state.count > 0 && <button className="toggle" onClick={this.handleToggle}>
          {this.state.isToggle ? "Stop" : "Start"}
        </button>}
        <Circle number={this.state.count} />
      </div >
    )
  }
}

export default Countdown;

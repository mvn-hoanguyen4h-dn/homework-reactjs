import React, { Component } from 'react'
import "./App.css"
import About from './components/About';
import Home from './components/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "Home"
    }
    this.handleMovePage = this.handleMovePage.bind(this)
  }

  handleMovePage(event, pageName) {
    event.preventDefault()
    this.setState({ isActive: pageName })
  }

  render() {
    return (
      <div className="App">
        <ul className="btns">
          <li><a href="https://www.google.com/" onClick={(event) => this.handleMovePage(event, "Home")}>Home</a></li>
          <li><a href="https://www.google.com/" onClick={(event) => this.handleMovePage(event, "About")}>About</a></li>
        </ul>
        <div className="content">
          {this.state.isActive === "Home" && <Home />}
          {this.state.isActive === "About" && <About />}
        </div>
      </div>
    )
  }
}


import React, { Component } from 'react';
import Table from './Table';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      gender: "",
      nationality: "",
      info: "",
      agree: false,
      data: JSON.parse(localStorage.getItem("list")) || []
    }
  }

  handleChange(e) {
    const target = e.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const state = this.state

    const newItem = {
      fullname: state.fullname,
      email: state.email,
      password: state.password,
      gender: state.gender,
      nationality: state.nationality,
      info: state.info,
      agree: state.agree,
    }

    this.setState(prevState => ({
      data: [
        ...prevState.data,
        newItem
      ]
    }))
    e.target.reset()
  }

  componentDidUpdate() {
    localStorage.setItem("list", JSON.stringify(this.state.data))
  }

  render() {
    return (
      <div className="user-form">
        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
          <h2>User Information</h2>
          <div className="form-control">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              onChange={(e) => this.handleChange(e)} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => this.handleChange(e)} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => this.handleChange(e)} />
          </div>
          <div className="form-control">
            <label htmlFor="nationality">Nationality</label>
            <select
              name="nationality"
              id="nationality"
              onChange={(e) => this.handleChange(e)}>
              <option>Please choose your nationality</option>
              <option value="Vn">Vietnamese</option>
              <option value="Jp">Japanese</option>
              <option value="Kor">Korean</option>
              <option value="Malay">Malaysian</option>
              <option value="Fre">French</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="gender">Gender</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => this.handleChange(e)} /> Female
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => this.handleChange(e)} /> Male
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={(e) => this.handleChange(e)} /> Other
          </div>
          <div className="form-control">
            <label htmlFor="info">Describe yourself</label>
            <textarea
              id="info"
              name="info"
              onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="agree">Agree with the terms ?</label>
            <input
              type="checkbox"
              name="agree"
              checked={this.state.agree}
              id="agree"
              onChange={(e) => this.handleChange(e)} />
          </div>
          <button className="btn">Submit</button>
        </form>
        <div className="user-data">
          <h1>User Data</h1>
          <Table data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Form;

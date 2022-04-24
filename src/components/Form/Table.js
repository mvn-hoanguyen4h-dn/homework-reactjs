import React, { Component } from 'react';
import Item from './Item';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(value) {
    if (window.confirm("Are you sure to delete this item?")) {
      this.setState(prevState => {
        const newData = [...prevState.data]
        newData.splice(value, 1)

        this.setState({ data: newData })
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem("list", JSON.stringify(this.state.data))
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Nationality</th>
            <th>Gender</th>
            <th>Information</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item, index) => (
            <Item
              key={index}
              id={index}
              fullname={item.fullname}
              email={item.email}
              password={item.password}
              nationality={item.nationality}
              gender={item.gender}
              info={item.info}
              handleDelete={this.handleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }

}

export default Table;

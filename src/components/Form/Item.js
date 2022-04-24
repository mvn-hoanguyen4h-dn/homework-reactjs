import React, { Component } from 'react'

export default class Item extends Component {

  handleLog(index) {
    const value = index

    this.props.handleDelete(value)
  }

  render() {
    const { fullname, email, password, nationality, gender, info, id } = this.props
    return (
      <>
        <tbody>
          <tr>
            <td>{fullname}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{nationality}</td>
            <td>{gender}</td>
            <td>{info}</td>
            <td>
              <i class="fa-solid fa-trash" onClick={() => this.handleLog(id)} ></i>
            </td>
          </tr>
        </tbody>
      </>
    )
  }
}

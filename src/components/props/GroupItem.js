import React, { Component } from 'react';

class GroupItem extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <div className="group-content">
        <div className="group-icon">
          <i className="fa-solid fa-envelope" />
        </div>
        <h3 className="content-title">{title}</h3>
        <p>{desc}</p>
      </div>
    );
  }
}

export default GroupItem;

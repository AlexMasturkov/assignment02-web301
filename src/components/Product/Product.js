import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="row m-0">
          <div className="col-8">{this.props.product}</div>
          <div className="col-2 offset-1">{this.props.amount}</div>
        </div>
        <hr />
      </div>
    );
  }
}

import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      anotherStateProperty: false,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  handleChangeValue = (e) => this.setState({ value: e.target.value });

  increment() {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }
  decrement() {
    const { count } = this.state;
    if (count > 0) {
      this.setState({
        count: count - 1,
      });
    }
  }
  clearInput() {
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div className="counter col-12">
        <div className="arrow up " onClick={this.increment}></div>
        <p className="count " id="count">
          {this.state.count}
        </p>
        <div className="arrow down " onClick={this.decrement}></div>
      </div>
    );
  }
}
export default Counter;

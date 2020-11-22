import './App.css';

import React, { Component } from 'react';
import Product from './components/Product/Product';
import Counter from './components/Counter/Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.counter = React.createRef(); //get access to Counter functions
    this.state = { isToggleOn: true };
    this.productId = 0;
    this.amount = '';

    this.state = {
      postArray: [],
      productArray: [],
      product: '',
      message: '',
      classMessage: '',
    };
  }

  setProduct = (element) => {
    this.setState({
      product: element.target.value,
    });
  };

  setMessage = (element) => {
    this.setState({
      message: element + ' was added successful!',
      classMessage: 'alert alert-success alert-dismissible fade show',
    });
  };

  disableMessage = () => {
    const currentMessage = document.getElementById('myMessage');
    currentMessage.style.display = 'none';
  };

  enableMessage = () => {
    const currentMessage = document.getElementById('myMessage');
    currentMessage.style.display = 'block';
    setTimeout(function () {
      currentMessage.style.display = 'none';
    }, 5000);
  };

  addProduct = () => {
    this.productId = this.productId + 1;
    const copyProductArray = Object.assign([], this.state.productArray);
    copyProductArray.push({
      id: this.productId,
      amount: document.getElementById('count').innerHTML,
      product: this.state.product,
    });
    this.setMessage(this.state.product);
    this.enableMessage();
    this.setState({
      productArray: copyProductArray,
      product: '',
      amount: 0,
    });
    this.count = 0;
    this.amount = 0;
    const productInput = document.getElementById('product');
    if (productInput !== '') productInput.value = '';
    this.counter.current.clearInput(); //we call function from Counter.js to clean Input
  };

  render() {
    return (
      <div className="container bg-light mt-4">
        <header className="base-color text-center">
          <h1>COUNTER APP</h1>
        </header>
        <div className="row col-12 pb-3 pt-3">
          <div className="row col-12 col-md-6 ml-2">
            <div className="col-12 ml-2 bg-white shadow form-control counter">
              <h2 className="col-1 offset-4">
                <Counter ref={this.counter} />
              </h2>
            </div>
            <div className="col-12 ml-2 bg-light shadow form-control mt-2 mb-2 my-container">
              <div className="row mt-3">
                <div className="col-8">
                  <input
                    type="text"
                    className=" offset-1 form-control"
                    name="product"
                    id="product"
                    placeholder="Product name"
                    onChange={this.setProduct}
                  />
                </div>
                <div className="col-3 ">
                  <button
                    className="btn btn-primary ml-1 "
                    onClick={this.addProduct}
                    disabled={this.state.product.length < 1}
                  >
                    {' '}
                    ADD{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row col-12 col-md-6  ml-3">
            <div className="col-12 form-control shadow counter m-0 p-0 ">
              <div className=" bg-secondary  text-light p-0 pt-2 rounded">
                <div className="row m-0 pt-2">
                  <div className="col-8">Dessert (100g serving)</div>
                  <div className="col-3">Calories</div>
                </div>
                <hr />
              </div>
              <div className="scrolling">
                {this.state.productArray.map((p) => {
                  return (
                    <Product
                      key={p.id}
                      id={p.id}
                      amount={p.amount}
                      product={p.product}
                    />
                  );
                })}
              </div>
            </div>
            <div
              className="col-12 m-0 p-0"
              id="myMessage"
              style={{ display: 'none' }}
            >
              <div className={this.state.classMessage} role="alert">
                <strong>{this.state.message}</strong>
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true" onClick={this.disableMessage}>
                    &times;
                  </span>
                </button>
              </div>
              <div className="row mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

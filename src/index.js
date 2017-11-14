/* eslint-disable */
import React, { Component } from 'react';
import { compose } from 'recompose';
import ReactDOM from 'react-dom';
import Counter from './RxExample';

const TestComponent = () => (
  <div>
    <h1>test</h1>
  </div>
)

const HOC = (...observables) => Composed => class extends Component {
  constructor(props) {
    super(props);

    console.log('props: ', props, 'obs: ', observables);
  }

  render({ first } = this.props) {
    return (
      <p>in training</p>
    );
  }
}

const Test = HOC({
  first: 'first param',
  second: 'second param'
})(TestComponent)




ReactDOM.render(
  <Counter test="this" />,
  document.getElementById('root')
);
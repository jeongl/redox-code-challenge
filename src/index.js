/* eslint-disable */
import React, { Component } from 'react';
import Rx from 'rxjs';
import ReactDOM from 'react-dom';

const HOC = (
  observables, getObservables
) => BaseComponent => class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: null
    }

    this.observables = Object.entries(observables).map(item => ({
      name: item[0],
      observable: item[1]
    }));
    
    this.combinedObservables = getObservables.apply(this,
      this.observables.map(item => item.observable)
    );
  }

  componentDidMount() {
    this.combinedObservables.subscribe((latestValues) => {
      this.setState({
        values: latestValues.map((item, i) => ({
          name: this.observables[i].name,
          value: item
        }))
      });
    });
  }

  render() {
    return (
      <div key="test">
        <BaseComponent values={this.state.values} />
      </div>
    );
  }
};

const MyComponent = ({ values }) => (
  <div>
    {values && values.map(item => (
      <div>
        <p>name: {item.name}</p>
        <p>value: {item.value}</p>
      </div>
    ))}
  </div>
);

const Test = HOC({
  firstInput: Rx.Observable,
  secondInput: Rx.Observable
}, (...observables) =>
  Rx.Observable.combineLatest(observables)
)(MyComponent);


ReactDOM.render(
  <Test test="this" />,
  document.getElementById('root')
);

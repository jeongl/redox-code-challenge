/* eslint-disable */
import React from 'react';
import Rx from 'rxjs';
import { componentFromStreamWithConfig, createEventHandler } from 'recompose';
import rxjsConfig from 'recompose/rxjsObservableConfig'
const componentFromStream = componentFromStreamWithConfig(rxjsConfig)

const Counter = componentFromStream(props$ => {
  const test = Rx;
  // debugger;
  const { handler: increment, stream: incrementt$ } = createEventHandler()
  const { handler: decrement, stream: decrement$ } = createEventHandler()
  const count$ = Rx.Observable.merge(
      Rx.Observable.from(incrementt$).mapTo(1),
      Rx.Observable.from(decrement$).mapTo(-1)
    )
    .startWith(0)
    .scan((count, n) => count + n, 0)

  return props$.combineLatest(count$, (props, count) => {
    console.log('props: ', props);
    return(
      <div {...props}>
        Count: {count}
        <button onClick={(evt) => {
          console.log('evt: ', evt, increment);
          return increment
        }}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  })
});

export default Counter;